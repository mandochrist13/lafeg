import Header from "@/components/header"
import EnhancedFooter from "@/components/enhanced-footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="">
        <Header />
    
      {children}
        <EnhancedFooter />
    </body>
  );
}
