import React from 'react';
import { Form } from './Form';
import {IForm, Valuetype} from './Form/form-types';

export const CreateReview: React.FC = () => {
  const form: IForm = {
    fields: [
      {
        key: 'name',
        valueType: Valuetype.string,
        validators: [],
        value: ''
      },
      {
        key: 'game',
        valueType: Valuetype.string,
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