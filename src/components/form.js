import React  from 'react'
import {MdOutlineAddCircle} from 'react-icons/md'

export default function Form({content,onChange,onClick} ) {
  
  return (
    <>
    <div>
      <input  placeholder="Bir şey yazınız" autoComplete='off' name="title"  value={content} onChange={onChange}   />
      <button onClick={onClick} ><MdOutlineAddCircle/></button>
    </div>
    </>
  )
}
