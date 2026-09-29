// ============================================================
// LIC अमृतबाल (Plan 774) - 21 लाख योजना
// सिंगल प्रीमियम — वय 0 ते 5
// ============================================================

// ============================================================
// प्रीमियम डेटा (तुमच्या PDF वरून अचूक)
// ============================================================
const PREMIUM_DATA = {
    0: { sa: 800000,  premium: 638560, maturity: 2144000, term: 21 },
    1: { sa: 825000,  premium: 673695, maturity: 2145000, term: 20 },
    2: { sa: 850000,  premium: 712682, maturity: 2142000, term: 19 },
    3: { sa: 875000,  premium: 754162, maturity: 2135000, term: 18 },
    4: { sa: 900000,  premium: 797400, maturity: 2124000, term: 17 },
    5: { sa: 925000,  premium: 841935, maturity: 2109000, term: 16 }
};

// तुमचा WhatsApp नंबर (देश कोड सह)
const WHATSAPP_NUMBER = "919158858885";

// ============================================================
// तिन्ही भाषांमधील सर्व मजकूर
// ============================================================
const TRANSLATIONS = {
    mr: {
        mainTitle: "🎯 21 वयात 21 लाख योजना",
        subTitle: "LIC अमृतबाल (Plan 774) - सिंगल प्रीमियम",
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
        subTitle: "LIC अमृतबाल (Plan 774) - सिंगल प्रीमियम",
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
        subTitle: "LIC Amritbaal (Plan 774) - Single Premium",
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
    document.getElementById('disclaimerText').textContent = t.disclaimerText;
    document.getElementById('ageNoteText').innerHTML = t.ageNoteText;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('agentRole').textContent = t.agentRole;
    document.getElementById('whatsappText').textContent = t.whatsappText;
    document.getElementById('footerGuarantee').textContent = t.footerGuarantee;
    document.getElementById('footerNote').textContent = t.footerNote;

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
// WhatsApp लिंक अपडेट करणे
// ============================================================
function updateWhatsAppLink() {
    const t = TRANSLATIONS[currentLang];
    const message = encodeURIComponent(t.whatsappMsg);
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    document.getElementById('whatsappBtn').href = link;
}

// ============================================================
// रक्कम भारतीय स्वरूपात दाखवणे
// ============================================================
function formatCurrency(amount) {
    return '₹ ' + amount.toLocaleString('en-IN');
}

// ============================================================
// मुख्य गणना
// ============================================================
function calculatePlan(isLanguageSwitch = false) {
    const ageValue = document.getElementById('childAge').value;
    const t = TRANSLATIONS[currentLang];

    // वय तपासणी
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

    // निकाल दाखवा
    document.getElementById('resSA').textContent = formatCurrency(data.sa);
    document.getElementById('resPremium').textContent = formatCurrency(data.premium);
    document.getElementById('resTerm').textContent = data.term + ' ' + t.years;
    document.getElementById('resMaturity').textContent = formatCurrency(data.maturity);

    // निकाल दाखवा
    document.getElementById('results').classList.remove('hidden');

    // जर भाषा बदलली नसेल तर स्क्रोल करा
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
});
