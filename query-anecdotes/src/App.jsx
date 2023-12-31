import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import { useContext } from 'react'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {

    const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })

  const anecdotes = result.data
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (votedanecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.map((anec) => {
        if (anec.id === votedanecdote.id) {
          return {...anec, votes: votedanecdote.votes}
        }
        return anec
      }))
}})

  const dispatch = useNotificationDispatch()
  const handleVote = (anecdote) => {
    dispatch({type: 'newVote', payload: anecdote})
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
  }



  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
  if ( result.isError) {
    return <div>Anecdote service is currently unavailable due to server problems</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
