import React from "react";
import { ImageProduct } from "../ImageProduct";

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
}

export function Product(props: ProductProps) {
  return (
    <div className="content-product">
      <ImageProduct title={props.title} image={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <b>R${props.price}</b>
      {props.discount && <small>{props.discount}% de desconto à vista</small>}
    </div>
  );
}
