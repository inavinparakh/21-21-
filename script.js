// ============================================================
// LIC अमृतबाल (Plan 774) - 21 लाख योजना
// सिंगल प्रीमियम — वय 0 ते 5
// ============================================================

// ============================================================
// प्रीमियम डेटा (तुमच्या PDF वरून अचूक)
// ============================================================
const PREMIUM_DATA = {
    0: { sa: 800000, premium: 638560, maturity: 2144000, term: 21,
         limited: {
             5: { yearly: 156360, half: 79620,  quarterly: 40178, monthly: 13473 },
             6: { yearly: 132360, half: 67404,  quarterly: 34015, monthly: 11406 },
             7: { yearly: 115680, half: 58914, quarterly: 29731, monthly: 9970 } } },
    1: { sa: 825000, premium: 673695, maturity: 2145000, term: 20,
         limited: {
             5: { yearly: 165701, half: 84376,  quarterly: 42578, monthly: 14277 },
             6: { yearly: 140291, half: 71442,  quarterly: 36052, monthly: 12089 },
             7: { yearly: 122636, half: 62456, quarterly: 31519, monthly: 10569 } } },
    2: { sa: 850000, premium: 712682, maturity: 2142000, term: 19,
         limited: {
             5: { yearly: 175440, half: 89334,  quarterly: 45079, monthly: 15116 },
             6: { yearly: 148537, half: 75640,  quarterly: 38171, monthly: 12800 },
             7: { yearly: 129880, half: 66144, quarterly: 33379, monthly: 11193 } } },
    3: { sa: 875000, premium: 754162, maturity: 2135000, term: 18,
         limited: {
             5: { yearly: 185587, half: 94500,  quarterly: 47686, monthly: 15990 },
             6: { yearly: 157150, half: 80025,  quarterly: 40383, monthly: 13542 },
             7: { yearly: 137375, half: 69960, quarterly: 35305, monthly: 11839 } } },
    4: { sa: 900000, premium: 797400, maturity: 2124000, term: 17,
         limited: {
             5: { yearly: 196020, half: 99811,  quarterly: 50366, monthly: 16889 },
             6: { yearly: 166005, half: 84533,  quarterly: 42658, monthly: 14304 },
             7: { yearly: 145125, half: 73905, quarterly: 37296, monthly: 12507 } } },
    5: { sa: 925000, premium: 841935, maturity: 2109000, term: 16,
         limited: {
             5: { yearly: 206691, half: 105244, quarterly: 53107, monthly: 17808 },
             6: { yearly: 175010, half: 89118,  quarterly: 44971, monthly: 15080 },
             7: { yearly: 153041, half: 77936, quarterly: 39330, monthly: 13188 } } }
};

// हप्त्याने प्रीमियम भरण्याचे पर्याय (वर्षे)
const PAY_TERMS = [5, 6, 7];
// प्रत्येक पद्धतीत वर्षाला किती हप्ते
const MODE_INSTALMENTS = { monthly: 12, quarterly: 4, half: 2, yearly: 1 };

// तुमचा WhatsApp नंबर (देश कोड सह)
const WHATSAPP_NUMBER = "919158858885";

