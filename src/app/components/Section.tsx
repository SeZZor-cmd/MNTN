"use client";

import { Image } from "./Image"; // Import the Image component
import { imageDetails } from "../data/Details"; // Import image data
import Link from 'next/link';

export default function Section() {
  return (
    <div>   
      {imageDetails.map(({ id, path, description, title, subtitle }) => (
        <div key={id}>
          <Image
            id={id}
            imagePath={path}
            description={description}
            title={title}
            subtitle={subtitle}
          />
        </div>
      ))}
    </div>
  );
}
