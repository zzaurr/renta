import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePostRedux } from '../../../store/slices/posts';
import { useAppDispatch, useAppSelector, useDocumentTitle } from '../../../utils/hooks';
import { AddPost } from './AddPost/AddPost';

import { EditPost } from './EditPost/EditPost';
import Post from './Post';
import blog from '../blog.module.scss'
import React from 'react';
import { SinglePost } from './post.model';



export const Posts =  ( {
  isLikedPosts = false,
  title = ''
} ) => {

  const { posts } = useAppSelector(state => state.posts)

  const [flagEditPost, setflagEditPost] = useState(false)
  const [selectedPost, setSelectedPost] =useState({})
  const [addPost, setAddPost] = useState(false)
  const likedPosts = posts.filter((post) => post.liked)

  const editPost = (post: React.SetStateAction<{}>) => {
    setSelectedPost(post)
    setflagEditPost(true)
  }

  useDocumentTitle(`${title}`)

  const dispatch = useAppDispatch()

  const handleLikePost = (id: string) => {
    dispatch(likePostRedux(id))
  }

  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id))
  }

  return (
    <>
      <h2 className={blog.cardh2}>{title}</h2>
      <div className={blog.cards}>
      {(isLikedPosts ? likedPosts : posts).map((post, index) => {
        console.log(post)
        return (
          <Post 
            key={post.id}
            post={post}
            index={index}
            handleLikePost={handleLikePost}
            handleDeletePost={handleDeletePost}
            editPost={editPost}
          />
        )
        })
      }
      </div> 
      <EditPost selectedPost={selectedPost} flagEditPost={flagEditPost} setflagEditPost={setflagEditPost} />
      {!isLikedPosts && <AddPost addPost={addPost} setAddPost={setAddPost} /> }
    </>)
}

