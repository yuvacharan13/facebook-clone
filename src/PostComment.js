import React, { useState } from 'react';
import ReactDom from 'react-dom';

const PostData = (props) => {

    const [comment, setComment] = useState("");

    const addComment = (e) => {
        setComment(e.target.value); 
    }

    const handleComment = () => {
        props.postComment(comment);
        setComment("");
    }

    return(

        <div className="form-group" >
            <input onChange={addComment} value={comment} placeholder="Enter your comments here..." className="commentClass"/>
            <button onClick={handleComment}>comment</button>
        </div>
        
    )
}

export default PostData;