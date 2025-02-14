'use client';
import React from 'react';
import { type Metadata } from 'next';
import { useParams, useRouter } from 'next/navigation';

import CardComponent from '@/components/common/card';
import LineWithTitles from '@/components/common/line-with-titles';
import useGetPortfolio from '@/api/get-portfolio/get-portfolio.api';
import { ScrollArea } from '@/components/ui/scroll-area';

import CloseBtn from '~/public/assets/svg/close-btn.svg';

import Slider from './components/slider.component';
import AboutSkeleton from './components/about-skeleton';

export const metadata: Metadata = {
  title: 'about',
  description: 'about-me',
};

function AboutModule() {
  const router = useRouter();
  const currPath = useParams();
  const { data, isError, isFetching } = useGetPortfolio(
    (currPath?.['target-url'] as string) || ''
  );

  if (isError) {
    return <h2 className="ml-10 mt-10 text-xl">something went wrong ... !</h2>;
  }
  return (
    <div className="mx-auto flex h-full w-full animate-enter flex-col gap-10 pb-16 pt-9 md:w-[85%] lg:w-4/5 md-max:pb-0">
      <button
        onClick={() => router.back()}
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-color-stroke"
      >
        <CloseBtn />
      </button>
      {isFetching ? (
        <AboutSkeleton />
      ) : (
        <div className="flex gap-4 md-max:flex-col">
          <div className="flex w-[calc(50%_-_8px)] flex-grow flex-col gap-4 md-max:w-full">
            <CardComponent
              className="md:h-[432px] md-max:h-auto"
              header="What I'm about?"
            >
              <h3 className="mb-6 text-base font-normal text-color-subtitle">
                {'My Story'.toLocaleUpperCase()}
              </h3>
              <p className="mt-2 line-clamp-[7] text-xl leading-8">
                {data?.about.story}
              </p>
            </CardComponent>
            <CardComponent
              className="md:h-[248px] md-max:h-auto"
              title="what i do best"
            >
              <Slider />
            </CardComponent>
          </div>
          <div className="flex w-[calc(50%_-_8px)] flex-grow flex-col gap-4 md-max:w-full">
            <CardComponent
              className="md:h-[192px] md-max:h-auto"
              title="education"
            >
              <ScrollArea className="h-20 md-max:h-auto">
                {data?.about.educations?.map((edu, i) => (
                  <LineWithTitles
                    key={i}
                    className={`${i === 0 ? 'mt-0' : ''} ${i === (data?.about?.educations?.length ?? 0) - 1 ? 'mb-0' : ''}`}
                    title={edu.title || '---'}
                    detail={edu.timeline || '---'}
                  />
                ))}
              </ScrollArea>
            </CardComponent>
            <CardComponent
              className="md:h-[488px] md-max:h-auto"
              title="experience"
            >
              <ScrollArea className="h-[380px] md-max:h-auto">
                {data?.about.experiences?.map((exp, i) => (
                  <LineWithTitles
                    key={i}
                    className={`${i === 0 ? 'mt-0' : ''} ${i === (data?.about?.experiences?.length ?? 0) - 1 ? 'mb-0' : ''}`}
                    title={exp.title || '---'}
                    detail={exp.timeLine || '---'}
                  />
                ))}
              </ScrollArea>
            </CardComponent>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutModule;
