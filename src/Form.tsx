import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { InputPerson } from './Person';
import { useNavigate, useParams } from 'react-router-dom';
import usePerson from './usePerson';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const initialPerson: InputPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipCode: '',
};

const schema = yup
  .object({
    id: yup.number(),
    firstName: yup.string(),
    lastName: yup.string(),
    birthdate: yup.string(),
    street: yup.string(),
    city: yup.string(),
    zipCode: yup.string().max(5).required(),
  })
  .required();

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputPerson>({
    resolver: yupResolver(schema) as any,
    mode: 'onChange',
  });

  const { handleSave } = usePerson();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/users/${id}`)
        .then((response) => response.json())
        .then((data) => reset(data));
    }
  }, [id]);

  function onSubmit(person: InputPerson) {
    handleSave(person);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          first name: <input type="text" {...register('firstName')} />
        </label>
      </div>
      <div>
        <label>
          last name: <input type="text" {...register('lastName')} />
        </label>
      </div>
      <div>
        <label>
          birth date: <input type="text" {...register('birthdate')} />
        </label>
      </div>
      <div>
        <label>
          street: <input type="text" {...register('street')} />
        </label>
      </div>
      <div>
        <label>
          city: <input type="text" {...register('city')} />
        </label>
      </div>
      <div>
        <label>
          zip code: <input type="text" {...register('zipCode')} />
        </label>
        <div>{errors.zipCode && errors.zipCode.message}</div>
      </div>
      <button type="submit">save</button>
      <button type="reset" onClick={() => navigate('/')}>
        cancel
      </button>
    </form>
  );
};

export default Form;
