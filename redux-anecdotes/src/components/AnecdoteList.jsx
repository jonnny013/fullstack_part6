import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { useDispatch, useSelector } from "react-redux";

const AnecdoteList = () => {
    const anecdotes = useSelector(({filter, anecdotes}) => {
      return anecdotes.filter(anec => anec.content.match(filter))
    })
    const dispatch = useDispatch()

    const vote = ( id) => {
      const anecdoteName = anecdotes.find(n => n.id === id)
    dispatch(setNotification({id: anecdoteName}))
    dispatch(addVote(id))
    }
  return (
    <div>
        {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList