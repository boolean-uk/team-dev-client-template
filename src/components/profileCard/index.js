import ProfileCircle from "../profileCircle"
import "./style.css"

export default function ProfileCard ({firstName, lastName}) {
	// const { firstName, lastName } = profile
	const initials = firstName.toUpperCase()[0] + lastName.toUpperCase()[0]
	return (
		<div className="profile-card">
			<ProfileCircle initials={initials}/>
			<p className="profile-card-name">{firstName} {lastName}</p>
			<p className="more">…</p>
		</div>
	)
}
