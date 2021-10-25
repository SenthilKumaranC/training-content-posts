import React, { useRef } from 'react'
import { IPost } from '../../App';
import './PostForm.css'
import { v4 as uuidv4 } from 'uuid';


const PostForm = (props: any) => {

  const onPostButtonClicked = () => {

    const textArea = postTextAreaRef.current;

    if (textArea) {
      const postContent = textArea.value;

      const newPost: IPost = {
        id: uuidv4(), content: postContent, createdAt: new Date(), likes: 0
      }

      props.onPostCreated(newPost);
    }

  }

  const postTextAreaRef = useRef<any>();



  //var textAreaHTML = document.getElementById("textarea");
  ///textAreaHTML.value

  /* const nameRef = useRef<any>() */

  return <div className="PostForm">
    {/* <input ref={nameRef} placeholder="Enter Name"></input> */}
    <textarea className="PostFormChild1" ref={postTextAreaRef}></textarea>
    <button className="PostFormChild2" onClick={onPostButtonClicked}>Post</button>
  </div>

}

export default PostForm;