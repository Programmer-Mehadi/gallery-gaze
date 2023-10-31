import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  imagesList: [
    {
      id: 1,
      path: "./images/image-1.webp",
      select: false,
    },
    {
      id: 2,
      path: "./images/image-2.webp",
      select: false,
    },
    {
      id: 3,
      path: "./images/image-3.webp",
      select: false,
    },
    {
      id: 4,
      path: "./images/image-4.webp",
      select: false,
    },
    {
      id: 5,
      path: "./images/image-5.webp",
      select: false,
    },
    {
      id: 6,
      path: "./images/image-6.webp",
      select: false,
    },
    {
      id: 7,
      path: "./images/image-7.webp",
      select: false,
    },
    {
      id: 8,
      path: "./images/image-8.webp",
      select: false,
    },
    {
      id: 9,
      path: "./images/image-9.webp",
      select: false,
    },
    {
      id: 10,
      path: "./images/image-10.jpeg",
      select: false,
    },
    {
      id: 11,
      path: "./images/image-11.jpeg",
      select: false,
    },
  ]
}

export const imageGalleySlice = createSlice({
  name: 'imageGallery',
  initialState,
  reducers: {
    selectImage(state, action) {
      const newList = state.imagesList.map((image) => {
        if (image.id === action.payload.index) {
          return {
            ...image,
            select: !image.select,
          }
        } else {
          return {
            ...image
          }
        }
      })
      return {
        ...state,
        imagesList: newList
      }
    },
    deleteImage(state) {
      const newList = state.imagesList.filter((image) => {
        return image.select === false
      })
      return {
        ...state,
        imagesList: newList
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectImage, deleteImage } = imageGalleySlice.actions

export default imageGalleySlice.reducer