require('./style/css/screen.css');

window.onload = function() {
    var bankmenu = {
        0: {
            name: '001 中央銀行',
            href: 'http://www.law.cbc.gov.tw/webCbcExt/'
        },
        1: {
            name: '004 台灣銀行',
            href: 'http://www.bot.com.tw/Pages/default.aspx'
        },
        2: {
            name: '005 土地銀行',
            href: 'http://www.landbank.com.tw/'
        },
        3: {
            name: '006 合作金庫',
            href: 'http://www.tcb-bank.com.tw/wps/portal/Pages/teamsite_redirect.aspx'
        },
        4: {
            name: '007 第一銀行',
            href: 'https://ibank.firstbank.com.tw/NetBank/index.html'
        },
        5: {
            name: '008 華南銀行',
            href: 'http://www.hncb.com.tw/'
        },
        6: {
            name: '009 彰化銀行',
            href: 'https://www.chb.com.tw/wcm/web/home/index.html'
        },
        7: {
            name: '011 上海商銀',
            href: 'http://www.scsb.com.tw/'
        },
        8: {
            name: '012 台北富邦',
            href: 'http://www.fubon.com/bank/home/index.htm?ctype=B&amp;cid=menu&amp;oid=bank'
        },
        9: {
            name: '013 國泰世華',
            href: 'https://www.globalmyb2b.com/GEBANK/Login.aspx'
        },
        10: {
            name: '016 高雄銀行',
            href: 'http://www.bok.com.tw/'
        },
        11: {
            name: '017 兆豐銀行',
            href: 'https://www.megabank.com.tw/'
        },
        12: {
            name: '021 花旗銀行',
            href: 'http://www.citibank.com.tw/'
        },
        13: {
            name: '039 澳盛銀行',
            href: 'http://anz.tw/zh/index.jsp'
        },
        14: {
            name: '040 中華銀行',
            href: 'http://www.cdibank.com/'
        },
        15: {
            name: '050 台灣企銀',
            href: 'http://www.tbb.com.tw/wps/wcm/connect/TBBInternet'
        },
        16: {
            name: '052 渣打銀行',
            href: 'http://www.standardchartered.com.tw/'
        },
        17: {
            name: '053 台中商銀',
            href: 'http://www.tcbbank.com.tw/'
        },
        18: {
            name: '054 京城銀行',
            href: 'http://www.ktb.com.tw/'
        },
        19: {
            name: '075 東亞銀行',
            href: 'http://www.hkbea.com.tw/'
        },
        20: {
            name: '081 匯豐銀行',
            href: 'http://www.hsbc.com.tw/1/2/home_zh_TW'
        },
        21: {
            name: '102 華泰銀行',
            href: 'http://www.hwataibank.com.tw/hwatai/index.jsp'
        },
        22: {
            name: '103 新光銀行',
            href: 'https://www.skbank.com.tw/2006_homemain1.asp'
        },
        23: {
            name: '108 陽信銀行',
            href: 'http://www.sunnybank.com.tw/'
        },
        24: {
            name: '118 板信銀行',
            href: 'http://www.bop.com.tw/'
        },
        25: {
            name: '147 三信商銀',
            href: 'http://www.cotabank.com.tw/index.htm'
        },
        26: {
            name: '700 中華郵政',
            href: 'http://www.post.gov.tw/post/index.jsp'
        },
        27: {
            name: '803 聯邦銀行',
            href: 'http://www.ubot.com.tw/'
        },
        28: {
            name: '805 遠東商銀',
            href: 'https://www.feib.com.tw/'
        },
        29: {
            name: '806 元大銀行',
            href: 'https://www.yuantabank.com.tw/bank/'
        },
        30: {
            name: '807 永豐銀行',
            href: 'http://www.banksinopac.com.tw/bsp/index/index.asp'
        },
        31: {
            name: '808 玉山銀行',
            href: 'http://www.esunbank.com.tw/'
        },
        32: {
            name: '809 萬泰銀行',
            href: 'https://www.cosmosbank.com.tw/'
        },
        33: {
            name: '812 台新銀行',
            href: 'http://www.taishinbank.com.tw/'
        },
        34: {
            name: '814 大眾銀行',
            href: 'http://www.tcbank.com.tw/zh/'
        },
        35: {
            name: '815 日盛銀行',
            href: 'http://www.jihsunbank.com.tw/'
        },
        36: {
            name: '816 安泰銀行',
            href: 'http://www.entiebank.com.tw/'
        },
        37: {
            name: '822 中國信託',
            href: 'https://consumer.chinatrust.com.tw/CTCBPortalWeb/appmanager/ebank/rb'
        },
        38: {
            name: '',
            href: '#'
        },
        39: {
            name: '',
            href: '#'
        },
        40: {
            name: '',
            href: '#'
        },
        41: {
            name: '',
            href: '#'
        },
    }
    tarframe = document.getElementById('banktab');
    for (var index = 0; index < 40; index++) {
        var element = document.createElement('a');
        element.className = 'bankbox';
        element.innerHTML = bankmenu[index].name;
        element.href = bankmenu[index].href;
        element.target = '_blank';
        tarframe.appendChild(element);
    }
}
chooseimg(event, 'Entertainmentcity');
// 娛樂優惠
document.getElementById('Entertainmentcity').onclick = function() {
    choosebigtab('ad');
    chooseimg(event, 'Entertainmentcity');
}

