function formValidation()
{
    var creditCardNum = document.registration.number.value;
    var ExpireDate = document.registration.date.value;
    var fullName = document.registration.name.value;
    var visaType = detectCardType(creditCardNum);

    var internationalRandArr = [1,1,1,0,0,0,0,0,0,0];
    var internationalRand = Math.floor((Math.random() * 10));
    var international = internationalRandArr[internationalRand];

    var QualifiedRandArr = [1,1,1,1,1,1,1,0,0,0];
    var QualifiedRand = Math.floor((Math.random() * 10));
    var Qualified = QualifiedRandArr[QualifiedRand];

    var prevPurchase = Math.floor((Math.random() * 99900) + 10);            // between 10 - 100000

    var productPurchase = selectProduct();                                  // from json name + price
    var prevPurchaseCompany = prevPurchaseCompanyFunc(prevPurchase);



    var userJsonData = {
        "creditCardNum": creditCardNum,
        "visaType": visaType,
        "ExpireDate": ExpireDate,
        "fullName": fullName,
        "international": international,
        "Qualified": Qualified,
        "prevPurchase": prevPurchase,
        "productPrice": productPurchase['price'],
        "productName": productPurchase['item_name'],
        "prevPurchaseCompany" : prevPurchaseCompany,
        "customer": 'RingelXPS13'
    };

    findBestCompany(userJsonData);
}

function findBestCompany(userJsonData){

    var allCompanyData = initMappingData();

    var companyPrice = {
            'leap': 0,
            'intuit': 0,
            'payza': 0,
            'payPal': 0,
            'skrill': 0,
            'square': 0,
            'brainTree': 0,
            'amazonPayments': 0,
            'googleWallet': 0,
            'twoCheckOut': 0,
            'stripe': 0,
            'wePay' : 0
    };
    var curPurchase = userJsonData.productPrice;

    for (var idx in companyPrice){
        var offerPrice = 0;
        var curCompany = idx;


    }


}

