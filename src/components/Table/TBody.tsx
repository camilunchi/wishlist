import { FC } from "react";
import { WishList } from "../../data";
import { DataRender } from "./Data-Render";

export const TBody: FC = () => {
  return (
    <tbody>
      {WishList.map(({ product, price, link }) => (
        <DataRender key={product} product={product} price={price} link={link} />
      ))}
    </tbody>
  );
};
