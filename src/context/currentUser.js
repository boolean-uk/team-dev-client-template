import { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import jwt_decode from 'jwt-decode'
import { getUser } from '../service/apiClient'

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
    const { token } = useAuth()
    const [currentUser, setCurrentUser] = useState({ empty: true })
    const [userInitials, setUserInitals] = useState('')
    const [userFullName, setUserFullName] = useState('')
    const [userCohort, setUserCohort] = useState('')
    const [userFirstNameAndInital, setUserFirstNameAndInital] = useState('')

    useEffect(() => {
        async function getUserFromToken() {
            if (token) {
                const { userId } = jwt_decode(token)

                const userDetails = await getUser(userId)
                userDetails.status === 'success'
                    ? setCurrentUser({ ...userDetails.data.user })
                    : setCurrentUser({ empty: true })
                return
            }
            setCurrentUser({ empty: true })
            return
        }
        getUserFromToken()
    }, [token])

    useEffect(() => {
        if (!currentUser.empty) {
            setUserInitals(
                currentUser
                    ? `${currentUser.firstName[0].toUpperCase()}${currentUser.lastName[0].toUpperCase()}`
                    : ''
            )
            setUserFullName(
                currentUser
                    ? `${currentUser.firstName} ${currentUser.lastName}`
                    : ''
            )
            setUserCohort(
                currentUser && currentUser.cohort
                    ? 'Cohort' + currentUser.cohort
                    : ''
            )
            setUserFirstNameAndInital(
                currentUser
                    ? `${currentUser.firstName} ${currentUser.lastName[0]}`
                    : ''
            )
        }
    }, [currentUser])

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
                userInitials,
                userFullName,
                userCohort,
                userFirstNameAndInital
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    )
}
