import Users from "@/components/Users";

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

export default async function UsersPage() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div>
      <h1>UsersPage</h1>
      <Users users={users} />
    </div>
  );
}
