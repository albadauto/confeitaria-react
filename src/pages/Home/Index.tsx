import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguages, useLanguages } from '../../redux/slices/sliceLanguages'

export default function Home() {
  const [newLanguage, setNewLanguage] = useState<string>('')
  const languages = useSelector(useLanguages) //Resgatar as actions

  const dispatch = useDispatch()//User um reducer

  return (
    <>
      <ul>
        {languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>


      <div>
        <input type="text" value={newLanguage} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLanguage(e.target.value)} />
        <button onClick={() => dispatch(addLanguages(newLanguage))}>Adicionar uma nova linguagem</button>
      </div>
    </>

  )
}