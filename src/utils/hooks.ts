import { useEffect, useState } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"


export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = `React app: ${title}`
    }, [title])
}

export const useFetchPosts = () => {
    const [addPost, setAddPost] = useState(false)
    return { addPost, setAddPost}

}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
