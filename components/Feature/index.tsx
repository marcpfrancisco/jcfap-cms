import { getFeatures } from "@/services";
import { FeatureNode } from "@/types";
import FeatureBlock from "./FeatureBlock";

const Feature = async () => {
  const features: FeatureNode[] = (await getFeatures()) || [];

  return (
    <section className="feature__block py-8 px-4 lg:px-40">
      <header className="block__header py-8 px-4 text-black-100 text-center">
        <h2 className="header__title text-3xl font-bold">
          Junior Confederation of Finance Associations Philippines
        </h2>
        <p className="header__description break-all mt-4">
          Better known as JCFAP, is the national umbrella organization for
          associations of college students in finance or financial management.
          It was founded in June 2006.
        </p>
      </header>

      {/* Feature Block  */}
      <FeatureBlock features={features} />
    </section>
  );
};

export default Feature;
