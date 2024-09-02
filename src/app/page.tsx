import Typography from "@/Typography";
import { Link, Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-6 h-screen text-center justify-center items-center">
        <Typography variant="h1" weight="bold">
          K-K7: Your Ultimate <br /> Encryption Ally
        </Typography>
        <Typography className="w-[60%] mx-auto">
          Unlock the power of secure communication with K-K7. Seamlessly encrypt
          or decrypt your data with confidence, knowing your information is
          shielded by the latest in cryptographic technology. Whether it's
          protecting your private messages or securing sensitive information,
          K-K7 is your go-to tool for airtight security.
        </Typography>
        <div className="space-x-4">
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
