import React from 'react'
import { Posts } from '../Posts/PostList'

export const Favorite = () => {
  return (
    <Posts isLikedPosts={true} title='Favorite'/>
  )
}
