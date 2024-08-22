import type { Metadata } from "next";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export const metadata: Metadata = {
  title: "ALCademy - Where Education Meet Innovation",
  description: " AI-enhanced Templates are designed to adapt to your personal learning style, ensuring that you receive the guidance and support",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
           {children}
        </body>
      </html>
    </ClerkProvider>
  )
}