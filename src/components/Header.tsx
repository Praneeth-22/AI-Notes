import { Link } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src=""
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
      </Link>
    </header>
  );
}

export default Header;
