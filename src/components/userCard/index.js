import "./style.css"


const UserCard = ({ user }) => {

    if (!user.firstName || !user.lastName ) {
        return
    }
    const initials = user.firstName?.charAt(0) + user.lastName?.charAt(0)

    return (
        <>
            {
                <section className="users">
                    <div className="initials">{initials}</div>
                    <div className="first-and-last-name"> {user.firstName  + " " + user.lastName}</div>
                    <div className="more-menu"><button>...</button></div>
                </section>
            }
        </>
    )
}

export default UserCard

