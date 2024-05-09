"use client";

import React from "react";
import { FaRegComment, FaRegCommentDots } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiChatText } from "react-icons/pi";

export default function DetailPost({
  searchParams,
}: {
  searchParams: {
    postId: any;
    title: any;
    body: any;
    userName: any;
    email: any;
    comments: any[] | string | null | undefined;
  };
}) {
  const comments =
    typeof searchParams.comments === "string"
      ? JSON.parse(searchParams.comments)
      : [];

  return (
    <div className="md:flex md:flex-row md:gap-x-16 md:mt-4 mt-3 postContainer">
      <div className="flex items-start bg-yellow-300 p-3 rounded-lg md:w-3/12 md:flex-none md:justify-center md:max-h-64 ">
        <div className=" flex justify-center flex-col w-full px-4 ">
          <div className="gap-x-3 flex items-center md:pt-4 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 61.8 61.8"
              id="avatar"
              className="md:h-10 md:w-10 h-8 w-8"
            >
              <g>
                <g>
                  <circle cx="30.9" cy="30.9" r="30.9" fill="#9f82bb"></circle>
                  <path
                    fill="#f9dca4"
                    fillRule="evenodd"
                    d="m23.255 38.68 15.907.121v12.918l-15.907-.121V38.68z"
                  ></path>
                  <path
                    fill="#434955"
                    fillRule="evenodd"
                    d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.206 31.206 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.114 8.47-5.475 8.47-10.15l12.79 6.282z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M39.166 38.778v3.58a7.785 7.785 0 0 1-.099 1.18 6.52 6.52 0 0 1-.395 1.405c-5.374 4.164-13.939.748-15.306-6.365z"
                    opacity=".11"
                  ></path>
                  <path
                    fill="#ffe8be"
                    fillRule="evenodd"
                    d="M31.129 8.432c21.281 0 12.988 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                  ></path>
                  <path
                    fill="#f9dca4"
                    fillRule="evenodd"
                    d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.977 31.977 0 0 1-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.998 31.998 0 0 0 1.471-7.658z"
                  ></path>
                  <path
                    fill="#677079"
                    fillRule="evenodd"
                    d="M23.252 42.382a48.332 48.332 0 0 0-13.204 5.288c-1.645.945-1.605 2.399-1.237 2.926 1.316 1.882 5.551-.522 7.089-1.16a84.89 84.89 0 0 1 8.041-2.989 8.592 8.592 0 0 1-.689-4.065z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M31.209 60.625c-3.027-2.19-7.913-8.17-7.957-15.213 0 7.68 15.91 7.65 15.91-.03-.652 8.036-4.983 13.179-7.953 15.243z"
                  ></path>
                  <path
                    fill="#677079"
                    fillRule="evenodd"
                    d="M39.277 42.157a52.227 52.227 0 0 1 12.192 5.326c1.645.945 1.605 2.398 1.237 2.925-1.316 1.882-5.551-.522-7.089-1.159-2.98-1.235-6.154-2.87-7.03-3.027a8.591 8.591 0 0 0 .69-4.065zM23.255 40.89c-.112 7.495 5.759 14.21 10.055 20.18.13.18-.127-.179 0 0-.573-.033-.78.44-1.379.345-5.324-.843-11.383-3.965-12.981-6.47-.303-.474 3.34-3.912 3.151-4.434-.102-.284-3.172.096-4.918.647-.128.04-.142-.238-.171-.369-.809-3.712.593-7.876 6.243-9.9z"
                  ></path>
                  <path
                    fill="#434955"
                    fillRule="evenodd"
                    d="M31.53 60.085a.353.353 0 1 1-.108.697 26.957 26.957 0 0 1-7.175-2.247 10.997 10.997 0 0 1-4.466-3.401c-.27-.425.587-1.526 1.49-2.68a12.29 12.29 0 0 0 1.643-2.343 8.808 8.808 0 0 0-1.615-.029 15.84 15.84 0 0 0-3.093.374c-.11.027-.219.058-.324.09l-.024.007a.41.41 0 0 1-.48-.236 2.304 2.304 0 0 1-.21-.817 6.746 6.746 0 0 1-.005-1.304 8.368 8.368 0 0 1 5.613-7.133.353.353 0 0 1 .263.656 7.681 7.681 0 0 0-5.17 6.538 6.032 6.032 0 0 0 .002 1.166 3.059 3.059 0 0 0 .061.373l.105-.027a16.624 16.624 0 0 1 3.246-.392 4.106 4.106 0 0 1 2.163.337.35.35 0 0 1 .129.149.303.303 0 0 1 .016.041l.008.027c.129.52-.846 1.77-1.773 2.957a219.53 219.53 0 0 0-1.45 1.866 10.353 10.353 0 0 0 4.179 3.145 26.217 26.217 0 0 0 6.975 2.186z"
                  ></path>
                  <path
                    fill="#677079"
                    fillRule="evenodd"
                    d="M39.162 40.89c.116 7.721-6.387 14.71-10.71 20.813 9.957.15 13.058-4.555 15.016-6.759.373-.42-3.34-3.911-3.151-4.433.102-.284 3.172.096 4.917.647.129.04.143-.237.172-.369.809-3.712-.593-7.876-6.244-9.9z"
                  ></path>
                  <path
                    fill="#434955"
                    fillRule="evenodd"
                    d="M29.313 61.2a.353.353 0 1 1 .061-.704 14.12 14.12 0 0 0 6.967-1.355 14.012 14.012 0 0 0 5.72-4.387c.002-.004-.706-.911-1.45-1.865-.927-1.188-1.902-2.438-1.773-2.958l.007-.026a.346.346 0 0 1 .017-.042.355.355 0 0 1 .129-.15 4.107 4.107 0 0 1 2.162-.336 16.624 16.624 0 0 1 3.247.392l.104.027a3.037 3.037 0 0 0 .061-.373 6.032 6.032 0 0 0 .002-1.166 7.681 7.681 0 0 0-5.17-6.537.353.353 0 0 1 .264-.656 8.368 8.368 0 0 1 5.612 7.132 6.746 6.746 0 0 1-.005 1.304 2.304 2.304 0 0 1-.21.817.41.41 0 0 1-.48.236l-.024-.006a5.414 5.414 0 0 0-.323-.091 15.84 15.84 0 0 0-3.094-.373 8.81 8.81 0 0 0-1.614.028 12.27 12.27 0 0 0 1.644 2.343c.902 1.156 1.76 2.256 1.489 2.68a14.749 14.749 0 0 1-6.024 4.652 14.815 14.815 0 0 1-7.319 1.413z"
                  ></path>
                  <circle
                    cx="40.111"
                    cy="54.597"
                    r=".839"
                    fill="#e6e6e6"
                  ></circle>
                  <circle
                    cx="22.427"
                    cy="54.597"
                    r=".839"
                    fill="#e6e6e6"
                  ></circle>
                  <circle
                    cx="19.315"
                    cy="48.072"
                    r=".839"
                    fill="#e6e6e6"
                  ></circle>
                  <circle
                    cx="43.202"
                    cy="48.072"
                    r=".839"
                    fill="#e6e6e6"
                  ></circle>
                  <path
                    fill="#464449"
                    fillRule="evenodd"
                    d="M17.034 25.782a2.746 2.746 0 0 1 .582-1.205 12.17 12.17 0 0 0 2.22 7.126c-1.575-14.925 1.527-17.546 1.527-17.546s9.318 7.031 19.669-.019c0 0 3.279 2.639 1.704 17.564 1.575-2.325 1.93-4.307 2.044-7.195a2.466 2.466 0 0 1 .716 1.406s1.774-9.07-2.154-14.081c.356-.563 2.175-2.139 2.737-2.101s-2.4-1.2-6-.6a10.935 10.935 0 0 1 2.963-2.213 21.344 21.344 0 0 0-5.55-.338 16.103 16.103 0 0 1 3.375-1.95 15.98 15.98 0 0 0-8.888-.112 14.069 14.069 0 0 1 3.675-3.075s-9.487.525-14.437 7.575a5.614 5.614 0 0 1 .096-3.413s-6.263 5.879-4.279 20.177zM31.259 46.344c-6.417-2.945-3.82-7.121-3.82-7.121a2.47 2.47 0 0 0 1.68 2.037 5.907 5.907 0 0 1 2.14-2.476 7.359 7.359 0 0 1 2.095 2.476 2.471 2.471 0 0 0 1.68-2.037s2.64 4.176-3.775 7.121z"
                  ></path>
                  <path
                    fill="#677079"
                    fillRule="evenodd"
                    d="m20.887 24.242.063-.015c7.112-1.767 8.763.026 9.147.943a3.966 3.966 0 0 1 2.294.01c.376-.914 2.012-2.727 9.152-.953l.062.015 1.104.293a.361.361 0 0 1-.192.696l-.643-.174c.02 1.454-.316 5.533-4.67 5.845-4.64.331-4.935-3.882-4.932-5.001a3.192 3.192 0 0 0-2.051-.014c.005 1.099-.274 5.347-4.933 5.015-4.354-.312-4.69-4.391-4.67-5.845l-.642.174a.361.361 0 1 1-.193-.696z"
                  ></path>
                  <path
                    fill="#e6e6e6"
                    fillRule="evenodd"
                    d="M36.128 23.883a10.984 10.984 0 0 1 2.434-.019l-2.901 6.513a3.908 3.908 0 0 1-1.896-1.19l2.363-5.304zm-11.576-.32a12.06 12.06 0 0 1 2.67-.021l-3.183 7.142a4.286 4.286 0 0 1-2.078-1.304l2.59-5.816zm3.59.154-3.246 7.145q.19.025.392.04c.082.005.163.01.242.013l3.182-7.002a4.536 4.536 0 0 0-.57-.195zm11.26.307-2.96 6.515q.173.023.357.036c.075.005.149.01.221.012l2.902-6.385a4.245 4.245 0 0 0-.52-.178z"
                    opacity=".5"
                  ></path>
                  <path
                    fill="#464449"
                    fillRule="evenodd"
                    d="M20.887 24.242a.351.351 0 0 1 .063-.015c7.112-1.767 8.763.026 9.147.943a3.966 3.966 0 0 1 2.294.01c.376-.914 2.012-2.727 9.152-.953a.34.34 0 0 1 .062.015c.355.089.722.186 1.104.293a.361.361 0 0 1-.192.696c-.22-.061-.433-.119-.643-.174.02 1.454-.316 5.533-4.67 5.845-4.64.331-4.935-3.882-4.932-5.001a3.192 3.192 0 0 0-2.051-.014c.005 1.099-.274 5.347-4.933 5.015-4.354-.312-4.69-4.391-4.67-5.845-.21.055-.423.113-.642.174a.361.361 0 1 1-.193-.696c.382-.107.749-.204 1.104-.292zm16.266 5.938c3.957-.283 4.04-4.267 3.994-5.308-7.813-1.915-8.132.574-8.145.775L33 25.67c0 .014-.353 4.831 4.152 4.51zM20.95 24.227l.091-.002a.339.339 0 0 0-.092.002zm.396.644c-.047 1.042.037 5.026 3.993 5.309 4.505.321 4.153-4.496 4.152-4.51v-.023c-.014-.201-.333-2.69-8.145-.775z"
                  ></path>
                </g>
              </g>
            </svg>
            <h1 className="font-bold lg:text-lg md:text-xs text-base">{searchParams.userName}</h1>
          </div>
          <div className="">
            <div className="bg-yellow-500 w-full h-px my-3  hidden md:block " />
            <h1 className="text-xs lg:text-md my-4 flex items-center">
              <IoMailOutline size={17} color="tomato" className="mx-1" />{" "}
              {searchParams.email}
            </h1>
            <div className="bg-yellow-500 w-full h-px my-3 hidden md:block" />
            <p className="flex items-center text-xs lg:text-md">
              <FaRegCommentDots size={17} color="tomato" className="mx-1" />{" "}
              {comments.length}
            </p>
          </div>
        </div>
      </div>
      <div className=" md:grow py-4">
        <h1 className="font-bold lg:text-3xl md:text-2xl text-lg text-justify capitalize mb-6 ">
          {searchParams.title}
        </h1>
        <h1 className="text-justify mb-10">{searchParams.body}</h1>

        <section className="bg-white antialiased">
          <div className="">
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-black-900">
                Comments ({comments.length})
              </h2>
            </div>

            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-700 rounded-lg focus:ring-4 focus:ring-slate-200 hover:bg-slate-800"
              >
                Post comment
              </button>
            </form>
          </div>
          {comments.map((comment: any) => (
          <article className="py-4 mb-3 text-base bg-white border-t border-gray-200" key={comment.id}>
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center justify-between w-full">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold truncate">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie Green"
                  />
                  {comment.name}
                </p>
                <p className="text-xs md:text-sm text-gray-600 ">
                  <time dateTime="2022-03-12" title="March 12th, 2022"  className="text-xs">
                    03/12/24
                  </time>
                </p>
              </div>
            </footer>
            <p className="text-gray-500 text-justify text-xs md:text-sm">
            {comment.body}
            </p>
            <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-xs text-gray-500 hover:underline font-medium">
                    <PiChatText size={15} color="indigo" />             
                Reply
            </button>
            </div>
          </article>

            ))}

        </section>
      </div>
    </div>
  );
}
