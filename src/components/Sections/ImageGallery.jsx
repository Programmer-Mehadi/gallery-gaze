import GalleryBody from "./GalleryBody";
import Header from "./Header";

export default function ImageGallery() {
  return (
    <section className="p-4 md:p-8">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <GalleryBody />
      </div>
    </section>
  );
}
