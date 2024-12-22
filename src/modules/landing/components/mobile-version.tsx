import React, { type ReactElement } from 'react';
import Image from 'next/image';
import { Switch } from '@radix-ui/react-switch';

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import TextCard from '@/components/common/text-card.component';
import { Button } from '@/components/ui/button';

import Arrow from '~/public/images/top-right-arrow.svg';
import Instagram from '~/public/images/instagram.svg';
import Sun from '~/public/svg/sun-fill.svg';

export default function MobileVersion(): ReactElement {
  return (
    <div className="mx-auto flex max-w-[450px] flex-col gap-y-3 p-3">
      <Card className="flex h-[200px] flex-col gap-y-6 rounded-3xl bg-color-card px-6 py-9">
        <CardTitle className="text-2xl font-semibold text-color-title">
          Hi, I&apos;m Taha 👋
        </CardTitle>

        <CardDescription className="text-xl text-color-subtitle">
          Lead product designer, currently working at Naqshava Tech
        </CardDescription>
      </Card>

      <TextCard
        title={`Passionate about design and enjoy solving problems.`}
        heading="A B O U T"
        className="relative h-[200px] bg-color-card"
        headingClassName="text-sm"
        titleClassName="text-xl pt-4"
      >
        <Button
          variant="outline"
          className="absolute bottom-6 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
        >
          <Arrow className="mb-1 mr-1" />
        </Button>
      </TextCard>

      <div className="relative h-[244px] w-full">
        <Image src="/images/laptop.png" alt="image" fill />
      </div>

      <div className="relative h-[244px] w-full">
        <Image src="/images/laptop.png" alt="image" fill />
      </div>

      <div className="relative h-[244px] w-full">
        <Image src="/images/laptop.png" alt="image" fill />
      </div>

      <div className="relative h-[244px] w-full">
        <Image src="/images/laptop.png" alt="image" fill />
      </div>

      <div className="flex w-full gap-x-3">
        <Card className="flex h-[184px] w-2/3 flex-col rounded-3xl bg-color-card p-5">
          <CardTitle className="h-full text-xl font-semibold text-color-title">
            Stack I use
          </CardTitle>

          <CardContent className="h-full p-0">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-color-stroke">
              .
            </div>
          </CardContent>
        </Card>

        <Card className="relative flex w-1/3 items-center justify-center rounded-3xl bg-color-card">
          <Switch className="h-14 w-full">
            <Sun className="ml-[7.5px] mt-2" />
          </Switch>
        </Card>
      </div>

      <TextCard
        title={`Art Direction`}
        heading="S E R V I C E S"
        description="Get design tips & guid straight toyour inbox for free! Get design tip & guid straight to your inbox for free!"
        className="h-[250px] bg-color-card"
        headingClassName="text-sm"
        titleClassName="text-xl pt-3"
        descriptionClassName="text-base pt-2 w-[90%]"
      />

      <Card className="flex flex-col gap-y-8 rounded-3xl p-6">
        <CardTitle className="text-xl font-semibold text-color-title">
          Have a project in mind?
        </CardTitle>

        <Button
          variant="outline"
          className="mb-2.5 flex h-11 w-full items-center justify-center rounded-2xl bg-transparent"
        >
          Copy email
        </Button>
      </Card>

      <div className="flex w-full gap-x-2">
        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Instagram />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Instagram />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Instagram />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Instagram />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Instagram />
        </Card>
      </div>
    </div>
  );
}
