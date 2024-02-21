import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Aftercall = () => {
  const [click, setClick] = useState("");
  const [eventName, setEventName] = useState("");
  const scriptRef = useRef(null);

  const generateScript = () => {
    const scriptContent = ` 
    [링백시간] 
    Asia/Tokyo  {Speakeasy Timeline Copy}

    안녕하세요 Google gTech XXX 매니저입니다 혹시 통화 가능하신가요?

    [녹음고지]본 통화는 통화 품질 향상을 위해 녹음되고 있음을 알려드립니다.
    
    [보안 인증]보안 인증을 위해 Google Ads로그인 이메일을 철자로 불러주시기 바랍니다.
    
    [방패확인]SS : 방패 빨간색 : 물음표모양 도움말-> 지원요청 확인-> 예 
    
    [통화내용]
    -
    -
    
    다른 문의 사항? 없음서비스 품질 향상을 위한 설문조사와 함께 통화 종료하겠습니다 `;
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
      <h3> 콜 후 노트 샘플 </h3>
      <Stack spacing={2} sx={{ justifyContent: 'left', alignItems: 'center' }} style={{ marginTop: "10px" }}>
      <Alert variant="outlined" severity="success"  style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}>
       가능한 많은 스크린샷과 고객센터 공식 문서를 첨부해야합니다. 
      </Alert>
      </Stack>
      <Button onClick={handleCopyClick}  ><ContentCopyIcon /></Button> 
      <TextField
        inputProps={{ ref: scriptRef }}
        value={generateScript()}
        readOnly
        id="outlined-multiline-static"
        label="Pre Call Note"
        multiline
        rows={20}
        style={{ width: "50%", height: "50%", marginTop: "10px" }}
      />
    </div>
  );
};

export default Aftercall;
