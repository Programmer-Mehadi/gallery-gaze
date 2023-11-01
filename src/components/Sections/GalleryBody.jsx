/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ImageCard from "../Elements/ImageCard/ImageCard";

export default function GalleryBody() {
  const { imagesList } = useSelector((state) => state.imageGallery);
  return (
    <div className="bg-white rounded-b-lg px-4 md:px-8 py-14 shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {imagesList?.map((image, index) => {
          return (
            <div
              key={image.id}
              className={`${
                index === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"
              } image_card border-2 border-[#d8dadc] rounded-md overflow-hidden relative top-0 left-0 shadow-sm cursor-pointer`}
            >
              <ImageCard key={image.id} image={image} index={index} />
            </div>
          );
        })}
        <div className="image_card border-2 border-dashed border-[#d8dadc] rounded-md overflow-hidden relative top-0 left-0 shadow-sm cursor-pointer min-h-[270px] md:min-h-[327px] lg:min-h-[241px] flex justify-center items-center flex-col gap-3">
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
            alt=""
            className="w-8 h-8"
          />
          <span>Add Images</span>
        </div>
      </div>
    </div>
  );
}
