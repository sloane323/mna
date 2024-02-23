import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Transfer = () => {
  const [click, setClick] = useState("");
  const [eventName, setEventName] = useState("");
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const generateTitle = () => {
    const titleContent = `Google gTech - 기술솔루션팀 이관 진행 관련 `;
    return titleContent;
  };

  const generateContent = () => {
    const contentContent = ` 안녕하세요, 담당자님.
Google gTech Customer Experience XXX 매니저입니다.
    
[문의 사항]
문의 계정 : XXX
문의 내용 : 기술솔루션팀 요청

[안내 사항]
광고주님께서 문의주신 기술솔루션팀 이관을 위해 유선상 안내드린 양식서 보내드리니 기입하여 회신주시면 해당 내용으로 기술솔루션팀 이관 진행 도와드리도록 하겠습니다.

[양식서]
태그 지원을 원하시는 웹사이트 URL: 
문제 사항(상세히 기입해 주세요) :
Google Analytics 계정 및 속성ID/ GTM(태그 관리자) 컨테이너ID : 
로그인 이메일 주소:
연락 받으실 이메일 주소:
연락 받으실 담당자님 성함 및 직책:
코드 구현 가능한 개발자이신지 여부 (예/아니요):
유선 연락처:
회사명:
예약 가능한 날짜 및 시간대 : 
※  자체개발인 경우 해당 웹사이트의 개발자, CMS(eg. 카페24, 아임웹 등)를 사용하시는 경우 해당 CMS의 소유자(ID/PW 소지)가 미팅 참석필요

위 안내가 광고주님께 도움이 되길 바라며, 추가 문의 사항이 있으시면 언제든지 본 이메일에 회신 혹은, 다음의 문의하기 양식서를 통해 Google gTech Customer Experience팀으로 문의하여 주시기 바랍니다.

감사합니다.
XXX
gTech Customer Experience
     `;
    return contentContent;
  };

  const additionalFormat = ` 안녕하세요, [이름]님.
Google gTech Customer Experience XXX 팀입니다.
고객님의 요청에 대한 기술 지원팀 스케줄이 확정되었습니다. 아래와 같은 일정으로 안내해드립니다:

일정: [일정]
시간: [시간]

위 일정으로 기술 지원을 받으실 수 있습니다. 해당 시간에 대비하여 필요한 작업을 사전에 준비해주시기 바랍니다.
만일 추가 문의사항이 있으시거나, 일정 변경이 필요하실 경우에는 언제든지 이 이메일로 회신하여 주시거나 Google Ads 고객센터를 통해 문의해 주시기 바랍니다.
감사합니다.
XXX
gTech Customer Experience
`;

  const handleCopyTitleClick = () => {
    if (titleRef.current) {
      titleRef.current.select();
      document.execCommand("copy");
      alert("copy");
    }
  };

  const handleCopyContentClick = () => {
    if (contentRef.current) {
      contentRef.current.select();
      document.execCommand("copy");
      alert("copy");
    }
  };

  const handleCopyAdditionalFormatClick = () => {
    navigator.clipboard.writeText(additionalFormat)
      .then(() => alert("copy"))
      .catch((error) => console.error("포맷 복사 실패: ", error));
  };

  return (
    <div>
      <h3>기술지원팀 케이스 이관하기</h3>
      <div></div>
      <Button onClick={handleCopyTitleClick}><ContentCopyIcon /></Button>
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
        <Alert severity="info" style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}> AM이 꼭 지정되어 있어야 합니다. [케이스번호] 뒤에 입력하면됩니다. </Alert> </Stack>

      <Button onClick={handleCopyContentClick}><ContentCopyIcon /></Button>
      <TextField
        inputProps={{ ref: contentRef }}
        value={generateContent()}
        readOnly
        id="outlined-multiline-static-content"
        label="Email Content"
        multiline
        rows={11}
        style={{ width: "50%", marginTop: "10px" }}
      />
      
      <br />
      <Button onClick={handleCopyAdditionalFormatClick}><ContentCopyIcon /></Button>
      <TextField
        inputProps={{ ref: contentRef }}
        value={additionalFormat}
        readOnly
        id="outlined-multiline-static-additional-format"
        label="Additional Format"
        multiline
        rows={11}
        style={{ width: "50%", marginTop: "10px" }}
      />
            <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}>
        <Alert severity="info" style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}> 이름 / 문의계정/ 안내사항 / 이름을 입력해야합니다.  </Alert> </Stack>
    </div>
  );
};

export default Transfer;
