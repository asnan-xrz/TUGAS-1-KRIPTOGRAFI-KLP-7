import Form1 from "@/components/cbc/Form1";
import Form2 from "@/components/cbc/Form2";
import React from "react";

const page = () => {
  return (
    <>
      <section className="mx-auto flex w-full flex-col justify-center gap-24 px-8 py-12 sm:w-[400px] sm:px-0">
        <Form1 />
        <Form2 />
      </section>
    </>
  );
};

export default page;
