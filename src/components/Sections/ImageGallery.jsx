import GalleryBody from "./GalleryBody";
import Header from "./Header";

export default function ImageGallery() {
  return (
    <section className="p-4 md:p-8">
      {/* container start */}
      <div className="max-w-[1440px] mx-auto">
        {/* header start */}
        <Header />
        {/* header end */}
        {/* gallery start */}
        <GalleryBody />
        {/* gallery end */}
      </div>
      {/* container end */}
    </section>
  );
}
