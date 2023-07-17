import React from "react";

const Introduction = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdL:py-24 flex flex-col gap-4 lgL:gap-8 mdL:px-10 xl:px-4"
    >
      <h3 className="text-lg font-titleFont tracking-wide text-textAccent">
        Hello! My name is
      </h3>
      <h1>Dianne Gabriel. <span>I make apps :)</span></h1>
    </section>
  );
};

export default Introduction;
