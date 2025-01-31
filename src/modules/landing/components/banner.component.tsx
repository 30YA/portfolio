'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Pic1 from '~/public/assets/webp/1-logo-pic.webp';
import Pic2 from '~/public/assets/webp/2-logo-pic.webp';
import Pic3 from '~/public/assets/webp/3-logo-pic.webp';
import Pic4 from '~/public/assets/webp/4-logo-pic.webp';
import Pic5 from '~/public/assets/webp/5-logo-pic.webp';
import Pic6 from '~/public/assets/webp/6-logo-pic.webp';

const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));
const Banner = () => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section className="slider-section">
          {images.map(({ id, image }) => (
            <Link href="#" className="image" key={id}>
              <Image className="slider-img" src={image} alt={id} />
            </Link>
          ))}
        </section>
        <section className="slider-section">
          {images.map(({ id, image }) => (
            <Link href="#" className="image" key={id}>
              <Image className="slider-img" src={image} alt={id} />
            </Link>
          ))}
        </section>
        <section className="slider-section">
          {images.map(({ id, image }) => (
            <Link href="#" className="image" key={id}>
              <Image className="slider-img" src={image} alt={id} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
