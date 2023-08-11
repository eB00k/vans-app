import React from "react";
import styles from "./vans.module.scss";
import { Link } from "react-router-dom";

export default function VanCard({ data }) {
  return (
    <Link to={`/vans/${data.id}`}>
      <div className={styles.card}>
        <img src={data.imageUrl} alt="van" className={styles.cardImg} />
        <div className={styles.info}>
          <span className={styles.name}>{data.name}</span>
          <span className={styles.price}>
            ${data.price}
            <small>/day</small>
          </span>
        </div>
        <div className={styles[data.type]}>{data.type}</div>
      </div>
    </Link>
  );
}
