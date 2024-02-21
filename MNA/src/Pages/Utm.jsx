import React, { useState, useRef } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Utm = () => {
  const [click, setClick] = useState("");
  const [eventName, setEventName] = useState("");
  const scriptRef = useRef(null);

  const generateScript = () => {
    const scriptContent = ` 문의주신 사항과 관련하여 이전에 진행경과를 안내드린것처럼 UTM 데이터가 유실되는 기술적 이슈로 확인되었고
    상위 기술팀에서 본 기술적 이슈를 해소하고자 개선 조치를 취했으나, 안타깝게도 지난 유실 데이터를 복구하기는 어려운 것으로 전달받았습니다.
    일부 지난 데이터 확인이 불가하여 불편하실 상황은 충분히 이해되지만, UTM은 애널리틱스 혹은 구글애즈에서 제공되는 기본 소스/매체 등의 광고 데이터가 아닌 담당자님께서 확인하시기 편하신 임의 데이터가 반영하도록 설정하시는 
    부분이다보니 저희측에서 유실된 데이터를 찾아 복구하기 어려운 것으로 이해하여 주시면 감사하겠습니다.
    더욱이 GA4의 경우 기존 UA와 다르게 UTM을 우선 적용하는 오버라이드 기능이 지원되지 않는 등의 사유로 UTM 사용이 권장되지 않다보니, 더욱 개선 조치가 어려웠던 것으로 생각 해 주실 수 있겠습니다.
    다만 이번 개선 조치를 통해 11월말부터 12월 초까지 있었던 UTM 데이터 유실 이슈는 더이상 발생하지 않는 상황입니다.
    이에 문의주셨던 기간의 데이터는 기본적으로 제공되는 소스/매체 혹은 채널 등의 데이터를 활용 해 주시기 바랍니다.
    기술적 이슈로 불편 겪으신 점에 다시 한번 담당자님의 너른 양해를 부탁드리며, 추후 문의주신 기간 외 다른 날짜 데이터에서도 동일한 이슈가 확인되는 경우 언제든지 저희측으로 문의주시면 추가 조사에 도움드릴 수 있도록 하겠습니다. `;
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
      <h3> 자주 들어오는 UTM 관련 내용 </h3>

      <Button onClick={handleCopyClick}><ContentCopyIcon /></Button>
      <TextField
        inputProps={{ ref: scriptRef }}
        value={generateScript()}
        readOnly
        id="outlined-multiline-static-title"
        label="Email Title"
        multiline
        rows={10}
        style={{ width: "50%", marginTop: "10px" }}
      />
      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}>
        <Alert severity="info" style={{ width: "52%", marginTop: "10px", marginBottom: "10px" }}> not set 버그관련 이메일 </Alert> </Stack>


      <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}>
        <Accordion sx={{ width: '50%' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <b>GA4에서 광고 링크 또는 특정 링크 UTM 내용 확인하는 방법</b>
          </AccordionSummary>
          <AccordionDetails>
            1. GA4 보고서 메뉴에서 확인하는 방법 (또는 GA4 대쉬보드 보는 방법입니다.)<br />
            GA4 메인화면에서 좌측 메뉴에 [보고서]를 클릭합니다.<br />
            다음 메뉴 중에서 [획득] 아래 [트래픽 획득]를 클릭합니다.<br />
            화면 중앙에 테이블 및 어느 경로를 통해 들어온 여러 데이터가 보이실 겁니다.<br />
            테이블에서 상단 (검색 메뉴 바로 아래)를 클릭하시어 session source medium를 클릭합니다.<br /><br />
            여기서 UTM을 포함한 Traffic source 내용을 확인 하실 수 있습니다.<br /><br />
            2. 탐색 보고서에서 확인하는 방법 (특정 보고서에서 보는 방법입니다.)<br />
            *탐색 보고서 내용은 자유로운 형식으로 보고서를 제작할 수 있는 메뉴이기 때문에 Template은 존재하나 Google 고객센터에서 추천드리는 보고서 설정 방식은 따로 없음을 알려드립니다.<br /><br />
            GA4 메인화면에서 좌측 메뉴에 [탐색]을 클릭합니다.<br />
            상단 메뉴 중에서 Free-form을 선택합니다.<br />
            좌측 메뉴 중 Dimensions에 +를 클릭합니다.<br />
            Traffic source 카테고리에서 Session source/medium 또는 Session manual source/medium을 선택합니다.<br />
            UTM내용은 선택한 옵션에서 모두 확인하실 수 있습니다만 UTM만 보고싶은 경우 Session manual source/medium를 선택하시면 됩니다.<br /><br />
            Session manual source/medium 정의<br />
            웹사이트의 클릭 URL에 UTM 매개변수를 성공적으로 보내거나 모바일 앱의 경우campaign_details 이벤트를 보내면 측정기준이 채워집니다.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '50%' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <b> NOT SET이 보이는 이유는 무엇인가요?</b>
          </AccordionSummary>
          <AccordionDetails>
            UTM을 설정했음에도 (not set)이 보인다면 UTM 내용이 GA4에서 인식하지 못했다 라고 해석할 수 있습니다.<br />
            UTM 내용이 너무 길 경우, GA4에서 인지를 못할 수 있습니다. 가장 필수인 source / medium 만 넣어주시고 다시 테스트 해보시기 바랍니다.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '50%' }} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b>다른 광고 매체 (Nav**, Kaka*, Met*, Fac* etc)에서 UTM은 잘보이는데 구글 광고만 안보입니다.</b>
          </AccordionSummary>
          <AccordionDetails>
            Google analytics에서 구글 광고에 대한 Traffic은 google/cpc로 표시됩니다.<br /> 구글 광고 랜딩페이지에 UTM을 설정하셨더라도 google/cpc가 우선입니다.<br />
            타 매체의 경우, google 제품이 아니기 때문에 UTM 입력한 내용에 맞춰 표시 됩니다. UTM이 없을 경우, GA4 판단에 따라 표시됩니다.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>

        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ marginTop: "10px" }}>
          <Alert severity="error" sx={{ width: '100%' }} >
            <AlertTitle>
              그럼에도 불구하고 저는 구글 광고 traffic은 UTM으로 나타나게 하고 싶습니다. (*절대 권장드리지 않습니다.)
     </AlertTitle>
     <br />
     방법은 존재합니다. Google Ads에 자동태그를 끄게 되면 GA4에서 구글 광고로 들어온 traffic은 UTM 설정으로 우선해서 보여집니다.  <br/>
     다만 문제가 있습니다. Google Ads에서 자동태그는 기본값입니다. 자동태그가 켜저있는 이유는 전환을 작동시키기 위함입니다.  <br/>
     여기서 자동태그를 끄게 된다면 구글 광고에서 설정한 전환을 사용할 수 없다는 의미입니다. <br/>
     따라서 저희 측에서는 이 방법은 절대 절대 권장드리지 않음을 알려드립니다. <br/>
     이 부분 설정에 대한 어떠한 불이익은 전적으로 저희 책임이 아님을 다시 한번 말씀드립니다. <br/>
          </Alert> </Stack>


        <Accordion sx={{ width: '50%' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          ><b>
              UTM 컨텐츠 값이 보이지 않을 경우 다음과 같이 확인해볼 수 있습니다.</b>
          </AccordionSummary>
          <AccordionDetails>
            UTM 값이 보이지 않는다면, GA4가 UTM값을 인식하지 못했다 라고 해석할 수 있습니다.<br />
            인식을 못할 경우, 보통 UTM값이 너무 길거나 형식이 맞지 않아서 발생하는 내용입니다.<br /> GA4 입장에서 UTM값을 다시 정리해보는 방법으로 접근하셔야 합니다.<br />
            UTM의 source / medium 값이 잘 보이고 content 값만 보이지 않을 경우,<br /> source와 medium 값처럼 비슷한 형식 (영문 추천)으로 설정해 보시거나 source / medium 
            그리고 contents만 입력하시어 최소의 UTM 값만 입력하시는 방법이 있습니다.<br />
            안타깝게도 이전에 잡히지 않았던 데이터는 다시 확인할 수 없음을 참고부탁드립니다.
          </AccordionDetails>
        </Accordion>



      </Stack>
    </div>
  );
};

export default Utm;
