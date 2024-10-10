/*eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  const [title, titleChange] = useState([
    '리액트의 특징',
    '리액트의 장점',
    '리액트와 자바스크립트의 차이점',
  ]);
  //1. 빈 문자열을 하나 둬서 문자열을 받자.
  //title 배열의 값을 임의적으로 추가하고싶을땐  1. title 상태 변경 함수를 활용
  const [inputTitle, inputTitleChange] = useState('');

  function addTitle() {
    if (newTitle.trim() !== ' ') {
      let copy = [...title];
      titleChange(copy, newTitle);
      newTitleChange(' ');
    }
  }

  //배열의 값을 바꾸고 다시 원본 배열의 값을 참조해야할 상황이 될 경우 이미 바뀐 배열로는
  //재참조가 불가능함.
  //따라서 재참조를 위해 originalTitles이라는 녀석이 필요함
  const originalTitles = [
    '리액트의 특징',
    '리액트의 장점',
    '리액트와 자바스크립트의 차이점',
  ];
  const [likes, likesChange] = useState([0, 0, 0]);
  //제목을 바꾸기 위한 토글 상태 객체
  const [isToggled, setisToggled] = useState(false);
  //모달창을 띄울지 말지를 고민할 boolean type 상태 객체
  const [isModalToggled, setisModalToggled] = useState(false);
  //본 제목을 누르면 모달창의 제목이 바뀌는 것을 위한
  const [titleIdx, titleIdxChange] = useState(0);

  function changeLikes(idx) {
    //배열의 내용을 바꿀떄는 무조건 copy + 원본 배열을 만들어야한다.
    let copyLikes = [...likes];
    copyLikes[idx] += 1;
    likesChange(copyLikes);
  }
  function changeTitle(i) {
    let copytitle = [...title];

    if (!isToggled) {
      copytitle[i] = 'changed';
    } else {
      //여기서 무조건 title 배열로 하면 안되는 이유?
      copytitle[i] = originalTitles[i];
    }
    titleChange(copytitle);
    //누르면 바꾸는거니까.
    setisToggled(!isToggled);
  }
  function sortTitle() {
    let copytitle = [...title];
    copytitle = copytitle.sort();
    titleChange(copytitle);
  }
  function changeModal() {
    setisModalToggled(!isModalToggled);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h3>원빈이의 첫 리액트 블로그 </h3>
      </div>
      <div>
        <button onClick={sortTitle}>가나다순 정렬하기</button>
      </div>
      {/* 글 제목마다 작성했던 Html 중복 사항을 map함수 활용 */}
      {title.map(function (arr, i) {
        return (
          <div className="list">
            <h4>
              {' '}
              <span
                onClick={() => {
                  titleIdxChange(i);
                }}
              >
                {' '}
                {arr}
              </span>
              <span onClick={() => changeLikes(i)}> 👍</span> {likes[i]}
              <br></br>
              <button onClick={() => changeTitle(i)}>누르면 제목바뀜</button>
              <span
                style={{ marginLeft: 500 }}
                onClick={() => {
                  //arr를 변경 일단 let copying
                  //원하는 항목 삭제할때는 splice(0,1)
                  let copy = [...title];
                  copy.splice(i, 1);
                  titleChange(copy);
                }}
              >
                ❌{' '}
              </span>
            </h4>
            <div> 10월 9일 발행</div>
          </div>
        );
      })}
      <button onClick={changeModal}>모달창 버튼</button>
      {isModalToggled == true ? (
        <Modal
          isToggledChild={isToggled}
          setisToggledChild={setisToggled}
          sendColor={'red'}
          titleChild={title}
          titleChangeChild={titleChange}
          originalTitlesChild={originalTitles}
          titleIdxChild={titleIdx}
        ></Modal>
      ) : null}

      <div className="inputBox">
        <input
          placeholder="제목을 입력"
          onChange={(event) => {
            inputTitleChange(event.target.value);
          }}
        />

        <button
          // 그러나 이 방식은 휘발성임 . 할거면 서버에 연결해야함
          onClick={() => {
            let copy = [...title];
            //copy 라는 배열에다가 껴주는거
            copy.push(inputTitle);
            titleChange(copy);
          }}
        >
          글 발행
        </button>
      </div>
    </div>
  );

  //컴포넌트 문법 활용
  //Props 활용법
  //<자식 컴포넌트 작명 ={사용할 state} 보통 사용할 state와 똑같이 함? 왜요??
  //props 파라미터를 박고
  function Modal(props) {
    return (
      <div className="modal">
        <h2 style={{ backgroundColor: props.sendColor }}>
          위의 function APP()의 state를 빌려써본다
        </h2>
        <h3>
          1. 모달 컴포넌트를 쓰는 태그를 찾아가서 원하는 state에 작명을하고 그
          state를 바인딩
        </h3>
        <h3>2. function Modal에 매개변수를 박고 props.작명의 형태로 쓴다</h3>
        <h3> {props.titleChild[props.titleIdxChild]}</h3>
        <p>날짜</p>
        <IntroModal></IntroModal>
        <button
          onClick={() => {
            let copy = [...props.titleChild];
            if (!props.isToggledChild) {
              copy[0] = 'change';
            } else {
              copy[0] = props.originalTitlesChild[0];
            }
            props.titleChangeChild(copy);
            props.setisToggledChild(!props.isToggledChild);
          }}
        >
          제목 수정
        </button>
      </div>
    );
  }
  function IntroModal() {
    return <div className="intro">카우 손석구 ㅋㅋ</div>;
  }
}
export default App;
