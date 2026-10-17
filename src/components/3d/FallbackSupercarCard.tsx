import React from "react";
import Image from "next/image";

export default function FallbackSupercarCard() {
  return (
    <div className="w-full h-full min-h-[380px] relative flex items-center justify-center overflow-hidden">
      <Image
        src="/images/supercar-hero.png"
        alt="ALKOTA Precision Vehicle Movement"
        fill
        priority
        className="object-contain object-center scale-95"
      />
    </div>
  );
}
