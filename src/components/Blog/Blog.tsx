import { Posts } from './Posts/PostList';
import blog from './blog.module.scss'

const Blog = () => {

  // const dispatch = useAppDispatch()

  // useEffect(()=> {
  //   dispatch(fetchPosts())
  // }, [dispatch])

  return (
          <Posts title='Blog'/>
  )


}

export default Blog