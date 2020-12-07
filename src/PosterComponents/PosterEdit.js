import styles from "../css/poster.module.scss";
import { connect } from "react-redux";
import React from "react";
import badge from "../images/badge.png";
import html2canvas from "html2canvas";

const PosterEdit = (props) => {
  const { user } = props;
  const handleClick = () => {
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("print"), {
      allowTaint: true,
      useCORS: true,
      logging: true,
    }).then(function (canvas) {
      saveAs(canvas.toDataURL(), `iSupport${user}.jpg`);
    });
  };

  function saveAs(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
  return (
    <>
      <div className={styles.hCenter}>
        <div className={styles.posterEdit} id="print">
          <img className={styles.backgroundImage} src={props.photo} />
          <img
            src={`https://fliqapp.xyz/posteazy/${user}.png`}
            className={styles.imageBadge}
          />
        </div>
        <button className={styles.downloadButton} onClick={handleClick}>
          Download Photo
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    photo: state.photo,
  };
};

export default connect(mapStateToProps)(PosterEdit);
