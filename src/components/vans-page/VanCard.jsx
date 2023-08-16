import React from "react";
import styles from "./vans.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchParamsContext } from "../../pages/vans/Vans";

export default function VanCard({ data }) {
  const searchContextValue = useContext(SearchParamsContext);
  return (
    <Link to={`${data.id}`} state={searchContextValue}>
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
