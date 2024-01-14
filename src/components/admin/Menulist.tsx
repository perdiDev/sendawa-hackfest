"use client";

import Menu from "./Menu";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "@/context/AuthContext";
import MenuListSkeleton from "../skeleton/MenuList";
import getMenuCollection from "@/firebase/firestore/getCollectionsData";

interface MenuItem {
  id?: string;
  name: string;
  price: any;
  url: string;
}

interface MenuData {
  makanan: MenuItem[];
  minuman: MenuItem[];
  dessert: MenuItem[];
}

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
      const { result } = await getMenuCollection(`${user.uid}`, "menu");
      return result;
    },
  });

  if (isLoading) {
    return <MenuListSkeleton />;
  }
  if (isError) {
    console.log("Error", error);
  }

  if (!menus) {
    <h3 className="text-center">Kamu belum menambahkan Menu</h3>;
  }

  console.log(menus);

  if (menus) {
    return (
      <div>
        {Object.keys(menus).map((category: string, index: any) => {
          const categoryItems = menus[category as keyof typeof menus];

          if (categoryItems && categoryItems.length > 0) {
            return (
              <div key={index} className="p-5">
                <h3 className="text-md font-semibold text-navy capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                  {categoryItems.map((menu: any, menuIndex: any) => (
                    <Menu
                      url={menu.url}
                      name={menu.name}
                      price={menu.price}
                      key={menuIndex}
                    />
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>

      // <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
      //   {menus.makanan.length == 0 ? (
      //     <h1>Kosong</h1>
      //   ) : (
      //     menus.makanan.map((menu: any) => (
      //       <Menu
      //         url={menu.url}
      //         name={menu.name}
      //         price={menu.price}
      //         key={menu.id}
      //       />
      //     ))
      //   )}
      // </div>
    );
  }
}
