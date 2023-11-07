import Link from "next/link";

const routes = [
  {
    name: "Hjem",
    href: "/",
  },
  {
    name: "Om oss",
    href: "/om",
  },
  {
    name: "Blogg",
    href: "/Blogg",
  },
];

export function SiteHeader() {
  return (
    <header className="flex justify-between p-4">
      <h1>Min Blogg</h1>

      <nav>
        {routes.map((route) => {
          return (
            <NavLink key={route.name} href={route.href}>
              {route.name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="hover:underline text-blue-600 px-2" href={href}>
      {children}
    </Link>
  );
}
