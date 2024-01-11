import Form from "@/components/new-menu/Form";
import AuthLayout from "@/components/layouts/AuthLayout";

export default function Page(): JSX.Element {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-3 mx-auto px-5 pt-20">
        <h2 className="text-primary-green font-bold text-3xl">Menu Baru</h2>

        <Form />
      </div>
    </AuthLayout>
  );
}
