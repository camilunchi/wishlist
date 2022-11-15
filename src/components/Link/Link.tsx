import { FC } from "react";
import './style.css';

interface ILink {
  url: string
  children: string
}

export const Link: FC<ILink> = ({ url, children }) => {
  return <a href={url} target='_blank' rel="noreferrer">{children}</a>
};
