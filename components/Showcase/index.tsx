import { FocusCards } from "@/components/ui";
import { getShowcases } from "@/services";

const Showcase = async () => {
  const showcases = (await getShowcases()) || [];

  return (
    <section className="showcase py-8 px-4 w-full">
      <FocusCards showcases={showcases} />
    </section>
  );
};

export default Showcase;
