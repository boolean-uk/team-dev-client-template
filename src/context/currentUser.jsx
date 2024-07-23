import { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import jwt_decode from 'jwt-decode'
import { getUser } from '../service/apiClient'

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
    const { token, user } = useAuth()
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        if (user) {
            setCurrentUser({ ...user })
            return
        }

        async function getUserFromToken() {
            if (token) {
                const { userId } = jwt_decode(token)
                const userDetails = await getUser(userId)

                if (userDetails.status === 'success') {
                    setCurrentUser({ ...userDetails.data.user })
                    return
                }
            }
            setCurrentUser(null)
            return
        }
        getUserFromToken()
        return
    }, [token, user])

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    )
}
