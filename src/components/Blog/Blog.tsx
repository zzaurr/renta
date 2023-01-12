import { Posts } from './Posts/Posts';

const Blog = () => {

  // const dispatch = useAppDispatch()

  // useEffect(()=> {
  //   dispatch(fetchPosts())
  // }, [dispatch])

  return (
    <>
    <main>
        <section id='maincontent'>
          <Posts />
        </section>
    </main>
  </>
  )


}

export default Blog