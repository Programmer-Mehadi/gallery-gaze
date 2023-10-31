import { useState } from "react";
import GalleryBody from "./GalleryBody";
import Header from "./Header";

export default function ImageGallery() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesList, setImagesList] = useState([
    {
      id: 1,
      path: "./images/image-1.webp",
    },
    {
      id: 2,
      path: "./images/image-2.webp",
    },
    {
      id: 3,
      path: "./images/image-3.webp",
    },
    {
      id: 4,
      path: "./images/image-4.webp",
    },
    {
      id: 5,
      path: "./images/image-5.webp",
    },
    {
      id: 6,
      path: "./images/image-6.webp",
    },
    {
      id: 7,
      path: "./images/image-7.webp",
    },
    {
      id: 8,
      path: "./images/image-8.webp",
    },
    {
      id: 9,
      path: "./images/image-9.webp",
    },
    {
      id: 10,
      path: "./images/image-10.jpeg",
    },
    {
      id: 11,
      path: "./images/image-11.jpeg",
    },
  ]);
  return (
    <section className="p-8">
      <div className="max-w-[1440px] mx-auto shadow">
        <Header selectedImages={selectedImages} />
        <GalleryBody imagesList={imagesList} />
      </div>
    </section>
  );
}
