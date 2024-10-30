import {
  BriefcaseBusiness,
  IdCard,
  Laptop,
  TicketPercent,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import React from "react";

const Benefits = () => {
  return (
    <section className="benefits py-8 px-4 lg:px-40 bg-black-300 text-white ">
      <header className="block__header py-8 px-4 text-center">
        <h2 className="header__title text-3xl font-bold">Benefits</h2>
        <p className="header__description break-all mt-4">
          What are the perks and benefits of being a bonafide member? Membership
          helps the students to enjoy the following perks and benefits
        </p>
      </header>

      <div className="md:grid grid-cols-2 grid-rows-3 gap-4">
        <article className="px-4 py-8 sm:px-0 flex flex-row">
          <IdCard
            width={60}
            height={60}
            color="#FCDA05"
            className="icon mr-6"
          />
          <div className="">
            <h3 className="font-bold text-lg">
              Physical ID & Membership Certificate
            </h3>
            <p className="text-base">
              Physical Membership ID and Membership Certificate are the easiest
              and most convenient ways to verify the member&apos;s identity.
            </p>
          </div>
        </article>

        <article className="px-4 py-8 sm:px-0 flex flex-row">
          <UserRoundPlus
            width={60}
            height={60}
            color="#FCDA05"
            className="icon mr-6"
          />

          <div className="">
            <h3 className="font-bold text-lg">
              Physical ID & Membership Certificate
            </h3>
            <p className="text-base">
              Physical Membership ID and Membership Certificate are the easiest
              and most convenient ways to verify the member&apos;s identity.
            </p>
          </div>
        </article>

        <article className="px-4 py-8 sm:px-0 flex flex-row">
          <BriefcaseBusiness
            width={60}
            height={60}
            color="#FCDA05"
            className="icon mr-6"
          />
          <div className="">
            <h3 className="font-bold text-lg">
              Physical ID & Membership Certificate
            </h3>
            <p className="text-base">
              Physical Membership ID and Membership Certificate are the easiest
              and most convenient ways to verify the member&apos;s identity.
            </p>
          </div>
        </article>

        <article className="px-4 py-8 sm:px-0 flex flex-row">
          <Laptop
            width={60}
            height={60}
            color="#FCDA05"
            className="icon mr-6"
          />
          <div className="">
            <h3 className="font-bold text-lg">
              Physical ID & Membership Certificate
            </h3>
            <p className="text-base">
              Physical Membership ID and Membership Certificate are the easiest
              and most convenient ways to verify the member&apos;s identity.
            </p>
          </div>
        </article>

        <article className="px-4 py-8 sm:px-0 flex flex-row">
          <TicketPercent
            width={60}
            height={60}
            color="#FCDA05"
            className="icon mr-6"
          />
          <div className="">
            <h3 className="font-bold text-lg">
              Physical ID & Membership Certificate
            </h3>
            <p className="text-base">
              Physical Membership ID and Membership Certificate are the easiest
              and most convenient ways to verify the member&apos;s identity.
            </p>
          </div>
        </article>

        <article className="px-4 py-8 sm:px-0 flex flex-row">
          <UsersRound
            width={60}
            height={60}
            color="#FCDA05"
            className="icon mr-6"
          />
          <div className="">
            <h3 className="font-bold text-lg">
              Physical ID & Membership Certificate
            </h3>
            <p className="text-base">
              Physical Membership ID and Membership Certificate are the easiest
              and most convenient ways to verify the member&apos;s identity.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Benefits;
