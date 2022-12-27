import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SinglePost } from "../../components/Blog/Posts/post.model";
import { POST_URL } from "../../components/Data/Data"

type PostsState = {
    posts: SinglePost[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk<SinglePost[], undefined, {rejectValue: string}>(
  'posts/fetchPosts',
  async (_, {rejectWithValue}) => {
    const response = await fetch(POST_URL);
    if(response.ok) {
      return await response.json()
    } else {
      return rejectWithValue('Ошибка при получении постов')
    }
  }
)

export const likePostRedux = createAsyncThunk<SinglePost, string, { rejectValue: string, state: { posts: PostsState} }>(
    'posts/likePostRedux',
    async (id, {rejectWithValue, getState}) => {
        const post = getState().posts.posts.find(post => post.id === id)
        if (post) {
            const response = await fetch(POST_URL + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
               body: JSON.stringify({
                liked: !post.liked,
              })
         })
         if(response.ok) {
            return await response.json() as SinglePost
        } 
        }

            return rejectWithValue('Ошибка при получении поста')
})

export const deletePost = createAsyncThunk<string, string, {rejectValue: string}>(
    'posta/deletePost',
    async (id, {rejectWithValue}) => {
    const response = await fetch(POST_URL + id, {
        method: 'DELETE',
    });
    if(response.ok) {
        return id
    } else {
        return rejectWithValue('Ошибка при удалении поста')
    }
})

export const editPost = createAsyncThunk<SinglePost, SinglePost, {rejectValue: string}>(
    'posts/editPost',
    async (newPost, {rejectWithValue}) => {
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
        return rejectWithValue('Ошибка при изменении поста')
    }
})

export const addPostRedux = createAsyncThunk<SinglePost, string, {rejectValue: string}>(
  'posts/addPost',
  async(newPost, {rejectWithValue}) => {
    const response =  await fetch(POST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
  })
  if(response.ok) {
    return (await response.json()) as SinglePost
  } else {
    return rejectWithValue('Ошибка при добавлении поста')
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // запрос начался и идет загрузка
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
      })
        // запрос ушел успешно и данные получены
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // полученные данные записываем в posts
        state.posts = action.payload
        state.isLoading = false
      })

      .addCase(likePostRedux.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if(post.id === action.payload.id) {
            return action.payload
          }
          return post
        })
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload)
      })

      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if(post.id === action.payload.id) {
            return action.payload
          }
          return post
        })
      })

      .addCase(addPostRedux.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload]
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.isLoading = false
      })
    }
})

export const postReducer = postsSlice.reducer;
// export const selectPostsData = (state => state.posts);

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}
