import React from 'react';
import { addPostRedux, NewPost } from '../../../../store/slices/posts';
import { useAppDispatch } from '../../../../utils/hooks';




export const AddPost = () => {
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
    }

    return (
        
            <>
                <div className='addForm'>
                    <h1>создание поста</h1>
                    <form onSubmit={addNewPost}>
                        <input ref={titleRef} required/>
                        <input ref={desripionRef} required/>
                        <button>добавить пост</button>
                    </form>
                </div>
            </>
    ) 
}