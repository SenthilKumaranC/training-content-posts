import React from 'react'
import Like from '../Like/Like';
import './Post.css'

const Post = (props:any) => {

    console.log(props.content);

    return (<div className="Post">
        {props.content}
        <Like></Like>
    </div>)


}

export default Post;