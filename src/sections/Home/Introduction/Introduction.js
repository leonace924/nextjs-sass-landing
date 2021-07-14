import React from 'react';
import Image from 'next/image';
import styles from './Introduction.module.scss';

const Introduction = ({ content }) => {
  const { text, image } = content;

  return (
    <div className={styles.introduction}>
      <div className={styles.introductionWrapper}>
        <div className={styles.introductionImage}>
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

        <div className={styles.introductionText}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
