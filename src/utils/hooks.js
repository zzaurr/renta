import { useEffect, useState } from "react"


export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `React app: ${title}`
    }, [])
}

export const useInput = (initialValue, required) => {
    const [value, setValue] = useState(initialValue)
    const [isEmpty, setIsEmpty] = useState(false)

    return {
        value,
        onChange: (e) => setValue(e.target.value),
        onBlur: (e) => {
            if (e.target.value && required) {
                setIsEmpty(true)
            } else setIsEmpty(false)
        },
        required,
        isEmpty,
    }
}

export const useFetchPosts = (url) => {
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
