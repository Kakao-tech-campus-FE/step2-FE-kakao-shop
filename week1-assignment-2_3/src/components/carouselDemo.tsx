import React from 'react';
import Carousel from './carousel';
import styles from '../styles/carouselDemo.module.css';

export default function CarouselDemo() {
  return (
    <div>
      <div
        style={{
          fontWeight: '700',
          fontSize: '2rem',
          margin: '2rem 1rem',
        }}
      >
        Carousel
      </div>
      <Carousel>
        <div
          key={0}
          style={{
            padding: '1.5rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt turpis ac leo congue consectetur. Aenean lacinia dolor id dolor venenatis ultricies. Praesent at nulla quis lectus gravida hendrerit. Aenean sed leo vitae orci dignissim vehicula at non turpis. Sed et quam diam. Sed id facilisis dui. Maecenas id feugiat eros, at sodales odio. Curabitur eget justo interdum, efficitur mi in, maximus ante.
        </div>
        <img
          key={1}
          className={styles.carouselImg}
          src="/dave-m5oOq4iyaeQ-unsplash.jpg"
          alt="Tree"
        />
        <img
          key={2}
          className={styles.carouselImg}
          src="/james-wheeler-XuAxyq0uRT0-unsplash.jpg"
          alt="Mountain"
        />
      </Carousel>
    </div>
  );
}
