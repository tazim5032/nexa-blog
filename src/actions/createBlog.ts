"use server";

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const blogdata = Object.fromEntries(data.entries());
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogdata),
  });

  const blogInfo = await res.json();

  if (blogInfo) {
    redirect(`/blogs/${blogInfo.id}`);
  }

  return blogInfo;
};
