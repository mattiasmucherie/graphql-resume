import React from "react"
import styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.headerWidth}>
        <header className={styles.header}>
          <div className={styles.navItem}>Mattias Mucherie</div>
          <nav className={styles.navbar}>
            <div className={styles.navItem}>Projects</div>
            <div className={styles.navItem}>Uses</div>
            <div className={styles.navItem}>About</div>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Nav