function initMappingData() {
    var leap = { 'serviceID': 1,
             'serviceName': 'leap',
             'monthlyFee': 15,
             'onePercent': 0.95,
             'oneFix': 0.1,
             'twoPercent': 0.95,
             'twoFix': 0.1,
             'threePercent': 0.95,
             'threeFix': 0.1,
             'fourPercent': 0.95,
             'fourFix': 0.1,
             'fivePercent': 0.95,
             'fiveFix': 0.1,
             'chargebackFee': 15,
             'internationalRate': 0.95,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 0.95,
             'vmQFix': 0.1,
             'vmNQPercent': 0.95,
             'vmNQFix': 0.1,
             'axpPercent': 2.89,
             'axpFix': 0.1,
             'diners': null
            };

    var intuit = { 'serviceID': 2,
             'serviceName': 'intuit',
             'monthlyFee': 0.0,
             'onePercent': 1.75,
             'oneFix': 0.5,
             'twoPercent': 1.75,
             'twoFix': 0.5,
             'threePercent': 1.75,
             'threeFix': 0.5,
             'fourPercent': null,
             'fourFix': null,
             'fivePercent': null,
             'fiveFix': null,
             'chargebackFee': 20,
             'internationalRate': null,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 1.75,
             'vmQFix': 0.5,
             'vmNQPercent': 1.75,
             'vmNQFix': 0.5,
             'axpPercent': 2.89,
             'axpFix': 0.0,
             'diners': null
            }

    var payza = { 'serviceID': 3,
             'serviceName': 'payza',
             'monthlyFee': null,
             'onePercent': null,
             'oneFix': null,
             'twoPercent': null,
             'twoFix': null,
             'threePercent': null,
             'threeFix': null,
             'fourPercent': null,
             'fourFix': null,
             'fivePercent': null,
             'fiveFix': null,
             'chargebackFee': 35,
             'internationalRate': 2.5,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.5,
             'vmQFix': 0.25,
             'vmNQPercent': null,
             'vmNQFix': null,
             'axpPercent': null,
             'axpFix': null,
             'diners': null
            };

    var payPal = { 'serviceID': 4,
             'serviceName': 'paypal',
             'monthlyFee': 0,
             'onePercent': 2.9,
             'oneFix': 0.3,
             'twoPercent': 2.9,
             'twoFix': 0.3,
             'threePercent': 2.5,
             'threeFix': 0.3,
             'fourPercent': 2.2,
             'fourFix': 0.3,
             'fivePercent': 1.9,
             'fiveFix': 0.3,
             'chargebackFee': 20,
             'internationalRate': 0.0,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.9,
             'vmQFix': 0.3,
             'vmNQPercent': 2.9,
             'vmNQFix': 0.3,
             'axpPercent': 2.9,
             'axpFix': 0.3,
             'diners': null
            };

    var skrill = { 'serviceID': 5,
             'serviceName': 'skrill',
             'monthlyFee': null,
             'onePercent': 2.9,
             'oneFix': 0.29,
             'twoPercent': 2.9,
             'twoFix': 0.29,
             'threePercent': 2.4,
             'threeFix': 0.29,
             'fourPercent': 2.00,
             'fourFix': 0.29,
             'fivePercent': 1.7,
             'fiveFix': 0.29,
             'chargebackFee': 20,
             'internationalRate': 0.0,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.9,
             'vmQFix': 0.29,
             'vmNQPercent': 2.9,
             'vmNQFix': 0.29,
             'axpPercent': 2.9,
             'axpFix': 0.29,
             'diners': null
            };

    var square = { 'serviceID': 6,
             'serviceName': 'square',
             'monthlyFee': 275,
             'onePercent': 2.75,
             'oneFix': null,
             'twoPercent': 2.75,
             'twoFix': null,
             'threePercent': null,
             'threeFix': null,
             'fourPercent': null,
             'fourFix': null,
             'fivePercent': null,
             'fiveFix': null,
             'chargebackFee': 0.0,
             'internationalRate': null,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.75,
             'vmQFix': 0.0,
             'vmNQPercent': 2.75,
             'vmNQFix': 0.0,
             'axpPercent': null,
             'axpFix': null,
             'diners': null
            };

    var brainTree = { 'serviceID': 7,
             'serviceName': 'brainTree',
             'monthlyFee': 0.0,
             'onePercent': 2.9,
             'oneFix': 0.3,
             'twoPercent': 2.9,
             'twoFix': 0.3,
             'threePercent': 2.9,
             'threeFix': 0.3,
             'fourPercent': 2.9,
             'fourFix': 0.3,
             'fivePercent': 2.9,
             'fiveFix': 0.3,
             'chargebackFee': 15,
             'internationalRate':0.0,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.9,
             'vmQFix': 0.3,
             'vmNQPercent': 2.9,
             'vmNQFix': 0.3,
             'axpPercent': 0.0,
             'axpFix': 0.0,
             'diners': null
            };

    var amazonPayments = { 'serviceID': 8,
             'serviceName': 'amazonPayments',
             'monthlyFee': 0.0,
             'onePercent': 5.0,
             'oneFix': 0.0,
             'twoPercent': 2.9,
             'twoFix': 0.3,
             'threePercent': 2.5,
             'threeFix': 0.3,
             'fourPercent': 2.2,
             'fourFix': 0.3,
             'fivePercent': 1.9,
             'fiveFix': 0.3,
             'chargebackFee': 10,
             'internationalRate': 2.5,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.9,
             'vmQFix': 0.30,
             'vmNQPercent': 2.9,
             'vmNQFix': 0.30,
             'axpPercent': 2.9,
             'axpFix': 0.30,
             'diners': null
            };

    var googleWallet = { 'serviceID': 9,
             'serviceName': 'googleWallet',
             'monthlyFee': 0,
             'onePercent': 2.9,
             'oneFix': 0.3,
             'twoPercent': 2.9,
             'twoFix': 0.3,
             'threePercent': 2.9,
             'threeFix': 0.3,
             'fourPercent': 2.9,
             'fourFix': 0.3,
             'fivePercent': 2.9,
             'fiveFix': 0.3,
             'chargebackFee': 10,
             'internationalRate': 0.0,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.9,
             'vmQFix': 0.3,
             'vmNQPercent': 2.9,
             'vmNQFix': 0.3,
             'axpPercent': 2.9,
             'axpFix': 0.3,
             'diners': null
            };

    var twoCheckOut = { 'serviceID': 10,
             'serviceName': 'twoCheckOut',
             'monthlyFee': 0,
             'onePercent': 5.5,
             'oneFix': 0.45,
             'twoPercent': 5.5,
             'twoFix': 0.45,
             'threePercent': 5.5,
             'threeFix': 0.45,
             'fourPercent': null,
             'fourFix': null,
             'fivePercent': null,
             'fiveFix': null,
             'chargebackFee': 16,
             'internationalRate': 2.5,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 5.5,
             'vmQFix': 0.45,
             'vmNQPercent': 5.5,
             'vmNQFix': 0.45,
             'axpPercent': null,
             'axpFix': null,
             'diners': null
            };

    var stripe = { 'serviceID': 11,
             'serviceName': 'stripe',
             'monthlyFee': 0,
             'onePercent': 2.9,
             'oneFix': 0.3,
             'twoPercent': 2.9,
             'twoFix': 0.3,
             'threePercent': 2.9,
             'threeFix': 0.3,
             'fourPercent': 2.9,
             'fourFix': 0.3,
             'fivePercent': 2.9,
             'fiveFix': 0.3,
             'chargebackFee': 35,
             'internationalRate': 2.5,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': null,
             'vmQFix': null,
             'vmNQPercent': null,
             'vmNQFix': null,
             'axpPercent': null,
             'axpFix': null,
             'diners': null
            };

    var wePay = { 'serviceID': 12,
             'serviceName': 'wePay',
             'monthlyFee': 0,
             'onePercent': 2.9,
             'oneFix': 0.3,
             'twoPercent': 2.9,
             'twoFix': 0.3,
             'threePercent': 2.9,
             'threeFix': 0.3,
             'fourPercent': 2.9,
             'fourFix': 0.3,
             'fivePercent': 2.9,
             'fiveFix': 0.3,
             'chargebackFee': 35,
             'internationalRate': null,
             'isSupportMobile': true,
             'currency': 'usd',
             'vmQPercent': 2.9,
             'vmQFix': 0.30,
             'vmNQPercent': 2.9,
             'vmNQFix': 0.30,
             'axpPercent': 2.9,
             'axpFix': 0.3,
             'diners': null
            };

    var allCompanyData = {
            'leap': leap,
            'intuit': intuit,
            'payza': payza,
            'payPal': payPal,
            'skrill': skrill,
            'square': square,
            'brainTree': brainTree,
            'amazonPayments': amazonPayments,
            'googleWallet': googleWallet,
            'twoCheckOut': twoCheckOut,
            'stripe': stripe,
            'wePay' : wePay
     }

    return allCompanyData;
}


