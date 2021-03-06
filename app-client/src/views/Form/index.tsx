import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { IForm, IFormField, Valuetype } from './form-types';
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import Button from '../../components/Button';
import { validateForm } from './utils';

import { AppState } from '../../app-state';

export const Form: React.FC<IForm> = (props: IForm) => {
  const { fields, onSubmit } = props;

  React.useEffect(() => {
    setForm(fields)
  }, [fields]);

  const [form, setForm] = React.useState<IFormField[]>([])
  const [formReady, changeReadyState] = React.useState<boolean>(false);
  const userId = useSelector((state: AppState) => state?.user?.details?._id);
  const dispatch = useDispatch();

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!formReady) {
      console.error('Form is in an incomplete state');
    };
    const serialisedForm = form.reduce((acc, cur) => {
      const { key, value } = cur;
      return {
        ...acc,
        [key]: value
      };
    }, {
      userId
    })
    console.log('!!!!', serialisedForm);
    dispatch(onSubmit(serialisedForm));
  }

  const onBlur = (event: React.FocusEvent) => {
    const { target: { id } } = event;
    const formCopy = form.map((field) => {
      if (field.key !== id) return field;
      const activeField = {...field};
      activeField.touched = true;
      return activeField;
    })
    setForm(formCopy);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const input = target.getAttribute('id') || '';
    const { value } = target;

    const formCopy = form.map((field) => {
      if (field.key !== input) return field;
      let activeField = {...field};
      // does it pass validation?
      let isValid = true;
      activeField.validators.map((validator): void => {
        isValid = isValid && validator(value);
      });
      // update valid status
      activeField.valid = isValid;

      // update value
      activeField.value = value;
      return activeField;
    });

    // set form as ready if all required fields are marked as valid
    const readyCheck = validateForm(formCopy);
    readyCheck ? changeReadyState(true) : changeReadyState(false);
    
    setForm(formCopy);
  }

  const handleDropDownChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: React.ReactNode) => {
    const { target } = event;
    const { value, name } = target;

    const formCopy = form.map((field) => {
      if (field.key !== name) return field;
      let activeField = {...field};
      activeField.value = value;
      activeField.valid = true;
      return activeField;
    });

    const readyCheck = validateForm(formCopy);
    readyCheck ? changeReadyState(true) : changeReadyState(false);
    setForm(formCopy);
  }

    return (
      <form>
        {form.map(({ key, value, touched, valid, placeholder, required, helperText, fullWidth, multiline, rows, valueType, label, selection }) => {
          if (selection) {
            return (
              <div className="mt3 mb3">
                <FormControl variant="filled" className="w5">
                  <InputLabel id={key}>{placeholder}</InputLabel>
                  <Select labelId={key} name={key} onChange={handleDropDownChange} value={value}>
                    {selection.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
                  </Select>
                </FormControl>
              </div>
            );
          }
            return (
              <div className="mt3 mb3">
                <TextField
                  id={key}
                  variant="outlined"
                  placeholder={placeholder}
                  value={value}
                  required={required}
                  fullWidth={fullWidth}
                  onChange={handleInputChange}
                  onBlur={onBlur}
                  error={touched && !valid}
                  helperText={touched && !valid ? helperText : ''}
                  multiline={multiline}
                  rows={rows}
                  type={Valuetype[valueType]}
                  label={label}
                  InputProps={{style: {minHeight: '3.5rem'}}}
                />
              </div>
            );
        })}
        <Button text="submit" clickHandler={submitForm} disabled={!formReady} />
      </form>
    );
};
