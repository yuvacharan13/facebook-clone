import React, { useState } from "react";
import PostComment from "./PostComment";
import ListComment from "./ListComment";

const ListData = (props) => {

    const [postcomment, setPostcomment] = useState({comments: []});

    const postComment = (value) => {
        const id = Math.floor(Math.random() * 100) + 1;
        const currentPost = { id: id, title: value };
        setPostcomment({
          comments: [...postcomment.comments, currentPost],
        });
    }

    return (
        <div>
            <ul className="list-group">
          {props.postz.map((post) => {
            return (
              <li className="list-group-item" key={post.id}>
                <span>
                  <span>{post.title}</span>
                </span>
                <PostComment postComment={postComment} />
                <ListComment commentz={postcomment.comments}/>
              </li>
            );
          })}
        </ul>
        </div>
        

      );
}


export default ListData;