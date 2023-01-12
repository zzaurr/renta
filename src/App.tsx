import './App.scss';
import { LogIn } from './components/LogIn/LogIn';
import { useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { fetchPosts } from './store/slices/posts';
import MenuLauout from './routes/MenuLayout';
import { Favorite } from './components/Favorite/Favorite';
import { useAppDispatch } from './utils/hooks';
import Blog from './components/Blog/Blog';




function App() {
  const dispatch = useAppDispatch()


  useEffect(()=> {
    dispatch(fetchPosts())
  }, [dispatch])


  return  (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<MenuLauout/>} >
          <Route  index element={<Blog/>} />
          <Route path='favorite' element={<Favorite/>} />
         </Route>
         <Route path='login' element={<LogIn/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
