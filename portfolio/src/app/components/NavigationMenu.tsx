"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationMenu() {
  const pathname = usePathname();

  const sections = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Talks & Publications", path: "/talks-publications" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className="fixed top-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg z-50">
      <ul className="flex flex-col space-y-2">
        {sections.map((section) => (
          <li key={section.path}>
            <Link href={section.path}>
              <span className={`text-sm ${
                pathname === section.path ? "text-blue-400" : "text-gray-400"
              } hover:text-blue-300 transition duration-300`}>
                {section.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
