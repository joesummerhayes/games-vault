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
        helperText: 'must provide a game title',
        required: true,
        placeholder: 'title',
        fullWidth: true
      },
      {
        key: 'synopsis',
        valueType: Valuetype.string,
        validators: [required],
        value: '',
        placeholder: 'synopsis',
        multiline: true,
        required: true,
        fullWidth: true,
        rows: 5
      },
      {
        key: 'score',
        valueType: Valuetype.number,
        validators: [],
        value: '',
        required: true,
        placeholder: 'score out of 10',
      }
    ],
    onSubmit: () => console.log('submit')
  }

 

  return (
    <Form { ...form } />
  );
}