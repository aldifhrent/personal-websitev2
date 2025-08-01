import Profile from "@/components/profile";
import SidebarMenu from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <main>
        <Profile/>
        <div className="flex">
        <SidebarMenu />
        <main className="flex-1 p-6 space-y-24">

        </main>
      </div>
      </main>
    </div>
  );
}
