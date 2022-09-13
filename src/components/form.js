import React  from 'react'
import {MdOutlineAddCircle} from 'react-icons/md'
import { useTranslation } from 'react-i18next';

export default function Form({content,onChange,onClick} ) {
    const { t } = useTranslation();

  return (
    <>
    <div>
      <input  placeholder={t('task_placeholder')} autoComplete='off' name="title"  value={content} onChange={onChange}   />
      <button onClick={onClick} ><MdOutlineAddCircle/></button>
    </div>
    </>
  )
}
