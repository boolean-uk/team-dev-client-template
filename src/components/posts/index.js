import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";
import useAuth from "../../hooks/useAuth";


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
        .then(res => res.json())


    useEffect(() => {
        
        getPosts().then(setPosts)
    }, [])
    console.log("posts", posts)

    let setTimeFormat = ''

    if (posts.length < 1) {
        return (
            <>
                <p>There are no posts yet...</p>
            </>
        )
    }
    else {
        return (

            <>
                {
                    posts.map(post => {
                        { setTimeFormat = new Date(post.createdAt).toString().substring(0, 21) }
                        return <Post
                            key={post.id}
                            name={`${post.author.profile.firstName} ${post.author.profile.lastName}`}
                            date={setTimeFormat}
                            content={post.content}
                            comments={post.comments}
                        />
                    })
                }
            </>
        )
    }



    return (
        <>
            {posts.map(post => {
                    return <Post
                        key={post.id}
                        name={`${post.author.firstName} ${post.author.lastName}`}
                        date={post.createdAt}
                        content={post.content}
                        comments={post.comments}
                        id={post.id}
                    />
            })}
        </>
    )
}

export default Posts