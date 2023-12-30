import Link from "next/link";

export default function page() {
  return (
    <main className="flex min-h-screen justify-center items-center gap-2 p-24 bg-white">
      <h2>Ini nanti halaman landingpage</h2>
      <Link href="/signin" className="bg-primary-green px-6 text-center text-white font-semibold rounded-lg py-1.5">
        <span className="link">SignIn</span>
      </Link>
      <Link href="/signup" className="bg-primary-green px-6 text-center text-white font-semibold rounded-lg py-1.5">
        <span className="link">SignUp</span>
      </Link>
    </main>
  );
}
