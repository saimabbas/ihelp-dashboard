import React, { useEffect } from "react";
import st from "../styles/charity.module.css";
import {
  MdSearch,
  MdMenu,
  MdClose,
  MdEast,
  MdChatBubbleOutline,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
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
        <title>iHelp | Charity</title>
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

      <div className={st.charity + " " + "section"}>
        <div className="box">
          {/* Charity Top Overviw */}
          <div className={st.charityOverviewGrid}>
            <div className={st.charityImageText}>
              <img src="./assets/home.jpg" alt="" />
              <main>
                <h6>Save the Animals</h6>
                <p>
                  Al-Fatah Colony, A-Block <br />
                  Street 12, Hill View Area <br />
                  #AE100HH70 <br />
                  USA
                  <br />
                  Years of Incorporation: 6
                </p>
              </main>
            </div>
            <div className={st.charityTextBoxes}>
              <main>
                <h6>Total Capital Pooled (USD$): $12,923,121.23</h6>
                <h6>Total Interest Received: $1,421,341.21</h6>
                <h6>Total Direct Donations Received: $250,000.00</h6>
              </main>
              <main>
                <h6>Your Deposits: $DAI, $USDC, $ETH</h6>
                <h6>Your % of Charity Pool: 25%</h6>
              </main>
            </div>
          </div>

          {/* Charity Videos and Messages Grid */}
          <div className={st.videoMessagesGrid}>
            <div className={st.charityVideos}>
              <h1>Latest Video Updates</h1>
              <div className={st.charityVideoBox}>
                <video
                  controls
                  muted
                  autoPlay
                  loop
                  src="./assets/earth.mp4"
                ></video>
                <h6>Uploaded: October 16, 2021</h6>
              </div>
              <div className={st.charityVideoBox}>
                <video
                  controls
                  muted
                  autoPlay
                  loop
                  src="./assets/earth.mp4"
                ></video>
                <h6>Uploaded: October 16, 2021</h6>
              </div>
              <div className={st.charityVideoBox}>
                <video
                  controls
                  muted
                  autoPlay
                  loop
                  src="./assets/earth.mp4"
                ></video>
                <h6>Uploaded: October 16, 2021</h6>
              </div>
            </div>
            <div className={st.charityMessages}>
              <main>
                <h2>Mission</h2>
                <h6>
                  Acadia Center’s mission is to advance bold, effective, and
                  equitable clean energy solutions for a livable climate and a
                  stronger, more equitable economy. Grounded in impactful data
                  analysis and inclusive partnerships and collaboration, we
                  fight for economic and environmental policies that will have
                  the greatest impact on carbon emissions in our region.a
                  excepturi iusto.
                </h6>
              </main>
              <main>
                <h2>Countries to Operation</h2>
                <h6>
                  Argentina, Brazil, Costa Rica, Denmark, Eritrea, France,
                  Ghana, Honduras, India, Japan, Kazakhstan.
                </h6>
              </main>
              <main>
                <h2>Latest Message Updates</h2>
                <div className={st.charityMessageBox}>
                  <div className={st.Charitymessage}>
                    <MdChatBubbleOutline />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum dolore ad ducimus nesciunt, eius porro? Ut alias
                      culpa ex voluptates tempora mollitia non, consequuntur at?
                    </p>
                  </div>
                  <h6>Uploaded: November 15, 2035</h6>
                </div>
                <div className={st.charityMessageBox}>
                  <div className={st.Charitymessage}>
                    <MdChatBubbleOutline />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum dolore ad ducimus nesciunt, eius porro? Ut alias
                      culpa ex voluptates tempora mollitia non, consequuntur at?
                    </p>
                  </div>
                  <h6>Uploaded: November 15, 2035</h6>
                </div>
                <div className={st.charityMessageBox}>
                  <div className={st.Charitymessage}>
                    <MdChatBubbleOutline />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum dolore ad ducimus nesciunt, eius porro? Ut alias
                      culpa ex voluptates tempora mollitia non, consequuntur at?
                    </p>
                  </div>
                  <h6>Uploaded: November 15, 2035</h6>
                </div>
                <a className={st.seeAllMessages} href="#">
                  See all messages <MdEast />
                </a>
              </main>
              <div className={st.charityButtonsGrid}>
                <main>
                  <h6>Donate Interest</h6>
                  <div className={st.charityBtnGrd}>
                    <button className="grd-btn">Deposit</button>
                    <button className="grd-btn">Withdraw</button>
                  </div>
                </main>
                <main>
                  <h6>Donate Principal</h6>
                  <div className={st.charityBtnGrd}>
                    <button className="grd-btn">Direct Donate</button>
                  </div>
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
