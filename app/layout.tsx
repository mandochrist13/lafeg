import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/app/providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] })
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Fédération des Entreprises du Gabon (FEG)",
  description: "Site officiel de la Fédération des Entreprises du Gabon",
  generator: 'v0.dev',
  icons: {
    icon: '/logo (1).png',
    shortcut: '/logo (1).png',
    apple: '/logo (1).png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${sourceSerif.variable}`}>
      
         <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers> 
        
        </ThemeProvider>
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            className: "text-base",
            style: {
              borderRadius: "8px",
              padding: "12px",
            },
          }}
        />
       
       
      </body>
    </html>
  )
}
