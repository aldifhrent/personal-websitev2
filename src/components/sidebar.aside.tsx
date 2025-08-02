
import { menu, SideProps } from "./sidebar";


export default function SidebarAside({ activeSection, setActiveSection }: SideProps) {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r pr-4 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      <div className="space-y-6 py-6 px-2">
        <nav className="flex flex-col gap-2" aria-label="Sidebar navigation">
          {menu.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-md text-left font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
