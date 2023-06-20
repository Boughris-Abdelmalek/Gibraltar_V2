import React from "react";

import { IconButton } from "./styles";
import { IProps } from "./IProps";

const Icon: React.FC<IProps> = ({ icon: IconComponent, className }) => {
  return <IconButton className={className}>{IconComponent}</IconButton>;
};

export default Icon;
