import React from "react";
import VanCard from "./VanCard";
import styles from "./vans.module.scss"

export default function VansCatalog({ vans }) {
  return (
    <div className={styles.catalog}>
      {vans.length ? (
        vans.map((van) => {
          return <VanCard data={van} key={van.id} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
