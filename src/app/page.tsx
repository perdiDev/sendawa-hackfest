import Link from "next/link";
import BottomModal from "@/components/BottomModal";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main className="flex min-h-screen justify-center items-center gap-2 p-24 bg-white">
      <h2>Ini nanti halaman landingpage</h2>
      <Link
        href="/signin"
        className="bg-primary-green px-6 text-center text-white font-semibold rounded-lg py-1.5"
      >
        <span className="link">SignIn</span>
      </Link>
      <Link
        href="/signup"
        className="bg-primary-green px-6 text-center text-white font-semibold rounded-lg py-1.5"
      >
        <span className="link">SignUp</span>
      </Link>
      <BottomModal isOpen={false}>
        <div className="flex flex-col justify-between h-full gap-10 mt-10">
          <div>
            <h1 className="font-semibold text-2xl">Halo ini judul</h1>
            <p className="text-slate-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, assumenda.okokokok ook oko kokok oko
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button>Paham</Button>
            <Button variant="disable">Paham</Button>
          </div>
        </div>
      </BottomModal>
    </main>
  );
}
