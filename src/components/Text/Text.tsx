import { FC } from "react";

interface IText {
  label: string;
}

export const Text: FC<IText> = ({ label }) => {
  return <h1>{label}</h1>;
};
