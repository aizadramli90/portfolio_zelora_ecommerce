import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <h1>Sorry...Page not found...</h1>
      <p>The page you're looking for is not exist. Please return...</p>
      <Link href={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
}
