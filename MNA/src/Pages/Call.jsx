import React, { useRef } from "react";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Call = () => {
  const scriptRef = useRef(null);

  const generateScript = () => {
    const scriptContent = ` 
    1. 첫 인사
    예시 "안녕하세요 담당자님, 구글 gTech xxx 매니저입니다" *표시한 부분은 반드시 언급
    
    2. 녹음고지
    예시 "상담 전 통화 품질 향상을 위하여 본 통화는 녹음되고 있는 점 안내드립니다."
    
    3. 보안 확인

    예시 "보안 확인을 위해 구글 광고 계정 이메일 주소 말씀 부탁드립니다."
    [qwer@abc.com](mailto:qwer@abc.com)
    상대방이 이메일 주소는 스펠링하나하나 언급해주셔야 합니다. !
    gmail 만 '지메일'로 말해도 됩니다.
    문의 내용 답변 후
    1. 궁금한 점 있는지 더블책 (문의 내용 한에서)
    광고 부분 물어볼 경우, "그 부분은 이메일로 답변드리겠습니다." 하고 종료
    이메일은 split하고 마무리

    2. 서베이 코멘트
    # 종료하기 때문에 서비스 품질 향상을 위해 짧은 설문과 함께 통화 종료하겠습니다." 하고 
    마무리`;
    return scriptContent;
  };

  const handleCopyClick = () => {
    if (scriptRef.current) {
      scriptRef.current.select();
      document.execCommand("copy");
      alert("복사완료!");
    }
  };

  return (
    <div>
      <h3> 온 콜 스크립트 </h3>

      <TextField
        inputProps={{ ref: scriptRef }}
        value={generateScript()}
        readOnly
        id="outlined-multiline-static"
        label="Call Script"
        multiline
        rows={22}
        style={{ width: "50%", height: "100%", marginTop: "10px" }}
      />
      <br />

      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}>
        <Alert severity="error" sx={{ width: "50%" }}>
          추가로 케이스를 핸들링하실때 지금처럼 노트 형식으로 케이스에 트러블
          슈팅하신걸 기록해놓으실텐데요 다만, 이경우 핸들링하시는 분들께서 단순히
          글로서만 적는 부분이 아닌 어떤 부분을 실제로 확인하셨는지에 대해서
          스크린샷이나 혹여, 어떤 자료를 참고하셨다면 인터널 (혹은 익스터널) 링크
          혹은 스샷이 첨부가 되어야하기때문에 이부분 함께 전달 해주시면 감사하겠습니다! <br />
          
          예를들어, :checked: 방패는 초록색인지 :checked: 광고주
          보안인증은 제대로 진행이 되었는지 (로그인 이메일 주소 & 혹은 2가지 정보
          확인) :checked: 광고주가 문의한 내용이 내가 핸들링하였을때 동일하게
          reproduce가 되고있는지에 대한 여부 :checked: 이외에 참고한 자료 혹은
          확인한 내용들 :pink-plus: 폰노트 의 경우 광고주랑 전화로 연결이 되었을때
          선택하는 부분이기 때문에 <b> 통화녹음 고지 / 설문고지 </b> 등 기입되어야합니다
          (+스샷)
        </Alert> 
      </Stack>
    </div>
  );
};

export default Call;
