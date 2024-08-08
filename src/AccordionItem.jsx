// import { useState } from "react";

function AccordionItem({ curOpen, onOpen, num, title, text, children }) {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div
      onClick={handleToggle}
      className={`item duration-300 ${isOpen ? "open" : ""}`}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
