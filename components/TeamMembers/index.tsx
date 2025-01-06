import { getTeamMembers } from "@/services/member.service";
import { POSITION_MAP } from "@/types";
import { ImageOff } from "lucide-react";
// import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeamMembers = async () => {
  const members = (await getTeamMembers()) || [];

  return (
    <section className="text-center">
      <div className="heading pb-8">
        <h1 className="title text-lg lg:text-3xl text-center  font-bold text-black-300">
          JCFAP National Executive Board Officers
        </h1>
      </div>

      <div className="grid px-4 lg:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {member.image?.url ? (
              <Image
                src={member.image?.url || ""}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-80 object-cover"
                priority
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                <ImageOff size={40} className="text-gray-500" />
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold text-black-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">
                {POSITION_MAP[member.position] || "Member"}
              </p>
            </div>

            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center transition-opacity">
              <Link
                href={member.linkedIn || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {/* linkedin icon  */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
