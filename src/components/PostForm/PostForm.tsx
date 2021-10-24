import React, { useRef } from 'react'
import './PostForm.css'



const PostForm = (props: any) => {

  const onPostButtonClicked = () => {

    const textArea = postTextAreaRef.current;

    if (textArea) {
      const postContent = textArea.value;
      props.onPostCreated(postContent);
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