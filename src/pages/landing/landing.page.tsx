import React, { type ReactElement } from 'react';
import Image from 'next/image';

import LandingCard from '@/components/common/landing-card.component';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import Arrow from '~/public/images/top-right-arrow.svg';
import Instagram from '~/public/images/instagram.svg';

export default function LandingPage(): ReactElement {
  return (
    <div className="mx-auto mt-2 w-full max-w-[1700px]">
      <div className="grid grid-cols-12 rounded-3xl border border-color-stroke p-4">
        <div className="col-span-9 mr-4 flex flex-col gap-y-4">
          <div className="flex gap-4">
            <LandingCard
              title={`Hi, I'm Taha 👋`}
              description="Lead product designer, currently working at Naqshava Tech"
              className="flex-grow-[2] basis-1/2 bg-color-card"
            />

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

            <LandingCard
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
            </LandingCard>

            <div className="relative flex-grow rounded-3xl md:h-[268px] md:basis-[calc(100%/4.5*1.5)]">
              <Image src="/images/laptop.png" alt="image" fill />
            </div>
          </div>

          <div className="flex gap-x-4">
            <LandingCard
              title={`Art Direction`}
              heading="S E R V I C E S"
              description="Get design tips & guide straight to your inbox for free!"
              className="relative flex-grow bg-color-card md:h-[268px] md:basis-[calc(100%/4*2)]"
            />

            <LandingCard
              title={`Stack I use`}
              className="relative flex-grow bg-color-card md:h-[268px] md:basis-[calc(100%/4*1.75)]"
            />

            <Card className="relative flex flex-grow items-center justify-center bg-color-card md:h-[268px] md:basis-[calc(100%/4*0.5)]">
              <Button>switch</Button>
            </Card>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex flex-col gap-y-4">
            <div className="flex h-auto w-full flex-col gap-y-4">
              <div className="flex w-full flex-wrap gap-x-4">
                <Card className="flex h-20 w-20 flex-grow items-center justify-center rounded-3xl">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-20 flex-grow items-center justify-center rounded-3xl">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-20 flex-grow items-center justify-center rounded-3xl">
                  <Instagram />
                </Card>
              </div>

              <div className="flex w-full flex-wrap gap-x-4">
                <Card className="flex h-20 w-20 flex-grow items-center justify-center rounded-3xl">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-20 flex-grow items-center justify-center rounded-3xl">
                  <Instagram />
                </Card>

                <Card className="flex h-20 w-20 flex-grow items-center justify-center rounded-3xl">
                  <Instagram />
                </Card>
              </div>
            </div>

            <div className="relative w-full flex-grow rounded-3xl md:h-[360px]">
              <Image src="/images/laptop.png" alt="image" fill />
            </div>

            <LandingCard
              title={`Passionate about design and enjoy solving problems.`}
              className="relative bg-color-card"
            >
              <Button
                variant="outline"
                className="absolute bottom-4 flex items-center justify-center rounded-2xl bg-transparent md:w-[280px]"
              >
                Copy email
              </Button>
            </LandingCard>
          </div>
        </div>
      </div>
    </div>
  );
}