function insertDataDB(resData){


  // PHP code
}

function checkValidCard(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}


function detectCardType(number) {
   var re = {
       electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
       maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
       dankort: /^(5019)\d+$/,
       interpayment: /^(636)\d+$/,
       unionpay: /^(62|88)\d+$/,
       visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
       mastercard: /^5[1-5][0-9]{14}$/,
       amex: /^3[47][0-9]{13}$/,
       diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
       discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
       jcb: /^(?:2131|1800|35\d{3})\d{11}$/
   };
   if (re.electron.test(number)) {
       return 'ELECTRON';
   } else if (re.maestro.test(number)) {
       return 'MAESTRO';
   } else if (re.dankort.test(number)) {
       return 'DANKORT';
   } else if (re.interpayment.test(number)) {
       return 'INTERPAYMENT';
   } else if (re.unionpay.test(number)) {
       return 'UNIONPAY';
   } else if (re.visa.test(number)) {
       return 'VISA';
   } else if (re.mastercard.test(number)) {
       return 'MASTERCARD';
   } else if (re.amex.test(number)) {
       return 'AMEX';
   } else if (re.diners.test(number)) {
       return 'DINERS';
   } else if (re.discover.test(number)) {
       return 'DISCOVER';
   } else if (re.jcb.test(number)) {
       return 'JCB';
   } else {
       return undefined;
   }
}

