import { useEffect } from 'react';
import { InputPerson } from './Person';
import { usePersonContext } from './PersonProvider';
import { useNavigate } from 'react-router-dom';

const url = `${import.meta.env.VITE_APP_BACKEND_URL}/users`;

export default function usePerson(clearAndHideForm?: () => void) {
  const [persons, setPersons] = usePersonContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  function handleDelete(id: number): void {
    fetch(`${url}/${id}`, { method: 'DELETE' }).then(() => {
      setPersons((prevPersons) =>
        prevPersons?.filter((person) => person.id !== id)
      );
    });
  }

  function handleSave(person: InputPerson) {
    const method = person.id ? 'PUT' : 'POST';
    const saveUrl = person.id ? `${url}/${person.id}` : url;
    fetch(saveUrl, {
      method,
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setPersons((prevPersons) => {
          if (person.id) {
            return prevPersons.map((prevPerson) => {
              if (prevPerson.id === person.id) {
                return person;
              }
              return prevPerson;
            });
          }
          return [...prevPersons, data];
        });
        navigate('/');
      });
  }

  return { persons, handleSave, handleDelete };
}
