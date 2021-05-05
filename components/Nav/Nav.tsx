import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import styles from "./Nav.module.scss"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const Nav = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const handleClick = (e: MouseEvent) => {
    if (menuRef?.current?.contains(e.target)) {
      return
    }
    setOpen(false)
  }
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick) // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <div className={styles.headerBackground}>
      <div className={styles.headerWidth}>
        <header className={styles.header}>
          <h3 className={styles.navItem}>
            <Link href="/">
              <a className={styles.link}>Mattias Mucherie</a>
            </Link>
          </h3>
          <nav
            className={`${styles.navbar} ${open && styles.active}`}
            ref={menuRef}
          >
            <div className={styles.navItem}>
              <Link href="/resume">
                <a className={styles.link}>Resume</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <a className={styles.link}>Uses</a>
            </div>
            <div className={styles.navItem}>
              <a className={styles.link}>About</a>
            </div>
          </nav>
          <button
            className={styles.hamburger}
            onClick={() => setOpen((prevState) => !prevState)}
          >
            {open ? (
              <XIcon className={styles.icon} />
            ) : (
              <MenuIcon className={styles.icon} />
            )}
          </button>
        </header>
      </div>
    </div>
  )
}

export default Nav
