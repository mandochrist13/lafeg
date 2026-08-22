import Header from "@/components/header"
import EnhancedFooter from "@/components/enhanced-footer"
import StickyCTA from "@/components/sticky-cta"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="">
        <Header />
        <StickyCTA />
      {children}
        <EnhancedFooter />
    </body>
  );
}
