import { Footer } from '../Footer/Footer'
import React from 'react';
import { POST_URL } from '../Data/Data';
import { useSelector } from 'react-redux';
import { selectPostsData } from '../../store/slices/posts';
import { useFetchPosts } from '../../utils/hooks';
import blog from './blog.module.scss'
import { Posts } from './Posts/Posts';






export const ContentBlog = () => {


  // получаем через хук
  const postData = useFetchPosts(POST_URL)

  
  const {isLoading} = useSelector(selectPostsData)
    return (
      <>
      <main>
        {/* <Menu/> */}
        <section id='maincontent'>
          <Posts />
          {/* <AddPost addPost={addPost} posts={posts}  setAddPost={setAddPost} setPosts={setPosts} /> */}
        </section>

     </main>
   

     </>)
}

