import {Lstform} from './Lstform'
import {TodoLst} from './TodoLst'
import { useEffect, useState } from 'react'
import './styles.css'


export default function App() {
  const [todos, setTodo] = useState(()=>{
    const localval = localStorage.getItem("ITEM")
    if(localval==null) return []
    return JSON.parse(localval)
  })

  useEffect(()=>{
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])


  function addTodo(newItem){
    setTodo((currentTodo)=>{
      return [...currentTodo, {id:crypto.randomUUID(), title:newItem, completed:false}]
    })
  }

  function setDone(id, completed){
    console.log(completed )
    setTodo(
      currentTodo => {
        return currentTodo.map(todo => {
          if (todo.id === id){
            return {...todo, completed}
          }
          return todo
        })
      }
      )
    }
    
    function del(id){
      setTodo(currentTodo=>{
      return currentTodo.filter(todo => todo.id != id)
    })
  }

  return (
  <>
  <Lstform adder={addTodo}/>
  <h1 className='header'>Todo List</h1>
  <TodoLst todos={todos}  setDone={setDone}  del={del}/>
  </>
  )
}