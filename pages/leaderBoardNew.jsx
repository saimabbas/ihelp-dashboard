import React, { useEffect, useState } from "react";
import st from "../styles/leaderboardNew.module.css";
import {
  MdSearch,
  MdMenu,
  MdClose,
  MdKeyboardArrowLeft,
  MdEdit,
  MdOutlineFilterList,
  MdEast,
  MdKeyboardArrowRight,
  MdChatBubbleOutline,
  MdContentCopy,
} from "react-icons/md";
import { FaTwitter, FaCopy } from "react-icons/fa";
import $ from "jquery";
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
  /*   const TogActiveBtn = () => {
    $("#stake").toggleClass(" grd-btn white-btn");
    $("#unstake").toggleClass(" grd-btn white-btn");
  }; */

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
        <title>iHelp | Leaderboard</title>
      </Head>
      <img src="./assets/bgc.svg" alt="Bgc" className="body-bgc" />
      {/* Header */}
      <div className="header">
        <div className="mob-header">
          <div className="box">
            <div className="mob-header-content">
              <Link href="/">Contribute</Link>
              <Link href="/dashboardNew">My Dashboard</Link>
              <Link href="/stake">Stake</Link>
              <Link href="/leaderBoardNew">Leaderboard</Link>
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
              <Link href="/">Contribute</Link>
              <Link href="/dashboardNew">My Dashboard</Link>
              <Link href="/stake">Stake</Link>
              <Link href="/leaderBoardNew">Leaderboard</Link>
              <button className="grd-btn">Ethereum Network</button>
              <button className="grd-btn">Connect Wallet</button>
              <MdMenu onClick={openMobHeader} className="open-mob-header" />
              <MdClose onClick={closeMobHeader} className="close-mob-header" />
            </div>
          </div>
        </div>
      </div>
      <div className={st.leaderborad + " " + "section"}>
        <div className="box">
          {/* Search and  Filter Box */}
          <div className={st.searchFilter}>
            <main>
              <div className={st.searchBar}>
                <MdSearch />
                <input type="text" placeholder="Search Nickname" />
              </div>
            </main>
            <main className={st.filterBox}>
              <div className={st.sortBy}>
                <h6>Category </h6>
                <select name="" id="">
                  <option value="">All</option>
                  <option value="">All</option>
                  <option value="">All</option>
                </select>
              </div>
            </main>
          </div>

          <div className={st.leaderboardGrid}>
            <div className={st.buttonGroup}>
              <button className="grd-btn">Helpers</button>
              <button className="white-btn">Charities</button>
            </div>
            <div className={st.buttonGroup}>
              <button className="grd-btn">Interest Donations</button>
              <button className="white-btn">Direct Donations</button>
            </div>
            <div className={st.placeholder}></div>
            <div className={st.buttonGroup2}>
              <button className="white-btn">24H</button>
              <button className="grd-btn">7 Days</button>
              <button className="white-btn">30 Days</button>
              <button className="white-btn">All Time</button>
            </div>
          </div>
          {/* Table */}
          <div className={st.tableContribute + " " + "table"}>
            <table>
              <thead>
                <tr>
                  <th>Ranking</th>
                  <th>NickName/Wallet Address</th>
                  <th>Curent TVL ($USD)</th>
                  <th>Total Donations ($USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cobe</td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Cobe</td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Cobe</td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Cobe</td>
                  <td>$28,214,123.22</td>
                  <td>50,000.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Cobe</td>
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
