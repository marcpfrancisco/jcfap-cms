import Hero from "@/components/Hero";

const teamHero = {
  title: "JCFAP Team",
  description: "Teams",
};

const Team = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={teamHero.title} description={teamHero.description} />

      <main className="flex-grow">
        <div className="container mx-auto py-8">Team</div>
      </main>
    </div>
  );
};

export default Team;
