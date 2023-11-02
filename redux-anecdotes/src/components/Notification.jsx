import { useSelector } from "react-redux"
import { removeNotification } from "../reducers/notificationReducer"
import { useDispatch } from "react-redux"

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(({notification}) => {
    setTimeout(() => dispatch(removeNotification()), 5000)
    return `${notification.message}`
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification !== ''){return (
    <div style={style}>
      {notification}
    </div>
  )}
}

export default Notification