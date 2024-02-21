import React, { useState, useRef } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Home = () => {
  return (
    <div>

      <Stack spacing={2} sx={{ justifyContent: 'left', alignItems: 'center' }} style={{ marginTop: "10px" }}>
      <Alert variant="filled" severity="success"  style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}>
      M&A 유의사항 
        </Alert>
        <Alert variant="outlined" severity="success"  style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}>
       가능한 많은 스크린샷과 고객센터 공식 문서를 첨부해야합니다. 
      </Alert>
      </Stack> 



      <Stack spacing={2} sx={{ justifyContent: 'left', alignItems: 'center' }} style={{ marginTop: "10px" }}>
      <Accordion style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }} >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><h3> 화면공유관련 </h3> from Moonyeon Kim 28.July.2023</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          기본 적으로 케이스가 전화 또는 채팅 일 경우에 화면 공유 가능 버튼 활성화{" "}
        <br />될 수 있음 1. 유선 연결 후 화면 공유 가능 여부 확인
        (https://screenshot.googleplex.com/6R2PwZ7a7CsQB7u.png) <br />
        2. 광고주에게 https://support.google.com/ 주소 전달 -> 로그인까지 요청{" "}
        <br /> 3. 광고주 로그인 완료 이후 - 화면 공유 가능 여부 확인 아이콘 클릭
        -> request <br />
        screen share 4. 광고주에게 https://support.google.com/ 다시 확인 요청 ->{" "}
        <br />
        화면 공유 관련 팝업 떠야함 (만약 안뜰경우 새로고침 요청) -> 수락 <br />{" "}
        5. 에이전트 화면에는 팝업 창 뜨고 Trying to connect… 메세지와 3개 버튼
        보임 <br />
        - 만약 광고주가 진행이 안된다면 화면 공유 가능 링크 전송 가능 <br />
        (https://screenshot.googleplex.com/3UAKKW8T3geuoFw.png) <br />
        6. (광고주 화면) share my screen 선택 <br />
        7. 화면 선택하여 공유 (google meet 처럼 entire screen 또는 window
        선택화면 똑같이 뜸){" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>





      <Stack spacing={2} sx={{ justifyContent: 'left', alignItems: 'center' }} style={{ marginTop: "10px" }}>
      <Accordion style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }} >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><h3> 스콥관련 </h3> from Joonhyuk Lee 8.Dec.2023 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          광고지원팀에서도지금 TAG/GCC 전체 오퍼레이션한테 언급하는게 진행하시다
        <br />
        M&A스콥아니면 바로 일시중단 > 저를통해 언급해주시거나 애초에 스콥이라고
        <br />
        판단된부분만 도와주고 스플릿을 해줬으면 서로가 서로에게 TRT인지 TAT인지
        <br />
        뭐시기 걸고넘어질이유가 전혀없다입니다. 이말인즉슨, 광고지원팀측도
        <br />
        광고이야기나오면 바로 스플릿해라이거입니다. 괜히끌고갈이유 전혀없고
        <br />
        파이어베이스관련 앱관련, 광고관련 바로 무조건끊고 말씀바로바로해주세요{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>

      <Stack spacing={2} sx={{ justifyContent: 'left', alignItems: 'center' }} style={{ marginTop: "10px" }}>
      <Accordion style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }} >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><h3> unassign 계정인데 기술팀 연결해달라 요청할 경우 </h3> from Heesung Park 12.Sep.2023 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          이전에 지원 받았다 답변할 경우, 이전에 어떻게 지원 받으셨는지 저희
        측에서는 알 수 없는 점 양해부탁드립니다. <br />
        저희 부서도 여러 팀으로 나뉘는데 우선 저희 쪽에서는 직접 기술팀 연결이
        불가합니다.
        <br /> 다시 한번 양해부탁들입니다. >> 왜 안되는지 계속 물어볼 경우,
        <br /> 혹시 이전에는 어떻게 연결하셨나요? (모른다고 답변할 경우) >> 1.
        10분만 기다려주세요. (잠시 명상의 시간..) <br /> (5 - 10분 뒤), 저희가 혹시나
        가능한지 내부적으로 살펴봤지만, <br />
        기술팀으로 전달이 불가한 것으로 확인했습니다.
        <br /> 마찬가지로 부서 특성상 저희 쪽에서 기술지원은 어려운 부분
        양해부탁드립니다.
        <br />
        감사합니다.
        <br /> 2. 글쎄요 혹시나 해서 알아봤지만, 저희가 기술팀으로 연결할 권한이
        없습니다. 양해부탁드립니다.
        <br /> >> 그럼에도 계속 물어볼 경우,
        <br /> 저희도 잘모르겠습니다. <br />
        양해부탁드립니다. 이미 확인했으나 연결 불가합니다. (for loop or for
        each) <br />
        (절대 하지 말아야 할 말. 계정 상태, 광고주 자격 이런 말은 삼가해주세요)
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>



 
    </div>
  );
};

export default Home;
