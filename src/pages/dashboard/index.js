import { useState } from "react";
import SearchIcon from "../../assets/icons/searchIcon";
import Button from "../../components/button";
import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import TextInput from "../../components/form/textInput";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";
import "./style.css";

const Dashboard = () => {
	const { token } = useAuth()
    const { userId } = jwt_decode(token)

	const [searchVal, setSearchVal] = useState('');

	const onChange = (e) => {
		setSearchVal(e.target.value);
	};

	// Use the useModal hook to get the openModal and setModal functions
	const { openModal, setModal } = useModal();

	// Create a function to run on user interaction
	const showModal = () => {
		// Use setModal to set the header of the modal and the component the modal should render
		setModal("Create a post", <CreatePostModal user={user} userId={userId}/>); // CreatePostModal is just a standard React component, nothing special

		// Open the modal!
		openModal();
	};

	const [user, setUser] = useState()
	// const fetchUserById = () => {
	// 	const options = {
	// 		headers: {
	// 			"Accept": "application/json",
	// 			"Content-Type": "application/json",
	// 			"Authorization": "Bearer " + token
	// 		}}
	// 	fetch(`http://localhost:4000/users/${userId}`, options)
	// 		.then(res=>res.json())
	// 		.then(data=>setUser(data.data.user))
	// }
	async function fetchUserDataById() {
		const res = await fetch(
			`http://localhost:4000/users/${userId}`, {
				method: 'GET',
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token
				}
			}
		)
		if (!res.ok){
			throw new Error(`ERROR! status: ${res.status}`)
		}
		const data = await res.json()
		setUser(data)
		console.log(data)
	}
	fetchUserDataById()


	return (
		<>
			<main>
				<Card>
					<div className="create-post-input">
						<div className="profile-icon">
							<p>AJ</p>
						</div>
						<Button text="What's on your mind?" onClick={()=>{
							showModal()
						}} />
					</div>
				</Card>

				<Posts />
			</main>

			<aside>
				<Card>
					<form onSubmit={(e) => e.preventDefault()}>
						<TextInput
							icon={<SearchIcon />}
							value={searchVal}
							name="Search"
							onChange={onChange}
						/>
					</form>
				</Card>

				<Card>
					<h4>My Cohort</h4>
				</Card>
			</aside>
		</>
	);
};

export default Dashboard;
