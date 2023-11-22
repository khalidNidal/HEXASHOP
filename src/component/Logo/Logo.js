import Link from 'next/link'
import React from 'react'
import styles from '../Navbar/Navbar.module.css'

export default function Logo() {
  return (
    <div>
      <Link href="/" className={styles.logo}>
        HEXASHOP
      </Link>
    </div>
  )
}
