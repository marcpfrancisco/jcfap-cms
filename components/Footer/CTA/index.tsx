import { MoveRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="container">
      <div className="callout callout-signup p-[2rem] md:p-[4rem] rounded-md bg-yellow-100 translate-y-[5rem]">
        <div className="grid md:grid-cols-[1fr_auto]">
          <div className="callout-content text-center md:text-left">
            <h2 className="callout-heading text-white font-bold text-2xl mb-2">
              Ready to get started?
            </h2>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quo vitae magnam quisquam facere temporibus ducimus.
              Molestias explicabo nostrum aperiam.
            </p>
          </div>

          <a className="md:px-[6rem] btn btn--stretched flex flex-row items-center justify-self-center self-center md:justify-self-start md:mx-[2rem] text-white font-semibold bg-black-300 rounded-[4rem] cursor-pointer">
            Let&apos;s connect{" "}
            <MoveRight width={14} height={10} className="icon ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
