// components/Demo.tsx
"use client";
import { Image } from "./Image"; // Import the Image component
import { imageDetails } from "../data/Details"; // Import image data
import React from "react";

export default function Demo() {

  return (
    <>
      {imageDetails.map(({ id, path, description, title , subtitle }) => (
        <Image key={id} id={id} imagePath={path} description={description} title={title} subtitle={subtitle} />
      ))}
    </>
  );
}
