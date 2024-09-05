"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  plaintext: string;
  key: string;
  vector: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [decryptResult, setDecryptResult] = useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let { plaintext, vector, key }: Inputs = data;

    let toString: string = "";

    let toSection: any = [];

    let j = 0;

    const plainTextLength = plaintext.length / 4;

    for (let i = 0; i < plainTextLength; i++) {
      j = i * 4;
      let limit = j + 4;
      for (j; j < limit; j++) {
        toString = toString + plaintext[j];
        toSection[i] = toString;
      }

      toString = "";
    }

    let p: any = [];
    let c: any = [];

    for (let i = 0; i < plainTextLength; i++) {
      toSection[i] = parseInt(toSection[i], 2);
      if (i === 0) {
        p[i] = (toSection[i] ^ parseInt(vector, 2))
          .toString(2)
          .padStart(4, "0");
      } else {
        p[i] = toSection[i] ^ c[i - 1];
      }
      p[i] = p[i].toString(2).padStart(4, "0");
      p[i] = (parseInt(p[i], 2) ^ parseInt(key, 2))
        .toString(2)
        .padStart(4, "0");
      p[i] = p[i].slice(1) + p[i][0];
      p[i] = parseInt(p[i], 2);
      c[i] = p[i];
    }

    let result: any = "";
    for (let i = 0; i < plainTextLength; i++) {
      toSection[i] = c[i].toString(16).toUpperCase();
      // toSection[i] = c[i].toString(2).padStart(4, '0')
      result += toSection[i];
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
              label="Message"
              labelPlacement="inside"
              placeholder="Enter message"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              errorMessage={errors.plaintext && "Plain text is required"}
              isInvalid={errors.plaintext ? true : false}
              {...register("plaintext", { required: false })}
            />
            <Input
              type="text"
              variant="bordered"
              label="IV"
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
