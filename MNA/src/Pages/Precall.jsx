import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const PreCall = () => {
  const scriptRef = useRef(null);

  const generateScript = () => {
    const scriptContent = `[보안확인]
이메일 확인 - 
방패 인증됨 - 

[문의내용]
-

[확인내용]
-  
`;
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
      <h3> 프리콜 노트 </h3>
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
        rows={10}
        style={{ width: "50%", height: "50%", marginTop: "10px" }}
      />
    </div>
  );
};

export default PreCall;
