<br/>
<img src="https://cdn.discordapp.com/attachments/1144140016281473055/1146001477249269851/2023-08-29_5.27.59.png">

# StockHolm
> 주식 입문자를 위한 차트 기반의 모의 주식투자 사이트 입니다.<br/>
한국투자증권 오픈 API를 활용하여 실제 주식시장의 주가/거래량 데이터를 제공합니다. <br/>
주식 차트 조회 및 차트 줌 인/아웃, 종목간 차트 비교 등의 유저 인터페이스 활용이 가능합니다. <br/>
회원가입 후 가상현금 충전을 통하여 모의 주식투자 체험이 가능합니다. 
<br/>

## 🏃‍♂️ 배포 링크
http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/
<br/>

<br/>

## 📌 개요
- 제작 기간 : 약 4주 (2023.08 ~ 09)
- 참여 인원 : 총 7명 (BE 4명, FE 3명)
- 원본 레포 : https://github.com/codestates-seb/seb45_main_008
- 관련 회고 : https://velog.io/@novice93/팀-프로젝트-모의-주식투자-사이트-StockHolm
<br/>

## ⚒ 기술 스택 (FE)
<div>
<img src ="https://img.shields.io/badge/TypeScript-yellow.svg?&style=for-the-badge&logo=typescript&logoColor=#3178C6"/>
<img src ="https://img.shields.io/badge/React-darkgreen.svg?&style=for-the-badge&logo=react&logoColor=#61DAFB"/>
<img src ="https://img.shields.io/badge/Redux-purple.svg?&style=for-the-badge&logo=redux&logoColor=#764ABC"/>
<img src ="https://img.shields.io/badge/React Query-orange.svg?&style=for-the-badge&logo=reactQuery&logoColor=#FF4154"/>
</div>
<div>
<img src ="https://img.shields.io/badge/styled components-pink.svg?&style=for-the-badge&logo=styledcomponents&logoColor=#DB7093"/>
<img src ="https://img.shields.io/badge/Apache Echarts-skyblue.svg?&style=for-the-badge&logo=apacheecharts&logoColor=#AA344D"/>
</div>
<br/>

## 🧑🏻‍💻 담당한 역할

### 1. 주식 데이터 자동 갱신 로직 구현
- setTimeout과 React-Query를 활용하여 통신 및 데이터 관리 로직 구현


### 2. 주가 및 거래량 차트 시각화
- Apache Echarts 라이브러리를 기반으로 차트 구현 및 추가 기능 구현 (종목 간 비교차트)

### 3. 주식 매수/매도 UI 및 기능 구현
- React-Query 라이브러리 활용하여 AJAX 효율화 <br/>
- 유저가 설정한 거래 정보 (거래가, 거래량 등) 를 컴포넌트 간에 공유하기 위해 Redux-Toolkit 활용하여 전역 상태관리 구현

### 4. 로그인 기능 관련 서포트
- 자동 로그아웃 기능 구현 (setTimeout 비동기 로직 활용)
