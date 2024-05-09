"use client";

import { getPosts } from "@/app/lib/actions/blogs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [displayCount, setDisplayCount] = useState(5); // Jumlah item yang ditampilkan
  const totalItems = posts.length;

  useEffect(() => {
    getPosts()
      .then((data: any) => {
        if (data.error) {
          console.error(data.error);
        } else {
          setPosts(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);


  const handleLoadMore = () => {
    // Tambahkan 5 item lagi setiap kali tombol "load more" ditekan
    setDisplayCount(displayCount + 5);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl my-4">Blogs</h1>
      <div className="">
        {posts.slice(0, displayCount).map((post: any, index:number) => {
          // console.log(post.comments);
          
          return (
            <div
              key={post.id}
              className="grid grid-cols-1 gap-y-3 items-start py-4"
              // onClick={''}
            >
              <div className="bg-yellow-900 w-full h-px mb-6" />
              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start px-6">
                <div className="order-1 sm:ml-6 xl:ml-0">
                  <h3 className="mb-3 text-slate-900 font-bold text-xl capitalize">
                    {post.title}
                  </h3>
                  <div className="prose prose-slate prose-sm text-slate-600 line-clamp-2 md:line-clamp-none">
                    <p>{post.body}</p>
                  </div>
                  <div className="my-3 text-slate-700 text-xs">
                    <p>Posted by : {post.userName}</p>
                  </div>
                  <Link
                    href={{ pathname: `/pages/blogs/post`, query: {
                      postId: post.id,
                      title: post.title,
                      body: post.body,
                      userName: post.userName,
                      email: post.authorEmail,
                      comments: JSON.stringify(post.comments)
                    } }}
                    passHref
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-yellow-300 text-slate-700 hover:bg-yellow-400 hover:text-slate-900 focus:ring-slate-500 mt-1"
                  >
                    <span>Read more..</span>
                  </Link>
                </div>
              </li>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full items-center">
              {displayCount < totalItems && (
        <button 
        className="text-black font-semibold bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        onClick={handleLoadMore}>Load More</button>
      )}

      </div>
    </div>
  );
}
