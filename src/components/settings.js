import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/app.module.scss';
import {MdDarkMode} from 'react-icons/md'
import i18n from "../i18n";
import { toggleDark, toggleLang } from '../app/actions/settingsAction';

export default function Settings() {
const { dark, lang } = useSelector(state => state.settings);
const dispatch = useDispatch();
  return (
    <div className={styles.settings} id={!dark ? '' : styles.dark }>
    <div className={styles.lang} onClick={()=>{
        dispatch(toggleLang())
        i18n.changeLanguage(lang ? 'en' : 'tr');
    }} >
         {!lang ? 'TR' : 'EN'}
    </div>
         <div className={styles.theme} onClick={()=>dispatch(toggleDark())} >
            {!dark ? <MdDarkMode />: <MdDarkMode style={{color:'white'}}/>}
        </div>
    </div>
    )
}
