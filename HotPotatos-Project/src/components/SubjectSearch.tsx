import React, { useState } from "react";
import style from "../less/SubjectSearch.module.less";
import { FcSearch } from "react-icons/fc";
import { FaCheck } from "react-icons/fa6";

function SubjectSearch() {
  // 상태 변수 추가
  const [major, setMajor] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [professor, setProfessor] = useState("");
  const [sentence, setSentence] = useState(""); // 결과를 담을 상태 변수
  const [showResult, setShowResult] = useState(false); // result 표시 여부 상태

  // 서버 요청 함수
  const searchSubjects = async () => {
    try {
      const response = await fetch("서버 URL", {
        method: "POST", // 혹은 GET, 서버 API에 맞춰 변경
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          major,
          lectureName,
          professor,
        }),
      });
      const data = await response.json();
      setSentence(data.result); // 서버에서 받은 결과를 sentence 상태에 저장
      setShowResult(true); // 결과를 받으면 result를 보이게 설정
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src="potatalk.png" alt="logo image" />
      </div>
      <div className={style.body}>
        <div className={style.search}>
          <div className={style.subSearch}>
            <input
              type="text"
              placeholder="전공을 입력하세요."
              value={major}
              onChange={(e) => setMajor(e.target.value)} // 전공 상태 업데이트
            />
          </div>
          <div className={style.subSearch}>
            <input
              type="text"
              placeholder="과목명을 입력하세요."
              value={lectureName}
              onChange={(e) => setLectureName(e.target.value)} // 과목명 상태 업데이트
            />
            <div className={style.icon}>
              <FcSearch
                className={style.icons}
                onClick={searchSubjects} // 검색 버튼 클릭 시 searchSubjects 함수 호출
              />
            </div>
          </div>
          <div className={style.subSearch}>
            <input
              type="text"
              placeholder="교수님 성함을 입력하세요."
              value={professor}
              onChange={(e) => setProfessor(e.target.value)} // 교수님 성함 상태 업데이트
            />
          </div>
        </div>

        {/* 검색 결과 영역 (showResult가 true일 때만 보이도록 설정) */}
        <div className={style.result}>
          <div className={style.sentence}>
            {/* 결과 표시 */}
            {sentence && <p>{sentence}</p>}
          </div>
          <div className={style.icon}>
            <FaCheck className={style.icons} />
          </div>
        </div>

        <div className={style.list}>
          <div className={style.listBody}></div>
          <div className={style.listFoot}></div>
        </div>
      </div>
    </div>
  );
}

export default SubjectSearch;
