import { configureStore } from '@reduxjs/toolkit'

import formReducer from './formSlice.jsx'

export const store = configureStore({
  reducer: {
    form: formReducer
  }
})