import styles from "./css/poster.module.scss";
import PosterInput from "./PosterComponents/PosterInput";
import PosterEdit from "./PosterComponents/PosterEdit";

const Poster = (props) => {
  const user = props.match.params.user;

  return (
    <div className={styles.container}>
      <div className={styles.posterCard}>
        <h2>I Support {user}</h2>
        <PosterInput />
        <PosterEdit user={user} />
      </div>
    </div>
  );
};

export default Poster;
