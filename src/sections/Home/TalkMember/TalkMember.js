import React from 'react';
import { Input, TextArea, Button } from '@/src/components/Common/Common';
import styles from './TalkMember.module.scss';

const TalkMember = ({ content }) => {
  const { title, ctaLabel, ctaLink } = content;

  return (
    <div className={styles.talkMember}>
      <div className={styles.talkMemberWrapper}>
        <div className={styles.talkMemberTitle}>
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className={styles.talkMemberInfo}>
          <form className={styles.talkMemberForm}>
            <div className={styles.talkMemberFormTwoCols}>
              <Input label="First Name" required />
              <Input label="Last Name" required />
            </div>

            <div className={styles.talkMemberFormGroup}>
              <Input label="Company" name="company" required />
            </div>
            <div className={styles.talkMemberFormGroup}>
              <Input label="Email" name="email" required />
            </div>
            <div className={styles.talkMemberFormGroup}>
              <Input label="Phone Number" name="phone" required />
            </div>
            <div className={styles.talkMemberFormGroup}>
              <Input label="Event Type" name="type" required />
            </div>
            <div className={styles.talkMemberFormGroup}>
              <TextArea label="Message" name="message" row="8" required />
            </div>

            <div className={styles.talkMemberFormButton}>
              <Button color="light" type="submit">
                Submit
              </Button>
            </div>
            <div className={styles.talkMemberFormButton}>
              <Button color="dark" href={ctaLink}>
                {ctaLabel}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalkMember;
