var util = require('./ctrl/util');
var commands = require('./ctrl/commands');
var simsim = require('./api/SimSim');
var crawler = require('./ctrl/dataCrawler');
var db = require('./ctrl/postgresql');

exports.router = async (prefix, message, voiceChannel) => {
    // 강화
    if (message.content.startsWith(`${prefix}강화`)) {
        commands.smelting(message, util.randomNum(1, 3));
    }

    // 단순문구1
    if (message.content.startsWith(`ㅈ망겜`) && message.author.username == 'D플뢰르') {
        message.channel.send(`응 갓겜~`);
    }

    // 단순문구2
    if (message.content.startsWith(`개잘못됫어`) && message.author.username == 'D플뢰르') {
        message.channel.send(`응 아니야~`);
    }

    // 단순문구3
    if (message.content.startsWith(`응 아니야`) && message.author.username == 'D플뢰르') {
        message.channel.send(`응 맞아~`);
    }

    // 단순문구3
    if (message.content.startsWith(`불ㅡ`) && message.author.username == 'D플뢰르') {
        message.channel.send(`편ㅡ안`);
    }

    // 단순문구3
    if (message.content.startsWith(`불-`) && message.author.username == 'D플뢰르') {
        message.channel.send(`편ㅡ안`);
    }

    // 단순문구3
    if (message.content.startsWith(`'ㅁ'`) && message.author.username == '폭풍룡') {
        message.channel.send(`포퐁쓰 장비강화는 하고있는거져?`);
    }

    // 단순문구3
    if (message.content.startsWith(`더러운`) && message.author.username == '폭풍룡') {
        message.channel.send(`포퐁쓰 힘내여.. 근데 장비강화는 하고있는거져?`);
    }

    // 단순문구3
    if (message.content.startsWith(`봇아`) && message.author.username == '폭풍룡') {
        message.channel.send(`넵?`);
    }

    // 단순문구3
    if ((message.content.startsWith(`멍청한`) || message.content.startsWith(`머저리`) || message.content.startsWith(`이상한`)) && message.author.username == '폭풍룡') {
        message.channel.send(`반사`);
    }


    // 단순문구3
    if (message.content.startsWith(`어디감`) && message.author.username == 'D플뢰르') {
        message.channel.send(`좀 기다려라 참을성이 없누`);
    }

    // 단순문구3
    if (message.content.startsWith(`아`) && message.author.username == 'D플뢰르') {
        message.channel.send(`아 또 왜ㅡㅡ?`);
    }

    // 단순문구3
    if (message.content.startsWith(`내방`)) {
        message.channel.send(`잊지말자 2020.01.28 엘버하스틱 내공 방출! 토벌 실패`);
    }

    // 신호탄
    if (message.content.startsWith(`${prefix}신호탄`)) {
        // if (message.author.username == 'D플뢰르') {
        //     message.channel.send('잔머리 굴리지말고 니가 던져라');
        //     return;
        // }
        message.channel.send(util.randomNum(1, 4) + '번 당첨!>_<');
    }

    // 뉴비 로드맵
    if (message.content.startsWith(`${prefix}뉴비`)) {
        message.channel.send('545-875 로드맵\nhttp://www.inven.co.kr/board/lostark/4821/60669');
    }

    // 미스틱 공략
    if (message.content.startsWith(`${prefix}미스틱`)) {
        message.channel.send('미스틱 패턴정리\nhttp://www.inven.co.kr/board/lostark/4821/62952');
    }

    // 로아해 검색
    if (message.content.startsWith(`${prefix}로아해`)) {
        var profileArray = message.content.split(' ');
        var nickName = profileArray[1];
        message.channel.send('https://loahae.com/profile/' + nickName);
    }

    // 로스트아크 공홈 검색
    if (message.content.startsWith(`${prefix}검색`)) {
        var profileArray = message.content.split(' ');
        var nickName = profileArray[1];
        message.channel.send('https://lostark.game.onstove.com/Profile/Character/' + nickName);
    }

    // 카톡 링크 안내
    if (message.content.startsWith(`${prefix}카톡링크`) && (message.author.username == '찌선생' || message.author.username == 'D플뢰르') || message.author.username == '코끼리') {
        message.channel.send(`https://open.kakao.com/o/gQ3cdGFb`);
    }

    // 메뉴판
    if (message.content.startsWith(`${prefix}help`)) {
        message.channel.send('앞에 (%)붙이세요\n- 강화 (재련테스트)\n- 뉴비 (뉴비전용지침서)\n- 미스틱 (공략)\n- 신호탄 (1~4랜덤)\n- 검색 ID(로아해전적검색)');
    }

    // 채널조인
    if (message.content.startsWith(`${prefix}join`)) {
        try {
            console.log('ㅎㅇ');
            voiceChannel.join()
                .then(connection => {
                    console.log('Connected!');
                    console.log(connection);
                    message.channel.send(err);
                })
                .catch(err => {
                    message.channel.send(err);
                });
        } catch (e) {
            message.channel.send(e);
        }
    }

    // 심심이API
    if (message.content.startsWith(`${prefix}심심`)) {
        var text = new String(message.content);
        var data = text.substr(4, text.length);
        var response = await simsim.simsimAPI(data);
        message.channel.send(response.atext);
    }

    // 시트등록
    if (message.content.startsWith(`${prefix}등록`)) {

        var profileArray = message.content.split(' ');
        var nickName = profileArray[1];

        let data = await crawler.getCharcaterData(nickName);

        if (data.nickname == undefined) {
            message.channel.send('닉네임 다시 확인하세요.');
            return;
        }

        let update = await db.updateMembersInfo(data.itemLevel, nickName, data.jobs);

        if (update != 1) {
            message.channel.send('Error : ' + nickName);
            return;
        } else {
            let members = await db.getMember(nickName);
            message.channel.send(members[0].nickname + ' / ' + members[0].itemlevel);
        }

    }

    // 시트조회
    if (message.content.startsWith(`${prefix}시트조회`)) {

        var profileArray = message.content.split(' ');
        var nickName = profileArray[1];

        let beforeMembers = await db.getAllMembers();
        let count = 0;
        for (var i in beforeMembers) {
            let refreshData = await crawler.getCharcaterData(beforeMembers[i].nickname);
            let update = await db.updateMembersInfo(refreshData.itemLevel, refreshData.nickname, refreshData.jobs);
            if (update != 1) {
                count++;
            }
        }

        if (count != 0) {
            message.channel.send('<--------- 실패 ' + count + '건 있음 --------->');
        }

        let members = await db.getAllMembers();
        let results = new String();
        for (var i in members) {
            results = results + members[i].nickname + ' / ' + members[i].itemlevel + '\n';
        }
        message.channel.send(results);

        // message.channel.send(data.nickname + ' / ' + data.itemLevel);
    }

    // 미스틱 사다리
    if (message.content.startsWith(`${prefix}사다리`)) {

        var getContent = message.content.split(' ');
        var getMsg = getContent[1];

        if (getMsg) {
            var arktruthBreathNumber = util.randomNum(1, getMsg.length);
            var abilityStoneNumber = util.randomNum(1, getMsg.length);

            while ((abilityStoneNumber == arktruthBreathNumber)) {
                arktruthBreathNumber = util.randomNum(1, getMsg.length);
                abilityStoneNumber = util.randomNum(1, getMsg.length);
            }


            console.log(arktruthBreathNumber);
            console.log(abilityStoneNumber);
            console.log('-----------');



            var res2 = '아크숨결 : ' + getMsg.charAt(arktruthBreathNumber - 1) + '\n';
            var res3 = '영원의돌 : ' + getMsg.charAt(abilityStoneNumber - 1) + '\n';

            message.channel.send(res2 + res3);

        } else {
            var arktruthBreathNumber = util.randomNum(1, 8);
            var abilityStoneNumber = util.randomNum(1, 8);

            while ((abilityStoneNumber == arktruthBreathNumber)) {
                arktruthBreathNumber = util.randomNum(1, 8);
                abilityStoneNumber = util.randomNum(1, 8);
            }

            var res2 = '아크숨결 : ' + util.mistickConverter(arktruthBreathNumber) + '\n';
            var res3 = '영원의돌 : ' + util.mistickConverter(abilityStoneNumber) + '\n';

            message.channel.send(res2 + res3);
        }


    }

    // 주사위
    if (message.content.startsWith(`${prefix}주사위`)) {

        var getContent = message.content.split(' ');
        var number = parseInt(getContent[1]);

        if (isNaN(number)) {
            message.channel.send('아ㅏㅏㅏㅏㅏㅏㅏ 숫자를 적으셈');
        } else {
            message.channel.send(util.randomNum(1, number));
        }

    }

    // 마리
    if (message.content.startsWith(`${prefix}마리`)) {

        var getContent = message.content.split(' ');
        var gold = parseInt(getContent[1]);

        if (isNaN(gold)) {
            message.channel.send('아ㅏㅏㅏㅏㅏㅏㅏ 크리 가격 적으셈 ex) 마리 500');
            return;
        } else {
            var oneCristal = util.cristalToGold(gold);
        }

        let maryData = await crawler.getMaryData();
        var responseMsg = new String();
        console.log(maryData);

        if (!maryData) {
            message.channel.send(responseMsg);
        }

        for (var i in maryData) {
            var maryItem = maryData[i].item;
            var getCount = maryItem.split('[')[1];
            if (getCount) {
                var cnt = getCount.split('개')[0];
                console.log(cnt);
            } else {

            }

            responseMsg = responseMsg + maryData[i].item + " / " + maryData[i].cost + "크리스탈 / " + (oneCristal * maryData[i].cost).toFixed(2) + " 골드";
            if (getCount) {
                responseMsg = responseMsg + "/ 개당 " + (oneCristal * maryData[i].cost / cnt).toFixed(2) + " 골드\n"
            } else {
                responseMsg = responseMsg + "\n"
            }
        }

        message.channel.send("1크리당 약" + oneCristal + "골드" + '\n' + responseMsg);

    }



    // 마리
    if (message.content.startsWith(`${prefix}닉변`)) {

        var getContent = message.content.split(' ');
        var nickName = getContent[1];

        if (nickName != message.author.username) {
            message.channel.send("본인 캐릭만 수정가능 합니다");
            return;
        }



        let update = await db.updateNickname(getContent[1], memberID);

        if (update != 1) {
            message.channel.send('Error : ' + nickName);
            return;
        } else {
            message.channel.send("변경완료");
        }

    }

    // 일정 요일/시간/컨텐츠명
    if (message.content.startsWith(`${prefix}일정`)) {

        var getContent = message.content.split(' ');
        var dayoftheweek = util.daysOfTheWeek(getContent[1]);

        if (dayoftheweek == 'err'){
            message.channel.send('요일 입력 다시 (ex : 월, 화, 수.. )')
        }

        var times = getContent[2];
        var contents = getContent[3];

        let data = await db.insertCalendar(dayoftheweek, times, contents);
        console.log(data);
        if (data != 1) {
            message.channel.send('에러');
        } else {
            message.channel.send('등록성공');
        }


    }


    // if (message.author.username == 'D플뢰르') {
    //     message.channel.content.delete('D플뢰르');
    //     message.channel.send('채팅못침 ㅅㄱ');
    // }


}