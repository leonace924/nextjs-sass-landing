import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/Common/Common';
import styles from './ExperienceCard.module.scss';

const ExperienceCard = ({ card }) => {
  const { label, description, image, link } = card;

  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceCardImage}>
        <Image
          src={image}
          alt="intro-img"
          objectFit="cover"
          layout="responsive"
          width={300}
          height={240}
          priority
        />
      </div>

      <h3>{label}</h3>
      <p>{description}</p>

      <div className={styles.experienceCardCta}>
        <Button href={link}>Learn More</Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
