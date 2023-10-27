import React from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllPersons, removePerson } from './person.api';

const List: React.FC = () => {
  const navigate = useNavigate();

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
    return <div>...loading data</div>;
  }

  if (isError) {
    return <div>Something horrible happened!</div>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth date</th>
            <th>street</th>
            <th>city</th>
            <th>zip code</th>
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
