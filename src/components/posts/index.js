import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";
import useAuth from "../../hooks/useAuth";


// TESTING LIVECODING, HI CHRIS


const Posts = () => {
    const [posts, setPosts] = useState([])

    const { token } = useAuth()
    const options = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }
    fetch(`http://localhost:4000/posts`, options)
    .then(res=>res.json())
    .then(data=>console.log("data", data))

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])
    // console.log("posts", posts)
    return (
        <>
            {posts.map(post => {
                //post.comments = [hardcore stuff for now with id and content]
                //swap it to API stuff when its available                
                return <Post
                    key={post.id}
                    name={`${post.author.firstName} ${post.author.lastName}`}
                    date={post.createdAt}
                    content={post.content}
                    comments={post.comments}
                />
            })}
        </>
    )
}

export default Posts