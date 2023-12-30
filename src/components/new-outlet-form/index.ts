export interface FormData {
  [key: string]: PropsData | any;
}

export interface StepData {
  title: string;
  fields: PropsData[];
}

export interface PropsData {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  pattern?: string;
  inputMode?: string;
}

export const stepsData: StepData[] = [
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
    title: "Detail Brand",
    fields: [
      {
        name: "name_brand",
        placeholder: "Royal Canin",
        type: "text",
        label: "Name",
      },
      {
        name: "address_brand",
        placeholder: "Jln. Mangga No.12, Palu Timur",
        label: "Address",
        type: "text",
      },
      {
        name: "phone_brand",
        placeholder: "08320881933",
        label: "Phone Number",
        inputMode: "numeric",
        pattern: "[0-9]*",
      },
      {
        name: "ovo_brand",
        placeholder: "08320881933",
        label: "OVO Number",
        inputMode: "numeric",
        pattern: "[0-9]*",
      },
    ],
  },
];