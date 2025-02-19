import Link from "next/link";

export default function Product() {
  return (
    <div className="pt-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Coming Soon</h1>
      <p className="mt-4 text-lg">
        Trang này sẽ sớm có nội dung mới. Hãy quay lại sau!
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Quay lại trang chủ
      </Link>
    </div>
  );
}
