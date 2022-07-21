import { POST_URL } from '../../../Data/Data';
import { ReactComponent as LikedIcon } from '../../liked.svg';


export const LikePost = ({posts, setPosts, post}) => {
    const like = async (post) => {
        const updatedPostContent = { ...post, liked: !post.liked};
        const response = await fetch(POST_URL + post.id, {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json'
           },
          body: JSON.stringify(updatedPostContent)
    });

        const updatedPostFromServer = await response.json()

    setPosts(posts.map(post => {
        if(post.id === updatedPostFromServer.id) {
            return updatedPostFromServer
        }
        return post;
    }

    ))

}

return (
    <button  className='like' onClick={()=>  like(post)}>
        <LikedIcon fill={post.liked ? 'crimson' : 'black'} />
    </button>
)
}