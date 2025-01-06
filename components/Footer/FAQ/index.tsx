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
  const faqs = (await getFAQs()) || [];

  return (
    <section className="container py-10 lg:py-30 px-4 lg:px-40">
      <div className="text-3xl font-semibold pb-8 mx-auto">
        <h3>FAQ&apos;s</h3>
      </div>

      <Accordion
        type="single"
        collapsible
        className="flex flex-col justify-center w-full max-w-5xl"
      >
        {faqs?.map((faq, index) => (
          <AccordionItem key={index} value={faq.title}>
            <AccordionTrigger className="text-lg">{faq.title}</AccordionTrigger>
            <AccordionContent>
              {faq?.content?.json?.children?.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (block: any, blockIndex: any) => {
                  // Combine all children with the same type into a single group
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const paragraphs: any = [];
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  let currentParagraphGroup: any = [];

                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  block.children.forEach((child: any, index: any) => {
                    if (block.type === "paragraph") {
                      currentParagraphGroup.push(child);
                    } else {
                      if (currentParagraphGroup.length) {
                        paragraphs.push(currentParagraphGroup);
                        currentParagraphGroup = [];
                      }
                      paragraphs.push([child]);
                    }

                    // Push any remaining group
                    if (
                      index === block.children.length - 1 &&
                      currentParagraphGroup.length
                    ) {
                      paragraphs.push(currentParagraphGroup);
                    }
                  });

                  return (
                    <React.Fragment key={blockIndex}>
                      {paragraphs.map((group: any, groupIndex: any) => (
                        <FAQContentFragment
                          key={groupIndex}
                          index={groupIndex}
                          text={group.map((item: any) => item.text).join(" ")}
                          obj={group[0]}
                          type={block.type}
                          block={block}
                        />
                      ))}
                    </React.Fragment>
                  );
                }
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
