import React, { useEffect, useState } from "react";
import st from "../styles/dashboardNew.module.css";
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
import {
  LineChart,
  Line,
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
    Interest: 4000,
    Current: 2400,
    Direct: 2400,
  },
  {
    name: "Page B",
    Interest: 3000,
    Current: 1398,
    Direct: 2210,
  },
  {
    name: "Page C",
    Interest: 2000,
    Current: 9800,
    Direct: 2290,
  },
  {
    name: "Page D",
    Interest: 2780,
    Current: 3908,
    Direct: 2000,
  },
  {
    name: "Page E",
    Interest: 1890,
    Current: 4800,
    Direct: 2181,
  },
  {
    name: "Page F",
    Interest: 2390,
    Current: 3800,
    Direct: 2500,
  },
  {
    name: "Page G",
    Interest: 3490,
    Current: 4300,
    Direct: 2100,
  },
];
const ContributeNew = () => {
  SwiperCore.use([Navigation, Pagination]);
  const [nickName, setNickName] = useState(true);
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
        <title>iHelp | Dashboard</title>
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

      <div className={st.dashboard + " " + "section"}>
        <div className="box">
          {/* Dashboard Top Text */}
          <h6 className={st.dashTopP}>
            Dashboard Explainer: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
            ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
            id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
            molestie elit, et lacinia.
          </h6>

          {/* Dashboard Wallet Name */}
          <div className={st.dashboardMainGrid}>
            {/* Wallet Name */}
            <main className={st.walletName}>
              <h6>Wallet Nickname: </h6>
              {nickName ? (
                <div className={st.displayName}>
                  <span>Saim Wallet</span>
                  <MdEdit onClick={() => setNickName(false)} />
                </div>
              ) : (
                <div className={st.displayNameEdit}>
                  <input type="text" />
                  <MdClose onClick={() => setNickName(true)} />
                </div>
              )}
            </main>
            {/* DO NOT remove following two spans */}
            <span className={st.placeholder1}></span>
            <span className={st.placeholder2}></span>

            {/* Dashboard Graph */}
            <main className={st.dashboardGraph}>
              <h6>Total Current Deposits: $36,432,592</h6>
              <h6>Total Interest Donated: $1,321,312</h6>
              <h6>Total Direct Donations: $0</h6>
              <div className={st.dashboardGraphBox}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 5,
                      left: -17.5,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Current"
                      stroke="#2c3e50"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="Interest" stroke="#27ae60" />
                    <Line type="monotone" dataKey="Direct" stroke="#5c0fc5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <button className="grd-btn">Wallet Donation Report</button>
            </main>
            {/* Leaderboard Ranking */}
            <main className={st.leaderBoardHeading}>
              <h5>Leaderboard Ranking</h5>
              <span>
                <MdContentCopy />
                <FaTwitter />
              </span>
              <h6>24h Ranking: 1st</h6>
              <h6>7d Ranking: 3rd</h6>
              <h6>30d Ranking: 4th</h6>
              <h6>All Time Ranking: 5th</h6>
            </main>
            {/* Dashboard Balance */}
            <main className={st.dashboardBalance}>
              <main>
                <h6>Claimable IHELP: 5,000</h6>
                <h6>IHELP Balance: 500</h6>
                <h6>XHELP Balance: 400</h6>
              </main>
              <div>
                <button className="grd-btn">Claim Rewards</button>
                <button className="white-btn">Adjust Staking Positions</button>
              </div>
            </main>
          </div>

          {/* Table Grid */}
          <div className={st.tableGrid}>
            {/* Current Deposit Detail */}
            <div className={st.tableContainer}>
              <h5>Current Deposit Detail</h5>
              {/* Table */}
              <div className={st.dashboardTable + " " + "table"}>
                <table>
                  <thead>
                    <tr>
                      <th>Charity</th>
                      <th>Your Deposits</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Save the Planets</td>
                      <td>Charity 2 Deposits in DAI, USDC, WETH</td>
                      <td>
                        <div>
                          <button className="grd-btn">Adjust</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>Charity 2 Deposits in DAI, USDC, WETH</td>
                      <td>
                        <div>
                          <button className="grd-btn">Adjust</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>Charity 2 Deposits in DAI, USDC, WETH</td>
                      <td>
                        <div>
                          <button className="grd-btn">Adjust</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interest Donation History */}
            <div className={st.tableContainer}>
              <h5>Direct Donation History</h5>
              <div className={st.dashboardTable + " " + "table"}>
                <table>
                  <thead>
                    <tr>
                      <th>Charity</th>
                      <th>Direct Donation Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/*Direct Donation History*/}
            <div className={st.tableContainer}>
              <h5>Interest Donation History</h5>
              <div className={st.dashboardTable + " " + "table"}>
                <table>
                  <thead>
                    <tr>
                      <th>Charity</th>
                      <th>Interest Donation</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                    <tr>
                      <td>Save the Planets</td>
                      <td>$100,000</td>
                      <td>Dec 31, 2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeNew;
