## assets_management

<br/>

> 개인이 보유한 가상자산 관리 툴

<br/>

## 팀원
<br/>
- Front-end = 김영서, 성봉준, 김슬기
<br/>
- Back-end = 이의택
<br/>

## DB diagram
[DB diagram](https://dbdiagram.io/d/627da1997f945876b60cf57f)

## API 기능
<br/>
1. 유저
<br/>
    -로그인
<br/>
    -로그인 유저 이메일 정보
<br/>
<br/>
2. 자산
<br/>
    -보유 자산 리스트
<br/>
    -코인 지갑 주소
<br/>
<br/>
3. 출금
<br/>
    -출금 신청
<br/>
<br/>
4. 입출금
<br/>
    -입출금 내역
<br/>
<br/>
5. 미들웨어
<br/>
    -유저 토근 인증
<br/>
<br/>
6. 배치
<br/>
    -자동 출금
<br/>
    -자동 출금 정지

## 사용 예제
    
로그인 : [POST] http://localhost:8000/users/login
<br/>
로그인 유저 이메일 정보 : [GET] http://localhost:8000/users/info
<br/>
보유 자산 리스트 : [GET] http://localhost:8000/assets
<br/>
코인 지갑 주소 : [POST] [POST] http://localhost:8000/assets/address
<br/>
출금 신청 : [POST] http://localhost:8000/withdrawals
<br/>
입출금 내역 : [GET] http://localhost:8000/details?coinId=&blockchainTypeId=&pageCount=&startDate=&endDate=&detailType=&status=&search=
<br/>
자동 출금 : [GET] http://localhost:8000/batchs/withdrawal
<br/>
자동 출금 정지 : [GET] http://localhost:8000/batchs/stop-withdrawal
<br/>

## API 가이드
[API 가이드](https://glib-layer-248.notion.site/API-Guide-3973d5c1c5384ec68fc19bbc271244f7)
<br/>

## notion
[notion](https://glib-layer-248.notion.site/assets_management-3da7065e690c438da88c424850890182)