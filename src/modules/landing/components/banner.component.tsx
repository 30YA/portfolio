'use client';
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import useGetPortfolio from '@/api/get-portfolio/get-portfolio.api';

const Banner = () => {
  const currPath = useParams();
  const { data } = useGetPortfolio((currPath?.['target-url'] as string) || '');
  return (
    <div className="inner">
      <div className="wrapper">
        <section className="slider-section">
          {data?.stacks.map(({ id, stackImageUrl }) => (
            <div className="image" key={id}>
              <Image
                className="slider-img"
                fill
                src={stackImageUrl || ''}
                alt={`${id}`}
              />
            </div>
          ))}
        </section>
        <section className="slider-section">
          {data?.stacks.map(({ id, stackImageUrl }) => (
            <div className="image" key={id}>
              <Image
                className="slider-img"
                fill
                src={stackImageUrl || ''}
                alt={`${id}`}
              />
            </div>
          ))}
        </section>
        <section className="slider-section">
          {data?.stacks.map(({ id, stackImageUrl }) => (
            <div className="image" key={id}>
              <Image
                className="slider-img"
                fill
                src={stackImageUrl || ''}
                alt={`${id}`}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
