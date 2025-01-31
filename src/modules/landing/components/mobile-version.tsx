import React, { type ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import TextCard from '@/components/common/text-card.component';
import { Button } from '@/components/ui/button';
import CardComponent from '@/components/common/card';

import Arrow from '~/public/images/top-right-arrow.svg';
import DribbbleLogo from '~/public/assets/svg/dribbble-icon.svg';
import InstagramLogo from '~/public/assets/svg/instagram-icon.svg';
import BehanceLogo from '~/public/assets/svg/behance-icon.svg';
import LinkedinLogo from '~/public/assets/svg/linkdin-icon.svg';
import GmailLogo from '~/public/assets/svg/gmail-icon.svg';

import Slider from './slider.component';
import { Banner } from './banner.component';

export default function MobileVersion(): ReactElement {
  const targetUrl = process.env.TARGET_URL;
  const { setTheme, theme } = useTheme();
  const themeChanger = (e: boolean) => {
    if (e) setTheme('dark');
    else setTheme('light');
  };
  return (
    <div className="mx-auto flex max-w-[450px] animate-enter flex-col gap-y-3 p-3 md:hidden">
      <Card className="flex h-[200px] flex-col gap-y-6 rounded-3xl bg-color-card px-6 py-9">
        <CardTitle className="text-2xl font-semibold text-color-title">
          Hi, I&apos;m Taha 👋
        </CardTitle>

        <CardDescription className="text-xl text-color-subtitle">
          Lead product designer, currently working at Naqshava Tech
        </CardDescription>
      </Card>

      <Link href={`${targetUrl}/about`}>
        <TextCard
          title={`Passionate about design and enjoy solving problems.`}
          heading="A B O U T"
          className="group relative h-[200px] bg-color-card"
          headingClassName="text-sm"
          titleClassName="text-xl pt-4"
        >
          <Button
            variant="outline"
            className="absolute bottom-6 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-transparent p-0"
          >
            <Arrow className="!h-5 !w-5 text-color-subtitle transition-transform duration-500 group-hover:rotate-45" />
          </Button>
        </TextCard>
      </Link>

      <div className="group relative h-[244px] w-full overflow-hidden rounded-[32px]">
        <Link href={`${targetUrl}/BoostPro`}>
          <Image
            src="/images/landing-image-one.png"
            alt="image"
            className="transform transition-transform duration-700"
            objectFit="cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
              <p className="text-xl text-white">Boost Pro</p>
              <Arrow className="h-5 w-5 rotate-45 text-white transition-transform duration-700" />
            </div>
          </div>
        </Link>
      </div>

      <div className="group relative h-[244px] w-full overflow-hidden rounded-[32px]">
        <Link href={`${targetUrl}/BoostPro`}>
          <Image
            className="transform transition-transform duration-700"
            src="/assets/jpg/product-pic.jpg"
            alt="image"
            objectFit="cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
              <p className="text-xl text-white">Boost Pro</p>
              <Arrow className="h-5 w-5 rotate-45 text-white transition-transform duration-700" />
            </div>
          </div>
        </Link>
      </div>

      <div className="flex w-full gap-x-3">
        {/* <Card className="flex h-[184px] w-2/3 flex-col rounded-3xl bg-color-card p-5">
          <CardTitle className="h-full text-xl font-semibold text-color-title">
            Stack I use
          </CardTitle>

          <CardContent className="h-full p-0">
            <LogoSlider />
          </CardContent>
        </Card> */}
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

      <CardComponent className="h-[270px]" title="S E R V I C E S">
        <Slider />
      </CardComponent>

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
          <InstagramLogo className="text-color-subtitle" />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <DribbbleLogo className="text-color-subtitle" />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <BehanceLogo className="text-color-subtitle" />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <LinkedinLogo className="text-color-subtitle" />
        </Card>

        <Card className="flex h-16 w-full items-center justify-center rounded-xl">
          <GmailLogo className="text-color-subtitle" />
        </Card>
      </div>
    </div>
  );
}
