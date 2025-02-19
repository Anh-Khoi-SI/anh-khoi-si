import Link from "next/link";

const posts = [
  { id: 1, title: "Bài viết 1" },
  { id: 2, title: "Bài viết 2" },
  { id: 3, title: "Bài viết 3" },
];

export default function Blog() {
  return (
    <div className="pt-28">
      <h1>Danh Sách Bài Viết</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
