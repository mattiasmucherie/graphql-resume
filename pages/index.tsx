import Head from "next/head"
import Image from "next/image"

import styles from "../styles/Home.module.scss"
import Skills from "../components/Skills/Skills"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mattias Mucherie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.width}>
          <div className={styles.hero}>
            <div className={styles.about}>
              <h1 className={styles.title}>
                I'm Mattias, a passionate and creative frontend developer
              </h1>
              <p className={styles.subText}>
                My expertise is currently React with Typescript and accessories,
                however I am always looking to expand my skill set. Other then
                coding, my other passions include rugby, cycling and painting
                <br />
                Get in touch with me by{" "}
                <a
                  href="mailto:mattias.mucherie@gmail.com"
                  className={styles.link}
                >
                  email
                </a>{" "}
                or on{" "}
                <a
                  href="https://www.linkedin.com/in/mattias-mucherie/"
                  target="_blank"
                  className={`${styles.link} ${styles.linkedin}`}
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/portrait.jpg"
                alt="Picture of Mattias"
                width={168}
                height={168}
                layout="intrinsic"
                className={styles.image}
              />
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </>
  )
}
