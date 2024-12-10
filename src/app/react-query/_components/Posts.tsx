import { useState } from "react";
import { deletePost, fetchComments, fetchPosts, updatePost } from "./utils/api";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { TComment, TPost } from "@/types/types";

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState<TPost | null>(null);

  console.log(selectedPost);

  const {
    data: posts,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(1),
    staleTime: 2000,
  });

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: ["comments", selectedPost?.id],
    queryFn: () => fetchComments(selectedPost?.id),
  });

  const hasComments = comments?.length > 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Something went wrong. <div>{error.message}</div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <h4 className="mt-4 mb-4 text-sm w-full text-center">Ipsum Posts</h4>
      <div className="flex gap-4">
        <ul
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-3/4",
            !hasComments && !isLoadingComments && "w-full"
          )}
        >
          {posts.map((post: TPost) => (
            <li key={post.id} className="h-[350px]">
              <div className="p-4 border rounded-lg h-full gap-8 justify-between flex flex-col">
                <div className="flex flex-col gap-1">
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </div>
                <div className="flex justify-between">
                  <Button
                    className="hidden lg:inline"
                    onClick={() =>
                      setSelectedPost((prev) =>
                        prev?.id === post.id ? null : post
                      )
                    }
                  >
                    Comments
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => updatePost(post.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deletePost(post.id)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {hasComments && (
          <div className="flex flex-col border rounded-lg max-h-[600px] w-1/4 sticky top-20 z-10">
            <h5 className="sticky top-0 z-20 bg-white p-4 border-b rounded-t-lg">
              Comments for{" "}
              <span className="font-bold underline">{selectedPost?.title}</span>
            </h5>
            <ul className="p-4 flex flex-col gap-8 overflow-y-scroll">
              {comments?.map((comment: TComment) => (
                <li key={comment.id} className="">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                      <h5>{comment.name}</h5>
                      <p>{comment.email}</p>
                      <p>{comment.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
