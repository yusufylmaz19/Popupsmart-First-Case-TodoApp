import React,{useEffect, useState} from "react";
import Todo from './todo';
import Login from './login';
import Form from './form';
import styles from '../styles/app.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import {addTodo, deleteTodo, fetchTodos, toggleTodo} from '../app/actions/todosActions'
import {login} from '../app/actions/loginAction'
import {MdDarkMode} from 'react-icons/md'

function App() {
const dispatch = useDispatch()
const [content,setContent] = useState('')
const [dark,setDark] = useState(false)
const {todos} = useSelector(state => state.todos)
const {isLogin} = useSelector(state => state.login)

// saving todos
const onSave=(content)=>{
  if(content!=='' && content.length>2){
  dispatch(addTodo(content))
  setContent('')
  }
  else{
    alert('Lütfen en az 3 karakterli bir veri giriniz.')
  }
}

// deleting todos
const onDelete=(id)=>{
  dispatch(deleteTodo(id))
}

// completed todos
const onToggle=(id,isCompleted)=>{
  dispatch(toggleTodo(id,isCompleted))
}

// login control
const onLogin=(content)=>{
  if(content!=='' && content.length>2){
  dispatch(login(content))
  setContent('')
  }
  else{
    alert('Lütfen en az 3 karakterli bir isim giriniz.')
  }
}

// fetching todos
useEffect(()=>{
  dispatch(fetchTodos());
},[])

const name = localStorage.getItem("name");

  return (
    <>
      { (isLogin || name!==null) ? (
         <div className={styles.body} id={!dark ? '' : styles.dark }>
         <div className={styles.appContainer}>
         <div className={styles.form}>
             <p className={styles.name} id={!dark ? '' : styles.darkWelcome }>Welcome <span>{name}</span>, Let's write some todos.</p>
             <Form onChange={(e)=>setContent(e.target.value)} content={content} onClick={()=>{onSave(content)}}/>
         </div>
             <div className={styles.todosContent}>
             {
               todos.map((todo)=>(
                 <Todo
                 key={todo.id}
                 todos={todo}
                 onDelete={()=>{
                   onDelete(todo.id)
                  }}
                  onToggle={()=>{
                    onToggle(todo.id,todo.isCompleted)
                   }}
                  />
                  ))
                }
             </div>
    
         </div>
          <div className={styles.theme} 
          onClick={()=>setDark(!dark)}
          >
          {!dark ? <MdDarkMode/>: <MdDarkMode style={{color:'white'}}/>}
          </div>
         </div>
      ) :
      ( 
        <Login onChange={(e)=>setContent(e.target.value)} content={content} onClick={()=>{onLogin(content)}}/>
      )
      }
    </>
  );
}

export default App;
