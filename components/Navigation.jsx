import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <h1>Nav</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </>
  );
}
