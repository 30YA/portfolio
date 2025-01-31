'use client';
import React, { type ReactElement } from 'react';
import Image from 'next/image';

import TextCard from '@/components/common/text-card.component';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

import Arrow from '~/public/images/top-right-arrow.svg';
import Instagram from '~/public/images/instagram.svg';
import Sun from '~/public/svg/sun-fill.svg';

export default function LandingPage(): ReactElement {
  return (
    <div className="mx-auto mt-2 w-full max-w-[1800px]">
      <div className="grid grid-cols-12 rounded-3xl border border-color-stroke p-4">
        <div className="col-span-9 mr-4 flex flex-col gap-y-4 lg:col-span-10">
          <div className="flex gap-4 lg:h-[268px]">
            <Card className="h-full flex-grow-[2] basis-1/2 rounded-3xl bg-color-card lg:px-14 lg:pt-16">
              <CardTitle className="text-3xl font-semibold text-color-title">
                Hi, I&apos;m Taha 👋
              </CardTitle>

              <CardDescription className="pt-6 text-2xl text-color-subtitle">
                Lead product designer, currently working at Naqshava Tech
              </CardDescription>
            </Card>

            <div className="relative flex-grow basis-1/4 rounded-3xl">
              <Image src="/images/landing-image-one.png" alt="image" fill />
            </div>
            <div className="relative flex-grow basis-1/4 rounded-3xl">
              <Image src="/images/landing-image-one.png" alt="image" fill />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative flex-grow md:h-[268px] md:basis-[calc(100%/4.5*1)]">
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

            <div className="relative flex-grow rounded-3xl md:h-[268px] md:basis-[calc(100%/4.5*1.5)]">
              <Image src="/images/laptop.png" alt="image" fill />
            </div>
          </div>

          <div className="flex gap-x-4">
            <TextCard
              title={`Art Direction`}
              heading="S E R V I C E S"
              description="Get design tips & guide straight to your inbox for free!"
              className="relative flex-grow bg-color-card md:h-[268px] md:basis-[calc(100%/4*2)]"
            />
            <Card className="flex h-full flex-grow-[2] basis-1/2 flex-col gap-y-16 rounded-3xl bg-color-card lg:px-6 lg:pt-10">
              <CardTitle className="px-2 text-3xl font-semibold text-color-title">
                Stack I use
              </CardTitle>

              <CardContent className="p-0">
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

        <div className="col-span-3 md:col-span-2">
          <div className="flex flex-col gap-y-4">
            <div className="flex h-auto w-full flex-col gap-y-4">
              <div className="flex w-full gap-x-4">
                <Card className="flex h-20 w-full items-center justify-center rounded-3xl lg:w-full">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-full items-center justify-center rounded-3xl lg:w-full">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-full items-center justify-center rounded-3xl lg:w-full">
                  <Instagram />
                </Card>
              </div>

              <div className="flex w-full gap-x-4">
                <Card className="flex h-20 w-full items-center justify-center rounded-3xl lg:w-full">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-full items-center justify-center rounded-3xl lg:w-full">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-full items-center justify-center rounded-3xl lg:w-full">
                  <Instagram />
                </Card>
              </div>
            </div>

            <div className="relative w-full flex-grow rounded-3xl md:h-[290px]">
              <Image src="/images/laptop.png" alt="image" fill />
            </div>

            <TextCard
              title={`Passionate about design and enjoy solving problems.`}
              className="relative bg-color-card"
            >
              <Button
                variant="outline"
                className="flex w-full items-center justify-center rounded-2xl bg-transparent"
              >
                Copy email
              </Button>
            </TextCard>
          </div>
        </div>
      </div>
    </div>
  );
}