// ============================================================
// PWA + WhatsApp शेअर — तिन्ही भाषांसाठी मजकूर
// ============================================================
const multiLangShare = {
    mr: {
        installBtn: "ॲप इन्स्टॉल करा",
        shareBtn: "ज्यांना लहान मुले आहेत अशा मित्रांना/नातेवाईकांना पाठवा",
        message: (url) => 
            `🎯 *लहान मुलांच्या सुरक्षित भविष्यासाठी महत्त्वाची योजना!*\n\n` +
            `आपल्या घरात किंवा नातेवाईकांमध्ये ० ते १३ वर्षे वयाची लहान मुले आहेत का?\n` +
            `मुलांच्या २१ व्या वर्षी *₹२१ लाख* मिळवण्यासाठी आजच किती बचत करावी लागेल, हे या कॅल्क्युलेटरवर सहज तपासा:\n\n` +
            `✅ १००% हमी दिलेला परतावा\n` +
            `✅ LIC (भारत सरकार) द्वारे हमी\n` +
            `✅ करमुक्त परिपक्वता (कलम 10(10D))\n\n` +
            `👉 *कॅल्क्युलेटर पाहण्यासाठी येथे क्लिक करा:*\n${url}\n\n` +
            `📞 अधिक माहितीसाठी संपर्क: नविन पारख | ९१५८८५८८८५`
    },
    hi: {
        installBtn: "ऐप इंस्टॉल करें",
        shareBtn: "जिनके घर छोटे बच्चे हैं उन दोस्तों/रिश्तेदारों को भेजें",
        message: (url) => 
            `🎯 *छोटे बच्चों के सुरक्षित भविष्य के लिए महत्वपूर्ण योजना!*\n\n` +
            `क्या आपके घर या रिश्तेदारों में ० से १३ वर्ष के बच्चे हैं?\n` +
            `बच्चे के २१ वर्ष की उम्र में *₹२१ लाख* पाने के लिए आज ही कितनी बचत करनी होगी, इस कैलकुलेटर पर आसानी से देखें:\n\n` +
            `✅ १००% गारंटीड रिटर्न\n` +
            `✅ LIC (भारत सरकार) द्वारा गारंटी\n` +
            `✅ करमुक्त परिपक्वता (धारा 10(10D))\n\n` +
            `👉 *कैलकुलेटर देखने के लिए यहाँ क्लिक करें:*\n${url}\n\n` +
            `📞 अधिक जानकारी के लिए संपर्क करें: नविन पारख | ९१५८८५८८८५`
    },
    en: {
        installBtn: "Install App",
        shareBtn: "Share with friends & relatives having young children",
        message: (url) => 
            `🎯 *Essential Plan for Your Child's Bright Future!*\n\n` +
            `Do you or your relatives have children aged 0 to 13 years?\n` +
            `Easily calculate how much you need to save today to get *₹21 Lakhs* at age 21:\n\n` +
            `✅ 100% Guaranteed Returns\n` +
            `✅ Guaranteed by LIC of India\n` +
            `✅ Tax-Free Maturity (Section 10(10D))\n\n` +
            `👉 *Click here to use the calculator:*\n${url}\n\n` +
            `📞 For more details contact: Navin Parakh | 9158858885`
    }
};

