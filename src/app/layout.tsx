import { AuthContextProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font with 'latin' subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata = {
  title: "Sendawa",
  description: "Template to use Next.js with Firebase",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {/*
        The <head /> component will contain the components returned by the nearest parent
        head.js. It can be used to define the document head for SEO, metadata, and other purposes.
        Learn more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="my-0 mx-auto min-h-full max-w-screen-sm">
          <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
            <AuthContextProvider>{children}</AuthContextProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
