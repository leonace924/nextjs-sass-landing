import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/Common/Common';
import styles from './Events.module.scss';

const Events = ({ content }) => {
  const { title, works, ctaLabel, ctaLink } = content;

  return (
    <div className={styles.events}>
      <div className={styles.eventsWrapper}>
        <h2>{title}</h2>

        <div className={styles.eventsList}>
          {works.map((work, id) => (
            <div className={styles.eventsListImage} key={id}>
              <Image
                src={work.image}
                alt="work-img"
                layout="responsive"
                width={180}
                height={100}
                priority
              />
            </div>
          ))}
        </div>

        <div className={styles.eventsCta}>
          <Button href={ctaLink}>{ctaLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
