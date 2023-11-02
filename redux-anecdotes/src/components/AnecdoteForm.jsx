import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
 const dispatch = useDispatch()

 const createAnecdotes = async (event) => {
    event.preventDefault()
    const anecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(anecdote))
    dispatch(setNotification({anecdote}))
  }

  return (
    <div>
        <h2>create new</h2>
      <form onSubmit={createAnecdotes}>
        <div><input name='newAnecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm