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

        dispatch(addPostRedux(newPost))
        setAddPost(false)
    }

    const showForm = () => {
        setAddPost(true)
    }

    return (
        <>
         <div>
            <button onClick={() => showForm()}>добавить пост</button>
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