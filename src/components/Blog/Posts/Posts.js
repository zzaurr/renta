import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePostRedux, selectPostsData } from '../../../store/slices/posts';
import { useDocumentTitle } from '../../../utils/hooks';
import { AddPost } from './AddPost/AddPost';

import { EditPost } from './EditPost/EditPost';
import Post from './Post';
import blog from '../blog.module.scss'



export const Posts =  ( {
  isLikedPosts = false,
  title = ''
} ) => {

  const { posts } = useSelector(selectPostsData)

  const [flagEditPost, setflagEditPost] = useState(false)
  const [selectedPost, setSelectedPost] =useState({})
  const [addPost, setAddPost] = useState(false)
  const likedPosts = posts.filter((post) => post.liked)

  const editPost = (post) => {
    setSelectedPost(post)
    setflagEditPost(true)
  }

  useDocumentTitle(`${title}`)

  const dispatch = useDispatch()

  const handleLikePost = (post) => {
    post = { ...post, liked: !post.liked}
    dispatch(likePostRedux(post))
  }

  const handleDeletePost = (index) => {
    const updatedPost = [...(isLikedPosts ? likedPosts : posts)]
    dispatch(deletePost(updatedPost[index]))
  }

  return (
    <>
      <h2 className={blog.cardh2}>{title}</h2>
      <div className={blog.cards}>
      {(isLikedPosts ? likedPosts : posts).map((post, index) => {
        return (
          <Post
            key={post.id}
            post={post}
            index={index}
            posts={posts}
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

