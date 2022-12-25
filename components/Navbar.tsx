"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const currentRoute = usePathname();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <ul className="p-0">
          <li>
            <Link
              href="/"
              className={currentRoute === "/" ? "active" : undefined}
            >
              홈으로
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
