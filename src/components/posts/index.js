import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(setPosts)
        fetch('http://localhost:4000/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching posts');
            }
            return response.json();
        })
        .then(data => {
            const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedPosts);
        })
        .catch(error => console.error("Fetch error:", error));
}, []);

    return (
        <>
            {posts.map(post => {
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