import { configureStore } from '@reduxjs/toolkit'
import imageGalleryReducer from './features/ImageGallery/imageGallerySlice'
export const store = configureStore({
  reducer: {
    imageGallery: imageGalleryReducer
  },
})