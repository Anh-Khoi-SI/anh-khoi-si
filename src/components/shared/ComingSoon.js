import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-10">
      <h1 className="text-5xl font-bold text-gray-800">Coming Soon</h1>
      <p className="mt-4 text-lg text-gray-600">
        Trang này sẽ sớm có nội dung mới. Hãy quay lại sau!
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline text-lg">
        Quay lại trang chủ
      </Link>
    </div>
  );
}
