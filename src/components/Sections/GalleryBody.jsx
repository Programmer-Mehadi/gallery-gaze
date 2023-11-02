/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import ImageCard from "../Elements/ImageCard/ImageCard"
import { addNewImage } from "../../redux/features/ImageGallery/imageGallerySlice"

export default function GalleryBody() {
  const { imagesList } = useSelector((state) => state.imageGallery)
  const dispatch = useDispatch()
  function setNewImage(e) {
    const newImages = []
    const files = e.target.files
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      newImages.push({
        id: imagesList.length + i + 1,
        path: URL.createObjectURL(file),
        select: false,
      })
    }
    dispatch(addNewImage(newImages))
  }
  return (
    <div className="image_body_container">
      <div className="image_gallery_body">
        {/* image card */}
        {imagesList?.map((image, index) => {
          return (
            <div
              key={image.id}
              className={`image_container ${
                index === 0 ? " featured_image" : " other_images"
              }`}
            >
              {/* image card */}
              <ImageCard key={image.id} image={image} index={index} />
            </div>
          )
        })}
        {/* add image card start */}
        <label htmlFor="add_image" className="add_image_card">
          <input
            type="file"
            id="add_image"
            className="hidden"
            onChange={(e) => {
              setNewImage(e)
            }}
            multiple={true}
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
            alt=""
            className="w-8 h-8"
          />
          <div>Add Images</div>
        </label>
        {/* add image card end */}
      </div>
    </div>
  )
}
