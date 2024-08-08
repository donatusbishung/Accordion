import { useState } from "react";
import AccordionItem from "../AccordionItem";

// eslint-disable-next-line react/prop-types
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}>
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
