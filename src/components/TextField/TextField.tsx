import { IProps } from "./IProps";
import { H1, H2, H3, H4, H5, H6, P } from "./styles";

const TextField = ({ children, variant, weight, color, transform, align, className }: IProps) => {
  const Component =
    variant === "h1"
      ? H1
      : variant === "h2"
      ? H2
      : variant === "h3"
      ? H3
      : variant === "h4"
      ? H4
      : variant === "h5"
      ? H5
      : variant === "h6"
      ? H6
      : P;

  return (
    <Component variant={variant} weight={weight} color={color} transform={transform} align={align} className={className}>
      {children}
    </Component>
  );
};

export default TextField;
