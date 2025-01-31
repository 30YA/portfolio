import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const whatIdoMock = [
  {
    title: 'Art Direction',
    description:
      'Get design tips & guid straight to your inbox for free! Get design tip & guid straight to your inbox for free!',
  },
  {
    title: 'Art Direction',
    description:
      'Get design tips & guid straight to your inbox for free! Get design tip & guid straight to your inbox for free!',
  },
  {
    title: 'Art Direction',
    description:
      'Get design tips & guid straight to your inbox for free! Get design tip & guid straight to your inbox for free!',
  },
];

function Slider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel setApi={setApi} className="siiiiiii">
      <CarouselContent className="siiiiiii cursor-grab">
        {whatIdoMock.map((item, index) => (
          <CarouselItem key={index} className="siiiiiii flex flex-col gap-4">
            <h4 className="select-none text-[26px] font-medium text-color-title">
              {item.title}
            </h4>
            <p className="line-clamp-3 select-none text-xl text-color-subtitle">
              {item.description}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-8 right-2 flex h-6 w-fit items-center justify-center gap-2 rounded-[50px] bg-color-bg p-2">
        {whatIdoMock.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index + 1 === current ? 'bg-color-title' : 'bg-color-stroke'}`}
          />
        ))}
      </div>
    </Carousel>
  );
}

export default Slider;
