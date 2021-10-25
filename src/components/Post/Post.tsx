import React from 'react'
import { IPost } from '../../App';
import Like from '../Like/Like';
import './Post.css'

export interface IPostProps extends IPost{
    children:any
}

const Post = (props: IPostProps) => {
      
    console.log(props);
      
    return (<div className="Post">
        
        <Like></Like>
    </div>)


}

export default Post;