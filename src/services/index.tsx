import axios from "axios";

interface emailBodyInterface {
  to: string;
  subject?: string;
  body?: string;
  name_brand?: string;
}

export const sendEmail = async (emailBody: emailBodyInterface) => {
  const data = {
    subject:
      emailBody.subject ||
      `🎉 Congratulations! Your Outlet is Now Officially Registered! Let's Shine Together! [${emailBody.name_brand} X Sendawa] 💼✨`,
    to: emailBody.to,
    body:
      emailBody.body ||
      `🌟 Thank You for Joining Us SENDAWA GANG! 🚀 Your registration means the world to us. Welcome aboard, and get ready for an amazing journey ahead! If you have any questions or need assistance, feel free to reach out. Let's make great things happen together! 🌈✨. \n\n\n Now, your outlet is still in the preparation phase 🛠️. We'll keep you posted with the latest updates about ${emailBody.name_brand}. It's time to add your delicious menus! Stay tuned...\nHelp WhatsApp: +62852299262611 (Fayzul)\n\n\nThank you for your cooperation! 🌟
    `,
  }
  try {
    const { data: response } = await axios.post(
      "https://emailgolang-production.up.railway.app/send-email",
      data
    )
    return response.data;
  } catch (error) {
    return "Error, something went wrong";
  }
};
