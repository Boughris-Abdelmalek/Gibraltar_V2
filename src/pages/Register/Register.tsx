import React from "react";
import Form from "../../components/Form/Form";
import { Container } from "./styles";
import TextField from "../../components/TextField/TextField";

const RegisterForm: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const formFields = [
    { name: "firstName", label: "First name", type: "text" },
    { name: "lastName", label: "Last name", type: "text" },
    { name: "birthday", label: "Birthday", type: "date" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <Container>
      <TextField variant="h3" transform="capitalize" className="title">register</TextField>
      <Form inputs={formFields} onSubmit={handleSubmit} className="form-container" />
    </Container>
  );
};

export default RegisterForm;
