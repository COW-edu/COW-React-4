# Week-07 과제

# 1) 구현 과제 안내

- [ok] todo 목록을 볼 수 있습니다.
- [ok] todo 추가 버튼을 클릭하면 할 일이 추가됩니다.
- [ok] todo 완료 버튼을 누르면 완료 되었다는 표시가 됩니다.
- [ok] todo 수정 버튼을 누르면 수정 모드로 들어가고, 수정 내용을 제출하거나 수정 모드를 취소할 수 있습니다.
- [ok] todo 삭제 버튼을 누르면 해당 할 일이 삭제됩니다.
- [ok] 수정되는 Todo 내용이 실시간으로 반영됩니다.

# 2) API 실행 방법

```bash
# week 07 / api 으로 이동
cd week07/api

# 의존성 설치
npm i

# 서버 실행
npm run dev # http://localhost:8080
```

# 3) API 스펙

## getTodos

- GET `http://localhost:8080/todos`
- 응답예시
  ```bash
  [
      {
          "id": 1,
          "content": "내용1",
          "isComplete": false
      },
      {
          "id": 2,
          "content": "내용2",
          "isComplete": false
      }
  ]
  ```

## postTodos

- POST `http://localhost:8080/todos`
- 응답예시
  ```bash
  {"id": 1, "content": "내용1", "isComplete": false},

  ```

## completeTodos

- PUT `http://localhost:8080/todos/:id`
- 응답예시
  ```bash
  {"id":1,"content":"내용1","isComplete":true}
  ```

## contentUpdateTodos

- PUT `http://localhost:8080/todos/contents/:id`
- 응답예시
  ```bash
  {"id":1,"content":"내용1","isComplete":false}
  ```

## deleteTodos

- DELETE `http://localhost:8080/todos/:id`
- 응답예시
  ```bash
  {"id":1,"content":"내용1","isComplete":false}
  ```

---

## 참고사항

- api 폴더 내부에 db/db.json이 DB역할을 합니다. DB내용 초기화하고 싶으면 db.json 배열 안 생성된 객체를 삭제하시면 됩니다.
- 생성한 todo폴더 안에 마크다운 파일을 하나 추가해 `1)구현과제 안내` 아래의 체크박스를 입력하고 과제에서 구현한 부분을 체크해주시면됩니다.
- 과제 진행 간 어려운 부분 있으면 편하게 단톡방에 질문해주시면 됩니다! 화이팅입니다!
