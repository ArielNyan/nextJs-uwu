import React from 'react'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main'
import Login from '@/components/Login'
const DashboardPage = () => {
  const isAuth: boolean = false
  let children = (
    <Login />
  )
  if(isAuth) children = (<Dashboard />)
  return (
    <Main>
      {children}
    </Main>
  )
}

export default DashboardPage
