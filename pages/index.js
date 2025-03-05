import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aman Gautam</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Quattrocento+Sans:wght@400;700&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <header className="FontMajorMono">
          <nav className="px-4 flex items-center justify-between py-6 text-sm text-white">
            <h1 className="navbar_shadow">Aman Gautam</h1>
            <ul className="flex items-center gap-10">
              <li>
                <BsMoonStarsFill className="cursor-pointer text-lg moon" />
              </li>
              <li className="navbar_shadow font-medium text-base">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <section className="FontCarme">
          <div className="glass">
            <div className="dashboard">
              <div className="user">
                <img src="./amanpfp.png" alt="Aman Gautam" />
                <h1>Aman Gautam</h1>
                <h3>Non Pro Member</h3>
              </div>
              <div className="links"> 
                <a
                  href="https://www.Instagram.com"
                  target="_blank"
                >
                  <IoLogoInstagram className="icons"/>
                  <h2>Instagram</h2>
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                >
                  <IoLogoGithub className="icons"/>
                  <h2>Github</h2>
                </a>
                <a
                  href="https://www.linkedIn.com"
                  target="_blank"
                >
                  <IoLogoLinkedin className="icons" />
                  <h2>LinkedIn</h2>
                </a>
              </div>
              <div className="empty">
              </div>
            </div>
            <div className="games">
              <div className="status">
                <h1>Active Games</h1>
              </div>
              <div className="cards">
                <div className="card">
                  <img src="./controllerImage.jpg" alt="" />
                  <div className="card_info">
                  <h1>Salesforce</h1>
                  <h3>PS5 Version</h3>
                  <div className="bar">bar</div>
                  </div>
                  <div className="progress">
                    60%
                  </div>
                </div>
                <div className="card">
                  <img src="./controllerImage.jpg" alt="" />
                  <div className="card_info">
                  <h1>Salesforce</h1>
                  <h3>PS5 Version</h3>
                  <div className="bar">bar</div>
                  </div>
                  <div className="progress">
                    60%
                  </div>
                </div>
                <div className="card">
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer></footer>
      </main>
    </>
  );
}
