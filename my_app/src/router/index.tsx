import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import React from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ManageLayout from '../layouts/ManageLayout'
import List from '../pages/manage/List'
import Star from '../pages/manage/Star'
import Trash from '../pages/manage/Trash'
import QuestionLayout from '../layouts/QuestionLayout'
import { element } from 'prop-types'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Login',
        element: <Login />
      },
      {
        path: 'Register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'star',
            element: <Star />
          },
          {
            path: 'trash',
            element: <Trash />
          }
        ]
      }
    ]
  },
  {
    path: 'question',
    element:<QuestionLayout/>,
    children:[
      {
        path:'edit/:id',
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
export default router
export const HOME_PATHNAME = '/'
export const MANAGE_INDEX_PATHNAME = '/manage/list'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'

export function isLoginOrRegister(pathname: string) {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

export function isNoNeedUserInfo(pathname: string) {
  if ([HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}