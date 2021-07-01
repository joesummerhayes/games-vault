import React from 'react';
import {required} from '../utils/validation';
import { Form } from './Form';
import {IForm, Valuetype} from './Form/form-types';

export const CreateReview: React.FC = () => {
  const form: IForm = {
    fields: [
      {
        key: 'title',
        valueType: Valuetype.string,
        validators: [required],
        value: '',
        helperText: 'must provide a name',
        required: true,
        placeholder: 'name'
      },
      {
        key: 'game',
        valueType: Valuetype.string,
        validators: [],
        value: '',
        placeholder: 'game'
      },
      {
        key: 'score',
        valueType: Valuetype.number,
        validators: [],
        value: '',
        placeholder: 'score'
      }
    ],
    onSubmit: () => console.log('submit')
  }

 

  return (
    <Form { ...form } />
  );
}