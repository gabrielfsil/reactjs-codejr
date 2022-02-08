import React from "react"


interface ImageProductProps{
    title: string;
    image: string;
}

export function ImageProduct(props: ImageProductProps) {
  return <img className="image-product" src={props.image} alt={props.title} />;
}
