import React from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllPersons, removePerson } from './person.api';
import { useTranslation } from 'react-i18next';

const List: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    data: persons,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['persons'],
    queryFn: getAllPersons,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: removePerson,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['persons'] });
    },
  });

  if (isLoading) {
    return <div>{t('LOADING')}</div>;
  }

  if (isError) {
    return <div>{t('ERROR')}</div>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{t('FIRSTNAME')}</th>
            <th>{t('LASTNAME')}</th>
            <th>{t('BIRTHDATE')}</th>
            <th>{t('STREET')}</th>
            <th>{t('CITY')}</th>
            <th>{t('ZIPCODE')}</th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((person) => (
            <ListItem
              key={person.id}
              person={person}
              onDelete={() => mutation.mutate(person.id)}
            />
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate('/create');
        }}
        style={{
          position: 'sticky',
          bottom: 20,
          left: '90%',
        }}
      >
        new
      </button>
    </>
  );
};

export default List;
