import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    let setTimeFormat = ''
    useEffect(() => {
        
        getPosts().then(setPosts)
    }, [])

    return (
        <>
            {posts.map(post => {
                { setTimeFormat = new Date(post.createdAt).toString().substring(0,21)}
                    return <Post
                        key={post.id}
                        name={`${post.author.profile.firstName} ${post.author.profile.lastName}`}
                        date={setTimeFormat}
                        content={post.content}
                        comments={post.comments}
                        id={post.id}
                        user={props.user}
                    />
            })}
        </>
    )
}

export default Posts