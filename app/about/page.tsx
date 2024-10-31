import Hero from "@/components/Hero";

const aboutHero = {
  title: "JCFAP About",
  description: "About",
};

const About = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={aboutHero.title} description={aboutHero.description} />

      <main className="flex-grow">
        <div className="container mx-auto py-8">About</div>
      </main>
    </div>
  );
};

export default About;
