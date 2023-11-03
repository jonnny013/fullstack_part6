import { useContext } from 'react'
import { useNotificationValue, useNotificationDispatch } from '../NotificationContext'
const Notification = () => {
  const notification = useNotificationValue()
  const dispatch = useNotificationDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  if (notification === '') return null
  if (notification !== '') {
    setTimeout(
      () => {dispatch({type: 'reset'})}, 5000
    )
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
