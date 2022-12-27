import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../../store/slices/posts";
import edit from './editPost.module.scss'

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
    dispatch(editPost(newPost))
    setflagEditPost(false)
  }

  return (
    <>
      {
      flagEditPost && (
        <>
          <div className={edit.editForm}>
            <button onClick={() => setflagEditPost(false)}>X</button>
            <h1>создание поста</h1>
            <form>
              <input ref={titleRef}  defaultValue={selectedPost.title} required/>
              <input ref={descriptionnRef}  defaultValue={selectedPost.description} required/>
              <button type="submit" onClick={editSelectPost}>сохранить</button>
            </form>
          </div>
          <div className={edit.editFormBackgraund} onClick={ () => setflagEditPost(false)}/>
        </>)
      }
    </>
  ) 
}