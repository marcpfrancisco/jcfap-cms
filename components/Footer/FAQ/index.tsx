import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQs } from "@/services/footer.service";

import React from "react";
import FAQContentFragment from "./FAQContentFragment";

const FAQ = async () => {
  const FAQs = (await getFAQs()) || [];

  return (
    <section className="container h-[20rem] py-40 lg:py-60 px-4 lg:px-40">
      <div className="text-3xl font-semibold pb-8 mx-auto">
        <h3>FAQ's</h3>
      </div>

      <Accordion
        type="single"
        collapsible
        className="flex flex-col justify-center w-full max-w-5xl"
      >
        {FAQs?.map((faq, index) => (
          <AccordionItem key={index} value={faq.title}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>
              {faq?.content?.json?.children?.map(
                (
                  block: { children: any[]; type: string },
                  blockIndex: number
                ) => (
                  <React.Fragment key={blockIndex}>
                    {block.children.map((child, childIndex) => (
                      <FAQContentFragment
                        key={childIndex}
                        index={childIndex}
                        text={child.text || ""}
                        obj={child}
                        type={block.type}
                      />
                    ))}
                  </React.Fragment>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
