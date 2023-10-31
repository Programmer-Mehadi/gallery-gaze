import { useState } from "react";
import GalleryBody from "./GalleryBody";
import Header from "./Header";

export default function ImageGallery() {
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <section className="p-8">
      <div className="max-w-[1440px] mx-auto">
        <Header selectedImages={selectedImages} />
        <GalleryBody />
      </div>
    </section>
  );
}
