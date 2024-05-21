import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-impressum-datenschutz-header relative min-h-[400px] w-screen bg-cover bg-center bg-no-repeat">
      <Image
        src={"/assets/images/key.svg"}
        alt="Key image"
        width={150}
        height={40}
        className="absolute right-0 top-8"
      />
    </div>
  );
};

export default Header;
