import { MoveRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="container">
      <div className="callout bg-yellow-100 p-8 md:p-16 rounded-md transform translate-y-20">
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

          <a className="btn-connect !bg-black-300 !text-white !px-[6rem] !rounded-[4rem]">
            Let&apos;s connect{" "}
            <MoveRight width={14} height={10} className="icon ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
