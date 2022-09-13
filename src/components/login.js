import { useTranslation } from 'react-i18next'
import React from 'react'

export default function Login({onChange,onClick,content}) {
    const { t } = useTranslation();

  return (
    <div>
        <input content={content} onChange={onChange} type="text" placeholder={t('get_name_placeholder')} />
        <button onClick={onClick}>Devam Et</button>
    </div>
    )
}
