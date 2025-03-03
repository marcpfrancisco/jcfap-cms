import Image from "next/image";

const Partners = () => {
  return (
    <section className="pt-8 pb-[8rem] px-4 lg:px-40 bg-[#f8f8f8]">
      <header className="py-4 px-4 text-black-100">
        <h2 className="text-left sm:text-center text-3xl font-bold">
          Partners
        </h2>

        <p className="text-left sm:text-center break-all mt-4">
          An empowered world-class association that seeks to promote
          collaboration on financial education and practice, unifies junior
          financial students, and encourages ethical business professionals
          among its members.
        </p>
      </header>

      <ul className="flex flex-wrap items-center justify-center mt-20 gap-4 sm:gap-x-8 xl:px-14">
        <li className="max-w-[139px] lg:max-w-[152px] xl:max-w-44">
          <Image
            src="/assets/logos/FinEd.png"
            alt="Find.Ed"
            width={704}
            height={396}
            className="aspect-video object-contain"
          />
        </li>

        <li className="max-w-[139px] lg:max-w-[152px] xl:max-w-44">
          <Image
            src="/assets/logos/AAPOC.png"
            alt="AAPOC"
            width={704}
            height={396}
            className="aspect-video object-contain"
          />
        </li>

        <li className="max-w-[139px] lg:max-w-[152px] xl:max-w-44">
          <Image
            src="/assets/logos/FedCenter.png"
            alt="FedCenter"
            width={704}
            height={396}
            className="aspect-video object-contain"
          />
        </li>

        <li className="max-w-[139px] lg:max-w-[152px] xl:max-w-44">
          <Image
            src="/assets/logos/RFP.png"
            alt="RFP"
            width={704}
            height={396}
            className="aspect-video object-contain"
          />
        </li>

        <li className="max-w-[139px] lg:max-w-[152px] xl:max-w-44">
          <Image
            src="/assets/logos/JAA.png"
            alt="JAA"
            width={704}
            height={396}
            className="aspect-video object-contain"
          />
        </li>

        <li className="max-w-[139px] lg:max-w-[152px] xl:max-w-44">
          <Image
            src="/assets/logos/Vertex.png"
            alt="Vertex"
            width={704}
            height={396}
            className="aspect-video object-contain"
          />
        </li>
      </ul>
    </section>
  );
};

export default Partners;
