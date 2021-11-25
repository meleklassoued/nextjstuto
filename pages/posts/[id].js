import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
// import img from "../public/vercel.svg";
// import alert from "../components/alert.module.css";
import cn from "classnames";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // console.log(data)
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const post = await res.json();
  console.log(post);
  return { props: { melek: post } };
}

function Post({ melek }) {
  const [state, setState] = useState(true);

  return (
    <div>
      <Link href='/'>aslema edheya el post page </Link>
      {/* <Image src={img} height={100} width={144} alt='vercel' /> */}
      <button onClick={() => setState(!state)}>click here</button>
      {/* <h1
        className={cn({
          [alert.success]: state === true,
          [alert.error]: state === false,
        })}>
        9oli ay shih wala ghalet
      </h1> */}
      <div>{melek.body}</div>
    </div>
  );
}

export default Post;
