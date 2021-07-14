import React from 'react'
import styles from './HamburgerIcon.module.scss'

const HamburgerIcon = ({ isOpen, ...props }) => (
  <div className={styles.hamburger} {...props}>
    <div
      className={`${styles.hamburgerIcon} ${
        isOpen ? styles.hamburgerIconOpen : ''
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
)

export default HamburgerIcon
