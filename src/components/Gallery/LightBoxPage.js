import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../../constants/Global.css";

import styles from "./LightBoxPage.module.css";
import img0 from "../../images/0.jpeg";
import img1 from "../../images/1.jpeg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpeg";
import img4 from "../../images/4.jpeg";
import img5 from "../../images/5.jpeg";
import img6 from "../../images/6.jpeg";
import anfal from "../../images/logo.png";

const LightBoxPage = () => {
  const [toggler0, setToggler0] = useState(false);
  const [toggler1, setToggler1] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [toggler4, setToggler4] = useState(false);
  const [toggler5, setToggler5] = useState(false);
  const [toggler6, setToggler6] = useState(false);

  return (
    <>
      <div className="container">
        <div className="container " style={{ textAlign: "center" }}>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 logo">
              <img src={anfal} alt="anfal" className="logo-image" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 headers ">
              <h1 id="header_3">Covid-19 Team</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5 ">
            <img
              src={img0}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler0(!toggler0)}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5 ">
            <img
              src={img1}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler1(!toggler1)}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1 id="header_2" style={{ textAlign: "center" }}>
          Rulings of Grand Ayt.Sistani Regarding Covid19 Burial
        </h1>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              src={img2}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler2(!toggler2)}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              src={img3}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler3(!toggler3)}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              src={img4}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler4(!toggler4)}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              src={img5}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler5(!toggler5)}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              src={img6}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler6(!toggler6)}
            />
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={toggler0}
        sources={[img0, img1, img2, img3, img4, img5, img6]}
      />
      <FsLightbox
        toggler={toggler1}
        sources={[img1, img2, img3, img4, img5, img6, img0]}
      />
      <FsLightbox
        toggler={toggler2}
        sources={[img2, img3, img4, img5, img6, img0, img0]}
      />
      <FsLightbox
        toggler={toggler3}
        sources={[img3, img4, img5, img6, img0, img1, img2]}
      />
      <FsLightbox
        toggler={toggler4}
        sources={[img4, img5, img6, img0, img1, img2, img3]}
      />
      <FsLightbox
        toggler={toggler5}
        sources={[img5, img6, img0, img1, img2, img3, img4]}
      />
      <FsLightbox
        toggler={toggler6}
        sources={[img6, img0, img1, img2, img3, img4, img5]}
      />
    </>
  );
};

export default LightBoxPage;
