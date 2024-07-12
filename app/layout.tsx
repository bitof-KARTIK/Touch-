import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOUCH",
  description: "Video Calling app",
  icons:{
    icon:"/icons/video.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout:{
          logoImageUrl:'/icons/logo.png',
          socialButtonsVariant:'iconButton'
        },
        variables:{
          colorText: '#fff',
          colorPrimary:'#6556cd',
          colorBackground: "#14131b",
          colorInputBackground:'#252a41',
          colorInputText:'#fff'
        }
      }}>
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster/>
        </body>
      </ClerkProvider>
    </html>
  );
}
