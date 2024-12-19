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

export default function DesktopVersion(): ReactElement {
  return (
    <div className="flex h-full w-full items-center justify-center p-4 lg-max:overflow-scroll">
      <div className="flex h-full w-full gap-x-4 xl-max:flex-col">
        <div className="flex h-full w-full flex-col gap-y-4 lg-max:flex">
          <div className="flex h-[268px] w-full gap-4">
            <Card className="h-full flex-grow-[2] basis-1/2 rounded-3xl bg-color-card px-14 pt-16">
              <CardTitle className="text-3xl font-semibold text-color-title">
                Hi, I&apos;m Taha 👋
              </CardTitle>

              <CardDescription className="pt-6 text-2xl text-color-subtitle">
                Lead product designer, currently working at Naqshava Tech
              </CardDescription>
            </Card>

            <div className="relative w-[260px] rounded-3xl">
              <Image src="/images/landing-image-one.png" alt="image" fill />
            </div>

            <div className="relative w-[260px] rounded-3xl">
              <Image src="/images/landing-image-one.png" alt="image" fill />
            </div>
          </div>

          <div className="flex h-[268px] w-full gap-4">
            <div className="relative w-[278px]">
              <Image src="/images/landing-image-one.png" alt="image" fill />
            </div>

            <TextCard
              title={`Passionate about design and enjoy solving problems.`}
              heading="A B O U T"
              className="relative flex-grow bg-color-card md:h-[268px] md:basis-[calc(100%/4.5*2)]"
            >
              <Button
                variant="outline"
                className="absolute bottom-6 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-transparent"
              >
                <Arrow className="mb-1 mr-1" />
              </Button>
            </TextCard>

            <div className="relative w-[358px]">
              <Image src="/images/laptop.png" alt="image" fill />
            </div>
          </div>

          <div className="flex h-[268px] w-full gap-4">
            <TextCard
              title={`Art Direction`}
              heading="S E R V I C E S"
              description="Get design tips & guide straight to your inbox for free!"
              className="relative flex-grow bg-color-card md:h-[268px] md:basis-[calc(100%/4*2)]"
            />

            <Card className="flex h-full flex-grow-[2] basis-1/2 flex-col gap-y-16 rounded-3xl bg-color-card px-6 pt-10">
              <CardTitle className="h-full px-2 text-3xl font-semibold text-color-title">
                Stack I use
              </CardTitle>

              <CardContent className="h-full p-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-color-stroke">
                  .
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex flex-grow items-center justify-center bg-color-card px-8 md:h-[268px] md:basis-[calc(100%/4*0.5)]">
              <Switch className="h-14 w-full">
                <Sun className="ml-[7.5px] mt-2" />
              </Switch>
            </Card>
          </div>
        </div>

        <div className="flex h-full w-[360px] flex-col gap-y-4 xl-max:mt-4 xl-max:w-full xl-max:flex-row xl-max:gap-x-4">
          <div className="flex h-full w-full flex-wrap gap-4 xl-max:w-[275px] xl-max:flex-wrap xl-max:gap-2">
            <Card className="flex h-20 w-20 items-center justify-center rounded-3xl">
              <Instagram />
            </Card>

            <Card className="flex h-20 w-20 items-center justify-center rounded-3xl">
              <Instagram />
            </Card>

            <Card className="flex h-20 w-20 items-center justify-center rounded-3xl">
              <Instagram />
            </Card>

            <Card className="flex h-20 w-20 items-center justify-center rounded-3xl">
              <Instagram />
            </Card>

            <Card className="flex h-20 w-20 items-center justify-center rounded-3xl">
              <Instagram />
            </Card>

            <Card className="flex h-20 w-20 items-center justify-center rounded-3xl">
              <Instagram />
            </Card>
          </div>

          <div className="relative h-[360px] w-full rounded-3xl xl-max:h-[255px] xl-max:w-[380px]">
            <Image src="/images/laptop.png" alt="image" fill />
          </div>

          <Card className="flex flex-col gap-y-11 px-8 py-10 xl-max:py-3">
            <CardTitle className="pt-6 text-3xl font-semibold text-color-title">
              Have a project in mind?
            </CardTitle>

            <Button
              variant="outline"
              className="mb-2.5 flex w-full items-center justify-center rounded-2xl bg-transparent"
            >
              Copy email
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
