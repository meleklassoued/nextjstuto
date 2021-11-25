import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>all Posts</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h3>{post.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
