export interface IProps {
    variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight?: string;
    color?: string;
    align?: string;
    transform?: string;
    children?: React.ReactNode | string;
  }
  