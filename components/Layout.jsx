import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// como los props, context
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';


const name = "Next curso";

export default function Layout({children, title, description, home}) {
    // console.log(home)
  return (
    <div className={styles.container}>
      {/* metadatos de pagina html y titulo */}
      <Head className={styles.header}>
      <link rel="icon" href="/favicon.ico" />
        <title>{title}t</title>
        <meta name="description" content={description}></meta>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
       {/* para poder utilizar ancla en nueva version legacyBehavior*/}
          <Link href="/" legacyBehavior>  
            <a>Inicio | </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a>Blog | </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>Contact | </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </nav>
        <main>
            {children}
        </main>
        {/* volver al inicio */}
        {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
        
    </div>
  )
}

Layout.defaullProps={
    title: "Next.js | mi sitio web",
    description: " Descripcion de mi sitio web ",
  };