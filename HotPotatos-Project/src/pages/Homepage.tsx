import style from "../less/Homepage.module.less";
import { BsChatDotsFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const chatClick = () => {
    navigate("/ChatPage"); // 채팅 페이지로 이동
  };

  const subjectClick = () => {
    navigate("/SubjectSearch");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header}> A+을 향한 첫걸음을 응원합니다. 포테이톡에 오신 것을 환영해요! </div>
        <div className={style.body}>
          <div className={`${style.expandableBox}`} onClick={chatClick}>
            <img src="대화.jpg" alt="채팅 image" />
            <div className={style.sentence}>
              <p> 채팅 페이지로 이동</p>
              <BsChatDotsFill className={style.button} />
            </div>
          </div>
          <div className={style.profile}>
            <div className={style.profileHead}></div>
            <div className={style.profileBody}>
              <div className={style.introduce}>한줄소개 :</div>
              <div className={style.sentence}></div>
            </div>
            <div className={style.profileFooter}>
              <div>내 정보 수정</div>
              <div className={style.logout}>로그아웃</div>
              <div className={style.out}>탈퇴하기</div>
            </div>
          </div>
          <div className={`${style.expandableBox}`} onClick={subjectClick}>
            <img src="추가.webp" alt="추가 image" />
            <div className={style.sentence}>
              <p>과목 추가 페이지로 이동</p>
              <IoIosAddCircle className={style.button} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
