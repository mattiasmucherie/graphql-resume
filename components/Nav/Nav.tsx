import React, { useState } from "react"
import styles from "./Nav.module.scss"
import { MenuIcon } from "@heroicons/react/outline"

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.headerBackground}>
      <div className={styles.headerWidth}>
        <header className={styles.header}>
          <div className={styles.navItem}>Mattias Mucherie</div>
          <nav className={`${styles.navbar} ${open && styles.active}`}>
            <div className={styles.navItem}>Resume</div>
            <div className={styles.navItem}>Uses</div>
            <div className={styles.navItem}>About</div>
          </nav>
          <button
            className={styles.hamburger}
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <MenuIcon className={styles.icon} />
          </button>
        </header>
      </div>
    </div>
  )
}

export default Nav
