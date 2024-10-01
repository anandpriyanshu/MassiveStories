import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {

    const logOutHandler = () => {


        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    const dispatch = useDispatch()
    return (
        <>

            <button onClick={logOutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Log out</button>

        </>
    )
}

export default LogoutBtn