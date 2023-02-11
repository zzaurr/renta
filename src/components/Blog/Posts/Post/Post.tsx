import IconLink from '../../../button/IconLink'
import imgNon from '../../placeholder.png'

import postCard from './post.module.scss'
import Button from '../../../button/Button'
import { SinglePost } from '../post.model'
import { Link } from 'react-router-dom'

type PostProps = {
  post: SinglePost;
  handleLikePost: (id: string) => void;
  handleDeletePost: (id: string) => void;
  editPost: (post: SinglePost) => void;
}

const Post = ({post, handleLikePost, handleDeletePost, editPost }: PostProps) => (
  <div className={postCard.postCard}>
    <Link to={`/${post.id}`}>
    <img src={post.img ? post.img : imgNon} alt={post.alt} />
    </Link>
    <h4 className={postCard.title}>{post.title}</h4>
    <p className={postCard.description}>
      {post.description.length > 100 ? (
        `${post.description.slice(0, 101)}...`
      ) : (post.description)}
    </p>
    <IconLink icon={`${post.liked ? 'isLike' : 'heart'}`} onClick={() => handleLikePost(post.id)} to="" />
    <Button label='delete' onClick={() => handleDeletePost(post.id)} />
    <Button label='edit post' onClick={() => editPost(post)} />
  </div>
)

export default Post
