import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-7xl mx-auto bg-[#0F1117]">
      <Hero />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
