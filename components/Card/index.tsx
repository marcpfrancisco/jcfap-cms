import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Card() {
  return (
    <div className="max-w-xs w-full group/card">
      <div className="overflow-hidden relative card  h-auto rounded-lg shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col  p-4 bg-white">
        <div className="flex flex-row items-center space-x-4 ">
          <Image
            height={60}
            width={60}
            alt="Avatar"
            style={{ width: "auto", height: "auto" }}
            src="/assets/images/patrick.png"
            className="rounded-full border-2 object-cover mr-4"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-lg text-left text-black relative ">
              Ready to get started?
            </p>
            <p className="text-sm text-black">Patrick Ian T. Bituin</p>
            <span className="text-sm text-black">(National President)</span>
          </div>
        </div>
        <div className="text content py-4">
          <button className="px-4 py-2 text-black font-semibold bg-yellow-100 rounded-lg w-full flex flex-row items-center justify-center cursor-pointer">
            Let&apos;s connect{" "}
            <MoveRight width={14} height={10} className="icon ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
