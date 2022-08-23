import logo from './logo.svg';
import './App.css';
import { links, TopBar } from './components/TopBar/TopBar';
import { Blog, Content, article, ContentBlog } from './components/Blog/Blog'
import {Menu, title} from './components/Menu/Menu'
import {AddPost} from './components/Blog/Blog'
import {Footer} from './components/Footer/Footer'
import { Counter } from './components/Counter/Counter';
import { LogIn } from './components/LogIn/LogIn';
import { useEffect, useState } from 'react';
import { POST_URL } from './components/Data/Data';
import { Custom } from './components/Custom/Custom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './store/slices/posts';




function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()


  useEffect(()=> {
    dispatch(fetchPosts())
  }, [dispatch])


  return  (
   <BrowserRouter>

    <Switch>
       <Route exact path="/" > 
        {isLoggedIn ? <Redirect to='/blog'/> : <Redirect to='/login'/> }
        
       </Route>

       

       

       <Route exact path='/login' >
         { isLoggedIn ? <Redirect to='/'/> : <LogIn/>   }
       </Route>



       <Route   path='/' >
         { isLoggedIn ? <ContentBlog/> : <Redirect to='/'/> }
          {/* <ContentBlog setIsLoggedIn={setIsLoggedIn}/> */}
       </Route>
       {/* <Route  path='/404' component={NoMatch} />  */}

   


      





    </Switch>
    {/* {
      isLoggedIn ?(
       <>
        <main>
          <Menu setIsLoggedIn={setIsLoggedIn}/>
          < ContentBlog  />
        </main>
        </>)
      : (<LogIn setIsLoggedIn={setIsLoggedIn}/> )
      } */}
        {/* {
      isLoggedIn ?(
       <>
        <main>
          <Menu setIsLoggedIn={setIsLoggedIn}/>
          < ContentBlog  />
        </main>
        </>)
      : (<LogIn setIsLoggedIn={setIsLoggedIn}/> )
      } */}
    
   </BrowserRouter>
  );
}

export default App;
