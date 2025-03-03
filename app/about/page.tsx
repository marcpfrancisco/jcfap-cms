import FeatureBlock from "@/components/Feature/FeatureBlock";
import Hero from "@/components/Hero";
import { getFeatures } from "@/services";
import { FeatureNode } from "@/types";

const aboutHero = {
  title: "Who is JCFAP?",
  description: "Junior Confederation of Finance Associations Philippines",
};

const About = async () => {
  const features: FeatureNode[] = (await getFeatures()) || [];

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={aboutHero.title} description={aboutHero.description} />

      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
          <section className="py-4">
            <h1 className="text-3xl font-bold sm:text-start ">About</h1>
            <p className="mt-4 font-normal">
              The Junior Confederation of Finance Associations – Philippines
              (JCFAP) was established in 2006 through the collaboration of eight
              schools that were finalists in the FINEX Intercollegiate Finance
              Competition (ICFC).
              <br /> <br />
              Under the guidance of its founding adviser, Mr. Antonilo Mauricio,
              JCFAP has grown into a key national organization, bringing
              together over 160 schools and serving a community of more than
              16,000 finance and ABM (Accountancy, Business, and Management)
              students across the country.
            </p>
          </section>

          <section className="py-4">
            <h1 className="text-3xl font-bold sm:text-start ">Mission</h1>

            <p className="mt-4 font-normal">
              It is committed to foster educational advancement among its
              members through conventions, seminars, and inter-school activities
              that would foster camaraderie, social awareness and civic
              consciousness among its members.
            </p>
          </section>

          <section className="py-4">
            <h1 className="text-3xl font-bold sm:text-start ">Vission</h1>

            <p className="mt-4 font-normal">
              An empowered world class association that seeks to promote
              collaboration on financial education and practice, unifies junior
              financial students and encourages ethical business professionals
              among its members.
            </p>
          </section>

          <section className="py-4">
            <h1 className="text-3xl font-bold sm:text-start ">Pillars</h1>

            <FeatureBlock features={features} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
