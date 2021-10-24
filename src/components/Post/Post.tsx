import React from 'react'
import Like from '../Like/Like';
import './Post.css'

const Post = (props: any) => {

    console.log(props.content);

    const { post: { content } } = props;

    return (<div className="Post">
        {content}
        <Like></Like>
    </div>)


}

export default Post;