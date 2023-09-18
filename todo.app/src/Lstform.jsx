import { useState } from 'react'

export function Lstform({adder}){

    const [newItem, setNewItem] = useState("")

    function handler(e){
        e.preventDefault()
        if(newItem=="") return 
        adder(newItem)
        setNewItem("")
      }

    return <form className="new-item-form" onSubmit={handler}>
    <div className='form-row'>
      <label htmlFor="item">New Item</label>
      <input value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id='item'/>
    </div>
    <button className='btn'>ADD</button>
  </form>
}
