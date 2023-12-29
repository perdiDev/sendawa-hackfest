"use client";
import React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import  setDataRealtime  from "./../firebase/realtime/setData";

interface FormData {
  [key: string]: PropsData | any;
}

interface StepData {
  title: string;
  fields: PropsData[];
}

interface PropsData {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  pattern?: string;
  inputMode?: string;
}

interface Props {
  userId: string;
}

const stepsData: StepData[] = [
  {
    title: "Owner Information",

    fields: [
      {
        name: "name_owner",
        placeholder: "Mr. Jhon",
        type: "text",
        label: "Owner Name",
      },
      {
        name: "phone_owner",
        placeholder: "08320881933",
        label: "Owner Number Phone",
        inputMode: "numeric",
        pattern: "[0-9]*",
      },
    ],
  },
  {
    title: "Detail Outlet",
    fields: [
      {
        name: "name_outlet",
        placeholder: "Royal Canin",
        type: "text",
        label: "Outlet Name",
      },
      {
        name: "address_outlet",
        placeholder: "Jln. Mangga No.12, Palu Timur",
        label: "Outlet Address",
        type: "text",
      },
      {
        name: "phone_outlet",
        placeholder: "08320881933",
        label: "Outlet Number Phone",
        inputMode: "numeric",
        pattern: "[0-9]*",
      },
      {
        name: "ovo_outlet",
        placeholder: "08320881933",
        label: "Outlet OVO Number",
        inputMode: "numeric",
        pattern: "[0-9]*",
      },
    ],
  },
];

const Form1: React.FC<Props> = ({ userId }) => {
  const [fieldValues, setFieldValues] = useState<FormData>(
    stepsData.reduce((acc, stepData) => {
      stepData.fields.forEach((field) => {
        acc[field.name] = "";
      });
      return acc;
    }, {} as FormData)
  );

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
      console.log(fieldValues);
      setDataRealtime(`/${userId}`,'outlet',fieldValues)

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

export default Form1;
