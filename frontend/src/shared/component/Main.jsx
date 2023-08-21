import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../module/pages/Home'
import { Genere } from '../../module/pages/Genere'
import { Diffficulty } from '../../module/pages/Diffficulty'
import { Quiz } from '../../module/pages/Quiz'
import { Result } from '../../module/pages/Result'
import { Login } from './Login'

export const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home/:username' element={<Home/>}/>
            <Route path='/genere' element={<Genere/>}/>
            <Route path='/difficulty/:genere' element={<Diffficulty/>}/>
            <Route path='/quiz/:genere/:level' element={<Quiz/>}/>
            <Route path='/result/:genere/:level' element={<Result/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
