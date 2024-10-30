"use client";

import { PostNode } from "@/types";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "../PostCard";

const PostList = ({ initialPosts }: { initialPosts: PostNode[] }) => {
  const [items, setItems] = useState(initialPosts.slice(0, 2)); // Load only the first 2 initially
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePosts = () => {
    const newItems = initialPosts.slice(items.length, items.length + 2);

    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prevItems) => [...prevItems, ...newItems]);
    }
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={<h4 className="text-center">Loading more posts...</h4>}
      endMessage={<p className="text-center">No more posts available.</p>}
    >
      <div className="pb-12">
        {items.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PostList;
