"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import Card from "@/components/card/card.component";
import { Input } from "@/components/input/input.component";
import { useForm } from "react-hook-form";
import { IntroInputProps, introSchema } from "./schema/intro.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button/button.component";

const Intro = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IntroInputProps>({
    resolver: zodResolver(introSchema),
    defaultValues: {
      age: 0,
      email: "",
      lastName: "",
      name: "",
    },
  });

  const onSubmit = (data: IntroInputProps) => {
    console.log("Form Data:", data);
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Intro Form | YourSite</title>
        <meta
          name="description"
          content="Fill out the introductory form to get started with YourSite."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full max-w-4xl mx-auto px-4">
        <h1 className="mb-4 text-2xl text-center">Intro Form</h1>
        <Card>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <Input
                placeholder="Name"
                label="Name"
                {...control.register("name")}
                error={errors.name?.message}
              />
            </div>
            <div>
              <Input
                placeholder="Last Name"
                label="Last Name"
                {...control.register("lastName")}
                error={errors.lastName?.message}
              />
            </div>
            <div>
              <Input
                placeholder="Email"
                label="Email"
                {...control.register("email")}
                error={errors.email?.message}
              />
            </div>
            <div>
              <Input
                placeholder="Age"
                label="Age"
                type="number"
                {...control.register("age", {
                  valueAsNumber: true,
                })}
                error={errors.age?.message}
              />
            </div>

            <Button
              className="col-span-full"
              type="submit"
              size="sm"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Intro;
