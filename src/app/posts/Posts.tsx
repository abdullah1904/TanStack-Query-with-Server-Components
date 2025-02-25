"use client"

import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../api"

const Posts = () => {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Posts