import React,{useEffect} from 'react'
import styles from '../styles/login.module.scss'

export default function Login({onChange,onClick,content}) {

  return (
    <div className={styles.login}>
        <h1>Hoş Geldiniz. İsminiz Nedir?</h1>
        <input content={content} onChange={onChange} type="text" placeholder="İsminizi Giriniz" />
        <button onClick={onClick}>Devam Et</button>
    </div>
    )
}
