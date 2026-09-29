// ============================================================
// LIC  (Plan 774) - 21  
//     0  5
// ============================================================

// ============================================================
//   ( PDF  )
// ============================================================
const PREMIUM_DATA = {
    0: { sa: 800000,  premium: 638560, maturity: 2144000, term: 21 },
    1: { sa: 825000,  premium: 673695, maturity: 2145000, term: 20 },
    2: { sa: 850000,  premium: 712682, maturity: 2142000, term: 19 },
    3: { sa: 875000,  premium: 754162, maturity: 2135000, term: 18 },
    4: { sa: 900000,  premium: 797400, maturity: 2124000, term: 17 },
    5: { sa: 925000,  premium: 841935, maturity: 2109000, term: 16 }
};

//  WhatsApp  (  )
const WHATSAPP_NUMBER = "919158858885";

// ============================================================
//    
// ============================================================
const TRANSLATIONS = {
    mr: {
        mainTitle: " 21  21  ",
        subTitle: "LIC  (Plan 774) -  ",
        badge1: "100%   ",
        badge2: "LIC ( )  ",
        badge3: " ",
        labelAge: "    (0-5 ):",
        optSelect: "--   --",
        opt0: "0 ",
        opt1: "1 ",
        opt2: "2 ",
        opt3: "3 ",
        opt4: "4 ",
        opt5: "5 ",
        btnCalc: "  ",
        btnReset: " ",
        resultTitle: "  ",
        labelSA: "  (Sum Assured)",
        labelPremium: "  (Single Premium)",
        labelTerm: " ",
        labelMaturity: "   ()",
        years: "",
        disclaimerText: "   LIC  100%   .   80  1000        .     10(10D)   .",
        ageNoteText: " <strong>   6  13   ?</strong><br> WhatsApp         !",
        contactTitle: "   ",
        agentRole: " ",
        whatsappText: "WhatsApp   ",
        whatsappMsg: "Hello, I am interested in the 21 Lakh Plan at Age 21.",
        footerGuarantee: "100%   ",
        footerNote: "   .    .",
        alertSelect: "   ."
    },
    hi: {
        mainTitle: " 21    21  ",
        subTitle: "LIC  (Plan 774) -  ",
        badge1: "100%  ",
        badge2: "LIC ( )  ",
        badge3: "- ",
        labelAge: "     (0-5 ):",
        optSelect: "--   --",
        opt0: "0 ",
        opt1: "1 ",
        opt2: "2 ",
        opt3: "3 ",
        opt4: "4 ",
        opt5: "5 ",
        btnCalc: "  ",
        btnReset: " ",
        resultTitle: "  ",
        labelSA: "  (Sum Assured)",
        labelPremium: "  (Single Premium)",
        labelTerm: " ",
        labelMaturity: "   (-)",
        years: "",
        disclaimerText: "   LIC  100%     80  1000             10(10D)   - ",
        ageNoteText: " <strong>    6  13    ?</strong><br> WhatsApp         !",
        contactTitle: "   ",
        agentRole: " ",
        whatsappText: "WhatsApp   ",
        whatsappMsg: "Hello, I am interested in the 21 Lakh Plan at Age 21.",
        footerGuarantee: "100%  ",
        footerNote: "         ",
        alertSelect: "    "
    },
    en: {
        mainTitle: " 21 Lakh Plan at Age 21",
        subTitle: "LIC Amritbaal (Plan 774) - Single Premium",
        badge1: "100% Guaranteed Returns",
        badge2: "Guaranteed by LIC (Govt. of India)",
        badge3: "Tax-Free Maturity",
        labelAge: " Select Child's Age (0-5 Years):",
        optSelect: "-- Select Age --",
        opt0: "0 Years",
        opt1: "1 Year",
        opt2: "2 Years",
        opt3: "3 Years",
        opt4: "4 Years",
        opt5: "5 Years",
        btnCalc: " Calculate",
        btnReset: " Reset",
        resultTitle: " Your Plan",
        labelSA: "Sum Assured",
        labelPremium: "Single Premium",
        labelTerm: "Policy Term",
        labelMaturity: " Maturity Amount (Tax-Free)",
        years: "Years",
        disclaimerText: "This maturity amount is 100% guaranteed by LIC. The Guaranteed Additions @ 80 per 1000 Sum Assured are fixed and will never change. The final maturity amount is tax-free under Section 10(10D).",
        ageNoteText: " <strong>Is your child's age between 6 and 13 years?</strong><br>Just send the age on WhatsApp  I will send you the quotation immediately!",
        contactTitle: " Contact Us",
        agentRole: "Insurance Expert",
        whatsappText: "Message on WhatsApp",
        whatsappMsg: "Hello, I am interested in the 21 Lakh Plan at Age 21.",
        footerGuarantee: "100% Guaranteed Returns",
        footerNote: "This is an approximate calculation. Contact us for exact premium.",
        alertSelect: "Please select the child's age."
    }
};

//  
let currentLang = 'mr';

// ============================================================
//  
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

    //     
    const ageSelect = document.getElementById('childAge');
    ageSelect.options[0].text = t.optSelect;
    ageSelect.options[1].text = t.opt0;
    ageSelect.options[2].text = t.opt1;
    ageSelect.options[3].text = t.opt2;
    ageSelect.options[4].text = t.opt3;
    ageSelect.options[5].text = t.opt4;
    ageSelect.options[6].text = t.opt5;

    //   active 
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // WhatsApp    
    updateWhatsAppLink();

    //         ( )
    if (!document.getElementById('results').classList.contains('hidden')) {
        const selectedAge = document.getElementById('childAge').value;
        if (selectedAge !== '') {
            calculatePlan(true);
        }
    }
}

// ============================================================
// WhatsApp   
// ============================================================
function updateWhatsAppLink() {
    const t = TRANSLATIONS[currentLang];
    const message = encodeURIComponent(t.whatsappMsg);
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    document.getElementById('whatsappBtn').href = link;
}

// ============================================================
//    
// ============================================================
function formatCurrency(amount) {
    return ' ' + amount.toLocaleString('en-IN');
}

// ============================================================
//  
// ============================================================
function calculatePlan(isLanguageSwitch = false) {
    const ageValue = document.getElementById('childAge').value;
    const t = TRANSLATIONS[currentLang];

    //  
    if (ageValue === '') {
        if (!isLanguageSwitch) {
            alert(' ' + t.alertSelect);
        }
        return;
    }

    const age = parseInt(ageValue);
    const data = PREMIUM_DATA[age];

    if (!data) {
        alert('     .');
        return;
    }

    //  
    document.getElementById('resSA').textContent = formatCurrency(data.sa);
    document.getElementById('resPremium').textContent = formatCurrency(data.premium);
    document.getElementById('resTerm').textContent = data.term + ' ' + t.years;
    document.getElementById('resMaturity').textContent = formatCurrency(data.maturity);

    //  
    document.getElementById('results').classList.remove('hidden');

    //       
    if (!isLanguageSwitch) {
        setTimeout(() => {
            document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// ============================================================
//  
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    //  
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });

    //  
    document.getElementById('calcForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePlan(false);
    });

    // 
    document.getElementById('calcForm').addEventListener('reset', function() {
        document.getElementById('results').classList.add('hidden');
    });

    //  WhatsApp   
    updateWhatsAppLink();
});