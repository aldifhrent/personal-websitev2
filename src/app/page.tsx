import Profile from "@/components/profile";
import Footer from "@/components/sections/footer";
import SidebarMenu from "@/components/sidebar";

export default function Home() {
  return (
<main className="min-h-screen flex flex-col overflow-hidden ">
  {/* Konten utama */}
  <div className="flex-grow pb-20 md:pb-0">
    <Profile />
    <div className="flex flex-col">
      <SidebarMenu />
    </div>
  </div>

  {/* Footer tetap di bawah */}
  <Footer />
</main>


  );
}
