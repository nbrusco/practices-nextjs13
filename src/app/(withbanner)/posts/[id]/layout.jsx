import Link from "next/link";

const fetchSinglePost = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  const result = await data.json();
  return result;
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article key={post.id} className="p-3">
      <h2 className="text-xl font-bold text-teal-500">{post.title}</h2>
      <p className="text-xs">{post.body}</p>
      <Link href={`/posts/${post.id}/comments`}>
        <button className="bg-teal-600 hover:bg-teal-700 focus:bg-teal-800 text-xs p-2 my-1 rounded-lg">
          Ver comentarios
        </button>
      </Link>
      {children}
    </article>
  );
}
