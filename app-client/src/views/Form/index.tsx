import React from 'react';
import { IForm, IFormField } from './form-types';
import TextField from '@material-ui/core/TextField';

export const Form: React.FC<IForm> = (props: IForm) => {
  const { fields } = props;

  React.useEffect(() => {
    setForm(fields)
  }, [fields]);

  const [form, setForm] = React.useState<IFormField[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const input = target.getAttribute('id') || '';
    const { value } = target;

    const formCopy = form.map((field) => {
      let returnValue = {...field};
      if (field.key === input) {
        returnValue.value = value;
      }
      console.log(returnValue);
      return returnValue;
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
                />
              </div>
            );
        })}
      </form>
    );
};
