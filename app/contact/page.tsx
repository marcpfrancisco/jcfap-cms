import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

const contactHero = {
  title: "JCFAP Contact",
  description: "Contact",
};

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={contactHero.title} description={contactHero.description} />

      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4 lg:px-12">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
