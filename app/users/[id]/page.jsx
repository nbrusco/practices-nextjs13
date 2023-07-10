// Para obtener el ID client side:
// "use client"
// import { useParams } from "next/navigation";

import Image from "next/image";

const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

export default async function UserDetail({ params }) {
  //   const params = useParams();
  //   console.log(params);

  const user = await getUser(params.id);
  return (
    <div>
      <h1>User Details</h1>
      <div>
        <Image src={user.avatar} alt={user.email} width="50" height="50" />
        <div>
          <h3>
            {user.id} {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
