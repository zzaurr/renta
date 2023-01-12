import React from 'react';
import { addPostRedux, NewPost } from '../../../../store/slices/posts';
import { useAppDispatch } from '../../../../utils/hooks';

type AddPostProps = {
    setAddPost: React.Dispatch<React.SetStateAction<boolean>>,
    addPost: boolean,
}


export const AddPost = ({ setAddPost, addPost }: AddPostProps) => {
    const titleRef = React.useRef<HTMLInputElement | null>(null)
    const desripionRef = React.useRef<HTMLInputElement | null>(null)

    const dispatch = useAppDispatch()

    const addNewPost = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const newPost = {
            title: titleRef.current!.value,
            description: desripionRef.current!.value,
            liked: false,
        } as NewPost

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