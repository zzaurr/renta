import { Link } from 'react-router-dom'
import IconLink from '../../button/IconLink'
import imgNon from '../placeholder.png'

import blog from '../blog.module.scss'
import Button from '../../button/Button'
import React from 'react'
import { SinglePost } from './post.model'

type PostProps = {
  post: SinglePost;
  index: number;
  handleLikePost: (id: string) => void;
  handleDeletePost: (id: string) => void;
  editPost: (post: SinglePost) => void;
}

const Post = ({post, index, handleLikePost, handleDeletePost, editPost }: PostProps) => (
  <div className={blog.blog_card}>
    <img src={post.img ? post.img : imgNon} alt={post.alt} />
    <h4 className={blog.blog_title}>{post.id}</h4>
    <p>
      {post.description.length > 100 ? (
        <>
        {post.description.slice(0, 101)}...
        &nbsp;
        <Link to={''}>
          Подробнее
        </Link></>
      ): (post.description)}
    </p>
    <IconLink icon={`${post.liked ? 'isLike' : 'heart'}`} onClick={() => handleLikePost(post.id)} to="" />
    <Button label='delete' onClick={() => handleDeletePost(post.id)} />
    <Button label='edit post' onClick={() => editPost(post)} />

  </div>
)

export default Post
