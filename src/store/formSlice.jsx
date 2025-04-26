import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: 1, 
  formData: {
    name: '',
    email: ''
  },
  selectedTopics: []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    
    setName: (state, action) => {
      state.formData.name = action.payload;
    },
    
    setEmail: (state, action) => {
      state.formData.email = action.payload;
    },
    
    toggleTopic: (state, action) => {
      const topic = action.payload;
      
      if (state.selectedTopics.includes(topic)) {
        state.selectedTopics = state.selectedTopics.filter(t => t !== topic)
      } else {
        state.selectedTopics.push(topic)
      }
      
    },
    
    confirm: (state) => {
      state.currentStep = 1;
    }
  }
})

export const { nextStep, setName, setEmail, toggleTopic, confirm } = formSlice.actions;

export default formSlice.reducer