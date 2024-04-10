import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const ProtectRoute = () => {
    // let userToken = JSON.parse(localStorage.getItem("token"))
    // console.log(userToken);
    let token = {auth: true}
    return (
      token.auth? <Outlet /> : <Navigate to="/" />)
}
