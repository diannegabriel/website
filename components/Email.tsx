import React from "react";

const Email = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:mdianne.gabriel@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textAccent">mdianne.gabriel@gmail.com</p>
      </a>
    </div>
  );
};

export default Email;
