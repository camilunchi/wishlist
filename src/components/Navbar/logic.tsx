import { Nav } from "../../data";
import { FC } from "react";
import { LinkRender } from "./render";
import "./style.css";

export const Navbar: FC = () => {
  return (
    <header className="buttons-box">
      {Nav.map(({ url, label }) => (
        <LinkRender key={label} url={url} label={label} />
      ))}
    </header>
  );
};
