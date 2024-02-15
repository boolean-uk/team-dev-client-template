import "./style.css"

export default function NoteListItem({note}) {
	const { title, body, createdAt } = note

	const renderedTime = () => {
		const beginOfDay = (date) => date.setHours(0,0,0,0)
		if (beginOfDay(new Date()) === beginOfDay(new Date(createdAt))) {
			return createdAt.toLocaleTimeString()
		} else {
			return createdAt.toLocaleDateString()
		}
	}

	return (
		<div className="note-container">
			<p className="note-title">{title}</p>
			<p>{renderedTime()} {body}</p>
		</div>
	)
}
