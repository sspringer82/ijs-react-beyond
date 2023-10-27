// import React from 'react';
import Person from './Person';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

type Params = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Params> = ({ person, onDelete }) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td data-testid="firstname">{person.firstName}</td>
      <td data-testid="lastname">{person.lastName}</td>
      <td>
        {t('birthDateDate', { value: new Date(person.birthdate).getTime() })}
      </td>
      <td>{person.street}</td>
      <td>{person.city}</td>
      <td>{person.zipCode}</td>
      <td>
        <Button
          data-testid="delete-btn"
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
