import React, { useState } from "react";
import { FormValues, FormProps } from "./IProps";
import { FormContainer, FormInputContainer, FormInput } from "./styles";
import Button from "../Button/Button";

const Form: React.FC<FormProps> = ({ inputs, onSubmit, className }) => {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const inputValue = type === "checkbox" ? checked : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <FormContainer onSubmit={handleSubmit} className={className}>
      {inputs.map((input) => (
        <FormInputContainer key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          {input.type === "checkbox" ? (
            <FormInput
              type={input.type}
              name={input.name}
              id={input.name}
              onChange={handleChange}
              checked={formValues[input.name] as boolean}
            />
          ) : (
            <FormInput
              type={input.type}
              name={input.name}
              id={input.name}
              onChange={handleChange}
              value={formValues[input.name] as string}
            />
          )}
        </FormInputContainer>
      ))}
      <Button variant="primary" type="submit">submit</Button>
    </FormContainer>
  );
};

export default Form;
