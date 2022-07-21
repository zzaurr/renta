import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { POST_URL } from "../../components/Data/Data"

const initialState = {
    posts: [],
    isLoading: false,
    error: null,

}

export const fetchPosts = createAsyncThunk( 'posts/fetchPosts', async () => {
    const response = await fetch(POST_URL);
    if(response.ok) {
        return await response.json()
    } else {
        return new Error('Ошибка при получении постов')
    }
} )

export const likePostRedux = createAsyncThunk('posts/likePostRedux', async (updatedPost) => {
    const response = await fetch(POST_URL + updatedPost.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
       body: JSON.stringify(updatedPost)
 });
        if(response.ok) {
            return await response.json()
        } else {
            return new Error('Ошибка при получении поста')
        }
})

export const deletePost = createAsyncThunk('posta/deletePost', async (updatedPost) => {
    const response = await fetch(POST_URL + updatedPost.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    });
    if(response.ok) {
        return await response.json()
    } else {
        return new Error('Ошибка при удалении поста')
    }
})

export const editPost = createAsyncThunk('posts/editPost', async (newPost) => {
    const response = await fetch(POST_URL + newPost.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)

    });
    if(response.ok) {
        return await response.json()
    } else {
        return new Error ('Ошибка при изменении поста')
    }
})

export const addPostRedux = createAsyncThunk('posts/addPost', async(newPost) => {
    const response =  await fetch(POST_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    if(response.ok) {
        return await response.json()
    } else {
        return new Error ('Ошибка при добавлении поста')
    }})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        
        // запрос начался и идет загрузка
        builder.addCase(fetchPosts.pending, (state,action) => {
            state.isLoading = true
        })

        // запрос ушел успешно и данные получены
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            // полученные данные записываем в posts
            state.posts = action.payload
            state.isLoading = false
        })

        // запрос завершился с ошибкой
        builder.addCase(fetchPosts.rejected, (state,action) => {
            state.error = action.payload
            state.isLoading = false
        })

        builder.addCase(likePostRedux.fulfilled, (state, action) => {

            state.posts = state.posts.map((post) => {
                if(post.id === action.payload.id) {
                    return action.payload
                }
                 return post
            })
        })

        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter((post) => {
                return post.id !== action.payload.id
            })
        } )

        builder.addCase(editPost.fulfilled, (state, action) => {
            state.posts = state.posts.map((post) => {
                if(post.id === action.payload.id) {
                    return action.payload
                }
                return post
            })
        })

        builder.addCase(addPostRedux.fulfilled, (state, action) => {
            state.posts = [...state.posts, action.payload]
        })

    }
})

export const postReducer = postsSlice.reducer;
export const selectPostsData = (state => state.posts);
