import React from 'react';
import Person from './Person';
import { Link } from 'react-router-dom';

type Params = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Params> = ({ person, onDelete }) => {
  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.birthdate}</td>
      <td>{person.street}</td>
      <td>{person.city}</td>
      <td>{person.zipCode}</td>
      <td>
        <button onClick={() => onDelete(person.id)}>delete</button>
      </td>
      <td>
        <Link to={`/edit/${person.id}`}>edit</Link>
      </td>
    </tr>
  );
};

export default ListItem;
