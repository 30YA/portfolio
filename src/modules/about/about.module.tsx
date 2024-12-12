'use client';
import React from 'react';
import { type Metadata } from 'next';
import { useRouter } from 'next/navigation';

import CardComponent from '@/components/common/card';
import LineWithTitles from '@/components/common/line-with-titles';
import Slider from '@/components/common/slider';

import CloseBtn from '~/public/assets/svg/close-btn.svg';

export const metadata: Metadata = {
  title: 'about',
  description: 'about-me',
};

function AboutModule() {
  const router = useRouter();
  return (
    <div className="mx-auto flex h-full w-full animate-enter flex-col gap-10 pb-16 pt-9 md:w-[85%] lg:w-4/5 md-max:pb-0">
      <button
        onClick={() => router.back()}
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-color-stroke"
      >
        <CloseBtn />
      </button>
      <div className="flex gap-4 md-max:flex-col">
        <div className="flex w-[calc(50%_-_8px)] flex-grow flex-col gap-4 md-max:w-full">
          <CardComponent header="What I'm about?">
            <h3 className="mb-6 text-base font-normal text-color-subtitle">
              {'My Story'.toLocaleUpperCase()}
            </h3>
            <p className="mt-2 text-xl">
              Im Taha, Product Designer with solid expertise in UI/UX. The
              design is very simple, so it is very complex, and I seriously pay
              attention to the full details of everything, because the details
              make the difference between ordinary and extraordinary.<br></br> I
              work around the world, please feel free to contact me about the
              projects.
            </p>
          </CardComponent>
          <CardComponent className="!pb-0" title="what i do best">
            <Slider />
          </CardComponent>
        </div>
        <div className="flex w-[calc(50%_-_8px)] flex-grow flex-col gap-4 md-max:w-full">
          <CardComponent title="education">
            <LineWithTitles
              className="mt-0"
              title="Bachelor of Arts"
              detail="2021 - 2022"
            />
            <LineWithTitles
              className="mb-0"
              title="Bachelor of Arts - BA, Graphic Design"
              detail="2021 - 2022"
            />
          </CardComponent>
          <CardComponent title="experience">
            <LineWithTitles
              className="mt-0"
              title="Design Lead at Mano"
              detail="Current"
            />
            <LineWithTitles
              title="Senior Designer at Shopify"
              detail="2021 - 2022"
            />
            <LineWithTitles
              title="Product Designer at OLX"
              detail="2021 - 2022"
            />
            <LineWithTitles
              title="UX/UI Designer at Shrink"
              detail="2021 - 2022"
            />
            <LineWithTitles
              title="Design Lead at ManoDesign Lead at Mano"
              detail="2021 - 2022"
            />
            <LineWithTitles
              title="Senior Designer at Shopify"
              detail="2021 - 2022"
            />
            <LineWithTitles
              title="Product Designer at OLX"
              detail="2021 - 2022"
            />
            <LineWithTitles
              className="mb-0"
              title="UX/UI Designer at Shrink"
              detail="2021 - 2022"
            />
          </CardComponent>
        </div>
      </div>
    </div>
  );
}

export default AboutModule;
