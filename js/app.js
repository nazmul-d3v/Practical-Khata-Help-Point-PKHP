/**
 * Practical Khata Help Point - Interactive Web Application Logic
 * Accurate Pricing for HSC & SSC combos according to official rate chart:
 * HSC: Bio 1st-450, Bio 2nd-500, Math 1st-400, Math 2nd-400, Phy 1st-350, Phy 2nd-350, Chm 1st-350, Chm 2nd-350, ICT-300 | 9 Khatas = 900
 * SSC: Math-350, Phy-300, Bio-450, Chm-300, ICT-300 | 5 Khatas = 500
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Subject Database by Academic Level & Stream ---
  const subjectDatabaseByLevel = {
    hsc: {
      science: [
        { id: 'hsc_bio1', nameBn: 'জীববিজ্ঞান ১ম পত্র (Bio 1st)', nameEn: 'Biology 1st Paper (Botany)', price: 450, experiments: 'উদ্ভিদবিজ্ঞান কোষ ও প্র্যাকটিক্যাল ড্রয়িং', icon: 'leaf' },
        { id: 'hsc_bio2', nameBn: 'জীববিজ্ঞান ২য় পত্র (Bio 2nd)', nameEn: 'Biology 2nd Paper (Zoology)', price: 500, experiments: 'প্রাণিবিজ্ঞান ব্যবচ্ছেদ ও অঙ্গসংস্থান চিত্র', icon: 'dna' },
        { id: 'hsc_math1', nameBn: 'উচ্চতর গণিত ১ম পত্র (Math 1st)', nameEn: 'Higher Math 1st Paper', price: 400, experiments: 'স্থানাঙ্ক জ্যামিতি ও গ্রাফ পেপার প্লটিং', icon: 'calc' },
        { id: 'hsc_math2', nameBn: 'উচ্চতর গণিত ২য় পত্র (Math 2nd)', nameEn: 'Higher Math 2nd Paper', price: 400, experiments: 'কনিক, ফাংশন ও বলবিদ্যা ডায়াগ্রাম', icon: 'calc' },
        { id: 'hsc_phy1', nameBn: 'পদার্থবিজ্ঞান ১ম পত্র (Phy 1st)', nameEn: 'Physics 1st Paper', price: 350, experiments: 'ভার্নিয়ার স্কেল, স্ক্রু-গেজ ও পেন্ডুলাম', icon: 'atom' },
        { id: 'hsc_phy2', nameBn: 'পদার্থবিজ্ঞান ২য় পত্র (Phy 2nd)', nameEn: 'Physics 2nd Paper', price: 350, experiments: 'সার্কিট ডায়াগ্রাম, রোধ ও ওহমের সূত্র', icon: 'atom' },
        { id: 'hsc_chm1', nameBn: 'রসায়ন ১ম পত্র (Chm 1st)', nameEn: 'Chemistry 1st Paper', price: 350, experiments: 'লবণ শনাক্তকরণ ও শিখা পরীক্ষা ছক', icon: 'flask' },
        { id: 'hsc_chm2', nameBn: 'রসায়ন ২য় পত্র (Chm 2nd)', nameEn: 'Chemistry 2nd Paper', price: 350, experiments: 'অ্যাসিড-ক্ষার টাইট্রেশন ও সমীকরণ', icon: 'flask' },
        { id: 'hsc_ict', nameBn: 'আইসিটি (ICT Practical)', nameEn: 'ICT Practical', price: 300, experiments: 'HTML কোডিং, C প্রোগ্রাম ও ফ্লোচার্ট', icon: 'code' },
        { id: 'hsc_stat', nameBn: 'পরিসংখ্যান (Statistics)', nameEn: 'Statistics Practical', price: 350, experiments: 'ডাটা অ্যানালাইসিস ও হিস্টোগ্রাম', icon: 'chart' },
        { id: 'hsc_agri', nameBn: 'কৃষি শিক্ষা (Agriculture)', nameEn: 'Agriculture Studies', price: 350, experiments: 'মৃত্তিকা ও শস্য নমুনা পর্যবেক্ষণ', icon: 'sprout' }
      ],
      commerce: [
        { id: 'hsc_acc', nameBn: 'হিসাববিজ্ঞান অ্যাসাইনমেন্ট', nameEn: 'Accounting Project', price: 350, experiments: 'জাবেদা, খতিয়ান ও আর্থিক বিবরণী', icon: 'calc' },
        { id: 'hsc_ict', nameBn: 'আইসিটি (ICT Practical)', nameEn: 'ICT Practical', price: 300, experiments: 'HTML ও ব্যবহারিক নোট', icon: 'code' },
        { id: 'hsc_stat', nameBn: 'পরিসংখ্যান (Statistics)', nameEn: 'Statistics Practical', price: 350, experiments: 'পরিসংখ্যানিক চার্ট ও গ্রাফ', icon: 'chart' }
      ],
      arts: [
        { id: 'hsc_geo', nameBn: 'ভূগোল ও পরিবেশ (Geography)', nameEn: 'Geography Practical', price: 400, experiments: 'মানচিত্র ও স্কেলিং প্রজেক্ট', icon: 'map' },
        { id: 'hsc_psy', nameBn: 'মনোবিজ্ঞান (Psychology)', nameEn: 'Psychology Practical', price: 400, experiments: 'পরীক্ষণ ও তথ্য শিট', icon: 'brain' },
        { id: 'hsc_home', nameBn: 'গার্হস্থ্য বিজ্ঞান (Home Science)', nameEn: 'Home Science', price: 350, experiments: 'ব্যবহারিক প্রজেক্ট ও রেকর্ড', icon: 'home' },
        { id: 'hsc_ict', nameBn: 'আইসিটি (ICT Practical)', nameEn: 'ICT Practical', price: 300, experiments: 'HTML ও ব্যবহারিক নোট', icon: 'code' }
      ]
    },
    ssc: {
      science: [
        { id: 'ssc_math', nameBn: 'উচ্চতর গণিত (Higher Math)', nameEn: 'Higher Math (SSC)', price: 350, experiments: 'গ্রাফ পেপার ও জ্যামিতি অঙ্কন', icon: 'calc' },
        { id: 'ssc_phy', nameBn: 'পদার্থবিজ্ঞান (Physics)', nameEn: 'Physics Practical (SSC)', price: 300, experiments: 'স্ক্রু-গেজ, ভার্নিয়ার ও ছক', icon: 'atom' },
        { id: 'ssc_bio', nameBn: 'জীববিজ্ঞান (Biology)', nameEn: 'Biology Practical (SSC)', price: 450, experiments: 'উদ্ভিদ ও প্রাণীকোষ পেন্সিল চিত্র', icon: 'leaf' },
        { id: 'ssc_chm', nameBn: 'রসায়ন (Chemistry)', nameEn: 'Chemistry Practical (SSC)', price: 300, experiments: 'লবণ পরীক্ষা ও রাসায়নিক বিক্রিয়া', icon: 'flask' },
        { id: 'ssc_ict', nameBn: 'আইসিটি (ICT)', nameEn: 'ICT Practical (SSC)', price: 300, experiments: 'ব্যবহারিক প্রজেক্ট ও রিপোর্ট', icon: 'code' },
        { id: 'ssc_agri', nameBn: 'কৃষি শিক্ষা (Agriculture)', nameEn: 'Agriculture Studies', price: 300, experiments: 'বীজ ও চারা পর্যবেক্ষণ', icon: 'sprout' }
      ],
      commerce: [
        { id: 'ssc_acc', nameBn: 'হিসাববিজ্ঞান অ্যাসাইনমেন্ট', nameEn: 'Accounting Project', price: 300, experiments: 'ছক ও সমাধান', icon: 'calc' },
        { id: 'ssc_ict', nameBn: 'আইসিটি (ICT)', nameEn: 'ICT Practical (SSC)', price: 300, experiments: 'ব্যবহারিক নোট', icon: 'code' }
      ],
      arts: [
        { id: 'ssc_geo', nameBn: 'ভূগোল ও পরিবেশ (Geography)', nameEn: 'Geography Practical', price: 350, experiments: 'মানচিত্র অঙ্কন ও স্কেলিং', icon: 'map' },
        { id: 'ssc_home', nameBn: 'গার্হস্থ্য বিজ্ঞান (Home Science)', nameEn: 'Home Science', price: 300, experiments: 'ব্যবহারিক রেকর্ড', icon: 'home' },
        { id: 'ssc_ict', nameBn: 'আইসিটি (ICT)', nameEn: 'ICT Practical (SSC)', price: 300, experiments: 'ব্যবহারিক নোট', icon: 'code' }
      ]
    },
    degree: {
      science: [
        { id: 'deg_bio', nameBn: 'উদ্ভিদ/প্রাণিবিজ্ঞান (ডিগ্রি)', nameEn: 'Degree Biology', price: 500, experiments: 'অ্যাডভান্সড ডায়াগ্রাম', icon: 'leaf' },
        { id: 'deg_phy', nameBn: 'পদার্থবিজ্ঞান (ডিগ্রি/অনার্স)', nameEn: 'Degree Physics', price: 400, experiments: 'অ্যাডভান্সড ক্যালকুলেশন', icon: 'atom' },
        { id: 'deg_chm', nameBn: 'রসায়ন (ডিগ্রি/অনার্স)', nameEn: 'Degree Chemistry', price: 400, experiments: 'টাইট্রেশন ও অ্যানালাইসিস', icon: 'flask' },
        { id: 'deg_math', nameBn: 'গণিত ল্যাব / প্র্যাকটিক্যাল', nameEn: 'Math Lab Practical', price: 400, experiments: 'ম্যাথ ল্যাব প্রজেক্ট', icon: 'calc' }
      ]
    }
  };

  const deliveryRates = {
    dhaka_inside: { nameBn: 'ঢাকার ভিতরে (Home Delivery)', nameEn: 'Inside Dhaka (Home Delivery)', price: 70 },
    dhaka_sub: { nameBn: 'ঢাকা উপশহর (সাভার/গাজীপুর/কেরানীগঞ্জ)', nameEn: 'Sub-Dhaka (Savar/Gazipur)', price: 100 },
    outside_dhaka: { nameBn: 'ঢাকার বাইরে (সারাদেশ ৬৪ জেলা কুরিয়ার)', nameEn: 'Outside Dhaka (All 64 Districts)', price: 130 }
  };

  // --- Application State ---
  let appState = {
    lang: localStorage.getItem('pkhp_lang') || 'bn',
    theme: localStorage.getItem('pkhp_theme') || 'dark',
    level: 'hsc',
    group: 'science',
    selectedSubjects: [], // Start empty: customer selects their own subjects
    includeNotebooks: true, // 100 Tk per physical khata (9 khata = 900, 5 khata = 500)
    version: 'bangla',
    handwriting: 'standard',
    delivery: 'dhaka_inside'
  };

  // --- SVG Icons Helper ---
  function getIconSvg(type) {
    const icons = {
      atom: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7-2.4-2.4-6.3-2.4-8.7 0-2.4 2.4-2.4 6.3 0 8.7 2.4 2.4 6.3 2.4 8.7 0Z"/><path d="M3.8 3.8c-2.4 2.4-2.4 6.3 0 8.7 2.4 2.4 6.3 2.4 8.7 0 2.4-2.4 2.4-6.3 0-8.7-2.4-2.4-6.3-2.4-8.7 0Z"/></svg>`,
      flask: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`,
      leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
      dna: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 15 5.5-5.5"/><path d="m16.5 20.5 5.5-5.5"/><path d="M14.5 4.5 20 10"/><path d="m4 10 5.5 5.5"/><path d="M12 2v20"/></svg>`,
      calc: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
      code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,
      sprout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4.1 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
      map: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>`,
      brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>`,
      home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
      check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    };
    return icons[type] || icons['atom'];
  }

  // --- Translation Dictionary ---
  const i18n = {
    bn: {
      navHome: 'হোম',
      navCalc: 'ক্যালকুলেটর',
      navPackages: 'প্যাকেজ',
      navSamples: 'নমুনা খাতা',
      navWhy: 'কেন আমরা?',
      navSteps: 'অর্ডার নিয়ম',
      navReviews: 'রিভিউ',
      navFaq: 'FAQ',
      orderNowBtn: 'খাতা অর্ডার করুন',
      navLiveBadge: 'সারাদেশে ডেলিভারি চালু',
      heroBadge: '🏆 দেশের সেরা প্র্যাকটিক্যাল খাতা সার্ভিস | 100% বোর্ড স্ট্যান্ডার্ড',
      heroTitle1: 'SSC ও HSC সকল বিভাগের জন্য',
      heroTitleGrad: 'রেডিমেড প্র্যাকটিক্যাল খাতা',
      heroTitle2: 'এখন সহজেই হাতের নাগালে!',
      heroDesc: 'হাতে আঁকা নিখুঁত ও দৃষ্টিনন্দন চিত্র, বোর্ড অনুমোদিত ক্যালকুলেশন ও পরিচ্ছন্ন স্পষ্ট হাতের লেখায় তৈরি খাতা। কোনো চিন্তা ছাড়াই পরীক্ষায় নিশ্চিত করুন ২৫/২৫ নম্বর!',
      btnCalculate: 'খরচ হিসাব করুন',
      btnChatWa: 'WhatsApp (01942470982)',
      trustDelivery: '৬৪ জেলায় হোম ডেলিভারি',
      trustHandwriting: '১০০% পরিচ্ছন্ন হাতের লেখা',
      trustBoard: 'বোর্ড কারিকুলাম ২০২৩-২৬',
      trustMarks: 'পরীক্ষায় সর্বোচ্চ নম্বরের নিশ্চয়তা',
      stats1Label: 'সফলভাবে ডেলিভারিকৃত খাতা',
      stats2Label: 'সন্তুষ্ট শিক্ষার্থী',
      stats3Label: 'কুরিয়ার কাভারেজ জেলা',
      stats4Label: 'বোর্ড পরীক্ষার কমন মার্কস',
      calcTitle: '🧮 লাইভ খাতা মূল্য ক্যালকুলেটর ও কাস্টম বিল্ডার',
      calcSubtitle: 'আপনার ক্লাস ও বিষয় নির্বাচন করে সরাসরি মোট খরচ ও ডেলিভারি চার্জ জেনে নিন',
      step1Title: '১. আপনার পরীক্ষার স্তর নির্বাচন করুন',
      step2Title: '২. বিভাগ (Group) নির্বাচন করুন',
      step3Title: '৩. যে যে বিষয়ের খাতা প্রয়োজন টিক দিন',
      step4Title: '৪. নতুন ব্ল্যাঙ্ক প্র্যাকটিক্যাল খাতা সরবরাহ (প্রতিটি খাতা ৳১০০)',
      step5Title: '৫. মাধ্যমের ধরন ও লেখার মান',
      step6Title: '৬. আপনার ডেলিভারি এলাকা নির্ধারণ করুন',
      summaryTitle: 'আপনার অর্ডার সামারি',
      summaryDesc: 'তাত্ক্ষণিক বিলিং ও ডেলিভারি বিবরণ',
      noSubjectSelected: 'কোনো বিষয় নির্বাচন করা হয়নি',
      baseKhataCost: 'খাতার সাবটোটাল:',
      deliveryFeeLabel: 'ডেলিভারি চার্জ:',
      discountLabel: 'স্পেশাল প্যাকেজ ডিসকাউন্ট:',
      totalLabel: 'সর্বমোট প্রদেয়:',
      estDeliveryText: '⚡ ডেলিভারি সময়: ২-৩ কার্যদিবস',
      btnOrderDirect: 'সরাসরি অনলাইন অর্ডার দিন',
      btnOrderWa: 'WhatsApp-এ অর্ডার মেসেজ পাঠান',
      btnOrderFb: 'Facebook Messenger-এ বুক করুন',
      guaranteeText: '🔒 কোনো অগ্রিম সম্পূর্ণ পেমেন্ট নেই — ক্যাশ অন ডেলিভারি প্রযোজ্য!'
    },
    en: {
      navHome: 'Home',
      navCalc: 'Calculator',
      navPackages: 'Packages',
      navSamples: 'Samples',
      navWhy: 'Why Us',
      navSteps: 'How to Order',
      navReviews: 'Reviews',
      navFaq: 'FAQ',
      orderNowBtn: 'Order Khata Now',
      navLiveBadge: 'Nationwide Delivery Active',
      heroBadge: '🏆 Bangladesh’s #1 Practical Khata Service | 100% Board Standard',
      heroTitle1: 'Ready-Made Practical Notebooks for',
      heroTitleGrad: 'SSC & HSC All Streams',
      heroTitle2: 'Delivered to Your Doorstep!',
      heroDesc: 'Hand-drawn precision diagrams, board-standard calculations, and immaculate handwriting. Secure full 25/25 marks in your board practical exams effortlessly!',
      btnCalculate: 'Calculate Price',
      btnChatWa: 'WhatsApp (01942470982)',
      trustDelivery: 'Delivery to All 64 Districts',
      trustHandwriting: '100% Neat Handwriting',
      trustBoard: 'NCTB Board Syllabus 2023-26',
      trustMarks: 'Guaranteed Top Marks in Viva',
      stats1Label: 'Khatas Successfully Delivered',
      stats2Label: 'Satisfied Students',
      stats3Label: 'Districts Courier Coverage',
      stats4Label: 'Full Practical Score Rate',
      calcTitle: '🧮 Live Khata Price Calculator & Order Builder',
      calcSubtitle: 'Select your class and required subjects to get an instant cost breakdown',
      step1Title: '1. Select Your Academic Level',
      step2Title: '2. Select Your Academic Stream (Group)',
      step3Title: '3. Choose Your Required Subjects',
      step4Title: '4. Blank Practical Notebook Supply (৳100/notebook)',
      step5Title: '5. Medium Version & Quality',
      step6Title: '6. Select Delivery Region',
      summaryTitle: 'Order Summary',
      summaryDesc: 'Real-time billing & logistics breakdown',
      noSubjectSelected: 'No subjects selected yet',
      baseKhataCost: 'Writing & Drawing Subtotal:',
      deliveryFeeLabel: 'Delivery Charge:',
      discountLabel: 'Special Package Discount:',
      totalLabel: 'Grand Total:',
      estDeliveryText: '⚡ Estimated Delivery: 2-3 Working Days',
      btnOrderDirect: 'Direct Online Order',
      btnOrderWa: 'Send Order on WhatsApp',
      btnOrderFb: 'Order via Facebook Messenger',
      guaranteeText: '🔒 Cash on Delivery Available Across Bangladesh!'
    }
  };

  // --- Initialize UI Elements ---
  const subjectsContainer = document.getElementById('subjectsContainer');
  const summaryItemsList = document.getElementById('summaryItemsList');
  const subtotalElem = document.getElementById('calcSubtotal');
  const deliveryElem = document.getElementById('calcDelivery');
  const discountRow = document.getElementById('discountRow');
  const discountElem = document.getElementById('calcDiscount');
  const grandTotalElem = document.getElementById('calcGrandTotal');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const waBtn = document.getElementById('btnOrderWhatsApp');
  const fbBtn = document.getElementById('btnOrderMessenger');
  

  // Set initial theme
  document.documentElement.setAttribute('data-theme', appState.theme);
  updateThemeIcon();

  // Helper to get current subjects array
  function getCurrentSubjectsList() {
    const levelGroup = subjectDatabaseByLevel[appState.level] || subjectDatabaseByLevel.hsc;
    return levelGroup[appState.group] || levelGroup.science || [];
  }

  // --- Render Subjects Matrix ---
  function renderSubjects() {
    if (!subjectsContainer) return;
    const currentSubjects = getCurrentSubjectsList();
    subjectsContainer.innerHTML = '';

    currentSubjects.forEach(sub => {
      const isSelected = appState.selectedSubjects.includes(sub.id);
      const displayName = appState.lang === 'bn' ? sub.nameBn : sub.nameEn;
      const displayExperiments = sub.experiments;

      const itemDiv = document.createElement('div');
      itemDiv.className = `subject-item-box ${isSelected ? 'selected' : ''}`;
      itemDiv.dataset.id = sub.id;
      itemDiv.innerHTML = `
        <div class="subject-info">
          <div class="sub-icon">${getIconSvg(sub.icon)}</div>
          <div>
            <div class="sub-title">${displayName}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${displayExperiments}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="sub-price">৳${sub.price}</div>
          <div class="check-indicator">${getIconSvg('check')}</div>
        </div>
      `;

      itemDiv.addEventListener('click', () => {
        toggleSubject(sub.id);
      });

      subjectsContainer.appendChild(itemDiv);
    });

    updateCalculation();
  }

  // --- Subject Selection Toggle ---
  function toggleSubject(id) {
    if (appState.selectedSubjects.includes(id)) {
      appState.selectedSubjects = appState.selectedSubjects.filter(item => item !== id);
    } else {
      appState.selectedSubjects.push(id);
    }
    renderSubjects();
  }

  // --- Update Price Calculation ---
  function updateCalculation() {
    const currentSubjects = getCurrentSubjectsList();
    let writingSubtotal = 0;
    const selectedList = [];

    appState.selectedSubjects.forEach(subId => {
      const subjectObj = currentSubjects.find(s => s.id === subId);
      if (subjectObj) {
        let price = subjectObj.price;
        // Premium handwriting multiplier
        if (appState.handwriting === 'calligraphy') {
          price += 40;
        }
        // English version translation & terminology bonus
        if (appState.version === 'english') {
          price += 30;
        }
        writingSubtotal += price;
        selectedList.push({
          id: subId,
          name: appState.lang === 'bn' ? subjectObj.nameBn : subjectObj.nameEn,
          price: price
        });
      }
    });

    // Blank practical notebook cost (৳100 per notebook, e.g. 9 khata = 900, 5 khata = 500)
    let notebookCost = 0;
    if (appState.includeNotebooks && selectedList.length > 0) {
      notebookCost = selectedList.length * 100;
    }

    const subtotal = writingSubtotal + notebookCost;

    // Delivery charge
    const deliveryConfig = deliveryRates[appState.delivery] || deliveryRates.dhaka_inside;
    const deliveryPrice = selectedList.length > 0 ? deliveryConfig.price : 0;

    // Special Combo Discounts
    let discount = 0;
    if (appState.level === 'hsc' && selectedList.length >= 9) {
      discount = 300; // HSC Full 9-khata super combo discount (৳4,350 -> ৳4,050)
    } else if (appState.level === 'ssc' && selectedList.length >= 5) {
      discount = 150; // SSC Full 5-khata combo discount (৳2,200 -> ৳2,050)
    } else if (selectedList.length >= 4) {
      discount = 100; // 4+ subjects discount
    } else if (selectedList.length >= 3) {
      discount = 50;  // 3 subjects discount
    }

    const grandTotal = Math.max(0, subtotal - discount + deliveryPrice);

    // Update Summary List in DOM
    if (summaryItemsList) {
      summaryItemsList.innerHTML = '';
      if (selectedList.length === 0) {
        summaryItemsList.innerHTML = `<li class="summary-item" style="color: var(--text-muted); justify-content: center;">${i18n[appState.lang].noSubjectSelected}</li>`;
      } else {
        selectedList.forEach(item => {
          const li = document.createElement('li');
          li.className = 'summary-item';
          li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">৳${item.price}</span>
          `;
          summaryItemsList.appendChild(li);
        });

        // Add physical notebooks line item if included
        if (appState.includeNotebooks && notebookCost > 0) {
          const khataLi = document.createElement('li');
          khataLi.className = 'summary-item';
          khataLi.style.color = 'var(--text-highlight)';
          khataLi.innerHTML = `
            <span class="item-name">📓 নতুন প্র্যাকটিক্যাল খাতা (${selectedList.length}টি × ৳১০০)</span>
            <span class="item-price">৳${notebookCost}</span>
          `;
          summaryItemsList.appendChild(khataLi);
        }
      }
    }

    if (subtotalElem) subtotalElem.textContent = `৳${subtotal}`;
    if (deliveryElem) deliveryElem.textContent = `৳${deliveryPrice}`;
    
    if (discountRow) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        if (discountElem) discountElem.textContent = `-৳${discount}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (grandTotalElem) grandTotalElem.textContent = `৳${grandTotal}`;

    // Update buttons data
    updateOrderButtonLinks(selectedList, writingSubtotal, notebookCost, discount, deliveryPrice, grandTotal);
  }

  // --- Build WhatsApp & Messenger Dynamic Messages ---
  function updateOrderButtonLinks(selectedList, writingSubtotal, notebookCost, discount, deliveryPrice, grandTotal) {
    if (!waBtn) return;

    const levelText = appState.level.toUpperCase();
    const groupText = appState.group.charAt(0).toUpperCase() + appState.group.slice(1);
    const versionText = appState.version === 'english' ? 'English Version' : 'বাংলা ভার্সন';
    const khataStatus = appState.includeNotebooks 
      ? `হ্যাঁ, নতুন প্র্যাকটিক্যাল খাতা সহ (${selectedList.length}টি = ৳${notebookCost})` 
      : 'শুধু লেখা ও চিত্র (নিজের খাতা পাঠাব)';
    const subListText = selectedList.map(s => `• ${s.name} (৳${s.price})`).join('\n');
    const deliveryLocationName = deliveryRates[appState.delivery]?.nameBn || 'ঢাকা';

    const orderMsg = 
`*প্র্যাকটিক্যাল খাতা হেল্প পয়েন্ট — নতুন অর্ডার রিকোয়েস্ট*
━━━━━━━━━━━━━━━━━
📚 *পরীক্ষা:* ${levelText} (${groupText} বিভাগ)
📖 *ভার্সন:* ${versionText}
📓 *খাতা সরবরাহ:* ${khataStatus}
📍 *ডেলিভারি এলাকা:* ${deliveryLocationName}

📝 *নির্বাচিত বিষয়সমূহ:*
${subListText || 'কোনো বিষয় নির্বাচন করা হয়নি'}

━━━━━━━━━━━━━━━━━
✍️ লেখার সাবটোটাল: ৳${writingSubtotal}
📓 খাতার মূল্য: ৳${notebookCost}
🏷️ প্যাকেজ ডিসকাউন্ট: ৳${discount}
🚚 ডেলিভারি চার্জ: ৳${deliveryPrice}
✨ *সর্বমোট প্রদেয়: ৳${grandTotal}*
━━━━━━━━━━━━━━━━━
আমি এই খাতাগুলো অর্ডার করতে চাই। বিস্তারিত জানিয়ে কনফার্ম করবেন কি?`;

    if (waBtn) {
      const encodedMsg = encodeURIComponent(orderMsg);
      // Practical Khata Help Point WhatsApp Order Link (01942470982)
      waBtn.href = `https://wa.me/8801942470982?text=${encodedMsg}`;
      waBtn.target = '_blank';
    }

    if (fbBtn) {
      // Official Practical Khata Help Point Facebook Messenger
      fbBtn.href = `https://m.me/61582613050185`;
      fbBtn.target = '_blank';
      fbBtn.onclick = (e) => {
        if (appState.selectedSubjects.length === 0) {
          e.preventDefault();
          showToast('দয়া করে অন্তত একটি বিষয় নির্বাচন করুন!');
          return;
        }
        navigator.clipboard.writeText(orderMsg).then(() => {
          showToast('অর্ডার বিবরণ কপি করা হয়েছে! মেসেঞ্জারে পেস্ট করে পাঠিয়ে দিন।');
        });
      };
    }
  }

  // Add robust click handler for WhatsApp Order button
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      if (appState.selectedSubjects.length === 0) {
        e.preventDefault();
        showToast('দয়া করে অন্তত একটি বিষয় নির্বাচন করুন!');
        return;
      }
      updateCalculation();
      if (!waBtn.href || waBtn.href === '#' || waBtn.href.endsWith('#')) {
        e.preventDefault();
        window.open('https://wa.me/8801942470982', '_blank');
      }
    });
  }

  // --- Event Listeners for Filter Inputs ---
  document.querySelectorAll('input[name="academicLevel"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.level = e.target.value;
      appState.selectedSubjects = []; // Customer selects their own subjects; no auto-add
      renderSubjects();
    });
  });

  document.querySelectorAll('input[name="academicGroup"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.group = e.target.value;
      appState.selectedSubjects = []; // Customer selects their own subjects; no auto-add
      renderSubjects();
    });
  });

  document.querySelectorAll('input[name="includeNotebooks"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.includeNotebooks = (e.target.value === 'yes');
      updateCalculation();
    });
  });

  document.querySelectorAll('input[name="khataVersion"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.version = e.target.value;
      updateCalculation();
    });
  });

  document.querySelectorAll('input[name="handwritingQuality"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.handwriting = e.target.value;
      updateCalculation();
    });
  });

  document.querySelectorAll('input[name="deliveryRegion"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.delivery = e.target.value;
      updateCalculation();
    });
  });

  // --- Language Switcher ---
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      appState.lang = appState.lang === 'bn' ? 'en' : 'bn';
      localStorage.setItem('pkhp_lang', appState.lang);
      applyLanguage();
    });
  }

  function applyLanguage() {
    const lang = appState.lang;
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        elem.textContent = i18n[lang][key];
      }
    });

    if (langToggleBtn) {
      const langText = langToggleBtn.querySelector('.lang-text');
      if (langText) {
        langText.textContent = lang === 'bn' ? 'EN' : 'বাং';
      } else {
        langToggleBtn.textContent = lang === 'bn' ? 'EN' : 'বাং';
      }
    }

    renderSubjects();
  }

  // --- Dark / Light Theme Switcher ---
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', appState.theme);
      localStorage.setItem('pkhp_theme', appState.theme);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeToggleBtn) return;
    if (appState.theme === 'dark') {
      themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
      themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }

  // --- Mobile Hamburger Menu ---
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // --- Real Samples Multi-Image Gallery & Lightbox Controller ---
  const sampleGalleries = {
    biology: {
      badge: 'জীববিজ্ঞান খাতা (বাস্তব ডেমো)',
      items: [
        {
          src: 'assets/images/pkhp_sample_hydra.jpg',
          title: 'চিত্র : পূর্ণাঙ্গ Hydra (স্থায়ী স্লাইড পর্যবেক্ষণ)',
          desc: 'কর্ষিকা, মুখছিদ্র, হাইপোস্টোম, মুকুল, শুক্রাশয় ও পদচাকতির স্পষ্ট পেন্সিল ড্রয়িং ও নির্ভুল বাংলা লেবেলিং।'
        },
        {
          src: 'assets/images/pkhp_sample_sargassum.jpg',
          title: 'চিত্র : সারগাসাম (Sargassum sp.) শৈবাল',
          desc: 'বায়ু প্রকোষ্ঠ, রিসেপ্টাকল, প্রাথমিক শাখা ও স্টাইপের পুঙ্খানুপুঙ্খ রেখাচিত্র ও অফিসিয়াল বোর্ড খাতা উপস্থাপন।'
        },
        {
          src: 'assets/images/pkhp_sample_muscle.jpg',
          title: 'চিত্র : মসৃণ পেশি ও হৃদপেশি কলা',
          desc: 'সারকোলেমা, নিউক্লিয়াস, মায়োফাইব্রিল, ইন্টারক্যালেটেড ডিস্ক ও অনুপ্রস্থ রেখার অণুবীক্ষণিক পেন্সিল স্কেচ।'
        },
        {
          src: 'assets/images/pkhp_sample_squilla.jpg',
          title: 'চিত্র : স্কুইলা (Squilla mantis) অঙ্গসংস্থান',
          desc: 'অ্যান্টেনা, ক্যারাপেস, বক্ষপদ, উদর উপাঙ্গ ও টেলসনের পুঙ্খানুপুঙ্খ পেন্সিল ড্রয়িং ও বৈজ্ঞানিক চিহ্নিতকরণ।'
        },
        {
          src: 'assets/images/pkhp_sample_physalia.jpg',
          title: 'চিত্র : Physalia physalis (পর্তুগিজ ম্যান-অব-ওয়ার)',
          desc: 'ক্রেস্ট বা পাল, নিউমাটোফোর, গোনোজুয়েড, ড্যাক্টাইলোজুয়েড, গ্যাস্ট্রোজুয়েড ও নিমাটোসিস্ট সহ কর্ষিকার সূক্ষ্ম পেন্সিল স্কেচ।'
        },
        {
          src: 'assets/images/pkhp_sample_octopus.jpg',
          title: 'চিত্র : Octopus punctatus (অক্টোপাস)',
          desc: 'মস্তক, মৌখিক বাহু, চোষক, হেক্টোকটিল, ফানেল, চোখ ও ধড়ের নিখুঁত পেন্সিল আর্ট ও বাংলা লেবেলিং।'
        },
        {
          src: 'assets/images/pkhp_sample_cancer.jpg',
          title: 'চিত্র : Cancer pagurus (কাঁকড়া)',
          desc: 'অ্যান্টিনা, চেলা (দাঁড়া), পুঞ্জাক্ষী, ক্যারাপেস ও বক্ষউপাঙ্গের বাস্তব খাতার নিখুঁত রেখাচিত্র।'
        },
        {
          src: 'assets/images/pkhp_sample_marsilea.jpg',
          title: 'চিত্র : Marsilea উদ্ভিদ ও মূলের প্রস্থচ্ছেদ',
          desc: 'পাতা, স্পোরোকার্প, গ্রন্থিকন্দ, অস্থানিক মূল, কর্টেক্স, মেটাজাইলেম ও এন্ডোডার্মিসের পরিচ্ছন্ন ডাবল চিত্র।'
        },
        {
          src: 'assets/images/pkhp_sample_cycas.jpg',
          title: 'চিত্র : Cycas পত্রকের প্রস্থচ্ছেদ',
          desc: 'জাইলেম, ফ্লোয়েম, কিউটিকল, ঊর্ধ্বত্বক, প্যালিসেড, ট্র্যান্সফিউশন টিস্যু ও স্টোমার অ্যানাটমিক স্কেচ।'
        },
        {
          src: 'assets/images/pkhp_sample_microscope.jpg',
          title: 'চিত্র : যৌগিক অণুবীক্ষণ যন্ত্র (A Compound Microscope)',
          desc: 'আইপিস, ড্র-টিউব, অবজেক্টিভ, কোর্স ও ফাইন এডজাস্টমেন্ট স্ক্রু, স্টেজ, ডায়াফ্রাম ও মিরর সহ নিখুঁত রেখাচিত্র।'
        },
        {
          src: 'assets/images/pkhp_sample_epithelial.jpg',
          title: 'চিত্র : বিভিন্ন ধরনের আবরণী কলা (Epithelial Tissue)',
          desc: 'আইশাকার (Squamous), ঘনকাকার (Cuboidal), স্তম্ভাকার (Columnar), স্তরীভূত ও রূপান্তরশীল আবরণী কলার নিখুঁত তুলনামূলক চিত্র।'
        },
        {
          src: 'assets/images/pkhp_sample_humancell.jpg',
          title: 'চিত্র : একটি আদর্শ মানবকোষ ও অঙ্গাণুসমূহ (Typical Human Cell)',
          desc: 'মাইটোকনড্রিয়া, গলগি বডি, এন্ডোপ্লাজমিক রেটিকুলাম, নিউক্লিয়াস ও কোষঝিল্লির রঙিন ও সুস্পষ্ট অ্যানাটমিক ড্রয়িং।'
        }
      ]
    },
    physics: {
      badge: 'পদার্থবিজ্ঞান গ্রাফ ও ছক (৫টি বাস্তব ডেমো)',
      items: [
        {
          src: 'assets/images/pkhp_physics_spherometer.jpg',
          title: 'চিত্র : স্ফেরোমিটার ও লেন্সের বক্রতার ব্যাসার্ধ (Spherometer)',
          desc: 'স্ফেরোমিটার স্কেল, সমতল কাঁচ প্লেট পর্যবেক্ষণ, উত্তল লেন্স স্থাপন ও তিন পায়ের মধ্যবর্তী দূরত্বের নির্ভুল জ্যামিতিক চিত্র।'
        },
        {
          src: 'assets/images/pkhp_physics_flywheel.jpg',
          title: 'চিত্র : ফ্লাই হুইল ও জড়তার ভ্রামক নির্ণয় (Flywheel Moment of Inertia)',
          desc: 'বল বিয়ারিং, সূচক, এক্সেল, রশি-ভর সংযুক্তি এবং দেয়ালের দাগ সম্বলিত ফ্লাই হুইলের নিখুঁত প্র্যাকটিক্যাল ড্রয়িং।'
        },
        {
          src: 'assets/images/pkhp_physics_spring.jpg',
          title: 'চিত্র : স্ট্যান্ড ও স্কেলসহ স্প্রিং - হুকের সূত্র (Spring Constant)',
          desc: 'স্প্রিং ধ্রুবক ও বল ধ্রুবক নির্ণয়ের স্ট্যান্ডসহ স্প্রিং এবং মিলিমিটার স্কেলসহ স্প্রিং ও ভর ঝুলানোর রেখাচিত্র।'
        },
        {
          src: 'assets/images/pkhp_physics_inclined_plane.jpg',
          title: 'চিত্র : আনত তল ও শক্তির নিত্যতা পরীক্ষা (Inclined Plane Experiment)',
          desc: '৫০ সেমি থেকে ২৫০ সেমি দূরত্ব নির্দেশক দাগ, উচ্চতা ও ঢাল পরিমাপ সম্বলিত আনত তলের স্পষ্ট চিত্র।'
        },
        {
          src: 'assets/images/physics_sample.jpg',
          title: 'চিত্র : ভার্নিয়ার ক্যালিপার ও তারের রোধ গ্রাফ ছক (Vernier & Resistance Graph)',
          desc: 'সঠিক ভার্নিয়ার স্কেল অঙ্কন, সার্কিট ডায়াগ্রাম এবং ওহমের সূত্রের মান অনুযায়ী পারফেক্ট গ্রাফ ও রিডিং ছক।'
        }
      ]
    },
    chemistry: {
      badge: 'রসায়ন টাইট্রেশন ও দ্রবণ',
      items: [
        {
          src: 'assets/images/chemistry_sample.jpg',
          title: 'অ্যাসিড-ক্ষার টাইট্রেশন ও লবণ পরীক্ষা',
          desc: 'বুলেট টেবিল রিডিং, রঙের নির্দেশক পর্যবেক্ষণ ও রাসায়নিক সমীকরণ সম্বলিত পরিচ্ছন্ন খাতা।'
        }
      ]
    }
  };

  // State
  let currentGalleryKey = 'biology';
  let currentItemIndex = 0;
  let cardBioIndex = 0;
  let cardPhysIndex = 0;

  // On-card Biology Slider Elements
  const biologySampleCard = document.getElementById('biologySampleCard');
  const biologyCardThumb = document.getElementById('biologyCardThumb');
  const bioCardPrev = document.getElementById('bioCardPrev');
  const bioCardNext = document.getElementById('bioCardNext');
  const bioCardDots = document.getElementById('bioCardDots');
  const bioCardTag = document.getElementById('bioCardTag');

  function updateCardBioSlide(index) {
    const bioItems = sampleGalleries.biology.items;
    if (index < 0) index = bioItems.length - 1;
    if (index >= bioItems.length) index = 0;
    cardBioIndex = index;

    if (biologyCardThumb) {
      biologyCardThumb.src = bioItems[cardBioIndex].src;
    }
    if (bioCardDots) {
      const dots = bioCardDots.querySelectorAll('.card-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === cardBioIndex);
      });
    }
    if (bioCardTag) {
      bioCardTag.textContent = `জীববিজ্ঞান খাতা (ডেমো ${cardBioIndex + 1}/${bioItems.length})`;
    }
  }

  function initCardDots() {
    if (!bioCardDots) return;
    const bioItems = sampleGalleries.biology.items;
    bioCardDots.innerHTML = bioItems.map((_, idx) => `
      <span class="card-dot ${idx === cardBioIndex ? 'active' : ''}" data-index="${idx}"></span>
    `).join('');

    bioCardDots.querySelectorAll('.card-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        updateCardBioSlide(idx);
      });
    });
  }

  if (bioCardPrev) {
    bioCardPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCardBioSlide(cardBioIndex - 1);
    });
  }

  if (bioCardNext) {
    bioCardNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCardBioSlide(cardBioIndex + 1);
    });
  }

  initCardDots();

  // On-card Physics Slider Elements
  const physicsSampleCard = document.getElementById('physicsSampleCard');
  const physicsCardThumb = document.getElementById('physicsCardThumb');
  const physicsCardPrev = document.getElementById('physicsCardPrev');
  const physicsCardNext = document.getElementById('physicsCardNext');
  const physicsCardDots = document.getElementById('physicsCardDots');
  const physicsCardTag = document.getElementById('physicsCardTag');

  function updateCardPhysSlide(index) {
    const physItems = sampleGalleries.physics.items;
    if (index < 0) index = physItems.length - 1;
    if (index >= physItems.length) index = 0;
    cardPhysIndex = index;

    if (physicsCardThumb) {
      physicsCardThumb.src = physItems[cardPhysIndex].src;
    }
    if (physicsCardDots) {
      const dots = physicsCardDots.querySelectorAll('.card-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === cardPhysIndex);
      });
    }
    if (physicsCardTag) {
      physicsCardTag.textContent = `পদার্থবিজ্ঞান খাতা (ডেমো ${cardPhysIndex + 1}/${physItems.length})`;
    }
  }

  function initCardPhysDots() {
    if (!physicsCardDots) return;
    const physItems = sampleGalleries.physics.items;
    physicsCardDots.innerHTML = physItems.map((_, idx) => `
      <span class="card-dot ${idx === cardPhysIndex ? 'active' : ''}" data-index="${idx}"></span>
    `).join('');

    physicsCardDots.querySelectorAll('.card-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        updateCardPhysSlide(idx);
      });
    });
  }

  if (physicsCardPrev) {
    physicsCardPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCardPhysSlide(cardPhysIndex - 1);
    });
  }

  if (physicsCardNext) {
    physicsCardNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCardPhysSlide(cardPhysIndex + 1);
    });
  }

  initCardPhysDots();

  // --- Lightbox Modal Elements ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBadge = document.getElementById('lightboxBadge');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxSubCaption = document.getElementById('lightboxSubCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxThumbs = document.getElementById('lightboxThumbs');

  function renderGalleryModalItem(index) {
    const gallery = sampleGalleries[currentGalleryKey];
    if (!gallery || !gallery.items || gallery.items.length === 0) return;

    if (index < 0) index = gallery.items.length - 1;
    if (index >= gallery.items.length) index = 0;
    currentItemIndex = index;

    const item = gallery.items[currentItemIndex];
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = item.title;
    if (lightboxSubCaption) lightboxSubCaption.textContent = item.desc || '';
    if (lightboxBadge) lightboxBadge.textContent = gallery.badge;

    if (lightboxCounter) {
      lightboxCounter.textContent = `ছবি ${currentItemIndex + 1} / ${gallery.items.length}`;
      lightboxCounter.style.display = gallery.items.length > 1 ? 'inline-block' : 'none';
    }

    if (lightboxPrevBtn && lightboxNextBtn) {
      const showArrows = gallery.items.length > 1;
      lightboxPrevBtn.style.display = showArrows ? 'flex' : 'none';
      lightboxNextBtn.style.display = showArrows ? 'flex' : 'none';
    }

    // Render / update thumbnails
    if (lightboxThumbs) {
      if (gallery.items.length > 1) {
        lightboxThumbs.style.display = 'flex';
        lightboxThumbs.innerHTML = gallery.items.map((it, idx) => `
          <img src="${it.src}" alt="${it.title}" class="lightbox-thumb ${idx === currentItemIndex ? 'active' : ''}" data-index="${idx}" title="${it.title}">
        `).join('');

        lightboxThumbs.querySelectorAll('.lightbox-thumb').forEach(thumb => {
          thumb.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index') || '0', 10);
            renderGalleryModalItem(idx);
          });
        });
      } else {
        lightboxThumbs.style.display = 'none';
        lightboxThumbs.innerHTML = '';
      }
    }
  }

  function openGalleryModal(galleryKey, startIdx = 0) {
    if (!sampleGalleries[galleryKey]) return;
    currentGalleryKey = galleryKey;
    renderGalleryModalItem(startIdx);
    if (lightboxModal) lightboxModal.classList.add('open');
  }

  // Card click triggers
  document.querySelectorAll('.sample-item').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open if clicked on mini nav button
      if (e.target.closest('.card-nav-btn') || e.target.closest('.card-dot')) return;

      const galleryKey = card.getAttribute('data-gallery') || 'biology';
      let startIdx = 0;
      if (galleryKey === 'biology') startIdx = cardBioIndex;
      else if (galleryKey === 'physics') startIdx = cardPhysIndex;
      openGalleryModal(galleryKey, startIdx);
    });
  });

  // Lightbox Navigation Listeners
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderGalleryModalItem(currentItemIndex - 1);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderGalleryModalItem(currentItemIndex + 1);
    });
  }

  // Keyboard navigation (ArrowLeft / ArrowRight / Escape)
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('open')) return;

    if (e.key === 'ArrowLeft') {
      renderGalleryModalItem(currentItemIndex - 1);
    } else if (e.key === 'ArrowRight') {
      renderGalleryModalItem(currentItemIndex + 1);
    } else if (e.key === 'Escape') {
      lightboxModal.classList.remove('open');
    }
  });

  // Touch Swipe for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe Right -> Prev
        renderGalleryModalItem(currentItemIndex - 1);
      } else {
        // Swipe Left -> Next
        renderGalleryModalItem(currentItemIndex + 1);
      }
    }
  }

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('open');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('open');
      }
    });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-item').forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- Package Card Pre-selectors ---
  document.querySelectorAll('.btn-select-package').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const level = btn.dataset.level || 'hsc';
      const group = btn.dataset.group || 'science';
      const subjects = (btn.dataset.subjects || '').split(',').filter(Boolean);
      
      // Update Level
      appState.level = level;
      const levelRadio = document.querySelector(`input[name="academicLevel"][value="${level}"]`);
      if (levelRadio) levelRadio.checked = true;

      // Update Group
      appState.group = group;
      const groupRadio = document.querySelector(`input[name="academicGroup"][value="${group}"]`);
      if (groupRadio) groupRadio.checked = true;

      // Update includeNotebooks
      appState.includeNotebooks = true;
      const nbRadio = document.querySelector(`input[name="includeNotebooks"][value="yes"]`);
      if (nbRadio) nbRadio.checked = true;

      // Update Subjects
      if (subjects.length > 0) {
        appState.selectedSubjects = subjects;
      }
      
      renderSubjects();
      // Smooth scroll to calculator
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
      showToast('প্যাকেজটি ক্যালকুলেটরে সিলেক্ট করা হয়েছে!');
    });
  });

  // --- Direct Order Modal ---
  const orderModal = document.getElementById('orderModal');
  const openModalBtn = document.getElementById('btnOpenOrderModal');
  const closeModalBtn = document.getElementById('orderModalClose');
  const orderForm = document.getElementById('directOrderForm');

  if (openModalBtn && orderModal) {
    openModalBtn.addEventListener('click', () => {
      if (appState.selectedSubjects.length === 0) {
        showToast('দয়া করে অন্তত একটি বিষয় নির্বাচন করুন!');
        return;
      }
      // Populate modal summary preview
      const modalSubjectNames = document.getElementById('modalSelectedSubjects');
      if (modalSubjectNames) {
        const currentSubjects = getCurrentSubjectsList();
        const names = appState.selectedSubjects
          .map(id => currentSubjects.find(s => s.id === id)?.nameBn || id)
          .join(', ');
        modalSubjectNames.textContent = names + (appState.includeNotebooks ? ` (নতুন ${appState.selectedSubjects.length}টি খাতা সহ)` : '');
      }
      orderModal.classList.add('open');
    });
  }

  if (closeModalBtn && orderModal) {
    closeModalBtn.addEventListener('click', () => {
      orderModal.classList.remove('open');
    });
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) orderModal.classList.remove('open');
    });
  }

  // Handle Order Form Submit (Sends instant email to hello.nazzmul@gmail.com & saves locally)
  if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('orderSubmitBtn') || orderForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: pkhpSpin 1s linear infinite; display: inline-block; vertical-align: middle; margin-right: 8px;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path></svg>
          অর্ডার প্রসেস হচ্ছে... অপেক্ষা করুন
        `;
      }

      const studentName = document.getElementById('orderStudentName')?.value || 'গ্রাহক';
      const studentPhone = document.getElementById('orderStudentPhone')?.value || '';
      const studentCollege = document.getElementById('orderStudentCollege')?.value || 'উল্লেখ নেই';
      const studentAddress = document.getElementById('orderStudentAddress')?.value || '';
      const studentNotes = document.getElementById('orderStudentNotes')?.value || 'নেই';

      const orderId = 'PKHP-' + Math.floor(100000 + Math.random() * 900000);

      // Extract current live calculator details
      const currentSubjects = getCurrentSubjectsList();
      let writingSubtotal = 0;
      const selectedList = [];

      appState.selectedSubjects.forEach(subId => {
        const subjectObj = currentSubjects.find(s => s.id === subId);
        if (subjectObj) {
          let price = subjectObj.price;
          if (appState.handwriting === 'calligraphy') price += 40;
          if (appState.version === 'english') price += 30;
          writingSubtotal += price;
          selectedList.push({
            id: subId,
            name: appState.lang === 'bn' ? subjectObj.nameBn : subjectObj.nameEn,
            price: price
          });
        }
      });

      const notebookCost = appState.includeNotebooks ? selectedList.length * 100 : 0;
      const subtotal = writingSubtotal + notebookCost;
      const deliveryConfig = deliveryRates[appState.delivery] || deliveryRates.dhaka_inside;
      const deliveryPrice = selectedList.length > 0 ? deliveryConfig.price : 0;

      let discount = 0;
      if (appState.level === 'hsc' && selectedList.length >= 9) {
        discount = 300;
      } else if (appState.level === 'ssc' && selectedList.length >= 5) {
        discount = 150;
      } else if (selectedList.length >= 4) {
        discount = 100;
      } else if (selectedList.length >= 3) {
        discount = 50;
      }

      const grandTotal = Math.max(0, subtotal - discount + deliveryPrice);
      const deliveryLocationName = deliveryRates[appState.delivery]?.nameBn || 'ঢাকা';
      const levelText = appState.level.toUpperCase();
      const groupText = appState.group.charAt(0).toUpperCase() + appState.group.slice(1);
      const versionText = appState.version === 'english' ? 'English Version' : 'বাংলা ভার্সন';
      const khataStatus = appState.includeNotebooks 
        ? `হ্যাঁ, নতুন প্র্যাকটিক্যাল খাতা সহ (${selectedList.length}টি = ৳${notebookCost})` 
        : 'শুধু লেখা ও চিত্র (নিজের খাতা পাঠাব)';

      const timeString = new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' });

      // Update hidden inputs if present
      const hOrderId = document.getElementById('hiddenOrderId');
      if (hOrderId) hOrderId.value = orderId;
      const hTotal = document.getElementById('hiddenGrandTotal');
      if (hTotal) hTotal.value = '৳' + grandTotal;
      const hSubs = document.getElementById('hiddenSubjects');
      if (hSubs) hSubs.value = selectedList.map(s => s.name).join(', ');

      // Save order to Local Storage Database (Guarantees no order is ever lost!)
      try {
        const existingOrders = JSON.parse(localStorage.getItem('pkhp_orders_list') || '[]');
        existingOrders.unshift({
          orderId,
          studentName,
          studentPhone,
          studentCollege,
          studentAddress,
          studentNotes,
          level: `${levelText} (${groupText})`,
          subjects: selectedList.map(s => `${s.name} (৳${s.price})`),
          khataStatus,
          deliveryLocationName,
          grandTotal: `৳${grandTotal}`,
          status: 'pending',
          adminNotes: '',
          timestamp: timeString
        });
        localStorage.setItem('pkhp_orders_list', JSON.stringify(existingOrders));
      } catch (e) {
        console.warn('Storage save warning:', e);
      }

      const emailPayload = {
        _subject: `📦 নতুন প্র্যাকটিক্যাল খাতা অর্ডার #${orderId} - ${studentName} (৳${grandTotal})`,
        _template: 'table',
        _captcha: 'false',
        'অর্ডার আইডি': orderId,
        'শিক্ষার্থীর নাম': studentName,
        'মোবাইল ফোন নম্বর': studentPhone,
        'কলেজ / স্কুল': studentCollege,
        'ডেলিভারি ঠিকানা': studentAddress,
        'বিশেষ নির্দেশনা': studentNotes,
        'পরীক্ষার স্তর': `${levelText} (${groupText} বিভাগ)`,
        'ভার্সন': versionText,
        'লেখার মান': appState.handwriting === 'calligraphy' ? 'প্রিমিয়াম ক্যালিগ্রাফি' : 'স্ট্যান্ডার্ড',
        'নতুন খাতা সরবরাহ': khataStatus,
        'ডেলিভারি এলাকা': deliveryLocationName,
        'নির্বাচিত বিষয়সমূহ': selectedList.map(s => `${s.name} (৳${s.price})`).join(', '),
        'লেখার সাবটোটাল': `৳${writingSubtotal}`,
        'খাতার মূল্য': `৳${notebookCost}`,
        'প্যাকেজ ছাড়': `৳${discount}`,
        'ডেলিভারি চার্জ': `৳${deliveryPrice}`,
        'সর্বমোট বিল (Grand Total)': `৳${grandTotal}`,
        'তারিখ ও সময়': timeString
      };

      // Send to FormSubmit
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000);

        await fetch('https://formsubmit.co/ajax/hello.nazzmul@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
      } catch (err) {
        console.warn('FormSubmit notification notice:', err);
      }

      // Pre-fill WhatsApp message with complete order details for 01942470982
      const subjectsDetailText = selectedList.map(s => `  • ${s.name} (৳${s.price})`).join('\n');
      const waRawMsg = 
`*📦 নতুন খাতা অর্ডার — প্র্যাকটিক্যাল খাতা হেল্প পয়েন্ট*
━━━━━━━━━━━━━━━━━━━━━━━━━━
🆔 *অর্ডার আইডি:* ${orderId}
👤 *শিক্ষার্থীর নাম:* ${studentName}
📞 *মোবাইল নম্বর:* ${studentPhone}
🏫 *প্রতিষ্ঠান:* ${studentCollege}
📍 *ডেলিভারি ঠিকানা:* ${studentAddress}
${studentNotes && studentNotes !== 'নেই' ? `📝 *বিশেষ নোট:* ${studentNotes}\n` : ''}
📚 *পরীক্ষা:* ${levelText} (${groupText} বিভাগ)
📖 *ভার্সন:* ${versionText}
✍️ *লেখার ধরণ:* ${appState.handwriting === 'calligraphy' ? 'প্রিমিয়াম ক্যালিগ্রাফি' : 'স্ট্যান্ডার্ড'}
📓 *খাতা সরবরাহ:* ${khataStatus}

📋 *নির্বাচিত বিষয়সমূহ:*
${subjectsDetailText}

🚚 *ডেলিভারি এলাকা:* ${deliveryLocationName} (৳${deliveryPrice})
${discount > 0 ? `🏷️ *প্যাকেজ ছাড়:* -৳${discount}\n` : ''}✨ *সর্বমোট প্রদেয় বিল:* ৳${grandTotal} (ক্যাশ অন ডেলিভারি)
━━━━━━━━━━━━━━━━━━━━━━━━━━
আমি ওয়েবসাইটে অর্ডারটি প্রস্তুত করেছি। দয়া করে আমার খাতাগুলো কনফার্ম করুন।`;

      const waConfirmationMsg = encodeURIComponent(waRawMsg);
      const waDirectUrl = `https://wa.me/8801942470982?text=${waConfirmationMsg}`;

      // Automatically launch WhatsApp with order details in a new window/tab
      try {
        const waWindow = window.open(waDirectUrl, '_blank');
        if (!waWindow || waWindow.closed || typeof waWindow.closed === 'undefined') {
          console.log('Browser popup handled; direct WhatsApp button visible on screen');
        }
      } catch (err) {
        console.warn('Auto WhatsApp popup notice:', err);
      }

      // Render Clean Order Confirmation Screen: "Order Successful!"
      const modalBody = orderModal.querySelector('.modal-body');
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center; padding: 0.75rem 0;">
            <div style="width: 65px; height: 65px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); border: 2px solid rgba(16, 185, 129, 0.4); color: var(--emerald); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.9rem auto;">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            
            <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.35rem; color: var(--text-main);">Order Successful!</h3>
            
            <div style="display: inline-block; padding: 0.3rem 0.95rem; border-radius: var(--radius-full); background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); margin-bottom: 1.15rem; font-size: 0.88rem;">
              Order ID: <strong style="color: var(--primary-light);">${orderId}</strong>
            </div>

            <!-- Order Summary Details -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem; text-align: left; margin-bottom: 1.15rem; font-size: 0.86rem; line-height: 1.65;">
              <div style="margin-bottom: 0.35rem;"><strong>👤 ${appState.lang === 'en' ? 'Student' : 'শিক্ষার্থী'}:</strong> ${studentName}</div>
              <div style="margin-bottom: 0.35rem;"><strong>📞 ${appState.lang === 'en' ? 'Mobile' : 'মোবাইল'}:</strong> ${studentPhone}</div>
              <div style="margin-bottom: 0.35rem;"><strong>🏫 ${appState.lang === 'en' ? 'Institution' : 'প্রতিষ্ঠান'}:</strong> ${studentCollege}</div>
              <div style="margin-bottom: 0.35rem;"><strong>📍 ${appState.lang === 'en' ? 'Delivery Address' : 'ডেলিভারি ঠিকানা'}:</strong> ${studentAddress}</div>
              <div style="margin-bottom: 0.35rem;"><strong>📚 ${appState.lang === 'en' ? 'Selected Notebooks' : 'নির্বাচিত খাতা'}:</strong> ${selectedList.map(s => s.name).join(', ')} (${khataStatus})</div>
              <div style="margin-bottom: 0.35rem; color: var(--emerald); font-weight: 700; font-size: 0.95rem;"><strong>💰 ${appState.lang === 'en' ? 'Total Bill' : 'সর্বমোট বিল'}:</strong> ৳${grandTotal} (${appState.lang === 'en' ? 'Cash on delivery' : 'ক্যাশ অন ডেলিভারি'})</div>
            </div>

            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.15rem; line-height: 1.5;">
              ${appState.lang === 'en' ? 'Our team will contact you quickly by phone and the notebook work will begin.' : 'আমাদের টিম দ্রুত আপনার সাথে ফোনে যোগাযোগ করবে এবং খাতার কাজ শুরু হবে।'}
            </p>

            <div style="display: flex; gap: 0.65rem; justify-content: center; flex-wrap: wrap;">
              <a href="${waDirectUrl}" target="_blank" class="btn btn-wa" style="flex: 1; min-width: 180px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                ${appState.lang === 'en' ? 'Also confirm on WhatsApp' : 'WhatsApp-এও নিশ্চিত করুন'}
              </a>
              <button type="button" class="btn btn-secondary" onclick="location.reload()" style="flex: 1; min-width: 130px;">
                ${appState.lang === 'en' ? 'Create a new order' : 'নতুন অর্ডার'}
              </button>
            </div>
          </div>
        `;
      }
    });
  }

  // --- Scroll to Top Button ---
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  
  // --- Admin Orders Viewer & Management Portal Logic ---
  const floatingAdminBtn = document.getElementById('floatingAdminBtn');
  const adminOrdersModal = document.getElementById('adminOrdersModal');
  const openAdminOrdersBtn = document.getElementById('openAdminOrdersBtn');
  const adminOrdersModalClose = document.getElementById('adminOrdersModalClose');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const clearAdminOrdersBtn = document.getElementById('clearAdminOrdersBtn');
  const adminOrdersList = document.getElementById('adminOrdersList');
  const adminOrdersCount = document.getElementById('adminOrdersCount');
  const adminTotalRevenue = document.getElementById('adminTotalRevenue');
  const adminSearchInput = document.getElementById('adminSearchInput');
  const adminStatusFilter = document.getElementById('adminStatusFilter');

  // Admin Auth Gate Elements (ID: Nazmul, Pass: 15114600)
  const adminAuthLockBox = document.getElementById('adminAuthLockBox');
  const adminAuthenticatedContent = document.getElementById('adminAuthenticatedContent');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminLoginId = document.getElementById('adminLoginId');
  const adminLoginPass = document.getElementById('adminLoginPass');
  const adminLoginError = document.getElementById('adminLoginError');

  // Admin Edit Order Modal Elements
  const adminEditOrderModal = document.getElementById('adminEditOrderModal');
  const adminEditOrderForm = document.getElementById('adminEditOrderForm');
  const adminEditModalClose = document.getElementById('adminEditModalClose');
  const cancelEditOrderBtn = document.getElementById('cancelEditOrderBtn');
  const editOrderIdHidden = document.getElementById('editOrderIdHidden');
  const editOrderModalTitle = document.getElementById('editOrderModalTitle');
  const editStudentName = document.getElementById('editStudentName');
  const editStudentPhone = document.getElementById('editStudentPhone');
  const editStudentCollege = document.getElementById('editStudentCollege');
  const editStudentAddress = document.getElementById('editStudentAddress');
  const editGrandTotal = document.getElementById('editGrandTotal');
  const editOrderStatus = document.getElementById('editOrderStatus');
  const editAdminNotes = document.getElementById('editAdminNotes');

  // Pre-seed latest order (#PKHP-148859) if storage is empty so admin sees test order
  try {
    const existing = localStorage.getItem('pkhp_orders_list');
    if (!existing || JSON.parse(existing).length === 0) {
      localStorage.setItem('pkhp_orders_list', JSON.stringify([{
        orderId: 'PKHP-148859',
        studentName: 'Nazmul Islam',
        studentPhone: '01942470982',
        studentCollege: 'acc',
        studentAddress: 'Dhaka',
        studentNotes: 'জরুরি ডেলিভারি প্রয়োজন',
        level: 'HSC (Science)',
        subjects: ['পদার্থবিজ্ঞান ১ম ও ২য়', 'রসায়ন ১ম ও ২য়', 'জীববিজ্ঞান ১ম ও ২য়', 'উচ্চতর গণিত ১ম ও ২য়'],
        khataStatus: 'হ্যাঁ, নতুন প্র্যাকটিক্যাল খাতা সহ (4টি = ৳400)',
        deliveryLocationName: 'ঢাকা',
        grandTotal: '৳2020',
        status: 'pending',
        adminNotes: 'শিক্ষার্থীর সাথে ফোনে কথা হয়েছে',
        timestamp: new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' })
      }]));
    }
  } catch (e) {
    console.warn('Storage pre-seed notice:', e);
  }

  // Helper for Order Status Badge
  function getStatusBadge(status) {
    switch (status) {
      case 'processing':
        return '<span class="order-status-badge order-status-processing">🔵 কাজ চলছে (Processing)</span>';
      case 'delivered':
        return '<span class="order-status-badge order-status-delivered">🟢 ডেলিভার্ড সম্পন্ন (Delivered)</span>';
      case 'cancelled':
        return '<span class="order-status-badge order-status-cancelled">🔴 বাতিল (Cancelled)</span>';
      case 'pending':
      default:
        return '<span class="order-status-badge order-status-pending">🟡 অপেক্ষমাণ (Pending)</span>';
    }
  }

  // Render Admin Orders with Filter and Search
  function renderAdminOrders() {
    if (!adminOrdersList) return;
    const allOrders = JSON.parse(localStorage.getItem('pkhp_orders_list') || '[]');

    // Calculate total revenue from non-cancelled orders
    if (adminTotalRevenue) {
      const totalRev = allOrders
        .filter(ord => ord.status !== 'cancelled')
        .reduce((sum, ord) => {
          const num = parseInt((ord.grandTotal || '').replace(/[^0-9]/g, '')) || 0;
          return sum + num;
        }, 0);
      adminTotalRevenue.textContent = '৳' + totalRev.toLocaleString('bn-BD');
    }

    // Filter by search query and status
    const query = (adminSearchInput ? adminSearchInput.value : '').trim().toLowerCase();
    const statusVal = adminStatusFilter ? adminStatusFilter.value : 'all';

    const filtered = allOrders.filter(ord => {
      const matchStatus = (statusVal === 'all') || ((ord.status || 'pending') === statusVal);
      if (!matchStatus) return false;

      if (!query) return true;
      const searchable = [
        ord.orderId,
        ord.studentName,
        ord.studentPhone,
        ord.studentCollege,
        ord.studentAddress,
        ord.level,
        Array.isArray(ord.subjects) ? ord.subjects.join(' ') : ord.subjects,
        ord.adminNotes
      ].filter(Boolean).join(' ').toLowerCase();

      return searchable.includes(query);
    });

    if (adminOrdersCount) {
      if (filtered.length === allOrders.length) {
        adminOrdersCount.textContent = allOrders.length;
      } else {
        adminOrdersCount.textContent = `${filtered.length} (মোট: ${allOrders.length})`;
      }
    }

    if (filtered.length === 0) {
      adminOrdersList.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); font-size: 0.9rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <div>${allOrders.length === 0 ? 'এখনও কোনো অর্ডার রেকর্ড নেই।' : 'সার্চ বা ফিল্টারের সাথে মিলে কোনো অর্ডার পাওয়া যায়নি।'}</div>
        </div>
      `;
      return;
    }

    adminOrdersList.innerHTML = filtered.map(ord => {
      const cleanPhone = (ord.studentPhone || '').replace(/[^0-9]/g, '');
      const waMsg = encodeURIComponent(`হ্যালো ${ord.studentName || ''}, প্র্যাকটিক্যাল খাতা হেল্প পয়েন্ট থেকে আপনার অর্ডার #${ord.orderId} সম্পর্কে যোগাযোগ করছি।`);
      const status = ord.status || 'pending';

      return `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem; font-size: 0.85rem; line-height: 1.6; transition: border-color 0.2s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <strong style="color: var(--primary-light); font-size: 0.95rem; letter-spacing: 0.5px;">#${ord.orderId}</strong>
              ${getStatusBadge(status)}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${ord.timestamp || ''}</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.35rem 1rem; margin-bottom: 0.5rem;">
            <div><strong>👤 শিক্ষার্থী:</strong> ${ord.studentName || '—'}</div>
            <div><strong>📞 মোবাইল:</strong> <a href="tel:${ord.studentPhone}" style="color: var(--text-highlight); font-weight: 700;">${ord.studentPhone}</a></div>
            <div><strong>🏫 প্রতিষ্ঠান:</strong> ${ord.studentCollege || '—'}</div>
            <div><strong>📍 ডেলিভারি:</strong> ${ord.studentAddress || '—'}</div>
            <div><strong>🎓 বিভাগ:</strong> ${ord.level || '—'}</div>
            <div><strong>📓 খাতার ধরন:</strong> ${ord.khataStatus || '—'}</div>
          </div>

          <div style="margin-bottom: 0.35rem;">
            <strong>📚 বিষয়সমূহ:</strong> <span style="color: var(--text-secondary);">${Array.isArray(ord.subjects) ? ord.subjects.join(', ') : (ord.subjects || '—')}</span>
          </div>

          ${ord.studentNotes && ord.studentNotes !== 'নেই' ? `
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.35rem; font-style: italic;">
              <strong>📝 শিক্ষার্থীর নোট:</strong> ${ord.studentNotes}
            </div>
          ` : ''}

          ${ord.adminNotes ? `
            <div style="background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8; padding: 0.35rem 0.65rem; border-radius: 4px; margin-bottom: 0.5rem; font-size: 0.8rem; color: #38bdf8;">
              <strong>📌 অ্যাডমিন নোট:</strong> ${ord.adminNotes}
            </div>
          ` : ''}

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 0.65rem; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.65rem;">
            <div style="color: var(--emerald); font-weight: 800; font-size: 1rem;">
              সর্বমোট বিল: <span>${ord.grandTotal || '৳০'}</span>
            </div>

            <!-- Action buttons: Edit, Delete, Call, WhatsApp -->
            <div style="display: flex; gap: 0.45rem; flex-wrap: wrap;">
              <button type="button" class="btn btn-primary btn-sm admin-order-edit-btn" data-id="${ord.orderId}" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;">
                ✏️ এডিট
              </button>
              <button type="button" class="btn btn-secondary btn-sm admin-order-delete-btn" data-id="${ord.orderId}" style="font-size: 0.75rem; padding: 0.3rem 0.65rem; color: var(--rose); border-color: rgba(239, 68, 68, 0.35);">
                🗑️ ডিলিট
              </button>
              <a href="https://wa.me/88${cleanPhone}?text=${waMsg}" target="_blank" class="btn btn-wa btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;">
                WhatsApp
              </a>
              <a href="tel:${ord.studentPhone}" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;">
                কল
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Admin Security & Auth Logic (ID: Nazmul, Pass: 15114600) ---
  function isAdminLoggedIn() {
    return sessionStorage.getItem('pkhp_admin_logged_in') === 'true';
  }

  function updateAdminAuthUI() {
    const isLogged = isAdminLoggedIn();
    if (isLogged) {
      if (adminAuthLockBox) adminAuthLockBox.style.display = 'none';
      if (adminAuthenticatedContent) adminAuthenticatedContent.style.display = 'block';
      if (adminLogoutBtn) adminLogoutBtn.style.display = 'inline-flex';
      renderAdminOrders();
    } else {
      if (adminAuthLockBox) adminAuthLockBox.style.display = 'block';
      if (adminAuthenticatedContent) adminAuthenticatedContent.style.display = 'none';
      if (adminLogoutBtn) adminLogoutBtn.style.display = 'none';
      if (adminLoginError) adminLoginError.style.display = 'none';
      if (adminLoginId) adminLoginId.value = '';
      if (adminLoginPass) adminLoginPass.value = '';
      setTimeout(() => {
        if (adminLoginId) adminLoginId.focus();
      }, 150);
    }
  }

  // Handle Admin Login Submit
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredId = (adminLoginId ? adminLoginId.value : '').trim().toLowerCase();
      const enteredPass = (adminLoginPass ? adminLoginPass.value : '').trim();

      // Check credentials: ID: Nazmul, Pass: 15114600
      if (enteredId === 'nazmul' && enteredPass === '15114600') {
        sessionStorage.setItem('pkhp_admin_logged_in', 'true');
        if (adminLoginError) adminLoginError.style.display = 'none';
        updateAdminAuthUI();
        showToast('স্বাগতম Nazmul! অ্যাডমিন পোর্টালে সফলভাবে লগইন হয়েছে।');
      } else {
        if (adminLoginError) adminLoginError.style.display = 'block';
        if (adminLoginPass) {
          adminLoginPass.value = '';
          adminLoginPass.focus();
        }
      }
    });
  }

  // Handle Admin Logout
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('pkhp_admin_logged_in');
      updateAdminAuthUI();
      showToast('অ্যাডমিন পোর্টাল থেকে লগআউট করা হয়েছে।');
    });
  }

  // Open Admin Orders Modal Handler
  function openAdminModalHandler(e) {
    if (e && e.preventDefault) e.preventDefault();
    updateAdminAuthUI();
    if (adminOrdersModal) adminOrdersModal.classList.add('open');
  }

  // Floating Admin Button Trigger
  if (floatingAdminBtn) {
    floatingAdminBtn.addEventListener('click', openAdminModalHandler);
  }

  // Footer Secret Admin link trigger
  if (openAdminOrdersBtn) {
    openAdminOrdersBtn.addEventListener('click', openAdminModalHandler);
  }

  // Keyboard shortcut: Ctrl + Shift + A to open Admin Orders
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
      e.preventDefault();
      openAdminModalHandler();
    }
  });

  // URL Hash shortcut: visiting #admin opens Admin Orders
  if (window.location.hash === '#admin') {
    setTimeout(openAdminModalHandler, 300);
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
      openAdminModalHandler();
    }
  });

  // Close Admin Orders Modal
  if (adminOrdersModalClose && adminOrdersModal) {
    adminOrdersModalClose.addEventListener('click', () => {
      adminOrdersModal.classList.remove('open');
    });
    adminOrdersModal.addEventListener('click', (e) => {
      if (e.target === adminOrdersModal) adminOrdersModal.classList.remove('open');
    });
  }

  // Search and Filter Listeners
  if (adminSearchInput) {
    adminSearchInput.addEventListener('input', () => {
      renderAdminOrders();
    });
  }
  if (adminStatusFilter) {
    adminStatusFilter.addEventListener('change', () => {
      renderAdminOrders();
    });
  }

  // --- Edit & Delete Single Order Functionality ---
  function openEditModal(orderId) {
    const orders = JSON.parse(localStorage.getItem('pkhp_orders_list') || '[]');
    const ord = orders.find(o => o.orderId === orderId);
    if (!ord) return;

    if (editOrderIdHidden) editOrderIdHidden.value = ord.orderId;
    if (editOrderModalTitle) editOrderModalTitle.textContent = `✏️ অর্ডার #${ord.orderId} এডিট ও আপডেট`;
    if (editStudentName) editStudentName.value = ord.studentName || '';
    if (editStudentPhone) editStudentPhone.value = ord.studentPhone || '';
    if (editStudentCollege) editStudentCollege.value = ord.studentCollege || '';
    if (editStudentAddress) editStudentAddress.value = ord.studentAddress || '';
    if (editGrandTotal) editGrandTotal.value = ord.grandTotal || '';
    if (editOrderStatus) editOrderStatus.value = ord.status || 'pending';
    if (editAdminNotes) editAdminNotes.value = ord.adminNotes || '';

    if (adminEditOrderModal) adminEditOrderModal.classList.add('open');
  }

  function closeEditModal() {
    if (adminEditOrderModal) adminEditOrderModal.classList.remove('open');
  }

  if (adminEditModalClose) {
    adminEditModalClose.addEventListener('click', closeEditModal);
  }
  if (cancelEditOrderBtn) {
    cancelEditOrderBtn.addEventListener('click', closeEditModal);
  }
  if (adminEditOrderModal) {
    adminEditOrderModal.addEventListener('click', (e) => {
      if (e.target === adminEditOrderModal) closeEditModal();
    });
  }

  // Handle Edit Form Submission (Update Order)
  if (adminEditOrderForm) {
    adminEditOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const targetId = editOrderIdHidden ? editOrderIdHidden.value : '';
      if (!targetId) return;

      const orders = JSON.parse(localStorage.getItem('pkhp_orders_list') || '[]');
      const idx = orders.findIndex(o => o.orderId === targetId);
      if (idx !== -1) {
        orders[idx].studentName = (editStudentName ? editStudentName.value : '').trim();
        orders[idx].studentPhone = (editStudentPhone ? editStudentPhone.value : '').trim();
        orders[idx].studentCollege = (editStudentCollege ? editStudentCollege.value : '').trim();
        orders[idx].studentAddress = (editStudentAddress ? editStudentAddress.value : '').trim();
        orders[idx].grandTotal = (editGrandTotal ? editGrandTotal.value : '').trim();
        orders[idx].status = editOrderStatus ? editOrderStatus.value : 'pending';
        orders[idx].adminNotes = (editAdminNotes ? editAdminNotes.value : '').trim();

        localStorage.setItem('pkhp_orders_list', JSON.stringify(orders));
        closeEditModal();
        renderAdminOrders();
        showToast(`অর্ডার #${targetId} সফলভাবে আপডেট করা হয়েছে!`);
      }
    });
  }

  // Delete Single Order
  function deleteSingleOrder(orderId) {
    if (!orderId) return;
    if (confirm(`আপনি কি নিশ্চিত যে অর্ডার #${orderId} স্থায়ীভাবে মুছে ফেলতে চান?`)) {
      let orders = JSON.parse(localStorage.getItem('pkhp_orders_list') || '[]');
      orders = orders.filter(o => o.orderId !== orderId);
      localStorage.setItem('pkhp_orders_list', JSON.stringify(orders));
      renderAdminOrders();
      showToast(`অর্ডার #${orderId} সফলভাবে মুছে ফেলা হয়েছে!`);
    }
  }

  // Event Delegation for Edit & Delete buttons on orders list
  if (adminOrdersList) {
    adminOrdersList.addEventListener('click', (e) => {
      const editBtn = e.target.closest('.admin-order-edit-btn');
      if (editBtn) {
        const id = editBtn.getAttribute('data-id');
        openEditModal(id);
        return;
      }

      const delBtn = e.target.closest('.admin-order-delete-btn');
      if (delBtn) {
        const id = delBtn.getAttribute('data-id');
        deleteSingleOrder(id);
        return;
      }
    });
  }

  // Clear All Orders button
  if (clearAdminOrdersBtn) {
    clearAdminOrdersBtn.addEventListener('click', () => {
      if (confirm('আপনি কি নিশ্চিত যে সকল সংরক্ষিত অর্ডার মুছে ফেলতে চান? এই কাজটি আর পূর্বাবস্থায় ফিরিয়ে নেওয়া যাবে না।')) {
        localStorage.removeItem('pkhp_orders_list');
        renderAdminOrders();
        showToast('সকল অর্ডার মুছে ফেলা হয়েছে।');
      }
    });
  }

  // --- Lightweight Toast Notification ---
  function showToast(message) {
    let toast = document.getElementById('pkhpToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pkhpToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(15, 23, 42, 0.95);
        color: #ffffff;
        padding: 0.75rem 1.75rem;
        border-radius: var(--radius-full);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        border: 1px solid rgba(59, 130, 246, 0.4);
        font-size: 0.925rem;
        font-weight: 600;
        z-index: 9999;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
        backdrop-filter: blur(10px);
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3000);
  }

  // Initial render
  renderSubjects();
  applyLanguage();
});
