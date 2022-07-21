import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePostRedux, selectPostsData } from '../../../store/slices/posts';
import { useDocumentTitle, useFetchPosts } from '../../../utils/hooks';
import { HeaderBlog } from '../Header/Header';
import imgNon from '../placeholder.png'
import { AddPost } from './AddPost/AddPost';
import { ReactComponent as LikedIcon } from '../liked.svg';

// import { ReactComponent as LikedIcon } from '../liked.svg';
// import React, { useState } from 'react';
import { DeletePost } from './DeletePost/DeletePost';
import { EditPost } from './EditPost/EditPost';
import { LikePost } from './LikePost/LikePost';
import { Link } from 'react-router-dom';



// export const Posts =  ( {posts, setPosts} ) => {
    export const Posts =  ( {
        // posts,
        // setPosts,
        addPost,
        setAddPost,
        isLikedPosts = false,
        title = ''
    } ) => {

        const { posts } = useSelector(selectPostsData)

    const [flagEditPost, setflagEditPost] = useState(false)
    const [selectedPost, setSelectedPost] =useState({})
    // const { posts, setPosts, setAddPost, addPost} = useFetchPosts(POST_URL)

    const likedPosts = posts.filter((post) => post.liked)
    

    
    const editPost = (post) => {
        setSelectedPost(post)
        setflagEditPost(true)
    }

    useDocumentTitle(`${title}`)

    const dispatch = useDispatch()

    const handleLikePost = (index) => {
        const updatedPost = [...posts]
        updatedPost[index] = { ...updatedPost[index], liked: !updatedPost[index].liked }
        dispatch(likePostRedux(updatedPost[index]))
    }

    const handleDeletePost = (index) => {
        const updatedPost = [...posts]
        dispatch(deletePost(updatedPost[index]))
    }
    
    
    const description = ( (post)=>{
        <p>
          {post.description.length > 100 ? (
            <>
              {post.description.slice(0, 101)}...
            </>
          ) : (
            post.description
          )}
          &nbsp;
          <Link to={``}>Подробнее</Link>
        </p>
     } );
    


    
    return (
        <>
        <HeaderBlog/>
        <h2 className='cardh2'>{title}</h2>
        <div className='cards'>
       {
        //favorite
       ( isLikedPosts ? likedPosts : posts).map((post, index) => {
            return (
                
                <div className='blog_card' key={post.id} >
                    <img src={post.imgSrs ? post.imgSrs : imgNon} alt={post.altSrs} />
                    <h4 className='blog_title' >{post.title}</h4>
                    {/* <p>{post.description}</p> */}
                    <p>
                        {post.description.length > 100 ? (
                            <>
                            {post.description.slice(0, 101)}...
                            &nbsp;
                            <Link to={``}>Подробнее</Link>
                            </>
                        ) : (post.description)}
                    </p>
                    {/* <LikePost posts={posts} setPosts={setPosts} post={post} /> */}
                    {/* <DeletePost posts={posts} setPosts={setPosts} post={post} /> */}

                    {/* redux */}
                    <button  className='like' onClick={()=>  handleLikePost(index)}>
                        <LikedIcon fill={post.liked ? 'crimson' : 'black'} />
                    </button>
                    <button onClick={() => handleDeletePost(index)}>
                        delete
                    </button>
                    {/* <div>
                        <button onClick={()=> editPost(post)}>редактировать пост</button>
                    </div> */}
                    <div>
                    <button onClick={()=> editPost(post)}>редактировать пост</button>
                    </div>
                </div>

            )
        }

    )
    }

    </div> 
    {/* <EditPost selectedPost={selectedPost} flagEditPost={flagEditPost} setflagEditPost={setflagEditPost} posts={posts} setPosts={setPosts} /> */}
        <EditPost selectedPost={selectedPost} flagEditPost={flagEditPost} setflagEditPost={setflagEditPost} />
        
    {!isLikedPosts && <AddPost addPost={addPost} setAddPost={setAddPost} /> }

    </>        )
}


