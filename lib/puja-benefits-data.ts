export type BilingualText = { hi: string; en: string }

export interface PujaBenefitItem {
  id: string
  name: BilingualText
  mainDeity: BilingualText
  religiousPurpose: BilingualText
  traditionalReason: BilingualText
  specificObstacles: BilingualText
  spiritualSignificance: BilingualText
  familySignificance?: BilingualText
  personalSignificance?: BilingualText
  jyotishSignificance?: BilingualText
  categories: {
    spiritual: BilingualText[]
    religious: BilingualText[]
    family: BilingualText[]
    personal: BilingualText[]
    specificPurpose: BilingualText[]
  }
  tableRows: {
    benefit: BilingualText
    significance: BilingualText
  }[]
  websiteBenefits: {
    title: BilingualText
    explanation: BilingualText
  }[]
  whyChooseKashiBrahmins: BilingualText[]
}

export const allPujaBenefitsData: Record<string, PujaBenefitItem> = {
  'rudrabhishek': {
    id: 'rudrabhishek',
    name: { hi: 'रुद्राभिषेक', en: 'Rudrabhishek' },
    mainDeity: { hi: 'भगवान शिव (रुद्र / देवाधिदेव महादेव)', en: 'Lord Shiva (Rudra / Mahadeva)' },
    religiousPurpose: {
      hi: 'शुक्ल एवं कृष्ण यजुर्वेद के रुद्राष्टाध्यायी (नमक-चमक) मंत्रों द्वारा शिवलिंग का विविध द्रव्यों से पावन अभिषेक एवं स्तुति।',
      en: 'Sacred Abhishekam of the Shivling with prescribed holy liquids accompanied by Shukla & Krishna Yajurvedic Rudrashtadhyayi (Namakam-Chamakam) hymns.',
    },
    traditionalReason: {
      hi: 'शिव कृपा प्राप्ति, आत्मिक शुद्धि, जीवन में शांति एवं सावन, प्रदोष, महाशिवरात्रि अथवा महत्वपूर्ण जीवन अवसरों पर आराधना हेतु।',
      en: 'Performed to seek the grace of Lord Shiva, inner purification, peace of mind, and during auspicious occasions such as Shravan, Pradosh, and Maha Shivratri.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार मानसिक अशांति, भय, नकारात्मक ऊर्जा एवं जीवन में आने वाले अज्ञात व्यवधानों के शमन हेतु।',
      en: 'Traditionally believed to alleviate mental unrest, deep-seated anxieties, negative vibrations, and unexplained impediments in life.',
    },
    spiritualSignificance: {
      hi: 'भगवान शिव के प्रति अनन्य भक्ति, समर्पण, अहंकार का विसर्जन एवं आत्मिक चेतना का जागरण।',
      en: 'Cultivating unshakeable devotion and surrender to Lord Shiva, dissolving ego, and awakening inner spiritual consciousness.',
    },
    familySignificance: {
      hi: 'घर-परिवार में सात्विक वातावरण, सदस्यों में परस्पर स्नेह, क्लेश की शांति एवं सुखद पारिवारिक जीवन की कामना।',
      en: 'Fostering a serene and sattvic home atmosphere, mutual affection among family members, and resolving domestic discord.',
    },
    personalSignificance: {
      hi: 'मानसिक संतुलन, वैचारिक स्पष्टता, भय से मुक्ति एवं आंतरिक आत्मबल का विकास।',
      en: 'Promoting emotional stability, mental clarity, freedom from fear, and strengthening internal willpower.',
    },
    jyotishSignificance: {
      hi: 'चंद्रमा एवं शनि की प्रतिकूल स्थिति, कालसर्प अथवा राहु-केतु जनित तनाव के पारंपरिक शांति हेतु शिव आराधना अत्यंत फलदायी मानी गई है।',
      en: 'In traditional Jyotish, propitiating Lord Shiva is revered for mitigating adverse transit influences of the Moon, Saturn, and nodal axis (Rahu-Ketu).',
    },
    categories: {
      spiritual: [
        { hi: 'भगवान शिव के प्रति अनन्य भक्ति और शरणागति का भाव सुदृढ़ होना।', en: 'Deepening devotion and complete surrender to Lord Shiva.' },
        { hi: 'वैदिक मंत्रोच्चार से अंतःकरण की शुद्धि एवं आत्मिक शांति की प्राप्ति।', en: 'Inner purification and spiritual tranquility through Vedic chants.' },
        { hi: 'आध्यात्मिक साधना एवं ध्यान में स्थिरता और एकाग्रता का संचार।', en: 'Enhanced stability and concentration in meditation and prayer.' },
        { hi: 'अहंकार एवं सांसारिक मोह से मुक्ति की दिशा में सकारात्मक चेतना।', en: 'Positive consciousness toward freedom from ego and worldly attachments.' },
      ],
      religious: [
        { hi: 'देवाधिदेव महादेव एवं माता पार्वती का मंगलमय आशीर्वाद प्राप्त होना।', en: 'Receiving the auspicious blessings of Lord Shiva and Devi Parvati.' },
        { hi: 'धार्मिक संकल्प की शास्त्रसम्मत एवं विधिपूर्वक पूर्णता।', en: 'Fulfillment of sacred vows in strict adherence to Vedic rites.' },
        { hi: 'पारंपरिक मान्यतानुसार पूजा स्थल एवं परिवेश की देवतुल्य शुद्धि।', en: 'Sanctification of the place of worship and domestic environment.' },
        { hi: 'पुण्य की वृद्धि और सनातन धार्मिक परंपराओं का यथायोग्य पालन।', en: 'Enhancing spiritual merit and upholding Sanatan traditions.' },
      ],
      family: [
        { hi: 'गृह परिवेश में सकारात्मक और कल्याणकारी ऊर्जा का प्रवाह।', en: 'Infusing the home with positive, auspicious vibrations.' },
        { hi: 'पारिवारिक सदस्यों के बीच सामंजस्य, सौहार्द एवं कलह की शांति।', en: 'Fostering harmony, mutual affection, and resolving domestic discord.' },
        { hi: 'परिवार की दीर्घकालिक सुख-समृद्धि एवं मंगलमय भविष्य की प्रार्थना।', en: 'Prayers for enduring family prosperity, health, and a bright future.' },
      ],
      personal: [
        { hi: 'मन की चंचलता और अनावश्यक चिंताओं में पारंपरिक विश्वास के अनुसार ठहराव।', en: 'Calming restless thoughts and anxious tendencies.' },
        { hi: 'कठिन परिस्थितियों में धैर्य, विवेक और निर्णय लेने की क्षमता में वृद्धि।', en: 'Cultivating patient wisdom and sound judgment during trials.' },
        { hi: 'आंतरिक शांति, संतोष और सात्विक जीवनशैली की प्रेरणा।', en: 'Inspiring inner contentment, serenity, and a sattvic lifestyle.' },
      ],
      specificPurpose: [
        { hi: 'भगवान शिव के विभिन्न दिव्य रूपों को पंचामृत, गंगाजल, गन्ने का रस, मधु आदि से तृप्त करना।', en: 'Offering sacred Panchamrit, Gangajal, sugarcane juice, and honey to Shiva Lingam.' },
        { hi: 'सावन मास, प्रदोष व्रत, महाशिवरात्रि अथवा जन्मदिवस/विवाह वर्षगांठ जैसे अवसरों पर ईष्ट कृपा हेतु।', en: 'Invoking divine grace during Shravan, Pradosh, Shivratri, or personal milestones.' },
        { hi: 'पारंपरिक रूप से आध्यात्मिक कल्याण और स्वास्थ्य संवर्धन की प्रार्थना के साथ अनुष्ठान।', en: 'Undertaking traditional prayers for holistic spiritual and physical well-being.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आत्मिक शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'वेदोक्त रुद्राष्टाध्यायी के लयबद्ध पाठ से मन की चंचलता शांत होती है और आंतरिक मौन की अनुभूति होती है।',
          en: 'Traditionally believed to quieten worldly anxieties through the rhythmic resonance of the Vedic Rudra hymns.',
        },
      },
      {
        benefit: { hi: 'दैवीय कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'देवाधिदेव महादेव एवं माता पार्वती का मंगलमय आशीर्वाद प्राप्त होता है, जो जीवन में विवेक और ज्ञान प्रदान करता है।',
          en: 'Dedicated directly to Lord Shiva (Mahadeva), seeking His benevolent grace, wisdom, and protection.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सौहार्द (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'गृह परिवेश में क्लेश, तनाव और कटुता का शमन होकर सदस्यों में परस्पर प्रेम और समझ बढ़ती है।',
          en: 'Traditionally associated with fostering a peaceful household and mutual understanding among members.',
        },
      },
      {
        benefit: { hi: 'नकारात्मकता से रक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'भगवान शिव की छत्रछाया में घर और मन को नकारात्मक ऊर्जा तथा अज्ञात भयों से सुरक्षा प्राप्त होती है।',
          en: 'Devotees seek Mahadeva\'s shield against negative environmental influences and spiritual impurities.',
        },
      },
      {
        benefit: { hi: 'सुख-समृद्धि (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'पारंपरिक रूप से शुभ कार्यों के आरंभ, आजीविका में स्थिरता और सात्विक समृद्धि के लिए रुद्राभिषेक किया जाता है।',
          en: 'Traditionally performed with prayers for auspicious beginnings and spiritual as well as material well-being.',
        },
      },
      {
        benefit: { hi: 'बाधाओं का शमन (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'ज्योतिषीय एवं कर्मजन्य बाधाओं तथा कार्यों में आने वाले अनावश्यक विलंब को शांत करने की पारंपरिक मान्यता है।',
          en: 'Traditionally undertaken to soften recognized life delays and planetary afflictions according to Vedic lore.',
        },
      },
      {
        benefit: { hi: 'मानसिक व भावनात्मक संतुलन (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'क्रोध, अवसाद और मानसिक अशांति से राहत मिलकर चित्त में शीतलता और धैर्य का संचार होता है।',
          en: 'Associated with deep mental tranquility, emotional stability, and relief from chronic inner restlessness.',
        },
      },
      {
        benefit: { hi: 'आध्यात्मिक उन्नति (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'अहंकार का विसर्जन, विनम्रता, ईश्वरीय शरणागति और आत्म-साक्षात्कार के मार्ग पर अग्रसर होने की प्रेरणा।',
          en: 'Nurtures profound devotion, humility, self-reflection, and deeper communion with the Supreme Consciousness.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'आत्मिक शुद्धि एवं भक्ति का संचार', en: 'Inner Purification & Devotional Bliss' },
        explanation: {
          hi: 'पवित्र द्रव्यों से अभिषेक और यजुर्वेदीय मंत्रोच्चार से अंतःकरण शुद्ध होता है और भगवान शिव से गहरा आध्यात्मिक जुड़ाव बनता है।',
          en: 'Sacred ablutions and Vedic chants create an uplifting atmosphere that purifies the mind and deepens spiritual connection with Lord Shiva.',
        },
      },
      {
        title: { hi: 'दैवीय रक्षा एवं घर में मांगलिकता', en: 'Divine Protection & Auspiciousness' },
        explanation: {
          hi: 'वैदिक परंपरा के अनुसार रुद्राभिषेक से घर की नकारात्मक ऊर्जा दूर होती है और वातावरण देवतुल्य व सुरक्षित बनता है।',
          en: 'According to Vedic tradition, offering Rudrabhishek invokes Mahadeva\'s grace to protect the home and dispel subtle negativity.',
        },
      },
      {
        title: { hi: 'पारिवारिक शांति एवं क्लेश निवारण', en: 'Harmonious Household Atmosphere' },
        explanation: {
          hi: 'परिवार के सदस्यों के बीच आपसी समझ, स्नेह और सौहार्द की वृद्धि होती है तथा गृह-क्लेश से राहत मिलती है।',
          en: 'Devotees perform this sacred rite seeking domestic peace, mutual warmth among family members, and relief from recurring domestic tensions.',
        },
      },
      {
        title: { hi: 'ज्योतिषीय ग्रह दोषों की शांति', en: 'Planetary Pacification in Jyotish' },
        explanation: {
          hi: 'चंद्रमा (मन के विकार), शनि (साढ़ेसाती/ढैय्या) एवं राहु-केतु के क्रूर प्रभावों को शांत करने हेतु यह सर्वश्रेष्ठ वैदिक अनुष्ठान है।',
          en: 'Traditionally recommended in Vedic astrology to alleviate afflictions associated with Saturn, the Moon, and Rahu.',
        },
      },
      {
        title: { hi: 'मानसिक स्पष्टता और भावनात्मक संबल', en: 'Clarity and Emotional Resilience' },
        explanation: {
          hi: 'रुद्राष्टाध्यायी की पावन ध्वनि कठिन समय में भी धैर्य, विवेक और सही निर्णय लेने का आंतरिक आत्मबल प्रदान करती है।',
          en: 'The sacred vibration of Rudrashtadhyayi aids devotees in cultivating composure, patience, and emotional balance during challenging phases.',
        },
      },
      {
        title: { hi: 'धार्मिक संकल्प की पूर्णता', en: 'Fulfillment of Sacred Sankalp' },
        explanation: {
          hi: 'जन्मदिन, वैवाहिक वर्षगांठ, महाशिवरात्रि अथवा सावन मास में विशेष मनोकामना व कृतज्ञता हेतु विधिपूर्वक संपन्न किया जाता है।',
          en: 'Undertaken with proper Vedic resolve on special occasions, birthdays, and anniversaries for holistic well-being.',
        },
      },
      {
        title: { hi: 'संस्कार एवं कुल-कल्याण', en: 'Spiritual Discipline & Ancestral Blessing' },
        explanation: {
          hi: 'सनातन वैदिक संस्कारों के प्रति निष्ठा दृढ़ होती है और पूरे कुल में धर्म, ज्ञान एवं शांति का संचार होता है।',
          en: 'Renews one\'s commitment to Sanatan Dharma values, bringing spiritual satisfaction to the entire household.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'शुक्ल एवं कृष्ण यजुर्वेद की रुद्राष्टाध्यायी का शुद्ध स्वर, छंद एवं शास्त्रीय उच्चारण के साथ पाठ।',
        en: 'Authentic recitation of Shukla & Krishna Yajurvedic Rudrashtadhyayi with precise Swara and pronunciation.',
      },
      {
        hi: 'काशी की सदियों पुरानी गुरु-शिष्य परंपरा से प्रशिक्षित एवं कर्मकांड में पारंगत विद्वान ब्राह्मण।',
        en: 'Strict adherence to traditional Kashi Karmakand methods passed down through classical Guru-Shishya traditions.',
      },
      {
        hi: 'यजमान के नाम, गोत्र, नक्षत्र एवं मनोकामना के अनुसार व्यक्तिगत व शास्त्रोक्त संकल्प।',
        en: 'Customized and clear Vedic Sankalp incorporating your Gotra, Nakshatra, and specific devotional intent.',
      },
      {
        hi: 'शुद्ध एवं शास्त्रसम्मत पूजन सामग्री (विल्वपत्र, भस्म, धतूरा, गाय का शुद्ध घी एवं गंगाजल) का प्रयोग।',
        en: 'Use of pure, satvik, and scripturally approved puja samagri (Bilva patra, Bhasma, Dhatura, pure Gangajal).',
      },
      {
        hi: 'जातक की जन्मकुंडली एवं पंचांग के अनुसार सर्वश्रेष्ठ शुभ मुहूर्त (प्रदोष, शिवरात्रि, सोमवार) का चयन।',
        en: 'Guidance on the most auspicious Muhurat (Pradosh, Shivratri, Somwar) aligned with your family astrological chart.',
      },
      {
        hi: 'आरती, पुष्पांजलि एवं ब्राह्मण दक्षिणा मर्यादा के साथ अनुष्ठान की संपूर्ण और गरिमामयी पूर्णता।',
        en: 'Complete and respectful ritual culmination including Aarti, Pushpanjali, and Brahmin Dakshina Maryada.',
      },
    ],
  },

  'mahamrityunjaya': {
    id: 'mahamrityunjaya',
    name: { hi: 'महामृत्युंजय जाप', en: 'Mahamrityunjaya Jaap' },
    mainDeity: { hi: 'भगवान शिव (त्र्यम्बक / मृत्युंजय महादेव)', en: 'Lord Shiva (Tryambaka / Mrityunjaya Mahadeva)' },
    religiousPurpose: {
      hi: 'ऋग्वेदोक्त महामृत्युंजय मंत्र ("ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्...") का विधिपूर्वक जप, न्यास, ध्यान एवं दशांश हवन।',
      en: 'Disciplined chanting, nyasa, meditation, and dashansh havan of the Rigvedic Mahamrityunjaya Mantra ("Om Tryambakam Yajamahe...").',
    },
    traditionalReason: {
      hi: 'स्वास्थ्य रक्षा, भय एवं अनिष्ट निवारण, कठिन समय में आत्मबल तथा दीर्घायु एवं शांति हेतु प्रार्थना।',
      en: 'Performed as a solemn prayer for health, protection against untoward fears and calamities, inner strength during crises, and longevity.',
    },
    specificObstacles: {
      hi: 'पारंपरिक विश्वास के अनुसार अकाल मृत्यु के भय, असाध्य व्याधियों की आशंका, मानसिक अवसाद एवं गंभीर संकटों के निवारणार्थ।',
      en: 'Traditionally believed to mitigate fears of untimely adversity (apamrityu bhaya), chronic distress, profound anxiety, and acute crises.',
    },
    spiritualSignificance: {
      hi: 'मृत्यु के भय पर विजय, मोक्ष की प्रेरणा, शिव चेतना का साक्षात्कार एवं आत्मिक प्रकाश की प्राप्ति।',
      en: 'Transcending existential fear through devotion to Tryambaka, seeking spiritual liberation (Moksha), and attuning to cosmic stillness.',
    },
    familySignificance: {
      hi: 'परिवार के मुखिया अथवा अस्वस्थ परिजनों के स्वास्थ्य, दीर्घायु एवं पूरे कुटुंब के लिए सुरक्षा कवच की धार्मिक भावना।',
      en: 'Invoking divine protection, health, and vitality for family elders, ailing relatives, and preserving lineage well-being.',
    },
    personalSignificance: {
      hi: 'असीम आत्मबल, निराशा से मुक्ति, मानसिक दृढ़ता एवं असाधारण परिस्थितियों में धैर्य बनाए रखने की शक्ति।',
      en: 'Instilling profound courage, dispelling despair, building mental fortitude, and sustaining composure amidst severe challenges.',
    },
    jyotishSignificance: {
      hi: 'मारक ग्रह दशा, अष्टम/द्वादश भाव की प्रतिकूलता, साढ़ेसाती अथवा गंभीर अरिष्ट योगों में यह जप सर्वोपरि उपाय माना गया है।',
      en: 'In traditional Jyotish, this Japa is considered the paramount remedial measure during Maraka dasha periods, 8th/12th house afflictions, and major transit distress.',
    },
    categories: {
      spiritual: [
        { hi: 'त्र्यम्बक शिव के अमर स्वरूप का चिंतन एवं आंतरिक भय पर आध्यात्मिक विजय।', en: 'Transcending existential fear through devotion to Tryambaka Shiva.' },
        { hi: 'मंत्र की उच्च ध्वन्यात्मक आवृत्ति से आत्मिक ऊर्जा और चेतना का जागरण।', en: 'Awakening spiritual vitality through high-frequency sacred chants.' },
        { hi: 'सांसारिक बंधनों और अनिश्चितताओं के बीच मोक्ष एवं भक्ति का मार्ग प्रशस्त होना।', en: 'Illuminating the path of Moksha and devotion amidst worldly uncertainties.' },
        { hi: 'गहन ध्यान और ईश्वर के प्रति संपूर्ण आत्मसमर्पण की भावना।', en: 'Deep meditation and absolute surrender to the Divine Will.' },
      ],
      religious: [
        { hi: 'भगवान मृत्युंजय का अमोघ आशीर्वाद और पारंपरिक रूप से रक्षा कवच की प्राप्ति।', en: 'Receiving Lord Mrityunjaya\'s blessings and sacred protective shield.' },
        { hi: 'संबंधित संख्या (जैसे 1.25 लाख या 24 हजार) का विधिवत जप और दशांश हवन का अनुष्ठान।', en: 'Disciplined japa counts accompanied by Dashansh Havan rites.' },
        { hi: 'धार्मिक संकल्प के माध्यम से ग्रहों के अमंगल प्रभाव को शांत करने का प्रयास।', en: 'Pacifying malefic planetary influences through scriptural resolve.' },
        { hi: 'शास्त्रसम्मत विधि से तीर्थ अथवा पवित्र गृह स्थल पर अनुष्ठान की संपूर्णता।', en: 'Completing rituals at sacred tirthas or consecrated home altars.' },
      ],
      family: [
        { hi: 'परिवार में चल रहे गंभीर स्वास्थ्य संकट या चिंता के समय सामूहिक संबल।', en: 'Providing collective solace during family health crises.' },
        { hi: 'घर के वरिष्ठ जनों एवं बालकों के लिए दीर्घायु और सुरक्षा की मंगलकामना।', en: 'Prayers for longevity and protection for elders and children.' },
        { hi: 'कुटुंब में शोक और तनाव के वातावरण को दूर कर आशा और शांति का संचार।', en: 'Replacing familial grief with hope, tranquility, and faith.' },
      ],
      personal: [
        { hi: 'गंभीर मानसिक तनाव, भय और अवसाद के समय आंतरिक साहस की अनुभूति।', en: 'Experiencing immense inner courage during mental distress.' },
        { hi: 'शारीरिक एवं मानसिक दुर्बलता के समय मन में सकारात्मक ऊर्जा का पुनर्संचार।', en: 'Revitalizing positive mental energy during periods of weakness.' },
        { hi: 'दृढ़ आत्मविश्वास और ईश्वर के प्रति आस्था से उत्पन्न आत्मिक संतोष।', en: 'Unshakeable self-belief and spiritual fulfillment born of faith.' },
      ],
      specificPurpose: [
        { hi: 'भगवान शिव के त्रिनेत्र स्वरूप की स्तुति कर पोषण (पुष्टि) एवं अमरत्व की चेतना प्राप्त करना।', en: 'Praising Tryambaka Shiva for holistic nourishment and spiritual vitality.' },
        { hi: 'पारंपरिक रूप से किसी भी गंभीर व्याधि या जीवन-संकट के निवारण हेतु वैदिक संकल्प।', en: 'Undertaking solemn vows for relief from acute crises.' },
        { hi: 'जीवन की अनिश्चितताओं में आध्यात्मिक संबल और रक्षा हेतु नियमित अथवा अनुष्ठानिक अनुशीलन।', en: 'Cultivating spiritual resilience amidst life\'s uncertainties.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आत्मिक शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'मृत्यु और अनहोनी के भय से मुक्ति दिलाकर मन को त्र्यम्बक शिव की शरण में स्थिर व शांत करता है।',
          en: 'Transcends existential dread, replacing mortal fear with unshakeable faith in Tryambaka Shiva.',
        },
      },
      {
        benefit: { hi: 'दैवीय कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'भगवान महामृत्युंजय की असीम अनुकंपा से आरोग्य, पुष्टि (समग्र पोषण) और जीवन शक्ति का वरदान प्राप्त होता है।',
          en: 'Dedicated to Lord Mahamrityunjaya Shiva, the supreme granter of vitality, nourishment (Pushti), and grace.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सुरक्षा (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'परिवार के सदस्यों के संकटकाल में भावनात्मक संबल और पूरे कुटुंब को सुरक्षा कवच प्रदान करता है।',
          en: 'Provides collective emotional anchoring and solidarity during family trials or health uncertainties.',
        },
      },
      {
        benefit: { hi: 'अनिष्ट से रक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'पारंपरिक रूप से अकाल मृत्यु, दुर्घटना और नकारात्मक शक्तियों के भय से रक्षा हेतु सबसे शक्तिशाली वैदिक कवच है।',
          en: 'Traditionally revered as the foremost protective Vedic spiritual armor (Kavach) against calamities.',
        },
      },
      {
        benefit: { hi: 'पुष्टि एवं समृद्धि (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'मंत्र में वर्णित "पुष्टिवर्धनम्" के अनुसार जीवन में स्वास्थ्य, संतान और सात्विक समृद्धि का विस्तार होता है।',
          en: 'Nurtures Pushti (holistic spiritual, physical, and familial nourishment) as praised in the Rigvedic hymn.',
        },
      },
      {
        benefit: { hi: 'अरिष्ट बाधाओं का निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'मारक दशाओं, गंभीर ग्रह पीड़ा और असाध्य संकटों की तीव्रता को शांत करने की पारंपरिक मान्यता है।',
          en: 'Traditionally believed to soften the impact of severe astrological afflictions (Maraka dashas and critical transits).',
        },
      },
      {
        benefit: { hi: 'मानसिक दृढ़ता (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'घबराहट, निराशा और अवसाद को दूर कर व्यक्ति को असाधारण परिस्थितियों से लड़ने का मनोबल देता है।',
          en: 'Restores calmness, dispels deep-seated despair, and fosters emotional equilibrium without medical claims.',
        },
      },
      {
        benefit: { hi: 'आध्यात्मिक उत्थान (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'नश्वर संसार के बंधनों से ऊपर उठकर आत्मा की अमरता और शिव-तत्व में लीन होने की प्रेरणा देता है।',
          en: 'Cultivates detachment from mortal illusions, inspiring meditation on the immortal Atman.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'ऋग्वैदिक मंत्र की पावन ध्वन्यात्मक सुरक्षा', en: 'Rigvedic Sacred Sound Protection' },
        explanation: {
          hi: 'महामृत्युंजय मंत्र की उच्च आवृत्ति की ध्वनियां नकारात्मक ऊर्जा को दूर कर एक अभेद्य सुरक्षा घेरा बनाती हैं।',
          en: 'Chanting the sacred Mahamrityunjaya mantra creates high-frequency positive vibrations traditionally believed to shield against adverse energies.',
        },
      },
      {
        title: { hi: 'स्वास्थ्य, दीर्घायु एवं आरोग्यता की प्रार्थना', en: 'Devotional Prayer for Health & Longevity' },
        explanation: {
          hi: 'व्याधियों से मुक्ति, शीघ्र स्वास्थ्य लाभ और दीर्घायु की कामना से यह महा-अनुष्ठान श्रद्धापूर्वक किया जाता है।',
          en: 'Devotees undertake this anushthan seeking divine grace for recovery from illness, prolonged vitality, and holistic well-being.',
        },
      },
      {
        title: { hi: 'अकाल मृत्यु और भय से मुक्ति', en: 'Dissolution of Fear & Panic' },
        explanation: {
          hi: 'सनातन मान्यतानुसार भगवान मृत्युंजय की शरण में जाने से अकाल संकट, दुर्घटना और अकारण भय का शमन होता है।',
          en: 'According to Hindu beliefs, surrender to Mrityunjaya Mahadeva eliminates the fear of untimely accidents (apamrityu) and acute distress.',
        },
      },
      {
        title: { hi: 'सर्वोच्च ज्योतिषीय मारक शांति', en: 'Supreme Astrological Remedial Power' },
        explanation: {
          hi: 'कुंडली में मारक ग्रहों की दशा, अष्टम भाव की पीड़ा अथवा शनि की साढ़ेसाती के समय यह जप अचूक उपाय माना गया है।',
          en: 'Held in high esteem in Vedic astrology as an indispensable remedy during challenging Dasha, Antardasha, and transit periods.',
        },
      },
      {
        title: { hi: 'गहन मानसिक संबल और आत्मविश्वास', en: 'Deep Mental Composure & Fortitude' },
        explanation: {
          hi: 'कठिन से कठिन परिस्थिति में भी भक्त का मनोबल नहीं टूटता और वह धैर्यपूर्वक जीवन-संघर्षों का सामना करता है।',
          en: 'Helps devotees retain psychological balance, hope, and determination even in the face of daunting adversity.',
        },
      },
      {
        title: { hi: 'शास्त्रोक्त जप संख्या एवं दशांश हवन', en: 'Purification of Karma & Anushthan Completeness' },
        explanation: {
          hi: '24 हजार अथवा सवा लाख जप के साथ शास्त्रसम्मत न्यास, दशांश हवन, तर्पण एवं मार्जन की पूर्णता सुनिश्चित की जाती है।',
          en: 'Accompanied by traditional Nyasa, Japa Sankalp, and Dashansh Havan for the scriptural fulfillment of religious vows.',
        },
      },
      {
        title: { hi: 'कुटुंब कल्याण एवं सुख-शांति', en: 'Familial Strength and Harmony' },
        explanation: {
          hi: 'पूरे परिवार के लिए मंगलकारी ऊर्जा और आरोग्य का संचार होता है जिससे घर में शांति और विश्वास बना रहता है।',
          en: 'Creates an aura of sacred reassurance and protective blessing for elders and descendants alike.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'काशी के निष्ठावान वैदिक विद्वानों द्वारा शुद्ध वैदिक छंद, स्वर और लयबद्ध उच्चारण के साथ जप।',
        en: 'Chanted by seasoned Vedic Pandits of Kashi trained in precise Vedic Chhanda, Swara, and pronunciation.',
      },
      {
        hi: 'नियत जप संख्या (जैसे 1.25 लाख या 24,000) का बिना किसी त्रुटि या जल्दबाजी के पूर्ण शास्त्रीय संपादन।',
        en: 'Strict vow of purity, count accuracy (Laghu Rudri / 1.25 Lakh Mahamrityunjaya Japa), and continuous Anushthan discipline.',
      },
      {
        hi: 'प्रत्येक जप सत्र से पूर्व शास्त्रोक्त अंग-न्यास, कर-न्यास एवं ध्यान श्लोकों का विधिवत विनियोग।',
        en: 'Incorporation of proper Anga-Nyasa, Kara-Nyasa, and Dhyana Shlokas prior to each japa session.',
      },
      {
        hi: 'शास्त्रोक्त विधि से दशांश हवन, तर्पण, मार्जन एवं ब्राह्मण भोजन का पूर्ण निष्पादन।',
        en: 'Execution of Dashansh Havan, Tarpan, Marjan, and Brahmin Bhojan as stipulated in the Shastras.',
      },
      {
        hi: 'जातक की जन्मकुंडली एवं शुभ मुहूर्त के अनुसार अनुष्ठान आरंभ की शास्त्रसम्मत तिथि का निर्धारण।',
        en: 'Sincere astrological alignment of the Anushthan start date with the Jatak\'s natal chart and auspicious Muhurat.',
      },
      {
        hi: 'बिना किसी अंधविश्वास या भ्रामक दावों के विशुद्ध आध्यात्मिक एवं सात्विक मार्गदर्शन।',
        en: 'Clear, honest guidance without unscientific guarantees, maintaining absolute devotion and sanctity.',
      },
    ],
  },

  'griha-pravesh': {
    id: 'griha-pravesh',
    name: { hi: 'गृह प्रवेश पूजा', en: 'Griha Pravesh Puja' },
    mainDeity: { hi: 'भगवान श्री गणेश, वास्तु पुरुष, कुलदेवता, नवग्रह एवं माता महालक्ष्मी', en: 'Lord Ganesha, Vastu Purusha, Kuldevata, Navagraha & Devi Mahalakshmi' },
    religiousPurpose: {
      hi: 'नवनिर्मित या नवक्रय किए गए भवन में प्रवेश से पूर्व वास्तु शांति, नवग्रह होम, कलश स्थापना एवं देवी-देवताओं का विधिवत आह्वान।',
      en: 'Vastu Shanti, Navagraha Havan, Kalash Sthapana, and invocation of divinities prior to entering a newly constructed or occupied dwelling.',
    },
    traditionalReason: {
      hi: 'भवन के पंचमहाभूतों की शुद्धि, वास्तु दोषों का पारंपरिक शमन, परिवार के लिए सुख, शांति एवं नवजीवन के शुभ आरंभ हेतु।',
      en: 'Purification of the five elements within the building, pacification of architectural flaws, and seeking peace and prosperity for the new chapter.',
    },
    specificObstacles: {
      hi: 'निर्माण जनित वास्तु दोष, भूमि दोष, नकारात्मक ऊर्जा तथा नए स्थान में सामंजस्य की कमी को दूर करने की पारंपरिक मान्यता।',
      en: 'Traditionally believed to mitigate land defects (Bhoomi Dosha), construction imbalances (Vastu Dosha), and stagnant energies.',
    },
    spiritualSignificance: {
      hi: 'घर को केवल भौतिक संरचना न मानकर उसे एक देवालय (पवित्र मंदिर) के रूप में प्रतिष्ठित करने का आध्यात्मिक भाव।',
      en: 'Transforming a physical structure into a sacred sanctuary (Devasthana) consecrated by divine presence.',
    },
    familySignificance: {
      hi: 'नए घर में परिवार के सभी सदस्यों के बीच आत्मीयता, सुख-शांति, प्रेम, दीर्घायु एवं निरंतर उन्नति की कामना।',
      en: 'Fostering unity, mutual affection, happiness, health, and collective progress for all family members under the new roof.',
    },
    personalSignificance: {
      hi: 'नए परिवेश में आत्मविश्वास, सकारात्मक सोच, मानसिक सुकून एवं नए जीवन लक्ष्यों के प्रति उत्साह।',
      en: 'Cultivating peace of mind, confidence, a positive mindset, and enthusiasm for family aspirations in the new home.',
    },
    jyotishSignificance: {
      hi: 'शुभ लग्न, अनुकूल तिथि, नक्षत्र एवं सूर्य-गुरु के गोचर के अनुसार गृह प्रवेश करने से पारिवारिक समृद्धि में वृद्धि मानी जाती है।',
      en: 'Selecting a pristine Muhurat based on auspicious Lagna, Tithi, Nakshatra, and Sun-Jupiter transits is traditionally linked to lasting prosperity.',
    },
    categories: {
      spiritual: [
        { hi: 'घर की प्रत्येक दिशा और कोण को वैदिक मंत्रों द्वारा पावन और देवमय बनाना।', en: 'Sanctifying every corner of the dwelling with Vedic chants.' },
        { hi: 'ईश्वर के प्रति कृतज्ञता कि उन्होंने परिवार को आश्रय और सुखी जीवन प्रदान किया।', en: 'Expressing gratitude to the Divine for the blessing of shelter and family.' },
        { hi: 'गृहस्थ जीवन को धर्म, अर्थ, काम और मोक्ष के संतुलन के रूप में स्वीकार करना।', en: 'Embracing householder life as a dharmic balance of spiritual and worldly duties.' },
        { hi: 'घर में सात्विक, शांत और ध्यान-सुलभ वातावरण की स्थापना।', en: 'Establishing a peaceful, sattvic ambiance conducive to prayer.' },
      ],
      religious: [
        { hi: 'वास्तु पुरुष, कुलदेवता, ग्रामदेवता एवं नवग्रहों का यथोचित पूजन एवं भोग।', en: 'Appeasing Vastu Purusha, Kuldevata, and Navagrahas with prescribed offerings.' },
        { hi: 'मंगल कलश स्थापना, द्वार पूजा, गौमाता का पावन प्रवेश एवं देहली पूजन।', en: 'Kalash Sthapana, threshold consecration, and auspicious cow entry.' },
        { hi: 'अग्नि प्रज्वलन (गृह प्रवेश होम) द्वारा घर के प्रत्येक कोने का शुद्धिकरण।', en: 'Cleansing the architectural space through consecrated sacred fire.' },
        { hi: 'शास्त्रोक्त विधि से पूर्णता एवं ब्राह्मणों का आशीर्वाद प्राप्त करना।', en: 'Seeking the blessings of learned Brahmins upon ritual completion.' },
      ],
      family: [
        { hi: 'पारिवारिक रिश्तों में मिठास, सहयोग और सुरक्षा की सुखद भावना।', en: 'Fostering mutual love, warmth, and security among family members.' },
        { hi: 'आने वाली पीढ़ियों के संस्कार, स्वास्थ्य और विद्यार्जन के लिए अनुकूल वातावरण।', en: 'Creating a cultured and healthy environment for children.' },
        { hi: 'नकारात्मक प्रभावों और पारिवारिक कलह से घर की पारंपरिक सुरक्षा।', en: 'Shielding the household from disharmony and negative energies.' },
      ],
      personal: [
        { hi: 'परिश्रम से अर्जित नए घर में प्रवेश करते समय आत्मसंतोष और गौरव।', en: 'Deep fulfillment and pride upon entering a newly earned home.' },
        { hi: 'शांतिपूर्ण नींद, तनावमुक्त जीवन और मानसिक स्पष्टता की अनुभूति।', en: 'Promoting restful sleep, stress-free living, and mental calm.' },
        { hi: 'दैनिक जीवन में सकारात्मक ऊर्जा और कार्यों में सफलता की प्रेरणा।', en: 'Inspiring optimism, energy, and success in daily pursuits.' },
      ],
      specificPurpose: [
        { hi: 'नवनिर्मित या किराए के घर में पहली बार प्रवेश करते समय वैदिक विधि से ऊर्जा का संतुलन करना।', en: 'Balancing elemental energies upon entering a newly occupied residence.' },
        { hi: 'दिशाओं के स्वामियों (दिक्पालों) और वास्तु देव से गृहस्थ की रक्षा और समृद्धि की प्रार्थना।', en: 'Invoking directional deities (Dikpalas) for protection and prosperity.' },
        { hi: 'माता लक्ष्मी और भगवान कुबेर का आह्वान ताकि घर में अन्न एवं धन की कभी कमी न हो।', en: 'Invoking Lakshmi and Kubera so nourishment and wealth perpetually flourish.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'वास्तु शुद्धि (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'पंचमहाभूतों का संतुलन कर पूरे भवन को एक पवित्र, शांत और सकारात्मक देवालय में परिवर्तित करता है।',
          en: 'Transforms the residential space into a serene realm attuned to divine frequencies.',
        },
      },
      {
        benefit: { hi: 'दैवीय अधिष्ठान (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'भगवान गणेश, वास्तु पुरुष, नवग्रह एवं माता महालक्ष्मी का स्थायी वास और आशीर्वाद प्राप्त होता है।',
          en: 'Invokes Lord Ganesha, Vastu Purusha, Navagrahas, and Devi Lakshmi for auspiciousness.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सुख-शांति (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'पारंपरिक विश्वास के अनुसार घर के सदस्यों में आपसी प्रेम बढ़ता है और किसी भी प्रकार के क्लेश का शमन होता है।',
          en: 'Traditionally believed to dissolve past spatial discords and bind family members in warmth.',
        },
      },
      {
        benefit: { hi: 'घर की सुरक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'देहली (चौखट), दिशाओं और मुख्य द्वार का पूजन कर घर को बाहरी नकारात्मक ऊर्जा और बुरी दृष्टि से सुरक्षित किया जाता है।',
          en: 'Consecrates the four corners and threshold (Dehli) against negative atmospheric vibrations.',
        },
      },
      {
        benefit: { hi: 'धन-धान्य एवं समृद्धि (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'नए घर में स्थायी आर्थिक उन्नति, बरकत, अन्नपूर्णा की कृपा और मांगलिक कार्यों के निरंतर आयोजन की प्रार्थना।',
          en: 'Traditionally performed to invite abiding abundance, financial stability, and auspicious events.',
        },
      },
      {
        benefit: { hi: 'वास्तु दोष निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'भवन निर्माण या दिशाओं की किसी भी अपरिहार्य त्रुटि के दोषों को वास्तु शांति होम द्वारा शांत किया जाता है।',
          en: 'Mitigates structural flaws (Vastu Dosha) and construction-related environmental impurities.',
        },
      },
      {
        benefit: { hi: 'मानसिक सुकून (Mental/Emotional Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'नए वातावरण में सहजता, शांतिपूर्ण निद्रा, सुरक्षा की भावना और परिवार में प्रसन्नता का संचार होता है।',
          en: 'Instills deep psychological tranquility, security, and cheerful enthusiasm for the family.',
        },
      },
      {
        benefit: { hi: 'संस्कार एवं धर्म वृद्धि (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'घर में नित्य पूजा-पाठ, बड़ों के प्रति आदर और सनातन संस्कृति के संस्कारों की सुदृढ़ नींव पड़ती है।',
          en: 'Encourages daily devotional practices, morning prayers, and righteous living in the new abode.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'संपूर्ण वास्तु एवं पंचभूत शुद्धिकरण', en: 'Complete Vastu & Elemental Purification' },
        explanation: {
          hi: 'वेदोक्त अनुष्ठान द्वारा घर की पृथ्वी, जल, अग्नि, वायु और आकाश तत्व को पूर्णतः शुद्ध और संतुलित किया जाता है।',
          en: 'Purifies the Pancha Mahabhutas (earth, water, fire, air, space) within the home through consecrated Vedic rituals.',
        },
      },
      {
        title: { hi: 'माता लक्ष्मी एवं भगवान गणेश का पावन आह्वान', en: 'Invocation of Lakshmi & Ganesha' },
        explanation: {
          hi: 'नए घर में विघ्न-विनाशक गणेश जी और सुख-समृद्धि की देवी महालक्ष्मी का स्वागत कर शुभ आरंभ किया जाता है।',
          en: 'Welcomes wealth, auspicious beginnings, and barrier-free living into the new residence.',
        },
      },
      {
        title: { hi: 'मंगल द्वार एवं देहली पूजन', en: 'Auspicious Threshold & Dwara Puja' },
        explanation: {
          hi: 'गृह्य सूत्रों के अनुसार तोरण, स्वस्तिक, कलश एवं देहली पूजन से मुख्य द्वार को अभिमंत्रित और सुरक्षित किया जाता है।',
          en: 'Guards the home entryways with holy Toran, Swastika, and Kalash rituals as prescribed in the Grihya Sutras.',
        },
      },
      {
        title: { hi: 'पारिवारिक एकता और खुशहाली', en: 'Family Unity and Happiness' },
        explanation: {
          hi: 'सभी परिजन एक साथ बैठकर ईश्वर की स्तुति करते हैं जिससे घर में स्नेह, सम्मान और आत्मीयता बढ़ती है।',
          en: 'Creates an atmosphere of mutual empathy, domestic joy, and shared cultural pride across generations.',
        },
      },
      {
        title: { hi: 'भूमि एवं निर्माण दोषों का शमन', en: 'Neutralizing Land & Construction Defects' },
        explanation: {
          hi: 'दिक्पालों एवं वास्तु पुरुष की विधिपूर्वक बलि-पूजा से भवन के संरचनात्मक दोषों का पारंपरिक निवारण होता है।',
          en: 'Traditional Vedic Havan and Vastu Bali appease directional deities (Dikpalas) to offset unalterable architectural faults.',
        },
      },
      {
        title: { hi: 'सटीक ज्योतिषीय शुभ मुहूर्त', en: 'Muhurat-Driven Astrological Alignment' },
        explanation: {
          hi: 'गृहस्वामी की जन्म राशि, नक्षत्र और ग्रहों के शुभ गोचर के अनुसार सर्वाधिक फलदायी समय पर प्रवेश कराया जाता है।',
          en: 'Aligns the entry with the family\'s most favorable celestial transits for long-term peace.',
        },
      },
      {
        title: { hi: 'रसोईघर एवं अन्नपूर्णा प्रतिष्ठा', en: 'Sanctified Kitchen & Annapurna Blessing' },
        explanation: {
          hi: 'पारंपरिक रूप से दूध उफनाने और प्रथम अग्नि प्रज्वलन से घर में अन्न और पोषण का अटूट भंडार सुनिश्चित होता है।',
          en: 'The traditional boiling of milk and first fire offering ensures perpetual nourishment and hospitality.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'गृह्य सूत्रों, वास्तु शास्त्र एवं उत्तर भारतीय व अखिल भारतीय सनातन परंपराओं का पूर्ण व प्रामाणिक ज्ञान।',
        en: 'Comprehensive knowledge of Grihya Sutras, Vastu Shastra, and local North Indian & Pan-Indian traditions.',
      },
      {
        hi: 'गृहस्वामी की जन्म राशि एवं नक्षत्र के आधार पर सर्वाधिक सटीक व शुभ गृह प्रवेश मुहूर्त का निर्धारण।',
        en: 'Exact determination of auspicious Griha Pravesh Muhurat based on owner\'s Janma Rashi and Nakshatra.',
      },
      {
        hi: 'नवग्रह मंडल, वास्तु मंडल एवं सर्वतोभद्र मंडल की शास्त्रोक्त ज्यामितीय रचना एवं शुद्ध पूजन।',
        en: 'Full arrangement and proper consecration of Navagraha Mandal, Vastu Mandal, and Sarvatobhadra Mandal.',
      },
      {
        hi: 'धैर्य और आदर के साथ यजमान परिवार के प्रत्येक सदस्य (गौमाता पूजन, दूध उफनाना, देहली पूजन) की सहभागिता।',
        en: 'Conducted with complete respect, clarity, and patience so all family members participate meaningfully.',
      },
      {
        hi: 'मधुर व स्पष्ट वेदमंत्रों के साथ स्वस्ति वाचन, शांति पाठ एवं पारिवारिक मंगल कामना।',
        en: 'Clear recitation of Swasti Vachan and Shanti Path wishing long-term domestic bliss.',
      },
      {
        hi: 'पूरी पारदर्शिता, सम्मानजनक वैदिक मर्यादा एवं दक्षिणोत्तर भारतीय पद्धतियों का आदर।',
        en: 'Conducted with dignified Vedic decorum and transparent Dakshina expectations.',
      },
    ],
  },

  'baglamukhi': {
    id: 'baglamukhi',
    name: { hi: 'बगलामुखी पूजन', en: 'Baglamukhi Pujan' },
    mainDeity: { hi: 'माँ बगलामुखी (पीताम्बरा / अष्टम महाविद्या)', en: 'Maa Baglamukhi (Pitambari / 8th Mahavidya)' },
    religiousPurpose: {
      hi: 'माँ पीताम्बरा के दिव्य स्वरूप की स्तुति, पीत वस्त्र-पुष्प-द्रव्यों से पूजन, स्तम्भन शक्ति का ध्यान एवं शांति पाठ।',
      en: 'Solemn adoration of Maa Pitambari with yellow offerings, meditation on divine restraining power (Stambhana Shakti), and Vedic peace prayers.',
    },
    traditionalReason: {
      hi: 'कठिन विवादों, अनुचित षड्यंत्रों, भय एवं वाक-असंतुलन से रक्षा तथा सत्य एवं धर्म के पक्ष में आत्मबल प्राप्त करने हेतु।',
      en: 'Performed as a devotional prayer for protection against unjust hostility, slander, fear, and seeking moral courage and truth.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार अकारण शत्रुता, झूठे आरोप, मानसिक भ्रम एवं वाक-विकार के निवारणार्थ। (यह कोई कानूनी गारंटी नहीं है)।',
      en: 'Traditionally believed to soothe unjust enmities, malicious slander, psychological paralysis, and speech impediments. (Not a legal guarantee).',
    },
    spiritualSignificance: {
      hi: 'मन के आंतरिक शत्रुओं (काम, क्रोध, लोभ, मोह, ईर्ष्या) का स्तम्भन एवं आत्मिक संयम की प्राप्ति।',
      en: 'Restraining internal negative impulses (anger, jealousy, greed) and attaining profound self-mastery and silence.',
    },
    familySignificance: {
      hi: 'परिवार पर आने वाले आकस्मिक संकटों, बाहरी ईर्ष्या तथा कलहपूर्ण विवादों से सुरक्षा की धार्मिक भावना।',
      en: 'Seeking spiritual shelter from sudden crises, external malice, and protracted interpersonal bitterness.',
    },
    personalSignificance: {
      hi: 'वाणी में प्रभावशीलता, संकट के समय अभय, मानसिक स्थिरता एवं निर्णय क्षमता में दृढ़ता।',
      en: 'Cultivating composed speech, fearlessness during trials, emotional steadfastness, and clear decision-making.',
    },
    jyotishSignificance: {
      hi: 'राहु, मंगल एवं षष्ठ भाव (शत्रु-ऋण-रोग) से जुड़े जटिल दोषों में पारंपरिक रूप से पीताम्बरा उपासना की सलाह दी जाती है।',
      en: 'In traditional Jyotish, worship of Maa Pitambari is suggested for pacifying afflictions of Mars, Rahu, and 6th-house conflicts.',
    },
    categories: {
      spiritual: [
        { hi: 'माँ बगलामुखी की स्तम्भन शक्ति द्वारा मन के विकारों और नकारात्मक विचारों पर नियंत्रण।', en: 'Silencing inner negative thoughts through Maa Baglamukhi\'s divine restraining power.' },
        { hi: 'गंभीर आध्यात्मिक साधना में एकाग्रता और आंतरिक मौन (वाक-संयम) का विकास।', en: 'Developing deep concentration, silence, and speech restraint in spiritual practice.' },
        { hi: 'ईश्वरीय न्याय और धर्म की विजय में अटूट विश्वास का निर्माण।', en: 'Building unshakeable faith in divine justice and the triumph of truth.' },
        { hi: 'भय, शंका और आत्म-संशय से मुक्त होकर दिव्य संरक्षण का अनुभव।', en: 'Experiencing divine shelter free from fear, doubt, and paranoia.' },
      ],
      religious: [
        { hi: 'शास्त्रोक्त पीत-विधान (पीले वस्त्र, हल्दी की माला, पीले पुष्प) से विधिवत अनुष्ठान।', en: 'Strict execution of Pitambari rites using authentic yellow offerings and turmeric malas.' },
        { hi: 'महाविद्या बीज मंत्र का शास्त्रीय नियमों और संपुट सहित श्रद्धापूर्वक पाठ।', en: 'Disciplined chanting of Mahavidya seed mantras with proper Samputa.' },
        { hi: 'धार्मिक मर्यादाओं के पालन के साथ अनिष्टकारी ऊर्जा का पारंपरिक शमन।', en: 'Pacifying negative vibrations while strictly upholding religious decorum.' },
        { hi: 'सत्य एवं सदाचार के मार्ग पर चलने के संकल्प की धार्मिक पुष्टि।', en: 'Reaffirming commitment to truth, righteousness, and ethical conduct.' },
      ],
      family: [
        { hi: 'परिवार को अनपेक्षित बाहरी ईर्ष्या और द्वेषपूर्ण वातावरण से सुरक्षा की प्रार्थना।', en: 'Prayers for shielding family from toxic external malice and jealousy.' },
        { hi: 'विवादों के कारण परिवार पर पड़ने वाले मानसिक दबाव को कम करने का धार्मिक संबल।', en: 'Providing spiritual solace to reduce litigation and dispute stress.' },
        { hi: 'घर के सदस्यों में एकता और विकट समय में परस्पर सहयोग की भावना।', en: 'Fostering unity and solidarity among family members during crises.' },
      ],
      personal: [
        { hi: 'प्रतिकूल परिस्थितियों में घबराहट और मानसिक संकोच पर विजय।', en: 'Overcoming panic and hesitation during challenging situations.' },
        { hi: 'स्पष्ट, सत्यनिष्ठ और प्रभावशाली वाणी का विकास।', en: 'Cultivating dignified, truthful, and persuasive speech.' },
        { hi: 'आत्मबल, साहस और विवेकपूर्ण दृष्टिकोण का सुदृढ़ीकरण।', en: 'Strengthening willpower, courage, and balanced perspective.' },
      ],
      specificPurpose: [
        { hi: 'पारंपरिक रूप से विरोधियों की कुटिल मति को शांत करने एवं वाणी के दोषों के निवारण हेतु।', en: 'Pacifying malicious intent and speech blemishes according to tradition.' },
        { hi: 'गंभीर जीवन-संघर्षों में माता पीताम्बरा से अभयदान और विजय की आध्यात्मिक प्रार्थना।', en: 'Praying for fearlessness and moral victory during life conflicts.' },
        { hi: 'धार्मिक और सात्विक विधि से आत्मरक्षा एवं आत्मिक शक्ति का संवर्धन।', en: 'Enhancing spiritual fortitude and self-defense through satvik rites.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आंतरिक शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'मन के आंतरिक शत्रुओं (क्रोध, वासना, ईर्ष्या) को शांत कर चित्त में स्थिरता और शांति लाता है।',
          en: 'Silences inner psychic chaos, anger, and anxiety through devotional discipline.',
        },
      },
      {
        benefit: { hi: 'महाविद्या कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'माँ पीताम्बरा बगलामुखी की अमोघ कृपा से सत्यनिष्ठ भक्तों को अभय और आत्मिक तेज प्राप्त होता है।',
          en: 'Dedicated to Maa Baglamukhi, the embodiment of divine stopping power (Stambhana).',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सुरक्षा (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'घर-परिवार को बाहरी ईर्ष्या, दुर्भावनापूर्ण अफवाहों और षड्यंत्रों के प्रभाव से सुरक्षा प्रदान करता है।',
          en: 'Safeguards the household against toxic external malice, gossip, and discord.',
        },
      },
      {
        benefit: { hi: 'शत्रु बाधा शमन (Protection)', en: 'Protection' },
        significance: {
          hi: 'पारंपरिक रूप से अकारण विरोध, ईर्ष्या और अनपेक्षित संकटों के समय दैवीय सुरक्षा कवच माना जाता है।',
          en: 'Traditionally sought as a spiritual armor against unjust hostility and concealed animosity.',
        },
      },
      {
        benefit: { hi: 'धर्म एवं यश रक्षा (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'सत्य और धर्म के पक्ष में खड़े होकर अर्जित मान-सम्मान एवं सात्विक संपत्ति की रक्षा होती है।',
          en: 'Protects righteous wealth and ventures from being disrupted by deceitful obstacles.',
        },
      },
      {
        benefit: { hi: 'जटिल गतिरोध निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'पारंपरिक मान्यतानुसार लंबे समय से अटके विवादों और परिस्थितियों में अनुकूलता का मार्ग खुलता है।',
          en: 'Traditionally believed to help overcome prolonged stalemates and unprovoked opposition.',
        },
      },
      {
        benefit: { hi: 'वाक सिद्धि व निर्भयता (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'वाणी में संतुलन, घबराहट से मुक्ति और कठिन समय में भी अडिग रहने का आत्मविश्वास विकसित होता है।',
          en: 'Inspires courageous clarity, eliminating irrational paranoia and emotional fragility.',
        },
      },
      {
        benefit: { hi: 'आत्म-संयम व वैराग्य (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'इंद्रिय निग्रह, वाणी पर नियंत्रण और ईश्वरीय न्याय पर दृढ़ विश्वास का आध्यात्मिक विकास होता है।',
          en: 'Teaches profound sensory control, mastery over speech, and unwavering faith in divine justice.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'अनुचित शत्रुता एवं ईर्ष्या से दैवीय सुरक्षा', en: 'Divine Protection from Unjust Hostility' },
        explanation: {
          hi: 'भक्त माँ पीताम्बरा से अकारण द्वेष, षड्यंत्र और झूठे आरोपों से रक्षा हेतु पावन आशीर्वाद प्राप्त करते हैं।',
          en: 'Devotees seek Maa Pitambari\'s grace for protection against unjustified malice, jealousy, and unfair slander.',
        },
      },
      {
        title: { hi: 'वाक-संयम एवं वाणी प्रभावशीलता', en: 'Speech Mastery & Calmness' },
        explanation: {
          hi: 'वाणी के दोष शांत होते हैं और व्यक्ति कठिन संवादों में भी गरिमामयी, शांत और प्रभावशाली अभिव्यक्ति पाता है।',
          en: 'Traditionally associated with pacifying speech defects, erratic arguments, and cultivating dignified eloquence.',
        },
      },
      {
        title: { hi: 'कठिन विवादों में मानसिक साहस', en: 'Courage Amidst Complex Conflicts' },
        explanation: {
          hi: 'गंभीर तनावपूर्ण विवादों या प्रतिस्पर्धा के समय मन में घबराहट के स्थान पर धैर्य और आंतरिक बल मिलता है।',
          en: 'Provides psychological resilience and devotional fortitude when navigating stressful disputes or rivalries.',
        },
      },
      {
        title: { hi: 'षष्ठ भाव एवं मंगल-राहु दोष शांति', en: 'Mitigation of 6th-House Planetary Pressures' },
        explanation: {
          hi: 'कुंडली के छठे भाव (शत्रु-ऋण-रोग) तथा मंगल-राहु के उग्र गोचर को शांत करने का यह अचूक पारंपरिक उपाय है।',
          en: 'Astrologically recommended to calm aggressive planetary combinations linked to Mars, Rahu, and Saturn.',
        },
      },
      {
        title: { hi: 'मन के आंतरिक विकारों का स्तम्भन', en: 'Restraining Mind\'s Internal Negativity' },
        explanation: {
          hi: 'आध्यात्मिक दृष्टि से माँ बगलामुखी साधक के अंदर काम, क्रोध और अहंकार के वेग को शांत कर देती हैं।',
          en: 'Spiritual philosophy attributes to Maa the power to silence internal demons of ego, wrath, and greed.',
        },
      },
      {
        title: { hi: 'शास्त्रोक्त पीताम्बरी विधि-विधान', en: 'Strict Scriptural Pithambari Ritual' },
        explanation: {
          hi: 'विशुद्ध हल्दी की माला, पीले वस्त्र, पीले पुष्प और कठोर सात्विक अनुशासन के साथ अनुष्ठान संपन्न होता है।',
          en: 'Conducted using authentic yellow turmeric malas, yellow asana, and strictly disciplined Vedic/Tantric rules.',
        },
      },
      {
        title: { hi: 'धर्मनिष्ठ आचरण और नैतिक विजय', en: 'Ethical & Dharmic Grounding' },
        explanation: {
          hi: 'भक्त को सत्य के मार्ग पर चलने की प्रेरणा मिलती है और वह बदले की भावना से मुक्त होकर शांति पाता है।',
          en: 'Anchors the devotee in righteousness (Dharma), discouraging malice while fostering peaceful resolution.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'शत-प्रतिशत सात्विक एवं वैदिक मर्यादाओं के अनुरूप संपादन, किसी भी तामसिक क्रिया से पूर्णतः मुक्त।',
        en: 'Performed with absolute Satvik discipline, devoid of any improper or harmful practices.',
      },
      {
        hi: 'शाक्तागम एवं मार्कण्डेय परंपरा के अनुसार माँ पीताम्बरा के स्वरूप का गहरा शास्त्रीय ज्ञान।',
        en: 'Deeply knowledgeable in the Shaktagama and Puranic methods of Maa Pitambari worship.',
      },
      {
        hi: 'बीज मंत्रों का शुद्ध व्याकरणसम्मत एवं छंदयुक्त उच्चारण ताकि किसी प्रकार का दोष न रहे।',
        en: 'Correct Vedic Sankalp and mantra pronunciation avoiding dangerous grammatical distortions.',
      },
      {
        hi: 'अनुष्ठान के दौरान यजमान के आचार-विचार, आहार और नियमों का निष्ठापूर्वक मार्गदर्शन।',
        en: 'Guidance regarding strict dietary rules and code of conduct for the Jatak during the Puja.',
      },
      {
        hi: 'पूरी सुरक्षा, गोपनीयता और सनातन धार्मिक परंपरा का सम्मान।',
        en: 'Complete safety, transparency, and traditional sanctity maintained throughout the ceremony.',
      },
      {
        hi: 'बिना किसी अवास्तविक या चमत्कारिक दावों के केवल वास्तविक ईश्वरीय भक्ति व प्रार्थना।',
        en: 'No fraudulent promises of instant magical outcomes; purely devotional and scriptural guidance.',
      },
    ],
  },

  'navratri': {
    id: 'navratri',
    name: { hi: 'नवरात्रि पूजा', en: 'Navratri Puja' },
    mainDeity: { hi: 'माँ दुर्गा / नवदुर्गा (शैलपुत्री से सिद्धिदात्री तक)', en: 'Maa Durga / Navadurga (Shailaputri to Siddhidatri)' },
    religiousPurpose: {
      hi: 'शारदीय एवं चैत्र नवरात्रि में घटस्थापना, अखण्ड ज्योति, दुर्गा सप्तशती पाठ, नवार्ण जप एवं कन्या पूजन।',
      en: 'Ghatasthapana, Akhand Jyoti, Durga Saptashati recital, Navarna Mantra Japa, and Kanya Pujan during Navratri.',
    },
    traditionalReason: {
      hi: 'आद्यशक्ति की कृपा, धर्म की वृद्धि, आत्मिक एवं शारीरिक शुद्धि, तथा नौ दिनों के कठोर व्रत-संयम द्वारा जीवन में सकारात्मकता।',
      en: 'Seeking the blessings of Adi Shakti, righteous living, physical and spiritual purification through nine days of devotional discipline.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार जीवन की सुस्ती, तमोगुण, पारिवारिक उदासी एवं नकारात्मक ऊर्जा के निवारण हेतु।',
      en: 'Traditionally believed to dispel lethargy, ignorance (Tamas), familial gloom, and stagnant negative energies.',
    },
    spiritualSignificance: {
      hi: 'दिव्य नारी शक्ति (शक्ति तत्व) की आराधना, आंतरिक शुद्धि, नव रूपों के ध्यान से चेतना का उत्तरोत्तर विकास।',
      en: 'Worship of the primordial divine feminine, systematic purification, and gradual spiritual ascent through the 9 divine forms.',
    },
    familySignificance: {
      hi: 'घर में मातृ-शक्ति का आदर, संतान का मंगल, पारिवारिक सौहार्द एवं उत्सवपूर्ण आनंद की स्थापना।',
      en: 'Fostering respect for motherhood, auspiciousness for children, family harmony, and collective festive joy.',
    },
    personalSignificance: {
      hi: 'संयम, आत्मनियंत्रण, सात्विक आहार-विचार, आंतरिक ऊर्जा का संचय एवं प्रफुल्लित मन।',
      en: 'Cultivating temperance, self-restraint, sattvic lifestyle, reservoir of spiritual vitality, and cheerful disposition.',
    },
    jyotishSignificance: {
      hi: 'नवग्रहों की शांति तथा कुंडली में राहु-केतु एवं चंद्र दोषों की सौम्यता हेतु नवरात्रि पूजन को सर्वोत्तम माना गया है।',
      en: 'Navratri anushthan is revered in Jyotish for harmonizing all nine planets and softening lunar and nodal afflictions.',
    },
    categories: {
      spiritual: [
        { hi: 'नौ दिनों तक माँ दुर्गा के विभिन्न स्वरूपों के ध्यान से आत्मिक चेतना का उत्थान।', en: 'Elevating spiritual consciousness through nine days of contemplation on Navadurga.' },
        { hi: 'सात्विक उपवास और जप द्वारा मन, वचन एवं कर्म की गहन शुद्धि।', en: 'Deep purification of thought, word, and deed through disciplined fasting.' },
        { hi: 'देवी के प्रति निष्काम भक्ति और मातृ-भाव का हृदय में प्रकटीकरण।', en: 'Awakening selfless devotion and maternal reverence in the heart.' },
        { hi: 'असुर प्रवृत्तियों (अहंकार, वासना, आलस्य) पर देवी कृपा से विजय।', en: 'Triumphing over negative internal impulses through divine grace.' },
      ],
      religious: [
        { hi: 'शास्त्रोक्त कलश स्थापना, जौ बोना, अखण्ड दीप प्रज्वलन एवं नित्य आरती।', en: 'Ghatasthapana, barley sowing, continuous lamp lighting, and daily Aarti.' },
        { hi: 'दुर्गा सप्तशती के तेरह अध्यायों का नित्य नियमपूर्वक पाठ एवं नवार्ण जप।', en: 'Daily recitation of the 13 chapters of Durga Saptashati and Navarna Japa.' },
        { hi: 'अष्टमी/नवमी तिथि पर हवन एवं नौ कन्याओं का पावन पूजन एवं आशीर्वाद।', en: 'Ashtami/Navami Havan and reverent worship of nine young girls (Kanya Pujan).' },
        { hi: 'सनातन पर्व-परंपरा का निष्ठापूर्वक निर्वहन एवं कुल-कल्याण।', en: 'Faithful observance of Sanatan festive traditions for lineage prosperity.' },
      ],
      family: [
        { hi: 'घर में नौ दिनों तक निरंतर सकारात्मक एवं दिव्य तरंगों का संचार।', en: 'Infusing the home with nine continuous days of sacred energy.' },
        { hi: 'परिवार के सभी सदस्यों में भक्तिभाव, उल्लास और सहयोग की वृद्धि।', en: 'Enhancing family devotion, festive cheer, and mutual cooperation.' },
        { hi: 'मातृ-शक्ति के आशीर्वाद से घर में शांति, समृद्धि और सुरक्षा का वातावरण।', en: 'Blessings of maternal energy fostering peace, prosperity, and safety.' },
      ],
      personal: [
        { hi: 'उपवास और साधना से मानसिक शांति, शारीरिक स्फूर्ति और हल्कापन।', en: 'Promoting mental peace, physical vitality, and lightness through fasting.' },
        { hi: 'निर्णय लेने में स्पष्टता, उत्साह और नकारात्मक विचारों से मुक्ति।', en: 'Cultivating clarity in decision-making and freedom from negative thoughts.' },
        { hi: 'जीवन की बाधाओं से जूझने के लिए अद्वितीय आंतरिक मनोबल।', en: 'Developing extraordinary psychological stamina to navigate challenges.' },
      ],
      specificPurpose: [
        { hi: 'वर्ष के पावन संधिकाल (ऋतु परिवर्तन) पर देवी उपासना द्वारा प्राकृतिक और आत्मिक संतुलन।', en: 'Harmonizing seasonal and spiritual energies during equinoctial junctures.' },
        { hi: 'माँ भगवती से धर्म, अर्थ, काम और मोक्ष के सहज संतुलन की प्रार्थना।', en: 'Praying for righteous balance among Dharma, Artha, Kama, and Moksha.' },
        { hi: 'व्यक्तिगत अथवा पारिवारिक संकल्प की सिद्धि हेतु नौ दिवसीय गहन अनुष्ठान।', en: 'Fulfilling specific devotional vows through intense 9-day anushthan.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आत्मिक शुद्धि (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'नौ दिनों के कठोर व्रत, जप और ध्यान से मन की अशुद्धियां दूर होकर गहन शांति प्राप्त होती है।',
          en: 'Fosters deep devotional tranquility through systematic 9-day fasting and sacred contemplation.',
        },
      },
      {
        benefit: { hi: 'मातृ कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'आद्यशक्ति माँ जगदम्बा के नौ रूपों का वात्सल्यपूर्ण आशीर्वाद और अभयदान प्राप्त होता है।',
          en: 'Dedicated to Maa Jagadamba, conferring maternal protection, wisdom, and inner grace.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सौहार्द (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'घर में मातृ-शक्ति का आदर बढ़ता है और पूरे परिवार में उल्लास, प्रेम और एकता का संचार होता है।',
          en: 'Unites the household in celebratory worship, honoring maternal energy and family lineage.',
        },
      },
      {
        benefit: { hi: 'दैवीय रक्षा कवच (Protection)', en: 'Protection' },
        significance: {
          hi: 'अखण्ड ज्योति और देवी कवच के पाठ से घर और सदस्यों को नकारात्मक शक्तियों से सुरक्षा मिलती है।',
          en: 'Revered as a divine shield against lingering psychic negativity and housebound gloom.',
        },
      },
      {
        benefit: { hi: 'समृद्धि एवं ऐश्वर्य (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'माता महालक्ष्मी और अन्नपूर्णा की अनुकंपा से घर में धन-धान्य, बरकत और यश की वृद्धि होती है।',
          en: 'Traditionally associated with the arrival of Mahalakshmi and auspicious domestic abundance.',
        },
      },
      {
        benefit: { hi: 'बाधाओं का विनाश (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'दुर्गा सप्तशती के प्रभाव से जीवन में लंबे समय से अटके कार्यों और संकटों का शमन होता है।',
          en: 'Traditionally believed to weaken stagnant karmic bottlenecks across life domains.',
        },
      },
      {
        benefit: { hi: 'मनोबल एवं उत्साह (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'आलस्य, निराशा और भय का नाश होकर मन में नई ऊर्जा, सकारात्मकता और आत्मबल आता है।',
          en: 'Calms emotional volatility, infusing the mind with optimism, discipline, and clarity.',
        },
      },
      {
        benefit: { hi: 'चेतना का उत्थान (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'कुंडलिनी व शक्ति तत्व का जागरण होकर साधक स्थूल कामनाओं से ऊपर उठकर आत्म-कल्याण पाता है।',
          en: 'Awakens inner Kundalini/Shakti consciousness, leading the seeker from gross to subtle awareness.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'नौ दिवसीय पावन ऊर्जा संचय', en: 'Comprehensive 9-Day Sacred Energy Consecration' },
        explanation: {
          hi: 'नौ दिनों तक माँ दुर्गा के विभिन्न स्वरूपों की नित्य पूजा से घर का वातावरण दैवीय ऊर्जा से भर जाता है।',
          en: 'Daily worship of the nine forms of Maa Durga systematically elevates spiritual and mental vibrations.',
        },
      },
      {
        title: { hi: 'घटस्थापना एवं अखण्ड दीप की प्रतिष्ठा', en: 'Ghatasthapana & Akhand Deep Sanctification' },
        explanation: {
          hi: 'शास्त्रोक्त कलश स्थापना और नौ दिनों तक अनवरत जलने वाला अखण्ड दीप घर में प्रकाश और शुद्धि का संचार करता है।',
          en: 'Establishes a sanctified altar (Mandap) radiating continuous light, purity, and spiritual vigilance.',
        },
      },
      {
        title: { hi: 'संपूर्ण दुर्गा सप्तशती का पाठ', en: 'Full Durga Saptashati Recitation' },
        explanation: {
          hi: 'मार्कण्डेय पुराण के 700 श्लोकों का पाठ आसुरी प्रवृत्तियों पर दैवीय शक्ति की विजय का संदेश देता है।',
          en: 'The sacred 700 verses from Markandeya Purana praise the victory of light over dark forces, purifying the mind.',
        },
      },
      {
        title: { hi: 'सात्विक जीवनशैली और आत्म-शुद्धि', en: 'Sattvic Lifestyle & Mind-Body Detox' },
        explanation: {
          hi: 'उपवास, नियम और प्रार्थना से शरीर और मन दोनों की शुद्धि होती है तथा एकाग्रता में वृद्धि होती है।',
          en: 'The traditional regimen of fasting, prayer, and pure diet restores physical lightness and mental sharpness.',
        },
      },
      {
        title: { hi: 'नवग्रहों का अनुकूल प्रभाव', en: 'Navagraha Alignment & Celestial Harmony' },
        explanation: {
          hi: 'नवरात्रि के प्रत्येक दिन की अधिष्ठात्री देवी कुंडली के संबंधित ग्रह दोषों को शांत कर अनुकूलता प्रदान करती हैं।',
          en: 'Each day corresponds with divine archetypes that traditionally pacify planetary imbalances in one\'s chart.',
        },
      },
      {
        title: { hi: 'पावन कन्या पूजन एवं आशीर्वाद', en: 'Sacred Kanya Pujan & Cumulative Blessing' },
        explanation: {
          hi: 'नौ कन्याओं को देवी स्वरूप मानकर पूजन और भोजन कराने से कुल को परम पुण्य और सौभाग्य प्राप्त होता है।',
          en: 'Honoring young girls as living embodiments of Shakti invokes heartfelt grace for future generations.',
        },
      },
      {
        title: { hi: 'धार्मिक संकल्प की सिद्धि', en: 'Fulfillment of Devotional Sankalp' },
        explanation: {
          hi: 'परिवार के कल्याण, स्वास्थ्य और अभीष्ट कार्य की सफलता के लिए लिया गया संकल्प शास्त्रोक्त रूप से पूर्ण होता है।',
          en: 'Completes religious vows undertaken for family prosperity, peaceful milestones, and spiritual progress.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'दुर्गा सप्तशती के संपुट एवं छंदों का शुद्ध संस्कृत एवं शास्त्रोक्त लय के साथ पारायण।',
        en: 'Mastery in traditional Chandi Paath with perfect metric cadence (Chhanda) and Samputa Vidhi.',
      },
      {
        hi: 'सर्वतोभद्र, नवग्रह एवं मातृका मंडल की प्रामाणिक वैदिक ज्यामितीय रचना।',
        en: 'Proper establishment of Sarvatobhadra, Navagraha, and Devi Mandals with authentic Vedic geometry.',
      },
      {
        hi: 'नौ दिनों तक दैनिक पूजन, अखण्ड ज्योति और आरती का निरंतर विद्वत्तापूर्ण संचालन।',
        en: 'Continuous daily guidance on ritual observances, Ahuti preparation, and daily Aarti procedures.',
      },
      {
        hi: 'अष्टमी/नवमी तिथि पर उत्तम हविष्य, खीर एवं औषधियों से विधिपूर्वक महाहवन का संपादन।',
        en: 'Performance of authentic Navami Havan with prescribed aromatic herbs, payasam, and dry fruits.',
      },
      {
        hi: 'कन्या पूजन को पूर्ण आदर, श्रद्धा और पारंपरिक मर्यादा के साथ संपन्न कराना।',
        en: 'Sincere, culturally grounded Kanya Pujan conducted with highest respect and humility.',
      },
      {
        hi: 'काशी की अन्नपूर्णा एवं विशालाक्षी देवी की पावन परंपरा के अनुसार अनुष्ठान का संचालन।',
        en: 'Bringing the sacred devotional vibration of Kashi\'s Maa Annapurna and Durga Kshetras into your home.',
      },
    ],
  },

  'shatchandi': {
    id: 'shatchandi',
    name: { hi: 'शतचंडी पाठ', en: 'Shatchandi Paath' },
    mainDeity: { hi: 'माँ चण्डिका / महाकाली, महालक्ष्मी, महासरस्वती (दुर्गा सप्तशती के १०० पाठ)', en: 'Maa Chandika / Mahakali, Mahalakshmi, Mahasaraswati (100 recitations of Durga Saptashati)' },
    religiousPurpose: {
      hi: 'मार्कण्डेय पुराणोक्त श्री दुर्गा सप्तशती के १०० संपूर्ण पाठों का विद्वान ब्राह्मणों द्वारा समवेत वाचन, संपुट जप एवं महायज्ञ।',
      en: 'Collective recitation of 100 complete readings of Sri Durga Saptashati by learned Vedic scholars with Samputa and Maha Yagya.',
    },
    traditionalReason: {
      hi: 'अत्यंत गंभीर संकटों के निवारण, राष्ट्र/समाज/कुटुंब की रक्षा, असाधारण बाधाओं की शांति एवं परम कल्याण की कामना।',
      en: 'Performed for averting grave adversities, protection of family/community, pacifying deep-seated impediments, and supreme auspiciousness.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार बड़े व्यापारिक संकट, असाध्य पारिवारिक विपत्तियां, तीव्र ग्रह पीड़ा एवं अज्ञात व्याधियों के शमन हेतु।',
      en: 'Traditionally believed to mitigate overwhelming financial collapses, profound lineage misfortunes, and complex astrological afflictions.',
    },
    spiritualSignificance: {
      hi: 'सप्तशती के ७०० श्लोकों की सामूहिक ध्वनि से ब्रह्माण्डीय शक्ति का आह्वान एवं आत्मा का पूर्ण शुद्धिकरण।',
      en: 'Invoking cosmic Shakti vibrations through collective chanting of 700 verses, leading to radical spiritual purification.',
    },
    familySignificance: {
      hi: 'वंश की दीर्घकालीन सुरक्षा, कुल-परंपरा का गौरव, बड़े संकटों से मुक्ति एवं कई पीढ़ियों के कल्याण की भावना।',
      en: 'Long-term spiritual protection for the entire lineage, upholding family honor, and invoking multigenerational blessings.',
    },
    personalSignificance: {
      hi: 'असीम आत्मबल, निर्भयता, नेतृत्व क्षमता का विकास एवं भारी उत्तरदायित्वों को वहन करने का धैर्य।',
      en: 'Bestowing unmatched inner courage, absolute fearlessness, leadership qualities, and mental stamina under pressure.',
    },
    jyotishSignificance: {
      hi: 'समस्त ग्रहों के सामूहिक अरिष्ट, राहु-शनि की भीषण युति अथवा अष्टमेश-द्वादशेश के महादोषों की शांति हेतु यह महा-अनुष्ठान विहित है।',
      en: 'Regarded in Vedic Jyotish as the supreme pacifying mega-ritual for catastrophic planetary transits and collective dasha afflictions.',
    },
    categories: {
      spiritual: [
        { hi: 'शतचंडी के महा-अनुष्ठान से उत्पन्न अद्वितीय आध्यात्मिक ऊर्जा एवं सात्विक वातावरण।', en: 'Incomparable spiritual energy and sattvic environment from the 100-recitation rite.' },
        { hi: 'माँ चण्डिका के उग्र एवं सौम्य दोनों रूपों के सामंजस्य से अहंकार का पूर्ण शमन।', en: 'Complete dissolution of ego through contemplating Chandika\'s fierce and gentle forms.' },
        { hi: 'साधकों एवं यजमान के अंतर्मन में परम चेतना और निर्भयता का संचार।', en: 'Awakening transcendent consciousness and fearlessness in seeker and host.' },
        { hi: 'वैदिक एवं पौराणिक मंत्रों के संपुट से आत्मा का उदात्तीकरण।', en: 'Sublimation of the soul through Vedic and Puranic Samputa hymns.' },
      ],
      religious: [
        { hi: 'योग्य एवं वेदपाठी ब्राह्मणों के समूह द्वारा १०० बार दुर्गा सप्तशती का संपूर्ण पारायण।', en: '100 complete readings of Durga Saptashati by Vedic scholars.' },
        { hi: 'प्रत्येक पाठ के साथ कवच, अर्गला, कीलक, प्रधानिक, वैकृतिक एवं मूर्तिक रहस्य का वाचन।', en: 'Full chanting of Kavach, Argala, Keelak, and the three mystic Rahasya texts.' },
        { hi: 'विशाल यज्ञवेदी पर दशांश आहुतियों, पायस, घृत एवं औषधि द्रव्यों का महा-हवन।', en: 'Grand Maha Havan with thousands of ahutis of ghee, payasam, and herbs.' },
        { hi: 'शास्त्रसम्मत विधि से पूर्ण संकल्प, ब्राह्मण-भोजन एवं दक्षिणा समर्पण।', en: 'Complete Shastric Sankalp, Brahmin feasting, and respectful Dakshina.' },
      ],
      family: [
        { hi: 'परिवार एवं कुल पर मंडरा रहे बड़े संकटों के शमन हेतु सामूहिक धार्मिक कवच।', en: 'Collective spiritual armor mitigating grave perils facing family and lineage.' },
        { hi: 'पीढ़ियों के लिए सुख, संपत्ति, यश और सम्मान की प्राप्ति की मंगल-प्रार्थना।', en: 'Prayers for enduring happiness, wealth, honor, and renown across generations.' },
        { hi: 'कुटुंब में किसी भी प्रकार के भारी क्लेश या विभाजनकारी प्रवृत्तियों का शमन।', en: 'Pacifying severe domestic discord or divisive tendencies.' },
      ],
      personal: [
        { hi: 'गंभीर संकटों के समय अगाध मानसिक दृढ़ता और विचलित न होने का धैर्य।', en: 'Immense mental firmness and unwavering composure during crises.' },
        { hi: 'निराशा और भय के गहरे बादलों को चीरकर नई आशा और आत्मविश्वास का उदय।', en: 'Dispelling dark clouds of despair, giving rise to renewed hope and faith.' },
        { hi: 'सत्य और धर्म के प्रति अटूट निष्ठा का विकास।', en: 'Deepening unshakeable devotion to truth and Dharma.' },
      ],
      specificPurpose: [
        { hi: 'असाधारण और असाध्य जीवन-परिस्थितियों में देवी की सर्वोच्च कृपा प्राप्त करने का संकल्प।', en: 'Seeking supreme divine grace during extraordinary life trials.' },
        { hi: 'पारंपरिक रूप से कुल-रक्षा, राज्य-सम्मान और सामूहिक कल्याण हेतु आयोजित किया जाने वाला महायज्ञ।', en: 'Historically organized for lineage protection, high honor, and societal welfare.' },
        { hi: 'पूर्ण शास्त्रोक्त विधि से १० अथवा उससे अधिक विद्वानों के मार्गदर्शन में निष्पादन।', en: 'Conducted under the direct leadership of 10 or more learned Acharyas.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'परम आध्यात्मिक शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'सप्तशती के 100 पाठों की गूंज से अंतर्मन और संपूर्ण वातावरण में अद्वितीय शांति स्थापित होती है।',
          en: 'Envelops the environment in high-intensity sacred vibrations, dispelling deep existential disquiet.',
        },
      },
      {
        benefit: { hi: 'भगवती चण्डिका कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'माँ चण्डिका के सर्वोच्च स्वरूप का आशीर्वाद प्राप्त होता है, जिससे साधक के समस्त संताप मिटते हैं।',
          en: 'Dedicated to Supreme Goddess Chandika, drawing Her all-encompassing protection and grace.',
        },
      },
      {
        benefit: { hi: 'कुल एवं वंश रक्षा (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'यह महा-अनुष्ठान पूरे परिवार और आने वाली पीढ़ियों के लिए एक अभेद्य आध्यात्मिक सुरक्षा कवच बनता है।',
          en: 'Revered as a monumental blessing that shields the family lineage from structural misfortunes.',
        },
      },
      {
        benefit: { hi: 'महा-कवच सुरक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'पारंपरिक मान्यतानुसार बड़े से बड़े अनिष्ट, प्रबल शत्रुता और असाध्य संकटों से रक्षा होती है।',
          en: 'Traditionally considered the pinnacle spiritual fortress against intense hostility and adversity.',
        },
      },
      {
        benefit: { hi: 'महालक्ष्मी ऐश्वर्य (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'रुके हुए बड़े व्यापारिक कार्य, प्रतिष्ठा और वैभव की पुनर्प्राप्ति हेतु शतचंडी महायज्ञ किया जाता है।',
          en: 'Invokes Mahalakshmi in Her supreme aspect for reviving stalled enterprises and stability.',
        },
      },
      {
        benefit: { hi: 'असाध्य बाधा निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'वर्षों से चले आ रहे जटिल अवरोधों, कानूनी उलझनों और महादोषों को शांत करने का अचूक विधान है।',
          en: 'Traditionally performed to break persistent multi-year stalemates and severe afflictions.',
        },
      },
      {
        benefit: { hi: 'अजेय आत्मबल (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'व्यक्ति के भीतर असीम साहस, निर्भयता और कठिन से कठिन समय में नेतृत्व करने की क्षमता आती है।',
          en: 'Restores monumental confidence, resilience, and emotional unshakeability without medical claims.',
        },
      },
      {
        benefit: { hi: 'कर्म शुद्धि एवं मोक्ष (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'संचित कर्मों के बंधनों को काटकर साधक को आत्म-साक्षात्कार और मोक्ष की दिशा में अग्रसर करता है।',
          en: 'Accelerates spiritual maturity, dissolving deep karmic encumbrances and ego barriers.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: '100 संपूर्ण सप्तशती पाठों का महा-अनुष्ठान', en: 'Monumental 100-Recitation Vedic Anushthan' },
        explanation: {
          hi: 'काशी के विद्वान ब्राह्मणों के समूह द्वारा नियमपूर्वक 100 बार दुर्गा सप्तशती का संपूर्ण पाठ संपन्न कराया जाता है।',
          en: 'Conducted collectively by a team of learned Vedic Pandits reciting the sacred Durga Saptashati 100 times.',
        },
      },
      {
        title: { hi: 'कुल एवं वंश के लिए अभेद्य सुरक्षा कवच', en: 'Supreme Protective Kavach for Family & Lineage' },
        explanation: {
          hi: 'मार्कण्डेय पुराण के अनुसार शतचंडी महायज्ञ से पूरे कुल और परिवार पर दैवीय सुरक्षा घेरा स्थापित होता है।',
          en: 'According to Markandeya Purana, Shatchandi Yagya creates an unassailable spiritual shield around the family.',
        },
      },
      {
        title: { hi: 'भीषण ग्रह दोषों एवं अरिष्टों की शांति', en: 'Pacification of Severe Planetary Combinations' },
        explanation: {
          hi: 'कुंडली के सबसे कठिन ग्रह योगों, साढ़ेसाती एवं राहु महादशा के तीव्र कष्टों को शांत करने का यह सर्वोच्च उपाय है।',
          en: 'Considered the premier Vedic remedy for severe multi-planet afflictions, Sade Sati, and Rahu Mahadasha.',
        },
      },
      {
        title: { hi: 'विशाल दशांश महाहवन एवं दिव्य आहुतियां', en: 'Grand Dashansh Maha-Havan & Aromatic Herbs' },
        explanation: {
          hi: 'सहस्रों आहुतियों, शुद्ध घृत, पायस एवं दुर्लभ आयुर्वेदिक समिधाओं से वातावरण का वृहद शुद्धिकरण होता है।',
          en: 'Thousands of sacred ahutis infused with guggulu, camphor, clarified butter, and herbs purify the macro-atmosphere.',
        },
      },
      {
        title: { hi: 'असाधारण मानसिक संबल और निर्भयता', en: 'Immense Psychological Resilience & Fearlessness' },
        explanation: {
          hi: 'यजमान को जीवन के सबसे बड़े संघर्षों और उत्तरदायित्वों को संभालने का अद्वितीय साहस और धैर्य मिलता है।',
          en: 'Infuses the devotee with extraordinary inner strength to face monumental life, business, or administrative challenges.',
        },
      },
      {
        title: { hi: 'परिवार की कीर्ति, वैभव और प्रतिष्ठा की वृद्धि', en: 'Revival of Family Fortunes and Honor' },
        explanation: {
          hi: 'पारंपरिक रूप से कुल-प्रतिष्ठा की रक्षा, व्यापारिक पुनरुत्थान और सामाजिक सम्मान की वृद्धि हेतु किया जाता है।',
          en: 'Devotees historically sponsor this ritual seeking revival of auspicious fortune, fame, and ethical success.',
        },
      },
      {
        title: { hi: 'पूर्ण शास्त्रोक्त विधि एवं शुचिता', en: 'Absolute Scriptural Adherence & Purity' },
        explanation: {
          hi: 'कवच, अर्गला, कीलक, संपुट एवं रहस्य सहित सभी शास्त्रीय अंगों का पालन करते हुए अनुष्ठान पूर्ण होता है।',
          en: 'Conducted under rigorous Shastric oversight with complete Nyasa, Kavach, Samputa, and Kanya-Brahmin Bhojan.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'वाराणसी के वरिष्ठ चंडी आचार्यों के मार्गदर्शन में संचालित, जिन्हें पीढ़ियों का शास्त्रीय अनुभव प्राप्त है।',
        en: 'Orchestrated by a seasoned team of Vedic Acharyas from Varanasi with generational expertise in Chandi Vidhan.',
      },
      {
        hi: '100 पाठों की संख्या और प्रत्येक संपुट की शुद्धता का पूर्ण व्यवस्थित और पारदर्शी अभिलेख।',
        en: 'Exact maintenance of recitation counts, ensuring not a single verse or samputa is rushed or skipped.',
      },
      {
        hi: 'शुल्ब सूत्रों के अनुसार यज्ञवेदी का शास्त्रसम्मत निर्माण और अग्नि की वैदिक स्थापना।',
        en: 'Vedic Havan Kund construction matching geometric Shulba Sutra dimensions with proper fire invocation.',
      },
      {
        hi: 'अनुष्ठान में सम्मिलित सभी ब्राह्मणों द्वारा यम, नियम, उपवास एवं ब्रह्मचर्य का कठोर पालन।',
        en: 'Strict adherence to the Yamas and Niyamas (fasting, silence, celibacy) by all participating Pandits during Anushthan.',
      },
      {
        hi: 'मुख्य संकल्पों, पूर्णाहुति एवं महाप्रसाद में यजमान परिवार की प्रत्यक्ष व ससम्मान सहभागिता।',
        en: 'Transparent, dignified execution with complete participation of the Yajaman in all major Sankalpas.',
      },
      {
        hi: 'बिना किसी आडंबर के विशुद्ध वैदिक कर्मकांड और आध्यात्मिक मर्यादा का अटूट पालन।',
        en: 'No exaggerated superstitious claims; pure, dignified, and authentic Vedic ritualism.',
      },
    ],
  },

  'navchandi': {
    id: 'navchandi',
    name: { hi: 'नवचंडी पाठ', en: 'Navchandi Paath' },
    mainDeity: { hi: 'माँ चण्डिका / नवदुर्गा (दुर्गा सप्तशती के ९ संपूर्ण पाठ)', en: 'Maa Chandika / Navadurga (9 complete recitations of Durga Saptashati)' },
    religiousPurpose: {
      hi: 'दुर्गा सप्तशती के ९ संपूर्ण पाठ, नवार्ण मंत्र जप, अंग-न्यास, शापोद्धार एवं विधिपूर्वक हवन का अनुष्ठान।',
      en: 'Nine complete recitations of Sri Durga Saptashati, Navarna Japa, Anga Nyasa, Shapoddhara, and formal Havan.',
    },
    traditionalReason: {
      hi: 'पारिवारिक सुख-समृद्धि, संकटों की शांति, शत्रुभय निवारण तथा घर में मंगलकारी ऊर्जा के संचार हेतु।',
      en: 'Performed for household prosperity, pacification of persistent troubles, freedom from fear, and infusing sacred vitality.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार बार-बार बनते कार्यों का बिगड़ना, पारिवारिक अशांति, नकारात्मक ऊर्जा एवं मानसिक तनाव।',
      en: 'Traditionally believed to mitigate recurring delays, persistent domestic friction, negative energy, and chronic stress.',
    },
    spiritualSignificance: {
      hi: 'माता जगदम्बा के प्रति अनन्य समर्पण, तामसिक प्रवृत्तियों का विनाश एवं सात्विक शक्ति की वृद्धि।',
      en: 'Surrender to Mother Jagadamba, overcoming tamasic tendencies, and enhancing spiritual vitality.',
    },
    familySignificance: {
      hi: 'घर के सदस्यों में प्रेम, स्वास्थ्य लाभ, विघ्नों से सुरक्षा एवं पारिवारिक मांगलिक कार्यों का मार्ग प्रशस्त होना।',
      en: 'Cultivating mutual love, health benefits, protection from obstacles, and clearing paths for auspicious family ceremonies.',
    },
    personalSignificance: {
      hi: 'उत्साह, आत्मविश्वास, मानसिक स्पष्टता एवं विपरीत परिस्थितियों में संतुलन बनाए रखने की क्षमता।',
      en: 'Infusing enthusiasm, self-belief, mental clarity, and maintaining balance during adversity.',
    },
    jyotishSignificance: {
      hi: 'राहु, केतु, शनि अथवा मंगल के क्रूर गोचर एवं महादशा जनित कष्टों के निवारणार्थ नवचंडी अत्यंत प्रभावशाली मानी गई है।',
      en: 'In traditional Jyotish, Navchandi is considered highly efficacious for pacifying afflictions of Rahu, Ketu, Saturn, and Mars.',
    },
    categories: {
      spiritual: [
        { hi: 'दुर्गा सप्तशती के नौ पारायणों से अंतःकरण की गहरी शुद्धि और सात्विकता का संचार।', en: 'Deep purification and sattvic transformation through nine recitations.' },
        { hi: 'माँ भगवती की कृपा से आत्मिक शांति एवं भक्ति भाव का सुदृढ़ीकरण।', en: 'Strengthening inner peace and devotional warmth by Devi\'s grace.' },
        { hi: 'मन के संशयों और नकारात्मक विचारों का पारंपरिक रूप से शमन।', en: 'Calming doubts and negative mental chatter according to tradition.' },
        { hi: 'साधना और नित्य पूजा के प्रति अभिरुचि में वृद्धि।', en: 'Deepening regular interest in prayer, meditation, and spiritual practice.' },
      ],
      religious: [
        { hi: 'शापोद्धार, उत्कीलन, कवच, कीलक और अर्गला सहित ९ संपूर्ण पाठों की पूर्णता।', en: 'Full chanting of Shapoddhara, Utkilana, Kavach, Keelak, and Argala.' },
        { hi: 'नवार्ण महामंत्र का विधिवत जप और दशांश हवन का आयोजन।', en: 'Systematic chanting of Navarna Mantra and conducting Dashansh Havan.' },
        { hi: 'धार्मिक संकल्प के अनुसार देवी का पावन आशीर्वाद और भोग समर्पण।', en: 'Seeking sacred blessings and offering consecrated Naivedya.' },
        { hi: 'ब्राह्मण पूजन, कन्या पूजन एवं यथायोग्य दक्षिणा से अनुष्ठान की संपूर्णता।', en: 'Brahmin worship, Kanya Pujan, and respectful Dakshina completion.' },
      ],
      family: [
        { hi: 'गृह परिवेश में विद्यमान कलह और तनाव के वातावरण की शांति।', en: 'Soothes persistent domestic disputes and stressful atmospheres.' },
        { hi: 'परिवार के सदस्यों के स्वास्थ्य, सुरक्षा और उन्नति की मंगलकामना।', en: 'Prayers for health, security, and advancement for all members.' },
        { hi: 'घर में मांगलिक कार्यों (विवाह, संतान प्राप्ति, गृह प्रवेश) में आने वाले व्यवधानों का पारंपरिक शमन।', en: 'Softening hurdles facing upcoming auspicious family ceremonies.' },
      ],
      personal: [
        { hi: 'आत्मविश्वास में वृद्धि और भय तथा संकोच से मुक्ति।', en: 'Boosting confidence and overcoming fear or hesitation.' },
        { hi: 'कार्यक्षेत्र एवं व्यक्तिगत जीवन में स्पष्ट और संतुलित निर्णय लेने की क्षमता।', en: 'Clear, balanced judgment in professional and personal arenas.' },
        { hi: 'मानसिक तनाव से राहत और आंतरिक ऊर्जा का अनुभव।', en: 'Relief from chronic stress and feeling renewed vitality.' },
      ],
      specificPurpose: [
        { hi: 'परिवार की सामर्थ्य और समयानुसार ९ पाठों के माध्यम से सप्तशती के पूर्ण फल की प्राप्ति।', en: 'Attaining full scriptural merit of Saptashati through nine organized recitations.' },
        { hi: 'घर में सकारात्मक ऊर्जा का पुनर्संचार और सभी दिशाओं का दैवीय शुद्धिकरण।', en: 'Revitalizing domestic energy and purifying all spatial directions.' },
        { hi: 'विशेष मनोकामना पूर्ति अथवा कृतज्ञता ज्ञापन हेतु समर्पित अनुष्ठान।', en: 'Dedicated ritual for fulfilling vows or expressing humble gratitude.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आध्यात्मिक शुद्धि (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'दुर्गा सप्तशती के 9 पाठों से घर और मन की नकारात्मकता दूर होकर शांति का वास होता है।',
          en: 'Cleanses the home atmosphere through the ninefold recitation of Durga Saptashati.',
        },
      },
      {
        benefit: { hi: 'भगवती कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'माँ चण्डिका का ममतामयी और रक्षाकारी आशीर्वाद पूरे परिवार को प्राप्त होता है।',
          en: 'Dedicated to Maa Chandika, invoking Her compassionate and protective maternal grace.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सुख-शांति (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'घर के कलह-क्लेश शांत होते हैं और सदस्यों में परस्पर विश्वास और सहयोग बढ़ता है।',
          en: 'Brings domestic peace, resolves long-standing friction, and fosters understanding.',
        },
      },
      {
        benefit: { hi: 'नकारात्मक ऊर्जा से रक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'बुरी दृष्टि, ईर्ष्या और अज्ञात बाधाओं से घर को सुरक्षित रखने की पारंपरिक मान्यता है।',
          en: 'Traditionally sought to dispel subtle negative energies and ward off unseen hazards.',
        },
      },
      {
        benefit: { hi: 'समृद्धि एवं प्रगति (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'व्यापार, नौकरी और आर्थिक कार्यों में आने वाले अवरोध हटकर स्थिरता आती है।',
          en: 'Encourages auspicious financial flow, professional steadiness, and home blessings.',
        },
      },
      {
        benefit: { hi: 'कार्य बाधा निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'विवाह, शिक्षा अथवा व्यवसाय में बार-बार आने वाली अड़चनों को शांत करने में सहायक माना जाता है।',
          en: 'Traditionally believed to dissolve recurring blockages in education, marriage, and work.',
        },
      },
      {
        benefit: { hi: 'मानसिक सुकून (Mental/Emotional Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'तनाव, चिंता और अनिद्रा से राहत मिलकर मन में नवीन ऊर्जा और उत्साह का संचार होता है।',
          en: 'Soothes persistent anxiety and emotional restlessness without medical claims.',
        },
      },
      {
        benefit: { hi: 'धार्मिक निष्ठा (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'देवी भक्ति दृढ़ होती है और जीवन में सदाचार व नित्य पूजा-पाठ की प्रेरणा मिलती है।',
          en: 'Instills deep devotion to Devi, inspiring regular prayer and righteous conduct.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'नौ संपूर्ण सप्तशती पारायण', en: 'Ninefold Complete Saptashati Recitation' },
        explanation: {
          hi: '700 श्लोकों के 9 संपूर्ण पाठों द्वारा सप्तशती अनुष्ठान का पूर्ण शास्त्रीय फल प्राप्त होता है।',
          en: 'Nine full readings of the 700 verses ensure complete scriptural fulfillment of the sacred Chandi vow.',
        },
      },
      {
        title: { hi: 'शापोद्धार एवं उत्कीलन सहित शास्त्रीय विधि', en: 'Traditional Shapoddhara & Utkilana Rites' },
        explanation: {
          hi: 'प्राचीन गोपनीय कुंजिका और शापोद्धार मंत्रों के साथ पाठ कर मंत्रों की पूर्ण जागृति की जाती है।',
          en: 'Recited with esoteric preliminary keys unlocking the full devotional resonance of the sacred text.',
        },
      },
      {
        title: { hi: 'पारिवारिक तनाव एवं कलह की शांति', en: 'Family Discord Resolution' },
        explanation: {
          hi: 'घर के सदस्यों में प्रेम बढ़ता है और अकारण होने वाले विवादों व गलतफहमियों का अंत होता है।',
          en: 'Creates a harmonious household climate, reducing interpersonal irritation and misunderstandings.',
        },
      },
      {
        title: { hi: 'प्रतिकूल ग्रह दशाओं का शमन', en: 'Pacification of Malefic Astrological Dashas' },
        explanation: {
          hi: 'राहु, केतु, शनि और मंगल की कठिन दशा-अंतर्दशा में शांति हेतु ज्योतिषाचार्यों द्वारा अनुशंसित।',
          en: 'Traditionally recommended by Jyotish vidwans during malefic Rahu, Ketu, and Saturn periods.',
        },
      },
      {
        title: { hi: 'मांगलिक कार्यों के लिए शुभ वातावरण', en: 'Auspicious Energy for Life Milestones' },
        explanation: {
          hi: 'विवाह, नए गृह प्रवेश अथवा नए व्यापार के आरंभ से पूर्व दैवीय अनुकूलता हेतु अत्यंत उत्तम।',
          en: 'Often performed before major ventures, weddings, or business expansion to seek divine favor.',
        },
      },
      {
        title: { hi: 'दशांश हवन एवं औषधीय आहुतियां', en: 'Sacred Ahutis & Complete Havan' },
        explanation: {
          hi: 'शुद्ध सामग्री और पायस से संपन्न हवन घर के वातावरण को सुगंधित और पवित्र बना देता है।',
          en: 'Includes proper Dashansh Havan with sacred samagri, bringing peace and aromatic sanctity to the home.',
        },
      },
      {
        title: { hi: 'मानसिक स्पष्टता और नया आत्मविश्वास', en: 'Rejuvenated Mental Clarity & Courage' },
        explanation: {
          hi: 'भक्त को नई आशा, एकाग्रता और जीवन की चुनौतियों का सामना करने का आत्मबल मिलता है।',
          en: 'Empowers the devotee with renewed optimism, focus, and spiritual strength.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'काशी के दीक्षित एवं संस्कृत में पारंगत विद्वान ब्राह्मणों द्वारा शुद्ध उच्चारण के साथ पाठ।',
        en: 'Conducted by qualified Sanskrit scholars of Varanasi possessing proper initiation and Chandi Paath mastery.',
      },
      {
        hi: 'कवच, अर्गला, कीलक एवं तीनों रहस्यों सहित सभी अंगों का बिना किसी संक्षिप्तिकरण के वाचन।',
        en: 'Strict adherence to full preliminary prayers (Kavach, Argala, Keelak) and concluding Rahasya texts.',
      },
      {
        hi: 'मध्यम गति और शुद्ध छंद में पाठ ताकि प्रत्येक श्लोक का शास्त्रीय प्रभाव बना रहे।',
        en: 'Flawless metric chanting without skipped syllables, adhering to Shastric recitation speeds.',
      },
      {
        hi: 'नवार्ण यंत्र, कलश एवं शुद्ध पूजन सामग्री की प्रामाणिक व्यवस्था।',
        en: 'Proper arrangement of Navavarna Yantra, Kalash, and authentic Havan Samagri.',
      },
      {
        hi: 'यजमान परिवार के साथ विनम्र संकल्प और कन्या पूजन की आदरपूर्वक पूर्णता।',
        en: 'Sincere guidance on Sankalp, family participation, and respectful completion of Kanya Pujan.',
      },
      {
        hi: 'काशी की सनातन परंपरा के अनुसार निष्ठावान एवं पारदर्शी सेवा।',
        en: 'Honest, culturally authentic service rooted in centuries-old Kashi traditions.',
      },
    ],
  },

  'pitru-paksha': {
    id: 'pitru-paksha',
    name: { hi: 'पितृ पक्ष पूजा / श्राद्ध एवं तर्पण', en: 'Pitru Paksha Puja / Shraddha & Tarpan' },
    mainDeity: { hi: 'पितृ देव, भगवान यमराज एवं भगवान विष्णु (गदाधर / जनार्दन)', en: 'Pitru Devatas, Lord Yamaraja & Lord Vishnu (Gadadhara / Janardana)' },
    religiousPurpose: {
      hi: 'महालय पितृ पक्ष में पूर्वजों के निमित्त पिंडदान, तिल-तर्पण, श्राद्ध कर्म, ब्राह्मण भोजन एवं पंचबलि कर्म।',
      en: 'Pinda Daan, Tila Tarpan, Shraddha rituals, Brahmin Bhojan, and Panchabali offerings dedicated to departed ancestors during Mahalaya Paksha.',
    },
    traditionalReason: {
      hi: 'पितृ ऋण से मुक्ति का प्रयास, पूर्वजों के प्रति कृतज्ञता ज्ञापन, उनकी आत्मा की शांति एवं वंश वृद्धि हेतु आशीर्वाद।',
      en: 'Fulfilling sacred filial duty (Pitru Rina), expressing deep gratitude, praying for ancestral peace, and seeking blessings for descendants.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार पितृ दोष, वंश वृद्धि में बाधा, अकारण पारिवारिक अशांति एवं संतानों के विकास में अवरोध।',
      en: 'Traditionally believed to pacify Pitru Dosha, hindrances in progeny/lineage growth, unexplained domestic unrest, and child progress hurdles.',
    },
    spiritualSignificance: {
      hi: 'सनातन परंपरा में पूर्वजों और वर्तमान पीढ़ी के बीच आध्यात्मिक सेतु का निर्माण, कृतज्ञता एवं विनम्रता का संस्कार।',
      en: 'Establishing a sacred continuum between ancestors and descendants, cultivating gratitude, humility, and dharmic awareness.',
    },
    familySignificance: {
      hi: 'परिवार में पितरों के शुभाशीर्वाद से सौहार्द, संतानों का सुसंस्कृत होना, वंश की निरंतरता एवं सुख-शांति।',
      en: 'Harmonious family life blessed by ancestors, cultured upbringing of children, lineage continuity, and lasting peace.',
    },
    personalSignificance: {
      hi: 'कर्तव्य बोध, मन में अपराधबोध से मुक्ति, आत्मिक शांति एवं जीवन में स्थिरता की अनुभूति।',
      en: 'Fulfillment of duty, freedom from unresolved guilt, deep inner peace, and psychological groundedness.',
    },
    jyotishSignificance: {
      hi: 'कुंडली में सूर्य-राहु युति, नवम भाव की पीड़ा अथवा पितृ दोष के पारंपरिक समाधान हेतु पितृ पक्ष श्राद्ध सर्वोपरि कर्तव्य है।',
      en: 'In Jyotish, Shraddha during Pitru Paksha is the primary remedy for Sun-Rahu afflictions, 9th-house blemishes, and Pitru Dosha.',
    },
    categories: {
      spiritual: [
        { hi: 'दिवंगत पूर्वजों के प्रति श्रद्धा, स्मरण एवं कृतज्ञता प्रकट करने का पावन माध्यम।', en: 'Sacred medium to express gratitude and remembrance to departed ancestors.' },
        { hi: 'आत्मा की अमरता और सनातन पुनर्जन्म दर्शन के प्रति गहरी समझ का विकास।', en: 'Deepening realization of soul immortality and cosmic rebirth.' },
        { hi: 'सांसारिक अहंकार का त्याग और अपने मूल एवं पूर्वजों के प्रति विनम्रता।', en: 'Renouncing ego and bowing with humility before ancestral roots.' },
        { hi: 'पितरों की संतुष्टि से आत्मिक शांति एवं चित्त की स्थिरता।', en: 'Attaining serene peace through ancestral contentment.' },
      ],
      religious: [
        { hi: 'शास्त्रोक्त विधि से कुशा, तिल, जौ, अक्षत और जल द्वारा नित्य तर्पण कर्म।', en: 'Daily Tarpan using sacred Kusha grass, sesame seeds, barley, and water.' },
        { hi: 'पिंडदान, विष्णुपद स्मरण एवं महालय श्राद्ध की विधिपूर्वक पूर्णता।', en: 'Proper Pinda Daan, Vishnupada remembrance, and Mahalaya Shraddha.' },
        { hi: 'पंचबलि (गौ, श्वान, काक, देवादि एवं पिपीलिका) का पारंपरिक समर्पण।', en: 'Offering traditional Panchabali to cows, dogs, crows, Devas, and ants.' },
        { hi: 'योग्य ब्राह्मणों को भोजन, वस्त्र एवं यथायोग्य दक्षिणा द्वारा संतुष्ट करना।', en: 'Satisfying worthy Brahmins with food, clothing, and Dakshina.' },
      ],
      family: [
        { hi: 'पितरों के आशीर्वाद से वंश परंपरा का निर्बाध संरक्षण एवं संतानों की प्रगति।', en: 'Ensuring seamless lineage continuity and children\'s progress.' },
        { hi: 'पारिवारिक कलह और अज्ञात कारणों से उत्पन्न होने वाले तनाव का पारंपरिक शमन।', en: 'Pacifying domestic friction and unexplained hereditary anxieties.' },
        { hi: 'परिवार में सुख, समृद्धि, एकता और संस्कारों की सुदृढ़ स्थापना।', en: 'Establishing lasting domestic peace, prosperity, and cultural roots.' },
      ],
      personal: [
        { hi: 'अपने पूर्वजों के प्रति कर्तव्य पूर्ति से उत्पन्न गहरा आत्मसंतोष।', en: 'Deep psychological fulfillment born of duty discharged to forebears.' },
        { hi: 'जीवन में आने वाली अनजानी रुकावटों के प्रति आध्यात्मिक समाधान का विश्वास।', en: 'Faith in spiritual resolution of persistent life bottlenecks.' },
        { hi: 'संतान एवं परिवार के भविष्य के प्रति मानसिक शांति।', en: 'Peace of mind regarding future generations and children.' },
      ],
      specificPurpose: [
        { hi: 'भाद्रपद पूर्णिमा से आश्विन अमावस्या तक चलने वाले महालय काल में पूर्वजों का आह्वान।', en: 'Invoking departed souls during the sacred Mahalaya fortnight.' },
        { hi: 'पितृ लोक में स्थित पूर्वजों की तृप्ति एवं उनकी सद्गति हेतु प्रार्थना।', en: 'Praying for the peaceful onward journey and contentment of Pitrus.' },
        { hi: 'ऋषि ऋण, देव ऋण के साथ पितृ ऋण से मुक्ति का सनातन प्रयास।', en: 'Fulfilling the fundamental filial debt (Pitru Rina) of householders.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आत्मिक शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'पूर्वजों के प्रति श्रद्धा व्यक्त करने से अंतर्मन का शोक और अपराधबोध शांत होकर गहरी शांति मिलती है।',
          en: 'Brings immense psychological solace and contentment by honoring departed forebears.',
        },
      },
      {
        benefit: { hi: 'पितृ एवं विष्णु कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'भगवान विष्णु (गदाधर) एवं संतुष्ट पितृ देवों का मंगलमय आशीर्वाद पूरे कुल को प्राप्त होता है।',
          en: 'Dedicated to Pitru Devatas and Lord Vishnu, the eternal protector of ancestral realms.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक एकता (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'पूर्वजों के स्मरण से पूरे परिवार में आत्मीयता, बड़ों के प्रति आदर और कुल-परंपरा की सुदृढ़ता आती है।',
          en: 'Unites family branches in solemn respect, strengthening lineage solidarity and values.',
        },
      },
      {
        benefit: { hi: 'दैवीय पितृ-कवच (Protection)', en: 'Protection' },
        significance: {
          hi: 'संतुष्ट पूर्वजों का आशीर्वाद संतान और परिवार पर एक सुरक्षा कवच के रूप में कार्य करता है।',
          en: 'Invokes the protective benevolent aura of contented ancestors over descendants.',
        },
      },
      {
        benefit: { hi: 'वंश वृद्धि एवं समृद्धि (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'पारंपरिक विश्वास के अनुसार पितरों के आशीर्वाद से वंश वृद्धि, संतानों का उज्ज्वल भविष्य और बरकत मिलती है।',
          en: 'Traditionally linked with steady lineage growth, professional stability, and domestic peace.',
        },
      },
      {
        benefit: { hi: 'पितृ दोष निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'विवाह, संतान प्राप्ति अथवा कैरियर में पितृ दोष के कारण आने वाले अवरोधों की शांति होती है।',
          en: 'Traditionally believed to mitigate Pitru Dosha hurdles in marriage, progeny, and career.',
        },
      },
      {
        benefit: { hi: 'कर्तव्य बोध व संतोष (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'माता-पिता व पूर्वजों के प्रति अपना धार्मिक कर्तव्य निभाने से अपार आत्मसंतोष और शांति मिलती है।',
          en: 'Resolves latent filial guilt and emotional grief into serene gratitude without medical claims.',
        },
      },
      {
        benefit: { hi: 'संस्कार एवं कृतज्ञता (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'जीवन की नश्वरता का बोध होकर व्यक्ति में अहंकार का त्याग, दानशीलता और विनम्रता का विकास होता है।',
          en: 'Reinforces awareness of life\'s transience, cultivating humility, charity, and righteousness.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'पितृ ऋण से मुक्ति का पावन विधान', en: 'Fulfillment of Sacred Pitru Rina' },
        explanation: {
          hi: 'तर्पण और पिंडदान द्वारा अपने पूर्वजों के प्रति सनातन ऋण चुकाने का धार्मिक कर्तव्य पूरा होता है।',
          en: 'Performing Tarpan and Pinda Daan discharges the sacred filial obligation owed to departed generations.',
        },
      },
      {
        title: { hi: 'ज्योतिषीय पितृ दोष का शमन', en: 'Mitigation of Astrological Pitru Dosha' },
        explanation: {
          hi: 'कुंडली के नवम भाव और सूर्य-राहु युति से उत्पन्न दोषों के निवारण हेतु यह सबसे प्रामाणिक उपाय है।',
          en: 'Considered the foremost Shastric remedy for 9th-house solar afflictions and ancestral karmic imbalances.',
        },
      },
      {
        title: { hi: 'वंश वृद्धि और संतानों का कल्याण', en: 'Ancestral Blessings for Progeny (Vamsha Vriddhi)' },
        explanation: {
          hi: 'पारंपरिक मान्यता है कि संतुष्ट पितरों के आशीर्वाद से संतानें सुयोग्य, संस्कारी और दीर्घायु होती हैं।',
          en: 'Traditionally believed to bless descendants with good health, intellect, cultural values, and longevity.',
        },
      },
      {
        title: { hi: 'शास्त्रोक्त तिल तर्पण एवं पिंडदान', en: 'Scriptural Tila Tarpan & Pinda Daan' },
        explanation: {
          hi: 'गरुड़ पुराण एवं स्मृतियों के अनुसार कुशा, काले तिल, जौ और चावल के पिंड बनाकर विधिपूर्वक अर्पण।',
          en: 'Conducted using sacred Kusha grass, sesame seeds, barley, and rice balls as ordained in the Garuda Purana.',
        },
      },
      {
        title: { hi: 'पारंपरिक पंचबलि एवं जीव-दया', en: 'Traditional Panchabali & Charity' },
        explanation: {
          hi: 'गाय, कौए, कुत्ते और चींटियों को भोजन कराकर समस्त प्राणियों के प्रति कृतज्ञता और पुण्य अर्जित किया जाता है।',
          en: 'Feeding cows, crows, dogs, and ants generates universal positive karma and compassion.',
        },
      },
      {
        title: { hi: 'पारिवारिक सौहार्द और शांति की निरंतरता', en: 'Harmonious Household Continuity' },
        explanation: {
          hi: 'परिवार के भीतर चल रहे अज्ञात तनाव दूर होते हैं और घर में शांति व सामंजस्य का वातावरण बनता है।',
          en: 'Replaces recurring family misunderstandings with deep ancestral peace and benevolent goodwill.',
        },
      },
      {
        title: { hi: 'काशी तीर्थ की पावन महत्ता', en: 'Authentic Ganga Teerth & Kashi Sanctity' },
        explanation: {
          hi: 'मोक्षदायिनी काशी के गंगा तट पर विद्वान ब्राह्मणों द्वारा किया गया श्राद्ध पितरों को परम गति प्रदान करता है।',
          en: 'Performing these rites in Kashi or through Kashi scholars carries unparalleled scriptural merit for Pitrus.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'काशी मोक्ष एवं श्राद्ध-तर्पण की अनादि राजधानी है, जहां के ब्राह्मणों को पीढ़ियों का श्राद्ध-कर्म का अनुभव है।',
        en: 'Varanasi is the sacred capital of Moksha and Shraddha Vidhan with unbroken generational mastery.',
      },
      {
        hi: 'मातृकुल एवं पितृकुल के सभी पूर्वजों के गोत्र, प्रवर और नाम का यथायोग्य शास्त्रसम्मत उच्चारण।',
        en: 'Exact knowledge of Gotra, Pravara, Pinda formation, and Tarpan mantras for maternal and paternal lineages.',
      },
      {
        hi: 'षोडश श्राद्ध, त्रिपिंडी श्राद्ध एवं महालय तिथि का शास्त्रोक्त विधि से पूर्ण निष्पादन।',
        en: 'Proper execution of Shodasha Shraddha, Tripindi Shraddha, and Mahalaya Tithi rituals.',
      },
      {
        hi: 'प्रत्येक धार्मिक विधि (कुशा धारण, तिल अर्पण, पिंडदान) का यजमान को सहजता से मार्गदर्शन।',
        en: 'Sincere guidance ensuring no essential step or family relation is overlooked during invocations.',
      },
      {
        hi: 'पंचबलि एवं ब्राह्मण भोजन का पूर्ण गरिमा, शुचिता एवं सम्मान के साथ संपादन।',
        en: 'Conducting Panchabali and Brahmin Bhojan with highest decorum and scriptural propriety.',
      },
      {
        hi: 'बिना किसी अनुचित दबाव के पूरी निष्ठा, मर्यादा एवं यथायोग्य दक्षिणा विधान।',
        en: 'Transparent and respectful handling of all offerings without commercial exploitation.',
      },
    ],
  },

  'yagya': {
    id: 'yagya',
    name: { hi: 'यज्ञ / याग (महायज्ञ)', en: 'Yagya / Yaag (Maha Yagya)' },
    mainDeity: { hi: 'अग्नि देव, भगवान विष्णु (यज्ञो वै विष्णुः) एवं सर्व देवगण', en: 'Agni Deva, Lord Vishnu (Yajno Vai Vishnuh) & All Cosmic Divinities' },
    religiousPurpose: {
      hi: 'वेदोक्त विधि से विशाल वेदी निर्माण, प्रधान देवताओं का आह्वान, सहस्रों वैदिक मंत्रों से आहुति समर्पण एवं सामूहिक विश्व कल्याण प्रार्थना।',
      en: 'Vedic altar construction, invocation of cosmic deities, thousands of mantra offerings, and collective prayers for universal welfare.',
    },
    traditionalReason: {
      hi: 'पर्यावरण एवं समाज की शुद्धि, वर्षा एवं अन्न-समृद्धि, जन-कल्याण, सामूहिक शांति तथा वृहद धार्मिक संकल्प की सिद्धि।',
      en: 'Environmental and social purification, agricultural abundance, collective welfare, and fulfillment of major religious vows.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार सामाजिक अशांति, प्राकृतिक प्रकोप, सामूहिक क्लेश एवं व्यापक नकारात्मकता के शमन हेतु।',
      en: 'Traditionally believed to mitigate collective disharmony, environmental afflictions, societal friction, and widespread negative energies.',
    },
    spiritualSignificance: {
      hi: '"इदं न मम" (यह मेरा नहीं, ईश्वर का है) के भाव का जागरण, त्याग, परोपकार एवं समष्टि चेतना का विस्तार।',
      en: 'Awakening the spirit of selflessness ("Idam Na Mama" - not mine, but the Divine\'s), charity, and universal consciousness.',
    },
    familySignificance: {
      hi: 'यजमान परिवार के यश, कीर्ति, सामाजिक प्रतिष्ठा, धर्म में निष्ठा एवं सर्वतोमुखी मंगल की वृद्धि।',
      en: 'Enhancing the host family\'s noble reputation, social honor, dharmic steadfastness, and comprehensive well-being.',
    },
    personalSignificance: {
      hi: 'उदारता, अहंकार का विसर्जन, नेतृत्व क्षमता, मानसिक तृप्ति एवं महान आध्यात्मिक आनंद।',
      en: 'Cultivating magnanimity, dissolution of ego, visionary leadership, deep mental contentment, and sublime spiritual joy.',
    },
    jyotishSignificance: {
      hi: 'समस्त नवग्रहों एवं नक्षत्रों की सामूहिक तृप्ति तथा यजमान की जन्मकुंडली के प्रबल दोषों के शमन का सर्वोच्च साधन।',
      en: 'Considered the grandest method for appeasing all nine planetary deities, Nakshatra lords, and neutralizing major natal afflictions.',
    },
    categories: {
      spiritual: [
        { hi: 'वैदिक मंत्रों के समवेत नाद से आत्मिक चेतना का विराट विस्तार।', en: 'Vast expansion of spiritual consciousness through choral Vedic chants.' },
        { hi: 'त्याग और समर्पण की भावना का विकास, जिससे व्यक्तिगत संकीर्णताएं समाप्त होती हैं।', en: 'Dissolving narrow self-interest through selfless surrender.' },
        { hi: 'ईश्वर के विराट स्वरूप (यज्ञ पुरुष) के प्रति संपूर्ण शरणागति।', en: 'Complete surrender to the cosmic form of Yajna Purusha.' },
        { hi: 'अंतःकरण में परम शांति, पवित्रता और दिव्य आनंद का उदय।', en: 'Dawn of transcendent peace, purity, and divine bliss in the soul.' },
      ],
      religious: [
        { hi: 'वेदों के प्राचीन सूत्रों के अनुसार यूप, वेदी और कुण्डों का शास्त्रोक्त निर्माण।', en: 'Scriptural construction of Yupa, altar, and kundas per Vedic sutras.' },
        { hi: 'चारों वेदों के ज्ञाता ऋत्विजों (होता, अध्वर्यु, उद्गाता, ब्रह्मा) द्वारा अनुष्ठान का संचालन।', en: 'Officiated by priests representing the four Vedic traditions.' },
        { hi: 'लाखों मंत्रोच्चारों के साथ विशुद्ध घृत, औषधियों एवं समिधाओं का समर्पण।', en: 'Offering pure ghee, medicinal herbs, and sacred woods with thousands of mantras.' },
        { hi: 'महापूर्णाहुति, अवभृथ स्नान एवं सर्वकल्याणकारी संकल्प की पूर्णता।', en: 'Purnahuti, Avabhritha Snan, and universal welfare resolve.' },
      ],
      family: [
        { hi: 'यजमान परिवार की सामाजिक प्रतिष्ठा, कीर्ति और आध्यात्मिक प्रभाव में वृद्धि।', en: 'Enhancing the host family\'s societal honor and spiritual stature.' },
        { hi: 'परिवार में संस्कारों की सुदृढ़ता और आने वाली पीढ़ियों के लिए धर्मपरायण प्रेरणा।', en: 'Reinforcing cultural roots and righteous inspiration for posterity.' },
        { hi: 'घर-कुटुंब में स्थायी शांति, लक्ष्मी का वास और अमंगल का निवारण।', en: 'Enduring domestic peace, abiding Lakshmi, and dispelling ill fortune.' },
      ],
      personal: [
        { hi: 'व्यक्तिगत स्वार्थ से ऊपर उठकर लोक-कल्याण के लिए कार्य करने का संतोष।', en: 'Fulfillment born of serving public welfare above narrow self-interest.' },
        { hi: 'मन की संकीर्णताओं, चिंताओं और नकारात्मक विचारों से पूर्ण मुक्ति।', en: 'Complete freedom from mental pettiness, anxiety, and negativity.' },
        { hi: 'सकारात्मक ऊर्जा, ओज और आत्मविश्वास का अभूतपूर्व विकास।', en: 'Unprecedented growth of positive vitality, radiance, and confidence.' },
      ],
      specificPurpose: [
        { hi: 'गांव, समाज, राष्ट्र अथवा वृहद परिवार के सामूहिक कल्याण और सुख-समृद्धि हेतु।', en: 'Collective welfare and prosperity for society, community, and nation.' },
        { hi: 'पर्यावरण में सकारात्मक ऊर्जा का विस्तार और तामसिक प्रभावों की शांति।', en: 'Expanding positive environmental energy and pacifying tamasic influences.' },
        { hi: 'सनातन वैदिक परंपरा के सर्वोच्च अनुष्ठान का श्रद्धापूर्वक संपादन।', en: 'Devout execution of the pinnacle ceremony of Sanatan Vedic culture.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'विराट चेतना विस्तार (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'सामूहिक वैदिक मंत्रोच्चार और अग्नि की लपटों से अंतर्मन में परम शांति और विश्व बंधुत्व का भाव जगता है।',
          en: 'Elevates individual and collective consciousness through grand Vedic hymns and sacred fire resonance.',
        },
      },
      {
        benefit: { hi: 'सर्वदेव कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'यज्ञ पुरुष भगवान विष्णु और समस्त 33 कोटि देवताओं का समवेत आशीर्वाद प्राप्त होता है।',
          en: 'Dedicated to Yajna Purusha (Lord Vishnu) and all 33 cosmic Vedic divinities.',
        },
      },
      {
        benefit: { hi: 'कुल गौरव एवं यश (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'यजमान के पूरे परिवार और कुल को समाज में आदर, सम्मान और स्थायी मांगलिकता मिलती है।',
          en: 'Bestows enduring prestige, cultural unity, and dharmic pride upon the sponsoring family.',
        },
      },
      {
        benefit: { hi: 'सामूहिक सुरक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'पर्यावरण, समाज और परिवार पर आने वाले प्राकृतिक व सूक्ष्म संकटों से रक्षा का महाकवच बनता है।',
          en: 'Traditionally revered as a cosmic shield mitigating collective and environmental distress.',
        },
      },
      {
        benefit: { hi: 'सर्वतोमुखी समृद्धि (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'समाज में अन्न, वर्षा, स्वास्थ्य और व्यापार की समग्र वृद्धि की वैदिक प्रार्थना की जाती है।',
          en: 'Fosters macro-level abundance, societal flourishing, agricultural and commercial vitality.',
        },
      },
      {
        benefit: { hi: 'महाबाधा निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'व्यक्तिगत और सामाजिक स्तर के बड़े गतिरोधों, अकाल और नकारात्मक प्रभावों का शमन होता है।',
          en: 'Clears monumental hurdles, protracted stagnation, and pervasive planetary afflictions.',
        },
      },
      {
        benefit: { hi: 'उदात्त मनःस्थिति (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'संकीर्ण चिंताओं से मुक्ति मिलकर मन में उदारता, परोपकार और असीम मानसिक संतोष आता है।',
          en: 'Infuses deep magnanimity, peace of conscience, and freedom from narrow anxieties without medical claims.',
        },
      },
      {
        benefit: { hi: 'त्याग व "इदं न मम" (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'वैदिक त्याग का सर्वोच्च संस्कार जागृत होकर व्यक्ति को आत्म-कल्याण और ईश्वर-समर्पण की ओर ले जाता है।',
          en: 'Embodies the highest Vedic ideal of selfless sacrifice ("Idam Na Mama") and universal empathy.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'सनातन वैदिक संस्कृति का सर्वोच्च शिखर', en: 'The Pinnacle of Sanatan Vedic Rituals' },
        explanation: {
          hi: 'यज्ञ ब्रह्माण्ड, प्रकृति और मानव चेतना को संतुलित करने वाला सनातन धर्म का सर्वोपरि अनुष्ठान है।',
          en: 'Yagya represents the apex of Vedic culture, harmonizing cosmic, environmental, and individual energies.',
        },
      },
      {
        title: { hi: 'सामूहिक शांति एवं वृहद पर्यावरणीय शुद्धि', en: 'Collective Peace and Macro-Environmental Purity' },
        explanation: {
          hi: 'विशाल यज्ञवेदी में समर्पित औषधीय द्रव्यों का धुआं वायुमंडल को शुद्ध और सूक्ष्म प्रदूषण से मुक्त करता है।',
          en: 'Medicinal and aromatic herbs offered in massive sacred fires cleanse atmospheric impurities.',
        },
      },
      {
        title: { hi: 'समस्त ब्रह्माण्डीय शक्तियों की तृप्ति', en: 'Appeasement of All Cosmic Divinities' },
        explanation: {
          hi: 'अग्नि के माध्यम से सभी तैंतीस कोटि देवताओं का आह्वान कर पूरे समाज के लिए वरदान मांगा जाता है।',
          en: 'Invokes and honors the entire celestial pantheon, ensuring holistic blessing across all quarters.',
        },
      },
      {
        title: { hi: 'गहरे कर्म दोषों का समूल शमन', en: 'Dissolution of Deep-Seated Karmic Obstacles' },
        explanation: {
          hi: 'महायज्ञ के आयोजन से यजमान के जन्म-जन्मांतर के संचित पापों और बाधाओं का निवारण माना जाता है।',
          en: 'Sponsoring a Maha Yagya is traditionally believed to neutralize major astrological and karmic hindrances.',
        },
      },
      {
        title: { hi: 'पारिवारिक कीर्ति और अमर आध्यात्मिक धरोहर', en: 'Elevated Social Honor and Family Legacy' },
        explanation: {
          hi: 'यज्ञ का यजमान बनना कुल के लिए परम सौभाग्य, धर्मपरायणता और स्थायी यश का कारण बनता है।',
          en: 'Brings immense dharmic merit, community goodwill, and enduring spiritual legacy to the organizers.',
        },
      },
      {
        title: { hi: 'वसुधैव कुटुम्बकम् की भावना का जागरण', en: 'Awakening of Universal Consciousness' },
        explanation: {
          hi: '"सर्वे भवन्तु सुखिनः" के मूल मंत्र के साथ सभी प्राणियों के कल्याण की उदात्त प्रार्थना की जाती है।',
          en: 'Fosters the noble philosophy of Vasudhaiva Kutumbakam and universal brotherhood.',
        },
      },
      {
        title: { hi: 'श्रौत एवं स्मार्त सूत्रों के अनुसार संपादन', en: 'Authentic Shrauta & Smarta Protocols' },
        explanation: {
          hi: 'चारों वेदों के उद्गाता आचार्यों द्वारा पूर्ण शास्त्रीय नियमों और शुद्ध मंत्रोच्चार के साथ संपादन।',
          en: 'Executed by a full panel of traditional Acharyas adhering to rigid Vedic geometry and mantra precision.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'चारों वेदों (ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद) के ज्ञाता ऋत्विजों एवं प्रकांड आचार्यों का दल।',
        en: 'Led by eminent Acharyas of Varanasi steeped in Shrauta-Smarta Shastras and Yagya Vidhan.',
      },
      {
        hi: 'शुल्ब सूत्रों के अनुसार यूप, वेदी, सर्वतोभद्र और नवग्रह कुंडों की शास्त्रोक्त ज्यामितीय संरचना।',
        en: 'Accurate construction of traditional Yagya Mandap, Kundas, and Mandalas based on Sulba Sutras.',
      },
      {
        hi: 'विशुद्ध देशी गाय का घी, दुर्लभ जड़ी-बूटियां एवं शास्त्रोक्त समिधाओं का शत-प्रतिशत शुद्ध उपयोग।',
        en: 'Sourcing of pure, unadulterated Cow Ghee, rare Ayurvedic herbal samagri, and prescribed woods.',
      },
      {
        hi: 'महापूर्णाहुति, वसोर्धारा, अवभृथ स्नान एवं महाप्रसाद वितरण का भव्य एवं गरिमामयी आयोजन।',
        en: 'Execution of complete Purnahuti, Vasordhara, Avabhritha Snan, and Maha Prasad distribution.',
      },
      {
        hi: 'काशी की प्राचीनतम वैदिक यज्ञ परंपरा के अनुसार पूर्ण पारदर्शिता और मर्यादा का पालन।',
        en: 'Centuries of living heritage rooted in the unbroken Vedic sacrificial traditions preserved in Varanasi.',
      },
      {
        hi: 'विशाल आयोजनों का भी शांत, सात्विक एवं आध्यात्मिक गरिमा के साथ कुशल प्रबंधन।',
        en: 'Dignified management ensuring transparent, devotional, and sublime spiritual atmosphere.',
      },
    ],
  },

  'havan': {
    id: 'havan',
    name: { hi: 'हवन / होम अनुष्ठान', en: 'Havan / Sacred Fire Ritual' },
    mainDeity: { hi: 'अग्नि देव, गायत्री माता एवं इष्ट देवता', en: 'Agni Deva, Devi Gayatri & Ishta Devata' },
    religiousPurpose: {
      hi: 'हवन कुण्ड में पवित्र अग्नि प्रज्वलित कर औषधीय समिधा, हविष्य, घृत एवं मंत्रोच्चार के साथ आहुति समर्पण।',
      en: 'Igniting sacred fire in a consecrated Kunda and offering medicinal samidha, havishya, pure ghee, and Vedic mantras.',
    },
    traditionalReason: {
      hi: 'दैनिक/नैमित्तिक देवयज्ञ, घर की शुद्धि, मानसिक शांति, सकारात्मक ऊर्जा का संचार एवं ईश्वर के प्रति कृतज्ञता।',
      en: 'Nitya/Naimittika Deva Yajna, domestic atmospheric cleansing, mental peace, invoking positive energy, and offering gratitude.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार घर में सुस्ती, नकारात्मक स्पंदन, वास्तु दोष तथा पारिवारिक तनाव के शमन हेतु।',
      en: 'Traditionally believed to soothe domestic lethargy, negative vibrations, subtle architectural flaws, and household stress.',
    },
    spiritualSignificance: {
      hi: 'अग्नि के माध्यम से परमात्मा से सीधा संपर्क, हवि के समर्पण से त्याग का भाव एवं अंतःकरण की स्वच्छता।',
      en: 'Direct communion with the Divine through Agni, embodying selflessness through offerings, and mental purification.',
    },
    familySignificance: {
      hi: 'परिवार के सभी सदस्यों का साथ बैठकर आहुति देना, एकता, सुसंस्कार एवं घर में सुगंधित सात्विक वातावरण।',
      en: 'Bringing family together around sacred fire, fostering unity, righteous values, and aromatic satvik atmosphere.',
    },
    personalSignificance: {
      hi: 'मन की एकाग्रता, तनाव से राहत, सकारात्मक विचारों का प्रवाह एवं दिनचर्या में सात्विक ऊर्जा।',
      en: 'Sharpening mental concentration, relief from daily stress, cultivating positive thoughts, and daily vitality.',
    },
    jyotishSignificance: {
      hi: 'नवग्रहों की समिधाओं (मदार, पलाश, खदिर, अपामार्ग आदि) से हवन करने पर संबंधित ग्रहों की प्रतिकूलता शांत होती है।',
      en: 'Offering specific botanical woods (Arka, Palasha, Khadira, Apamarga) corresponding to planetary lords calms natal afflictions.',
    },
    categories: {
      spiritual: [
        { hi: 'पवित्र अग्नि शिखाओं के दर्शन और मंत्रोच्चार से मन में सात्विक भावों का संचार।', en: 'Contemplating sacred flames and mantras infuses sattvic emotions.' },
        { hi: 'अग्नि देव को माध्यम बनाकर सीधे परमात्मा तक अपनी प्रार्थनाएं पहुंचाना।', en: 'Transmitting prayers directly to the Divine via Agni Deva.' },
        { hi: 'व्यक्तिगत कामनाओं के स्थान पर व्यापक कल्याण की सात्विक भावना।', en: 'Nurturing universal welfare over narrow personal desires.' },
        { hi: 'दैनिक या आवधिक साधना में गहराई और आत्मिक संतोष की प्राप्ति।', en: 'Deepening regular spiritual practice and personal fulfillment.' },
      ],
      religious: [
        { hi: 'शास्त्रोक्त विधि से अग्नि की स्थापना, आवाह्न, पूजा एवं प्राणायाम।', en: 'Fire invocation, altar establishment, worship, and Pranayama.' },
        { hi: 'गायत्री मंत्र, महामृत्युंजय मंत्र अथवा इष्ट मंत्रों द्वारा १००८ या १०८ आहुतियां।', en: 'Offering 108 or 1008 oblations with Gayatri or Ishta mantras.' },
        { hi: 'औषधीय जड़ी-बूटियों, गूलर, आम, पीपल की समिधा और शुद्ध गाय के घी का प्रयोग।', en: 'Using herbal botanicals, holy samidha, and pure Cow Ghee.' },
        { hi: 'आरती, भस्म धारण एवं शांति पाठ के साथ अनुष्ठान की संपूर्णता।', en: 'Completing rites with Aarti, Bhasma application, and Shanti Path.' },
      ],
      family: [
        { hi: 'घर के वातावरण का प्राकृतिक एवं आध्यात्मिक शुद्धिकरण।', en: 'Natural and spiritual purification of domestic ambiance.' },
        { hi: 'परिवार के बच्चों और बुजुर्गों में सनातन संस्कारों और सद्भावना का विकास।', en: 'Fostering cultural values and goodwill across generations.' },
        { hi: 'घर में फैली नकारात्मक ऊर्जा, तनाव और कलह का पारंपरिक रूप से शमन।', en: 'Pacifying negative domestic vibrations and household friction.' },
      ],
      personal: [
        { hi: 'हवन की सुगंधित वायु और मंत्र ध्वनि से मानसिक तनाव और थकावट में राहत।', en: 'Aromatic smoke and sacred sound relieve fatigue and mental stress.' },
        { hi: 'मन की चंचलता दूर होकर एकाग्रता और सकारात्मक दृष्टिकोण में वृद्धि।', en: 'Enhancing concentration, optimism, and mental poise.' },
        { hi: 'दिन भर के कार्यों के लिए नई ऊर्जा, उत्साह और शांति की अनुभूति।', en: 'Renewed vitality, enthusiasm, and serenity for daily duties.' },
      ],
      specificPurpose: [
        { hi: 'गृह प्रवेश, जन्मदिन, विवाह वर्षगांठ, मास संक्रांति या किसी नए कार्य के आरंभ पर।', en: 'Conducted for birthdays, housewarmings, anniversaries, and new ventures.' },
        { hi: 'नियमित रूप से घर की ऊर्जा को पुनर्जीवित और पवित्र रखने का सनातन उपाय।', en: 'Regular method to keep home energy revitalized and sacred.' },
        { hi: 'सरल, सुलभ और अत्यंत प्रभावशाली वैदिक नित्य-कर्म।', en: 'Accessible, effective, and deeply beneficial Vedic daily/periodic ritual.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'चित्त शुद्धि (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'अग्नि में आहुति देने और मंत्रों के श्रवण से मन के विकार जलकर नष्ट होते हैं और शांति मिलती है।',
          en: 'Calms the mind through rhythmic offerings and contemplating the purifying flames of Agni.',
        },
      },
      {
        benefit: { hi: 'अग्नि देव कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'अग्नि देव के माध्यम से इष्ट देवता को हविष्य प्राप्त होता है और उनका शुभाशीर्वाद मिलता है।',
          en: 'Dedicated to Agni Deva (the divine messenger) and your Ishta Devata.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सौहार्द (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'सपरिवार हवन कुंड के चारों ओर बैठकर आहुति देने से पारिवारिक प्रेम और संस्कारों की वृद्धि होती है।',
          en: 'Gathers the family together in shared prayer, strengthening familial affection.',
        },
      },
      {
        benefit: { hi: 'पर्यावरण व वास्तु शुद्धि (Protection)', en: 'Protection' },
        significance: {
          hi: 'गुग्गल, कपूर, लोबान और गाय के घी का धुआं घर के वातावरण को रोगाणुमुक्त और सात्विक बनाता है।',
          en: 'Traditionally believed to cleanse stagnant domestic energies and ward off subtle negativity.',
        },
      },
      {
        benefit: { hi: 'आर्थिक व कार्य उन्नति (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'नित्य अथवा मासिक हवन से घर में बरकत आती है और आजीविका के कार्यों में सकारात्मकता बढ़ती है।',
          en: 'Encourages auspicious progress, ethical productivity, and domestic fulfillment.',
        },
      },
      {
        benefit: { hi: 'दैनिक बाधा निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'दैनिक कार्यों में आने वाली रुकावटों और मानसिक सुस्ती को दूर करने का पारंपरिक उपाय है।',
          en: 'Traditionally performed to remove persistent hindrances in daily endeavors.',
        },
      },
      {
        benefit: { hi: 'मानसिक स्फूर्ति (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'हवन की पवित्र सुगंध से मस्तिष्क को विश्राम मिलता है और तनाव व अनिद्रा में कमी आती है।',
          en: 'Aromatic herbal smoke and mantras promote psychological relaxation and clarity.',
        },
      },
      {
        benefit: { hi: 'पंचमहायज्ञ निर्वहन (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'गृहस्थ के पांच महायज्ञों में से देवयज्ञ का निष्ठापूर्वक पालन होकर आत्म-कल्याण होता है।',
          en: 'Nurtures a habit of daily gratitude, charity, and alignment with cosmic order (Rita).',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'वातावरणीय एवं आध्यात्मिक शुद्धिकरण', en: 'Atmospheric & Spiritual Purification' },
        explanation: {
          hi: 'गुग्गल, कपूर, औषधीय जड़ी-बूटियों और शुद्ध घी की आहुतियां घर की नकारात्मक ऊर्जा और गंध को दूर करती हैं।',
          en: 'Sacred fire offerings of guggal, camphor, herbs, and pure ghee physically and energetically purify the home.',
        },
      },
      {
        title: { hi: 'ईश्वर से सीधा संपर्क माध्यम', en: 'Direct Vedic Conduit to Divinity' },
        explanation: {
          hi: 'वैदिक दर्शन में अग्नि को देवताओं का मुख माना गया है, जो हमारी प्रार्थनाओं को सीधे प्रभु तक पहुंचाती है।',
          en: 'In Vedic philosophy, Agni is the cosmic mouth of the Devas, delivering your prayers directly.',
        },
      },
      {
        title: { hi: 'दैनिक तनाव और बेचैनी से मुक्ति', en: 'Reduction in Daily Stress & Agitation' },
        explanation: {
          hi: 'हवन में बैठने से मन को गहरा विश्राम मिलता है और भागदौड़ भरी जिंदगी की थकान शांत होती है।',
          en: 'Participating in Havan creates a meditative pause, easing mental fatigue and promoting tranquil focus.',
        },
      },
      {
        title: { hi: 'नवग्रहों की वानस्पतिक समिधा शांति', en: 'Planetary Botanical Pacification' },
        explanation: {
          hi: 'ग्रहों के अनुसार विशिष्ट समिधाओं (आक, ढाक, दूर्वा, शमी) से आहुति देकर ग्रह दोषों को शांत किया जाता है।',
          en: 'Utilizes specific planetary samidhas (woods) to gently harmonize astrological transit influences.',
        },
      },
      {
        title: { hi: 'बच्चों में सनातन संस्कारों का बीजारोपण', en: 'Instilling Dharmic Values in Family' },
        explanation: {
          hi: 'नई पीढ़ी को भारतीय संस्कृति, मंत्रोच्चार और सात्विक जीवन के प्रत्यक्ष संस्कार मिलते हैं।',
          en: 'Provides children and family members with a tangible, beautiful experience of Sanatan rituals.',
        },
      },
      {
        title: { hi: 'किसी भी शुभ कार्य के लिए मंगलमय आरंभ', en: 'Auspicious Start for Any Life Undertaking' },
        explanation: {
          hi: 'जन्मदिन, विवाह वर्षगांठ, नए व्यवसाय अथवा संक्रांति पर हवन कराना सर्वथा शुभ और कल्याणकारी है।',
          en: 'Ideal for birthdays, housewarmings, anniversaries, and new business ventures.',
        },
      },
      {
        title: { hi: 'पवित्र भस्म धारण एवं शांति पाठ', en: 'Concluded with Sacred Bhasma & Shanti Path' },
        explanation: {
          hi: 'हवन के बाद माथे पर भस्म तिलक लगाना विनम्रता, पवित्रता और ईश्वरीय संरक्षण का प्रतीक है।',
          en: 'Applying sanctified Bhasma serves as a continuous reminder of purity, modesty, and divine grace.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'गृह्य सूत्रों और वैदिक कर्मकांड के अनुसार अग्नि प्रज्वलन, स्वाहाकार और आहुति की शुद्ध विधि।',
        en: 'Knowledgeable in proper Agnihotra and Grihya Havan procedures according to North Indian traditions.',
      },
      {
        hi: 'शत-प्रतिशत शुद्ध देशी गाय का घी और प्रामाणिक आयुर्वेदिक हवन सामग्री का प्रयोग।',
        en: 'Use of 100% pure Cow Ghee and genuine Ayurvedic Havan Samagri free of artificial fillers.',
      },
      {
        hi: 'स्विष्टकृत आहुति, बलि वैश्वदेव एवं पूर्ण आहुति का शास्त्रीय क्रमबद्ध संपादन।',
        en: 'Accurate recitation of Swaha mantras, Svishtakrit Ahuti, and Balivaishvadeva rites.',
      },
      {
        hi: 'परिवार के प्रत्येक सदस्य को आहुति देने और मंत्र समझने का धैर्यपूर्वक अवसर।',
        en: 'Punctual, dignified, and patient conduct ensuring that every family member offers Ahuti properly.',
      },
      {
        hi: 'घर पर नित्य अथवा मासिक लघु हवन करने की सरल और व्यावहारिक विधि का मार्गदर्शन।',
        en: 'Guidance on easy daily or monthly maintenance of home Havan practices.',
      },
      {
        hi: 'काशी की ज्ञान परंपरा के अनुरूप पूरी विनम्रता, निष्ठा और पारदर्शी दक्षिणा विधान।',
        en: 'Respectful Vedic decorum with transparent guidance on samagri and dakshina.',
      },
    ],
  },

  'shiva-upasana': {
    id: 'shiva-upasana',
    name: { hi: 'शिव जी की उपासना', en: 'Worship of Lord Shiva' },
    mainDeity: { hi: 'भगवान शिव (सदाशिव / भोलेनाथ / आशुतोष)', en: 'Lord Shiva (Sadashiva / Bholenath / Ashutosh)' },
    religiousPurpose: {
      hi: 'भगवान शिव का नित्य/सोमवार पूजन, बिल्वपत्र-जलाभिषेक, शिव पंचाक्षर मंत्र ("ॐ नमः शिवाय") जप, शिव महिम्न/चालीसा पाठ।',
      en: 'Regular/Monday worship of Lord Shiva with Bilva leaves, water oblations, Shiva Panchakshari Mantra ("Om Namah Shivaya") chanting, and hymns.',
    },
    traditionalReason: {
      hi: 'आत्मिक शांति, वैराग्य, क्रोध एवं अहंकार का नियंत्रण, मोक्ष की कामना तथा आशुतोष भगवान शिव की सहज कृपा प्राप्ति।',
      en: 'Inner peace, non-attachment, mastering anger and ego, seeking liberation (Moksha), and invoking the effortless grace of Ashutosh Shiva.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार मानसिक अस्थिरता, अनिद्रा, क्रोध, भ्रम एवं जीवन की निराशा के शमन हेतु।',
      en: 'Traditionally believed to soothe emotional turbulence, sleep disturbances, volatile temper, and feelings of desolation.',
    },
    spiritualSignificance: {
      hi: 'सांसारिक मोह-माया के बीच अनासक्ति, आत्म-साक्षात्कार, चित्त की एकाग्रता एवं ध्यान की पराकाष्ठा।',
      en: 'Cultivating detachment amidst worldly duties, self-realization, unwavering mental focus, and zenith of meditative absorption.',
    },
    familySignificance: {
      hi: 'शिव-पार्वती परिवार की भांति घर में सामंजस्य, परस्पर आदर, सादगी एवं संतोषपूर्ण पारिवारिक जीवन।',
      en: 'Emulating the harmonious Shiv-Parivar archetype, fostering mutual respect, simplicity, and contented household life.',
    },
    personalSignificance: {
      hi: 'क्रोध पर नियंत्रण, मानसिक शीतलता, विनम्रता, निर्णय लेने में गंभीरता एवं गहन आंतरिक शांति।',
      en: 'Mastering anger, cultivating mental coolness, humility, measured decision-making, and deep inner stillness.',
    },
    jyotishSignificance: {
      hi: 'चंद्रमा (मन) के दोष, शनि की ढैय्या/साढ़ेसाती एवं विष योग की शांति हेतु शिव उपासना को सबसे सुलभ एवं श्रेष्ठ माना गया है।',
      en: 'In Jyotish, worship of Shiva is revered as the primary panacea for lunar afflictions (Chandra Dosha), Saturn\'s Sade Sati, and Vish Yoga.',
    },
    categories: {
      spiritual: [
        { hi: 'पंचाक्षर मंत्र "ॐ नमः शिवाय" के निरंतर चिंतन से मन का अंतर्मुखी एवं शांत होना।', en: 'Constant contemplation of the Panchakshari mantra soothes and centers the mind.' },
        { hi: 'शिव स्वरूप की सादगी और वैराग्य से प्रेरित होकर सांसारिक लोभ से मुक्ति।', en: 'Freedom from worldly greed inspired by Shiva\'s ascetic simplicity.' },
        { hi: 'ध्यान (मेडिटेशन) की स्वाभाविक प्राप्ति और आत्म-बोध की दिशा में प्रगति।', en: 'Effortless meditative absorption and progress toward self-realization.' },
        { hi: 'ईश्वर के प्रति सहज, निश्छल और निष्कपट भक्ति का विकास।', en: 'Developing pure, unpretentious, and unshakeable devotion.' },
      ],
      religious: [
        { hi: 'नित्य शिवलिंग पर शीतल जल, श्वेत पुष्प, भस्म एवं बिल्वपत्र का समर्पण।', en: 'Daily offerings of cool water, white flowers, sacred ash, and Bilva leaves.' },
        { hi: 'सोमवार व्रत, प्रदोष व्रत, मासिक शिवरात्रि का शास्त्रसम्मत नियम पालन।', en: 'Observance of Monday fasts, Pradosh, and monthly Shivratri.' },
        { hi: 'शिव स्तोत्र, रुद्राष्टकम्, शिव ताण्डव स्तोत्र अथवा लिंगाष्टकम् का मधुर पाठ।', en: 'Melodious chanting of Rudrashtakam, Shiva Tandava, and Lingashtakam.' },
        { hi: 'आरती एवं कर्पूर गौरम् मंत्र से भगवान आशुतोष की स्तुति।', en: 'Praising Lord Ashutosh with Aarti and Karpura Gauram verses.' },
      ],
      family: [
        { hi: 'परिवार में सादगी, संतोष और विवादों से दूर रहने की सात्विक प्रवृत्ति।', en: 'Fostering simplicity, contentment, and peaceful coexistence in the home.' },
        { hi: 'शिव-गौरी के आदर्श दांपत्य से प्रेरित होकर पति-पत्नी में मधुर संबंध।', en: 'Sweet marital harmony inspired by the divine archetype of Shiva-Gauri.' },
        { hi: 'संतानों में नैतिक मूल्यों, संयम और बड़ों के प्रति आदर का भाव।', en: 'Cultivating moral discipline, modesty, and respect in children.' },
      ],
      personal: [
        { hi: 'क्रोध, अधीरता और भावनात्मक उथल-पुथल पर सहज नियंत्रण।', en: 'Effortless mastery over anger, impatience, and emotional turbulence.' },
        { hi: 'मानसिक तनाव के समय चंद्रमा जैसी शीतलता और शांति का अनुभव।', en: 'Experiencing cooling, serene mental stillness during stressful periods.' },
        { hi: 'कठिन से कठिन परिस्थिति में भी आंतरिक रूप से स्थिर और अडिग रहने का सामर्थ्य।', en: 'Inner stamina to remain poised and steadfast amidst adversity.' },
      ],
      specificPurpose: [
        { hi: 'भगवान शिव के "भोलेनाथ" स्वरूप से बिना किसी आडंबर के सहज कृपा प्राप्त करना।', en: 'Invoking the effortless grace of Bholenath through sincere devotion.' },
        { hi: 'दैनिक जीवन में आध्यात्मिक अनुशासन और मन की निर्मलता बनाए रखना।', en: 'Maintaining daily spiritual discipline and purity of heart.' },
        { hi: 'जीवन के अंतिम लक्ष्य मोक्ष एवं जन्म-मरण के भय से मुक्ति की प्रार्थना।', en: 'Praying for ultimate liberation (Moksha) and freedom from existential fear.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'परम मानसिक शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'सदाशिव के ध्यान से चित्त की चंचलता शांत होती है और व्यक्ति को गहन आंतरिक मौन की प्राप्ति होती है।',
          en: 'Imparts profound stillness, cooling worldly agitation through the meditative grace of Sadashiva.',
        },
      },
      {
        benefit: { hi: 'भोलेनाथ कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'आशुतोष भगवान शिव सच्चे हृदय से अर्पित एक लोटा जल और विल्वपत्र से भी प्रसन्न होकर आशीर्वाद देते हैं।',
          en: 'Dedicated to Lord Shiva (Bholenath), who quickly grants peace to sincere devotees.',
        },
      },
      {
        benefit: { hi: 'शिव-परिवार सामंजस्य (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'शिव-गौरी और गणेश-कार्तिकेय के आदर्श परिवार की भांति घर में विभिन्न स्वभावों के बीच भी प्रेम बना रहता है।',
          en: 'Inspired by the Shiv-Parivar ideal of unity amidst diverse individual temperaments.',
        },
      },
      {
        benefit: { hi: 'नीलकंठ रक्षा कवच (Protection)', en: 'Protection' },
        significance: {
          hi: 'विषपान करने वाले भगवान नीलकंठ अपने भक्तों को सांसारिक कटुता और नकारात्मक प्रभावों से बचाते हैं।',
          en: 'Devotees seek Shiva\'s supreme protection from toxic negative influences (Nilakantha aspect).',
        },
      },
      {
        benefit: { hi: 'संतोष व समृद्धि (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'शिव उपासना से अनावश्यक लालच मिटता है और जीवन में सादगीपूर्ण सुख और स्थिरता आती है।',
          en: 'Blesses with contentment, wise stewardship of resources, and spiritual richness.',
        },
      },
      {
        benefit: { hi: 'मानसिक विकार शमन (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'चंद्रमा और शनि जनित मानसिक तनाव, भ्रम और अवसाद की ग्रंथियों को खोलने में सहायक है।',
          en: 'Dissolves mental complexes, procrastination, and astrological lunar afflictions.',
        },
      },
      {
        benefit: { hi: 'क्रोध पर नियंत्रण (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'शिव जी की शांत मुद्रा से प्रेरणा पाकर व्यक्ति अपने उग्र स्वभाव और अधीरता पर विजय प्राप्त करता है।',
          en: 'Promotes emotional poise, reduced reactivity, and freedom from panic without medical claims.',
        },
      },
      {
        benefit: { hi: 'वैराग्य व आत्मज्ञान (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'सांसारिक मोह-माया के बीच रहते हुए भी अनासक्त भाव और आत्म-कल्याण के पथ पर आगे बढ़ने की प्रेरणा।',
          en: 'Cultivates profound non-attachment (Vairagya), self-knowledge, and meditative depth.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'ध्यान एवं अंतर्मुखी शांति का विकास', en: 'Cultivation of Meditative Stillness' },
        explanation: {
          hi: 'भगवान शिव का ध्यान करने से मन के विचार शांत होते हैं और सहज ध्यान की अवस्था प्राप्त होती है।',
          en: 'Regular contemplation on Lord Shiva pacifies restless thoughts, facilitating natural meditation.',
        },
      },
      {
        title: { hi: 'क्रोध एवं अधीरता पर सहज नियंत्रण', en: 'Mastery Over Anger & Reactivity' },
        explanation: {
          hi: 'शिव जी का सौम्य और शांत स्वरूप व्यक्ति को विपरीत परिस्थितियों में भी शांत रहना सिखाता है।',
          en: 'Shiva\'s cool, poised nature inspires devotees to master volatile emotions and maintain composure.',
        },
      },
      {
        title: { hi: 'चंद्र एवं शनि ग्रह दोषों का शमन', en: 'Harmonizing Lunar & Saturnine Astrological Forces' },
        explanation: {
          hi: 'ज्योतिष के अनुसार चंद्रमा (मन) और शनि (साढ़ेसाती) के दोषों को शांत करने का सबसे सरल और श्रेष्ठ मार्ग।',
          en: 'In Vedic astrology, Shiva worship is the prime remedy for soothing afflicted Moon and Saturn transits.',
        },
      },
      {
        title: { hi: 'सादगी और संतोष का सात्विक भाव', en: 'Simplicity & Freedom from Material Craving' },
        explanation: {
          hi: 'सांसारिक दौड़-भाग और दिखावे से दूर होकर वास्तविक मानसिक तृप्ति और शांति की प्राप्ति होती है।',
          en: 'Teaches true wealth through inner contentment, simplicity, and detachment from trivial anxieties.',
        },
      },
      {
        title: { hi: 'शिव-परिवार से पारिवारिक सामंजस्य की प्रेरणा', en: 'Family Unity Inspired by Shiv Parivar' },
        explanation: {
          hi: 'पति-पत्नी में मधुर संबंध, संतानों में संस्कार और पूरे घर में एकता का सुंदर वातावरण बनता है।',
          en: 'Draws blessing for marital harmony, mutual devotion, and familial respect.',
        },
      },
      {
        title: { hi: 'दैनिक पूजा एवं बिल्वपत्र अर्पण का नियम', en: 'Daily Spiritual Discipline & Bilva Offering' },
        explanation: {
          hi: 'शिवलिंग पर नित्य जल और तीन पत्तों वाला बिल्वपत्र चढ़ाने से दिन की शुरुआत अत्यंत पावन होती है।',
          en: 'Offering holy Bilva leaves and water establishes a grounding, satvik morning routine.',
        },
      },
      {
        title: { hi: 'मोक्ष मार्ग एवं आत्मिक मुक्ति की ओर अग्रसर', en: 'Path to Inner Liberation (Moksha Marg)' },
        explanation: {
          hi: 'सनातन दर्शन के अनुसार शिव की शरण में जाने से जन्म-मरण के बंधनों से मुक्ति का मार्ग खुलता है।',
          en: 'Reflects the ultimate philosophical wisdom of Sanatan Dharma, leading to fearless spiritual freedom.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'काशी विश्वनाथ की पावन नगरी के ब्राह्मण, जिनके जीवन में शिव भक्ति और परंपरा का अटूट वास है।',
        en: 'Varanasi (Kashi) is the timeless, sacred abode of Lord Vishwanath, the cosmic center of Shaivism.',
      },
      {
        hi: 'शैवागमों के अनुसार बिल्वपत्र अर्पण, भस्म लेपन और जलाभिषेक की शुद्ध शास्त्रसम्मत विधि।',
        en: 'Authentic knowledge of Shaiva Agamas, Bilva Patra Arpana Vidhi, and proper Panchakshari Mantra Japa rules.',
      },
      {
        hi: 'सोमवार व्रत, प्रदोष व्रत एवं रुद्राष्टकम् पाठ का शुद्ध विधि-विधान से मार्गदर्शन।',
        en: 'Sincere guidance on performing Somwar Vrata, Pradosh Vrata, and Rudrashtakam recitation.',
      },
      {
        hi: 'शुद्धोधक, गंगाजल और पंचामृत से बिना किसी त्रुटि के अभिषेक संपन्न कराना।',
        en: 'Proper method of Abhishek with Shuddhodaka, Gangajal, and Panchamrit without ritualistic mistakes.',
      },
      {
        hi: 'आडंबर और दिखावे से दूर विशुद्ध भक्ति और श्रद्धा पर केंद्रित मार्गदर्शन।',
        en: 'Respectful, devotion-centric approach focused on pure Bhakti rather than commercial ostentation.',
      },
      {
        hi: 'काशी क्षेत्र के पावन स्पंदन से जुड़ा सीधा आध्यात्मिक आशीर्वाद।',
        en: 'Traditional blessings directly connected to the sacred vibration of Kashi Kshetra.',
      },
    ],
  },

  'griha-shanti': {
    id: 'griha-shanti',
    name: { hi: 'गृह शांति पूजा', en: 'Griha Shanti Puja / Peace at Home' },
    mainDeity: { hi: 'नवग्रह देवता, कुलदेवता, वास्तु देवता एवं शांति कारक सर्व देव', en: 'Navagraha Devatas, Kuldevata, Vastu Devata & Shanti Devatas' },
    religiousPurpose: {
      hi: 'गृह में नवग्रह शांति, शांति सूक्त पाठ, वास्तु दोष शमन होम एवं गंगाजल छिड़काव द्वारा शांति की स्थापना।',
      en: 'Navagraha Shanti, recitation of Shanti Suktam, Vastu pacification Havan, and sprinkling of consecrated holy water.',
    },
    traditionalReason: {
      hi: 'घर में अकारण होने वाले कलह, नकारात्मकता, परिजनों के बीच तनाव की शांति तथा सुखद एवं सौहार्दपूर्ण वातावरण के निर्माण हेतु।',
      en: 'Performed to resolve unprovoked domestic friction, negativity, interpersonal tension, and establish a harmonious home.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार गृह कलह, निरंतर आर्थिक तनाव, परिजनों की आपसी कड़वाहट एवं घर में भारीपन का अहसास।',
      en: 'Traditionally believed to soothe domestic disputes, chronic financial anxiety, bitter misunderstandings, and oppressive atmospheric heaviness.',
    },
    spiritualSignificance: {
      hi: 'घर के सूक्ष्म वातावरण में शांति, सौम्यता एवं सात्विक चेतना का पुनरुत्थान, जिससे सभी सदस्य ईश्वर से जुड़ाव महसूस करें।',
      en: 'Reviving peaceful, gentle, and satvik vibrations within the home so every member feels spiritually centered.',
    },
    familySignificance: {
      hi: 'पति-पत्नी, माता-पिता एवं संतानों के बीच प्रेम, सम्मान, संवादहीनता का अंत तथा एक सुखी एवं संगठित परिवार।',
      en: 'Restoring affection, mutual respect, open communication among couples, parents, and children, fostering a united home.',
    },
    personalSignificance: {
      hi: 'घर लौटने पर सुकून का अनुभव, अच्छी नींद, मानसिक शांति एवं कार्यक्षेत्र में बेहतर प्रदर्शन की प्रेरणा।',
      en: 'Experiencing comfort upon returning home, peaceful sleep, emotional tranquility, and positive professional focus.',
    },
    jyotishSignificance: {
      hi: 'कुंडली के चतुर्थ भाव (गृह-सुख) की पीड़ा, राहु-शनि अथवा मंगल के क्रूर गोचर जनित पारिवारिक अशांति की शांति हेतु यह पूजा विहित है।',
      en: 'Recommended in Jyotish to pacify afflictions to the 4th house (domestic bliss) and hostile transits of Rahu, Saturn, or Mars.',
    },
    categories: {
      spiritual: [
        { hi: 'वेदोक्त शांति सूक्त ("ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः...") के पवित्र मंत्रोच्चार से घर का पवित्रीकरण।', en: 'Purifying the home through the timeless Vedic Shanti Suktam hymns.' },
        { hi: 'घर के सभी कोनों में नकारात्मक ऊर्जा का शमन और दिव्य शांति की प्रतिष्ठा।', en: 'Pacifying negative energies in all corners and installing divine peace.' },
        { hi: 'परिवार के सदस्यों के मन में क्षमा, सहनशीलता और प्रेम की भावना का विकास।', en: 'Cultivating forgiveness, patience, and affection among members.' },
        { hi: 'दैनिक जीवन में ईश्वर के प्रति कृतज्ञता और सात्विक दिनचर्या की शुरुआत।', en: 'Starting a grateful and sattvic daily routine anchored in the Divine.' },
      ],
      religious: [
        { hi: 'नवग्रहों, वास्तु पुरुष एवं कुलदेवता का विधिवत पंचोपचार/षोडशोपचार पूजन।', en: 'Shodashopachara worship of Navagrahas, Vastu Purusha, and Kuldevata.' },
        { hi: 'शांति मंत्रों से अभिमंत्रित जल का संपूर्ण गृह में सिंचन एवं रक्षा विधान।', en: 'Sprinkling consecrated water energized with Shanti Mantras.' },
        { hi: 'हवन कुण्ड में शांति द्रव्यों (दूर्वा, घृत, शर्करा, समिधा) से विधिपूर्वक आहुति।', en: 'Offering pacifying oblations (Durva, Ghee, sugar, sacred wood) in Havan.' },
        { hi: 'ब्राह्मण आशीर्वाद एवं परिवार के सभी सदस्यों द्वारा एक साथ आरती।', en: 'Receiving Brahmin blessings and family joining together for Aarti.' },
      ],
      family: [
        { hi: 'पारिवारिक सदस्यों के बीच अकारण होने वाले वाद-विवाद और गलतफहमियों का अंत।', en: 'Ending unprovoked arguments and bitter misunderstandings.' },
        { hi: 'घर में प्रेम, सम्मान, बच्चों में संस्कार और बड़ों के प्रति आदर की भावना।', en: 'Fostering love, values in children, and reverence for elders.' },
        { hi: 'विवाह, उत्सव और मांगलिक कार्यों के लिए घर में अनुकूल और शुभ माहौल।', en: 'Creating an auspicious atmosphere for upcoming weddings and ceremonies.' },
      ],
      personal: [
        { hi: 'दिन भर की भागदौड़ और तनाव के बाद घर में वास्तविक मानसिक शांति की अनुभूति।', en: 'Experiencing true relaxation and comfort upon returning home.' },
        { hi: 'अनिद्रा, चिड़चिड़ापन और बेचैनी से पारंपरिक विश्वास के अनुसार राहत।', en: 'Relief from irritability, sleep disturbances, and restlessness.' },
        { hi: 'मन में स्पष्टता, सकारात्मकता और पारिवारिक जिम्मेदारियों के प्रति उत्साह।', en: 'Clear mindset, positivity, and enthusiasm for family duties.' },
      ],
      specificPurpose: [
        { hi: 'जब घर में निरंतर बिना बात के तनाव, मनमुटाव या बेचैनी महसूस हो रही हो।', en: 'Undertaken when the home feels plagued by unexplained friction.' },
        { hi: 'नये भवन में रहने के कुछ समय बाद ऊर्जा के संतुलन और स्थायी सुख-शांति हेतु।', en: 'Balancing energies after living in a new house for some time.' },
        { hi: 'परिवार में किसी कठिन दौर के बाद सकारात्मकता के पुनर्निर्माण के लिए।', en: 'Rebuilding domestic optimism after a difficult life chapter.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'गृह शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'वेदोक्त शांति सूक्त के पाठ से घर के सूक्ष्म वातावरण में शांति, पवित्रता और दैवीय संतुलन आता है।',
          en: 'Restores sacred balance and serenity through the timeless Vedic Shanti Suktam chants.',
        },
      },
      {
        benefit: { hi: 'कुलदेवता व नवग्रह कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'कुलदेवता, वास्तु देवता और नवग्रहों की संतुष्टि से घर को स्थायी आशीर्वाद और सुरक्षा मिलती है।',
          en: 'Dedicated to Navagraha Devatas, Vastu Purusha, and Kuldevata for domestic benevolence.',
        },
      },
      {
        benefit: { hi: 'गृह-क्लेश शमन (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'परिवार के सदस्यों के बीच अकारण होने वाले तनाव, चिड़चिड़ेपन और मनमुटाव का पारंपरिक रूप से शमन होता है।',
          en: 'Mends interpersonal communication gaps, replacing friction with empathy and affection.',
        },
      },
      {
        benefit: { hi: 'नकारात्मक ऊर्जा से रक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'अभिमंत्रित जल के सिंचन और रक्षा सूत्र से घर को भारीपन और बाहरी नकारात्मकता से मुक्त किया जाता है।',
          en: 'Consecrates the domestic sanctuary, insulating it from subtle psychological hostility.',
        },
      },
      {
        benefit: { hi: 'स्थिरता व बरकत (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'घर में शांति रहने से धन की बरकत होती है और सभी सदस्य अपने कार्यक्षेत्र में ध्यान लगा पाते हैं।',
          en: 'Calm home environment naturally supports professional focus, savings, and stability.',
        },
      },
      {
        benefit: { hi: 'सूक्ष्म बाधा निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'घर के निर्माण दोष अथवा अनजाने में हुए वास्तु असंतुलन के प्रभावों को शांत करने में सहायक है।',
          en: 'Traditionally believed to dissolve invisible stagnation affecting home well-being.',
        },
      },
      {
        benefit: { hi: 'मानसिक सुकून (Mental/Emotional Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'घर लौटने पर ताजगी, अच्छी नींद और परिवार के साथ सुखद समय बिताने का मानसिक सुकून मिलता है।',
          en: 'Provides a deeply relaxing domestic refuge that alleviates irritability and fatigue without medical claims.',
        },
      },
      {
        benefit: { hi: 'सात्विक वातावरण (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'घर में संध्या दीप, आरती और नित्य ईश्वर स्मरण की सुंदर सात्विक परंपरा आरंभ होती है।',
          en: 'Encourages collective evening prayer, mutual respect, and ethical living.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'वेदोक्त शांति सूक्त द्वारा वातावरण का पवित्रीकरण', en: 'Vedic Shanti Suktam & Atmospheric Harmony' },
        explanation: {
          hi: 'यजुर्वेद के शांति मंत्र घर के भारीपन और तनाव को मिटाकर कमरों में सुखद शांति का संचार करते हैं।',
          en: 'Resounding Vedic peace hymns dissolve accumulated tension and infuse rooms with palpable serenity.',
        },
      },
      {
        title: { hi: 'अकारण पारिवारिक कलह एवं तनाव से मुक्ति', en: 'Mitigating Unprovoked Domestic Friction' },
        explanation: {
          hi: 'परिजनों के बीच आपसी कड़वाहट और चिड़चिड़ेपन को शांत कर प्रेम और संवाद का माहौल बनाता है।',
          en: 'Devotees perform this puja to heal repeated arguments, misunderstandings, and irritability among family members.',
        },
      },
      {
        title: { hi: 'कुंडली के चतुर्थ भाव एवं क्रूर गोचर शांति', en: 'Pacification of 4th House Astrological Strain' },
        explanation: {
          hi: 'गृह-सुख के चतुर्थ भाव पर शनि, राहु या मंगल के क्रूर प्रभाव को शांत करने का श्रेष्ठ ज्योतिषीय उपाय।',
          en: 'Addresses astrological afflictions impacting household happiness, maternal health, and peace of mind.',
        },
      },
      {
        title: { hi: 'अभिमंत्रित गंगाजल सिंचन एवं वास्तु होम', en: 'Cleansing Stagnant Household Energies' },
        explanation: {
          hi: 'वैदिक शांति द्रव्यों के हवन और गंगाजल के छिड़काव से घर के सभी कोने सकारात्मक ऊर्जा से भर जाते हैं।',
          en: 'Sprinkling consecrated Gangajal and performing Shanti Havan revitalizes stagnant physical spaces.',
        },
      },
      {
        title: { hi: 'गहरी नींद और मानसिक शांति की प्राप्ति', en: 'Promoting Restful Sleep & Emotional Healing' },
        explanation: {
          hi: 'घर का शांत वातावरण दिन भर की थकान दूर करता है और परिवार को तनावमुक्त विश्राम प्रदान करता है।',
          en: 'A peaceful home ambiance relieves chronic anxiety, offering deep, restorative rest for all members.',
        },
      },
      {
        title: { hi: 'कुलदेवता के प्रति पुनः समर्पण और कृपा', en: 'Reconnecting Family with Kuldevata Grace' },
        explanation: {
          hi: 'कुलदेवता का विधिवत पूजन कर पूरे परिवार पर उनकी सुरक्षात्मक छत्रछाया पुनः स्थापित की जाती है।',
          en: 'Re-establishes reverence for family deities, ensuring protective cover for coming generations.',
        },
      },
      {
        title: { hi: 'मांगलिक आयोजनों के लिए शुभ आधारशिला', en: 'Auspicious Foundation for Family Milestones' },
        explanation: {
          hi: 'विवाह, नामकरण अथवा व्यापार आरंभ से पूर्व घर के वातावरण को शुभ और तनावमुक्त बनाने हेतु उपयुक्त।',
          en: 'Clears emotional clutter before weddings, examinations, or new business ventures.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'शुक्ल यजुर्वेद के शांति अध्याय एवं समाहित मंत्रों का शुद्ध स्वर एवं लय के साथ सस्वर पाठ।',
        en: 'Authentic chanting of Shukla Yajurvedic Shanti Adhyaya and Samahit Mantras with precise pitch.',
      },
      {
        hi: 'सर्वौषधि, पंचगव्य एवं पवित्र तीर्थों के जल से युक्त शांति कलश की शास्त्रसम्मत तैयारी।',
        en: 'Preparation of sacred Shanti Kalash with sacred herbs (Sarvaushadhi, Panchagavya, holy Teertha water).',
      },
      {
        hi: 'परिवार के सभी सदस्यों को सम्मान और आत्मीयता के साथ पूजा में सम्मिलित करने का सौम्य स्वभाव।',
        en: 'Gentle, culturally sensitive demeanor that brings all family members into harmonious participation.',
      },
      {
        hi: 'घर में नित्य सकारात्मकता बनाए रखने के लिए व्यावहारिक वास्तु एवं पूजा नियमों का सरल मार्गदर्शन।',
        en: 'Practical guidance on maintaining daily Vastu positivity and home altar etiquette.',
      },
      {
        hi: 'बिना किसी भय या अंधविश्वास के विशुद्ध सात्विक और प्रामाणिक वैदिक कर्मकांड।',
        en: 'Sincere commitment to family well-being without imposing unreasonable costs or fear.',
      },
      {
        hi: 'काशी की पावन वैदिक परंपरा के अनुसार यजमान के घर में देवतुल्य शांति की स्थापना।',
        en: 'Experienced in diagnosing and pacifying subtle domestic astrological imbalances according to Vedic lore.',
      },
    ],
  },

  'kaal-sarp': {
    id: 'kaal-sarp',
    name: { hi: 'कालसर्प दोष निवारण', en: 'Kaal Sarp Dosh Remedy' },
    mainDeity: { hi: 'भगवान शिव, नाग देवता एवं राहु-केतु', en: 'Lord Shiva, Nag Devata & Rahu-Ketu' },
    religiousPurpose: {
      hi: 'भगवान शिव का रुद्राभिषेक, नाग-नागिन की चांदी की प्रतिमा का पूजन एवं विसर्जन, राहु-केतु जप एवं शांति हवन।',
      en: 'Rudrabhishek of Lord Shiva, consecration of silver serpent icons, Rahu-Ketu japa, and pacification Havan.',
    },
    traditionalReason: {
      hi: 'पारंपरिक ज्योतिषीय मान्यता के अनुसार राहु-केतु के मध्य सभी ग्रहों के आ जाने से उत्पन्न अवरोधों के शमन एवं मानसिक शांति हेतु।',
      en: 'Performed according to traditional Jyotish belief to appease Rahu-Ketu, seeking relief from perceived life delays and mental unrest.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार कार्यों में अचानक विलंब, मानसिक अस्थिरता, डरावने स्वप्न एवं संघर्षों की अधिकता। (यह कोई भाग्य बदलने की गारंटी नहीं है)।',
      en: 'Traditionally believed in astrology to soften recurring career hurdles, vivid distressful dreams, and chronic delays. (Not a destiny-altering guarantee).',
    },
    spiritualSignificance: {
      hi: 'कर्मों के प्रति सजगता, शिव शरणागति, जीवन के उतार-चढ़ावों में समभाव एवं अंतःकरण की शुद्धि।',
      en: 'Mindfulness of past karma, complete surrender to Shiva, maintaining equanimity through life\'s crests and troughs.',
    },
    familySignificance: {
      hi: 'पारिवारिक जीवन में आने वाले अप्रत्याशित उतार-चढ़ाव में संतुलन, वैवाहिक स्थिरता एवं संतानों के प्रति शुभता।',
      en: 'Seeking stability against unexpected family upheavals, marital calmness, and auspiciousness for descendants.',
    },
    personalSignificance: {
      hi: 'मानसिक संशय और घबराहट से मुक्ति, कठिन परिस्थितियों में धैर्य, निरंतर पुरुषार्थ की प्रेरणा एवं आत्मबल।',
      en: 'Overcoming mental agitation, building patient endurance during setbacks, and encouraging steadfast personal effort.',
    },
    jyotishSignificance: {
      hi: 'ज्योतिष शास्त्र में १२ प्रकार के कालसर्प योगों (अनंत, कुलिक, वासुकि आदि) के अनुसार विशिष्ट शिव-नाग शांति का विधान है।',
      en: 'Traditional Jyotish details 12 varieties of Kaal Sarp combinations (Ananta, Kulika, Vasuki, etc.), prescribing specific Shiva-Naga propitiations.',
    },
    categories: {
      spiritual: [
        { hi: 'भगवान शिव के नागभूषण स्वरूप का ध्यान कर जीवन के बंधनों से मुक्ति की प्रार्थना।', en: 'Contemplating Shiva as Nageshwara to transcend karmic bindings.' },
        { hi: 'कर्म सिद्धांत के प्रति गहरी आस्था और अपने आचरण को सात्विक बनाने का संकल्प।', en: 'Faith in karma and resolve to cultivate a sattvic lifestyle.' },
        { hi: 'राहु-केतु जनित भ्रम और अविश्वास को दूर कर आत्मिक प्रकाश की प्राप्ति।', en: 'Clearing nodal confusion to perceive inner spiritual light.' },
        { hi: 'ईश्वर के चरणों में अपने संघर्षों को समर्पित कर परम शांति का अनुभव।', en: 'Surrendering struggles at the Divine feet for lasting peace.' },
      ],
      religious: [
        { hi: 'शास्त्रोक्त विधि से नाग-नागिन की प्रतिमा का प्राण-प्रतिष्ठा युक्त पूजन।', en: 'Prana Pratishtha and worship of silver serpent pair icons.' },
        { hi: 'राहु एवं केतु के वैदिक/पौराणिक मंत्रों का विधिपूर्वक जप एवं दशांश हवन।', en: 'Chanting Vedic Rahu-Ketu mantras and offering Dashansh Havan.' },
        { hi: 'भगवान शिव का विधिवत महा-अभिषेक एवं महामृत्युंजय मंत्र से स्तुति।', en: 'Maha Abhishekam of Shiva and Mahamrityunjaya praise.' },
        { hi: 'पवित्र नदी/सरोवर में अथवा तीर्थ पर नाग प्रतिमा का ससम्मान विसर्जन।', en: 'Respectful immersion (Visarjan) of icons in sacred river waters.' },
      ],
      family: [
        { hi: 'परिवार में आने वाले अचानक व्यवधानों और मानसिक तनाव का पारंपरिक शमन।', en: 'Soothes sudden domestic disruptions and emotional strain.' },
        { hi: 'संतान एवं वैवाहिक जीवन में आने वाले गतिरोधों के प्रति धार्मिक समाधान।', en: 'Spiritual prayers for resolving matrimonial and child delays.' },
        { hi: 'घर के वातावरण में सुरक्षा, संतुलन और सकारात्मक ऊर्जा का संचार।', en: 'Infusing the home with stability, security, and positive energy.' },
      ],
      personal: [
        { hi: 'अकारण भय, अज्ञात चिंता और डरावने सपनों से पारंपरिक विश्वास के अनुसार मुक्ति।', en: 'Relief from unexplainable fear, nocturnal panic, and disturbing dreams.' },
        { hi: 'कैरियर और व्यक्तिगत जीवन में निरंतर प्रयास करने का नया आत्मविश्वास।', en: 'Renewed confidence to pursue professional endeavors steadfastly.' },
        { hi: 'कठिन समय में धैर्य, मानसिक संतुलन और एकाग्रता में वृद्धि।', en: 'Cultivating patient fortitude, mental poise, and focus during trials.' },
      ],
      specificPurpose: [
        { hi: 'पारंपरिक ज्योतिष के अनुसार कुंडली में राहु और केतु के बीच ग्रहों के संकुचन के प्रभाव को शांत करना।', en: 'Pacifying nodal planetary compression per traditional astrology.' },
        { hi: 'जीवन में आने वाली अप्रत्याशित बाधाओं के सामने आध्यात्मिक संबल प्राप्त करना।', en: 'Gaining spiritual strength to face unexpected obstacles.' },
        { hi: 'शास्त्रसम्मत विधि से तीर्थ (जैसे काशी अथवा संगम) पर अनुष्ठान संपन्न करना।', en: 'Completing rituals at sacred tirthas per Shastric decorum.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'मानसिक ठहराव (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'राहु-केतु जनित मानसिक संशय और भटकाव दूर होकर चित्त में एकाग्रता और शांति आती है।',
          en: 'Calms persistent restlessness by surrendering karmic burdens to Lord Shiva.',
        },
      },
      {
        benefit: { hi: 'नागेश्वर शिव कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'नागों को आभूषण के रूप में धारण करने वाले भगवान शिव का अभयकारी आशीर्वाद प्राप्त होता है।',
          en: 'Dedicated to Lord Shiva (Nageshwara) and Nag Devatas for compassionate protection.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक स्थिरता (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'परिवार में आने वाले अचानक उतार-चढ़ाव शांत होते हैं और परिजनों में सुरक्षा की भावना बढ़ती है।',
          en: 'Eases sudden familial anxieties and unprovoked friction linked to astrological stress.',
        },
      },
      {
        benefit: { hi: 'अनिष्ट स्वप्न से रक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'पारंपरिक विश्वास के अनुसार सर्प भय, अनिद्रा और डरावने सपनों से मुक्ति मिलती है।',
          en: 'Sought as a religious shield against acute psychological turbulence and vivid nightmares.',
        },
      },
      {
        benefit: { hi: 'प्रयासों में गति (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'मेहनत के बाद भी बार-बार काम अटकने की स्थिति में पारंपरिक शांति से मनोबल और प्रगति मिलती है।',
          en: 'Traditionally performed to help remove perceived stagnation in professional initiatives.',
        },
      },
      {
        benefit: { hi: 'विलंब बाधा शमन (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'कैरियर, शिक्षा अथवा विवाह में कालसर्प योग के कारण आने वाले अवरोधों की पारंपरिक शांति।',
          en: 'Traditionally believed in Jyotish to mitigate the intensity of recurring delays.',
        },
      },
      {
        benefit: { hi: 'आत्मबल व संबल (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'भाग्य के प्रति निराशा का भाव दूर होकर नए उत्साह से कर्म करने की प्रेरणा मिलती है।',
          en: 'Provides psychological reassurance, resilience, and emotional steadiness without medical claims.',
        },
      },
      {
        benefit: { hi: 'कर्म शुद्धि (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'पूर्वजन्म के कर्म बंधनों के प्रति सजग होकर धर्म, दान और सदाचार के मार्ग पर चलने का संकल्प।',
          en: 'Deepens understanding of karmic balance, inspiring disciplined and righteous living.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'राहु-केतु की पारंपरिक ज्योतिषीय शांति', en: 'Traditional Astrological Pacification of Rahu-Ketu' },
        explanation: {
          hi: 'कुंडली में जब सभी ग्रह राहु और केतु के मध्य आ जाते हैं, तो इस दोष की शास्त्रसम्मत शांति की जाती है।',
          en: 'Conducted strictly per Jyotish principles to appease the lunar nodes when all planets fall between them.',
        },
      },
      {
        title: { hi: 'नागेश्वर महादेव का महा-रुद्राभिषेक', en: 'Maha Rudrabhishek & Nageshwara Worship' },
        explanation: {
          hi: 'भगवान शिव की पावन शरण में जाने से नाग दोष की उग्रता शांत होती है और जीवन में शांति आती है।',
          en: 'Surrendering to Lord Shiva—who wears serpents as ornaments—transforms fear into spiritual calm.',
        },
      },
      {
        title: { hi: 'लगातार होने वाले विलंब और अवरोधों से राहत', en: 'Alleviation of Chronic Delays & Frustration' },
        explanation: {
          hi: 'कार्यों में अंतिम समय पर बनने वाली रुकावटों को शांत करने हेतु भक्त यह अनुष्ठान कराते हैं।',
          en: 'Devotees undertake this ritual seeking spiritual relief from repetitive career and personal blockages.',
        },
      },
      {
        title: { hi: 'अनिद्रा एवं डरावने सपनों से मुक्ति', en: 'Freedom from Sleep Disturbances & Restlessness' },
        explanation: {
          hi: 'रात में अचानक घबराहट या सर्प संबंधी डरावने स्वप्नों से पारंपरिक विश्वास के अनुसार राहत मिलती है।',
          en: 'Traditionally associated with soothing agitated minds, restless nights, and inexplicable anxiety.',
        },
      },
      {
        title: { hi: 'कैरियर और शिक्षा में नया आत्मविश्वास', en: 'Restoring Focus & Purposeful Effort' },
        explanation: {
          hi: 'मानसिक भटकाव दूर होता है और जातक पूरे मनोयोग व धैर्य से अपने लक्ष्यों में जुट पाता है।',
          en: 'Helps the devotee cultivate emotional fortitude and rededicate themselves to diligent action.',
        },
      },
      {
        title: { hi: 'चांदी के नाग-नागिन का शास्त्रोक्त पूजन एवं विसर्जन', en: 'Scriptural Nag Pratima Consecration & Immersion' },
        explanation: {
          hi: 'पवित्र प्रतिमा का प्राण-प्रतिष्ठा पूजन कर पवित्र गंगाजल में विधिपूर्वक विसर्जित किया जाता है।',
          en: 'Involves proper energization of silver Nag-Nagin Murtis followed by respectful Jal Visarjan.',
        },
      },
      {
        title: { hi: 'सहानुभूतिपूर्ण एवं प्रामाणिक ज्योतिषीय परामर्श', en: 'Conducted with Ethical Jyotish Counseling' },
        explanation: {
          hi: 'बिना किसी भय अथवा झूठे दावों के कुंडली का निष्पक्ष विश्लेषण कर सात्विक उपाय बताए जाते हैं।',
          en: 'Explains the astrological placement realistically without resorting to fearmongering or false guarantees.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'काशी में नाग कूप एवं प्राचीन शिव तीर्थों की पावन परंपरा के अनुसार नाग दोष निवारण का विशेष अनुभव।',
        en: 'Varanasi is historically revered for Nag Kupa and sacred Shiva tirthas ideal for Nag Dosh rituals.',
      },
      {
        hi: 'कुंडली के अनुसार 12 प्रकार के कालसर्प योगों (अनंत, कुलिक, वासुकि आदि) की सही पहचान।',
        en: 'Accurate identification of specific Kaal Sarp categories (out of the 12 types) from your birth chart.',
      },
      {
        hi: 'राहु-केतु के वैदिक मंत्रों, समिधा हवन और शिव सहस्त्रनाम का यथायोग्य सस्वर पाठ।',
        en: 'Execution of exact Vedic Rahu-Ketu mantras, proper Ahutis, and Shiva Sahasranama archana.',
      },
      {
        hi: 'किसी भी प्रकार के डर या अंधविश्वास से दूर रखकर यजमान को केवल सात्विक धार्मिक मार्गदर्शन।',
        en: 'Honest, non-commercial guidance: we never guarantee miraculous overnight shifts, focusing on genuine spiritual remedies.',
      },
      {
        hi: 'शुद्ध चांदी की नाग प्रतिमा, गंगाजल एवं शास्त्रसम्मत पूजन सामग्री की प्रामाणिक व्यवस्था।',
        en: 'Proper silver Nag-Nagin samagri, holy teertha jal, and complete Shastric Visarjan rites.',
      },
      {
        hi: 'यजमान को प्रत्येक मंत्र और संकल्प का अर्थ समझाते हुए गरिमामयी पूजा संपादन।',
        en: 'Dignified, peaceful environment ensuring the devotee understands every step of the prayer.',
      },
    ],
  },

  'graha-badha': {
    id: 'graha-badha',
    name: { hi: 'ग्रह बाधा निवारण / नवग्रह शांति', en: 'Planetary Obstacle Remedy / Navagraha Shanti' },
    mainDeity: { hi: 'नवग्रह देवता (सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु)', en: 'Navagraha Devatas (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu)' },
    religiousPurpose: {
      hi: 'नवग्रह मंडल स्थापना, नवग्रह सूक्त पाठ, प्रत्येक ग्रह के बीज मंत्र का जप, विशिष्ट समिधा से हवन एवं दान।',
      en: 'Navagraha Mandala invocation, Navagraha Suktam recital, individual planetary seed mantra japa, specific samidha homam, and prescribed charity.',
    },
    traditionalReason: {
      hi: 'प्रतिकूल दशा, अंतर्दशा, साढ़ेसाती अथवा क्रूर गोचर के समय ग्रहों के कुप्रभावों को शांत करने एवं शुभ फल की प्राप्ति हेतु।',
      en: 'Performed to pacify adverse planetary Dashas, Antardashas, Sade Sati, or harsh transits according to Vedic Jyotish lore.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार जीवन के विभिन्न क्षेत्रों में आने वाले ग्रह-जनित अवरोध, अस्थिरता एवं अप्रत्याशित संकट। (कोई गारंटी नहीं)।',
      en: 'Traditionally believed in astrology to soften planetary friction causing career stagnation, health worries, or sudden hurdles. (No guaranteed outcomes).',
    },
    spiritualSignificance: {
      hi: 'ब्रह्माण्डीय ऊर्जाओं (ग्रह शक्तियों) के साथ तालमेल, कर्मफल के प्रति विनम्रता एवं ईश्वर के न्याय पर विश्वास।',
      en: 'Harmonizing personal rhythm with cosmic energies, humility before karmic laws, and faith in divine cosmic justice.',
    },
    familySignificance: {
      hi: 'परिवार के सदस्यों के ग्रहों की परस्पर अनुकूलता, घर में शांति, सामूहिक स्वास्थ्य एवं सौहार्द की वृद्धि।',
      en: 'Fostering planetary harmony among family members, household peace, collective well-being, and mutual warmth.',
    },
    personalSignificance: {
      hi: 'मानसिक संतुलन, धैर्य, निर्णय क्षमता में परिपक्वता, ग्रहों के प्रभाव को समझकर संतुलित आचरण।',
      en: 'Enhancing emotional poise, patience, mature decision-making, and adopting balanced conduct during tough transits.',
    },
    jyotishSignificance: {
      hi: 'बृहत्पाराशर होराशास्त्र एवं मत्स्य पुराण के अनुसार नवग्रह शांति समस्त प्रकार के ज्योतिषीय अनिष्टों की शांति का मूल आधार है।',
      en: 'According to Brihat Parashara Hora Shastra and Matsya Purana, Navagraha Shanti is the foundational remedy for astrological afflictions.',
    },
    categories: {
      spiritual: [
        { hi: 'नवग्रहों को ईश्वर के विभिन्न शक्ति-स्वरूपों के रूप में स्वीकार कर उनके प्रति नमन।', en: 'Bowing to Navagrahas as manifestations of cosmic divine energy.' },
        { hi: 'ब्रह्माण्ड के नियमों (ऋत) के प्रति सम्मान और अपनी अंतःचेतना का शुद्धिकरण।', en: 'Purifying consciousness in attunement with cosmic order (Rita).' },
        { hi: 'ग्रहों के प्रतिकूल समय में अहंकार त्याग कर धैर्य और प्रार्थना का मार्ग चुनना।', en: 'Choosing patient prayer and humility during adverse planetary phases.' },
        { hi: 'ईश्वरीय ऊर्जा के साथ अपने मन और बुद्धि का सामंजस्य स्थापित करना।', en: 'Harmonizing intellect and mind with cosmic planetary frequencies.' },
      ],
      religious: [
        { hi: 'रंगोली द्वारा नवग्रह मंडल का शास्त्रीय निर्माण एवं प्रत्येक ग्रह के अधिदेवता-प्रत्यधिदेवता का आह्वान।', en: 'Creating Navagraha Mandala and invoking Adhidevatas and Pratyadhidevatas.' },
        { hi: 'नौ ग्रहों की नौ प्रकार की पवित्र समिधाओं (आक, ढाक, खैर, अपामार्ग, पीपल, गूलर, शमी, दूर्वा, कुशा) द्वारा हवन।', en: 'Havan with 9 specific botanical woods for individual planets.' },
        { hi: 'प्रत्येक ग्रह के वैदिक एवं तांत्रिक मंत्रों का नियत संख्या में जप।', en: 'Disciplined chanting of planetary Vedic and Tantric mantras.' },
        { hi: 'ग्रह-संबंधित अन्न, वस्त्र, धातु एवं दक्षिणा का सुपात्र को दान।', en: 'Prescribed scriptural charity of grains, cloth, and metals.' },
      ],
      family: [
        { hi: 'परिवार में एक साथ कई सदस्यों पर चल रही कठिन दशाओं के सामूहिक प्रभाव का शमन।', en: 'Pacifying overlapping stressful planetary dashas across family members.' },
        { hi: 'घर के वातावरण में शांति, कलह की समाप्ति और सकारात्मक तरंगों का प्रवेश।', en: 'Household peace, ending discord, and inviting positive vibrations.' },
        { hi: 'संतानों की शिक्षा, स्वास्थ्य और उन्नति के लिए अनुकूल ज्योतिषीय वातावरण।', en: 'Fostering a supportive astrological environment for children\'s education.' },
      ],
      personal: [
        { hi: 'कठिन समय में मानसिक विचलितता और निराशा से पारंपरिक विश्वास के अनुसार राहत।', en: 'Relief from agitation and despair during difficult transits.' },
        { hi: 'सकारात्मक सोच, आत्मबल और उचित निर्णय लेने की क्षमता में सुधार।', en: 'Improving positive thinking, willpower, and sound judgment.' },
        { hi: 'कैरियर और व्यक्तिगत जीवन में आने वाले अनावश्यक अवरोधों के प्रति मानसिक दृढ़ता।', en: 'Mental resilience against unnecessary career and personal friction.' },
      ],
      specificPurpose: [
        { hi: 'शनि की साढ़ेसाती/ढैय्या, राहु/केतु की महादशा, मंगल का अंगारक योग अथवा सूर्य-चंद्र ग्रहण दोष की शांति।', en: 'Pacifying Sade Sati, Rahu/Ketu periods, Angarak Yoga, or Eclipse doshas.' },
        { hi: 'जन्मकुंडली में कमजोर अथवा मारक ग्रहों को शांत कर जीवन में स्थिरता लाना।', en: 'Strengthening weak planets and pacifying maraka energies.' },
        { hi: 'वैदिक विधि से ग्रहों के अनुकूल आशीर्वाद प्राप्त करने का समग्र अनुष्ठान।', en: 'Comprehensive ritual to seek favorable cosmic planetary blessings.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'ब्रह्माण्डीय संतुलन (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'नवग्रहों की कृपा से व्यक्ति की आंतरिक ऊर्जा और ब्रह्माण्डीय शक्तियों में सामंजस्य स्थापित होता है।',
          en: 'Harmonizes personal spiritual rhythm with cosmic planetary forces.',
        },
      },
      {
        benefit: { hi: 'नवग्रह कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'सूर्य से आरोग्य, चंद्र से शांति, मंगल से साहस, गुरु से ज्ञान और शनि से न्याय का आशीर्वाद मिलता है।',
          en: 'Dedicated to the nine celestial Regents (Navagrahas) and their presiding divinities.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक सुख (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'एक साथ कई सदस्यों की प्रतिकूल दशाओं के प्रभाव को शांत कर घर में सौहार्द बनाए रखता है।',
          en: 'Soothes overlapping planetary stresses affecting multiple household members.',
        },
      },
      {
        benefit: { hi: 'अशुभ दशाओं से रक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'साढ़ेसाती, ढैय्या और राहु की महादशा के उग्र व अनिष्टकारी प्रभावों को सौम्य करने में सहायक है।',
          en: 'Traditionally sought to soften the severity of harsh dasha transitions and malefic transits.',
        },
      },
      {
        benefit: { hi: 'आर्थिक व व्यावसायिक प्रगति (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'ग्रहों की अनुकूलता से आजीविका में स्थिरता, अनावश्यक खर्चों में कमी और बरकत का मार्ग प्रशस्त होता है।',
          en: 'Helps remove perceived energetic blockages in wealth flow and career progress.',
        },
      },
      {
        benefit: { hi: 'ग्रह पीड़ा शमन (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'कार्यों में अकारण आने वाली अड़चनों, कानूनी विवादों और स्वास्थ्यगत उतार-चढ़ावों की शांति होती है।',
          en: 'Traditionally believed to reduce unexplained friction in legal, health, or financial matters.',
        },
      },
      {
        benefit: { hi: 'धैर्य व मानसिक स्पष्टता (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'कठिन समय में घबराने के बजाय विवेक और शांत चित्त से सही निर्णय लेने का आत्मबल मिलता है।',
          en: 'Fosters calm patience, emotional resilience, and freedom from panic without medical claims.',
        },
      },
      {
        benefit: { hi: 'कर्म विनम्रता (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'यह बोध होता है कि ग्रह कर्मों के फल प्रदाता हैं, जिससे व्यक्ति सात्विक और धर्मानुकूल जीवन जीता है।',
          en: 'Teaches deep humility before cosmic laws, inspiring disciplined and ethical living.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'समस्त नौ ग्रहों का एक साथ समन्वय', en: 'Comprehensive Nine-Planet Cosmic Alignment' },
        explanation: {
          hi: 'सूर्य से लेकर केतु तक सभी नौ ग्रहों का एक ही मंडप में विधिपूर्वक पूजन कर संपूर्ण संतुलन बनाया जाता है।',
          en: 'Worships all nine planetary deities simultaneously, establishing comprehensive energetic balance.',
        },
      },
      {
        title: { hi: 'नौ विशिष्ट समिधाओं से वानस्पतिक हवन', en: 'Botanical Samidha Havan for Specific Planets' },
        explanation: {
          hi: 'आक, पलाश, खैर, अपामार्ग, पीपल, गूलर, शमी, दूर्वा और कुशा की आहुतियां ग्रह ऊर्जा को शांत करती हैं।',
          en: 'Utilizes 9 prescribed botanical woods (Arka for Sun, Palasha for Moon, Khadira for Mars, etc.) for authentic propitiation.',
        },
      },
      {
        title: { hi: 'साढ़ेसाती, ढैय्या एवं राहु महादशा की शांति', en: 'Soothing Sade Sati, Dhaiya & Rahu Dashas' },
        explanation: {
          hi: 'कठिन ग्रह गोचर के समय मन की घबराहट दूर कर जातक को आध्यात्मिक संबल और शांति प्रदान करता है।',
          en: 'Provides traditional spiritual solace and ritual pacification during stressful Saturn and Nodal periods.',
        },
      },
      {
        title: { hi: 'वेदोक्त नवग्रह सूक्त एवं बीज मंत्र जप', en: 'Prescribed Vedic Mantra Japa & Suktam Chants' },
        explanation: {
          hi: 'वेदों के पावन नवग्रह सूक्त का सस्वर पाठ वातावरण में सात्विक और सुरक्षात्मक स्पंदन पैदा करता है।',
          en: 'Recites classical Navagraha Suktam from the Vedas, creating an uplifting aura of peace.',
        },
      },
      {
        title: { hi: 'ग्रह अनुसार शास्त्रसम्मत दान का मार्गदर्शन', en: 'Targeted Danam (Charity) Recommendations' },
        explanation: {
          hi: 'कुंडली के कमजोर अथवा पीड़ित ग्रहों के अनुसार अनाज, वस्त्र एवं धातुओं का उचित दान सुझाया जाता है।',
          en: 'Guides the devotee on scriptural donations (grains, cloth, pulses) suited to their planetary chart.',
        },
      },
      {
        title: { hi: 'मानसिक संतुलन और आत्मविश्वास की पुनर्स्थापना', en: 'Restoration of Mental Poise & Confidence' },
        explanation: {
          hi: 'कठिन समय में भी निराशा के बादल छंटते हैं और जातक दृढ़ता से अपने जीवन में आगे बढ़ता है।',
          en: 'Reduces psychological despondency, empowering the devotee to face life\'s cycles with courage.',
        },
      },
      {
        title: { hi: 'परिवार एवं प्रतिष्ठान की सामूहिक सुरक्षा', en: 'Protection for Household and Enterprise' },
        explanation: {
          hi: 'घर और कार्यस्थल पर आने वाले अप्रत्याशित संकटों और नकारात्मक प्रभावों से सुरक्षा मिलती है।',
          en: 'Protects family undertakings from unexpected disruptions attributed to planetary friction.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'बृहत्पाराशर होराशास्त्र एवं मत्स्य पुराण के नवग्रह शांति विधान का गहन और प्रामाणिक ज्ञान।',
        en: 'In-depth knowledge of Brihat Parashara Hora Shastra and Matsya Purana Navagraha rituals.',
      },
      {
        hi: 'नवग्रह मंडल के प्रत्येक अधिदेवता और प्रत्यधिदेवता की सही पहचान एवं शास्त्रीय आह्वान।',
        en: 'Precise identification of Adhidevatas and Pratyadhidevatas for each planetary Mandala section.',
      },
      {
        hi: 'विशुद्ध 9 प्रकार की वानस्पतिक समिधाओं और प्रामाणिक पूजन सामग्रियों का शत-प्रतिशत उपयोग।',
        en: 'Sourcing of authentic 9 distinct planetary woods (Navagraha Samidha) and pure ingredients.',
      },
      {
        hi: 'काशी के प्रशिक्षित विद्वानों द्वारा निर्धारित संख्या में वैदिक एवं पौराणिक मंत्रों का सस्वर जप।',
        en: 'Calculated mantra counts performed with dedicated Sanskrit pandits of Kashi.',
      },
      {
        hi: 'बिना किसी महंगे रत्न अथवा भय के जातक को सरल, सात्विक एवं शास्त्रसम्मत उपायों की सलाह।',
        en: 'Sensible, ethical astrological counsel without exploiting fear or making unverified claims.',
      },
      {
        hi: 'अनुष्ठान के पश्चात नित्य जप, दान और आहार संबंधी आचार-नियमों का संपूर्ण मार्गदर्शन।',
        en: 'Complete post-puja guidance on daily mantra chanting, gemstone suitability, and charity.',
      },
    ],
  },

  'marriage-obstacles': {
    id: 'marriage-obstacles',
    name: { hi: 'शादी में बाधा निवारण हेतु परामर्श एवं पूजन', en: 'Guidance & Puja for Marriage Obstacles' },
    mainDeity: { hi: 'माँ कात्यायनी, भगवान शिव-माता पार्वती, बृहस्पति देव एवं मंगल देव', en: 'Maa Katyayani, Lord Shiva-Parvati, Brihaspati Deva & Mangal Deva' },
    religiousPurpose: {
      hi: 'कुंडली के सप्तम भाव, नवमांश (D9), मांगलिक दोष एवं विवाह विलंब कारकों का ज्योतिषीय विश्लेषण तथा माँ कात्यायनी/शिव-गौरी पूजन।',
      en: 'Astrological analysis of the 7th house, Navamsha (D9), Manglik factors, and marriage delay indicators, combined with Katyayani/Shiva-Parvati prayers.',
    },
    traditionalReason: {
      hi: 'विवाह में हो रहे अनावश्यक विलंब, योग्य प्रस्तावों में रुकावट, वैवाहिक तालमेल की चिंता तथा पारंपरिक शांति उपायों हेतु।',
      en: 'Seeking guidance for inexplicable delays in marriage, matching suitability concerns, and traditional spiritual remedies.',
    },
    specificObstacles: {
      hi: 'पारंपरिक ज्योतिषीय मान्यतानुसार मांगलिक दोष, गुरु/शुक्र का अस्त होना, सप्तमेश की निर्बलता अथवा पितृ बाधा जनित विलंब। (विवाह की कोई गारंटी नहीं)।',
      en: 'Traditionally associated in Jyotish with Manglik Dosha, combust Jupiter/Venus, afflicted 7th house, or ancestral delays. (No guarantee of marriage).',
    },
    spiritualSignificance: {
      hi: 'दांपत्य को एक पवित्र आध्यात्मिक संस्कार मानना, मन में पवित्रता, धैर्य एवं सुयोग्य जीवनसाथी हेतु ईश्वर से प्रार्थना।',
      en: 'Approaching matrimony as a sacred spiritual samskara, cultivating patience, purity of intent, and prayer for a righteous partner.',
    },
    familySignificance: {
      hi: 'माता-पिता की चिंता में कमी, दो परिवारों के बीच सौहार्दपूर्ण संबंध, वैवाहिक सुख एवं कुल की प्रतिष्ठा।',
      en: 'Relieving parental anxiety, fostering harmonious ties between prospective families, and seeking lasting marital peace.',
    },
    personalSignificance: {
      hi: 'विवाह के प्रति सकारात्मक दृष्टिकोण, हीनभावना या निराशा से मुक्ति, आत्मविश्वास एवं भावनात्मक परिपक्वता।',
      en: 'Developing a healthy perspective on marriage, overcoming despondency, building confidence, and emotional maturity.',
    },
    jyotishSignificance: {
      hi: 'सप्तम भाव, द्वितीय भाव (कुटुंब), एकादश भाव (इच्छा पूर्ति) तथा गुरु-शुक्र की स्थिति का सूक्ष्म विश्लेषण कर पारंपरिक वैदिक उपाय।',
      en: 'Detailed examination of 7th, 2nd, and 11th houses along with Jupiter and Venus to recommend traditional Vedic remedial measures.',
    },
    categories: {
      spiritual: [
        { hi: 'माँ कात्यायनी के प्रति अनन्य भक्ति भाव से सुयोग्य वर/वधू की प्राप्ति हेतु सात्विक प्रार्थना।', en: 'Devout prayer to Maa Katyayani for an aligned and righteous life partner.' },
        { hi: 'शिव-पार्वती के आदर्श अर्धनारीश्वर स्वरूप का ध्यान कर वैवाहिक सामंजस्य की प्रेरणा।', en: 'Inspired by the Ardhanarishwara archetype of eternal marital harmony.' },
        { hi: 'विवाह को केवल सामाजिक अनुबंध न मानकर जीवन का पवित्र धर्म-संस्कार समझना।', en: 'Treating marriage as a sacred spiritual samskara rather than a contract.' },
        { hi: 'प्रतीक्षा की अवधि में मन को शांत, धैर्यवान और सकारात्मक बनाए रखना।', en: 'Maintaining a calm, patient, and positive mindset during waiting periods.' },
      ],
      religious: [
        { hi: 'कात्यायनी महामंत्र ("कात्यायनि महामाये महायोगिन्यधीश्वरि...") का विधिवत जप एवं अनुष्ठान।', en: 'Scriptural chanting of the classical Katyayani Mahamantra.' },
        { hi: 'मंगल दोष शांति हेतु मंगलेश्वर पूजन अथवा कुंभ/अर्क विवाह की शास्त्रोक्त मर्यादा (जहां लागू हो)।', en: 'Mangal Shanti or Kumbh/Arka rites adhering strictly to Shastric decorum.' },
        { hi: 'गुरु (बृहस्पति) एवं शुक्र की शुभता हेतु पीत/श्वेत द्रव्यों का दान एवं व्रत विधान।', en: 'Charity and fasting for propitiating Jupiter and Venus.' },
        { hi: 'शिव-गौरी गठबंधन पूजन एवं रुद्राभिषेक का आयोजन।', en: 'Conducting Shiva-Gauri Gathbandhan archana and Rudrabhishek.' },
      ],
      family: [
        { hi: 'संतान के विवाह को लेकर माता-पिता और परिवार के मानसिक तनाव का पारंपरिक शमन।', en: 'Relieving parental anxiety regarding matrimonial timing.' },
        { hi: 'विवाह प्रस्तावों के चयन में परिवार के लिए स्पष्ट एवं विवेकपूर्ण दृष्टिकोण।', en: 'Providing a clear, wise perspective when evaluating proposals.' },
        { hi: 'नए पारिवारिक संबंधों में मिठास, सम्मान और स्थायित्व की मंगलकामना।', en: 'Prayers for warmth, mutual respect, and stability in prospective relations.' },
      ],
      personal: [
        { hi: 'अनावश्यक सामाजिक दबाव और विवाह विलंब से उत्पन्न अवसाद से मुक्ति।', en: 'Freedom from social pressure and despondency surrounding delays.' },
        { hi: 'अपने व्यक्तित्व में सकारात्मकता, आकर्षण और परिपक्वता का विकास।', en: 'Cultivating emotional maturity, poise, and constructive self-esteem.' },
        { hi: 'सही समय पर सही निर्णय लेने के लिए मानसिक स्पष्टता और आत्मविश्वास।', en: 'Mental clarity and confidence to make sound life decisions.' },
      ],
      specificPurpose: [
        { hi: 'पारंपरिक ज्योतिष के अनुसार कुंडली में विवाह कारक ग्रहों की स्थिति समझकर उपाय करना।', en: 'Understanding marriage indicators in the birth chart to suggest remedies.' },
        { hi: 'बार-बार पक्की होकर बात टूटने जैसी परिस्थितियों में शांति और मार्गदर्शन।', en: 'Seeking guidance when prospective alliances repeatedly fall through.' },
        { hi: 'दांपत्य जीवन में सुख, शांति और दीर्घायु संबंध हेतु वैदिक संकल्प।', en: 'Vedic resolve for lasting happiness, peace, and longevity in married life.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'मानसिक धैर्य व शांति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'माँ कात्यायनी और शिव-पार्वती की स्तुति से विवाह विलंब से उत्पन्न चिंता और हीनभावना शांत होती है।',
          en: 'Calms anxious hearts through devotional prayers to Maa Katyayani and Lord Shiva-Parvati.',
        },
      },
      {
        benefit: { hi: 'कात्यायनी व गुरु कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'माँ कात्यायनी, देवगुरु बृहस्पति और शिव-गौरी का वरदान प्राप्त होकर जीवन में अनुकूलता आती है।',
          en: 'Dedicated to Maa Katyayani, Lord Shiva-Parvati, and Brihaspati Deva (Guru).',
        },
      },
      {
        benefit: { hi: 'माता-पिता की चिंता में कमी (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'संतान के विवाह को लेकर परेशान माता-पिता को सही मार्गदर्शन और मानसिक ढांढस मिलता है।',
          en: 'Eases deep parental stress regarding marriage prospects and future family alliance.',
        },
      },
      {
        benefit: { hi: 'रिश्तों की सुरक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'बनती हुई बात में ईर्ष्या, गलतफहमियों अथवा अनपेक्षित रुकावटों से रिश्ते की रक्षा होती है।',
          en: 'Traditionally performed to protect budding matrimonial alliances from jealousy and misunderstanding.',
        },
      },
      {
        benefit: { hi: 'सुखी दांपत्य की नींव (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'आने वाले वैवाहिक जीवन में प्रेम, समझ, आर्थिक स्थिरता और संतान सुख की मंगल-प्रार्थना।',
          en: 'Blesses the future union with domestic abundance, cultural grace, and mutual support.',
        },
      },
      {
        benefit: { hi: 'मांगलिक व ग्रह दोष शमन (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'सप्तम भाव की निर्बलता, मांगलिक दोष और गुरु-शुक्र की प्रतिकूलता के प्रभाव को शांत किया जाता है।',
          en: 'Traditionally believed to mitigate Manglik Dosha and 7th-house transit afflictions.',
        },
      },
      {
        benefit: { hi: 'आत्मविश्वास व आकर्षण (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'जातक के मन में निराशा दूर होकर सकारात्मक ऊर्जा, व्यक्तित्व में निखार और प्रसन्नता आती है।',
          en: 'Dispels self-doubt and social anxiety surrounding delayed marriage timing without medical claims.',
        },
      },
      {
        benefit: { hi: 'गृहस्थाश्रम संस्कार (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'विवाह को केवल सामाजिक परंपरा न मानकर एक पवित्र धर्म-संस्कार के रूप में अपनाने की प्रेरणा।',
          en: 'Deepens appreciation of Grihastha Ashrama as a noble vehicle for spiritual elevation.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'सप्तम भाव एवं नवमांश (D9) का सूक्ष्म विश्लेषण', en: 'In-Depth 7th House & Navamsha (D9) Jyotish Analysis' },
        explanation: {
          hi: 'विवाह के कारक ग्रहों, सप्तमेश और नवमांश चक्र का अध्ययन कर विलंब के वास्तविक ज्योतिषीय कारणों की पहचान।',
          en: 'Evaluates planetary strengths, Manglik factors, and Dasha timings to understand traditional reasons for marriage delays.',
        },
      },
      {
        title: { hi: 'प्रमाणिक माँ कात्यायनी अनुष्ठान', en: 'Authentic Maa Katyayani Anushthan' },
        explanation: {
          hi: 'श्रीमद्भागवत में वर्णित गोपी-कात्यायनी व्रत की परंपरा के अनुसार सुयोग्य जीवनसाथी हेतु विशेष पूजन।',
          en: 'According to Srimad Bhagavatam, worshipping Maa Katyayani is the revered traditional prayer for a noble life partner.',
        },
      },
      {
        title: { hi: 'मांगलिक दोष एवं ग्रह बाधा की शांति', en: 'Manglik Dosha & Planetary Pacification' },
        explanation: {
          hi: 'मंगल, शनि अथवा राहु के कारण विवाह में आ रही अड़चनों को दूर करने के लिए शास्त्रसम्मत उपाय।',
          en: 'Provides scriptural remedies for Mars, Saturn, or Rahu influences impacting marital houses.',
        },
      },
      {
        title: { hi: 'शिव-गौरी गठबंधन एवं दांपत्य सुख अर्चना', en: 'Shiva-Gauri Archana for Marital Harmony' },
        explanation: {
          hi: 'भगवान शिव और माता पार्वती की युगल पूजा से भावी जीवन में प्रेम, वफादारी और सामंजस्य का आशीर्वाद।',
          en: 'Invokes the divine couple archetype to nurture mutual understanding, patience, and affection.',
        },
      },
      {
        title: { hi: 'माता-पिता के लिए स्पष्ट व विवेकपूर्ण दृष्टि', en: 'Parental Reassurance & Clarified Perspective' },
        explanation: {
          hi: 'रिश्तों के चयन में अंधविश्वास या भय के बजाय व्यावहारिक और ज्योतिषीय दृष्टि से उचित निर्णय में सहयोग।',
          en: 'Assists families in evaluating matrimonial compatibility with realistic wisdom rather than blind fear.',
        },
      },
      {
        title: { hi: 'शास्त्रसम्मत कुंडली मिलान (अष्टकूट विचार)', en: 'Guidance on Auspicious Matchmaking (Kundali Milan)' },
        explanation: {
          hi: 'केवल गुण संख्या ही नहीं, बल्कि स्वास्थ्य, आयु, स्वभाव और पारिवारिक सामंजस्य का समग्र विश्लेषण।',
          en: 'Examines Ashta-Koota points and Bhava compatibility ethically without creating unnecessary paranoia.',
        },
      },
      {
        title: { hi: 'भावनात्मक परिपक्वता और सकारात्मक दृष्टिकोण', en: 'Cultivating Emotional Readiness & Confidence' },
        explanation: {
          hi: 'जातक को गृहस्थ जीवन की जिम्मेदारियों के लिए मानसिक और आत्मिक रूप से तैयार करने का मार्गदर्शन।',
          en: 'Helps the individual develop poise, self-esteem, and maturity for stepping into Grihastha Ashrama.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'वाराणसी के प्रतिष्ठित संस्कृत विश्वविद्यालयों से फलित ज्योतिष एवं नवमांश विश्लेषण में शास्त्री उपाधि प्राप्त।',
        en: 'Expertise in classical Falit Jyotish and Navamsha chart readings honed at Varanasi Sanskrit institutions.',
      },
      {
        hi: 'कात्यायनी व्रत, मंगलेश्वर शांति एवं गौरी-शंकर पूजन का बिना किसी संक्षिप्तिकरण के पूर्ण संपादन।',
        en: 'Proper execution of Katyayani Vrata Vidhi, Mangal Shanti, and Gauri-Shankar Puja without shortcuts.',
      },
      {
        hi: 'सहानुभूतिपूर्ण एवं यथार्थवादी परामर्श: हम किसी निश्चित तिथि या चमत्कार का दावा नहीं करते, केवल शास्त्रोक्त मार्गदर्शन देते हैं।',
        en: 'Balanced, constructive astrological counseling: we never guarantee dates, focusing on ethical guidance and prayers.',
      },
      {
        hi: 'अनावश्यक महंगे रत्नों के जाल में फंसाने के बजाय सरल, सात्विक एवं प्रभावशाली वैदिक उपायों पर बल।',
        en: 'Clear advice regarding genuine remedies (mantras, charity, fasts) versus unnecessary expensive gemstones.',
      },
      {
        hi: 'विवाह योग्य युवक-युवतियों और उनके परिवारों की पूर्ण गोपनीयता और मर्यादा का आदर।',
        en: 'Compassionate, confidential consultations respectful of family dignity.',
      },
      {
        hi: 'सनातन गृहस्थ मूल्यों के आधार पर सुखी और स्थायी वैवाहिक जीवन की मंगल-कामना।',
        en: 'Sincere commitment to Sanatan Dharmic values and realistic guidance.',
      },
    ],
  },

  'court-case': {
    id: 'court-case',
    name: { hi: 'कोर्ट केस में राहत हेतु परामर्श एवं पूजन', en: 'Guidance & Spiritual Prayers for Court Case Relief' },
    mainDeity: { hi: 'माँ बगलामुखी, श्री हनुमान जी (संकटमोचन) एवं भगवान भैरव', en: 'Maa Baglamukhi, Lord Hanuman (Sankat Mochan) & Lord Bhairava' },
    religiousPurpose: {
      hi: 'षष्ठ भाव (शत्रु-विवाद-ऋण), अष्टम भाव एवं दशा विश्लेषण तथा माँ बगलामुखी एवं हनुमान चालीसा/सुंदरकांड का विशेष पाठ।',
      en: 'Astrological analysis of 6th (disputes/litigation) and 8th houses combined with Baglamukhi and Hanuman / Sundarkand prayers.',
    },
    traditionalReason: {
      hi: 'अनावश्यक कानूनी उलझनों, मानसिक तनाव, झूठे विवादों से रक्षा तथा सत्य के पक्ष में आंतरिक संबल और शांति हेतु।',
      en: 'Seeking spiritual solace, mental composure, relief from protracted legal stress, and moral strength for the cause of truth.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार दुर्भावनापूर्ण मुकदमों, संपत्ति विवादों, प्रतिष्ठा हानि के भय एवं मानसिक संताप के निवारणार्थ। (कानूनी सलाह वकील से ही लें, जीत की कोई गारंटी नहीं)।',
      en: 'Traditionally believed to soothe stress from malicious litigation, property disputes, and defamation fears. (Legal counsel must come from a lawyer; no victory guarantee).',
    },
    spiritualSignificance: {
      hi: 'सत्य और धर्म के प्रति निष्ठा, ईश्वरीय न्याय में विश्वास, प्रतिशोध की भावना से मुक्ति एवं आत्मिक शांति।',
      en: 'Dedication to truth (Satya) and righteousness (Dharma), faith in cosmic justice, shedding vengefulness, and mental peace.',
    },
    familySignificance: {
      hi: 'मुकदमों के कारण परिवार पर पड़ने वाले आर्थिक एवं मानसिक बोझ को कम करने का आध्यात्मिक संबल तथा पारिवारिक प्रतिष्ठा की रक्षा।',
      en: 'Providing spiritual fortitude to bear financial and mental strains of litigation, safeguarding family honor.',
    },
    personalSignificance: {
      hi: 'अदालती प्रक्रियाओं के दौरान घबराहट पर नियंत्रण, धैर्य, वकीलों के समक्ष स्पष्ट अभिव्यक्ति एवं मानसिक संतुलन।',
      en: 'Managing panic during proceedings, maintaining patient composure, clear articulation, and psychological balance.',
    },
    jyotishSignificance: {
      hi: 'षष्ठेश (6th Lord), मंगल, राहु एवं शनि की दशा-गोचर का अध्ययन कर पारंपरिक शांति विधान एवं मंत्र जप का परामर्श।',
      en: 'Analyzing 6th Lord, Mars, Rahu, and Saturn dasha-transits to recommend traditional pacifying prayers and mantra recitations.',
    },
    categories: {
      spiritual: [
        { hi: 'सत्य की विजय ("सत्यमेव जयते") के सनातन सिद्धांत पर अडिग विश्वास का निर्माण।', en: 'Building unshakeable faith in the eternal truth of Satyameva Jayate.' },
        { hi: 'माँ बगलामुखी एवं संकटमोचन हनुमान जी के चरणों में अपनी चिंताओं का संपूर्ण समर्पण।', en: 'Surrendering litigation anxieties at the feet of Hanuman and Baglamukhi.' },
        { hi: 'अन्याय और कटुता के बीच भी अपने अंतर्मन को द्वेष और बदले की भावना से मुक्त रखना।', en: 'Keeping the soul free from malice and revenge even amidst conflict.' },
        { hi: 'विपरीत परिस्थितियों में भी धर्म और नैतिक मूल्यों का परित्याग न करने की प्रेरणा।', en: 'Upholding dharmic principles and ethical dignity under trial.' },
      ],
      religious: [
        { hi: 'माँ पीताम्बरा बगलामुखी का शास्त्रसम्मत विधि से पीत-पूजन एवं जप अनुष्ठान।', en: 'Scriptural yellow offerings and mantra anushthan of Maa Pitambari.' },
        { hi: 'श्री हनुमान जी को चोला, सिंदूर समर्पण एवं नित्य सुंदरकांड/बजरंग बाण का पाठ।', en: 'Offering sacred Chola, Sindoor, and reciting Sundarkand/Bajrang Baan.' },
        { hi: 'ग्रह-दोष शमन हेतु राहु, शनि अथवा षष्ठ भाव के अधिपति के मंत्रों का विधिवत जप।', en: 'Pacifying Rahu, Saturn, and 6th Lord through dedicated mantra chanting.' },
        { hi: 'धार्मिक संकल्प के साथ न्याय और शांति की प्राप्ति हेतु सात्विक प्रार्थना।', en: 'Satvik prayers undertaken with resolve for peace and justice.' },
      ],
      family: [
        { hi: 'लंबे कानूनी विवादों के कारण परिवार में फैली अशांति और निराशा का पारंपरिक शमन।', en: 'Soothes familial exhaustion born of prolonged legal battles.' },
        { hi: 'परिवार के सदस्यों में एकजुटता और कठिन समय में एक-दूसरे का संबल बनने की भावना।', en: 'Fostering unity and mutual support among family members.' },
        { hi: 'पारिवारिक मान-सम्मान और संचित संपत्ति की रक्षा हेतु दैवीय कृपा की याचना।', en: 'Seeking divine protection for family honor and hard-earned resources.' },
      ],
      personal: [
        { hi: 'कोर्ट-कचहरी की तारीखों और अनिश्चितताओं के बीच मानसिक शांति और धैर्य बनाए रखना।', en: 'Maintaining poise and patience during court dates and uncertainties.' },
        { hi: 'भय और संकोच से मुक्त होकर अपने पक्ष को सत्यता एवं निर्भीकता से प्रस्तुत करने का आत्मबल।', en: 'Inner courage to articulate truth fearlessly without panic.' },
        { hi: 'अनावश्यक क्रोध, तनाव और अनिद्रा से पारंपरिक विश्वास के अनुसार राहत।', en: 'Relief from self-destructive anger, insomnia, and litigation fatigue.' },
      ],
      specificPurpose: [
        { hi: 'जब कोई व्यक्ति अनुचित षड्यंत्र अथवा लंबे कानूनी विवाद में फंसा हुआ महसूस कर रहा हो।', en: 'Sought when caught in protracted disputes or false allegations.' },
        { hi: 'ज्योतिषीय दृष्टिकोण से विवाद के शांत होने की समय-सीमा और अनुकूलता का मार्गदर्शन।', en: 'Astrological guidance on timing and pacification of conflicts.' },
        { hi: 'कानूनी लड़ाई के साथ-साथ आध्यात्मिक ऊर्जा और आत्मबल को सुदृढ़ बनाए रखना।', en: 'Sustaining spiritual energy alongside proper legal representation.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'मानसिक संबल (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'अदालती तनाव और अनिश्चितताओं के बीच मन को शांत कर ईश्वरीय न्याय पर भरोसा दिलाता है।',
          en: 'Surrenders protracted legal bitterness to divine justice, restoring inner quietude.',
        },
      },
      {
        benefit: { hi: 'हनुमान व पीताम्बरा कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'संकटमोचन हनुमान जी का बल और माँ बगलामुखी की स्तम्भन शक्ति से भय का नाश होता है।',
          en: 'Dedicated to Maa Baglamukhi and Lord Hanuman (Sankat Mochan) for moral strength.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक प्रतिष्ठा रक्षा (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'कानूनी विवादों के कारण परिवार पर पड़ने वाले मानसिक और सामाजिक दबाव से राहत मिलती है।',
          en: 'Shields family relationships from the toxic spillover of chronic legal anxieties.',
        },
      },
      {
        benefit: { hi: 'झूठे आरोपों से सुरक्षा (Protection)', en: 'Protection' },
        significance: {
          hi: 'पारंपरिक रूप से दुर्भावनापूर्ण षड्यंत्रों और अनुचित मुकदमों के प्रभाव को शांत करने का कवच।',
          en: 'Traditionally sought as a spiritual armor against malicious fabrications and unjust attacks.',
        },
      },
      {
        benefit: { hi: 'संसाधनों की सुरक्षा (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'मुकदमों में धन के अनावश्यक अपव्यय को रोकने और समझौते की सद्बुद्धि मिलने की प्रार्थना।',
          en: 'Helps protect family resources from being entirely eroded by unproductive disputes.',
        },
      },
      {
        benefit: { hi: 'षष्ठ भाव शांति (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'कुंडली के छठे भाव (शत्रु-विवाद-ऋण) के ग्रह दोषों को शांत कर तनाव कम किया जाता है।',
          en: 'Traditionally believed in Jyotish to pacify 6th-house adversarial transits.',
        },
      },
      {
        benefit: { hi: 'तारीखों पर संयम (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'अदालत की तारीखों के समय घबराहट पर नियंत्रण और वकीलों से स्पष्ट वार्ता का आत्मविश्वास मिलता है।',
          en: 'Combats litigation fatigue, despair, and panic without medical claims.',
        },
      },
      {
        benefit: { hi: 'सत्यनिष्ठा व धर्म (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'बदले की भावना त्यागकर सत्य और धर्म के मार्ग पर अडिग रहने की आध्यात्मिक प्रेरणा।',
          en: 'Inspires adherence to Satya (truth) and Dharma, purifying intent from malice.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'लंबी कानूनी प्रक्रियाओं के दौरान आध्यात्मिक संबल', en: 'Spiritual Solace During Protracted Litigation' },
        explanation: {
          hi: 'मुकदमों की थकाऊ और तनावपूर्ण प्रक्रिया में मन को धैर्य, आशा और आध्यात्मिक संबल प्रदान करता है।',
          en: 'Provides devotional anchoring and mental calm to navigate the emotionally exhausting pace of legal disputes.',
        },
      },
      {
        title: { hi: 'माँ बगलामुखी एवं संकटमोचन हनुमान जी की पावन स्तुति', en: 'Devotional Prayers to Maa Baglamukhi & Hanuman Ji' },
        explanation: {
          hi: 'शत्रुता को शांत करने वाली पीताम्बरा और संकटों को हरने वाले हनुमान जी की आराधना से अभय मिलता है।',
          en: 'Invokes divine restraint on malice and the unshakeable courage of Sankat Mochan Hanuman.',
        },
      },
      {
        title: { hi: 'षष्ठ एवं अष्टम भाव की दशा-गोचर का ज्योतिषीय अध्ययन', en: 'Astrological Insights on 6th & 8th House Dasha Cycles' },
        explanation: {
          hi: 'विवाद की अवधि, ग्रहों की अनुकूलता और समय की चाल को समझकर धैर्यपूर्वक कदम उठाने की सलाह।',
          en: 'Evaluates the period of conflict in your birth chart to counsel patience during unfavorable transits.',
        },
      },
      {
        title: { hi: 'संयम, विवेक और स्पष्ट अभिव्यक्ति का विकास', en: 'Cultivating Composure & Clear Expression' },
        explanation: {
          hi: 'अदालती कार्यवाहियों में बिना घबराए सत्यता के साथ अपनी बात रखने का आंतरिक आत्मबल प्राप्त होता है।',
          en: 'Helps maintain mental clarity, dignity, and calm composure while consulting legal professionals.',
        },
      },
      {
        title: { hi: 'कटुता का शमन एवं शांतिपूर्ण समझौते की प्रेरणा', en: 'Mitigation of Hostility & Vengeance' },
        explanation: {
          hi: 'प्रतिशोध की आग में जलने के बजाय न्यायसंगत, सम्मानजनक और शांतिपूर्ण समाधान का मार्ग प्रशस्त होता है।',
          en: 'Encourages peaceful settlements, mediation, and righteous conduct rather than escalating enmity.',
        },
      },
      {
        title: { hi: 'पारिवारिक प्रतिष्ठा और संपत्ति की सुरक्षा', en: 'Protection of Family Honor & Mental Reserves' },
        explanation: {
          hi: 'पूरे परिवार को एकजुट रखकर संकट के दौर से सम्मानपूर्वक निकलने का आध्यात्मिक मार्गदर्शन।',
          en: 'Assists the family in remaining united and spiritually strong throughout challenging trials.',
        },
      },
      {
        title: { hi: 'स्पष्ट वैधानिक सीमा एवं नैतिक मर्यादा', en: 'Strict Ethical Disclaimer & Legal Boundary' },
        explanation: {
          hi: 'हम किसी कानूनी जीत की गारंटी नहीं देते; यह विशुद्ध सात्विक प्रार्थना है। कानूनी सलाह वकील से ही लें।',
          en: 'Clearly distinguishes spiritual prayers from legal representation; devotees are guided to retain qualified advocates.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'विशुद्ध सात्विक, प्रामाणिक एवं शास्त्रोक्त अनुष्ठान जो किसी भी प्रकार की अनुचित या गैरकानूनी तांत्रिक क्रिया से मुक्त है।',
        en: 'Purely satvik, scriptural anushthan grounded in genuine Vedic and Shakta traditions of Kashi.',
      },
      {
        hi: 'हम कभी भी "अदालत में जीत की गारंटी" जैसे झूठे दावे नहीं करते; हमारी सेवा विशुद्ध ईश्वर भक्ति व संबल पर आधारित है।',
        en: 'No unlawful promises: we strictly never promise "guaranteed court victory", keeping faith authentic.',
      },
      {
        hi: 'सुंदरकांड, हनुमान बाहुक एवं बगलामुखी स्तोत्र का शास्त्रीय छंद एवं शुद्ध लय के साथ पाठ।',
        en: 'Proper Sundarkand, Hanuman Bahuk, and Baglamukhi Stotram recitations with correct meter.',
      },
      {
        hi: 'यजमान को आत्मघाती क्रोध और बदले की भावना से बचाकर विवेक और सत्य के मार्ग पर स्थिर रखना।',
        en: 'Sincere counseling helping devotees avoid destructive anger and focus on truth and patience.',
      },
      {
        hi: 'मंगलवार और शनिवार को हनुमान सिंदूर अर्पण, व्रत और यथायोग्य दान का प्रामाणिक मार्गदर्शन।',
        en: 'Experienced guidance on fasting, Hanuman Sindoor Arpana, and charity on auspicious Tuesdays and Saturdays.',
      },
      {
        hi: 'यजमान के पारिवारिक एवं व्यक्तिगत मामलों की पूर्ण गोपनीयता का निष्ठापूर्वक सम्मान।',
        en: 'High ethical standards protecting the client\'s privacy and personal integrity.',
      },
    ],
  },

  'astrology': {
    id: 'astrology',
    name: { hi: 'ज्योतिष परामर्श / फलित ज्योतिष', en: 'Astrology Consultation / Predictive Astrology' },
    mainDeity: { hi: 'महर्षि पराशर, महर्षि जैमिनी एवं भगवान श्री गणेश (विघ्नहर्ता)', en: 'Maharshi Parashara, Maharshi Jaimini & Lord Ganesha (Vighnaharta)' },
    religiousPurpose: {
      hi: 'ग्रह-नक्षत्रों की स्थिति, महादशा-अंतर्दशा, गोचर एवं षोडशवर्ग चक्रों का वैदिक ज्योतिषीय विश्लेषण एवं मार्गदर्शन।',
      en: 'Vedic astrological interpretation of planetary positions, Mahadasha-Antardasha cycles, transits, and Shodashvarga divisional charts.',
    },
    traditionalReason: {
      hi: 'जीवन की परिस्थितियों को समझने, अनुकूल समय (मुहूर्त) के चयन, कठिन समय में मार्गदर्शन एवं पारंपरिक उपायों हेतु।',
      en: 'Understanding life circumstances, selecting auspicious timings (Muhurat), navigating challenging phases, and exploring traditional remedies.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार निर्णय लेने में अनिश्चितता, कैरियर/व्यवसाय में भ्रम, पारिवारिक चिंताओं एवं दिशाहीनता के समाधान हेतु। (कोई वैज्ञानिक दावा नहीं)।',
      en: 'Traditionally used to address indecision, career ambiguity, familial anxiety, and lack of life direction. (Not scientific certainty).',
    },
    spiritualSignificance: {
      hi: 'कर्म और प्रारब्ध के संतुलन को समझना, आत्म-निरीक्षण, ईश्वर की व्यवस्था पर विश्वास एवं जीवन के प्रति जागरूक दृष्टिकोण।',
      en: 'Understanding the balance between Karma and Prarabdha (destiny), self-reflection, and developing a conscious approach to life.',
    },
    familySignificance: {
      hi: 'पारिवारिक निर्णयों (विवाह, व्यापार, भूमि क्रय) में समरसता, परिजनों के स्वभाव को समझकर सामंजस्य एवं शांति।',
      en: 'Harmonizing collective family decisions (marriage, trade, property), understanding member temperaments, and fostering peace.',
    },
    personalSignificance: {
      hi: 'आत्म-बोध, अपनी क्षमताओं और सीमाओं की स्पष्ट समझ, कठिन समय में धैर्य एवं भविष्य के प्रति सकारात्मक आशा।',
      en: 'Self-awareness, understanding strengths and weaknesses, cultivating patience during downswings, and constructive optimism.',
    },
    jyotishSignificance: {
      hi: 'बृहत्पाराशर होराशास्त्र के सिद्धांतों पर आधारित लग्न, राशि, भाव, भावेश एवं दृष्टि संबंधों का समग्र वैदिक विवेचन।',
      en: 'Holistic Vedic interpretation of Lagna, Rashi, Bhava, Bhavadhipati, and planetary aspects based on Brihat Parashara Hora Shastra.',
    },
    categories: {
      spiritual: [
        { hi: 'ज्योतिष को "वेदों का नेत्र" (वेदांग) मानकर जीवन के गूढ़ आध्यात्मिक रहस्यों को समझना।', en: 'Treating Jyotish as the Eye of the Vedas (Vedanga) to comprehend life\'s purpose.' },
        { hi: 'अपने प्रारब्ध कर्मों के प्रति सजग होकर वर्तमान पुरुषार्थ को सात्विक दिशा देना।', en: 'Consciously channeling current effort (Purushartha) while accepting Prarabdha.' },
        { hi: 'ग्रहों के माध्यम से ईश्वरीय नियम और ब्रह्माण्डीय संतुलन का साक्षात्कार।', en: 'Recognizing cosmic order and divine governance through planetary rhythms.' },
        { hi: 'संशय, भ्रम और निराशा से मुक्त होकर अंतर्मन में शांति की अनुभूति।', en: 'Inner peace born of freedom from doubt, confusion, and despair.' },
      ],
      religious: [
        { hi: 'शास्त्रसम्मत पंचांग (तिथि, वार, नक्षत्र, योग, करण) के अनुसार शुभ मुहूर्त का निर्धारण।', en: 'Accurate Panchang-based Muhurat calculation for sacred beginnings.' },
        { hi: 'ग्रह-दोष निवारण हेतु वेदोक्त मंत्र, स्तोत्र, व्रत एवं दान की उचित विधि का परामर्श।', en: 'Guidance on scriptural Stotras, fasting, mantras, and charity.' },
        { hi: 'ईष्ट देव की पहचान एवं उनकी आराधना से आध्यात्मिक संबल प्राप्त करने का मार्गदर्शन।', en: 'Identifying Ishta Devata to anchor lifelong devotional practice.' },
        { hi: 'सनातन धर्म के आचार-विचार और जीवन-संस्कारों के प्रति निष्ठा की पुष्टि।', en: 'Reaffirming commitment to Sanatan Dharmic values and Samskaras.' },
      ],
      family: [
        { hi: 'पारिवारिक सदस्यों की जन्मकुंडलियों के अध्ययन से आपसी तालमेल में सुधार।', en: 'Improving mutual understanding across family member charts.' },
        { hi: 'संतान की शिक्षा, रुचि और कैरियर के चयन में माता-पिता के लिए उपयोगी दृष्टिकोण।', en: 'Guiding parents on children\'s natural vocational inclinations.' },
        { hi: 'नये व्यापार, संपत्ति अथवा मांगलिक कार्यों के लिए अनुकूल पारिवारिक निर्णय।', en: 'Facilitating informed decisions for property, business, and ceremonies.' },
      ],
      personal: [
        { hi: 'जीवन के महत्वपूर्ण पड़ावों पर भ्रम की स्थिति में विवेकपूर्ण और स्पष्ट मार्गदर्शन।', en: 'Wise, clear perspective during crossroads of life and career.' },
        { hi: 'कठिन समय में घबराने के बजाय धैर्य और सुनियोजित प्रयास करने की प्रेरणा।', en: 'Inspiring patient, structured effort during cyclical downswings.' },
        { hi: 'अपनी कमजोरियों पर विजय पाने और स्वाभाविक गुणों को निखारने का संबल।', en: 'Overcoming blind spots and nurturing innate strengths.' },
      ],
      specificPurpose: [
        { hi: 'कैरियर, व्यवसाय, शिक्षा, स्वास्थ्य, वैवाहिक जीवन एवं आर्थिक स्थिति पर समग्र दृष्टिकोण।', en: 'Holistic overview of career, trade, education, health, and family.' },
        { hi: 'जीवन में चल रही दशा और गोचर के प्रभाव को समझकर उचित समय पर उचित कदम उठाना।', en: 'Pacing actions according to active Dasha and transit cycles.' },
        { hi: 'अंधविश्वास और भय से मुक्त होकर शास्त्रीय एवं प्रामाणिक मार्गदर्शन प्राप्त करना।', en: 'Purely rational, scriptural guidance free from superstition.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'वैचारिक स्पष्टता (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'जीवन के सुख-दुख को कर्म सिद्धांत के परिप्रेक्ष्य में समझकर मन का भ्रम और निराशा दूर होती है।',
          en: 'Brings clarity by framing life\'s joys and sorrows within the sublime architecture of Vedic karma.',
        },
      },
      {
        benefit: { hi: 'गणेश व पराशर कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'विघ्नहर्ता गणेश जी एवं ज्योतिष प्रणेता महर्षि पराशर के आशीर्वाद से बुद्धि और विवेक जागृत होता है।',
          en: 'Dedicated to Ganapati and Sage Parashara, seekers of divine insight and wisdom.',
        },
      },
      {
        benefit: { hi: 'पारिवारिक तालमेल (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'परिजनों के ग्रहों और स्वभाव को समझकर घर में व्यर्थ के मनमुटाव से बचा जा सकता है।',
          en: 'Helps family members understand one another\'s astrological temperaments with empathy.',
        },
      },
      {
        benefit: { hi: 'समय की पूर्व-चेतावनी (Protection)', en: 'Protection' },
        significance: {
          hi: 'कठिन गोचर और दशा के समय अनावश्यक जोखिम लेने से बचने की विवेकपूर्ण सलाह मिलती है।',
          en: 'Warns against hasty actions during unfavorable astrological transits, encouraging prudence.',
        },
      },
      {
        benefit: { hi: 'शुभ मुहूर्त चयन (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'व्यापार, गृह निर्माण अथवा मांगलिक कार्यों को शुभ मुहूर्त में आरंभ कर अनुकूलता पाई जा सकती है।',
          en: 'Guides optimal timing (Muhurat) for investments, new ventures, and major milestones.',
        },
      },
      {
        benefit: { hi: 'सात्विक उपाय (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'ग्रह बाधाओं को शांत करने के लिए प्रामाणिक मंत्र, व्रत और दान के उपाय बताए जाते हैं।',
          en: 'Suggests traditional Vedic prayers, fasts, and charities to soften karmic bottlenecks.',
        },
      },
      {
        benefit: { hi: 'अनिर्णय से मुक्ति (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'कैरियर और व्यक्तिगत जीवन के दोराहों पर खड़े होने पर सही दिशा और मानसिक शांति मिलती है।',
          en: 'Relieves agonizing indecisiveness, replacing confusion with calm, structured direction without medical claims.',
        },
      },
      {
        benefit: { hi: 'पुरुषार्थ प्रेरणा (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'भाग्यवादी बनकर बैठने के बजाय अपने कर्म (पुरुषार्थ) को सही दिशा में लगाने का संबल मिलता है।',
          en: 'Inspires righteous conduct (Dharma) and dedicated effort (Purushartha) over fatalism.',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'वेदांग ज्योतिष की प्रामाणिक शास्त्रीय व्याख्या', en: 'Authentic Vedanga Jyotish Interpretation' },
        explanation: {
          hi: 'महर्षि पराशर एवं जैमिनी के मूल संस्कृत सिद्धांतों के आधार पर जीवन का गंभीर और निष्पक्ष विश्लेषण।',
          en: 'Grounded in classical Sanskrit treatises (Brihat Parashara, Jaimini Sutras) rather than speculative predictions.',
        },
      },
      {
        title: { hi: 'महादशा, अंतर्दशा एवं गोचर की समयबद्ध समझ', en: 'Comprehensive Dasha & Gochar Timing Analysis' },
        explanation: {
          hi: 'वर्तमान में चल रहे ग्रह समय को समझकर जीवन के महत्वपूर्ण निर्णयों को सही गति देने में सहायता।',
          en: 'Examines current planetary periods (Mahadasha/Antardasha) to help you pace important life decisions.',
        },
      },
      {
        title: { hi: 'कैरियर, व्यापार और शिक्षा में स्पष्ट मार्गदर्शन', en: 'Clarity in Career, Business & Education' },
        explanation: {
          hi: 'दशम भाव, षड्बल और अमात्यकारक का परीक्षण कर जातक की स्वाभाविक प्रतिभा के अनुकूल क्षेत्र का परामर्श।',
          en: 'Assesses 10th house, planetary strengths (Shadbala), and Amatyakaraka to suggest aligned professional directions.',
        },
      },
      {
        title: { hi: 'बिना डराए सात्विक एवं यथार्थवादी परामर्श', en: 'Ethical & Realistic Guidance Without Fearmongering' },
        explanation: {
          hi: 'भय दिखाने या गैर-जरूरी महंगे उपाय थोपने के बजाय सात्विक और व्यावहारिक मार्गदर्शन पर जोर।',
          en: 'Focuses on empowering the devotee with constructive remedies rather than creating panic or dread.',
        },
      },
      {
        title: { hi: 'सर्वश्रेष्ठ शुभ मुहूर्त निर्धारण', en: 'Auspicious Muhurat Determination' },
        explanation: {
          hi: 'विवाह, गृह प्रवेश, नामकरण एवं नए निवेश के लिए पंचांग के अनुसार सर्वाधिक शुभ समय की गणना।',
          en: 'Calculates the finest astrological timings for housewarmings, weddings, naming ceremonies, and investments.',
        },
      },
      {
        title: { hi: 'पारंपरिक आध्यात्मिक एवं जीवनशैली उपाय', en: 'Traditional Spiritual & Lifestyle Remedies' },
        explanation: {
          hi: 'जातक की कुंडली के अनुसार विशिष्ट मंत्र, स्तोत्र, व्रत और सात्विक दान की शास्त्रीय अनुशंसा।',
          en: 'Recommends specific Japas, Stotras, dietary disciplines, and charities tailored to your chart.',
        },
      },
      {
        title: { hi: 'गोपनीय एवं आदरयुक्त संवाद', en: 'Confidential & Empathetic Consultations' },
        explanation: {
          hi: 'आपकी व्यक्तिगत एवं पारिवारिक समस्याओं पर पूर्ण गोपनीयता और धैर्यपूर्वक विस्तार से चर्चा।',
          en: 'Provides an attentive, respectful space to discuss personal challenges and family questions.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'वाराणसी के विख्यात संस्कृत विश्वविद्यालयों से फलित ज्योतिष में विधिवत शास्त्री एवं आचार्य की डिग्री।',
        en: 'Formally degreed Sanskrit scholars from premier Sanskrit institutions in Varanasi.',
      },
      {
        hi: 'विगत 10 वर्षों का निरंतर व्यावहारिक कुंडली विश्लेषण एवं ज्योतिषीय परामर्श का समृद्ध अनुभव।',
        en: 'Over a decade of practical consultation experience grounded in traditional Kundali Ganita and Phalit.',
      },
      {
        hi: 'गैर-व्यावसायिक दृष्टिकोण: हम महंगे रत्न बेचने या भाग्य बदलने के असंभव दावों में विश्वास नहीं करते।',
        en: 'Non-commercial philosophy: we do not sell overpriced gemstones or claim to magically change your destiny.',
      },
      {
        hi: 'हिंदी और अंग्रेजी दोनों में अत्यंत सरल, स्पष्ट और आधुनिक समझ के अनुकूल संवाद।',
        en: 'Clear & accessible explanations in Hindi and English accessible to modern seekers.',
      },
      {
        hi: 'ज्योतिषीय विश्लेषण के साथ-साथ प्रामाणिक वैदिक कर्मकांड और पूजा की समग्र व्यवस्था।',
        en: 'Holistic spiritual integration combining chart interpretation with practical Vedic remedies.',
      },
      {
        hi: 'काशी की पावन ज्ञान परंपरा के अनुसार निष्ठा, सत्यवादिता और जातक के कल्याण के प्रति समर्पण।',
        en: 'Sincere dedication to guiding devotees toward Dharma, peace of mind, and responsible action.',
      },
    ],
  },

  'kundali': {
    id: 'kundali',
    name: { hi: 'कुंडली परामर्श / जन्मपत्रिका विश्लेषण', en: 'Kundali Consultation / Birth Chart Analysis' },
    mainDeity: { hi: 'भगवान सूर्य नारायण (सविता देव) एवं भगवान श्री गणेश', en: 'Lord Surya Narayana (Savita Deva) & Lord Ganesha' },
    religiousPurpose: {
      hi: 'जन्म समय, तिथि एवं स्थान के आधार पर द्वादश भाव, नवग्रह स्थिति, षोडशवर्ग एवं नक्षत्रों का विस्तृत शास्त्रीय विश्लेषण।',
      en: 'Detailed Shastric analysis of the 12 houses, nine planets, Shodashvarga divisional charts, and Nakshatra placements based on birth details.',
    },
    traditionalReason: {
      hi: 'व्यक्ति के जन्मजात स्वभाव, प्रतिभा, संभावित जीवन-मार्ग, स्वास्थ्य प्रवृत्तियों एवं दशा चक्रों का पारम्परिक अध्ययन।',
      en: 'Traditional study of innate temperament, potential talents, life paths, health tendencies, and dasha cycles.',
    },
    specificObstacles: {
      hi: 'पारंपरिक मान्यतानुसार जीवन की दिशा का न मिलना, बार-बार के असफल प्रयास, विवाह मिलान में संशय एवं आत्म-संदेह। (कोई भाग्य बदलने की गारंटी नहीं)।',
      en: 'Traditionally consulted for overcoming confusion regarding vocation, repeated setbacks, matchmaking doubts, and self-doubt. (No guaranteed predictions).',
    },
    spiritualSignificance: {
      hi: 'आत्मा के इस जन्म के प्रारब्ध और संचित कर्मों को समझकर धर्मानुकूल जीवन जीने का आध्यात्मिक दृष्टिकोण।',
      en: 'Understanding the soul\'s Prarabdha and Sanchita karmas in this embodiment to live a dharmic and purposeful life.',
    },
    familySignificance: {
      hi: 'विवाह हेतु गुण मिलान (अष्टकूट), पारिवारिक सुख-शांति, संतान के उज्ज्वल भविष्य की योजना एवं सामंजस्य।',
      en: 'Ashta-Koota matchmaking for marriage, family peace, planning for children\'s future, and mutual understanding.',
    },
    personalSignificance: {
      hi: 'अपनी वास्तविक शक्तियों और कमजोरियों की पहचान, समय की अनुकूलता को जानकर योजना बनाना एवं आत्मबल।',
      en: 'Recognizing one\'s true strengths and limitations, planning actions according to time\'s favorability, and mental resilience.',
    },
    jyotishSignificance: {
      hi: 'लग्न कुंडली, चंद्र कुंडली, नवमांश (D9), दशमांश (D10) आदि वर्गों का सूक्ष्म परीक्षण कर संतुलित मार्गदर्शन।',
      en: 'In-depth examination of Lagna, Chandra, Navamsha (D9), Dashamsha (D10) charts to provide balanced life guidance.',
    },
    categories: {
      spiritual: [
        { hi: 'जन्मपत्रिका को अपने पूर्वजन्मों के संचित कर्मों का मानचित्र मानकर आत्म-स्वीकृति।', en: 'Accepting natal chart as a sacred map of accumulated karmas.' },
        { hi: 'व्यक्तिगत अहंकार को त्यागकर ईश्वर द्वारा निर्धारित प्राकृतिक नियमों का आदर करना।', en: 'Surrendering personal ego and respecting divine cosmic order.' },
        { hi: 'जीवन की प्रतिकूलताओं को कर्म-परिमार्जन का अवसर मानकर शांत रहना।', en: 'Viewing trials as opportunities for karmic purification.' },
        { hi: 'ईष्ट देव की पहचान कर उनकी उपासना से आत्मिक शांति प्राप्त करना।', en: 'Identifying Ishta Devata to anchor devotional tranquility.' },
      ],
      religious: [
        { hi: 'जन्म नक्षत्र, नामाक्षर, राशि एवं लग्न के अनुसार सनातन संस्कारों का निर्धारण।', en: 'Determining Samskara timings according to birth Nakshatra and Lagna.' },
        { hi: 'कुंडली में स्थित कमजोर ग्रहों को वैदिक मंत्रों, स्तोत्रों और दान से बल प्रदान करना।', en: 'Strengthening weak planets through Vedic Stotras, fasting, and charity.' },
        { hi: 'दैनिक एवं नैमित्तिक धार्मिक कर्तव्यों का सही दिशा में संपादन।', en: 'Directing daily and periodic dharmic responsibilities effectively.' },
        { hi: 'शास्त्रसम्मत तीर्थ यात्रा, व्रत एवं पूजा संकल्प का निर्धारण।', en: 'Determining auspicious tirthas, fasts, and vows aligned with natal chart.' },
      ],
      family: [
        { hi: 'विवाह के समय वर-वधू की जन्मपत्रिकाओं का गंभीर एवं निष्पक्ष मिलान।', en: 'Thorough, objective matchmaking (Kundali Milan) for marriage.' },
        { hi: 'संतान की जन्मपत्रिका से उसके स्वभाव और बौद्धिक विकास को समझकर सही मार्गदर्शन।', en: 'Guiding children\'s intellectual and character growth per their chart.' },
        { hi: 'परिवार के कुल-देवता एवं पितृ-स्थान की स्थिति को समझकर धार्मिक कर्तव्य निभाना।', en: 'Understanding Kuldevata and ancestral houses to perform filial duties.' },
      ],
      personal: [
        { hi: 'कैरियर, शिक्षा और व्यापार के चयन में अपनी प्राकृतिक क्षमताओं के अनुसार निर्णय।', en: 'Choosing education and career aligned with natural planetary gifts.' },
        { hi: 'अशुभ दशा के समय अनावश्यक जोखिम लेने से बचने की विवेकपूर्ण सलाह।', en: 'Prudent caution against reckless risks during malefic periods.' },
        { hi: 'मानसिक तनाव, भ्रम और आत्म-हीनता से मुक्त होकर सकारात्मक ऊर्जा का संचय।', en: 'Overcoming self-doubt and channeling constructive confidence.' },
      ],
      specificPurpose: [
        { hi: 'अपनी जन्मकुंडली का संपूर्ण जीवन-वृत्त (Lagna, Rashi, Dasha, Bhava) शास्त्रीय दृष्टि से समझना।', en: 'Comprehensive Shastric overview of Lagna, Rashi, Dasha, and Bhavas.' },
        { hi: 'विवाह, नौकरी, पदोन्नति, स्वास्थ्य और विदेश यात्रा जैसे महत्वपूर्ण विषयों पर परामर्श।', en: 'Consultation on marriage, career, health, and major transitions.' },
        { hi: 'पारंपरिक वैदिक उपायों (मंत्र, दान, व्रत) द्वारा जीवन में संतुलन स्थापित करना।', en: 'Restoring life balance through authentic Vedic remedies.' },
      ],
    },
    tableRows: [
      {
        benefit: { hi: 'आत्म-स्वीकृति (Spiritual Peace)', en: 'Spiritual Peace' },
        significance: {
          hi: 'अपनी जन्मपत्रिका को कर्म का मानचित्र समझकर व्यर्थ की तुलना और ईर्ष्या से मुक्ति मिलती है।',
          en: 'Accepts life\'s unique blueprint with humility, aligning personal will with divine wisdom.',
        },
      },
      {
        benefit: { hi: 'सूर्य नारायण कृपा (Divine Blessings)', en: 'Divine Blessings' },
        significance: {
          hi: 'सविता देवता (सूर्य) की कृपा से जीवन में ज्ञान, तेज, यश और आत्मबल का विकास होता है।',
          en: 'Dedicated to Lord Surya (Savita) and the cosmic Planetary Regents.',
        },
      },
      {
        benefit: { hi: 'गुण मिलान व सामंजस्य (Family Harmony)', en: 'Family Harmony' },
        significance: {
          hi: 'विवाह के समय सटीक अष्टकूट मिलान से दांपत्य सुख, स्वास्थ्य और दीर्घायु की परख होती है।',
          en: 'Provides ethical Kundali Milan (matchmaking) evaluating real temperamental compatibility.',
        },
      },
      {
        benefit: { hi: 'समय की पूर्व समझ (Protection)', en: 'Protection' },
        significance: {
          hi: 'प्रतिकूल दशा-अंतर्दशा में सावधान रहकर अनावश्यक हानि और जोखिम से बचा जा सकता है।',
          en: 'Advises caution and spiritual mindfulness during vulnerable astrological transits.',
        },
      },
      {
        benefit: { hi: 'योगों की पहचान (Prosperity)', en: 'Prosperity' },
        significance: {
          hi: 'कुंडली के धन योग, राजयोग और पंच महापुरुष योगों को समझकर सही दिशा में प्रयास करने का संबल।',
          en: 'Identifies favorable Dhana and Raja Yogas to help channel efforts effectively.',
        },
      },
      {
        benefit: { hi: 'भाव दोष निवारण (Removal of Obstacles)', en: 'Removal of Obstacles' },
        significance: {
          hi: 'पीड़ित भावों और कमजोर ग्रहों को मजबूत करने के लिए व्यक्तिगत वैदिक उपाय बताए जाते हैं।',
          en: 'Prescribes traditional personalized remedies (Japa, Danam, Vrata) for afflicted houses.',
        },
      },
      {
        benefit: { hi: 'आत्म-विश्वास (Mental Peace)', en: 'Mental/Emotional Peace' },
        significance: {
          hi: 'अपनी वास्तविक शक्तियों और सीमाओं को जानकर निराशा और हीनभावना से मुक्ति मिलती है।',
          en: 'Replaces fatalistic dread with constructive self-knowledge and calm clarity without medical claims.',
        },
      },
      {
        benefit: { hi: 'धर्म पुरुषार्थ (Spiritual Growth)', en: 'Spiritual Growth' },
        significance: {
          hi: 'कुंडली के नवम व द्वादश भाव के अध्ययन से ईष्ट उपासना और धर्मानुकूल जीवन की प्रेरणा मिलती है।',
          en: 'Guides the seeker toward their Ishta Devata and righteous living (Dharma Purushartha).',
        },
      },
    ],
    websiteBenefits: [
      {
        title: { hi: 'द्वादश भाव एवं षोडशवर्ग चक्रों का सूक्ष्म अध्ययन', en: 'Rigorous 12-Bhava & Divisional Chart Analysis' },
        explanation: {
          hi: 'लग्न, नवमांश (D9), दशमांश (D10) एवं द्वादशांश चक्रों का संपूर्ण शास्त्रीय परीक्षण।',
          en: 'Examines your Lagna, Navamsha (D9), Dashamsha (D10), and Dwadasamsa charts for comprehensive insight.',
        },
      },
      {
        title: { hi: 'सटीक विंशोत्तरी महादशा एवं अंतर्दशा विवेचन', en: 'Precise Mahadasha & Antardasha Mapping' },
        explanation: {
          hi: 'वर्तमान में चल रही दशा का फल समझकर आजीविका, परिवार और स्वास्थ्य के निर्णयों का सही समय निर्धारण।',
          en: 'Explains the active planetary periods governing your current life phase, career, and personal dynamics.',
        },
      },
      {
        title: { hi: 'प्रामाणिक एवं निष्पक्ष कुंडली मिलान (Kundali Milan)', en: 'Ethical & Realistic Matchmaking (Kundali Milan)' },
        explanation: {
          hi: 'केवल 36 गुणों की गिनती नहीं, बल्कि नाड़ी दोष, भकूट दोष, ग्रह मैत्री और आयु का समग्र परीक्षण।',
          en: 'Goes far beyond superficial Guna scores to evaluate longevity, mental harmony, and family alignment.',
        },
      },
      {
        title: { hi: 'जन्मजात प्रतिभा और क्षमताओं की पहचान', en: 'Identification of Innate Strengths & Talents' },
        explanation: {
          hi: 'विद्यार्थियों एवं युवाओं को उनकी कुंडली के ग्रहों के अनुसार सही विषय और आजीविका क्षेत्र का चुनाव।',
          en: 'Assists students and professionals in discovering fields where their natural planetary configurations shine.',
        },
      },
      {
        title: { hi: 'व्यक्तिगत वैदिक एवं सात्विक उपाय (Upayas)', en: 'Personalized Scriptural Remedies (Upayas)' },
        explanation: {
          hi: 'कमजोर ग्रहों को बलवान बनाने के लिए विशिष्ट स्तोत्र पाठ, व्रत, सात्विक दान और मंत्र जप की सलाह।',
          en: 'Prescribes authentic Vedic remedies—specific Stotras, charities, fasts, and mantras—without fearmongering.',
        },
      },
      {
        title: { hi: 'कर्म और प्रारब्ध का सही बोध', en: 'Understanding Karmic Patterns & Life Lessons' },
        explanation: {
          hi: 'पिछली असफलताओं से सीखकर वर्तमान में पूरे मनोयोग से पुरुषार्थ करने की सकारात्मक प्रेरणा।',
          en: 'Helps you make peace with past struggles and approach future opportunities with renewed purpose.',
        },
      },
      {
        title: { hi: 'शास्त्री जी से सीधा एक-से-एक परामर्श', en: 'Direct Consultations with Kashi Vidwans' },
        explanation: {
          hi: 'शास्त्री हिमांशु त्रिपाठी जी से सीधे संवाद कर अपने सभी प्रश्नों का धैर्यपूर्वक समाधान प्राप्त करें।',
          en: 'Direct one-on-one dialogue with Shastri Ji ensuring all questions are answered with patience and clarity.',
        },
      },
    ],
    whyChooseKashiBrahmins: [
      {
        hi: 'वाराणसी की पारंपरिक संस्कृत गणित एवं सिद्धांत पद्धति से प्रशिक्षित निष्ठावान ज्योतिषाचार्य।',
        en: 'Trained in rigorous classical Sanskrit Kundali Ganita and Siddhanta at Varanasi.',
      },
      {
        hi: 'सटीक अयनांश (लाहिड़ी/चित्रा पक्ष) और शुद्ध ग्रह स्फुट के आधार पर कुंडली की गणितीय गणना।',
        en: 'Exacting birth chart calculations incorporating true Ayanamsha and precision planetary longitudes.',
      },
      {
        hi: 'बिना किसी झूठे डर या अनावश्यक महंगे उपायों के पूरी तरह ईमानदार और निष्पक्ष दृष्टिकोण।',
        en: 'Honest, non-commercial advice: we never fabricate non-existent doshas to sell expensive rituals.',
      },
      {
        hi: 'यजमान के सभी प्रश्नों का आदरपूर्वक और विस्तार से उत्तर देने की धैर्यवान परामर्श शैली।',
        en: 'Respectful, patient, and detailed consultations with full privacy assured.',
      },
      {
        hi: 'भौतिक सफलता के साथ-साथ आत्मिक शांति और धर्म के मार्ग पर चलने का संतुलित मार्गदर्शन।',
        en: 'Comprehensive guidance encompassing spiritual growth, emotional wellness, and practical worldly wisdom.',
      },
      {
        hi: 'काशी की पावन भूमि की विरासत जहां ज्योतिष को एक पवित्र विद्या के रूप में साधना माना गया है।',
        en: 'Grounded in the sacred tradition of Kashi, where astrology is practiced as a sacred Vidya.',
      },
    ],
  },
}
