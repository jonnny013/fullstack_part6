/* eslint-disable no-case-declarations */

import {createSlice} from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdoteService'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdotes(state, action) {
      if (!state.some(anecdote => anecdote.id === action.payload.id)) {
       state.push(action.payload);
  }
      else return state.map(anecdote => anecdote.id !== action.payload.id ? anecdote : action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
  
})

export const {  appendAnecdotes, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content) 
    dispatch(appendAnecdotes(newAnecdote))
  }
}

export const addVote = content => {
  return async dispatch => {
    const changedVote = await anecdoteService.addVote(content)
    dispatch(appendAnecdotes(changedVote))
  }
}

export default anecdoteSlice.reducer