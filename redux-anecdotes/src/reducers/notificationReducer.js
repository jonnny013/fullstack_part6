import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
        if (action.payload.id) {
            const anecdoteName = action.payload.id
            state.message = ` You voted for: ${anecdoteName.content}`
        }
        if (action.payload.anecdote) {
            state.message = `You created a new anecdote: ${action.payload.anecdote}`
        } 
    },
    removeNotification(state) {
        state.message = ''
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer