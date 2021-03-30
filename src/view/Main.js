import React, { useRef, useState } from "react";
import Header from "../component/Header";
import TopNavigation from "../component/TopNavigation";
import SubNavigation from "../component/SubNavigation";
import produce from "immer";
import AsideView from "./AsideView";
import LoginSection from "../component/LoginSection";
import RequestTemplate from "../component/main/RequestTemplate";

const Main = () => {
  const [newRequestList, setNewRequestList] = useState([
    {
      id: 1,
      requester: "김선희",
      contents: "급여명세서 하단문구 추가 요청",
      requestDate: "2021-03-29",
    },
    {
      id: 2,
      requester: "유성욱",
      contents: "상여금 세액계산 확인 요청",
      requestDate: "2021-03-26",
    },
    {
      id: 3,
      requester: "한단비",
      contents:
        "근로소득원천징수영수증과 기간별종합레포트 의료비 구분 상이내용 확인 요청 ",
      requestDate: "2021-03-25",
    },
    {
      id: 4,
      requester: "김성진",
      contents: "근로소득원천징수영수증 확인 요청",
      requestDate: "2021-03-30",
    },
    {
      id: 5,
      requester: "김빛나",
      contents: "급여명세서 발송 관련",
      requestDate: "2021-03-30",
    },
    {
      id: 6,
      requester: "김승환",
      contents: "타소득 입력 오류",
      requestDate: "2021-03-30",
    },
  ]);
  const [progRequestList, setProgRequestList] = useState([
    {
      id: 1,
      requester: "김선희1",
      contents: "급여명세서 하단문구 추가 요청1",
      requestDate: "2021-03-29",
    },
    {
      id: 2,
      requester: "유성욱1",
      contents: "상여금 세액계산 확인 요청1",
      requestDate: "2021-03-26",
    },
    {
      id: 3,
      requester: "한단비1",
      contents:
        "근로소득원천징수영수증과 기간별종합레포트 의료비 구분 상이내용 확인 요청1 ",
      requestDate: "2021-03-25",
    },
    {
      id: 4,
      requester: "김성진1",
      contents: "근로소득원천징수영수증 확인 요청1",
      requestDate: "2021-03-30",
    },
    {
      id: 5,
      requester: "김빛나1",
      contents: "급여명세서 발송 관련1",
      requestDate: "2021-03-30",
    },
    {
      id: 6,
      requester: "김승환1",
      contents: "타소득 입력 오류1",
      requestDate: "2021-03-30",
    },
  ]);
  const [completeRequestList, setCompleteRequestList] = useState([]);
  const nextId = useRef(4);
  var handelData = [];
  var checkId = "";
  var cheker = "";
  const onhandleDragStart = (e, requestItem) => {
    checkId = requestItem.id;
    cheker = e.target.id;
    handelData = {
      id: nextId.current,
      requester: requestItem.requester,
      contents: requestItem.contents,
      requestDate: requestItem.requestDate,
    };
  };

  const onhandleDragOver = (e) => {
    e.preventDefault();
  };

  const dropRequest = () => {
    if (cheker === "New") {
      setNewRequestList((newRequestList) =>
        produce(newRequestList, (draft) =>
          draft.filter((item) => item.id !== checkId)
        )
      );
    } else if (cheker === "Prog") {
      setProgRequestList((progRequestList) =>
        produce(progRequestList, (draft) =>
          draft.filter((item) => item.id !== checkId)
        )
      );
    } else if (cheker === "Complete") {
      setCompleteRequestList((completeRequestList) =>
        produce(completeRequestList, (draft) =>
          draft.filter((item) => item.id !== checkId)
        )
      );
    }
  };

  const setHandleDrop = (setParam) => {
    var setData = produce(setParam, (draft) => {
      draft.push(handelData);
    });
    return setData;
  };

  const onhandleDrop = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === "New") {
      setNewRequestList((newRequestList) => setHandleDrop(newRequestList));
      //setHandleDrop(newRequestList);
    } else if (e.currentTarget.id === "Prog") {
      setProgRequestList((progRequestList) => setHandleDrop(progRequestList));
    } else if (e.currentTarget.id === "Complete") {
      setCompleteRequestList((completeRequestList) =>
        setHandleDrop(completeRequestList)
      );
    } else {
      return false;
    }
    dropRequest();
    nextId.current += 1;
  };
  return (
    <div>
      <Header />
      <br />
      {/*<TopNavigation />*/}
      <SubNavigation />
      <LoginSection />
      <section style={{ margin: "auto", width: "1900px", marginTop: "20px" }}>
        <RequestTemplate
          articleProps="newArticle"
          subtitle="새요청"
          itemName="New"
          RequestList={newRequestList}
          onhandleDragStart={onhandleDragStart}
          onhandleDragOver={onhandleDragOver}
          onhandleDrop={onhandleDrop}
        />
        <RequestTemplate
          subtitle="진행중"
          itemName="Prog"
          RequestList={progRequestList}
          onhandleDragStart={onhandleDragStart}
          onhandleDragOver={onhandleDragOver}
          onhandleDrop={onhandleDrop}
        />
        <RequestTemplate
          articleProps="completeArticle"
          subtitle="완료"
          itemName="Complete"
          RequestList={completeRequestList}
          onhandleDragStart={onhandleDragStart}
          onhandleDragOver={onhandleDragOver}
          onhandleDrop={onhandleDrop}
        />
      </section>
      <AsideView />
    </div>
  );
};

export default Main;
