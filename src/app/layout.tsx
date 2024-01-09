import { AuthContextProvider } from "@/context/AuthContext";
import { ReactQueryProvider } from "./ReactQueryProvider";
import "./globals.css";

export const metadata = {
  title: "Sendawa",
  description: "Template to use Next.js with Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="my-0 mx-auto min-h-full max-w-screen-sm relative">
          <div className="my-0 mx-auto min-h-screen max-w-[640px] overflow-x-hidden bg-white">
            <ReactQueryProvider>
              <AuthContextProvider>{children}</AuthContextProvider>
            </ReactQueryProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
