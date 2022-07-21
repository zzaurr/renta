import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addPostRedux } from '../../../../store/slices/posts';
import { POST_URL } from '../../../Data/Data';


    export const AddPost = ({setAddPost, addPost }) => {


    const titleRef = useRef();
    const desripionRef = useRef();

    const dispatch = useDispatch()

    const addNewPost = async (e) => {
        e.preventDefault()

        const newPost = {
            title: titleRef.current.value,
            description: desripionRef.current.value,
            liked: false,
        }

        // const response = await fetch(POST_URL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newPost)

        // });
        // if(response.ok){
        //     const newPostFromServer = await response.json()
        //     setPosts([...posts, newPostFromServer])
        // } else {
        //     console.log(response.statusText)
        // }

        dispatch(addPostRedux(newPost))
        setAddPost(false)

    }

    return (
        <>
         <div>
            <button onClick={()=> setAddPost(true)}>добавить пост</button>
        </div>
        {
        
            addPost ? (
            <>
                <div className='addForm'>
                    <button onClick={() => setAddPost(false)}>X</button>
                    <h1>создание поста</h1>
                    <form onSubmit={addNewPost}>
                        <input ref={titleRef} required/>
                        <input ref={desripionRef} required/>
                        <button>добавить пост</button>
                    </form>
                </div>
                <div className='addFormBackgraund' onClick={ () => setAddPost(false)}>
                </div>
            </>
            )
            :null
        }
        </>
    ) 
}