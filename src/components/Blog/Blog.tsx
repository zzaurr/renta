import React from 'react';
import { POST_URL } from '../Data/Data';
import { useFetchPosts } from '../../utils/hooks';
import { Posts } from './Posts/Posts';






export const ContentBlog = () => {


  // получаем через хук
  // const postData = useFetchPosts(POST_URL)

  
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

