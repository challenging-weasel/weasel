'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const currentRoute = usePathname();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-xl normal-case btn btn-ghost">nextjs-starter</a>
      </div>
      <div className="flex-none">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <Link
              href="/"
              className={currentRoute === '/' ? 'active' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={currentRoute === '/about' ? 'active' : undefined}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
