import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Pagoda in Indonesia",
            href: "https://photos.google.com/photo/AF1QipOwlEX7ulKlD32mr1fZZVe0CCvAbmiQhajYTz-m",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Our Lady of Akita in Indonesia",
            href: "https://photos.google.com/photo/AF1QipPqoIh1KGh2BJeOeLx5ZmyXvJ4Pjn2oEddH0uO7",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Indonesia Kelapa Gading Skyline",
            href: "https://photos.google.com/photo/AF1QipM0XLPt06VSZmG0z54c7Z-vsCZDzUai4gMMYTVh",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Hong Kong Airport",
            href: "https://photos.google.com/photo/AF1QipPxRswWxncHAet48elrPuIctIWm2ZqV_voziQzh",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Country Club Park",
            href: "https://photos.google.com/photo/AF1QipOzTWjgZSQwsuMswrbSi9LGZtrsrVSwHBFmCvKd",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Dipsy Profile Picture",
            href: "https://photos.google.com/photo/AF1QipP8MopNf1Z0yp8VfE2wzwpUcDfi2WoUqlK3ByTO",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Pagoda in Indonesia" },
          { src: "/photos/photo2.jpg", alt: "Our Lady of Akita in Indonesia" },
          { src: "/photos/photo3.jpg", alt: "Indonesia Kelapa Gading Skyline" },
          { src: "/photos/photo4.jpg", alt: "Hong Kong Airport" },
        ]}
      />

      
    </section>
  );
}
