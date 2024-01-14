import { AuthContextProvider } from "@/context/AuthContext";
import { ReactQueryProvider } from "./ReactQueryProvider";
import "./globals.css";

export const metadata = {
  title: "Sendawa",
  description: "Template to use Next.js with Firebase",
  icons: {
    icon: '/logo-sendawa.svg',
    shortcut: '/logo-sendawa.svg',
    apple: '/logo-sendawa.svg',
    other: {
      rel: '/logo-sendawa.svg',
      url: '/logo-sendawa.svg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary-white">
        <main className="my-0 mx-auto min-h-full max-w-screen-sm relative">
          <div className="my-0 mx-auto min-h-screen max-w-[640px] overflow-x-hidden bg-primary-white">
            <ReactQueryProvider>
              <AuthContextProvider>{children}</AuthContextProvider>
            </ReactQueryProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
