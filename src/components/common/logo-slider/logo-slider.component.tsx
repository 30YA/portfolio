import Image from 'next/image';
import React from 'react';

import Pic1 from '~/public/assets/webp/1-logo-pic.webp';
import Pic2 from '~/public/assets/webp/2-logo-pic.webp';
import Pic3 from '~/public/assets/webp/3-logo-pic.webp';
import Pic4 from '~/public/assets/webp/4-logo-pic.webp';
import Pic5 from '~/public/assets/webp/5-logo-pic.webp';
import Pic6 from '~/public/assets/webp/6-logo-pic.webp';

const LogoSlider = () => {
  const items = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6]; // داده‌های اصلی

  // داده‌ها را دوبار تکرار می‌کنیم
  const repeatedItems = items.concat(items);

  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        {repeatedItems.map((item, index) => (
          <li key={index}>
            <Image
              src={item}
              alt="logo"
              width={40}
              height={40}
              objectFit="contain"
              objectPosition="center center"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoSlider;
