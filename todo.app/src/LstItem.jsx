export function LstItem({id, title, completed, setDone, del}){
    return (
    <li>
      <label style={completed ? { textDecoration: 'line-through' } : {}}>
      <input type="checkbox" 
      checked={completed}
      onChange={e=> setDone(id, e.target.checked)}
      />
      {title}
      </label>
      <button className='btn btn-danger' onClick={()=>del(id)}>Del</button>
    </li>
    )
}
