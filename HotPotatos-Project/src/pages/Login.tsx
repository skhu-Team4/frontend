import style from "../less/Login.module.less";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [loginId, setId] = useState("");
  const [password, setPassword] = useState("");

  const LoginClick = () => {
    if (loginId.trim() && password.trim()) {
      // 로그인 검증 로직 추가 가능
      navigate("/Homepage"); // 메인 페이지로 이동
    } else if (loginId.trim()) {
      alert("비밀번호를 입력해주세요.");
    } else if (password.trim()) {
      alert("아이디를 입력해주세요.");
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  };

  const makeClick = () => {
    navigate("/Signup");
  };

  const backClick = () => {
    navigate("/First");
  };

  const findClick = () => {
    navigate("/FindInfo");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <IoMdArrowRoundBack className={style.close} onClick={backClick} />
          <img src="potatalk.png" alt="logo image" />
        </div>
        <div className={style.main}>
          <div className={style.title}>반갑습니다.</div>
          <div className={style.joinbox}>
            <input
              type="text"
              placeholder="아이디"
              id="id"
              className={style.box}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="비밀번호"
              id="password"
              className={style.box}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={style.join} onClick={LoginClick}>
              로그인
            </div>
          </div>
          <div className={style.sub}>
            <div className={style.title1}>혹시, 계정을 잊으셨나요?</div>
            <div className={style.join} onClick={findClick}>
              계정 찾기
            </div>
            <div className={style.title2}>
              <div>계정이 없으신가요?</div>
              <p onClick={makeClick}>가입하기</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
