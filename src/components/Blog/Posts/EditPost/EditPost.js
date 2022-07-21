import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../../store/slices/posts";
import { POST_URL } from "../../../Data/Data";
import './EditPost.css'

export const EditPost = ({setflagEditPost, flagEditPost, selectedPost }) => {
    const titleRef = useRef();
    const descriptionnRef = useRef();

    const dispatch = useDispatch()


    const editSelectPost = async (e) => {
        e.preventDefault()

        const newPost = {
            ...selectedPost,
            title: titleRef.current.value,
            description: descriptionnRef.current.value,
        }


        // const response = await fetch(POST_URL + selectedPost.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newPost)

        // });

        // const updatedPostFromServer = await response.json()

        // setPosts(posts.map(post => {
        //     if(post.id === updatedPostFromServer.id) {
        //         return updatedPostFromServer
        //     }
        //     return post;
        // }))

        // const updatedPost = [...posts]
        dispatch(editPost(newPost))
        


        setflagEditPost(false)

    }

    return (
        <>
         
        {
        
        flagEditPost ? (
            <>
                <div className='editForm'>
                    <button onClick={() => setflagEditPost(false)}>X</button>
                    <h1>создание поста</h1>
                    <form>
                        <input ref={titleRef}  defaultValue={selectedPost.title} required/>
                        <input ref={descriptionnRef}  defaultValue={selectedPost.description} required/>
                        <button type="submit" onClick={editSelectPost}>сохранить</button>
                    </form>
                </div>
                <div className='editFormBackgraund' onClick={ () => setflagEditPost(false)}>
                </div>
            </>
            )
            :null
        }
        </>
    ) 
}