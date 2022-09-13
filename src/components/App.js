import React,{useEffect, useState} from "react";
import Todo from './todo';
import Login from './login';
import Form from './form';
import styles from '../styles/app.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import {addTodo, deleteTodo, fetchTodos, toggleTodo} from '../app/actions/todosActions'
import {login} from '../app/actions/loginAction'
import {MdDarkMode} from 'react-icons/md'
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";
import Settings from "./settings";

function App() {
const { t } = useTranslation();
const dispatch = useDispatch()
const [content,setContent] = useState('')
const {todos} = useSelector(state => state.todos)
const {isLogin} = useSelector(state => state.login)
const {dark} = useSelector(state => state.settings)

// saving todos
const onSave=(content)=>{
  if(content!=='' && content.length>2){
  dispatch(addTodo(content))
  setContent('')
  }
  else{
    alert(t('add_alert'))
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
    alert(t('get_name_alert'))
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
             <p className={styles.name} id={!dark ? '' : styles.darkWelcome }> {t('welcome')} <span>{name}</span>, {t('welcome_message')}</p>
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
         <Settings />
         </div>
      ) :
      ( 
        <div className={styles.body} id={!dark ? '' : styles.dark }>
        <div className={styles.login}>
        <h1 id={!dark ? '' : styles.darkWelcome }>{t('get_name_header')}</h1>
        <Login  onChange={(e)=>setContent(e.target.value)} content={content} onClick={()=>{onLogin(content)}}/>
        </div>
        <Settings />
      </div>
      )
      }
    </>
  );
}

export default App;
