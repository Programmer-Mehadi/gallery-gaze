/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ImageCard from "../Elements/ImageCard/ImageCard";

export default function GalleryBody() {
  const { imagesList } = useSelector((state) => state.imageGallery);
  return (
    <div className="bg-white rounded-b-[4px]  px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {imagesList?.map((image, index) => {
          return (
            <div
              key={image.id}
              className={`${
                index === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"
              } image_card border border-[#d8dadc] rounded-[4px] overflow-hidden relative top-0 left-0 shadow-sm cursor-pointer`}
            >
              <ImageCard key={image.id} image={image} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
