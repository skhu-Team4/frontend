import SubjectSearch from "../components/SubjectSearch";
import SubjectStore from "../components/SubjectStore";
import style from "../less/SubjectAdd.module.less";

function SubjectAdd() {
  return (
    <div className={style.container}>
      <div className={style.SubjectSearch}>
        <SubjectSearch />
      </div>
      <div className={style.SubjectStore}>
        <SubjectStore />
      </div>
    </div>
  );
}

export default SubjectAdd;
