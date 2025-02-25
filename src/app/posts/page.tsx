import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import { getQueryClient } from '../get-query-client';
import { getPosts } from "../api";
import Posts from "./Posts";
import CommentsServerComponent from "./CommentsServerComponent";


const PostsPage = async () => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts/>
        <CommentsServerComponent/>
    </HydrationBoundary>
  )
}

export default PostsPage