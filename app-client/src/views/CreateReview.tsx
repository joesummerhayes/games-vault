import React from 'react';
import {required} from '../utils/validation';
import { Form } from './Form';
import {IForm, Valuetype} from './Form/form-types';

export const CreateReview: React.FC = () => {
  const form: IForm = {
    fields: [
      {
        key: 'name',
        valueType: Valuetype.string,
        validators: [required],
        value: '',
        helperText: 'must provide a name',
        required: true
      },
      {
        key: 'game',
        valueType: Valuetype.string,
        validators: [],
        value: ''
      },
      {
        key: 'score',
        valueType: Valuetype.number,
        validators: [],
        value: ''
      }
    ],
    onSubmit: () => console.log('submit')
  }
  return (
    <Form fields={form.fields} onSubmit={form.onSubmit} />
  );
}