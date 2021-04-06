import styled from "styled-components";

export default styled.div`
   width: 90%;
   span {
      display: block;
      text-align: center;
   }
   .pickaxe {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      min-width: 100px;
      color: white;
      font-size: 18px;
      font-weight: bold;
      img {
         margin-right: 10px;
         width: 20px;
         height: 22px;
      }
   }
   .text {
      color: white;
      font-size: 14px;
      strong {
         color: #fedb41;
      }
      &.desc {
         margin-top: 20px;
         padding-left: 10%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         text-align: left;
         font-size: 12px;
         img {
            margin: 0 5px;
            width: 10px;
            height: 12px;
         }
      }
   }
   .number_area {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      span {
         display: inline-flex;
         justify-content: center;
         align-items: center;
         margin: 0 20px;
         padding-top: 3px;
         width: 50px;
         height: 50px;
         color: #fedb41;
         font-size: 25px;
      }
   }
   button {
      margin: 20px auto 0;
      padding-top: 2px;
      display: block;
      width: 30%;
      height: 40px;
      color: #333;
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 2.5px;
      background: #fedb41;
      transition: background 0.1s ease-in-out;
      &:hover {
         background: #edca30;
      }
      &:active {
         background: #dcb91f;
      }
   }
   .isSuccess {
      margin: 30px 0 20px;
      color: white;
      font-weight: bold;
   }
   .table {
      margin-bottom: 30px;
      max-height: 200px;
      overflow: auto;
      table {
         margin: 0 auto;
         table-layout: fixed;
         width: 80%;
         color: white;
         font-size: 14px;
         border-spacing: 0;
         border-collapse: collapse;
         td,
         th {
            padding: 7px;
            text-align: center;
            border-bottom: 1px solid #777;
         }
      }
   }
   .total_area {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 10%;
      color: #ffffff;
      font-size: 20px;
      img {
         margin-right: 10px;
         width: 30px;
         height: 30px;
      }
      .banycoin {
         margin-right: 10px;
         color: #fedb41;
      }
   }
`;