// ============================================================
// तिन्ही भाषांमधील सर्व मजकूर
// ============================================================
const TRANSLATIONS = {
    mr: {
        mainTitle: "🎯 21 वयात 21 लाख योजना",
        subTitle: "LIC अमृतबाल (Plan 774) - सिंगल प्रीमियम / 5 / 6 / 7 वर्षे प्रीमियम",
        badge1: "100% हमी दिलेला परतावा",
        badge2: "LIC (भारत सरकार) द्वारे हमी",
        badge3: "करमुक्त परिपक्वता",
        labelAge: "👶 मुलाचे वय टाका (0-5 वर्षे):",
        optSelect: "-- वय निवडा --",
        opt0: "0 वर्षे",
        opt1: "1 वर्ष",
        opt2: "2 वर्षे",
        opt3: "3 वर्षे",
        opt4: "4 वर्षे",
        opt5: "5 वर्षे",
        btnCalc: "🧮 गणना करा",
        btnReset: "🔄 रीसेट",
        resultTitle: "📋 तुमचा प्लॅन",
        labelSA: "विमा रक्कम (Sum Assured)",
        labelPremium: "एकरकमी प्रीमियम (Single Premium)",
        labelTerm: "पॉलिसी मुदत",
        labelMaturity: "🎯 परिपक्वता रक्कम (करमुक्त)",
        optionSingleTitle: "💰 पर्याय १: एकरकमी (सिंगल) प्रीमियम",
        optionLimitedTitle: "🗓️ पर्याय {opt}: फक्त {n} वर्षे प्रीमियम भरा",
        limitedSub: "एकदम मोठी रक्कम नको? तीच परिपक्वता रक्कम — हप्त्याने {n} वर्षांत भरा. आपल्या सोयीची पद्धत निवडा:",
        modeMonthly: "मासिक",
        modeQuarterly: "त्रैमासिक",
        modeHalf: "सहामाही",
        modeYearly: "वार्षिक",
        perMonth: "प्रति महिना",
        perQuarter: "प्रति तिमाही",
        perHalf: "प्रति सहा महिने",
        perYear: "प्रति वर्ष",
        totalOverYears: "{n} वर्षांत एकूण",
        sumTotalPremium: "{n} वर्षांत एकूण प्रीमियम (वार्षिक पद्धत)",
        sumPerDay: "रोजचा खर्च (वार्षिक पद्धत)",
        sumPerDayUnit: "/दिवस",
        sumReturn: "प्रत्येक ₹1 मागे परतावा",
        limitedNote: "वरील हप्ते अंदाजे आहेत; लागू सवलत समाविष्ट आहे. प्रत्यक्ष प्रीमियम अंडररायटिंग नियमांनुसार बदलू शकतो. मासिक/त्रैमासिक/सहामाही पद्धतीत एकूण रक्कम वार्षिक पद्धतीपेक्षा थोडी जास्त असते.",
        years: "वर्षे",
        disclaimerText: "ही परिपक्वता रक्कम LIC द्वारे 100% हमी दिलेली आहे. गॅरंटीड ऑडिशन्स ₹80 प्रति ₹1000 विमा रक्कम — हा दर कधीही बदलणार नाही. अंतिम परिपक्वता रक्कम कलम 10(10D) अंतर्गत करमुक्त आहे.",
        ageNoteText: "💡 <strong>तुमच्या मुलाचे वय 6 ते 13 वर्षांदरम्यान आहे का?</strong><br>फक्त WhatsApp वर वय पाठवा — मी तुम्हाला लगेच क्वोटेशन पाठवेन!",
        contactTitle: "📞 आमच्याशी संपर्क साधा",
        agentRole: "विमा सल्लागार",
        whatsappText: "WhatsApp वर मेसेज करा",
        whatsappMsg: "Hello, I am interested in the 21 Lakh Plan at Age 21.",
        footerGuarantee: "100% हमी दिलेला परतावा",
        footerNote: "ही गणना अंदाजे आहे. अचूक प्रीमियमसाठी संपर्क साधा.",
        alertSelect: "कृपया मुलाचे वय निवडा."
    },
    hi: {
        mainTitle: "🎯 21 की उम्र में 21 लाख योजना",
        subTitle: "LIC अमृतबाल (Plan 774) - सिंगल प्रीमियम / 5 / 6 / 7 वर्ष प्रीमियम",
        badge1: "100% गारंटीड रिटर्न",
        badge2: "LIC (भारत सरकार) द्वारा गारंटी",
        badge3: "कर-मुक्त परिपक्वता",
        labelAge: "👶 बच्चे की उम्र चुनें (0-5 वर्ष):",
        optSelect: "-- उम्र चुनें --",
        opt0: "0 वर्ष",
        opt1: "1 वर्ष",
        opt2: "2 वर्ष",
        opt3: "3 वर्ष",
        opt4: "4 वर्ष",
        opt5: "5 वर्ष",
        btnCalc: "🧮 गणना करें",
        btnReset: "🔄 रीसेट",
        resultTitle: "📋 आपकी योजना",
        labelSA: "बीमा राशि (Sum Assured)",
        labelPremium: "एकमुश्त प्रीमियम (Single Premium)",
        labelTerm: "पॉलिसी अवधि",
        labelMaturity: "🎯 परिपक्वता राशि (कर-मुक्त)",
        optionSingleTitle: "💰 विकल्प 1: एकमुश्त (सिंगल) प्रीमियम",
        optionLimitedTitle: "🗓️ विकल्प {opt}: सिर्फ {n} साल प्रीमियम भरें",
        limitedSub: "एक साथ बड़ी रकम नहीं चाहिए? वही परिपक्वता राशि — किस्तों में {n} साल में भरें। अपनी सुविधा की पद्धति चुनें:",
        modeMonthly: "मासिक",
        modeQuarterly: "तिमाही",
        modeHalf: "छमाही",
        modeYearly: "वार्षिक",
        perMonth: "प्रति माह",
        perQuarter: "प्रति तिमाही",
        perHalf: "प्रति छह माह",
        perYear: "प्रति वर्ष",
        totalOverYears: "{n} साल में कुल",
        sumTotalPremium: "{n} साल में कुल प्रीमियम (वार्षिक पद्धति)",
        sumPerDay: "रोज़ का खर्च (वार्षिक पद्धति)",
        sumPerDayUnit: "/दिन",
        sumReturn: "हर ₹1 पर रिटर्न",
        limitedNote: "ऊपर दी गई किस्तें अनुमानित हैं; लागू छूट शामिल है। वास्तविक प्रीमियम अंडरराइटिंग नियमों के अनुसार बदल सकता है। मासिक/तिमाही/छमाही पद्धति में कुल राशि वार्षिक पद्धति से थोड़ी ज़्यादा होती है।",
        years: "वर्ष",
        disclaimerText: "यह परिपक्वता राशि LIC द्वारा 100% गारंटीड है। गारंटीड एडिशन्स ₹80 प्रति ₹1000 बीमा राशि — यह दर कभी नहीं बदलेगा। अंतिम परिपक्वता राशि धारा 10(10D) के तहत कर-मुक्त है।",
        ageNoteText: "💡 <strong>आपके बच्चे की उम्र 6 से 13 वर्ष के बीच है?</strong><br>सिर्फ WhatsApp पर उम्र भेजें — मैं आपको तुरंत कोटेशन भेजूंगा!",
        contactTitle: "📞 हमसे संपर्क करें",
        agentRole: "बीमा विशेषज्ञ",
        whatsappText: "WhatsApp पर मैसेज करें",
        whatsappMsg: "Hello, I am interested in the 21 Lakh Plan at Age 21.",
        footerGuarantee: "100% गारंटीड रिटर्न",
        footerNote: "यह गणना अनुमानित है। सटीक प्रीमियम के लिए संपर्क करें।",
        alertSelect: "कृपया बच्चे की उम्र चुनें।"
    },
    en: {
        mainTitle: "🎯 21 Lakh Plan at Age 21",
        subTitle: "LIC Amritbaal (Plan 774) - Single Premium / 5, 6 or 7-Year Premium",
        badge1: "100% Guaranteed Returns",
        badge2: "Guaranteed by LIC (Govt. of India)",
        badge3: "Tax-Free Maturity",
        labelAge: "👶 Select Child's Age (0-5 Years):",
        optSelect: "-- Select Age --",
        opt0: "0 Years",
        opt1: "1 Year",
        opt2: "2 Years",
        opt3: "3 Years",
        opt4: "4 Years",
        opt5: "5 Years",
        btnCalc: "🧮 Calculate",
        btnReset: "🔄 Reset",
        resultTitle: "📋 Your Plan",
        labelSA: "Sum Assured",
        labelPremium: "Single Premium",
        labelTerm: "Policy Term",
        labelMaturity: "🎯 Maturity Amount (Tax-Free)",
        optionSingleTitle: "💰 Option 1: Single Premium (One-Time)",
        optionLimitedTitle: "🗓️ Option {opt}: Pay Premium for Only {n} Years",
        limitedSub: "Don't want to pay one big amount? Same maturity amount — pay in instalments over {n} years. Choose the mode that suits you:",
        modeMonthly: "Monthly",
        modeQuarterly: "Quarterly",
        modeHalf: "Half-Yearly",
        modeYearly: "Yearly",
        perMonth: "per month",
        perQuarter: "per quarter",
        perHalf: "per half-year",
        perYear: "per year",
        totalOverYears: "Total over {n} years",
        sumTotalPremium: "Total premium over {n} years (yearly mode)",
        sumPerDay: "Daily cost (yearly mode)",
        sumPerDayUnit: "/day",
        sumReturn: "Return for every ₹1 paid",
        limitedNote: "The instalments above are approximate and include the applicable rebate. Actual premium may vary as per underwriting rules. Monthly/quarterly/half-yearly modes cost slightly more in total than the yearly mode.",
        years: "Years",
        disclaimerText: "This maturity amount is 100% guaranteed by LIC. The Guaranteed Additions @ ₹80 per ₹1000 Sum Assured are fixed and will never change. The final maturity amount is tax-free under Section 10(10D).",
        ageNoteText: "💡 <strong>Is your child's age between 6 and 13 years?</strong><br>Just send the age on WhatsApp — I will send you the quotation immediately!",
        contactTitle: "📞 Contact Us",
        agentRole: "Insurance Expert",
        whatsappText: "Message on WhatsApp",
        whatsappMsg: "Hello, I am interested in the 21 Lakh Plan at Age 21.",
        footerGuarantee: "100% Guaranteed Returns",
        footerNote: "This is an approximate calculation. Contact us for exact premium.",
        alertSelect: "Please select the child's age."
    }
};

