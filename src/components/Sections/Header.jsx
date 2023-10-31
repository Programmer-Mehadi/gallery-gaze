import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../Elements/Forms/CheckBox";
import { deleteImage } from "../../redux/features/ImageGallery/imageGallerySlice";

export default function Header() {
  const { imagesList } = useSelector((state) => state.imageGallery);
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-t-[4px]  px-8 py-5 border-b border-[#ebebed] flex justify-between flex-wrap gap-6 min-h-[70px]">
      {imagesList.filter((image) => image.select).length > 0 ? (
        <div className="flex gap-2 items-center">
          <CheckBox name="all_select" checked={true} />
          <span className="font-medium">
            {imagesList.filter((image) => image.select).length} File
            {imagesList.filter((image) => image.select).length > 1 ? "s " : " "}
            Selected
          </span>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <span className="text-lg font-bold">Gallery</span>
        </div>
      )}

      {imagesList.filter((image) => image.select).length > 0 && (
        <div>
          <span
            className="text-[#ff2600] font-medium cursor-pointer"
            onClick={() => {
              dispatch(deleteImage());
            }}
          >
            Delete File
            {imagesList.filter((image) => image.select).length > 1 ? "s" : ""}
          </span>
        </div>
      )}
    </div>
  );
}
