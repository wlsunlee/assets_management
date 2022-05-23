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

[DB diagram](https://dbdiagram.io/d/627da1997f945876b60cf57f)

## API 기능
1. 유저
    로그인
    로그인 유저 이메일 정보
2. 자산
    보유 자산 리스트
    코인 지갑 주소
3. 출금
    출금 신청
4. 입출금
    입출금 내역
5. 미들웨어
    유저 토근 인증
6. 배치
    자동 출금
    자동 출금 정지

## 사용 예제
    
로그인 : [POST] http://localhost:8000/users/login
로그인 유저 이메일 정보 : [GET] http://localhost:8000/users/info
보유 자산 리스트 : [GET] http://localhost:8000/assets
코인 지갑 주소 : [POST] [POST] http://localhost:8000/assets/address
출금 신청 : [POST] http://localhost:8000/withdrawals
입출금 내역 : [GET] http://localhost:8000/details?coinId=&blockchainTypeId=&pageCount=&startDate=&endDate=&detailType=&status=&search=
자동 출금 : [GET] http://localhost:8000/batchs/withdrawal
자동 출금 정지 : [GET] http://localhost:8000/batchs/stop-withdrawal
