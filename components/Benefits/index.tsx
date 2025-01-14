import { BENEFITS_LIST as benefits } from "@/constants";

const Benefits = () => {
  return (
    <section
      data-aos="fade-up"
      className="skewed skewed-right benefits py-8 px-4 lg:px-40 bg-black-300 text-white "
    >
      <header className="block__header py-8 px-4 text-center">
        <h2 className="header__title text-3xl font-bold">Benefits</h2>
        <p className="header__description break-all mt-4">
          What are the perks and benefits of being a bonafide member? Membership
          helps the students to enjoy the following perks and benefits
        </p>
      </header>

      <div className="md:grid grid-cols-2 grid-rows-3 gap-4">
        {benefits?.map((benefit, index) => (
          <article
            key={index}
            className="px-4 py-8 sm:px-0 flex flex-row items-center transform transition-transform duration-300 hover:scale-105"
          >
            <benefit.Icon
              width={50}
              height={50}
              color="#FCDA05"
              className="icon mr-6"
            />
            <div>
              <h3 className="font-bold text-xl">{benefit.title}</h3>
              <p className="text-sm leading-6">{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
