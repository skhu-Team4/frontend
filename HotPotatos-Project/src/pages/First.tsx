import style from "../less/First.module.less";
import { useNavigate } from "react-router-dom";

function First() {
  const navigate = useNavigate();

  const LoginClick = () => {
    navigate("/Login");
  };

  const SignupClick = () => {
    navigate("/Signup");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.section1}>
          <img src="potatalk.png" alt="logo image" className={style.logo} />
        </div>
        <div className={style.section2}>
          <p className={style.section2_title}>
            A+을 위한 <br />
            우리의 첫걸음,
            <br /> 포테이톡
          </p>
          <p className={style.sentence1}>지금 가입하세요.</p>
          <p className={style.JoinButton} onClick={SignupClick}>
            계정 만들기
          </p>
          <p className={style.TermsofUse}>가입하시려면 사용자의 안전성을 위해 이용약관에 동의해야 합니다.</p>
          <p className={style.Divid}>
            <p className={style.Line}></p>또는<p className={style.Line}></p>
          </p>
          <p className={style.sentence2}>이미 포테이톡에 가입하셨나요?</p>
          <p className={style.LoginButton} onClick={LoginClick}>
            로그인
          </p>
        </div>
      </div>
    </>
  );
}

export default First;
