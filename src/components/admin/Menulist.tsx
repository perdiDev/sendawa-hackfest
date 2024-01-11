"use client";

import Menu from "./Menu";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "@/context/AuthContext";
import MenuListSkeleton from "../skeleton/MenuList";
import getMenuCollection from "@/firebase/firestore/getCollectionsData";

export default function Menulist() {
  const { user } = useAuthContext() as { user: any };

  const {
    isLoading,
    isError,
    data: menus,
    error,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { result } = await getMenuCollection(
        `${user.uid}`,
        "menu"
      );
      return result;
    },
  });

  if (isLoading) {
    return <MenuListSkeleton />;
  }
  if (isError) {
    console.log("Error", error);
  }

  if (menus) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
        {menus.length == 0 ? (
          <h1>Kosong</h1>
        ) : (
          menus.map((menu: any) => (
            <Menu
              url={menu.url}
              name={menu.name}
              price={menu.price}
              key={menu.id}
            />
          ))
        )}
      </div>
    );
  }
}
