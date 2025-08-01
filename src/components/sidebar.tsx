const menu = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
]
export default function SidebarMenu() {
    return (
        <div className="container mx-auto mt-8 w-full p-4 border-l-2 border-gray-200 dark:border-gray-700">
        <nav className="flex flex-col gap-4">
            {menu.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                    {item.name}
                </a>
            ))}
        </nav>
        </div>
    );
}