import {  useState } from 'react';
import { deletePost, likePostRedux } from '../../../store/slices/posts';
import { useAppDispatch, useAppSelector, useDocumentTitle } from '../../../utils/hooks';

import { EditPost } from './EditPost/EditPost';
import Post from './Post/Post';
import blog from '../blog.module.scss'
import React from 'react';
import { SinglePost } from './post.model';


type PostListProps = {
  isLikedPosts?: boolean,
  title: string,
}

export const Posts =  ( {
  isLikedPosts = false,
  title,
}: PostListProps ) => {

  const { posts } = useAppSelector(state => state.posts)

  const [flagEditPost, setflagEditPost] = useState(false)
  const [selectedPost, setSelectedPost] = React.useState<SinglePost | null>(null)
  const likedPosts = posts.filter((post) => post.liked)

  const editPost = (post: SinglePost) => {
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
    <div className={blog.maincontent}>
      <h2 className={blog.title}>{title}</h2>
      <div className={blog.postList}>
      {(isLikedPosts ? likedPosts : posts).map((post, index) => (
          <Post 
            key={post.id}
            post={post}
            handleLikePost={handleLikePost}
            handleDeletePost={handleDeletePost}
            editPost={editPost}
          />
      ))
      }
      </div> 
      <EditPost selectedPost={selectedPost} />
    </div>)
}

