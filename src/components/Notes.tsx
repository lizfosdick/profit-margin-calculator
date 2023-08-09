import React from "react";

function Notes() {
  return (
    <div className="max-w-screen-xl p-8 mx-auto pb-20">
      <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 underline underline-offset-8 decoration-8 decoration-brand">
        Notes
      </h2>
      <ul className="flex flex-col items-start gap-8">
        <li>
          <div className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
            {" "}
           Hello! I'm Liz and I built this calculator following <a href="https://www.youtube.com/watch?v=2sGwtnnDhmM" className="text-brand">this tutorial</a>. It was my 
           first time working with Tailwind and TypeScript. I have made, and will continue to make, small custom tweaks to the code to help me practice my React skills.
          </div>
        </li>   
      </ul>
    </div>
  );
}

export default Notes;
