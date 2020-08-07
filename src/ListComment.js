import React, { useState } from "react";

const ListComment = (props) => {

    return (
        <div>
            <ul className="list-group">
          {props.commentz.map((comment) => {
            return (
              <li className="list-group-item" key={comment.id}>
                <span>
                  <span>{comment.title}</span>
                </span>
              </li>
            );
          })}
        </ul>
        </div>
        

      );
}


export default ListComment;