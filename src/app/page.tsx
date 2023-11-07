import { InstagramIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/swarnikasella/",
    },
    {
      name: "GitHub",
      href: "https://github.com/xxSwarnika",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl text-[#00FFFF] text-center">Min hjemmeside!!</h1>
      <p>Hei! Heter Swarnika og er 19, nylig flyttet til Bergen fra Oslo</p>
      <InstagramIcon />
      <div className="flex flex-col">
        {links.map((socials) => {
          return (
            <Link
              className="hover:underline"
              key={socials.href}
              href={socials.href}
            >
              {socials.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
