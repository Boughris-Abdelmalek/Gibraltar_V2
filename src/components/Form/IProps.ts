export interface FormInputProps {
  label: string;
  type: string;
  name: string;
}

export interface FormValues {
  [key: string]: string | boolean;
}

export interface FormProps {
  inputs: FormInputProps[];
  onSubmit: (values: FormValues) => void;
  className?: string;
}
