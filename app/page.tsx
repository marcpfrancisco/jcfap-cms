import Benefits from "@/components/Benefits";
import Feature from "@/components/Feature";
import CTA from "@/components/Footer/CTA";
import FAQ from "@/components/Footer/FAQ";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";

const homeHero = {
  title: `Be the Difference. Experience JCFAP.`,
  description: `Founded in June 2006, JCFAP is the national umbrella organization for associations of college students in finance or financial management`,
};

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={homeHero.title} description={homeHero.description} />

      <Feature />
      <Benefits />
      <Showcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
