import React,{useState}  from 'react'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import styles from '../styles/app.module.scss';
import { useDispatch } from 'react-redux'
import {updateTodo} from '../app/actions/todosActions'
import Form from './form';
import { useTranslation } from 'react-i18next';

export default function Todo({todos,onDelete,onToggle}) {

  const { t } = useTranslation();
  const [content,setContent]=useState(todos.content)
  const [isEditing,setIsEditing]=useState(false)
  const dispatch = useDispatch()

  // update todos
  const onUpdate=(id,content)=>{
    if(content!=='' && content.length>2){
      dispatch(updateTodo(id,content))
    }else{
      alert(t('update_alert'))
    }
  }

  
  return (
    <div>
      {!isEditing ? (
        <div>
            <p onDoubleClick={onToggle} className={todos.isCompleted ? styles.completed : styles.notComplete}>{todos.content}</p> 
            <button onClick={onDelete}> <AiFillDelete /></button>
            <button onClick={()=>{setIsEditing(true)}}> <AiFillEdit /></button>
        </div>
      ) : (
          <div className={styles.form}>
          <Form onChange={(e)=>setContent(e.target.value)} content={content} onClick={()=>{
            onUpdate(todos.id,content) 
            setIsEditing(false) }}/>
        </div>
      )}
      </div>
  )
}
