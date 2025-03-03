import { getFeatures } from "@/services";
import { FeatureNode } from "@/types";
import FeatureBlock from "./FeatureBlock";

const Feature = async () => {
  const features: FeatureNode[] = (await getFeatures()) || [];

  return (
    <section className="py-8 px-4 lg:px-40">
      <header className="py-4 px-4 text-black-100">
        <h2 className="text-left sm:text-center text-3xl font-bold">
          Junior Confederation of Finance Associations Philippines
        </h2>
        <p className="text-left sm:text-center break-all mt-4">
          The Junior Confederation of Finance Associations – Philippines (JCFAP)
          was established in 2006 through the collaboration of eight schools
          that were finalists in the FINEX Intercollegiate Finance Competition
          (ICFC).
          <br /> <br />
          Under the guidance of its founding adviser, Mr. Antonilo Mauricio,
          JCFAP has grown into a key national organization, bringing together
          over 160 schools and serving a community of more than 16,000 finance
          and ABM (Accountancy, Business, and Management) students across the
          country.
        </p>
      </header>

      {/* Feature Block  */}
      <FeatureBlock features={features} />
    </section>
  );
};

export default Feature;
