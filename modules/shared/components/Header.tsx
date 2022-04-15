import Link from "next/link";
import React from "react";

interface HeaderProps {
  links: { href: string; text: string }[];
}

export const Header = ({ links }: HeaderProps) => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <Link passHref href="/">
              <a className="brand">
                <strong>Boot</strong>
              </a>
            </Link>
          </li>
        </ul>
        <ul>
          {links.map((link, index) => (
            <li key={`nav-link-${index}`}>
              <Link href={link.href} passHref>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
