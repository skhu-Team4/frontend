import style from "../less/SubjectSearch.module.less";
import { FcSearch } from "react-icons/fc";

function SubjectSearch() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src="potatalk.png" alt="logo image" />
      </div>
      <div className={style.body}>
        <div className={style.search}>
          <input type="text" placeholder="과목명 또는 교수님 성함으로 검색하세요."></input>
          <div className={style.icon}>
            <FcSearch className={style.icons} />
          </div>
        </div>
        <div className={style.sentence}></div>
      </div>
    </div>
  );
}

export default SubjectSearch;
