import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Common/Common';
import styles from './Hero.module.scss';

const Hero = ({ content }) => {
  const { title, description, backgroundImage, ctaLabel, ctaLink } = content;

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button href={ctaLink} color="light">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
