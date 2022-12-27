import { useEffect, useState } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"


export const useDocumentTitle = (title: unknown) => {
    useEffect(() => {
        document.title = `React app: ${title}`
    }, [title])
}

export const useInput = (initialValue: any, required: any) => {
    const [value, setValue] = useState(initialValue)
    const [isEmpty, setIsEmpty] = useState(false)

    return {
        value,
        onChange: (e: { target: { value: any } }) => setValue(e.target.value),
        onBlur: (e: { target: { value: any } }) => {
            if (e.target.value && required) {
                setIsEmpty(true)
            } else setIsEmpty(false)
        },
        required,
        isEmpty,
    }
}

export const useFetchPosts = () => {
    const [addPost, setAddPost] = useState(false)
    const [posts, setPosts] = useState([])
  
    // useEffect(async () => {
  
    //     const fetchPosts = async () => {
    //         const response = await fetch(url);
    //         const json = await response.json()
    //         setPosts(json);
    //     }
    //   fetchPosts()
    // },[url])
    // return { posts, setPosts, addPost, setAddPost}
    return { addPost, setAddPost}

}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
