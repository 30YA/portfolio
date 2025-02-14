'use client';
import React from 'react';
import { type Metadata } from 'next';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

import CardComponent from '@/components/common/card';
import useGetPortfolio from '@/api/get-portfolio/get-portfolio.api';
import { type Projects as ProjectsType } from '@/types/get-portfolio.type';

import CloseBtn from '~/public/assets/svg/close-btn.svg';
import TopRightArrow from '~/public/assets/svg/top-right-arrow.svg';

import Images from './components/images.component';
import ProjectSkeleton from './components/project-skeleteon';

export const metadata: Metadata = {
  title: 'Projects',
  description: '---',
};

function Projects() {
  const router = useRouter();
  const currPath = useParams();
  const { data, isError, isFetching } = useGetPortfolio(
    (currPath?.['target-url'] as string) || ''
  );
  const project: ProjectsType | undefined = data?.projects.find(
    (item) => item.id === Number(currPath?.projects)
  );
  const projectData = [
    {
      title: 'Company',
      description: project?.companyName,
    },
    {
      title: 'My Role',
      description: project?.role,
    },
    {
      title: 'Tools',
      description: project?.tools,
    },
    {
      title: 'TimeLine',
      description: project?.timeLine,
    },
  ];

  if (isError) {
    return (
      <h2 className="ml-10 mt-10 text-xl md-max:hidden">
        something went wrong ... !
      </h2>
    );
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
        <ProjectSkeleton />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex w-full gap-4 md-max:flex-col">
            <CardComponent className="!h-[568px] w-1/3 overflow-y-auto md-max:w-full">
              <h1 className="text-[32px] font-semibold text-color-title">
                {project?.name}
              </h1>
              <h2 className="mt-2 text-2xl font-normal text-color-subtitle">
                {project?.projectType}
              </h2>
              <div className="my-6 h-[1px] w-full bg-color-stroke" />
              <div className="flex grow flex-col gap-8">
                {projectData.map((item, index) => (
                  <div key={index}>
                    <h3 className="mb-2 text-base font-semibold uppercase text-color-subtitle">
                      {item.title}
                    </h3>
                    <p className="text-xl font-normal text-color-title">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardComponent>
            <CardComponent className="!h-[568px] w-2/3 md-max:w-full">
              <div className="relative flex h-full flex-col gap-[50px]">
                <div>
                  <h3 className="mb-2 text-base font-semibold uppercase text-color-subtitle">
                    Description
                  </h3>
                  <p className="mt-6 line-clamp-1 text-xl text-color-title">
                    {project?.description}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold uppercase text-color-subtitle">
                    Context
                  </h3>
                  <p className="mt-6 line-clamp-[7] text-xl leading-8">
                    {project?.context}
                  </p>
                </div>
                <Link
                  href={project?.url || '#'}
                  className="absolute bottom-6 left-0 flex h-[50px] w-full items-center justify-center gap-2 rounded-full border-[2px] border-color-stroke font-medium text-color-title"
                >
                  Live WebSite
                  <TopRightArrow className="h-3 w-3 text-color-title" />
                </Link>
              </div>
            </CardComponent>
          </div>
          <Images />
        </div>
      )}
    </div>
  );
}

export default Projects;
