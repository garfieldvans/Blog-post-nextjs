import Link from "next/link";
import React from "react";
import { VscRepo } from "react-icons/vsc";

export default function App() {
  const problem = [
    "Terlalu lama untuk memikirkan bentuk dan desain yang akan di implementasikan.",
    "Data pada API yang kurang sinkron sehingga untuk mengimplementasikan fungsi CRUD seperti untuk mengambil data post namun user yang dituju tidak tersedia sehingga terjadi error.",
    "Karena API nya mengakibatkan error, maka saya mengganti API dengan https://jsonplaceholder.typicode.com/ dengan jenis yang kurang lebih mirip, namun masalahnya fungsi yang dapat dicoba hanyalah fungsi Read.",
  ];
  return (
    <div className="">
      <div className="bg-yellow-300 p-6 rounded-b-lg">
        <h1 className="font-bold md:text-2xl text-lg mb-4">Project Story</h1>
        <span className="md:text-ml text-sm text-justify">
          Project ini dibuat sebagai bahan technical test untuk posisi{" "}
          <b>Front End Developer</b> dengan kasus membuat sebuah single page
          dengan mengimplementasikan serangkaian fungsi seperti Create, Read,
          Update, dan Delete (CRUD). API yang digunakan adalah API yang dapat
          diakses oleh publik{" "}
          <a href="https://gorest.co.in">
            <u>(Gorest.co.in)</u>.
          </a>
        </span>
      </div>
      <div className="py-4 mx-6">
        <h1 className="mb-3 font-bold text-xl">Problem</h1>
        <div className="">
          {problem.map((data: any, index: number) => {
            return (
              <div
                className="flex flex-row gap-x-4 items-start mb-2"
                key={index}
              >
                <h1 className="font-bold text-2xl text-start flex ">~</h1>
                <p className="text-base">{data}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Link
        href={"https://github.com/garfieldvans/Blog-post-nextjs"}
        className="px-6 py-3 flex flex-row gap-x-2 items-center bg-slate-600 text-white rounded-lg md:ml-6 w-max font-semibold text-md"
      >
        <VscRepo size={20} color="white" />
        Repository
      </Link>
    </div>
  );
}
