import dynamic from "next/dynamic";
import ProfileSkeleton from "@/components/skeleton/ProfileSkeleton";
import AuthLayout from "@/components/layouts/AuthLayout";
import Logout from "@/components/admin/Logout";
import MenuListSkeleton from "@/components/skeleton/MenuList";
import ActivitySkeleton from "@/components/skeleton/ActivitySkeleton";

const Profile = dynamic(() => import("@/components/admin/Profile"), {
  loading: () => <ProfileSkeleton />,
});

const MenuSection = dynamic(() => import("@/components/admin/MenuSection"),{
  loading: () => <MenuListSkeleton />,
})

const ActivitesList = dynamic(() => import("@/components/admin/Activites"),{
  loading: () => <ActivitySkeleton />,
})

function Page(): JSX.Element {
  return (
    <AuthLayout>
      <main className="mx-auto w-full static">
        <div className="mb-4">
          <Profile />
          <ActivitesList />
          <MenuSection />
          <div className="mt-4">
            <Logout />
          </div>
        </div>
      </main>
    </AuthLayout>
  );
}

export default Page;
