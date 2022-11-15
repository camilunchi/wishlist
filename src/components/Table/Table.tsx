import { FC } from "react";
import "./style.css";
import { TBody } from "./TBody";
import { THead } from "./THead";

export const Table: FC = () => {
  return (
    <table className="table">
      <THead />
      <TBody />
    </table>
  );
};
