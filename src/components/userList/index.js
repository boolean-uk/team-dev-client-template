// @ts-nocheck
import './styles.css'
import EditIcon from '../optionsIcon'
import ProfileCircle from '../profileCircle'

const UserList = ({ users, contextMenu }) => {
  return (
    <>
      {users.map((user) => {
        const initials = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`

        return (
          <div className="user">
            <ProfileCircle initials={initials} />
            <section className="user-info">
              <div className="user-name">
                <strong>
                  {user.firstName} {user.lastName}
                </strong>
              </div>
              <div className="user-title">{user.title}</div>
            </section>
            <div className="edit-icon-wrapper">
              <EditIcon showModel={contextMenu} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default UserList
