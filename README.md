# 리액트 심화주차 개인과제 - MBTI 검사 사이트

<br/>

## 🔥배포 링크

[MBTI검사 사이트 - 4조 전상국](https://react-deepening-task.vercel.app/)

<br/>

## 📦폴더 구조

<details>
<summary>폴더구조</summary>
📦react-deepening-task<br/>
 ┣ 📂public<br/>
 ┃ ┗ 📜favicon.png<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂apis<br/>
 ┃ ┃ ┣ 📜authApi.js<br/>
 ┃ ┃ ┗ 📜testApi.js<br/>
 ┃ ┣ 📂asset<br/>
 ┃ ┃ ┗ 📜defaultProfile.png<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┃ ┣ 📂home<br/>
 ┃ ┃ ┃ ┗ 📜TestIcon.jsx<br/>
 ┃ ┃ ┣ 📂testpage<br/>
 ┃ ┃ ┃ ┣ 📜TestItem.jsx<br/>
 ┃ ┃ ┃ ┗ 📜TestItemRadio.jsx<br/>
 ┃ ┃ ┣ 📂testresultpage<br/>
 ┃ ┃ ┃ ┗ 📜TestResultItem.jsx<br/>
 ┃ ┃ ┗ 📜Layout.jsx<br/>
 ┃ ┣ 📂data<br/>
 ┃ ┃ ┗ 📜questions.js<br/>
 ┃ ┣ 📂hooks<br/>
 ┃ ┃ ┣ 📜useInput.js<br/>
 ┃ ┃ ┣ 📜useLoginPage.jsx<br/>
 ┃ ┃ ┣ 📜useProfilePage.jsx<br/>
 ┃ ┃ ┣ 📜useSignupPage.jsx<br/>
 ┃ ┃ ┣ 📜useTestPage.jsx<br/>
 ┃ ┃ ┗ 📜useTestResultPage.jsx<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┃ ┣ 📜Home.jsx<br/>
 ┃ ┃ ┣ 📜Login.jsx<br/>
 ┃ ┃ ┣ 📜Profile.jsx<br/>
 ┃ ┃ ┣ 📜Signup.jsx<br/>
 ┃ ┃ ┣ 📜Test.jsx<br/>
 ┃ ┃ ┗ 📜TestResult.jsx<br/>
 ┃ ┣ 📂queries<br/>
 ┃ ┃ ┣ 📜querykeys.js<br/>
 ┃ ┃ ┗ 📜useCustomQuery.jsx<br/>
 ┃ ┣ 📂shared<br/>
 ┃ ┃ ┣ 📜AuthRoute.jsx<br/>
 ┃ ┃ ┣ 📜PrivateRoute.jsx<br/>
 ┃ ┃ ┗ 📜Router.jsx<br/>
 ┃ ┣ 📂utils<br/>
 ┃ ┃ ┗ 📜mbtiCalculator.jsx<br/>
 ┃ ┣ 📂zustand<br/>
 ┃ ┃ ┗ 📜useAuthStore.js<br/>
 ┃ ┣ 📜App.jsx<br/>
 ┃ ┣ 📜constants.js<br/>
 ┃ ┣ 📜index.css<br/>
 ┃ ┗ 📜main.jsx<br/>
 ┣ 📜.env<br/>
 ┣ 📜.gitignore<br/>
 ┣ 📜db.json<br/>
 ┣ 📜eslint.config.js<br/>
 ┣ 📜index.html<br/>
 ┣ 📜package.json<br/>
 ┣ 📜postcss.config.js<br/>
 ┣ 📜README.md<br/>
 ┣ 📜tailwind.config.js<br/>
 ┣ 📜vercel.json<br/>
 ┣ 📜vite.config.js<br/>
 ┗ 📜yarn.lock<br/>
 </details>

<br/>

## 💻 개발 환경

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/ReactRouterDom-20232A?style=for-the-badge&logo=reactrouter&logoColor=61DAFB)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![](https://img.shields.io/badge/TanstackQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![](https://img.shields.io/badge/Zustand-181818?style=for-the-badge)
![](https://img.shields.io/badge/JsonServer-181818?style=for-the-badge)

<br/>

## 🔧 주요기능

### 회원가입 페이지 / 로그인 페이지

![회원가입](https://github.com/user-attachments/assets/3c107ec2-0795-4320-9aaf-ca047e53da3c)

-   회원가입 페이지에서 아이디, 비밀번호, 비밀번호 확인, 닉네임 입력을 한 후 회원가입을 진행할 수 있습니다.
-   입력하지 않았거나, 아이디/비밀번호가 4글자 이상이 아니면 버튼이 disabled되어 회원가입 시도가 불가합니다.
-   아이디가 이미 서버에 존재할 시 서버에서 보내준 관련 에러 메시지를 alert합니다.

![로그인](https://github.com/user-attachments/assets/f80bf21f-6e40-4788-bd05-989441e2896a)

-   가입한 아이디와 비밀번호를 입력하여 로그인 할 수 있습니다.
-   아이디나 비밀번호가 일치하지 않을 시 관련 메시지를 alert해줍니다.
    <br/>

### 메인 페이지

![메인페이지](https://github.com/user-attachments/assets/9aacab2a-50b7-47a2-8433-88f2edd9d2c8)

-   메인페이지에선 테스트목록을 적절하게 화면에 보여주고, 클릭 시 해당 테스트 페이지로 이동합니다.

    <br/>

### 테스트 페이지

![테스트](https://github.com/user-attachments/assets/ed2dbc02-96d7-4988-a8ee-453df47baf50)

-   준비된 테스트 목록에 대해 모두 답을 하면 제출할 수 있으며, 제출 시 결과 확인 페이지로 이동되고, 공개된 모든 테스트결과 목록과 내 테스트결과 목록을 확인할 수 있습니다.

    <br/>

### 테스트 결과 페이지

![테스트결과](https://github.com/user-attachments/assets/b3b8c023-f37e-4cb9-aca9-e7bcc946dd42)

-   내가 실시한 테스트 결과 목록과 타인이 공개설정해둔 테스트 결과 목록을 확인할 수 있습니다.
-   내 테스트 결과 중 원하는 결과를 공개/비공개 처리 할 수 있으며, 삭제도 할 수 있습니다.
    <br/>

### 프로필 페이지

![프로필](https://github.com/user-attachments/assets/b457affa-6f54-4d01-b0fb-fcd33c444d02)

-   설정되어있는 내 프로필 데이터를 확인 가능하며, 수정기능으로 프로필이미지나 닉네임을 수정할 수 있습니다.

    <br/>

## 🏹 트러블 슈팅

### 1. 초기값이 null, undefined인 state를 input의 value로 설정하여 생긴 오류

```
초기값이 비어있어야 하는 type=file input은 value를 지정하지 않고, onChange로만 state변경을 함
input State들을 관리하는 useInput 커스텀 훅에서 initialValue가 들어오지 않을 때 기본값을 빈 문자열로 설정함
```

![image](https://github.com/user-attachments/assets/cf8b3300-c900-4330-9c8a-03fe148a93d5)
![image](https://github.com/user-attachments/assets/ce593ea9-52b8-4f7b-89f7-fe8b50bf4ab5)
<br />

### 2. axios instance에 동적으로 accessToken을 추가하였을 때 올바르지 않은 값(null, undefined)가 들어가는 문제

```
axios instance에 동적으로 토큰을 추가할 시 클라이언트의 네트워크 환경, 접속상태에 따라 불안정하게 됐다 안됐다 하는 문제가 있어 interceptor을 사용하여 헤더에 토큰을 추가하는 방식으로 변경함
```

![image](https://github.com/user-attachments/assets/2692db3b-20a9-4481-8421-965d9688cb11)

## 🗣️ 프로젝트 소감

```
 처음에 강의를 듣고 zustand와 tanstack query의 사용법에도 익숙하지 않았고, tanstack query는 특히 사용이유를 이해하지 못했습니다. 직접 state로 관리하고 HTTP요청을하고 setState를 해주는 과정을 거친 뒤 tanstack query로 리팩토링 하였는데, 이 과정을 겪으며 편리함이 매우 높아졌음을 느낄 수 있었습니다. 또한 stale상태에 따른 invalidateQueries를 사용하며 서버데이터와 동기화되는 과정이 사용자에게도 개발자에게도 도움이 된다는 것을 느꼈습니다.
```

<br/>

## 📗 프로젝트 피드백

-   \_
