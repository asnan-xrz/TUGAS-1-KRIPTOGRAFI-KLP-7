"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <section className="flex flex-col gap-8 h-screen justify-center items-center">
        <p className="absolute z-[-1] text-8xl"></p>
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
              {...register("plaintext", { required: true })}
            />
            <Input
              type="text"
              variant="bordered"
              label="Key"
              {...register("key", { required: true })}
              errorMessage={errors.key && "Key field is required"}
              isInvalid={errors.key ? true : false}
            />
            <Input
              type="text"
              variant="bordered"
              label="Vector"
              {...register("vector", { required: true })}
              errorMessage={errors.vector && "Vector field is required"}
              isInvalid={errors.vector ? true : false}
            />
            <Textarea
              variant="flat"
              label="Result"
              labelPlacement="inside"
              readOnly
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
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
