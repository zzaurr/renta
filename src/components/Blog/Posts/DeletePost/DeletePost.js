import { POST_URL } from "../../../Data/Data";


export const DeletePost = ({posts, setPosts, post}) => {
    const deletePost = async (post) => {
       
        const response = await fetch(POST_URL + post.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)

        });
        if(response.ok) {
            const deletePostFromServer = await response.json()
            setPosts(posts.filter((post) =>{
                return post.id !== deletePostFromServer.id
            }))
        } else {
            console.log(response.statusText)
        }
    }
    return (
        <button onClick={() => deletePost(post)}>
            delete
        </button>
    )
}