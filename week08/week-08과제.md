# Week-08 과제

## 과제1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다.
  - [ ] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성합니다.
- 이메일과 비밀번호의 유효성을 확인합니다.
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함을 확인합니다.
  - [ ] 비밀번호 조건 : 8자 이상 입력을 확인합니다.
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 합니다.
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장합니다.
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 됩니다.

## 과제2 - Todo List

- [ ] todo 목록을 볼 수 있습니다.
- [ ] todo 추가 버튼을 클릭하면 할 일이 추가됩니다.
- [ ] todo 완료 버튼을 누르면 완료 되었다는 표시가 됩니다.
- [ ] todo 수정 버튼을 누르면 수정 모드로 들어가고, 수정 내용을 제출하거나 수정 모드를 취소할 수 있습니다.
- [ ] todo 삭제 버튼을 누르면 해당 할 일이 삭제됩니다.
- [ ] 수정되는 Todo 내용이 실시간으로 반영됩니다.

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

# 2-1) API 실행

```bash
> npm i

> npm run start # http://localhost:8080
```

# 2-2) API 스펙

## [Todos](#todos)

- [getTodos](#getTodos)
- [getTodoById](#getTodoById)
- [createTodo](#createTodo)
- [updateTodo](#updateTodo)
- [deleteTodo](#deleteTodo)

## [Auth](#auth)

- [login](#login)
- [signUp](#signUp)

# <span id="todos">1-3) Todos</span>

## getTodos

### URL

- GET `/todos`
- Headers
  - Authorization: login token

### 응답 예시

```json
{
  "data": [
    {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    },
    {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    }
  ]
}
```

## getTodoById

### URL

- GET `/todos/:id`
- Headers
  - Authorization: login token

### 응답 예시

```json
{
  "data": {
    "title": "hi",
    "content": "hello",
    "id": "z3FGrcRL55qDCFnP4KRtn",
    "createdAt": "2022-07-24T14:15:55.537Z",
    "updatedAt": "2022-07-24T14:15:55.537Z"
  }
}
```

## createTodo

### URL

- POST `/todos`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

### 응답 예시

```json
{
  "data": {
    "title": "hi",
    "content": "hello",
    "id": "z3FGrcRL55qDCFnP4KRtn",
    "createdAt": "2022-07-24T14:15:55.537Z",
    "updatedAt": "2022-07-24T14:15:55.537Z"
  }
}
```

## updateTodo

### URL

- PUT `/todos/:id`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

### 응답 예시

```json
{
  "data": {
    "title": "제목 변경",
    "content": "내용 변경",
    "id": "RMfi3XyOKoI5zd0A_bsPL",
    "createdAt": "2022-07-24T14:25:48.627Z",
    "updatedAt": "2022-07-24T14:25:48.627Z"
  }
}
```

## deleteTodo

### URL

- DELETE `/todos/:id`
- Headers
  - Authorization: login token

### 응답 예시

```json
{
  "data": null
}
```

# <span id="auth">1-4) Auth</span>

## login

### URL

- POST `/users/login`
- Parameter
  - email: string
  - password: string

### 응답 예시

```json
{
  "message": "성공적으로 로그인 했습니다",
  "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
}
```

## signUp

### URL

- POST `/users/create`
- Parameter
  - email: string
  - password: string

### 응답 예시

```json
{
  "message": "계정이 성공적으로 생성되었습니다",
  "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
}
```
