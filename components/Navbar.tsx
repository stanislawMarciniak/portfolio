import React, { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <div>
      <span>{activeItem}</span>
      <div>
        {activeItem && (
          <Link href="/">
            <span>About</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
