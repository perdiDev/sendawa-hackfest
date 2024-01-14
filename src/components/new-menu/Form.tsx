"use client";

import React from "react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import uploadFile from "@/firebase/storage/uploadData";
import addDataFirestore from "@/firebase/firestore/addData";
import { useAuthContext } from "@/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import Select from "react-select";
import { v4 } from "uuid";
import addCollectionMenu from "@/firebase/firestore/addCollectionData";

const Form = () => {
  const { user } = useAuthContext() as { user: any };

  const [newMenu, setNewMenu] = useState({
    name: "",
    price: 0,
  });

  const options = [
    { value: "makanan", label: "Makanan" },
    { value: "minuman", label: "Minuman" },
    { value: "dessert", label: "Dessert" },
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewMenu((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption: any) => {
    setCategory(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState({
    value: "makanan",
    label: "Makanan",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const uploaded = await uploadFile(`/${user.uid}/menus`, image);

      const data = Object.assign(newMenu, {
        url: uploaded.url,
        category: category.value
      });

      const x = await addCollectionMenu(
        `/${user.uid}/`,
        "menu",
        category.value,
        data
      );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="">
      <div className="max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h4 className="font-semibold">Nama Produk</h4>
            <Input
              required
              name="name"
              onChange={handleInputChange}
              className="w-full"
              placeholder="Ikan Bandeng"
            />
          </div>
          <div className="mb-3">
            <h4 className="font-semibold">Harga</h4>
            <Input
              required
              name="price"
              onChange={handleInputChange}
              className="w-full"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="23000"
            />
          </div>
          <div className="mb-3">
            <h4 className="font-semibold">Kategori</h4>
            <Select
              defaultValue={category}
              onChange={handleSelectChange}
              options={options}
            />
          </div>
          <div className="mb-3">
            <h4 className="font-semibold">Image</h4>
            <Input
              type="file"
              className="border-none px-0 mb-3"
              onChange={(e: any) => setImage(e.target.files[0])}
            />
          </div>

          <Button
            type="submit"
            className="rounded-sm"
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
