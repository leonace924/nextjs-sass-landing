import React from 'react';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';
import styles from './Experiences.module.scss';

const Experiences = ({ content }) => {
  const { title, features } = content;

  return (
    <div className={styles.experiences}>
      <div className={styles.experiencesWrapper}>
        <h2>{title}</h2>

        <div className={styles.experiencesDetails}>
          {features.map((feature, id) => (
            <ExperienceCard key={id} card={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
