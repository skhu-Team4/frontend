import style from "../less/Signup.module.less";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const joinClick = () => {
    navigate("/First");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <IoMdArrowRoundBack className={style.close} onClick={joinClick} />
          <img src="potatalk.png" alt="logo image" />
        </div>
        <div className={style.main}>
          <div className={style.title}>계정을 생성하세요.</div>
          <div className={style.joinbox}>
            <input type="text" placeholder="아이디" id="id" className={style.box} />
            <input type="text" placeholder="비밀번호" id="password" className={style.box} />
            <input type="text" placeholder="학교 이메일" id="email" className={style.box} />
            <input type="text" placeholder="별명" id="nickname" className={style.box} />
            <div className={style.join} onClick={joinClick}>
              계정 만들기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
