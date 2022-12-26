import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import IconLink from '../../button/IconLink'
import imgNon from '../placeholder.png'

import blog from '../blog.module.scss'

const Post = ({post, index, posts, handleLikePost, handleDeletePost, editPost }) => (
  <div className={blog.blog_card}>
    <img src={post.imgSrs ? post.imgSrs : imgNon} alt={post.altSrs} />
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
    <IconLink icon={`${post.liked ? 'isLike' : 'heart'}`} onClick={() => handleLikePost(post)} to="" />
    <Button label='delete' onClick={() => handleDeletePost(index)} />
    <Button label='edit post' onClick={() => editPost(post)} />

  </div>
)

export default Post
