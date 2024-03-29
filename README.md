﻿# lostarkani
# lostark_ani
# 아니이걸 길드 Discord bot (AKA.Ani-bot)
내용 : 디스코드 채팅방에서 '%'로 시작하는 명령어를 읽고 구현 된 기능들을 사용

# 주요 기능 소개
기능 1) 사다리 (미스틱레이드 보상 랜덤 수령)
참여자 수채,찌크릿가든,류퐁퐁,오늘은인파 "%사다리 수찌류오" 입력 시 보상을 수령할 캐릭을 랜덤하게 정함

기능 2) 랜덤 주사위
"%주사위 {숫자}" 입력한 사람에게 랜덤한 숫자를 리턴

기능 3) 마리상점
"%마리 {크리스탈 가격}" 입력시 로스트아크 공식홈페이지 마리상점의 데이터를 크롤링하여 매물의 현재시세와 게임사에서 제공하는 시세를 비교

기능 4) 캐릭터 스펙을 구글 스프레드시트에 동기화
1. %등록 {캐릭터명} : 캐릭터 아이템레벨을 데이터베이스에 저장(이미 저장되어있다면 update, 저장되어있지않다면 insert)
2. %시트조회 : 전체 길드원 캐릭터 스펙 동기화 (구현예정 : 구글스프레드시트에 아이템레벨 전체 동기화)
3. %삭제 {캐릭터명} : 탈퇴한 길드원 데이터 삭제

기능 5) 단순 텍스트
"%카톡링크" : 오픈톡방 링크 주소 제공
"%검색 {캐릭터명}" : 캐릭터명의 스펙 검색 할 수 있는 사이트 링크 제공
"%뉴비" : 신규유저에게 성장가이드 사이트 링크 제공
"%신호탄" : 레이드시 한명은 반드시 사용해야하는 신호탄을 누가 사용할지 랜덤하게 정함

### 프로젝트 구조
    .
    ├── ani_bot                 # Discord bot
        ├─ api              
            ├─ Auth.js          (GoogleAPI Auth인증)
            └─ SimSim.js        (SimSimAPI 연동)
        ├─ ctrl                 # 
            ├─ commands.js      (FCM send spec맞추기)
            ├─ dataCrawler.js   (Lostark 공식 홈페이지 크롤링)
            ├─ postgresql.js    (길드원 스펙정보 DB저장)
            └─ util.js          (중복 함수)
        ├─ functions            # 
            ├─ googleSheet.js   (FCM send spec맞추기)
            └─ SimSim.js        (전송한 Push메세지 DB에 저장)
        └─ index.js             (전송한 Push메세지 DB에 저장)
    ├── ani_web
        ├─ ctrl                 (FCM send spec맞추기)
            ├─ ctrl.js          (FCM send spec맞추기)
            └─ postgresql.js
        ├─ public               (FCM send spec맞추기)
        ├─ view                 (FCM send spec맞추기)
        └─ index.js             (전송한 Push메세지 DB에 저장)
    ├── functions          
    ├── node_modules            # SQL
    ├── routes                  # Router
        └─ fcm.js               (End-point)
    ├── app.js                  # RestAPI Server config
    ├── config.js               # RestAPI Server config
    ├── credentials.json        # RestAPI Server config
    ├── index.js                # RestAPI Server config
    ├── package.json            # RestAPI Server config
    └── clientid.json
