import { FC } from "react";
import { Link } from "../Link";
import { CurrencyMoney } from "../../helpers";

interface IDataRender {
  product: string;
  price: number;
  link: string;
}

export const DataRender: FC<IDataRender> = ({ product, price, link }) => {
  return (
    <>
      <tr>
        <td data-label="Product">{product}</td>
        <td data-label="Price">{CurrencyMoney(price)}</td>
        <td data-label="Link">
          <Link url={link}>Link</Link>
        </td>
      </tr>
    </>
  );
};
