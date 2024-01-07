"use client";
import React from "react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import setDataRealtime from "@/firebase/realtime/setData";
import uploadFile from "@/firebase/storage/uploadData";
import { useRouter } from "next/navigation";
import { FormData, stepsData } from ".";
import addDataFirestore from "@/firebase/firestore/addData";

interface Props {
  userId: string;
}

const Form: React.FC<Props> = ({ userId }) => {
  const router = useRouter();

  const [fieldValues, setFieldValues] = useState<FormData>(
    stepsData.reduce((acc, stepData) => {
      stepData.fields.forEach((field) => {
        acc[field.name] = "";
      });
      return acc;
    }, {} as FormData)
  );

  const [profile, setProfile] = useState(null);
  const [imagesBrand, setImageBrand] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (fieldName: string, value: any) => {
    // Update nilai field
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const profile_res = await uploadFile(`/${userId}/profile`, profile);
      const brands_res = await uploadFile(`/${userId}/images`, imagesBrand);

      const fileUploaded = {
        profile: profile_res.url,
        images: brands_res.url,
      }

      const data = Object.assign(fieldValues, fileUploaded)
      
      console.log(fieldValues);
      const x = await addDataFirestore(`/${userId}`, 'outlet', data)
      console.log(x)
      router.push("/admin");

      // setDataRealtime(`/${userId}`, "brand", data);

    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full">
      <form onSubmit={handleSubmit}>
        {stepsData.map((stepData, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3 md:gap-0`}
          >
            <h2 className="font-bold text-primary-green text-xl mt-5 mb-2">
              {stepData.title}
            </h2>
            {stepData.fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="mb-3"
              >
                <h4 className="font-semibold">{field.label}</h4>
                <Input
                  {...field}
                  required
                  value={fieldValues[field.name] || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  className="w-full"
                />
              </div>
            ))}
          </div>
        ))}
        <h4 className="font-semibold">Profile</h4>
        <Input
          type="file"
          className="border-none px-0 mb-3"
          onChange={(e: any) => setProfile(e.target.files[0])}
        />

        <h4 className="font-semibold">Brand Image</h4>
        <Input
          type="file"
          className="border-none px-0 mb-5"
          onChange={(e: any) => setImageBrand(e.target.files[0])}
        />

        <Button
          type="submit"
          className="rounded-sm"
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
