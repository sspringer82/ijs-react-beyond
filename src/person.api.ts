import Person from './Person';

const url = 'http://localhost:3001/users';

export async function getAllPersons(): Promise<Person[]> {
  const response = await fetch(url);
  if (response.ok === false) {
    throw new Error('something went wrong');
  }
  return response.json();
}

export async function removePerson(id: number) {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  if (response.ok === false) {
    throw new Error('something went wrong');
  }
  return response.json();
}
