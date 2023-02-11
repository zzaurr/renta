import { useParams } from "react-router-dom"
import { useAppSelector } from "../../utils/hooks"
import imgNon from '../../components/Blog/placeholder.png'
import postRoute from './postRoute.module.scss'
import { NoMatch } from "../../components/NoMatch/NoMatch";


const PostRoute = () => {
  const {id} = useParams()
  const posts = useAppSelector(state => state.posts)
  const post = posts.posts.find(post => id === post.id)

  return (
    <>
      {post ? (
        <div className={postRoute.wrapper}>
          <div className={postRoute.item}>
            <div className={postRoute.title}>
              <h1>{post.title}</h1>
            </div>
            <div className={postRoute.wr}>
              <div className={postRoute.wrImg}>
                <div className={postRoute.first}>
                  <img className={postRoute.image} src={post.img ? post.img : imgNon} alt={post.alt}/>
                </div>
                <div className={postRoute.second}>
                  <div>
                    <img className={postRoute.image} src={post.img ? post.img : imgNon} alt={post.alt}/>
                  </div>
                  <div className={postRoute.secImg}>
                    <img className={postRoute.image} src={post.img ? post.img : imgNon} alt={post.alt}/>
                  </div>
                </div>
                <div className={postRoute.third}>
                  <div>
                    <img className={postRoute.image} src={post.img ? post.img : imgNon} alt={post.alt}/>
                  </div>
                  <div className={postRoute.secImg}>
                    <img className={postRoute.image} src={post.img ? post.img : imgNon} alt={post.alt}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={postRoute.itemDecsription}>
              <p>{post.description}</p>
            </div>
          </div>
        </div>

      ) : <NoMatch /> }
    </>
  )
}

export default PostRoute
