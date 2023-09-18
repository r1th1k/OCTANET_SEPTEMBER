import { LstItem } from "./LstItem"

export function TodoLst({todos, setDone, del}){
    return (
    <ul className='list'>
    {todos.length===0 && "no todos"}
    {todos.map(todo => {
    return (
        <LstItem {...todo} key={todo.id} setDone={setDone} del={del}/>
    )
    })}
  </ul>
    )
}