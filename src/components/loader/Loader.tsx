import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.wrapperCell}>
        <div className={styles.text}>
          <div className={styles.titleText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
        </div>
      </div>

      <div className={styles.wrapperCell}>
        <div className={styles.text}>
          <div className={styles.titleText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
        </div>
      </div>

      <div className={styles.wrapperCell}>
        <div className={styles.text}>
          <div className={styles.titleText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
        </div>
      </div>

      <div className={styles.wrapperCell}>
        <div className={styles.text}>
          <div className={styles.titleText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
        </div>
      </div>

      <div className={styles.wrapperCell}>
        <div className={styles.text}>
          <div className={styles.titleText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
          <div className={styles.snippetText}></div>
        </div>
      </div>
    </div>
  );
}
