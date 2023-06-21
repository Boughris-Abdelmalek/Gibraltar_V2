export interface IProps {
  variant: "primary" | "secondary";
  type?: "button" | "submit"
  onClick?: () => void;
  children: React.ReactNode;
}