// सध्याची भाषा
let currentLang = 'mr';

// PWA इन्स्टॉल प्रॉम्प्ट साठवण्यासाठी
let deferredPrompt = null;

// ============================================================
// भाषा बदलणे
// ============================================================
function switchLanguage(lang) {
    currentLang = lang;
    const t = TRANSLATIONS[lang];

    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('subTitle').textContent = t.subTitle;
    document.getElementById('badge1').textContent = t.badge1;
    document.getElementById('badge2').textContent = t.badge2;
    document.getElementById('badge3').textContent = t.badge3;
    document.getElementById('labelAge').textContent = t.labelAge;
    document.getElementById('optSelect').textContent = t.optSelect;
    document.getElementById('btnCalc').textContent = t.btnCalc;
    document.getElementById('btnReset').textContent = t.btnReset;
    document.getElementById('resultTitle').textContent = t.resultTitle;
    document.getElementById('labelSA').textContent = t.labelSA;
    document.getElementById('labelPremium').textContent = t.labelPremium;
    document.getElementById('labelTerm').textContent = t.labelTerm;
    document.getElementById('labelMaturity').textContent = t.labelMaturity;
    document.getElementById('optionSingleTitle').textContent = t.optionSingleTitle;
    document.getElementById('disclaimerText').textContent = t.disclaimerText;
    document.getElementById('ageNoteText').innerHTML = t.ageNoteText;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('agentRole').textContent = t.agentRole;
    document.getElementById('whatsappText').textContent = t.whatsappText;
    document.getElementById('footerGuarantee').textContent = t.footerGuarantee;
    document.getElementById('footerNote').textContent = t.footerNote;

    // PWA इन्स्टॉल बटण व WhatsApp शेअर बटण लेबल अपडेट करा
    document.getElementById('installBtnText').textContent = multiLangShare[lang].installBtn;
    document.getElementById('shareBtnText').textContent = multiLangShare[lang].shareBtn;

    // वय ड्रॉपडाउन पर्याय अपडेट करा
    const ageSelect = document.getElementById('childAge');
    ageSelect.options[0].text = t.optSelect;
    ageSelect.options[1].text = t.opt0;
    ageSelect.options[2].text = t.opt1;
    ageSelect.options[3].text = t.opt2;
    ageSelect.options[4].text = t.opt3;
    ageSelect.options[5].text = t.opt4;
    ageSelect.options[6].text = t.opt5;

    // भाषा बटणे active करा
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // WhatsApp बटण लिंक अपडेट करा
    updateWhatsAppLink();

    // जर निकाल दाखवले असेल तर पुन्हा गणना करा (नव्या भाषेत)
    if (!document.getElementById('results').classList.contains('hidden')) {
        const selectedAge = document.getElementById('childAge').value;
        if (selectedAge !== '') {
            calculatePlan(true);
        }
    }
}

