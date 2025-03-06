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

import Slider from './slider.component';
import { Banner } from './banner.component';
import MobileSkeleton from './mobile-skeleton';

export default function MobileVersion(): ReactElement {
  // const currPath = useParams();
  // const targetUrl = currPath?.['target-url'] as string;
  const { setTheme, theme } = useTheme();
  const themeChanger = (e: boolean) => {
    if (e) setTheme('dark');
    else setTheme('light');
  };
  const { data, isError, isSuccess, isFetching } = useGetPortfolio('');

  if (isFetching) {
    return <MobileSkeleton />;
  }
  if (isError && !isSuccess) {
    return (
      <h2 className="ml-10 mt-10 text-xl md:hidden">
        something went wrong ... !
      </h2>
    );
  }
  return (
    <div className="mx-auto flex max-w-[450px] animate-enter flex-col gap-y-3 p-3 md:hidden">
      <Card className="flex min-h-[200px] flex-col gap-y-6 rounded-3xl bg-color-card px-6 py-9">
        <CardTitle className="text-2xl font-semibold text-color-title">
          {data?.pageTitle}
        </CardTitle>

        <CardDescription className="text-xl text-color-subtitle">
          {data?.description}
        </CardDescription>
      </Card>

      <Link href={`/about`}>
        <TextCard
          title={data?.aboutDescription || '---'}
          heading="A B O U T"
          className="group relative min-h-[200px] bg-color-card"
          headingClassName="text-sm"
          titleClassName="text-xl pt-4"
        >
          <Button
            variant="outline"
            className="absolute bottom-6 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-color-card p-0"
          >
            <Arrow className="!h-5 !w-5 text-color-subtitle transition-transform duration-500 group-hover:rotate-45" />
          </Button>
        </TextCard>
      </Link>

      <div className="group relative h-[244px] w-full overflow-hidden rounded-[32px]">
        <Link href={`/${data?.projects[0]?.id}`}>
          <Image
            src={
              data?.projects[0]?.mainImageUrl || '/images/landing-image-one.png'
            }
            alt="Project-image-1"
            className="transform transition-transform duration-700"
            objectFit="cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
              <p className="text-xl text-white">
                {data?.projects[0]?.name || '---'}
              </p>
              <Arrow className="h-5 w-5 rotate-45 text-white transition-transform duration-700" />
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative h-[244px] w-full overflow-hidden rounded-[32px]">
        <Link href={`/${data?.projects[1]?.id}`}>
          <Image
            className="transform transition-transform duration-700"
            src={
              data?.projects[1]?.mainImageUrl || '/assets/jpg/product-pic.jpg'
            }
            alt="Project-image-1"
            objectFit="cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
              <p className="text-xl text-white">
                {data?.projects[1]?.name || '---'}
              </p>
              <Arrow className="h-5 w-5 rotate-45 text-white transition-transform duration-700" />
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative h-[244px] w-full overflow-hidden rounded-[32px]">
        <Link href={`/${data?.projects[2]?.id}`}>
          <Image
            className="transform transition-transform duration-700"
            src={
              data?.projects[2]?.mainImageUrl || '/assets/jpg/product-pic.jpg'
            }
            alt="Project-image-2"
            objectFit="cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
              <p className="text-xl text-white">
                {data?.projects[2]?.name || '---'}
              </p>
              <Arrow className="h-5 w-5 rotate-45 text-white transition-transform duration-700" />
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative h-[244px] w-full overflow-hidden rounded-[32px]">
        <Link href={`/${data?.projects[3]?.id}`}>
          <Image
            className="transform transition-transform duration-700"
            src={
              data?.projects[3]?.mainImageUrl || '/assets/jpg/product-pic.jpg'
            }
            alt="Project-image-3"
            objectFit="cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
              <p className="text-xl text-white">
                {data?.projects[3]?.name || '---'}
              </p>
              <Arrow className="h-5 w-5 rotate-45 text-white transition-transform duration-700" />
            </div>
          </div>
        </Link>
      </div>

      <div className="flex w-full gap-x-3">
        <Card className="flex h-[184px] w-2/3 flex-col rounded-3xl bg-color-card p-5">
          <div className="flex h-full flex-col justify-between">
            <CardTitle className="mb-6 text-xl font-semibold text-color-title">
              Stack I use
            </CardTitle>

            <CardContent className="h-full p-0">
              <Banner />
            </CardContent>
          </div>
        </Card>

        <Card className="relative flex w-1/3 items-center justify-center rounded-3xl bg-color-card">
          <Switch
            defaultChecked={theme === 'dark'}
            onCheckedChange={themeChanger}
            checked={theme === 'dark'}
          />
        </Card>
      </div>

      <CardComponent className="!h-[270px] !p-6" title="S E R V I C E S">
        <Slider />
      </CardComponent>

      <Card className="flex flex-col gap-y-8 rounded-3xl bg-color-card p-6">
        <CardTitle className="text-xl font-semibold text-color-title">
          Have a project in mind?
        </CardTitle>
        <Copy
          className="text- w-full !rounded-2xl bg-color-bg"
          textClassName="!text-base"
          textShouldBeCopied={data?.email || '#'}
        >
          Copy email
        </Copy>
      </Card>

      <div className="flex w-full gap-x-2">
        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Link href={data?.instagramUrl || '#'} target="_blank">
            <InstagramLogo className="text-color-subtitle" />
          </Link>
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Link href={data?.dribbleUrl || '#'} target="_blank">
            <DribbbleLogo className="text-color-subtitle" />
          </Link>
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Link href={data?.behanceUrl || '#'} target="_blank">
            <BehanceLogo className="text-color-subtitle" />
          </Link>
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Link href={data?.linkedinUrl || '#'} target="_blank">
            <LinkedinLogo className="text-color-subtitle" />
          </Link>
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <Link href={data?.email || '#'} target="_blank">
            <TelegramLogo className="text-color-subtitle" />
          </Link>
        </Card>
      </div>
    </div>
  );
}
