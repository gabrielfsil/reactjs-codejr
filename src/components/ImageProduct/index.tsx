import { Image } from "@chakra-ui/react";
import React from "react"


interface ImageProductProps{
    title: string;
    image: string;
}

export function ImageProduct(props: ImageProductProps) {
  return <Image height="100%" objectFit="cover"  src={props.image} alt={props.title} />;
}
