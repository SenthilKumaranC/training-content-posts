import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
//Rule to loop through Array and convert to components - Command : Convert Array to UI
//array.map();
//add anonymous arrow function inside map function
//add inputs to arrow argument - item , index
//Return Component
//Add Key 
//Pass other datas

const Posts = (props: any) => {

    const { posts} = props;

    return <div className="Posts">
        {
            posts.map((post: any, index: number) => <Post key={index} post={post}></Post>)
        }

    </div>

    /*console.log("inside posts", props);

    return <>
        {
            props.posts.map((post: string) => {
                return <Post content={post}></Post>
            })
        }
    </>*/
}

export default Posts