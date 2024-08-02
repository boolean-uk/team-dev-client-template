import React, { useState, useEffect } from 'react'
import './style.css'
import { getUserPostReaction, togglePostLike } from '../../service/apiClient'

export default function HeartButton ({postId}) {
    const [liked, setLiked] = useState(false)
    const [isFetching, setIsfetching] = useState(true)

    useEffect(() => {
        const fetchUserReaction = async () => {
            try {
                const reactionData = await getUserPostReaction(postId)
                setLiked(reactionData.reaction === 1)
            } catch (e) {
                console.error('error retrieving user reaction:', e)
                return e
            } finally {
                setIsfetching(false)
            }
        }
        
        fetchUserReaction
    }, [postId])

    const handleLikeToggle = async () => {
        setIsfetching(true)
        try {
            await togglePostLike(postId)
            setLiked((prevLiked) => !prevLiked)
        } catch (e) {
            console.error('error toggling like:', e)
        } finally {
            setIsfetching(false)
        }
    }

    return (
        <div className='heart-bg'>
            <div className={`heart-icon ${liked ? 'liked' : ''}`} onClick={handleLikeToggle}></div>
        </div>
    )
}