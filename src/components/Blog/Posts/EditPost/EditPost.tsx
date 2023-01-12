import React, {  } from "react";
import { editPost } from "../../../../store/slices/posts";
import { useAppDispatch } from "../../../../utils/hooks";
import { SinglePost } from "../post.model";
import edit from './editPost.module.scss'

type EditPostProps = {
  setflagEditPost: React.Dispatch<React.SetStateAction<boolean>>,
  flagEditPost: boolean,
  selectedPost: SinglePost | null,
}

export const EditPost = ({setflagEditPost, flagEditPost, selectedPost }: EditPostProps) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const descriptionRef = React.useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch()

  const editSelectPost = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(selectedPost) { 
    const newPost = {
      ...selectedPost,
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
    } as SinglePost
    dispatch(editPost(newPost))
    setflagEditPost(false)
  }

  }

  return (
    <>
      {
      flagEditPost && selectedPost && (
        <>
          <div className={edit.editForm}>
            <button onClick={() => setflagEditPost(false)}>X</button>
            <h1>создание поста</h1>
            <form>
              <input ref={titleRef}  defaultValue={selectedPost.title} required/>
              <input ref={descriptionRef}  defaultValue={selectedPost.description} required/>
              <button type="submit" onClick={editSelectPost}>сохранить</button>
            </form>
          </div>
          <div className={edit.editFormBackgraund} onClick={ () => setflagEditPost(false)}/>
        </>)
      }
    </>
  ) 
}