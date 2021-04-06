import styled from "styled-components";

export default styled.div`
   width: 90%;
   height: 80%;
   .word_area {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90%;
      background: #222;
      overflow: hidden;
      ul {
         position: absolute;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         align-items: center;
         width: 60%;
         color: white;
         li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 40px;
         }
      }
   }
   .input_area {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 3%;
      height: 10%;
      background: white;
      span {
         display: flex;
         align-items: center;
         min-width: 100px;
         font-size: 18px;
         font-weight: bold;
         img {
            margin-right: 10px;
            width: 20px;
            height: 22px;
         }
      }
      input {
         padding-left: 10px;
         width: 80%;
         height: 40px;
         border: 2px solid #333;
         border-radius: 5px;
         &:focus {
            border-color: #ff0606;
         }
      }
   }
`;
