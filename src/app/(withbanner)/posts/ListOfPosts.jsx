import LikeButton from "./LikeButton";
import Link from "next/link";

const fetchPosts = async () => {
  console.log("fetching");
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-store",
    next: { revalidate: 60 },
  });
  const result = await data.json();
  return result;
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id} className="p-3">
      <h2 className="text-xl font-bold text-teal-500">{post.title}</h2>
      <p className="text-xs">{post.body}</p>
      <LikeButton id={post.id} />
      <Link href="/posts/[id]" as={`/posts/${post.id}`} className="bg-teal-600 hover:bg-teal-700 focus:bg-teal-800 text-xs p-1 px-4 rounded-lg my-1 mx-1">Go to post</Link>
    </article>
  ));
}
