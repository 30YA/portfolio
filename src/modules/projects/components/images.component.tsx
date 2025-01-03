import Image from 'next/image';
import React from 'react';

import ProductImage from '~/public/assets/jpg/product-pic.jpg';
import ProductImage1 from '~/public/assets/jpg/product-img1.jpg';
import ProductImage2 from '~/public/assets/jpg/product-img2.jpg';
import ProductImage3 from '~/public/assets/jpg/product-img3.jpg';

function Images() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        width={1200}
        height={650}
        className="w-full rounded-[32px]"
        src={ProductImage}
        alt="Product Image"
      />
      <Image
        width={1200}
        height={764}
        className="w-full rounded-[32px] border border-color-stroke"
        src={ProductImage1}
        alt="Product Image"
      />
      <Image
        width={1200}
        height={764}
        className="w-full rounded-[32px] border border-color-stroke"
        src={ProductImage2}
        alt="Product Image"
      />
      <Image
        width={1200}
        height={764}
        className="w-full rounded-[32px] border border-color-stroke"
        src={ProductImage3}
        alt="Product Image"
      />
    </div>
  );
}

export default Images;
