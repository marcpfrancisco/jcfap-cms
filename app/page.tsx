import Benefits from "@/components/Benefits";
import Feature from "@/components/Feature";
import FAQ from "@/components/Footer/FAQ";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
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
      <Partners />
      <Benefits />
      <Showcase />
      <Testimonials />
      <FAQ />
    </div>
  );
}