function prevPurchaseCompanyFunc(prevPurchase){
    var randomArr = new Array(12);
    var sum = 0;
    for (i = 0; i < 12; i++) {
        randomArr[i] = Math.random();
        sum = sum + randomArr[i];
    }
    for (i = 0; i < 12; i++) {
        randomArr[i] = randomArr[i]/sum;
        randomArr[i] = randomArr[i]*prevPurchase;
    }
    var checkSum = 0;
    for (i = 0; i < 12; i++) {
        checkSum = checkSum + randomArr[i];
    }

    var prevPurchaseCompany = {
            'leap': 0,
            'intuit': 0,
            'payza': 0,
            'payPal': 0,
            'skrill': 0,
            'square': 0,
            'brainTree': 0,
            'amazonPayments': 0 ,
            'googleWallet': 0,
            'twoCheckOut': 0,
            'stripe': 0,
            'wePay' : 0
     }
     var cnt = 0;
     for (var idx in prevPurchaseCompany) {
        prevPurchaseCompany[idx] = randomArr[cnt];
        cnt++;
     }

     return prevPurchaseCompany;
}


function selectProduct(){

    var randomProduct = [
                                {"price":"$842.70","item_name":"Avid"},
                                {"price":"$1319.09","item_name":"Wufoo"},
                                {"price":"$135.45","item_name":"RMADS"},
                                {"price":"$890.44","item_name":"Knee Surgery"},
                                {"price":"$849.01","item_name":"IOSH"},
                                {"price":"$367.68","item_name":"MDI"},
                                {"price":"$1275.91","item_name":"Knowledge Base"},
                                {"price":"$1252.04","item_name":"SI"},
                                {"price":"$1085.56","item_name":"GSD"},
                                {"price":"$746.40","item_name":"dSPACE"},
                                {"price":"$1102.78","item_name":"Home Care"},
                                {"price":"$599.39","item_name":"MMI"},
                                {"price":"$41.45","item_name":"Manual Therapy"},
                                {"price":"$61.41","item_name":"Contractual Agreements"},
                                {"price":"$1128.40","item_name":"Angel LMS"},
                                {"price":"$699.99","item_name":"cXML"},
                                {"price":"$553.03","item_name":"WC"},
                                {"price":"$1210.01","item_name":"Critical Thinking"},
                                {"price":"$753.09","item_name":"Customer Experience"},
                                {"price":"$1031.02","item_name":"Boating"},
                                {"price":"$335.22","item_name":"DHTMLX"},
                                {"price":"$1200.62","item_name":"BSD"},
                                {"price":"$1317.34","item_name":"Icon Design"},
                                {"price":"$1028.38","item_name":"McAfee"},
                                {"price":"$1245.28","item_name":"MD-11"},
                                {"price":"$1044.89","item_name":"Mixed-Signal IC Design"},
                                {"price":"$841.60","item_name":"IRS Enrolled Agent"},
                                {"price":"$627.16","item_name":"UC4"},
                                {"price":"$210.99","item_name":"MMO"},
                                {"price":"$789.33","item_name":"DDMS"},
                                {"price":"$168.56","item_name":"VRML"},
                                {"price":"$861.95","item_name":"Git"},
                                {"price":"$686.48","item_name":"Flight Training"},
                                {"price":"$220.71","item_name":"NHibernate"},
                                {"price":"$570.00","item_name":"Behavioral Health"},
                                {"price":"$549.12","item_name":"Cyber-security"},
                                {"price":"$856.67","item_name":"Vlookup"},
                                {"price":"$334.43","item_name":"Global Health"},
                                {"price":"$294.24","item_name":"Ajax4JSF"},
                                {"price":"$662.98","item_name":"Project Portfolio Management"},
                                {"price":"$101.85","item_name":"XBR"},
                                {"price":"$1480.25","item_name":"IT Solutions"},
                                {"price":"$1047.56","item_name":"DHCP"},
                                {"price":"$685.35","item_name":"IAR"},
                                {"price":"$113.58","item_name":"QMF for Windows"},
                                {"price":"$224.54","item_name":"Qbasic"},
                                {"price":"$539.21","item_name":"Governmental Affairs"},
                                {"price":"$426.37","item_name":"GMAT"},
                                {"price":"$172.54","item_name":"Account Reconciliation"},
                                {"price":"$1214.07","item_name":"Aircraft"},
                                {"price":"$1148.50","item_name":"ITIL"},
                                {"price":"$1260.70","item_name":"Avaya Communication Manager"},
                                {"price":"$1075.26","item_name":"Fitness"},
                                {"price":"$87.69","item_name":"GNU tools"},
                                {"price":"$1242.85","item_name":"Internal Audit"},
                                {"price":"$576.64","item_name":"Knowledge Engineering"},
                                {"price":"$1120.42","item_name":"MWS"},
                                {"price":"$1278.06","item_name":"European History"},
                                {"price":"$1147.60","item_name":"Bodywork"},
                                {"price":"$870.48","item_name":"NHPA"},
                                {"price":"$248.10","item_name":"Hyperion EPM"},
                                {"price":"$767.22","item_name":"Internet Yellow Pages"},
                                {"price":"$701.04","item_name":"Overcoming Challenges"},
                                {"price":"$640.15","item_name":"Research Ethics"},
                                {"price":"$1446.69","item_name":"IGRT"},
                                {"price":"$1144.64","item_name":"Github"},
                                {"price":"$693.97","item_name":"Plant Identification"},
                                {"price":"$549.03","item_name":"TDMoIP"},
                                {"price":"$1282.16","item_name":"CNC Programming"},
                                {"price":"$953.21","item_name":"Irrigation Management"},
                                {"price":"$367.10","item_name":"Copy Editing"},
                                {"price":"$403.51","item_name":"Cisco UCS"},
                                {"price":"$1152.06","item_name":"Bank-owned Properties"},
                                {"price":"$1412.88","item_name":"Revenue Cycle"},
                                {"price":"$471.77","item_name":"Railway"},
                                {"price":"$731.43","item_name":"IGOR Pro"},
                                {"price":"$377.49","item_name":"GIMP"},
                                {"price":"$760.73","item_name":"Small Business Marketing"},
                                {"price":"$1254.11","item_name":"Cell Culture"},
                                {"price":"$685.26","item_name":"Recruitment Advertising"},
                                {"price":"$128.05","item_name":"DFX"},
                                {"price":"$394.43","item_name":"TDMoIP"},
                                {"price":"$729.73","item_name":"XPath"},
                                {"price":"$945.50","item_name":"VxWorks"},
                                {"price":"$1280.18","item_name":"EHR"},
                                {"price":"$637.82","item_name":"OHSAS 18001"},
                                {"price":"$480.07","item_name":"nDo"},
                                {"price":"$597.16","item_name":"UAT Coordination"},
                                {"price":"$760.44","item_name":"Chi Nei Tsang"},
                                {"price":"$276.23","item_name":"RC"},
                                {"price":"$1040.16","item_name":"Sarbanes-Oxley Act"},
                                {"price":"$1157.74","item_name":"UTRAN"},
                                {"price":"$1108.79","item_name":"Forklift Operation"},
                                {"price":"$719.04","item_name":"Sun Certified Java Programmer"},
                                {"price":"$175.08","item_name":"Amazon VPC"},
                                {"price":"$764.77","item_name":"International Real Estate"},
                                {"price":"$215.59","item_name":"Simple IRA"},
                                {"price":"$1362.05","item_name":"Oracle Identity Manager"},
                                {"price":"$143.10","item_name":"VxFS"},
                                {"price":"$945.32","item_name":"Passionate about work"},
                                {"price":"$1143.87","item_name":"JPEG"},
                                {"price":"$689.31","item_name":"Educational Leadership"},
                                {"price":"$331.28","item_name":"ML"},
                                {"price":"$380.50","item_name":"RNA Biology"},
                                {"price":"$434.17","item_name":"XML Sitemaps"},
                                {"price":"$71.06","item_name":"CNC Programing"},
                                {"price":"$1317.43","item_name":"Obstetrics"},
                                {"price":"$1093.36","item_name":"McAfee Antivirus"},
                                {"price":"$1134.78","item_name":"Group Therapy"},
                                {"price":"$1160.04","item_name":"XML Sitemaps"},
                                {"price":"$254.58","item_name":"GPS Units"},
                                {"price":"$92.48","item_name":"Youth Entrepreneurship"},
                                {"price":"$1168.22","item_name":"RSVP"},
                                {"price":"$1292.70","item_name":"TPL"},
                                {"price":"$862.73","item_name":"DTR"},
                                {"price":"$351.18","item_name":"Ocean Freight"},
                                {"price":"$821.55","item_name":"Lubricants"},
                                {"price":"$1201.33","item_name":"NT Backup"},
                                {"price":"$1117.41","item_name":"Rock Mechanics"},
                                {"price":"$1104.20","item_name":"Store Management"},
                                {"price":"$1137.60","item_name":"Jimmy Jib"},
                                {"price":"$113.56","item_name":"VDSL2"},
                                {"price":"$827.56","item_name":"Emergency Medicine"},
                                {"price":"$939.22","item_name":"Wwise"},
                                {"price":"$624.94","item_name":"IFS ERP"},
                                {"price":"$1071.27","item_name":"Kodak"},
                                {"price":"$1125.43","item_name":"Management"},
                                {"price":"$474.74","item_name":"HUMINT"},
                                {"price":"$1177.22","item_name":"FQHC"},
                                {"price":"$668.98","item_name":"ZFS"},
                                {"price":"$672.03","item_name":"DVD Duplication"},
                                {"price":"$342.04","item_name":"Portrait Photography"},
                                {"price":"$774.91","item_name":"Ruby"},
                                {"price":"$35.89","item_name":"CMM"},
                                {"price":"$238.87","item_name":"DX200"},
                                {"price":"$156.62","item_name":"Programming"},
                                {"price":"$831.99","item_name":"Squid"},
                                {"price":"$900.41","item_name":"GC-FID"},
                                {"price":"$318.80","item_name":"MMORPG"},
                                {"price":"$747.50","item_name":"USDA Rural Housing"},
                                {"price":"$448.58","item_name":"MVVM"},
                                {"price":"$139.37","item_name":"AHLTA"},
                                {"price":"$976.45","item_name":"Urban Studies"},
                                {"price":"$835.72","item_name":"DB2"},
                                {"price":"$1083.28","item_name":"Epicor"},
                                {"price":"$67.73","item_name":"Karate"},
                                {"price":"$721.06","item_name":"EJB"}
    ]
    var randomName = Math.floor(Math.random() * 147);
    var retProduct = randomProduct[randomName];

    return retProduct;

}













