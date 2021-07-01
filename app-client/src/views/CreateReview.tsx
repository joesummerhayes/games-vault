import React from 'react';
import {maxTen, required} from '../utils/validation';
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
        label: 'Title',
        fullWidth: true
      },
      {
        key: 'synopsis',
        valueType: Valuetype.string,
        validators: [required],
        helperText: `Don't forget to provide a review synopsis`,
        value: '',
        placeholder: 'Synopsis',
        label: 'Synopsis',
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
        label: 'Review',
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
        label: 'Images',
        placeholder: 'Add urls to images seperated by a commar',
        multiline: true,
        required: true,
        fullWidth: true,
        rows: 5
      },
      {
        key: 'score',
        label: 'Score',
        helperText: `Don't forget to provide a rating out of 10!`,
        valueType: Valuetype.number,
        validators: [required, maxTen],
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