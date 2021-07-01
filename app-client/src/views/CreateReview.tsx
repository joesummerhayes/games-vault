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
        helperText: `Don't forget to provide a title`,
        required: true,
        placeholder: 'Title',
        fullWidth: true
      },
      {
        key: 'synopsis',
        valueType: Valuetype.string,
        validators: [required],
        helperText: `Don't forget to provide a review synopsis`,
        value: '',
        placeholder: 'Synopsis',
        multiline: true,
        required: true,
        fullWidth: true,
        rows: 3
      },
      {
        key: 'review',
        valueType: Valuetype.string,
        validators: [required],
        helperText: `Don't forget to write your main review`,
        value: '',
        placeholder: 'Review',
        multiline: true,
        required: true,
        fullWidth: true,
        rows: 5
      },
      {
        key: 'images',
        valueType: Valuetype.string,
        validators: [required],
        helperText: `Add urls to images seperated by a commar`,
        value: '',
        placeholder: 'Add urls to images seperated by a commar',
        multiline: true,
        required: true,
        fullWidth: true,
        rows: 5
      },
      {
        key: 'score',
        helperText: `Don't forget to provide a rating out of 10!`,
        valueType: Valuetype.number,
        validators: [],
        value: '',
        required: true,
        placeholder: 'Score out of 10',
      }
    ],
    onSubmit: () => console.log('submit')
  }

 

  return (
    <Form { ...form } />
  );
}