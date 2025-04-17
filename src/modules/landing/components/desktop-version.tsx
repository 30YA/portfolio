import React, { type ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import TextCard from '@/components/common/text-card.component';
import CardComponent from '@/components/common/card';
import useGetPortfolio from '@/api/get-portfolio/get-portfolio.api';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import Copy from '@/components/common/copy';

import Arrow from '~/public/images/top-right-arrow.svg';
import DribbbleLogo from '~/public/assets/svg/dribbble-icon.svg';
import InstagramLogo from '~/public/assets/svg/instagram-icon.svg';
import BehanceLogo from '~/public/assets/svg/behance-icon.svg';
import LinkedinLogo from '~/public/assets/svg/linkdin-icon.svg';
import TelegramLogo from '~/public/assets/svg/telegram-icon.svg';
import SpotifyLogo from '~/public/assets/svg/spotify-icon.svg';

import Slider from './slider.component';
import { Banner } from './banner.component';
import DesktopSkeleton from './desktop-skeleton';

export default function DesktopVersion(): ReactElement {
  const { setTheme, theme } = useTheme();
  const themeChanger = (e: boolean) => {
    if (e) setTheme('dark');
    else setTheme('light');
  };

  const { data, isError, isSuccess, isFetching } = useGetPortfolio('');

  if (isFetching) {
    return <DesktopSkeleton />;
  }
  if (isError && !isSuccess) {
    return (
      <h2 className="ml-10 mt-10 text-xl md-max:hidden">
        something went wrong ... !
      </h2>
    );
  }

  return (
    <div className="flex w-full animate-enter items-center justify-center p-4 md-max:hidden lg-max:overflow-scroll">
      <div className="flex h-full min-h-[calc(100vh-95px)] w-full gap-x-4 xl-max:flex-col">
        <div className="flex w-full flex-col gap-y-4 lg-max:flex">
          <div className="flex w-full grow gap-4">
            <Card className="h-full flex-grow-[2] basis-1/2 rounded-3xl bg-color-card p-14">
              <CardTitle className="line-clamp-1 text-[32px] font-semibold text-color-title">
                {data?.pageTitle}
              </CardTitle>

              <CardDescription className="line-clamp-3 pt-6 text-2xl text-color-subtitle">
                {data?.description}
              </CardDescription>
            </Card>

            <div className="group relative w-[260px] cursor-pointer overflow-hidden rounded-[32px]">
              <Link href={`/${data?.projects[0]?.id}`}>
                <Image
                  src={
                    data?.projects[0]?.mainImageUrl ??
                    '/images/landing-image-one.png'
                  }
                  alt="image"
                  className="transform transition-transform duration-700 group-hover:scale-110"
                  objectFit="cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
                    <p className="text-xl text-white">
                      {data?.projects[0]?.name ?? '---'}
                    </p>
                    <Arrow className="h-5 w-5 text-white transition-transform duration-700 group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="group relative w-[260px] cursor-pointer overflow-hidden rounded-[32px]">
              <Link href={`/${data?.projects[1]?.id}`}>
                <Image
                  className="transform transition-transform duration-700 group-hover:scale-110"
                  src={
                    data?.projects[1]?.mainImageUrl ??
                    '/images/landing-image-one.png'
                  }
                  alt="image"
                  objectFit="cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
                    <p className="text-xl text-white">
                      {data?.projects[1]?.name ?? '---'}
                    </p>
                    <Arrow className="h-5 w-5 text-white transition-transform duration-700 group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex w-full grow gap-4">
            <div className="group relative w-[25%] grow overflow-hidden rounded-[32px]">
              <Image
                className="transform transition-transform duration-700 group-hover:scale-110"
                src={data?.profileUrl ?? '/images/landing-image-one.png'}
                alt="image"
                objectFit="cover"
                fill
              />
            </div>

            <Link href={`/about`} className="w-[50%]">
              <TextCard
                title={data?.aboutDescription ?? '---'}
                heading="A B O U T"
                titleClassName="line-clamp-4"
                className="group relative h-full min-h-[268px] flex-grow bg-color-card md:basis-[calc(100%/4.5*2)]"
              >
                <Button
                  variant="outline"
                  className="absolute bottom-6 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-color-card p-0"
                >
                  <Arrow className="!h-5 !w-5 text-color-subtitle transition-transform duration-500 group-hover:rotate-45" />
                </Button>
              </TextCard>
            </Link>

            <div className="group relative w-[25%] cursor-pointer overflow-hidden rounded-[32px]">
              <Link href={`/${data?.projects[2]?.id ?? '#'}`}>
                <Image
                  className="transform transition-transform duration-700 group-hover:scale-110"
                  src={
                    data?.projects[2]?.mainImageUrl ??
                    '/assets/jpg/product-pic.jpg'
                  }
                  alt="image"
                  objectFit="cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
                    <p className="text-xl text-white">
                      {data?.projects[2]?.name ?? '---'}
                    </p>
                    <Arrow className="h-5 w-5 text-white transition-transform duration-700 group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex min-h-[274px] w-full grow gap-4">
            <CardComponent className="!h-auto w-[45%]" title="S E R V I C E S">
              <Slider />
            </CardComponent>

            <Card className="flex w-[45%] flex-grow-[2] flex-col gap-y-16 rounded-3xl bg-color-card px-6 pt-10">
              <div className="flex h-full flex-col justify-between">
                <CardTitle className="px-2 text-3xl font-medium text-color-title">
                  Stack I use
                </CardTitle>

                <CardContent className="mb-12 p-0">
                  <Banner />
                </CardContent>
              </div>
            </Card>

            <CardComponent className="flex !h-auto shrink-0 items-center justify-center p-6">
              <Switch
                defaultChecked={theme === 'dark'}
                onCheckedChange={themeChanger}
                checked={theme === 'dark'}
              />
            </CardComponent>
            {/* <Card className="relative flex shrink-0 flex-grow items-center justify-center rounded-[32px] bg-color-card px-8 md:h-[268px] md:basis-[calc(100%/4*0.5)]">
            </Card> */}
          </div>
        </div>

        <div className="flex w-[360px] flex-col gap-y-4 xl-max:mt-4 xl-max:w-full xl-max:flex-row xl-max:gap-x-4">
          <div className="flex flex-col gap-4 xl-max:justify-around xl-max:gap-0">
            <div className="flex justify-between gap-4">
              <Link href={data?.dribbleUrl ?? '#'} target="_blank">
                <Card className="group flex h-20 w-20 grow items-center justify-center rounded-3xl bg-color-card transition-colors hover:bg-red-400">
                  <DribbbleLogo className="text-color-subtitle group-hover:text-white" />
                </Card>
              </Link>

              <Link href={data?.instagramUrl ?? '#'} target="_blank">
                <Card className="group flex h-20 w-20 grow items-center justify-center rounded-3xl bg-color-card transition-colors hover:bg-orange-400">
                  <InstagramLogo className="text-color-subtitle group-hover:text-white" />
                </Card>
              </Link>

              <Link href={data?.behanceUrl ?? '#'} target="_blank">
                <Card className="group flex h-20 w-20 grow items-center justify-center rounded-3xl bg-color-card transition-colors hover:bg-blue-500">
                  <BehanceLogo className="text-color-subtitle group-hover:text-white" />
                </Card>
              </Link>
            </div>

            <div className="flex justify-between gap-4">
              <Link href={data?.linkedinUrl ?? '#'} target="_blank">
                <Card className="group flex h-20 w-20 grow items-center justify-center rounded-3xl bg-color-card transition-colors hover:bg-green-500">
                  <LinkedinLogo className="text-color-subtitle group-hover:text-white" />
                </Card>
              </Link>

              <Link href={data?.email ?? '#'} target="_blank">
                <Card className="group flex h-20 w-20 grow items-center justify-center rounded-3xl bg-color-card transition-colors hover:bg-yellow-500">
                  <TelegramLogo className="text-color-subtitle group-hover:text-white" />
                </Card>
              </Link>

              <Link href={data?.spotifyUrl ?? '#'} target="_blank">
                <Card className="group flex h-20 w-20 grow items-center justify-center rounded-3xl bg-color-card transition-colors hover:bg-gray-500">
                  <SpotifyLogo className="text-color-subtitle group-hover:text-white" />
                </Card>
              </Link>
            </div>
          </div>

          <Link
            href={`/${data?.projects[3]?.id ?? '#'}`}
            className="group relative h-[360px] w-full grow overflow-hidden rounded-[32px] xl-max:h-[255px] xl-max:w-[380px]"
          >
            <Image
              src={
                data?.projects[3]?.mainImageUrl ?? '/assets/jpg/product-pic.jpg'
              }
              alt="image"
              fill
              className="transform transition-transform duration-700 group-hover:scale-110"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
                <p className="text-xl text-white">
                  {data?.projects[3]?.name ?? '---'}
                </p>
                <Arrow className="h-5 w-5 text-white transition-transform duration-700 group-hover:rotate-45" />
              </div>
            </div>
          </Link>

          <Card className="flex grow flex-col gap-y-11 rounded-[32px] bg-color-card px-8 py-10 xl-max:py-3">
            <CardTitle className="pt-6 text-3xl font-semibold text-color-title">
              Have a project in mind?
            </CardTitle>
            <Copy
              className="text- w-full cursor-copy !rounded-2xl bg-color-bg"
              textClassName="!text-base"
              textShouldBeCopied={data?.email ?? '#'}
            >
              Copy email
            </Copy>
          </Card>
        </div>
      </div>
    </div>
  );
}
