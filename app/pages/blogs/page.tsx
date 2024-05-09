"use client";

import { getPosts } from "@/app/lib/actions/blogs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);

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

  return (
    <div>
      <h1 className="font-bold text-2xl my-4">Blogs</h1>
      <div className="">
        {posts.map((post: any) => {
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
                  <div className="prose prose-slate prose-sm text-slate-600">
                    <p>{post.body}...</p>
                  </div>
                  <div className="my-3 text-slate-700">
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
      <div></div>
    </div>
  );
}
