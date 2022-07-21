import './Blog.css'
import { Footer } from '../Footer/Footer'
import React, { useEffect, useRef, useState } from 'react';
import { Posts } from './Posts/Posts';
import { HeaderBlog } from './Header/Header';
import { POST_URL } from '../Data/Data';
import { AddPost } from './Posts/AddPost/AddPost';
import { Custom } from '../Custom/Custom';
import { useDocumentTitle, useFetchPosts } from '../../utils/hooks';
import { Menu } from '../Menu/Menu';
import { Redirect, Route } from 'react-router-dom';
import { Favorite } from '../Favorite/Favorite';
import { NoMatch } from '../NoMatch/NoMatch';
import { useSelector } from 'react-redux';
import { selectPostsData } from '../../store/slices/posts';




export const ContentBlog = () => {


  // получаем через хук
  const postData = useFetchPosts(POST_URL)

  
  const {isLoading} = useSelector(selectPostsData)





  

    return (
      <>
      <main>
        <Menu/>
        <section id='maincontent'>
          <Route exact path='/blog' >
            <Posts {...postData} title='Blog'  />
          </Route>

          <Route exact path='/favorite' >
            <Posts {...postData} isLikedPosts title='Favorite' />
          </Route>

          {/* <AddPost addPost={addPost} posts={posts}  setAddPost={setAddPost} setPosts={setPosts} /> */}
          {/* <Custom/> */}
          <Footer/>
        </section>

     </main>
   

     </>)
}

