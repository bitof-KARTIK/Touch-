import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "TOUCH",
    description: "Video Calling app",
    icons:{
      icon:"/icons/video.svg"
    }
  };

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}

            </StreamVideoProvider>

        </main>
    )
}

export default RootLayout