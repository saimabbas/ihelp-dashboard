import React, { useEffect } from "react";
import st from "../styles/contributeNew.module.css";
import {
  MdSearch,
  MdMenu,
  MdClose,
  MdKeyboardArrowLeft,
  MdOutlineFilterList,
  MdKeyboardArrowRight,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import $ from "jquery";
import { useRouter } from "next/router";
import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Head from "next/head";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
const ContributeNew = () => {
  const router = useRouter();
  SwiperCore.use([Navigation, Pagination]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /* Header on-scroll Animation */
    const headerAnim = gsap.timeline();
    headerAnim.fromTo(
      ".header",
      {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(5px)",
        scrollTrigger: {
          trigger: ".hero",
          start: "0% 0",
          end: "50% 0",
          scrub: 0.5,
          toggleActions: "start pause resume none",
        },
      }
    );
  }, []);

  /* Mobile Header */
  const openMobHeader = () => {
    $(".header").addClass("active-mob-header");
  };
  const closeMobHeader = () => {
    $(".header").removeClass("active-mob-header");
  };
  /* PC Anchors */
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#app",
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  return (
    <div id="app" className="app">
      <Head>
        <title>iHelp | Contribute</title>
      </Head>
      <img src="./assets/bgc.svg" alt="Bgc" className="body-bgc" />
      {/* Header */}
      <div className="header">
        <div className="mob-header">
          <div className="box">
            <div className="mob-header-content">
              <Link href="/" passHref={true}>
                <a className={router.pathname == "/" ? "activeLink" : ""}>
                  Contribute
                </a>
              </Link>
              <Link href="/dashboardNew" passHref={true}>
                <a
                  className={
                    router.pathname == "/dashboardNew" ? "activeLink" : ""
                  }
                >
                  My Dashboard
                </a>
              </Link>
              <Link href="/stake" passHref={true}>
                <a className={router.pathname == "/stake" ? "activeLink" : ""}>
                  Stake
                </a>
              </Link>
              <Link href="/leaderBoardNew" passHref={true}>
                <a
                  className={
                    router.pathname == "/leaderBoardNew" ? "activeLink" : ""
                  }
                >
                  Leaderboard
                </a>
              </Link>
              <button className="white-btn">Ethereum Network</button>
              <button className="white-btn">Connect Wallet</button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="headerContent">
            <Link href="/">
              <img onClick={moveTo1} src="./assets/logo.png" alt="" />
            </Link>
            <div className="headerRight">
              <Link href="/" passHref={true}>
                <a className={router.pathname == "/" ? "activeLink" : ""}>
                  Contribute
                </a>
              </Link>
              <Link href="/dashboardNew" passHref={true}>
                <a
                  className={
                    router.pathname == "/dashboardNew" ? "activeLink" : ""
                  }
                >
                  My Dashboard
                </a>
              </Link>
              <Link href="/stake" passHref={true}>
                <a className={router.pathname == "/stake" ? "activeLink" : ""}>
                  Stake
                </a>
              </Link>
              <Link href="/leaderBoardNew" passHref={true}>
                <a
                  className={
                    router.pathname == "/leaderBoardNew" ? "activeLink" : ""
                  }
                >
                  Leaderboard
                </a>
              </Link>
              <button className="grd-btn">Ethereum Network</button>
              <button className="grd-btn">Connect Wallet</button>
              <MdMenu onClick={openMobHeader} className="open-mob-header" />
              <MdClose onClick={closeMobHeader} className="close-mob-header" />
            </div>
          </div>
        </div>
      </div>

      <div className={st.contribute + " " + "section"}>
        <div className="box">
          {/* Contribute Top Minimal Information */}
          <div className={st.topMainGrid}>
            <div className={st.quickInfo}>
              <h6>Total IHELP Minted: 11,200,132</h6>
            </div>
            <div className={st.quickInfo}>
              <h6>IHELP Minting Phase: 4</h6>
            </div>
            <div className={st.quickInfo}>
              <h6>% IHELP Staked: 24%</h6>
            </div>
          </div>

          {/* Top Text */}
          <h6 className={st.topText}>
            Welcome to the iHelp dapp lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam nunc elit, fringilla eget tincidunt in, rutrum
            semper odio. Nulla sit amet commodo risus. Etiam in erat nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Fusce ac augue massa. Sed ac ultricies mi,
            ullamcorper vehicula massa.
            <br /> Click on any charity to learn more and contribute.
          </h6>

          {/* Search and  Filter Box */}
          <div className={st.searchFilter}>
            <main>
              <div className={st.searchBar}>
                <MdSearch />
                <input type="text" placeholder="Search" />
              </div>
            </main>
            <main className={st.filterBox}>
              <h6 className={st.filter}>
                Filter <MdOutlineFilterList />
              </h6>
              <div className={st.sortBy}>
                <h6>Sort By: </h6>
                <select name="" id="">
                  <option value="">Name</option>
                  <option value="">Category</option>
                  <option value="">Pool Size</option>
                </select>
              </div>
            </main>
          </div>

          {/* Table */}
          <div className={st.tableContribute + " " + "table"}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Pool Size</th>
                  <th>Contributed</th>
                </tr>
              </thead>
              <tbody>
                <Link href="/charity">
                  <tr>
                    <td>Save the Animals</td>
                    <td>Animals</td>
                    <td className={st.contributeTableDescripion}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat sed maiores aut. Repellat, eaque facilis?
                    </td>
                    <td>$28,214,123.22</td>
                    <td>50,000.00</td>
                  </tr>
                </Link>
                <tr>
                  <td>Save the Planets</td>
                  <td>Planets</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save Yourself</td>
                  <td>You</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save the Animals</td>
                  <td>Animals</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save the Planets</td>
                  <td>Planets</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save Yourself</td>
                  <td>You</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save the Animals</td>
                  <td>Animals</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save the Planets</td>
                  <td>Planets</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>Save Yourself</td>
                  <td>You</td>
                  <td>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat sed maiores aut. Repellat, eaque facilis?
                  </td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeNew;
