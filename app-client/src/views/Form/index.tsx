import React from 'react';
import { IForm, IFormField } from './form-types';
import TextField from '@material-ui/core/TextField';

export const Form: React.FC<IForm> = (props: IForm) => {
  const { fields } = props;

  React.useEffect(() => {
    setForm(fields)
  }, [fields]);

  const [form, setForm] = React.useState<IFormField[]>([])
  console.log(form)

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
        isValid = isValid && validator(activeField.value);
      });
      // update valid status
      activeField.valid = isValid;

      // update value
      activeField.value = value;
      return activeField;
    });

    setForm(formCopy);
  }

    return (
      <form>
        {form.map(({ key, value, valueType, validators, touched, valid, placeholder, required }) => {
            return (
              <div>
                <TextField
                  id={key}
                  variant="outlined"
                  placeholder={key}
                  value={value}
                  required={required}
                  fullWidth
                  onChange={handleInputChange}
                  onBlur={onBlur}
                />
              </div>
            );
        })}
      </form>
    );
};
