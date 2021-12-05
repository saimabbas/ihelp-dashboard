import React, { useEffect, useState } from "react";
import st from "../styles/stake.module.css";
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
import {
  ComposedChart,
  Line,
  Area,
  LineChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pv: 500,
  },
  {
    name: "Page B",
    pv: 400,
  },
  {
    name: "Page C",
    pv: 300,
  },
];
const data2 = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 9800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 3800,
  },
  {
    name: "Page G",
    pv: 4300,
  },
];
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
        <title>iHelp | Stake</title>
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

      <div className={st.stake + " " + " section"}>
        <div className="box">
          <div className={st.stakeGrid}>
            <div className={st.stakeGridLeft}>
              <h1>Actions and Your Staking Data</h1>
              <div className={st.maxFormGroup}>
                <h6>Stake IHelp</h6>
                <div className={st.maxInput}>
                  <input type="text" placeholder="0 iHelp" />
                  <button className="grd-btn">MAX</button>
                </div>
              </div>
              <div className={st.buttonGroup}>
                <button className="grd-btn">Stake</button>
                <button className="white-btn">Unstake</button>
              </div>
              <h5>
                You have generated 21.23 IHELP in 23 days. <br /> You have
                deposited 20 IHELP and withdrawn 0 from the staking pool.
              </h5>
            </div>
            <div className={st.stakeGridRight}>
              <h1>Actions and Your Staking Data</h1>
              <h6>Staking Pool Statistics</h6>
              <h5>
                <b>Total IHELP Staked:</b> 5,245,421.42 <br />
                <b>Percentage Staked: </b> 81.12%
              </h5>
              <div className={st.stakeGraphBox}>
                <h2>APY</h2>
                <main>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      layout="vertical"
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0,
                      }}
                    >
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" scale="band" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" barSize={20} fill="#ac52f2" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </main>
              </div>
              <div className={st.stakeGraphBox}>
                <h2>HELP/XHELP</h2>
                <h3>2.7134</h3>
                <main>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data2}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#5c0fc5"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeNew;
