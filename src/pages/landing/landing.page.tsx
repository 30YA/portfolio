import React, { type ReactElement } from 'react';
import Image from 'next/image';

import LandingCard from '@/components/common/landing-card.component';

export default function LandingPage(): ReactElement {
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 rounded-3xl border border-color-stroke p-4">
        <div className="col-span-9 mr-4 flex flex-col gap-y-4">
          <div className="flex justify-between gap-x-4">
            <LandingCard
              title={`Hi, I'm Taha 👋`}
              description="Lead product designer, currently working at Naqshava Tech"
              className="h-[268px] bg-color-card md:min-w-[536px]"
            />

            <div className="relative min-h-[268px] md:min-w-[260px]">
              <Image
                src="/images/landing-image-one.png"
                alt="image"
                fill
                objectFit="cover"
              />
            </div>

            <div className="relative min-h-[268px] md:min-w-[260px]">
              <Image
                src="/images/landing-image-one.png"
                alt="image"
                fill
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex justify-between gap-x-4">
            <div className="relative min-h-[268px] md:min-w-[260px]">
              <Image
                src="/images/landing-image-one.png"
                alt="image"
                fill
                objectFit="cover"
              />
            </div>

            <LandingCard
              title={`Hi, I'm Taha 👋`}
              description="Passionate about design and enjoy solving problems."
              className="h-[268px] bg-color-card md:min-w-[536px]"
            />

            <div className="relative min-h-[268px] md:min-w-[358px]">
              <Image
                src="/images/laptop.png"
                alt="image"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="col-span-3">
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          dolorem mollitia molestiae error dolore perferendis saepe natus,
          sapiente enim et quisquam laudantium ea libero? Cupiditate facilis
          aliquam eaque quis voluptate magni, dolorum perspiciatis praesentium
          alias, ipsum voluptas quos officiis quaerat rerum eos consectetur
          corrupti perferendis iure omnis excepturi repellendus itaque. Tempora
          magni deserunt dolores neque dicta, magnam, nam, et eum voluptatum
          corrupti quisquam fugiat eaque quod modi ipsa officia aliquid aliquam
          facilis necessitatibus voluptas minima. Alias autem, ex hic laborum
          minus dicta aliquid. Facilis neque ipsa magnam laborum necessitatibus
          exercitationem, modi quia voluptatibus blanditiis rem est sint quo
          voluptatem sit excepturi recusandae? Culpa quidem recusandae maiores
          dolore ullam repellendus totam beatae. Dolores aut ipsum nulla
          suscipit tempora ducimus in unde voluptas ut doloremque autem illo
          aliquam eum ullam, sunt placeat! Voluptatum corporis pariatur non vero
          mollitia laborum maiores a expedita qui dolores alias, voluptatem
          quibusdam nesciunt quidem explicabo eos est odit! Error quasi
          voluptatem voluptas fuga labore, doloribus, officiis quam ea debitis
          porro sint illo tempore nesciunt necessitatibus? Incidunt magnam
          voluptas qui sint. Voluptas dolor vero ducimus adipisci reiciendis?
          Minus consequatur repellendus quisquam nam eligendi impedit aliquid
          harum delectus nostrum cum in libero totam quae explicabo, beatae esse
          voluptate veritatis, dolor saepe laudantium veniam ipsam nesciunt sit
          quod! Non omnis rerum aspernatur, repellat eius, cupiditate
          consequatur animi quasi nemo numquam fugiat ratione velit error,
          sapiente rem hic libero repudiandae neque? Odio accusamus earum
          cupiditate vero omnis perspiciatis, maxime debitis et excepturi
          assumenda facere veniam dolores esse deserunt tempora iusto nihil.
        </div>
      </div>
    </div>
  );
}
