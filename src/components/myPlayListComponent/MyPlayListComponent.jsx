// import { getTrack } from "../../api";
import classNames from "classnames";
import styles from "../playList/PlayList.module.css";
import { Navigator } from "../navigator/Navigator";

export const MyPlayListComponent = () => {
  return (
    <div className={classNames(styles.content__playlist, styles.playlist)}>
      <Navigator />
      <h1>Мой плейлист</h1>
    </div>
  );
};
