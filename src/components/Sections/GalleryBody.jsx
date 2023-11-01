/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import ImageCard from "../Elements/ImageCard/ImageCard"

export default function GalleryBody() {
  const { imagesList } = useSelector((state) => state.imageGallery)
  return (
    <div className="image_body_container">
      <div className="image_gallery_body">
        {/* image card */}
        {imagesList?.map((image, index) => {
          return (
            <div
              key={image.id}
              className={`image_container${
                index === 0 ? " featured_image" : ""
              }`}
            >
              {/* image card */}
              <ImageCard key={image.id} image={image} index={index} />
            </div>
          )
        })}
        {/* add image card start */}
        <div className="add_image_card">
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
            alt=""
            className="w-8 h-8"
          />
          <span>Add Images</span>
        </div>
        {/* add image card end */}
      </div>
    </div>
  )
}
