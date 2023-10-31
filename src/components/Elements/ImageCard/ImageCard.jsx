import { useState } from "react";
import CheckBox from "../Forms/CheckBox";
import { useDispatch } from "react-redux";
import { selectImage } from "../../../redux/features/ImageGallery/imageGallerySlice";

export default function ImageCard({ image }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="image_card rounded-[4px] overflow-hidden relative top-0 left-0"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img src={image?.path} className="image w-full h-full" alt="" />
      {(showOverlay || image.select) && (
        <>
          <div
            className={`hover_overlay ${
              image.select
                ? "bg-[#f8f9f9] bg-opacity-50"
                : "bg-[#828282] bg-opacity-50"
            } w-full h-full absolute top-0 left-0 z-20`}
          ></div>

          <CheckBox
            onChange={() => {
              dispatch(selectImage({ index: image.id }));
            }}
            className="checkbox_input absolute top-6 left-6 z-30"
            checked={image.select ? true : false}
          />
        </>
      )}
    </div>
  );
}
