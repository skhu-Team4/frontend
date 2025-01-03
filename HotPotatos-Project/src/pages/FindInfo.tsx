import style from "../less/FindInfo.module.less";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function FindInfo() {
  const navigate = useNavigate();

  const closeClick = () => {
    navigate("/Login");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <IoMdArrowRoundBack className={style.close} onClick={closeClick} />
          <img src="potatalk.png" alt="logo image" />
        </div>
        <div className={style.main}>
          <div className={style.title}>내 계정 찾기</div>
          <div className={style.joinbox}>
            <p>계정을 찾으시려면 가입된 아이디, 학교 이메일 또는 별명을 입력해 주세요.</p>
            <input type="text" placeholder="아이디, 학교 이메일 또는 별명" id="id" className={style.box} />
            <div className={style.button}>다음</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindInfo;
