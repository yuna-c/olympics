# 주제

2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 Olympic Medal Tracker 만들기

# 주소

[Olympic Medal Tracker](https://react-sigma-beryl.vercel.app//)

# 개발 기간

2024.08.10~ 2024.08.14

# 기술 스택

<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<br>

# 컴포넌트 구조

![11111](https://github.com/user-attachments/assets/50618995-f551-4c93-924d-b9836b950aef)

# 폴더 구조

```

@ Olypics
├─ public
│  └─ olympics.png
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ header
│  │  │  ├─ Header.jsx
│  │  │  └─ Header.scss
│  │  └─ main
│  │     ├─ Main.jsx
│  │     ├─ Main.scss
│  │     ├─ form
│  │     │  ├─ Form.jsx
│  │     │  ├─ Form.scss
│  │     │  ├─ button
│  │     │  │  ├─ Button.jsx
│  │     │  │  └─ Button.scss
│  │     │  └─ input
│  │     │     ├─ Input.jsx
│  │     │     └─ Input.scss
│  │     ├─ nodata
│  │     │  ├─ Nodata.jsx
│  │     │  └─ Nodata.scss
│  │     ├─ sort
│  │     │  ├─ Sort.jsx
│  │     │  └─ Sort.scss
│  │     └─ table
│  │        ├─ Table.jsx
│  │        └─ Table.scss
│  ├─ styles
│  │  ├─ App.scss
│  │  ├─ _reset.scss
│  │  └─ _variables.scss
│  └─ index.jsx
├─ eslint.config.js
├─ vite.config.js
├─ yarn.lock
├─ .gitignore
├─ .prettierrc
├─ index.html
└─ README.md

```

# 필수 기능

- [x] 시맨틱 태그 활용
- [x] 레이아웃 최대 넓이는 1200px, 최소 넓이는 800px 로 제한, 가운데 정렬
- [x] 나라 이름, 금은동 메달 수를 입력할 수 있는 제출 폼 구현
- [x] 폼 제출 후 input 필드는 다시 빈 값으로 바뀌도록 구성
- [x] 분리 : 컴포넌트 분리
- [x] 등록 : 새로운 나라와 그 나라가 획득한 메달 수를 추가
- [x] 조회 : 나라별 메달 집계 리스트 보여주기
- [x] 수정 : 기존에 추가된 나라의 메달 수를 수정
- [x] 삭제 : 나라 정보 삭제
- [x] 정렬 : 메달 집계는 금메달 수를 기준으로 내림차순 정렬

# 도전 기능

- [x] 나라 이름 입력했을 때, 이미 등록된 국가라면 alert 메시지 띄우기
- [x] 업데이트하는 국가가 등록되지 않은 경우 alert 메시지
- [x] 메달 총 개수 보여주고, 메달 총 개수대로 정렬
- [x] 메달 정보 로컬스토리지에 저장

# 질문/답변

1. **JSX(Javascript Syntax eXtension) 문법**이란 무엇일까요?

   - 자바스크립트의 확장 문법, React에서 UI를 표현하기 위해 사용

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 메달 정보와 같은 **애플리케이션의 상태를 관리하기(추가, 변경, 삭제) 위해 리액트의 어떤 기능을 사용하셨나요**?

   - useState 함수를 사용하여 상태를 관리
   - 추가 : onHandleSubmit에 countryState를 의존성 배열로 담아 newCountryState로 새로운 값만 받아서 setCountryState의 값을 바꿈
   - 변경 : onHandleUpdate에 updateCounrtyState 변수를 선언하고 countryState를 맵으로 돌려 타겟 country와 country가 같을 때는 setCountryState에 새로 추가된 값들을 추가하고 아닐 시에는 그냥 값을 내보냄
   - 삭제 : onHandleDelete에 filter기능을 걸어 새로운 setCountryState안에 deletedCounrty를 설정

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

   - props로 컴포넌트 간에 상태 값들을 공유하였는데, {}를 통해서 컴포넌트 내에 객체의 키값을 통해 value 보내는게 더 간편해서 이렇게 사용

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

   - onHandleSubmit(추가 부분)에 sort에 담기전 인풋값을 업데이트 하는 과정에서 불변성 유지를 위해 ...countryState와 새로운 newCountryState를 통해 배열을 다시 만듬

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

   - 보기에 편하고 컴포넌트 내에서 수정을 하면 코드도 훨씬 짧기 때문에 좋음