// ============================================================
// WhatsApp लिंक अपडेट करणे (थेट मेसेज)
// ============================================================
function updateWhatsAppLink() {
    const t = TRANSLATIONS[currentLang];
    const message = encodeURIComponent(t.whatsappMsg);
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    document.getElementById('whatsappBtn').href = link;
}

// ============================================================
// WhatsApp वर शेअर करणे
// ============================================================
function shareOnWhatsApp() {
    const url = window.location.href;
    const shareData = multiLangShare[currentLang];
    const message = shareData.message(url);
    const shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(shareLink, '_blank');
}

// ============================================================
// रक्कम भारतीय स्वरूपात दाखवणे
// ============================================================
function formatCurrency(amount) {
    return '₹ ' + amount.toLocaleString('en-IN');
}

// ============================================================
// हप्त्याने प्रीमियम भरण्याचे पर्याय
// ============================================================
function fillText(str, vars) {
    return str.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
}

function renderLimited(data, t) {
    const modes = [
        { key: 'monthly',   name: t.modeMonthly,   unit: t.perMonth },
        { key: 'quarterly', name: t.modeQuarterly, unit: t.perQuarter },
        { key: 'half',      name: t.modeHalf,      unit: t.perHalf },
        { key: 'yearly',    name: t.modeYearly,    unit: t.perYear }
    ];

    let html = '';
    PAY_TERMS.forEach((n, idx) => {
        const lp = data.limited[n];
        const vars = { n: n, opt: idx + 2 };
        const totalYearly = lp.yearly * n;

        const cards = modes.map(m => {
            const amount = lp[m.key];
            const total = amount * MODE_INSTALMENTS[m.key] * n;
            return `
                <div class="mode-card${m.key === 'yearly' ? ' mode-best' : ''}">
                    <span class="mode-name">${m.name}</span>
                    <span class="mode-amount">${formatCurrency(amount)}</span>
                    <span class="mode-unit">${m.unit}</span>
                    <span class="mode-total">${fillText(t.totalOverYears, vars)}: ${formatCurrency(total)}</span>
                </div>`;
        }).join('');

        html += `
            <div class="limited-section">
                <h3 class="option-title">${fillText(t.optionLimitedTitle, vars)}</h3>
                <p class="limited-sub">${fillText(t.limitedSub, vars)}</p>
                <div class="mode-grid">${cards}
                </div>
                <div class="limited-summary">
                    <div class="sum-item">
                        <span class="sum-label">${fillText(t.sumTotalPremium, vars)}</span>
                        <span class="sum-value">${formatCurrency(totalYearly)}</span>
                    </div>
                    <div class="sum-item">
                        <span class="sum-label">${t.sumPerDay}</span>
                        <span class="sum-value">₹ ${Math.floor(lp.yearly / 365)} ${t.sumPerDayUnit}</span>
                    </div>
                    <div class="sum-item">
                        <span class="sum-label">${t.sumReturn}</span>
                        <span class="sum-value">₹ ${(data.maturity / totalYearly).toFixed(2)}</span>
                    </div>
                </div>
                <p class="limited-note">${t.limitedNote}</p>
            </div>`;
    });

    document.getElementById('limitedContainer').innerHTML = html;
}

