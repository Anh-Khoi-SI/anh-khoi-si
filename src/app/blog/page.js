"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogCategoriesMenu from "@/components/ui/BlogCategoriesMenu";
import { Spin, Pagination } from "antd";
import { useRouter } from "next/navigation";
import ComingSoon from "@/components/shared/ComingSoon";

export default function Blog() {
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [blogsPerPage] = useState(4);

  // const router = useRouter();

  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .get("/api/blogs")
  //     .then((res) => {
  //       setBlogs(res.data);
  //     })
  //     .catch((err) => console.error("Error fetching blogs:", err))
  //     .finally(() => setLoading(false));
  // }, []);

  // const indexOfLastBlog = currentPage * blogsPerPage;
  // const indexOfFirstPost = indexOfLastBlog - blogsPerPage;
  // const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastBlog);

  // const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  return (
    // <>
    //   <section className="pt-[87px] justify-center flex flex-col items-center">
    //     {loading ? (
    //       <div className="flex justify-center items-center h-[500px]">
    //         <Spin />
    //       </div>
    //     ) : (
    //       blogs.length > 0 && (
    //         <div className="max-w-[1400px] w-full gap-4 flex flex-col py-6">
    //           <div className="text-4xl font-bold">{blogs[0].title}</div>
    //           <div className="text-secondary">{blogs[0].subTitle}</div>
    //           <div className="h-[500px] relative">
    //             <Image
    //               src={blogs[0].banner}
    //               fill
    //               alt="newest-blog"
    //               className="object-cover"
    //             />
    //           </div>
    //         </div>
    //       )
    //     )}

    //     <div className="flex items-start max-w-[1400px] w-full py-6">
    //       <span className=" border-b-[2px] border-primary text-2xl font-medium pb-2 uppercase">
    //         Tin tức mới nhất
    //       </span>
    //     </div>
    //     <div className="max-w-[1400px] w-full gap-6 grid grid-cols-3">
    //       <div className="col-span-2 ">
    //         <div className="grid grid-cols-2  gap-6">
    //           {loading ? (
    //             <Spin className="col-span-2 flex justify-center" />
    //           ) : (
    //             currentPosts.map((blog, index) => (
    //               <div
    //                 className="gap-4 flex flex-col bg-lightbackground pb-4 cursor-pointer group"
    //                 key={index}
    //                 onClick={() => router.push(`/blog/${blog.slug}`)}
    //               >
    //                 <div className="w-full h-[300px] relative">
    //                   <Image
    //                     src={blog.banner}
    //                     fill
    //                     alt={`Blog image ${index}`}
    //                     className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
    //                   />
    //                 </div>
    //                 <div className="px-4 gap-4 flex flex-col">
    //                   <div className="font-medium text-xl">{blog.title}</div>
    //                   <div className="">{blog.subTitle}</div>
    //                   <div className="">
    //                     <span className="group-hover:border-b-[1px] group-hover:border-black border-lightbackground border-b-[1px] cursor-pointer font-medium transition-all duration-300">
    //                       Xem Thêm
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))
    //           )}
    //         </div>
    //         <div className="flex justify-center items-center py-6 ">
    //           <Pagination
    //             current={currentPage}
    //             pageSize={blogsPerPage}
    //             total={blogs.length}
    //             onChange={handlePageChange}
    //             showSizeChanger={false}
    //           />
    //         </div>
    //       </div>
    //       <BlogCategoriesMenu />
    //     </div>
    //   </section>
    // </>

    <ComingSoon />
  );
}
