import Typography from "@/Typography";
import { Link, Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-center gap-8 text-center">
        <Typography
          variant="h1"
          weight="bold"
          className="inline-block bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] bg-clip-text text-transparent"
        >
          K-K7: Your Ultimate <br /> Encryption Ally
        </Typography>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button color="primary" variant="bordered" href="/ebc" as={Link}>
            Electronic Code Book
          </Button>
          <Button color="primary" href="/cbc" as={Link}>
            Cipher Block Chaining
          </Button>
        </div>
      </section>
    </>
  );
};

export default page;
