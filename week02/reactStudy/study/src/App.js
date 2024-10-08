/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [a, b] = useState('이제 활용해보자');
  let [ramen, ramenChange] = useState('맛있는 라면 추천');
  let [chicken, chickenChange] = useState('맛있는 치킨 추천');
  let [title, titleChange] = useState(['라면집', '치킨집', '중국집']);
  let [logo, setLogo] = useState('ReactBlog');
  let [modal, setModal] = useState(true);
  let [likes, likesChange] = useState(0);
  let [titleIdx] = useState(1);

  function likesFunction() {
    likesChange(likes + 1);
  }
  function titleFunction() {
    //..은 독립적으로 Title을 저장하는 함수이다.
    let copy = [...title];
    copy[0] = '일본 라멘집 추천';
    titleChange(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h3> {logo} </h3>
      </div>

      <div className="list">
        <h4>
          {title[0]} <span onClick={likesFunction}>👍</span> {likes}
          <span onClick={titleFunction}>📘 </span>
        </h4>
        <p>10월 7일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]}
          <span onClick={likesFunction}>👍</span> {likes}
        </h4>
        <p>10월 7일 발행</p>
      </div>
      <div className="list">
        <h4>
          {ramen}
          <span onClick={likesFunction}>👍</span> {likes}
        </h4>
        <p>10월 7일 발행</p>
      </div>
      <div className="list">
        <h4>
          {chicken} <span onClick={likesFunction}>👍</span> {likes}
        </h4>
        <p>10월 7일 발행</p>
      </div>
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        {' '}
        모달창 닫기
      </button>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        {' '}
        모달창 열기
      </button>

      {modal == true ? (
        <Modal
          //app 부모의 state 변경함수 올 수 있다.
          gettitleChange={titleChange}
          color="skyblue"
          titleChild={title}
          titleIdxChild={titleIdx}
        />
      ) : null}

      <Intro></Intro>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4> {props.titleChild[props.titleIdxChild]}</h4>

      <button
        onClick={() => {
          props.gettitleChange('라면집');
        }}
      >
        {' '}
        제목 바꾸기
      </button>
      <p>상세내용</p>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h3> 원빈이가 만드는 귀여운 리액트 블로그</h3>
      <p> 요로시쿠.</p>
    </div>
  );
}

export default App;
