import './App.css';
import { ContentBlog } from './components/Blog/Blog'
import { LogIn } from './components/LogIn/LogIn';
import { useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './store/slices/posts';
import MenuLauout from './routes/MenuLayout';
import { HeaderBlog } from './components/Header/Header';
import { Favorite } from './components/Favorite/Favorite';
import React from 'react';
import { useAppDispatch } from './utils/hooks';




function App() {
  const dispatch = useAppDispatch()


  useEffect(()=> {
    dispatch(fetchPosts())
  }, [dispatch])


  return  (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<MenuLauout/>} >
          <Route  index element={<ContentBlog/>} />
          <Route path='favorite' element={<Favorite/>} />
         </Route>
         <Route path='login' element={<LogIn/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
