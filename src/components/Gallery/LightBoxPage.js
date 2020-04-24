import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import styles from "./LightBoxPage.module.css";
import img0 from "../../images/0.jpeg";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpeg";
import img3 from "../../images/3.jpeg";
import img4 from "../../images/4.jpeg";
import img5 from "../../images/5.jpeg";

const LightBoxPage = () => {
  const [toggler0, setToggler0] = useState(false);
  const [toggler1, setToggler1] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [toggler4, setToggler4] = useState(false);
  const [toggler5, setToggler5] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row gallerys">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 ">
            <img
              src={img0}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler0(!toggler0)}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
            <img
              src={img1}
              alt="photos"
              className={styles.image_gallery}
              onClick={() => setToggler1(!toggler1)}
            />
          </div>
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
        </div>
      </div>

      <FsLightbox
        toggler={toggler0}
        sources={[img0, img1, img2, img3, img4, img5]}
      />
      <FsLightbox
        toggler={toggler1}
        sources={[img1, img2, img3, img4, img5, img0]}
      />
      <FsLightbox
        toggler={toggler2}
        sources={[img2, img3, img4, img5, img0, img1]}
      />
      <FsLightbox
        toggler={toggler3}
        sources={[img3, img4, img5, img0, img1, img2]}
      />
      <FsLightbox
        toggler={toggler4}
        sources={[img4, img5, img0, img1, img2, img3]}
      />
      <FsLightbox
        toggler={toggler5}
        sources={[img5, img0, img1, img2, img3, img4]}
      />
    </>
  );
};

export default LightBoxPage;
