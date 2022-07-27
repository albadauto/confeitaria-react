import React, { ChangeEvent, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { IData } from '../../interfaces/user.interface'
import { addData, useData } from '../../redux/slices/data.slice'
import { addLanguages, useLanguages } from '../../redux/slices/sliceLanguages'

export default function Home() {
  const [newLanguage, setNewLanguage] = useState<string>('')
  const [userData, setUserData] = useState<IData>({} as IData)
  const languages = useSelector(useLanguages) //Resgatar as actions
  const dataUsers = useSelector(useData)
  const dispatch = useDispatch()//User um reducer

  return (
    <>
      <ul>
        {languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>

      <ul>
          {dataUsers.map((data) => (
            <li>{data.name}</li>
          ))}
      </ul>

      <div>
        <input type="text" value={newLanguage} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLanguage(e.target.value)} /> <br /> <br />
        <Button onClick={() => dispatch(addLanguages(newLanguage))} variant="primary">Adicionar uma nova linguagem</Button>
      </div>
      <br />

      <div>
        <input type="text" value={userData.name} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({...userData, name: e.target.value})}/> <br /> <br />
        <Button onClick={() => dispatch(addData({name: userData.name}))} variant="warning">Adicionar</Button>
      </div>
    </>

  )
}