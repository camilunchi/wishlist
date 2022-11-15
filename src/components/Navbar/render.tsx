import { FC } from "react";
import { Link } from "../Link";

interface ILinkRender {
  url: string;
  label: string;
}

export const LinkRender: FC<ILinkRender> = ({ url, label }) => {
  return <Link url={url}>{label}</Link>;
};
