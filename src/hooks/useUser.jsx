import { useContext } from "react"
import { CurrentUserContext } from "../context/currentUser"

const useUser = () => {
    return useContext(CurrentUserContext)
}

export default useUser