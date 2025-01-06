import TeamMembers from "@/components/TeamMembers";
import Hero from "@/components/Hero";

const teamHero = {
  title: "JCFAP Team",
  description: "Moving on to a new venture, these individuals will work hard to improve financial literacy and make the financial industry stronger.",
};

const Team = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={teamHero.title} description={teamHero.description} />

      <main className="flex-grow">
        <div className="container mx-auto py-8">
          <TeamMembers />
        </div>
      </main>
    </div>
  );
};

export default Team;
