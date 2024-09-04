"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  plaintext: string;
  key: string;
  vector: string;
  result: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [decryptResult, setDecryptResult] = useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { plaintext, vector, key }: any = data;
    let vectorToBinary: any = "";
    let keyToBinary: any = "";

    let toBinary: any = [];

    for (let i = 0; i < plaintext.length; i++) {
      toBinary[i] = parseInt(plaintext[i], 16).toString(2).padStart(4, "0");
    }

    for (let i = 0; i < vector.length; i++) {
      vectorToBinary +=
        vectorToBinary + parseInt(vector[i], 16).toString(2).padStart(4, "0");
    }

    for (let i = 0; i < key.length; i++) {
      keyToBinary += parseInt(key[i], 16).toString(2).padStart(4, "0");
    }

    let cToString: any = [];

    let p: any = [];
    let c: any = [];

    for (let i = 0; i < plaintext.length; i++) {
      if (i === 0) {
        p[i] = toBinary[i] ^ vectorToBinary;
        p[i] ^= keyToBinary;
        p[i] = p[i] << 1;
        c[i] = p[i];
        cToString[i] = c[i];
      } else {
        toBinary[i] = parseInt(toBinary[i], 2);
        p[i] = toBinary[i] ^ c[i - 1];
        p[i] = p[i].toString(2).padStart(4, "0");
        p[i] = (parseInt(p[i], 2) ^ parseInt(keyToBinary, 2)).toString(2);
        p[i] = p[i].slice(1) + p[i][0];
        p[i] = parseInt(p[i], 2);
        c[i] = p[i];
        cToString[i] = c[i].toString(2).padStart(4, "0");
      }
    }

    let result: string = "";
    for (let i = 0; i < plaintext.length; i++) {
      c[i] = c[i].toString(16).toUpperCase();
      result += c[i];
    }

    setDecryptResult(result);
  };

  return (
    <>
      <section className="flex flex-col gap-8 h-screen justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 w-[400px]">
            <Textarea
              variant="bordered"
              label="Plain text"
              labelPlacement="inside"
              placeholder="Enter plain text"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              errorMessage={errors.plaintext && "Plain text is required"}
              isInvalid={errors.plaintext ? true : false}
              {...register("plaintext", { required: false })}
            />
            <Input
              type="text"
              variant="bordered"
              label="Vector"
              {...register("vector", { required: false })}
              errorMessage={errors.vector && "Vector field is required"}
              isInvalid={errors.vector ? true : false}
            />
            <Input
              type="text"
              variant="bordered"
              label="Key"
              {...register("key", { required: false })}
              errorMessage={errors.key && "Key field is required"}
              isInvalid={errors.key ? true : false}
            />
            <Textarea
              variant="flat"
              label="Result"
              labelPlacement="inside"
              readOnly
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              value={decryptResult}
            />
          </div>
          <br />
          <Button type="submit" className="w-full" color="primary">
            Encrypt
          </Button>
        </form>
      </section>
    </>
  );
};

export default Page;
