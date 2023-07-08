import Link from "next/link";
import Image from "next/image";

const fetchComments = async (id) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error()
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: { revalidate: 60 },
    }
  );
  const result = await data.json();
  return result;
};

export default async function ListOfPosts({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className="p-3">
          <Image
            src={`https://unavatar.io/${comment.email}`}
            alt={comment.name}
            width="50"
            height="50"
          />
          <h2 className="text-md font-bold text-teal-500">
            User: {comment.name}
          </h2>
          <p className="text-xs">Comment: {comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