// 好康推薦
document.getElementById('recommendedobj').onclick = function() {
    choosebigtab('ad');
    chooseimg(event, 'recommendedobj');
}

// 精選廣告
document.getElementById('Featuredads').onclick = function() {
    choosebigtab('ad');
    chooseimg(event, 'Featuredads');
}

// 網路銀行
document.getElementById('banklistall').onclick = function() {
    choosebigtab('banktab');
}

// 取出網站列表按鈕
var gameclass = document.getElementsByClassName('optiongameclass');
for (var index = 0; index < gameclass.length; index++) {
    gameclass[index].onclick = function() {
        choosebigtab('ad2');
        console.log(this.id);
        choosecasino(this.id);
    }
}

// 大框架選擇
function choosebigtab(bigtabname) {
    appeard = document.getElementsByClassName('bigtab');
    if (bigtabname == 'ad') {
        for (var index = 0; index < appeard.length; index++) {
            appeard[index].style.display = 'block';
        }
    } else {
        for (var index = 0; index < appeard.length; index++) {
            appeard[index].style.display = 'none';
        }
    }
    document.getElementById(bigtabname).style.display = 'block';
}


// 取出目標框架
function chooseimg(evt, imgclass) {
    tarframe = document.getElementById('ad');
    // 取出下面所有廣告>隱藏
    allobj = tarframe.getElementsByTagName('div');
    for (var index = 0; index < allobj.length; index++) {
        allobj[index].style.display = 'none';
    }
    // 目標廣告出現
    tragetobj = tarframe.getElementsByClassName(imgclass);
    for (var index = 0; index < tragetobj.length; index++) {
        tragetobj[index].style.display = "block";
    }
    // 通用廣告出現>ALL
    tragetobj = tarframe.getElementsByClassName('all');
    for (var index = 0; index < tragetobj.length; index++) {
        tragetobj[index].style.display = "block";
    }
}


// 娛樂城分類顯示
function choosecasino(casinoclass) {
    appeard = document.getElementsByClassName('gamebox');
    for (var index = 0; index < appeard.length; index++) {
        appeard[index].style.display = 'none';
    }
    showcasion = document.getElementsByClassName(casinoclass);
    for (var index = 0; index < showcasion.length; index++) {
        showcasion[index].style.display = 'block';
    }
}

// 人數跳數字
setInterval(function() {
    if (Math.floor((Math.random() * 2)) == 0) {
        document.getElementById('live').innerHTML = Number(document.getElementById('live').innerHTML) + Math.floor((Math.random() * 3));
    } else {
        document.getElementById('live').innerHTML = Number(document.getElementById('live').innerHTML) - Math.floor((Math.random() * 2));
    }
}, 90000);

// google分析