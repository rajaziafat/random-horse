import React from "react";
import styles from "./ImageMirrorEffect.module.css";

function ImageMirrorEffect({ img, style, imgStyles }) {
  return (
    <div className={styles.wrapper} style={style}>
      <img src={img} className="w-full" style={imgStyles} alt="" />
      <img src={img} className="w-full" style={imgStyles} alt="" />
    </div>
  );
}

export default ImageMirrorEffect;
