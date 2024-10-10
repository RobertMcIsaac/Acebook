import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // Filled heart
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import { updatePost } from "../services/posts";

const LikeButton = (props) => {

    const likedByArray = props.post.likes.liked_by || [];

    const userId = localStorage.getItem("user_id")

    const likeStatus = likedByArray.includes(userId);
    
    const [isLiked, setIsLiked] = useState(likeStatus) //is this initialising to true

    async function handleToggleLike() {
        await props.toggleLike(props.post._id, userId); // Only pass post ID
        setIsLiked(!isLiked); 
    }
    
    return (
        <button 
            onClick={handleToggleLike}
            className="border-0 bg-transparent"
            style={{ cursor: "pointer" }}
        >
        {/* {isLiked? "Unlike": "Like"} display like or unlike depending on like status */}
        <FontAwesomeIcon 
            icon={isLiked ? solidHeart : regularHeart} 
            size="lg" 
            style={{ color: isLiked ? "red" : "gray", transition: "color 0.3s ease" }} 
        />
        </button>
    )
};

export default LikeButton;