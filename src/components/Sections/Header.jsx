import { useDispatch, useSelector } from "react-redux"
import CheckBox from "../Elements/Forms/CheckBox"
import {
  deleteImage,
  resetSelectImage,
} from "../../redux/features/ImageGallery/imageGallerySlice"
import { Fragment } from "react"

export default function Header() {
  const { imagesList } = useSelector((state) => state.imageGallery)
  const selectedImageLength = imagesList.filter((image) => image.select).length

  const dispatch = useDispatch()
  return (
    <div className="header_container">
      {/* left side */}
      {selectedImageLength > 0 ? (
        <Fragment>
          <div className="flex gap-2 items-center">
            <CheckBox
              name="all_select"
              checked={true}
              onChange={() => {
                dispatch(resetSelectImage())
              }}
            />
            <span className="font-medium">
              {selectedImageLength} File
              {selectedImageLength > 1 ? "s " : " "}
              Selected
            </span>
          </div>
          {/* delete image */}
          <div>
            <span
              className="text-[#ff2600] font-medium cursor-pointer"
              onClick={() => {
                dispatch(deleteImage())
              }}
            >
              Delete File
              {selectedImageLength > 1 ? "s" : ""}
            </span>
          </div>
        </Fragment>
      ) : (
        <div className="flex gap-2 items-center">
          <span className="text-lg font-bold">Gallery</span>
        </div>
      )}
    </div>
  )
}
