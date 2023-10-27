import React from 'react';
import Person from './Person';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(person.id)}
        >
          Delete
        </Button>
      </td>
      <td>
        <Link to={`/edit/${person.id}`}>edit</Link>
      </td>
    </tr>
  );
};

export default ListItem;
