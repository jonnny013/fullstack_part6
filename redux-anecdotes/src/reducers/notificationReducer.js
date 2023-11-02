import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notification(state, action) {
        state.message = action.payload
    },
    
  }
})

export const { notification } = notificationSlice.actions

export const removeNotification = (timeout) => {
    return dispatch => {setTimeout(() => { dispatch(notification(''))},
        timeout * 1000
        )}
}

export const setNotification = (content, timeout) => {
  return dispatch => {
    dispatch(removeNotification(timeout))
    dispatch(notification(content))
  }
}

export default notificationSlice.reducer