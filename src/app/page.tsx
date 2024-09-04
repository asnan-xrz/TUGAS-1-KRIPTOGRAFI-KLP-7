import { Link, Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-8 h-screen w-full text-center justify-center items-center">
        <div className="flex sm:flex-row flex-col gap-4">
          <Button color="primary" variant="bordered" href="/ebc" as={Link}>
            Electronic Code Book
          </Button>
          <Button color="primary" href="/cbc" as={Link}>
            Cipher Block Chaining
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