// ============================================================
// मुख्य गणना
// ============================================================
function calculatePlan(isLanguageSwitch = false) {
    const ageValue = document.getElementById('childAge').value;
    const t = TRANSLATIONS[currentLang];

    if (ageValue === '') {
        if (!isLanguageSwitch) {
            alert('⚠️ ' + t.alertSelect);
        }
        return;
    }

    const age = parseInt(ageValue);
    const data = PREMIUM_DATA[age];

    if (!data) {
        alert('⚠️ या वयासाठी माहिती उपलब्ध नाही.');
        return;
    }

    document.getElementById('resSA').textContent = formatCurrency(data.sa);
    document.getElementById('resPremium').textContent = formatCurrency(data.premium);
    document.getElementById('resTerm').textContent = data.term + ' ' + t.years;
    document.getElementById('resMaturity').textContent = formatCurrency(data.maturity);

    renderLimited(data, t);

    document.getElementById('results').classList.remove('hidden');

    if (!isLanguageSwitch) {
        setTimeout(() => {
            document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// ============================================================
// इव्हेंट लिसनर्स
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    // भाषा बटणे
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });

    // फॉर्म सबमिट
    document.getElementById('calcForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePlan(false);
    });

    // रीसेट
    document.getElementById('calcForm').addEventListener('reset', function() {
        document.getElementById('results').classList.add('hidden');
    });

    // सुरुवातीला WhatsApp लिंक सेट करा
    updateWhatsAppLink();

    // सुरुवातीला भाषा लेबल सेट करा
    document.getElementById('installBtnText').textContent = multiLangShare[currentLang].installBtn;
    document.getElementById('shareBtnText').textContent = multiLangShare[currentLang].shareBtn;

    // ----------------------------------------------------------
    // PWA: beforeinstallprompt इव्हेंट
    // ----------------------------------------------------------
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('installContainer').style.display = 'flex';
    });

    // ----------------------------------------------------------
    // PWA: इन्स्टॉल बटण क्लिक
    // ----------------------------------------------------------
    document.getElementById('pwaInstallBtn').addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('PWA installed');
        }
        deferredPrompt = null;
        document.getElementById('installContainer').style.display = 'none';
    });

    // ----------------------------------------------------------
    // PWA: इन्स्टॉल झाल्यावर बटण लपवा
    // ----------------------------------------------------------
    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
        document.getElementById('installContainer').style.display = 'none';
    });

    // ----------------------------------------------------------
    // Service Worker नोंदणी
    // ----------------------------------------------------------
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('SW registration failed:', err);
        });
    }
});