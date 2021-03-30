import "date-fns";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 50%);
  border-radius: 10px;
  max-width: 800px;
  transform: translateY(20%);
  margin: 0 auto;
  padding: 40px 20px;
  background: #ffff;
`;
const StyledWriteRequest = styled.div`
  text-align: center;
  height: 450px;
  margin-left: auto;
  margin-right: auto;

  & > table {
    border-collapse: collapse;
    border: 2px solid black;
    width: 700px;
    height: 300px;
    background: #ffff;
    margin-left: auto;
    margin-right: auto;
  }
  td {
    border: 1px solid black;
  }
  textarea {
    width: 680px;
    height: 276px;
    margin: 0px;
    font: caption;
    border: none;
  }
  input {
    width: 95%;
    border: none;
    height: 95%;
  }
`;

const WriteReqeust = ({ visible, goBack, goWriteSubmit }) => {
  WriteReqeust.propTypes = {
    visible: PropTypes.bool,
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <ModalOverlay visible={visible}>
      <ModalInner tabIndex="-1" visible={visible}>
        <StyledWriteRequest>
          <div style={{ fontWeight: "bold" }}>사내요청 입력</div>
          <table>
            <tr>
              <td width="20%">요청자</td>
              <td width="30%">김선희</td>
              <td width="20%">요청일</td>
              <td width="30%">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </td>
            </tr>
            <tr>
              <td>요청구분</td>
              <td>
                <input type="text" />
              </td>
              <td>처리요청</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>요청분류</td>
              <td>
                <input type="text" />
              </td>
              <td>기타</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td colSpan="4" height="60%">
                <textarea placeholder="요청내용을 입력하세요." />
              </td>
            </tr>
          </table>
          <Button
            onClick={goWriteSubmit}
            smallWidth
            style={{ marginTop: "10px" }}
          >
            전송
          </Button>
          <Button
            onClick={goBack}
            smallWidth
            style={{ marginTop: "15px", marginLeft: "30px" }}
          >
            취소
          </Button>
        </StyledWriteRequest>
      </ModalInner>
    </ModalOverlay>
  );
};

export default WriteReqeust;
