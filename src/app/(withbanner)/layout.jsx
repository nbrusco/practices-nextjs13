import Counter from "./posts/Counter";

export default function PostsLayout({ children }) {
  return (
    <div>
      {/* <Counter /> */}
      {/* <p>Home &bull; Posts</p> */}
      <marquee className="text-indigo-800 text-xs text-center font-bold bg-indigo-400 p-2 rounded-full m-2">Este es una prueba para layout compartido entre rutas no anidadas</marquee>
      {children}
    </div>
  );
}
