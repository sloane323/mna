import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Email = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const generateTitle = () => {
    const titleContent = `Google gTech - 문의사항 관련 내용 회신 드립니다.`;
    return titleContent;
  };

  const generateContent = () => {
    const contentContent = `
    안녕하세요, 담당자님.
    Google gTech Customer Experience XXX 매니저입니다.
    
    [문의사항]
    문의 계정 : XXX
    문의 내용 : 
    
    [안내사항]
 
    본 메일이 도움이 되셨기를 바라며, 추가 문의사항이 있으시다면 언제든지 본 이메일에 회신 혹은 Google Ads 고객센터를 통하여 문의해 주시기 바랍니다.
    
    감사합니다.
    XXX
    gTech Customer Experience
  `;
    return contentContent;
  };

  const handleCopyTitleClick = () => {
    if (titleRef.current) {
      titleRef.current.select();
      document.execCommand("copy");
      alert("제목 복사완료!");
    }
  };

  const handleCopyContentClick = () => {
    if (contentRef.current) {
      contentRef.current.select();
      document.execCommand("copy");
      alert("내용 복사완료!");
    }
  };

  return (
    <div>
      <h3>콜 이후 이메일 보내기</h3>
      <div>
     </div>
        <Button onClick={handleCopyTitleClick}  ><ContentCopyIcon /></Button> 
      <TextField
        inputProps={{ ref: titleRef }}
        value={generateTitle()}
        readOnly
        id="outlined-multiline-static-title"
        label="Email Title"
        multiline
        rows={1}
        style={{ width: "50%", marginTop: "10px" }}
      />
  <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}>
      <Alert severity="info"  style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}> [케이스번호] 뒤에 입력하면됩니다. </Alert>  </Stack> 

<br />
        <Button onClick={handleCopyContentClick}  ><ContentCopyIcon /></Button> 

      <TextField
        inputProps={{ ref: contentRef }}
        value={generateContent()}
        readOnly
        id="outlined-multiline-static-content"
        label="Email Content"
        multiline
        rows={20}
        style={{ width: "50%", marginTop: "10px" }}
      />

<Stack sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}> 
      <Alert severity="info"  style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}> 이름 / 문의계정 / 문의 내용 / 안내사항 / 이름을 입력해야합니다.  </Alert>  </Stack>    
     
      <br />
    </div>
  );
};

export default Email;
