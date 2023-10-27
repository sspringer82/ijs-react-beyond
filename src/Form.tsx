import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { InputPerson } from './Person';
import { useNavigate, useParams } from 'react-router-dom';
import usePerson from './usePerson';

const initialPerson: InputPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipCode: '',
};

const Form: React.FC = () => {
  const [person, setPerson] = useState<InputPerson>(initialPerson);
  const { handleSave } = usePerson();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/users/${id}`)
        .then((response) => response.json())
        .then((data) => setPerson(data));
    }
  }, [id]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSave(person);
    setPerson(initialPerson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        first name:{' '}
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={person.firstName}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        last name:{' '}
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={person.lastName}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        birth date:{' '}
        <input
          type="text"
          name="birthdate"
          id="birthdate"
          value={person.birthdate}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        street:{' '}
        <input
          type="text"
          name="street"
          id="street"
          value={person.street}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        city:{' '}
        <input
          type="text"
          name="city"
          id="city"
          value={person.city}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        zip code:{' '}
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={person.zipCode}
          onChange={handleChange}
        />{' '}
      </label>
      <button type="submit">save</button>
      <button type="reset" onClick={() => navigate('/')}>
        cancel
      </button>
    </form>
  );
};

export default Form;
