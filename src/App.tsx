import { LogIn } from './components/LogIn/LogIn';
import { useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { fetchPosts } from './store/slices/posts';
import MenuLauout from './routes/BaseLayout';
import { Favorite } from './components/Blog/Favorite/Favorite';
import { useAppDispatch } from './utils/hooks';
import Blog from './components/Blog/Blog';
import AddPost from './routes/AddPost/AddPost';
import HeadeerLayout from './routes/header/HeaderLayout';
import HomeRoute from './routes/home/HomeRoute';
import PostRoute from './routes/postRoute/PostRoute';
import { NoMatch } from './components/NoMatch/NoMatch';

function App() {
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(fetchPosts())
  }, [dispatch])

  return  (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeadeerLayout/>}>
        <Route index element={<HomeRoute/>} />
        <Route path="blog" element={<MenuLauout/>} >
          <Route  index element={<Blog/>} />
          <Route path='favorite' element={<Favorite/>} />
        </Route>
        <Route path='new' element={<AddPost/>} />
        <Route path=':id' element={<PostRoute/>} />
      </Route>
      <Route path='*' element={<NoMatch/>} />
      <Route path='login' element={<LogIn/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
