import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Common/Common';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.navWrapper}>
          <div className={styles.navLogo}>
            <Link href="/">
              <a>
                <h3>happily</h3>
              </a>
            </Link>
          </div>

          <ul className={styles.navMenu}>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">Why Happily</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className={styles.navButtons}>
          <Button size="small" color="light">
            Talk to Team
          </Button>
          <Button size="small" color="dark">
            Download Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
