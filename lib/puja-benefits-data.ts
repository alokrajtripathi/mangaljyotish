export interface PujaBenefitItem {
  id: string
  name: { hi: string; en: string }
  mainDeity: { hi: string; en: string }
  religiousPurpose: { hi: string; en: string }
  traditionalReason: { hi: string; en: string }
  specificObstacles: { hi: string; en: string }
  spiritualSignificance: { hi: string; en: string }
  familySignificance?: { hi: string; en: string }
  personalSignificance?: { hi: string; en: string }
  jyotishSignificance?: { hi: string; en: string }
  categories: {
    spiritual: string[]
    religious: string[]
    family: string[]
    personal: string[]
    specificPurpose: string[]
  }
  tableRows: {
    benefit: string
    significance: string
  }[]
  websiteBenefits: {
    title: string
    explanation: string
  }[]
  whyChooseKashiBrahmins: string[]
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
        'भगवान शिव के प्रति अनन्य भक्ति और शरणागति का भाव सुदृढ़ होना।',
        'वैदिक मंत्रोच्चार से अंतःकरण की शुद्धि एवं आत्मिक शांति की प्राप्ति।',
        'आध्यात्मिक साधना एवं ध्यान में स्थिरता और एकाग्रता का संचार।',
        'अहंकार एवं सांसारिक मोह से मुक्ति की दिशा में सकारात्मक चेतना।',
      ],
      religious: [
        'देवाधिदेव महादेव एवं माता पार्वती का मंगलमय आशीर्वाद प्राप्त होना।',
        'धार्मिक संकल्प की शास्त्रसम्मत एवं विधिपूर्वक पूर्णता।',
        'पारंपरिक मान्यतानुसार पूजा स्थल एवं परिवेश की देवतुल्य शुद्धि।',
        'पुण्य की वृद्धि और सनातन धार्मिक परंपराओं का यथायोग्य पालन।',
      ],
      family: [
        'गृह परिवेश में सकारात्मक और कल्याणकारी ऊर्जा का प्रवाह।',
        'पारिवारिक सदस्यों के बीच सामंजस्य, सौहार्द एवं कलह की शांति।',
        'परिवार की दीर्घकालिक सुख-समृद्धि एवं मंगलमय भविष्य की प्रार्थना।',
      ],
      personal: [
        'मन की चंचलता और अनावश्यक चिंताओं में पारंपरिक विश्वास के अनुसार ठहराव।',
        'कठिन परिस्थितियों में धैर्य, विवेक और निर्णय लेने की क्षमता में वृद्धि।',
        'आंतरिक शांति, संतोष और सात्विक जीवनशैली की प्रेरणा।',
      ],
      specificPurpose: [
        'भगवान शिव के विभिन्न दिव्य रूपों को पंचामृत, गंगाजल, गन्ने का रस, मधु आदि से तृप्त करना।',
        'सावन मास, प्रदोष व्रत, महाशिवरात्रि अथवा जन्मदिवस/विवाह वर्षगांठ जैसे अवसरों पर ईष्ट कृपा हेतु।',
        'पारंपरिक रूप से आध्यात्मिक कल्याण और स्वास्थ्य संवर्धन की प्रार्थना के साथ अनुष्ठान।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Traditionally believed to quieten worldly anxieties through the rhythmic resonance of the Vedic Rudra hymns.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Lord Shiva (Mahadeva), seeking His benevolent grace, wisdom, and protection.' },
      { benefit: 'Family Harmony', significance: 'Traditionally associated with fostering a peaceful household and mutual understanding among members.' },
      { benefit: 'Protection', significance: 'Devotees seek Mahadeva\'s shield against negative environmental influences and spiritual impurities.' },
      { benefit: 'Prosperity', significance: 'Traditionally performed with prayers for auspicious beginnings and spiritual as well as material well-being.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally undertaken to soften recognized life delays and planetary afflictions according to Vedic lore.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Associated with deep mental tranquility, emotional stability, and relief from chronic inner restlessness.' },
      { benefit: 'Spiritual Growth', significance: 'Nurtures profound devotion, humility, self-reflection, and deeper communion with the Supreme Consciousness.' },
    ],
    websiteBenefits: [
      { title: 'Inner Purification & Devotional Bliss', explanation: 'Sacred ablutions and Vedic chants create an uplifting atmosphere that purifies the mind and deepens spiritual connection with Lord Shiva.' },
      { title: 'Divine Protection & Auspiciousness', explanation: 'According to Vedic tradition, offering Rudrabhishek invokes Mahadeva\'s grace to protect the home and dispel subtle negativity.' },
      { title: 'Harmonious Household Atmosphere', explanation: 'Devotees perform this sacred rite seeking domestic peace, mutual warmth among family members, and relief from recurring domestic tensions.' },
      { title: 'Planetary Pacification in Jyotish', explanation: 'Traditionally recommended in Vedic astrology to alleviate afflictions associated with Saturn, the Moon, and Rahu.' },
      { title: 'Clarity and Emotional Resilience', explanation: 'The sacred vibration of Rudrashtadhyayi aids devotees in cultivating composure, patience, and emotional balance during challenging phases.' },
      { title: 'Fulfillment of Sacred Sankalp', explanation: 'Undertaken with proper Vedic resolve on special occasions, birthdays, and anniversaries for holistic well-being.' },
      { title: 'Spiritual Discipline & Ancestral Blessing', explanation: 'Renews one\'s commitment to Sanatan Dharma values, bringing spiritual satisfaction to the entire household.' },
    ],
    whyChooseKashiBrahmins: [
      'Authentic recitation of Shukla & Krishna Yajurvedic Rudrashtadhyayi with precise Swara and pronunciation.',
      'Strict adherence to traditional Kashi Karmakand methods passed down through classical Guru-Shishya traditions.',
      'Customized and clear Vedic Sankalp incorporating your Gotra, Nakshatra, and specific devotional intent.',
      'Use of pure, satvik, and scripturally approved puja samagri (Bilva patra, Bhasma, Dhatura, pure Gangajal).',
      'Guidance on the most auspicious Muhurat (Pradosh, Shivratri, Somwar) aligned with your family astrological chart.',
      'Complete and respectful ritual culmination including Aarti, Pushpanjali, and Brahmin Dakshina Maryada.',
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
        'त्र्यम्बक शिव के अमर स्वरूप का चिंतन एवं आंतरिक भय पर आध्यात्मिक विजय।',
        'मंत्र की उच्च ध्वन्यात्मक आवृत्ति से आत्मिक ऊर्जा और चेतना का जागरण।',
        'सांसारिक बंधनों और अनिश्चितताओं के बीच मोक्ष एवं भक्ति का मार्ग प्रशस्त होना।',
        'गहन ध्यान और ईश्वर के प्रति संपूर्ण आत्मसमर्पण की भावना।',
      ],
      religious: [
        'भगवान मृत्युंजय का अमोध आशीर्वाद और पारंपरिक रूप से रक्षा कवच की प्राप्ति।',
        'संबंधित संख्या (जैसे 1.25 लाख या 24 हजार) का विधिवत जप और दशांश हवन का अनुष्ठान।',
        'धार्मिक संकल्प के माध्यम से ग्रहों के अमंगल प्रभाव को शांत करने का प्रयास।',
        'शास्त्रसम्मत विधि से तीर्थ अथवा पवित्र गृह स्थल पर अनुष्ठान की संपूर्णता।',
      ],
      family: [
        'परिवार में चल रहे गंभीर स्वास्थ्य संकट या चिंता के समय सामूहिक संबल।',
        'घर के वरिष्ठ जनों एवं बालकों के लिए दीर्घायु और सुरक्षा की मंगलकामना।',
        'कुटुंब में शोक और तनाव के वातावरण को दूर कर आशा और शांति का संचार।',
      ],
      personal: [
        'गंभीर मानसिक तनाव, भय और अवसाद के समय आंतरिक साहस की अनुभूति।',
        'शारीरिक एवं मानसिक दुर्बलता के समय मन में सकारात्मक ऊर्जा का पुनर्संचार।',
        'दृढ़ आत्मविश्वास और ईश्वर के प्रति आस्था से उत्पन्न आत्मिक संतोष।',
      ],
      specificPurpose: [
        'भगवान शिव के त्रिनेत्र स्वरूप की स्तुति कर पोषण (पुष्टि) एवं अमरत्व की चेतना प्राप्त करना।',
        'पारंपरिक रूप से किसी भी गंभीर व्याधि या जीवन-संकट के निवारण हेतु वैदिक संकल्प।',
        'जीवन की अनिश्चितताओं में आध्यात्मिक संबल और रक्षा हेतु नियमित अथवा अनुष्ठानिक अनुशीलन।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Transcends existential worries, replacing fear with unwavering faith in Tryambaka Shiva.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Lord Mahamrityunjaya Shiva, the granter of vitality, rejuvenation, and supreme grace.' },
      { benefit: 'Family Harmony', significance: 'Provides collective emotional grounding and solidarity during family trials or health distress.' },
      { benefit: 'Protection', significance: 'Traditionally revered as the foremost protective Vedic kavach against unforeseen calamities and fears.' },
      { benefit: 'Prosperity', significance: 'Nurtures "Pushti" (holistic spiritual, physical, and familial nourishment) as praised in the mantra.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to mitigate intense astrological afflictions (Maraka dashas and Sade Sati).' },
      { benefit: 'Mental/Emotional Peace', significance: 'Restores calmness, dispels deep-seated despondency, and fosters emotional equilibrium.' },
      { benefit: 'Spiritual Growth', significance: 'Cultivates detachment from mortal fears, inspiring meditation on the timeless self (Atman).' },
    ],
    websiteBenefits: [
      { title: 'Rigvedic Sacred Sound Protection', explanation: 'Chanting the sacred Mahamrityunjaya mantra creates high-frequency positive vibrations traditionally believed to shield against adverse energies.' },
      { title: 'Devotional Prayer for Health & Longevity', explanation: 'Devotees undertake this anushthan seeking divine grace for recovery from illness, prolonged vitality, and holistic well-being.' },
      { title: 'Dissolution of Fear & Panic', explanation: 'According to Hindu beliefs, surrender to Mrityunjaya Mahadeva eliminates the fear of untimely accidents (apamrityu) and acute distress.' },
      { title: 'Supreme Astrological Remedial Power', explanation: 'Held in high esteem in Vedic astrology as an indispensable remedy during challenging Dasha, Antardasha, and transit periods.' },
      { title: 'Deep Mental Composure & Fortitude', explanation: 'Helps devotees retain psychological balance, hope, and determination even in the face of daunting adversity.' },
      { title: 'Purification of Karma & Anushthan Completeness', explanation: 'Accompanied by traditional Nyasa, Japa Sankalp, and Dashansh Havan for the scriptural fulfillment of religious vows.' },
      { title: 'Familial Strength and Harmony', explanation: 'Creates an aura of sacred reassurance and protective blessing for elders and descendants alike.' },
    ],
    whyChooseKashiBrahmins: [
      'Chanted by seasoned Vedic Pandits of Kashi trained in precise Vedic Chhanda, Swara, and pronunciation.',
      'Strict vow of purity, count accuracy (Laghu Rudri / 1.25 Lakh Mahamrityunjaya Japa), and continuous Anushthan discipline.',
      'Incorporation of proper Anga-Nyasa, Kara-Nyasa, and Dhyana Shlokas prior to each japa session.',
      'Execution of Dashansh Havan, Tarpan, Marjan, and Brahmin Bhojan as stipulated in the Shastras.',
      'Sincere astrological alignment of the Anushthan start date with the Jatak\'s natal chart and auspicious Muhurat.',
      'Clear, honest guidance without unscientific guarantees, maintaining absolute devotion and sanctity.',
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
        'घर की प्रत्येक दिशा और कोण को वैदिक मंत्रों द्वारा पावन और देवमय बनाना।',
        'ईश्वर के प्रति कृतज्ञता कि उन्होंने परिवार को आश्रय और सुखी जीवन प्रदान किया।',
        'गृहस्थ जीवन को धर्म, अर्थ, काम और मोक्ष के संतुलन के रूप में स्वीकार करना।',
        'घर में सात्विक, शांत और ध्यान-सुलभ वातावरण की स्थापना।',
      ],
      religious: [
        'वास्तु पुरुष, कुलदेवता, ग्रामदेवता एवं नवग्रहों का यथोचित पूजन एवं भोग।',
        'मंगल कलश स्थापना, द्वार पूजा, गौमाता का पावन प्रवेश एवं देहली पूजन।',
        'अग्नि प्रज्वलन (गृह प्रवेश होम) द्वारा घर के प्रत्येक कोने का शुद्धिकरण।',
        'शास्त्रोक्त विधि से पूर्णता एवं ब्राह्मणों का आशीर्वाद प्राप्त करना।',
      ],
      family: [
        'पारिवारिक रिश्तों में मिठास, सहयोग और सुरक्षा की सुखद भावना।',
        'आने वाली पीढ़ियों के संस्कार, स्वास्थ्य और विद्यार्जन के लिए अनुकूल वातावरण।',
        'नकारात्मक प्रभावों और पारिवारिक कलह से घर की पारंपरिक सुरक्षा।',
      ],
      personal: [
        'परिश्रम से अर्जित नए घर में प्रवेश करते समय आत्मसंतोष और गौरव।',
        'शांतिपूर्ण नींद, तनावमुक्त जीवन और मानसिक स्पष्टता की अनुभूति।',
        'दैनिक जीवन में सकारात्मक ऊर्जा और कार्यों में सफलता की प्रेरणा।',
      ],
      specificPurpose: [
        'नवनिर्मित या किराए के घर में पहली बार प्रवेश करते समय वैदिक विधि से ऊर्जा का संतुलन करना।',
        'दिशाओं के स्वामियों (दिक्पालों) और वास्तु देव से गृहस्थ की रक्षा और समृद्धि की प्रार्थना।',
        'माता लक्ष्मी और भगवान कुबेर का आह्वान ताकि घर में अन्न एवं धन की कभी कमी न हो।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Transforms the residential space into a serene realm attuned to divine frequencies.' },
      { benefit: 'Divine Blessings', significance: 'Invokes Lord Ganesha, Vastu Purusha, Navagrahas, and Devi Lakshmi for auspiciousness.' },
      { benefit: 'Family Harmony', significance: 'Traditionally believed to dissolve past spatial discords and bind family members in warmth.' },
      { benefit: 'Protection', significance: 'Consecrates the four corners and threshold (Dehli) against negative atmospheric vibrations.' },
      { benefit: 'Prosperity', significance: 'Traditionally performed to invite abiding abundance, financial stability, and auspicious events.' },
      { benefit: 'Removal of Obstacles', significance: 'Mitigates structural flaws (Vastu Dosha) and construction-related environmental impurities.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Instills deep psychological tranquility, security, and cheerful enthusiasm for the family.' },
      { benefit: 'Spiritual Growth', significance: 'Encourages daily devotional practices, morning prayers, and righteous living in the new abode.' },
    ],
    websiteBenefits: [
      { title: 'Complete Vastu & Elemental Purification', explanation: 'Purifies the Pancha Mahabhutas (earth, water, fire, air, space) within the home through consecrated Vedic rituals.' },
      { title: 'Invocation of Lakshmi & Ganesha', explanation: 'Welcomes wealth, auspicious beginnings, and barrier-free living into the new residence.' },
      { title: 'Auspicious Threshold & Dwara Puja', explanation: 'Guards the home entryways with holy Toran, Swastika, and Kalash rituals as prescribed in the Grihya Sutras.' },
      { title: 'Family Unity and Happiness', explanation: 'Creates an atmosphere of mutual empathy, domestic joy, and shared cultural pride across generations.' },
      { title: 'Neutralizing Land & Construction Defects', explanation: 'Traditional Vedic Havan and Vastu Bali appease directional deities (Dikpalas) to offset unalterable architectural faults.' },
      { title: 'Muhurat-Driven Astrological Alignment', explanation: 'Aligns the entry with the family\'s most favorable celestial transits for long-term peace.' },
      { title: 'Sanctified Kitchen & Annapurna Blessing', explanation: 'The traditional boiling of milk and first fire offering ensures perpetual nourishment and hospitality.' },
    ],
    whyChooseKashiBrahmins: [
      'Comprehensive knowledge of Grihya Sutras, Vastu Shastra, and local North Indian & Pan-Indian traditions.',
      'Exact determination of auspicious Griha Pravesh Muhurat based on owner\'s Janma Rashi and Nakshatra.',
      'Full arrangement and proper consecration of Navagraha Mandal, Vastu Mandal, and Sarvatobhadra Mandal.',
      'Conducted with complete respect, clarity, and patience so all family members participate meaningfully.',
      'Proper guidance for Gomata Puja, Kheer cooking, and traditional threshold ceremonies.',
      'Conducted with dignified Vedic decorum and transparent Dakshina expectations.',
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
        'माँ बगलामुखी की स्तम्भन शक्ति द्वारा मन के विकारों और नकारात्मक विचारों पर नियंत्रण।',
        'गंभीर आध्यात्मिक साधना में एकाग्रता और आंतरिक मौन (वाक-संयम) का विकास।',
        'ईश्वरीय न्याय और धर्म की विजय में अटूट विश्वास का निर्माण।',
        'भय, शंका और आत्म-संशय से मुक्त होकर दिव्य संरक्षण का अनुभव।',
      ],
      religious: [
        'शास्त्रोक्त पीत-विधान (पीले वस्त्र, हल्दी की माला, पीले पुष्प) से विधिवत अनुष्ठान।',
        'महाविद्या बीज मंत्र का शास्त्रीय नियमों और संपुट सहित श्रद्धापूर्वक पाठ।',
        'धार्मिक मर्यादाओं के पालन के साथ अनिष्टकारी ऊर्जा का पारंपरिक शमन।',
        'सत्य एवं सदाचार के मार्ग पर चलने के संकल्प की धार्मिक पुष्टि।',
      ],
      family: [
        'परिवार को अनपेक्षित बाहरी ईर्ष्या और द्वेषपूर्ण वातावरण से सुरक्षा की प्रार्थना।',
        'विवादों के कारण परिवार पर पड़ने वाले मानसिक दबाव को कम करने का धार्मिक संबल।',
        'घर के सदस्यों में एकता और विकट समय में परस्पर सहयोग की भावना।',
      ],
      personal: [
        'प्रतिकूल परिस्थितियों में घबराहट और मानसिक संकोच पर विजय।',
        'स्पष्ट, सत्यनिष्ठ और प्रभावशाली वाणी का विकास।',
        'आत्मबल, साहस और विवेकपूर्ण दृष्टिकोण का सुदृढ़ीकरण।',
      ],
      specificPurpose: [
        'पारंपरिक रूप से विरोधियों की कुटिल मति को शांत करने एवं वाणी के दोषों के निवारण हेतु।',
        'गंभीर जीवन-संघर्षों में माता पीताम्बरा से अभयदान और विजय की आध्यात्मिक प्रार्थना।',
        'धार्मिक और सात्विक विधि से आत्मरक्षा एवं आत्मिक शक्ति का संवर्धन।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Silences inner psychic chaos, anger, and anxiety through devotional discipline.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Maa Baglamukhi, the embodiment of divine stopping power (Stambhana).' },
      { benefit: 'Family Harmony', significance: 'Safeguards the household against toxic external malice, gossip, and discord.' },
      { benefit: 'Protection', significance: 'Traditionally sought as a spiritual armor against unjust hostility and concealed animosity.' },
      { benefit: 'Prosperity', significance: 'Protects righteous wealth and ventures from being disrupted by deceitful obstacles.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to help overcome prolonged stalemates and unprovoked opposition.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Inspires courageous clarity, eliminating irrational paranoia and emotional fragility.' },
      { benefit: 'Spiritual Growth', significance: 'Teaches profound sensory control, mastery over speech, and unwavering faith in divine justice.' },
    ],
    websiteBenefits: [
      { title: 'Divine Protection from Unjust Hostility', explanation: 'Devotees seek Maa Pitambari\'s grace for protection against unjustified malice, jealousy, and unfair slander.' },
      { title: 'Speech Mastery & Calmness', explanation: 'Traditionally associated with pacifying speech defects, erratic arguments, and cultivating dignified eloquence.' },
      { title: 'Courage Amidst Complex Conflicts', explanation: 'Provides psychological resilience and devotional fortitude when navigating stressful disputes or rivalries.' },
      { title: 'Mitigation of 6th-House Planetary Pressures', explanation: 'Astrologically recommended to calm aggressive planetary combinations linked to Mars, Rahu, and Saturn.' },
      { title: 'Restraining Mind\'s Internal Negativity', explanation: 'Spiritual philosophy attributes to Maa the power to silence internal demons of ego, wrath, and greed.' },
      { title: 'Strict Scriptural Pithambari Ritual', explanation: 'Conducted using authentic yellow turmeric malas, yellow asana, and strictly disciplined Vedic/Tantric rules.' },
      { title: 'Ethical & Dharmic Grounding', explanation: 'Anchors the devotee in righteousness (Dharma), discouraging malice while fostering peaceful resolution.' },
    ],
    whyChooseKashiBrahmins: [
      'Performed with absolute Satvik discipline, devoid of any improper or harmful practices.',
      'Deeply knowledgeable in the Shaktagama and Puranic methods of Maa Pitambari worship.',
      'Correct Vedic Sankalp and mantra pronunciation avoiding dangerous grammatical distortions.',
      'Guidance regarding strict dietary rules and code of conduct for the Jatak during the Puja.',
      'Complete safety, transparency, and traditional sanctity maintained throughout the ceremony.',
      'No fraudulent promises of instant magical outcomes; purely devotional and scriptural guidance.',
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
        'नौ दिनों तक माँ दुर्गा के विभिन्न स्वरूपों के ध्यान से आत्मिक चेतना का उत्थान।',
        'सात्विक उपवास और जप द्वारा मन, वचन एवं कर्म की गहन शुद्धि।',
        'देवी के प्रति निष्काम भक्ति और मातृ-भाव का हृदय में प्रकटीकरण।',
        'असुर प्रवृत्तियों (अहंकार, वासना, आलस्य) पर देवी कृपा से विजय।',
      ],
      religious: [
        'शास्त्रोक्त कलश स्थापना, जौ बोना, अखण्ड दीप प्रज्वलन एवं नित्य आरती।',
        'दुर्गा सप्तशती के तेरह अध्यायों का नित्य नियमपूर्वक पाठ एवं नवार्ण जप।',
        'अष्टमी/नवमी तिथि पर हवन एवं नौ कन्याओं का पावन पूजन एवं आशीर्वाद।',
        'सनातन पर्व-परंपरा का निष्ठापूर्वक निर्वहन एवं कुल-कल्याण।',
      ],
      family: [
        'घर में नौ दिनों तक निरंतर सकारात्मक एवं दिव्य तरंगों का संचार।',
        'परिवार के सभी सदस्यों में भक्तिभाव, उल्लास और सहयोग की वृद्धि।',
        'मातृ-शक्ति के आशीर्वाद से घर में शांति, समृद्धि और सुरक्षा का वातावरण।',
      ],
      personal: [
        'उपवास और साधना से मानसिक शांति, शारीरिक स्फूर्ति और हल्कापन।',
        'निर्णय लेने में स्पष्टता, उत्साह और नकारात्मक विचारों से मुक्ति।',
        'जीवन की बाधाओं से जूझने के लिए अद्वितीय आंतरिक मनोबल।',
      ],
      specificPurpose: [
        'वर्ष के पावन संधिकाल (ऋतु परिवर्तन) पर देवी उपासना द्वारा प्राकृतिक और आत्मिक संतुलन।',
        'माँ भगवती से धर्म, अर्थ, काम और मोक्ष के सहज संतुलन की प्रार्थना।',
        'व्यक्तिगत अथवा पारिवारिक संकल्प की सिद्धि हेतु नौ दिवसीय गहन अनुष्ठान।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Fosters deep devotional tranquility through systematic 9-day fasting and sacred contemplation.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Maa Jagadamba, conferring maternal protection, wisdom, and inner grace.' },
      { benefit: 'Family Harmony', significance: 'Unites the household in celebratory worship, honoring maternal energy and family lineage.' },
      { benefit: 'Protection', significance: 'Revered as a divine shield against lingering psychic negativity and housebound gloom.' },
      { benefit: 'Prosperity', significance: 'Traditionally associated with the arrival of Mahalakshmi and auspicious domestic abundance.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to weaken stagnant karmic bottlenecks across life domains.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Calms emotional volatility, infusing the mind with optimism, discipline, and clarity.' },
      { benefit: 'Spiritual Growth', significance: 'Awakens inner Kundalini/Shakti consciousness, leading the seeker from gross to subtle awareness.' },
    ],
    websiteBenefits: [
      { title: 'Comprehensive 9-Day Sacred Energy Consecration', explanation: 'Daily worship of the nine forms of Maa Durga systematically elevates spiritual and mental vibrations.' },
      { title: 'Ghatasthapana & Akhand Deep Sanctification', explanation: 'Establishes a sanctified altar (Mandap) radiating continuous light, purity, and spiritual vigilance.' },
      { title: 'Full Durga Saptashati Recitation', explanation: 'The sacred 700 verses from Markandeya Purana praise the victory of light over dark forces, purifying the mind.' },
      { title: 'Sattvic Lifestyle & Mind-Body Detox', explanation: 'The traditional regimen of fasting, prayer, and pure diet restores physical lightness and mental sharpness.' },
      { title: 'Navagraha Alignment & Celestial Harmony', explanation: 'Each day corresponds with divine archetypes that traditionally pacify planetary imbalances in one\'s chart.' },
      { title: 'Sacred Kanya Pujan & Cumulative Blessing', explanation: 'Honoring young girls as living embodiments of Shakti invokes heartfelt grace for future generations.' },
      { title: 'Fulfillment of Devotional Sankalp', explanation: 'Completes religious vows undertaken for family prosperity, peaceful milestones, and spiritual progress.' },
    ],
    whyChooseKashiBrahmins: [
      'Mastery in traditional Chandi Paath with perfect metric cadence (Chhanda) and Samputa Vidhi.',
      'Proper establishment of Sarvatobhadra, Navagraha, and Devi Mandals with authentic Vedic geometry.',
      'Continuous daily guidance on ritual observances, Ahuti preparation, and daily Aarti procedures.',
      'Performance of authentic Navami Havan with prescribed aromatic herbs, payasam, and dry fruits.',
      'Sincere, culturally grounded Kanya Pujan conducted with highest respect and humility.',
      'Traditional Brahmin supervision ensuring error-free completion of all nine days of observance.',
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
        'शतचंडी के महा-अनुष्ठान से उत्पन्न अद्वितीय आध्यात्मिक ऊर्जा एवं सात्विक वातावरण।',
        'माँ चण्डिका के उग्र एवं सौम्य दोनों रूपों के सामंजस्य से अहंकार का पूर्ण शमन।',
        'साधकों एवं यजमान के अंतर्मन में परम चेतना और निर्भयता का संचार।',
        'वैदिक एवं पौराणिक मंत्रों के संपुट से आत्मा का उदात्तीकरण।',
      ],
      religious: [
        'योग्य एवं वेदपाठी ब्राह्मणों के समूह द्वारा १०० बार दुर्गा सप्तशती का संपूर्ण पारायण।',
        'प्रत्येक पाठ के साथ कवच, अर्गला, कीलक, प्रधानिक, वैकृतिक एवं मूर्तिक रहस्य का वाचन।',
        'विशाल यज्ञवेदी पर दशांश आहुतियों, पायस, घृत एवं औषधि द्रव्यों का महा-हवन।',
        'शास्त्रसम्मत विधि से पूर्ण संकल्प, ब्राह्मण-भोजन एवं दक्षिणा समर्पण।',
      ],
      family: [
        'परिवार एवं कुल पर मंडरा रहे बड़े संकटों के शमन हेतु सामूहिक धार्मिक कवच।',
        'पीढ़ियों के लिए सुख, संपत्ति, यश और सम्मान की प्राप्ति की मंगल-प्रार्थना।',
        'कुटुंब में किसी भी प्रकार के भारी क्लेश या विभाजनकारी प्रवृत्तियों का शमन।',
      ],
      personal: [
        'गंभीर संकटों के समय अगाध मानसिक दृढ़ता और विचलित न होने का धैर्य।',
        'निराशा और भय के गहरे बादलों को चीरकर नई आशा और आत्मविश्वास का उदय।',
        'सत्य और धर्म के प्रति अटूट निष्ठा का विकास।',
      ],
      specificPurpose: [
        'असाधारण और असाध्य जीवन-परिस्थितियों में देवी की सर्वोच्च कृपा प्राप्त करने का संकल्प।',
        'पारंपरिक रूप से कुल-रक्षा, राज्य-सम्मान और सामूहिक कल्याण हेतु आयोजित किया जाने वाला महायज्ञ।',
        'पूर्ण शास्त्रोक्त विधि से १० अथवा उससे अधिक विद्वानों के मार्गदर्शन में निष्पादन।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Envelops the environment in high-intensity sacred vibrations, dispelling deep existential disquiet.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Supreme Goddess Chandika, drawing Her all-encompassing protection and grace.' },
      { benefit: 'Family Harmony', significance: 'Revered as a monumental blessing that shields the family lineage from structural misfortunes.' },
      { benefit: 'Protection', significance: 'Traditionally considered the pinnacle spiritual fortress against intense hostility and adversity.' },
      { benefit: 'Prosperity', significance: 'Invokes Mahalakshmi in Her supreme aspect for reviving stalled enterprises and stability.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally performed to break persistent multi-year stalemates and severe afflictions.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Restores monumental confidence, resilience, and emotional unshakeability.' },
      { benefit: 'Spiritual Growth', significance: 'Accelerates spiritual maturity, dissolving deep karmic encumbrances and ego barriers.' },
    ],
    websiteBenefits: [
      { title: 'Monumental 100-Recitation Vedic Anushthan', explanation: 'Conducted collectively by a team of learned Vedic Pandits reciting the sacred Durga Saptashati 100 times.' },
      { title: 'Supreme Protective Kavach for Family & Lineage', explanation: 'According to Markandeya Purana, Shatchandi Yagya creates an unassailable spiritual shield around the family.' },
      { title: 'Pacification of Severe Planetary Combinations', explanation: 'Considered the premier Vedic remedy for severe multi-planet afflictions, Sade Sati, and Rahu Mahadasha.' },
      { title: 'Grand Dashansh Maha-Havan & Aromatic Herbs', explanation: 'Thousands of sacred ahutis infused with guggulu, camphor, clarified butter, and herbs purify the macro-atmosphere.' },
      { title: 'Immense Psychological Resilience & Fearlessness', explanation: 'Infuses the devotee with extraordinary inner strength to face monumental life, business, or administrative challenges.' },
      { title: 'Revival of Family Fortunes and Honor', explanation: 'Devotees historically sponsor this ritual seeking revival of auspicious fortune, fame, and ethical success.' },
      { title: 'Absolute Scriptural Adherence & Purity', explanation: 'Conducted under rigorous Shastric oversight with complete Nyasa, Kavach, Samputa, and Kanya-Brahmin Bhojan.' },
    ],
    whyChooseKashiBrahmins: [
      'Orchestrated by a seasoned team of Vedic Acharyas from Varanasi with generational expertise in Chandi Vidhan.',
      'Exact maintenance of recitation counts, ensuring not a single verse or samputa is rushed or skipped.',
      'Vedic Havan Kund construction matching geometric Shulba Sutra dimensions with proper fire invocation.',
      'Strict adherence to the Yamas and Niyamas (fasting, silence, celibacy) by all participating Pandits during Anushthan.',
      'Transparent, dignified execution with complete participation of the Yajaman in all major Sankalpas.',
      'No exaggerated superstitious claims; pure, dignified, and authentic Vedic ritualism.',
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
        'दुर्गा सप्तशती के नौ पारायणों से अंतःकरण की गहरी शुद्धि और सात्विकता का संचार।',
        'माँ भगवती की कृपा से आत्मिक शांति एवं भक्ति भाव का सुदृढ़ीकरण।',
        'मन के संशयों और नकारात्मक विचारों का पारंपरिक रूप से शमन।',
        'साधना और नित्य पूजा के प्रति अभिरुचि में वृद्धि।',
      ],
      religious: [
        'शापोद्धार, उत्कीलन, कवच, कीलक और अर्गला सहित ९ संपूर्ण पाठों की पूर्णता।',
        'नवार्ण महामंत्र का विधिवत जप और दशांश हवन का आयोजन।',
        'धार्मिक संकल्प के अनुसार देवी का पावन आशीर्वाद और भोग समर्पण।',
        'ब्राह्मण पूजन, कन्या पूजन एवं यथायोग्य दक्षिणा से अनुष्ठान की संपूर्णता।',
      ],
      family: [
        'गृह परिवेश में विद्यमान कलह और तनाव के वातावरण की शांति।',
        'परिवार के सदस्यों के स्वास्थ्य, सुरक्षा और उन्नति की मंगलकामना।',
        'घर में मांगलिक कार्यों (विवाह, संतान प्राप्ति, गृह प्रवेश) में आने वाले व्यवधानों का पारंपरिक शमन।',
      ],
      personal: [
        'आत्मविश्वास में वृद्धि और भय तथा संकोच से मुक्ति।',
        'कार्यक्षेत्र एवं व्यक्तिगत जीवन में स्पष्ट और संतुलित निर्णय लेने की क्षमता।',
        'मानसिक तनाव से राहत और आंतरिक ऊर्जा का अनुभव।',
      ],
      specificPurpose: [
        'परिवार की सामर्थ्य और समयानुसार ९ पाठों के माध्यम से सप्तशती के पूर्ण फल की प्राप्ति।',
        'घर में सकारात्मक ऊर्जा का पुनर्संचार और सभी दिशाओं का दैवीय शुद्धिकरण।',
        'विशेष मनोकामना पूर्ति अथवा कृतज्ञता ज्ञापन हेतु समर्पित अनुष्ठान।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Cleanses the home atmosphere through the ninefold recitation of Durga Saptashati.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Maa Chandika, invoking Her compassionate and protective maternal grace.' },
      { benefit: 'Family Harmony', significance: 'Brings domestic peace, resolves long-standing friction, and fosters understanding.' },
      { benefit: 'Protection', significance: 'Traditionally sought to dispel subtle negative energies and ward off unseen hazards.' },
      { benefit: 'Prosperity', significance: 'Encourages auspicious financial flow, professional steadiness, and home blessings.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to dissolve recurring blockages in education, marriage, and work.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Soothes persistent anxiety and emotional restlessness without medical claims.' },
      { benefit: 'Spiritual Growth', significance: 'Instills deep devotion to Devi, inspiring regular prayer and righteous conduct.' },
    ],
    websiteBenefits: [
      { title: 'Ninefold Complete Saptashati Recitation', explanation: 'Nine full readings of the 700 verses ensure complete scriptural fulfillment of the sacred Chandi vow.' },
      { title: 'Traditional Shapoddhara & Utkilana Rites', explanation: 'Recited with esoteric preliminary keys unlocking the full devotional resonance of the sacred text.' },
      { title: 'Family Discord Resolution', explanation: 'Creates a harmonious household climate, reducing interpersonal irritation and misunderstandings.' },
      { title: 'Pacification of Malefic Astrological Dashas', explanation: 'Traditionally recommended by Jyotish vidwans during malefic Rahu, Ketu, and Saturn periods.' },
      { title: 'Auspicious Energy for Life Milestones', explanation: 'Often performed before major ventures, weddings, or business expansion to seek divine favor.' },
      { title: 'Sacred Ahutis & Complete Havan', explanation: 'Includes proper Dashansh Havan with sacred samagri, bringing peace and aromatic sanctity to the home.' },
      { title: 'Rejuvenated Mental Clarity & Courage', explanation: 'Empowers the devotee with renewed optimism, focus, and spiritual strength.' },
    ],
    whyChooseKashiBrahmins: [
      'Conducted by qualified Sanskrit scholars of Varanasi possessing proper initiation and Chandi Paath mastery.',
      'Strict adherence to full preliminary prayers (Kavach, Argala, Keelak) and concluding Rahasya texts.',
      'Flawless metric chanting without skipped syllables, adhering to Shastric recitation speeds.',
      'Proper arrangement of Navavarna Yantra, Kalash, and authentic Havan Samagri.',
      'Sincere guidance on Sankalp, family participation, and respectful completion of Kanya Pujan.',
      'Honest, culturally authentic service rooted in centuries-old Kashi traditions.',
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
        'दिवंगत पूर्वजों के प्रति श्रद्धा, स्मरण एवं कृतज्ञता प्रकट करने का पावन माध्यम।',
        'आत्मा की अमरता और सनातन पुनर्जन्म दर्शन के प्रति गहरी समझ का विकास।',
        'सांसारिक अहंकार का त्याग और अपने मूल एवं पूर्वजों के प्रति विनम्रता।',
        'पितरों की संतुष्टि से आत्मिक शांति एवं चित्त की स्थिरता।',
      ],
      religious: [
        'शास्त्रोक्त विधि से कुशा, तिल, जौ, अक्षत और जल द्वारा नित्य तर्पण कर्म।',
        'पिंडदान, विष्णुपद स्मरण एवं महालय श्राद्ध की विधिपूर्वक पूर्णता।',
        'पंचबलि (गौ, श्वान, काक, देवादि एवं पिपीलिका) का पारंपरिक समर्पण।',
        'योग्य ब्राह्मणों को भोजन, वस्त्र एवं यथायोग्य दक्षिणा द्वारा संतुष्ट करना।',
      ],
      family: [
        'पितरों के आशीर्वाद से वंश परंपरा का निर्बाध संरक्षण एवं संतानों की प्रगति।',
        'पारिवारिक कलह और अज्ञात कारणों से उत्पन्न होने वाले तनाव का पारंपरिक शमन।',
        'परिवार में सुख, समृद्धि, एकता और संस्कारों की सुदृढ़ स्थापना।',
      ],
      personal: [
        'अपने पूर्वजों के प्रति कर्तव्य पूर्ति से उत्पन्न गहरा आत्मसंतोष।',
        'जीवन में आने वाली अनजानी रुकावटों के प्रति आध्यात्मिक समाधान का विश्वास।',
        'संतान एवं परिवार के भविष्य के प्रति मानसिक शांति।',
      ],
      specificPurpose: [
        'भाद्रपद पूर्णिमा से आश्विन अमावस्या तक चलने वाले महालय काल में पूर्वजों का आह्वान।',
        'पितृ लोक में स्थित पूर्वजों की तृप्ति एवं उनकी सद्गति हेतु प्रार्थना।',
        'ऋषि ऋण, देव ऋण के साथ पितृ ऋण से मुक्ति का सनातन प्रयास।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Brings immense psychological solace and contentment by honoring departed forebears.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Pitru Devatas and Lord Vishnu, the eternal protector of ancestral realms.' },
      { benefit: 'Family Harmony', significance: 'Unites family branches in solemn respect, strengthening lineage solidarity and values.' },
      { benefit: 'Protection', significance: 'Invokes the protective benevolent aura of contented ancestors over descendants.' },
      { benefit: 'Prosperity', significance: 'Traditionally linked with steady lineage growth, professional stability, and domestic peace.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to mitigate Pitru Dosha hurdles in marriage, progeny, and career.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Resolves latent filial guilt and emotional grief into serene gratitude.' },
      { benefit: 'Spiritual Growth', significance: 'Reinforces awareness of life\'s transience, cultivating humility, charity, and righteousness.' },
    ],
    websiteBenefits: [
      { title: 'Fulfillment of Sacred Pitru Rina', explanation: 'Performing Tarpan and Pinda Daan discharges the sacred filial obligation owed to departed generations.' },
      { title: 'Mitigation of Astrological Pitru Dosha', explanation: 'Considered the foremost Shastric remedy for 9th-house solar afflictions and ancestral karmic imbalances.' },
      { title: 'Ancestral Blessings for Progeny (Vamsha Vriddhi)', explanation: 'Traditionally believed to bless descendants with good health, intellect, cultural values, and longevity.' },
      { title: 'Scriptural Tila Tarpan & Pinda Daan', explanation: 'Conducted using sacred Kusha grass, sesame seeds, barley, and rice balls as ordained in the Garuda Purana.' },
      { title: 'Traditional Panchabali & Charity', explanation: 'Feeding cows, crows, dogs, and ants generates universal positive karma and compassion.' },
      { title: 'Harmonious Household Continuity', explanation: 'Replaces recurring family misunderstandings with deep ancestral peace and benevolent goodwill.' },
      { title: 'Authentic Ganga Teerth & Kashi Sanctity', explanation: 'Performing these rites in Kashi or through Kashi scholars carries unparalleled scriptural merit for Pitrus.' },
    ],
    whyChooseKashiBrahmins: [
      'Varanasi is the sacred capital of Moksha and Shraddha Vidhan with unbroken generational mastery.',
      'Exact knowledge of Gotra, Pravara, Pinda formation, and Tarpan mantras for maternal and paternal lineages.',
      'Proper execution of Shodasha Shraddha, Tripindi Shraddha, and Mahalaya Tithi rituals.',
      'Sincere guidance ensuring no essential step or family relation is overlooked during invocations.',
      'Conducting Panchabali and Brahmin Bhojan with highest decorum and scriptural propriety.',
      'Transparent and respectful handling of all offerings without commercial exploitation.',
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
        'वैदिक मंत्रों के समवेत नाद से आत्मिक चेतना का विराट विस्तार।',
        'त्याग और समर्पण की भावना का विकास, जिससे व्यक्तिगत संकीर्णताएं समाप्त होती हैं।',
        'ईश्वर के विराट स्वरूप (यज्ञ पुरुष) के प्रति संपूर्ण शरणागति।',
        'अंतःकरण में परम शांति, पवित्रता और दिव्य आनंद का उदय।',
      ],
      religious: [
        'वेदों के प्राचीन सूत्रों के अनुसार यूप, वेदी और कुण्डों का शास्त्रोक्त निर्माण।',
        'चारों वेदों के ज्ञाता ऋत्विजों (होता, अध्वर्यु, उद्गाता, ब्रह्मा) द्वारा अनुष्ठान का संचालन।',
        'लाखों मंत्रोच्चारों के साथ विशुद्ध घृत, औषधियों एवं समिधाओं का समर्पण।',
        'महापूर्णाहुति, अवभृथ स्नान एवं सर्वकल्याणकारी संकल्प की पूर्णता।',
      ],
      family: [
        'यजमान परिवार की सामाजिक प्रतिष्ठा, कीर्ति और आध्यात्मिक प्रभाव में वृद्धि।',
        'परिवार में संस्कारों की सुदृढ़ता और आने वाली पीढ़ियों के लिए धर्मपरायण प्रेरणा।',
        'घर-कुटुंब में स्थायी शांति, लक्ष्मी का वास और अमंगल का निवारण।',
      ],
      personal: [
        'व्यक्तिगत स्वार्थ से ऊपर उठकर लोक-कल्याण के लिए कार्य करने का संतोष।',
        'मन की संकीर्णताओं, चिंताओं और नकारात्मक विचारों से पूर्ण मुक्ति।',
        'सकारात्मक ऊर्जा, ओज और आत्मविश्वास का अभूतपूर्व विकास।',
      ],
      specificPurpose: [
        'गांव, समाज, राष्ट्र अथवा वृहद परिवार के सामूहिक कल्याण और सुख-समृद्धि हेतु।',
        'पर्यावरण में सकारात्मक ऊर्जा का विस्तार और तामसिक प्रभावों की शांति।',
        'सनातन वैदिक परंपरा के सर्वोच्च अनुष्ठान का श्रद्धापूर्वक संपादन।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Elevates individual and collective consciousness through grand Vedic hymns and sacred fire resonance.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Yajna Purusha (Lord Vishnu) and all 33 cosmic Vedic divinities.' },
      { benefit: 'Family Harmony', significance: 'Bestows enduring prestige, cultural unity, and dharmic pride upon the sponsoring family.' },
      { benefit: 'Protection', significance: 'Traditionally revered as a cosmic shield mitigating collective and environmental distress.' },
      { benefit: 'Prosperity', significance: 'Fosters macro-level abundance, societal flourishing, agricultural and commercial vitality.' },
      { benefit: 'Removal of Obstacles', significance: 'Clears monumental hurdles, protracted stagnation, and pervasive planetary afflictions.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Infuses deep magnanimity, peace of conscience, and freedom from narrow anxieties.' },
      { benefit: 'Spiritual Growth', significance: 'Embodies the highest Vedic ideal of selfless sacrifice ("Idam Na Mama") and universal empathy.' },
    ],
    websiteBenefits: [
      { title: 'The Pinnacle of Sanatan Vedic Rituals', explanation: 'Yagya represents the apex of Vedic culture, harmonizing cosmic, environmental, and individual energies.' },
      { title: 'Collective Peace and Macro-Environmental Purity', explanation: 'Medicinal and aromatic herbs offered in massive sacred fires cleanse atmospheric impurities.' },
      { title: 'Appeasement of All Cosmic Divinities', explanation: 'Invokes and honors the entire celestial pantheon, ensuring holistic blessing across all quarters.' },
      { title: 'Dissolution of Deep-Seated Karmic Obstacles', explanation: 'Sponsoring a Maha Yagya is traditionally believed to neutralize major astrological and karmic hindrances.' },
      { title: 'Elevated Social Honor and Family Legacy', explanation: 'Brings immense dharmic merit, community goodwill, and enduring spiritual legacy to the organizers.' },
      { title: 'Awakening of Universal Consciousness', explanation: 'Fosters the noble philosophy of Vasudhaiva Kutumbakam and universal brotherhood.' },
      { title: 'Authentic Shrauta & Smarta Protocols', explanation: 'Executed by a full panel of traditional Acharyas adhering to rigid Vedic geometry and mantra precision.' },
    ],
    whyChooseKashiBrahmins: [
      'Led by eminent Acharyas of Varanasi steeped in Shrauta-Smarta Shastras and Yagya Vidhan.',
      'Accurate construction of traditional Yagya Mandap, Kundas, and Mandalas based on Sulba Sutras.',
      'Proper deployment of qualified priests representing Rigveda, Samaveda, Yajurveda, and Atharvaveda traditions.',
      'Sourcing of pure, unadulterated Cow Ghee, rare Ayurvedic herbal samagri, and prescribed woods.',
      'Execution of complete Purnahuti, Vasordhara, Avabhritha Snan, and Maha Prasad distribution.',
      'Dignified management ensuring transparent, devotional, and sublime spiritual atmosphere.',
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
        'पवित्र अग्नि शिखाओं के दर्शन और मंत्रोच्चार से मन में सात्विक भावों का संचार।',
        'अग्नि देव को माध्यम बनाकर सीधे परमात्मा तक अपनी प्रार्थनाएं पहुंचाना।',
        'व्यक्तिगत कामनाओं के स्थान पर व्यापक कल्याण की सात्विक भावना।',
        'दैनिक या आवधिक साधना में गहराई और आत्मिक संतोष की प्राप्ति।',
      ],
      religious: [
        'शास्त्रोक्त विधि से अग्नि की स्थापना, आवाह्न, पूजा एवं प्राणायाम।',
        'गायत्री मंत्र, महामृत्युंजय मंत्र अथवा इष्ट मंत्रों द्वारा १००८ या १०८ आहुतियां।',
        'औषधीय जड़ी-बूटियों, गूलर, आम, पीपल की समिधा और शुद्ध गाय के घी का प्रयोग।',
        'आरती, भस्म धारण एवं शांति पाठ के साथ अनुष्ठान की संपूर्णता।',
      ],
      family: [
        'घर के वातावरण का प्राकृतिक एवं आध्यात्मिक शुद्धिकरण।',
        'परिवार के बच्चों और बुजुर्गों में सनातन संस्कारों और सद्भावना का विकास।',
        'घर में फैली नकारात्मक ऊर्जा, तनाव और कलह का पारंपरिक रूप से शमन।',
      ],
      personal: [
        'हवन की सुगंधित वायु और मंत्र ध्वनि से मानसिक तनाव और थकावट में राहत।',
        'मन की चंचलता दूर होकर एकाग्रता और सकारात्मक दृष्टिकोण में वृद्धि।',
        'दिन भर के कार्यों के लिए नई ऊर्जा, उत्साह और शांति की अनुभूति।',
      ],
      specificPurpose: [
        'गृह प्रवेश, जन्मदिन, विवाह वर्षगांठ, मास संक्रांति या किसी नए कार्य के आरंभ पर।',
        'नियमित रूप से घर की ऊर्जा को पुनर्जीवित और पवित्र रखने का सनातन उपाय।',
        'सरल, सुलभ और अत्यंत प्रभावशाली वैदिक नित्य-कर्म।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Calms the mind through rhythmic offerings and contemplating the purifying flames of Agni.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Agni Deva (the divine messenger) and your Ishta Devata.' },
      { benefit: 'Family Harmony', significance: 'Gathers the family together in shared prayer, strengthening familial affection.' },
      { benefit: 'Protection', significance: 'Traditionally believed to cleanse stagnant domestic energies and ward off subtle negativity.' },
      { benefit: 'Prosperity', significance: 'Encourages auspicious progress, ethical productivity, and domestic fulfillment.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally performed to remove persistent hindrances in daily endeavors.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Aromatic herbal smoke and mantras promote psychological relaxation and clarity.' },
      { benefit: 'Spiritual Growth', significance: 'Nurtures a habit of daily gratitude, charity, and alignment with cosmic order (Rita).' },
    ],
    websiteBenefits: [
      { title: 'Atmospheric & Spiritual Purification', explanation: 'Sacred fire offerings of guggal, camphor, herbs, and pure ghee physically and energetically purify the home.' },
      { title: 'Direct Vedic Conduit to Divinity', explanation: 'In Vedic philosophy, Agni is the cosmic mouth of the Devas, delivering your prayers directly.' },
      { title: 'Reduction in Daily Stress & Agitation', explanation: 'Participating in Havan creates a meditative pause, easing mental fatigue and promoting tranquil focus.' },
      { title: 'Planetary Botanical Pacification', explanation: 'Utilizes specific planetary samidhas (woods) to gently harmonize astrological transit influences.' },
      { title: 'Instilling Dharmic Values in Family', explanation: 'Provides children and family members with a tangible, beautiful experience of Sanatan rituals.' },
      { title: 'Auspicious Start for Any Life Undertaking', explanation: 'Ideal for birthdays, housewarmings, anniversaries, and new business ventures.' },
      { title: 'Concluded with Sacred Bhasma & Shanti Path', explanation: 'Applying sanctified Bhasma serves as a continuous reminder of purity, modesty, and divine grace.' },
    ],
    whyChooseKashiBrahmins: [
      'Knowledgeable in proper Agnihotra and Grihya Havan procedures according to North Indian traditions.',
      'Use of 100% pure Cow Ghee and genuine Ayurvedic Havan Samagri free of artificial fillers.',
      'Accurate recitation of Swaha mantras, Svishtakrit Ahuti, and Balivaishvadeva rites.',
      'Punctual, dignified, and patient conduct ensuring that every family member offers Ahuti properly.',
      'Guidance on easy daily or monthly maintenance of home Havan practices.',
      'Respectful Vedic decorum with transparent guidance on samagri and dakshina.',
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
        'पंचाक्षर मंत्र "ॐ नमः शिवाय" के निरंतर चिंतन से मन का अंतर्मुखी एवं शांत होना।',
        'शिव स्वरूप की सादगी और वैराग्य से प्रेरित होकर सांसारिक लोभ से मुक्ति।',
        'ध्यान (मेडिटेशन) की स्वाभाविक प्राप्ति और आत्म-बोध की दिशा में प्रगति।',
        'ईश्वर के प्रति सहज, निश्छल और निष्कपट भक्ति का विकास।',
      ],
      religious: [
        'नित्य शिवलिंग पर शीतल जल, श्वेत पुष्प, भस्म एवं बिल्वपत्र का समर्पण।',
        'सोमवार व्रत, प्रदोष व्रत, मासिक शिवरात्रि का शास्त्रसम्मत नियम पालन।',
        'शिव स्तोत्र, रुद्राष्टकम्, शिव ताण्डव स्तोत्र अथवा लिंगाष्टकम् का मधुर पाठ।',
        'आरती एवं कर्पूर गौरम् मंत्र से भगवान आशुतोष की स्तुति।',
      ],
      family: [
        'परिवार में सादगी, संतोष और विवादों से दूर रहने की सात्विक प्रवृत्ति।',
        'शिव-गौरी के आदर्श दांपत्य से प्रेरित होकर पति-पत्नी में मधुर संबंध।',
        'संतानों में नैतिक मूल्यों, संयम और बड़ों के प्रति आदर का भाव।',
      ],
      personal: [
        'क्रोध, अधीरता और भावनात्मक उथल-पुथल पर सहज नियंत्रण।',
        'मानसिक तनाव के समय चंद्रमा जैसी शीतलता और शांति का अनुभव।',
        'कठिन से कठिन परिस्थिति में भी आंतरिक रूप से स्थिर और अडिग रहने का सामर्थ्य।',
      ],
      specificPurpose: [
        'भगवान शिव के "भोलेनाथ" स्वरूप से बिना किसी आडंबर के सहज कृपा प्राप्त करना।',
        'दैनिक जीवन में आध्यात्मिक अनुशासन और मन की निर्मलता बनाए रखना।',
        'जीवन के अंतिम लक्ष्य मोक्ष एवं जन्म-मरण के भय से मुक्ति की प्रार्थना।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Imparts profound stillness, cooling worldly agitation through the meditative grace of Sadashiva.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Lord Shiva (Bholenath), who quickly grants peace to sincere devotees.' },
      { benefit: 'Family Harmony', significance: 'Inspired by the Shiv-Parivar ideal of unity amidst diverse individual temperaments.' },
      { benefit: 'Protection', significance: 'Devotees seek Shiva\'s supreme protection from toxic negative influences (Nilakantha aspect).' },
      { benefit: 'Prosperity', significance: 'Blesses with contentment, wise stewardship of resources, and spiritual richness.' },
      { benefit: 'Removal of Obstacles', significance: 'Dissolves mental complexes, procrastination, and astrological lunar afflictions.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Promotes emotional poise, reduced reactivity, and freedom from panic.' },
      { benefit: 'Spiritual Growth', significance: 'Cultivates profound non-attachment (Vairagya), self-knowledge, and meditative depth.' },
    ],
    websiteBenefits: [
      { title: 'Cultivation of Meditative Stillness', explanation: 'Regular contemplation on Lord Shiva pacifies restless thoughts, facilitating natural meditation.' },
      { title: 'Mastery Over Anger & Reactivity', explanation: 'Shiva\'s cool, poised nature inspires devotees to master volatile emotions and maintain composure.' },
      { title: 'Harmonizing Lunar & Saturnine Astrological Forces', explanation: 'In Vedic astrology, Shiva worship is the prime remedy for soothing afflicted Moon and Saturn transits.' },
      { title: 'Simplicity & Freedom from Material Craving', explanation: 'Teaches true wealth through inner contentment, simplicity, and detachment from trivial anxieties.' },
      { title: 'Family Unity Inspired by Shiv Parivar', explanation: 'Draws blessing for marital harmony, mutual devotion, and familial respect.' },
      { title: 'Daily Spiritual Discipline & Bilva Offering', explanation: 'Offering holy Bilva leaves and water establishes a grounding, satvik morning routine.' },
      { title: 'Path to Inner Liberation (Moksha Marg)', explanation: 'Reflects the ultimate philosophical wisdom of Sanatan Dharma, leading to fearless spiritual freedom.' },
    ],
    whyChooseKashiBrahmins: [
      'Varanasi (Kashi) is the timeless, sacred abode of Lord Vishwanath, the cosmic center of Shaivism.',
      'Authentic knowledge of Shaiva Agamas, Bilva Patra Arpana Vidhi, and proper Panchakshari Mantra Japa rules.',
      'Sincere guidance on performing Somwar Vrata, Pradosh Vrata, and Rudrashtakam recitation.',
      'Proper method of Abhishek with Shuddhodaka, Gangajal, and Panchamrit without ritualistic mistakes.',
      'Respectful, devotion-centric approach focused on pure Bhakti rather than commercial ostentation.',
      'Traditional blessings directly connected to the sacred vibration of Kashi Kshetra.',
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
        'वेदोक्त शांति सूक्त ("ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः...") के पवित्र मंत्रोच्चार से घर का पवित्रीकरण।',
        'घर के सभी कोनों में नकारात्मक ऊर्जा का शमन और दिव्य शांति की प्रतिष्ठा।',
        'परिवार के सदस्यों के मन में क्षमा, सहनशीलता और प्रेम की भावना का विकास।',
        'दैनिक जीवन में ईश्वर के प्रति कृतज्ञता और सात्विक दिनचर्या की शुरुआत।',
      ],
      religious: [
        'नवग्रहों, वास्तु पुरुष एवं कुलदेवता का विधिवत पंचोपचार/षोडशोपचार पूजन।',
        'शांति मंत्रों से अभिमंत्रित जल का संपूर्ण गृह में सिंचन एवं रक्षा विधान।',
        'हवन कुण्ड में शांति द्रव्यों (दूर्वा, घृत, शर्करा, समिधा) से विधिपूर्वक आहुति।',
        'ब्राह्मण आशीर्वाद एवं परिवार के सभी सदस्यों द्वारा एक साथ आरती।',
      ],
      family: [
        'पारिवारिक सदस्यों के बीच अकारण होने वाले वाद-विवाद और गलतफहमियों का अंत।',
        'घर में प्रेम, सम्मान, बच्चों में संस्कार और बड़ों के प्रति आदर की भावना।',
        'विवाह, उत्सव और मांगलिक कार्यों के लिए घर में अनुकूल और शुभ माहौल।',
      ],
      personal: [
        'दिन भर की भागदौड़ और तनाव के बाद घर में वास्तविक मानसिक शांति की अनुभूति।',
        'अनिद्रा, चिड़चिड़ापन और बेचैनी से पारंपरिक विश्वास के अनुसार राहत।',
        'मन में स्पष्टता, सकारात्मकता और पारिवारिक जिम्मेदारियों के प्रति उत्साह।',
      ],
      specificPurpose: [
        'जब घर में निरंतर बिना बात के तनाव, मनमुटाव या बेचैनी महसूस हो रही हो।',
        'नये भवन में रहने के कुछ समय बाद ऊर्जा के संतुलन और स्थायी सुख-शांति हेतु।',
        'परिवार में किसी कठिन दौर के बाद सकारात्मकता के पुनर्निर्माण के लिए।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Restores sacred balance and serenity through the timeless Vedic Shanti Suktam chants.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Navagraha Devatas, Vastu Purusha, and Kuldevata for domestic benevolence.' },
      { benefit: 'Family Harmony', significance: 'Mends interpersonal communication gaps, replacing friction with empathy and affection.' },
      { benefit: 'Protection', significance: 'Consecrates the domestic sanctuary, insulating it from subtle psychological hostility.' },
      { benefit: 'Prosperity', significance: 'Calm home environment naturally supports professional focus, savings, and stability.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to dissolve invisible stagnation affecting home well-being.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Provides a deeply relaxing domestic refuge that alleviates irritability and fatigue.' },
      { benefit: 'Spiritual Growth', significance: 'Encourages collective evening prayer, mutual respect, and ethical living.' },
    ],
    websiteBenefits: [
      { title: 'Vedic Shanti Suktam & Atmospheric Harmony', explanation: 'Resounding Vedic peace hymns dissolve accumulated tension and infuse rooms with palpable serenity.' },
      { title: 'Mitigating Unprovoked Domestic Friction', explanation: 'Devotees perform this puja to heal repeated arguments, misunderstandings, and irritability among family members.' },
      { title: 'Pacification of 4th House Astrological Strain', explanation: 'Addresses astrological afflictions impacting household happiness, maternal health, and peace of mind.' },
      { title: 'Cleansing Stagnant Household Energies', explanation: 'Sprinkling consecrated Gangajal and performing Shanti Havan revitalizes stagnant physical spaces.' },
      { title: 'Promoting Restful Sleep & Emotional Healing', explanation: 'A peaceful home ambiance relieves chronic anxiety, offering deep, restorative rest for all members.' },
      { title: 'Reconnecting Family with Kuldevata Grace', explanation: 'Re-establishes reverence for family deities, ensuring protective cover for coming generations.' },
      { title: 'Auspicious Foundation for Family Milestones', explanation: 'Clears emotional clutter before weddings, examinations, or new business ventures.' },
    ],
    whyChooseKashiBrahmins: [
      'Experienced in diagnosing and pacifying subtle domestic astrological imbalances according to Vedic lore.',
      'Authentic chanting of Shukla Yajurvedic Shanti Adhyaya and Samahit Mantras with precise pitch.',
      'Preparation of sacred Shanti Kalash with sacred herbs (Sarvaushadhi, Panchagavya, holy Teertha water).',
      'Gentle, culturally sensitive demeanor that brings all family members into harmonious participation.',
      'Practical guidance on maintaining daily Vastu positivity and home altar etiquette.',
      'Sincere commitment to family well-being without imposing unreasonable costs or fear.',
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
        'भगवान शिव के नागभूषण स्वरूप का ध्यान कर जीवन के बंधनों से मुक्ति की प्रार्थना।',
        'कर्म सिद्धांत के प्रति गहरी आस्था और अपने आचरण को सात्विक बनाने का संकल्प।',
        'राहु-केतु जनित भ्रम और अविश्वास को दूर कर आत्मिक प्रकाश की प्राप्ति।',
        'ईश्वर के चरणों में अपने संघर्षों को समर्पित कर परम शांति का अनुभव।',
      ],
      religious: [
        'शास्त्रोक्त विधि से नाग-नागिन की प्रतिमा का प्राण-प्रतिष्ठा युक्त पूजन।',
        'राहु एवं केतु के वैदिक/पौराणिक मंत्रों का विधिपूर्वक जप एवं दशांश हवन।',
        'भगवान शिव का विधिवत महा-अभिषेक एवं महामृत्युंजय मंत्र से स्तुति।',
        'पवित्र नदी/सरोवर में अथवा तीर्थ पर नाग प्रतिमा का ससम्मान विसर्जन।',
      ],
      family: [
        'परिवार में आने वाले अचानक व्यवधानों और मानसिक तनाव का पारंपरिक शमन।',
        'संतान एवं वैवाहिक जीवन में आने वाले गतिरोधों के प्रति धार्मिक समाधान।',
        'घर के वातावरण में सुरक्षा, संतुलन और सकारात्मक ऊर्जा का संचार।',
      ],
      personal: [
        'अकारण भय, अज्ञात चिंता और डरावने सपनों से पारंपरिक विश्वास के अनुसार मुक्ति।',
        'कैरियर और व्यक्तिगत जीवन में निरंतर प्रयास करने का नया आत्मविश्वास।',
        'कठिन समय में धैर्य, मानसिक संतुलन और एकाग्रता में वृद्धि।',
      ],
      specificPurpose: [
        'पारंपरिक ज्योतिष के अनुसार कुंडली में राहु और केतु के बीच ग्रहों के संकुचन के प्रभाव को शांत करना।',
        'जीवन में आने वाली अप्रत्याशित बाधाओं के सामने आध्यात्मिक संबल प्राप्त करना।',
        'शास्त्रसम्मत विधि से तीर्थ (जैसे काशी अथवा संगम) पर अनुष्ठान संपन्न करना।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Calms persistent restlessness by surrendering karmic burdens to Lord Shiva.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Lord Shiva (Nageshwara) and Nag Devatas for compassionate protection.' },
      { benefit: 'Family Harmony', significance: 'Eases sudden familial anxieties and unprovoked friction linked to astrological stress.' },
      { benefit: 'Protection', significance: 'Sought as a religious shield against acute psychological turbulence and vivid nightmares.' },
      { benefit: 'Prosperity', significance: 'Traditionally performed to help remove perceived stagnation in professional initiatives.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed in Jyotish to mitigate the intensity of recurring delays.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Provides psychological reassurance, resilience, and emotional steadiness.' },
      { benefit: 'Spiritual Growth', significance: 'Deepens understanding of karmic balance, inspiring disciplined and righteous living.' },
    ],
    websiteBenefits: [
      { title: 'Traditional Astrological Pacification of Rahu-Ketu', explanation: 'Conducted strictly per Jyotish principles to appease the lunar nodes when all planets fall between them.' },
      { title: 'Maha Rudrabhishek & Nageshwara Worship', explanation: 'Surrendering to Lord Shiva—who wears serpents as ornaments—transforms fear into spiritual calm.' },
      { title: 'Alleviation of Chronic Delays & Frustration', explanation: 'Devotees undertake this ritual seeking spiritual relief from repetitive career and personal blockages.' },
      { title: 'Freedom from Sleep Disturbances & Restlessness', explanation: 'Traditionally associated with soothing agitated minds, restless nights, and inexplicable anxiety.' },
      { title: 'Restoring Focus & Purposeful Effort', explanation: 'Helps the devotee cultivate emotional fortitude and rededicate themselves to diligent action.' },
      { title: 'Scriptural Nag Pratima Consecration & Immersion', explanation: 'Involves proper energization of silver Nag-Nagin Murtis followed by respectful Jal Visarjan.' },
      { title: 'Conducted with Ethical Jyotish Counseling', explanation: 'Explains the astrological placement realistically without resorting to fearmongering or false guarantees.' },
    ],
    whyChooseKashiBrahmins: [
      'Varanasi is historically revered for Nag Kupa and sacred Shiva tirthas ideal for Nag Dosh rituals.',
      'Accurate identification of specific Kaal Sarp categories (out of the 12 types) from your birth chart.',
      'Execution of exact Vedic Rahu-Ketu mantras, proper Ahutis, and Shiva Sahasranama archana.',
      'Honest, non-commercial guidance: we never guarantee miraculous overnight shifts, focusing on genuine spiritual remedies.',
      'Proper silver Nag-Nagin samagri, holy teertha jal, and complete Shastric Visarjan rites.',
      'Dignified, peaceful environment ensuring the devotee understands every step of the prayer.',
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
        'नवग्रहों को ईश्वर के विभिन्न शक्ति-स्वरूपों के रूप में स्वीकार कर उनके प्रति नमन।',
        'ब्रह्माण्ड के नियमों (ऋत) के प्रति सम्मान और अपनी अंतःचेतना का शुद्धिकरण।',
        'ग्रहों के प्रतिकूल समय में अहंकार त्याग कर धैर्य और प्रार्थना का मार्ग चुनना।',
        'ईश्वरीय ऊर्जा के साथ अपने मन और बुद्धि का सामंजस्य स्थापित करना।',
      ],
      religious: [
        'रंगोली द्वारा नवग्रह मंडल का शास्त्रीय निर्माण एवं प्रत्येक ग्रह के अधिदेवता-प्रत्यधिदेवता का आह्वान।',
        'नौ ग्रहों की नौ प्रकार की पवित्र समिधाओं (आक, ढाक, खैर, अपामार्ग, पीपल, गूलर, शमी, दूर्वा, कुशा) द्वारा हवन।',
        'प्रत्येक ग्रह के वैदिक एवं तांत्रिक मंत्रों का नियत संख्या में जप।',
        'ग्रह-संबंधित अन्न, वस्त्र, धातु एवं दक्षिणा का सुपात्र को दान।',
      ],
      family: [
        'परिवार में एक साथ कई सदस्यों पर चल रही कठिन दशाओं के सामूहिक प्रभाव का शमन।',
        'घर के वातावरण में शांति, कलह की समाप्ति और सकारात्मक तरंगों का प्रवेश।',
        'संतानों की शिक्षा, स्वास्थ्य और उन्नति के लिए अनुकूल ज्योतिषीय वातावरण।',
      ],
      personal: [
        'कठिन समय में मानसिक विचलितता और निराशा से पारंपरिक विश्वास के अनुसार राहत।',
        'सकारात्मक सोच, आत्मबल और उचित निर्णय लेने की क्षमता में सुधार।',
        'कैरियर और व्यक्तिगत जीवन में आने वाले अनावश्यक अवरोधों के प्रति मानसिक दृढ़ता।',
      ],
      specificPurpose: [
        'शनि की साढ़ेसाती/ढैय्या, राहु/केतु की महादशा, मंगल का अंगारक योग अथवा सूर्य-चंद्र ग्रहण दोष की शांति।',
        'जन्मकुंडली में कमजोर अथवा मारक ग्रहों को शांत कर जीवन में स्थिरता लाना।',
        'वैदिक विधि से ग्रहों के अनुकूल आशीर्वाद प्राप्त करने का समग्र अनुष्ठान।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Harmonizes personal spiritual rhythm with cosmic planetary forces.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to the nine celestial Regents (Navagrahas) and their presiding divinities.' },
      { benefit: 'Family Harmony', significance: 'Soothes overlapping planetary stresses affecting multiple household members.' },
      { benefit: 'Protection', significance: 'Traditionally sought to soften the severity of harsh dasha transitions and malefic transits.' },
      { benefit: 'Prosperity', significance: 'Helps remove perceived energetic blockages in wealth flow and career progress.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to reduce unexplained friction in legal, health, or financial matters.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Fosters calm patience, emotional resilience, and freedom from panic.' },
      { benefit: 'Spiritual Growth', significance: 'Teaches deep humility before cosmic laws, inspiring disciplined and ethical living.' },
    ],
    websiteBenefits: [
      { title: 'Comprehensive Nine-Planet Cosmic Alignment', explanation: 'Worships all nine planetary deities simultaneously, establishing comprehensive energetic balance.' },
      { title: 'Botanical Samidha Havan for Specific Planets', explanation: 'Utilizes 9 prescribed botanical woods (Arka for Sun, Palasha for Moon, Khadira for Mars, etc.) for authentic propitiation.' },
      { title: 'Soothing Sade Sati, Dhaiya & Rahu Dashas', explanation: 'Provides traditional spiritual solace and ritual pacification during stressful Saturn and Nodal periods.' },
      { title: 'Prescribed Vedic Mantra Japa & Suktam Chants', explanation: 'Recites classical Navagraha Suktam from the Vedas, creating an uplifting aura of peace.' },
      { title: 'Targeted Danam (Charity) Recommendations', explanation: 'Guides the devotee on scriptural donations (grains, cloth, pulses) suited to their planetary chart.' },
      { title: 'Restoration of Mental Poise & Confidence', explanation: 'Reduces psychological despondency, empowering the devotee to face life\'s cycles with courage.' },
      { title: 'Protection for Household and Enterprise', explanation: 'Protects family undertakings from unexpected disruptions attributed to planetary friction.' },
    ],
    whyChooseKashiBrahmins: [
      'In-depth knowledge of Brihat Parashara Hora Shastra and Matsya Purana Navagraha rituals.',
      'Precise identification of Adhidevatas and Pratyadhidevatas for each planetary Mandala section.',
      'Sourcing of authentic 9 distinct planetary woods (Navagraha Samidha) and pure ingredients.',
      'Calculated mantra counts performed with dedicated Sanskrit pandits of Kashi.',
      'Sensible, ethical astrological counsel without exploiting fear or making unverified claims.',
      'Complete post-puja guidance on daily mantra chanting, gemstone suitability, and charity.',
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
        'माँ कात्यायनी के प्रति अनन्य भक्ति भाव से सुयोग्य वर/वधू की प्राप्ति हेतु सात्विक प्रार्थना।',
        'शिव-पार्वती के आदर्श अर्धनारीश्वर स्वरूप का ध्यान कर वैवाहिक सामंजस्य की प्रेरणा।',
        'विवाह को केवल सामाजिक अनुबंध न मानकर जीवन का पवित्र धर्म-संस्कार समझना।',
        'प्रतीक्षा की अवधि में मन को शांत, धैर्यवान और सकारात्मक बनाए रखना।',
      ],
      religious: [
        'कात्यायनी महामंत्र ("कात्यायनि महामाये महायोगिन्यधीश्वरि...") का विधिवत जप एवं अनुष्ठान।',
        'मंगल दोष शांति हेतु मंगलेश्वर पूजन अथवा कुंभ/अर्क विवाह की शास्त्रोक्त मर्यादा (जहां लागू हो)।',
        'गुरु (बृहस्पति) एवं शुक्र की शुभता हेतु पीत/श्वेत द्रव्यों का दान एवं व्रत विधान।',
        'शिव-गौरी गठबंधन पूजन एवं रुद्राभिषेक का आयोजन।',
      ],
      family: [
        'संतान के विवाह को लेकर माता-पिता और परिवार के मानसिक तनाव का पारंपरिक शमन।',
        'विवाह प्रस्तावों के चयन में परिवार के लिए स्पष्ट एवं विवेकपूर्ण दृष्टिकोण।',
        'नए पारिवारिक संबंधों में मिठास, सम्मान और स्थायित्व की मंगलकामना।',
      ],
      personal: [
        'अनावश्यक सामाजिक दबाव और विवाह विलंब से उत्पन्न अवसाद से मुक्ति।',
        'अपने व्यक्तित्व में सकारात्मकता, आकर्षण और परिपक्वता का विकास।',
        'सही समय पर सही निर्णय लेने के लिए मानसिक स्पष्टता और आत्मविश्वास।',
      ],
      specificPurpose: [
        'पारंपरिक ज्योतिष के अनुसार कुंडली में विवाह कारक ग्रहों की स्थिति समझकर उपाय करना।',
        'बार-बार पक्की होकर बात टूटने जैसी परिस्थितियों में शांति और मार्गदर्शन।',
        'दांपत्य जीवन में सुख, शांति और दीर्घायु संबंध हेतु वैदिक संकल्प।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Calms anxious hearts through devotional prayers to Maa Katyayani and Lord Shiva-Parvati.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Maa Katyayani, Lord Shiva-Parvati, and Brihaspati Deva (Guru).' },
      { benefit: 'Family Harmony', significance: 'Eases deep parental stress regarding marriage prospects and future family alliance.' },
      { benefit: 'Protection', significance: 'Traditionally performed to protect budding matrimonial alliances from jealousy and misunderstanding.' },
      { benefit: 'Prosperity', significance: 'Blesses the future union with domestic abundance, cultural grace, and mutual support.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed to mitigate Manglik Dosha and 7th-house transit afflictions.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Dispels self-doubt and social anxiety surrounding delayed marriage timing.' },
      { benefit: 'Spiritual Growth', significance: 'Deepens appreciation of Grihastha Ashrama as a noble vehicle for spiritual elevation.' },
    ],
    websiteBenefits: [
      { title: 'In-Depth 7th House & Navamsha (D9) Jyotish Analysis', explanation: 'Evaluates planetary strengths, Manglik factors, and Dasha timings to understand traditional reasons for marriage delays.' },
      { title: 'Authentic Maa Katyayani Anushthan', explanation: 'According to Srimad Bhagavatam, worshipping Maa Katyayani is the revered traditional prayer for a noble life partner.' },
      { title: 'Manglik Dosha & Planetary Pacification', explanation: 'Provides scriptural remedies for Mars, Saturn, or Rahu influences impacting marital houses.' },
      { title: 'Shiva-Gauri Archana for Marital Harmony', explanation: 'Invokes the divine couple archetype to nurture mutual understanding, patience, and affection.' },
      { title: 'Parental Reassurance & Clarified Perspective', explanation: 'Assists families in evaluating matrimonial compatibility with realistic wisdom rather than blind fear.' },
      { title: 'Guidance on Auspicious Matchmaking (Kundali Milan)', explanation: 'Examines Ashta-Koota points and Bhava compatibility ethically without creating unnecessary paranoia.' },
      { title: 'Cultivating Emotional Readiness & Confidence', explanation: 'Helps the individual develop poise, self-esteem, and maturity for stepping into Grihastha Ashrama.' },
    ],
    whyChooseKashiBrahmins: [
      'Expertise in classical Falit Jyotish and Navamsha chart readings honed at Varanasi Sanskrit institutions.',
      'Proper execution of Katyayani Vrata Vidhi, Mangal Shanti, and Gauri-Shankar Puja without shortcuts.',
      'Balanced, constructive astrological counseling: we never guarantee dates, focusing on ethical guidance and prayers.',
      'Clear advice regarding genuine remedies (mantras, charity, fasts) versus unnecessary expensive gemstones.',
      'Compassionate, confidential consultations respectful of family dignity.',
      'Sincere commitment to Sanatan Dharmic values and realistic guidance.',
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
        'सत्य की विजय ("सत्यमेव जयते") के सनातन सिद्धांत पर अडिग विश्वास का निर्माण।',
        'माँ बगलामुखी एवं संकटमोचन हनुमान जी के चरणों में अपनी चिंताओं का संपूर्ण समर्पण।',
        'अन्याय और कटुता के बीच भी अपने अंतर्मन को द्वेष और बदले की भावना से मुक्त रखना।',
        'विपरीत परिस्थितियों में भी धर्म और नैतिक मूल्यों का परित्याग न करने की प्रेरणा।',
      ],
      religious: [
        'माँ पीताम्बरा बगलामुखी का शास्त्रसम्मत विधि से पीत-पूजन एवं जप अनुष्ठान।',
        'श्री हनुमान जी को चोला, सिंदूर समर्पण एवं नित्य सुंदरकांड/बजरंग बाण का पाठ।',
        'ग्रह-दोष शमन हेतु राहु, शनि अथवा षष्ठ भाव के अधिपति के मंत्रों का विधिवत जप।',
        'धार्मिक संकल्प के साथ न्याय और शांति की प्राप्ति हेतु सात्विक प्रार्थना।',
      ],
      family: [
        'लंबे कानूनी विवादों के कारण परिवार में फैली अशांति और निराशा का पारंपरिक शमन।',
        'परिवार के सदस्यों में एकजुटता और कठिन समय में एक-दूसरे का संबल बनने की भावना।',
        'पारिवारिक मान-सम्मान और संचित संपत्ति की रक्षा हेतु दैवीय कृपा की याचना।',
      ],
      personal: [
        'कोर्ट-कचहरी की तारीखों और अनिश्चितताओं के बीच मानसिक शांति और धैर्य बनाए रखना।',
        'भय और संकोच से मुक्त होकर अपने पक्ष को सत्यता एवं निर्भीकता से प्रस्तुत करने का आत्मबल।',
        'अनावश्यक क्रोध, तनाव और अनिद्रा से पारंपरिक विश्वास के अनुसार राहत।',
      ],
      specificPurpose: [
        'जब कोई व्यक्ति अनुचित षड्यंत्र अथवा लंबे कानूनी विवाद में फंसा हुआ महसूस कर रहा हो।',
        'ज्योतिषीय दृष्टिकोण से विवाद के शांत होने की समय-सीमा और अनुकूलता का मार्गदर्शन।',
        'कानूनी लड़ाई के साथ-साथ आध्यात्मिक ऊर्जा और आत्मबल को सुदृढ़ बनाए रखना।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Surrenders protracted legal bitterness to divine justice, restoring inner quietude.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Maa Baglamukhi and Lord Hanuman (Sankat Mochan) for moral strength.' },
      { benefit: 'Family Harmony', significance: 'Shields family relationships from the toxic spillover of chronic legal anxieties.' },
      { benefit: 'Protection', significance: 'Traditionally sought as a spiritual armor against malicious fabrications and unjust attacks.' },
      { benefit: 'Prosperity', significance: 'Helps protect family resources from being entirely eroded by unproductive disputes.' },
      { benefit: 'Removal of Obstacles', significance: 'Traditionally believed in Jyotish to pacify 6th-house adversarial transits.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Combats litigation fatigue, despair, and panic without medical claims.' },
      { benefit: 'Spiritual Growth', significance: 'Inspires adherence to Satya (truth) and Dharma, purifying intent from malice.' },
    ],
    websiteBenefits: [
      { title: 'Spiritual Solace During Protracted Litigation', explanation: 'Provides devotional anchoring and mental calm to navigate the emotional exhausting pace of legal disputes.' },
      { title: 'Devotional Prayers to Maa Baglamukhi & Hanuman Ji', explanation: 'Invokes divine restraint on malice and the unshakeable courage of Sankat Mochan Hanuman.' },
      { title: 'Astrological Insights on 6th & 8th House Dasha Cycles', explanation: 'Evaluates the period of conflict in your birth chart to counsel patience during unfavorable transits.' },
      { title: 'Cultivating Composure & Clear Expression', explanation: 'Helps maintain mental clarity, dignity, and calm composure while consulting legal professionals.' },
      { title: 'Mitigation of Hostility & Vengeance', explanation: 'Encourages peaceful settlements, mediation, and righteous conduct rather than escalating enmity.' },
      { title: 'Protection of Family Honor & Mental Reserves', explanation: 'Assists the family in remaining united and spiritually strong throughout challenging trials.' },
      { title: 'Strict Ethical Disclaimer & Legal Boundary', explanation: 'Clearly distinguishes spiritual prayers from legal representation; devotees are guided to retain qualified advocates.' },
    ],
    whyChooseKashiBrahmins: [
      'Purely satvik, scriptural anushthan grounded in genuine Vedic and Shakta traditions of Kashi.',
      'No unlawful promises: we strictly never promise "guaranteed court victory", keeping faith authentic.',
      'Proper Sundarkand, Hanuman Bahuk, and Baglamukhi Stotram recitations with correct meter.',
      'Sincere counseling helping devotees avoid destructive anger and focus on truth and patience.',
      'Experienced guidance on fasting, Hanuman Sindoor Arpana, and charity on auspicious Tuesdays and Saturdays.',
      'High ethical standards protecting the client\'s privacy and personal integrity.',
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
        'ज्योतिष को "वेदों का नेत्र" (वेदांग) मानकर जीवन के गूढ़ आध्यात्मिक रहस्यों को समझना।',
        'अपने प्रारब्ध कर्मों के प्रति सजग होकर वर्तमान पुरुषार्थ को सात्विक दिशा देना।',
        'ग्रहों के माध्यम से ईश्वरीय नियम और ब्रह्माण्डीय संतुलन का साक्षात्कार।',
        'संशय, भ्रम और निराशा से मुक्त होकर अंतर्मन में शांति की अनुभूति।',
      ],
      religious: [
        'शास्त्रसम्मत पंचांग (तिथि, वार, नक्षत्र, योग, करण) के अनुसार शुभ मुहूर्त का निर्धारण।',
        'ग्रह-दोष निवारण हेतु वेदोक्त मंत्र, स्तोत्र, व्रत एवं दान की उचित विधि का परामर्श।',
        'ईष्ट देव की पहचान एवं उनकी आराधना से आध्यात्मिक संबल प्राप्त करने का मार्गदर्शन।',
        'सनातन धर्म के आचार-विचार और जीवन-संस्कारों के प्रति निष्ठा की पुष्टि।',
      ],
      family: [
        'पारिवारिक सदस्यों की जन्मकुंडलियों के अध्ययन से आपसी तालमेल में सुधार।',
        'संतान की शिक्षा, रुचि और कैरियर के चयन में माता-पिता के लिए उपयोगी दृष्टिकोण।',
        'नये व्यापार, संपत्ति अथवा मांगलिक कार्यों के लिए अनुकूल पारिवारिक निर्णय।',
      ],
      personal: [
        'जीवन के महत्वपूर्ण पड़ावों पर भ्रम की स्थिति में विवेकपूर्ण और स्पष्ट मार्गदर्शन।',
        'कठिन समय में घबराने के बजाय धैर्य और सुनियोजित प्रयास करने की प्रेरणा।',
        'अपनी कमजोरियों पर विजय पाने और स्वाभाविक गुणों को निखारने का संबल।',
      ],
      specificPurpose: [
        'कैरियर, व्यवसाय, शिक्षा, स्वास्थ्य, वैवाहिक जीवन एवं आर्थिक स्थिति पर समग्र दृष्टिकोण।',
        'जीवन में चल रही दशा और गोचर के प्रभाव को समझकर उचित समय पर उचित कदम उठाना।',
        'अंधविश्वास और भय से मुक्त होकर शास्त्रीय एवं प्रामाणिक मार्गदर्शन प्राप्त करना।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Brings clarity by framing life\'s joys and sorrows within the sublime architecture of Vedic karma.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Ganapati and Sage Parashara, seekers of divine insight and wisdom.' },
      { benefit: 'Family Harmony', significance: 'Helps family members understand one another\'s astrological temperaments with empathy.' },
      { benefit: 'Protection', significance: 'Warns against hasty actions during unfavorable astrological transits, encouraging prudence.' },
      { benefit: 'Prosperity', significance: 'Guides optimal timing (Muhurat) for investments, new ventures, and major milestones.' },
      { benefit: 'Removal of Obstacles', significance: 'Suggests traditional Vedic prayers, fasts, and charities to soften karmic bottlenecks.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Relieves agonizing indecisiveness, replacing confusion with calm, structured direction.' },
      { benefit: 'Spiritual Growth', significance: 'Inspires righteous conduct (Dharma) and dedicated effort (Purushartha) over fatalism.' },
    ],
    websiteBenefits: [
      { title: 'Authentic Vedanga Jyotish Interpretation', explanation: 'Grounded in classical Sanskrit treatises (Brihat Parashara, Jaimini Sutras) rather than speculative predictions.' },
      { title: 'Comprehensive Dasha & Gochar Timing Analysis', explanation: 'Examines current planetary periods (Mahadasha/Antardasha) to help you pace important life decisions.' },
      { title: 'Clarity in Career, Business & Education', explanation: 'Assesses 10th house, planetary strengths (Shadbala), and Amatyakaraka to suggest aligned professional directions.' },
      { title: 'Ethical & Realistic Guidance Without Fearmongering', explanation: 'Focuses on empowering the devotee with constructive remedies rather than creating panic or dread.' },
      { title: 'Auspicious Muhurat Determination', explanation: 'Calculates the finest astrological timings for housewarmings, weddings, naming ceremonies, and investments.' },
      { title: 'Traditional Spiritual & Lifestyle Remedies', explanation: 'Recommends specific Japas, Stotras, dietary disciplines, and charities tailored to your chart.' },
      { title: 'Confidential & Empathetic Consultations', explanation: 'Provides an attentive, respectful space to discuss personal challenges and family questions.' },
    ],
    whyChooseKashiBrahmins: [
      'Educated at world-renowned Sanskrit Universities of Varanasi with formal degrees in Jyotish Shastra.',
      'Decade of practical consultation experience grounded in traditional Kundali Ganita and Phalit.',
      'Non-commercial philosophy: we do not sell overpriced gemstones or claim to change your destiny artificially.',
      'Holistic approach combining astrological insight with genuine Vedic Karmakand recommendations.',
      'Transparent, clear explanations in Hindi and English accessible to modern seekers.',
      'Sincere dedication to guiding devotees toward Dharma, peace of mind, and responsible action.',
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
        'जन्मपत्रिका को अपने पूर्वजन्मों के संचित कर्मों का मानचित्र मानकर आत्म-स्वीकृति।',
        'व्यक्तिगत अहंकार को त्यागकर ईश्वर द्वारा निर्धारित प्राकृतिक नियमों का आदर करना।',
        'जीवन की प्रतिकूलताओं को कर्म-परिमार्जन का अवसर मानकर शांत रहना।',
        'ईष्ट देव की पहचान कर उनकी उपासना से आत्मिक शांति प्राप्त करना।',
      ],
      religious: [
        'जन्म नक्षत्र, नामाक्षर, राशि एवं लग्न के अनुसार सनातन संस्कारों का निर्धारण।',
        'कुंडली में स्थित कमजोर ग्रहों को वैदिक मंत्रों, स्तोत्रों और दान से बल प्रदान करना।',
        'दैनिक एवं नैमित्तिक धार्मिक कर्तव्यों का सही दिशा में संपादन।',
        'शास्त्रसम्मत तीर्थ यात्रा, व्रत एवं पूजा संकल्प का निर्धारण।',
      ],
      family: [
        'विवाह के समय वर-वधू की जन्मपत्रिकाओं का गंभीर एवं निष्पक्ष मिलान।',
        'संतान की जन्मपत्रिका से उसके स्वभाव और बौद्धिक विकास को समझकर सही मार्गदर्शन।',
        'परिवार के कुल-देवता एवं पितृ-स्थान की स्थिति को समझकर धार्मिक कर्तव्य निभाना।',
      ],
      personal: [
        'कैरियर, शिक्षा और व्यापार के चयन में अपनी प्राकृतिक क्षमताओं के अनुसार निर्णय।',
        'अशुभ दशा के समय अनावश्यक जोखिम लेने से बचने की विवेकपूर्ण सलाह।',
        'मानसिक तनाव, भ्रम और आत्म-हीनता से मुक्त होकर सकारात्मक ऊर्जा का संचय।',
      ],
      specificPurpose: [
        'अपनी जन्मकुंडली का संपूर्ण जीवन-वृत्त (Lagna, Rashi, Dasha, Bhava) शास्त्रीय दृष्टि से समझना।',
        'विवाह, नौकरी, पदोन्नति, स्वास्थ्य और विदेश यात्रा जैसे महत्वपूर्ण विषयों पर परामर्श।',
        'पारंपरिक वैदिक उपायों (मंत्र, दान, व्रत) द्वारा जीवन में संतुलन स्थापित करना।',
      ],
    },
    tableRows: [
      { benefit: 'Spiritual Peace', significance: 'Accepts life\'s unique blueprint with humility, aligning personal will with divine wisdom.' },
      { benefit: 'Divine Blessings', significance: 'Dedicated to Lord Surya (Savita) and the cosmic Planetary Regents.' },
      { benefit: 'Family Harmony', significance: 'Provides ethical Kundali Milan (matchmaking) evaluating real temperamental compatibility.' },
      { benefit: 'Protection', significance: 'Advises caution and spiritual mindfulness during vulnerable astrological transits.' },
      { benefit: 'Prosperity', significance: 'Identifies favorable Dhana and Raja Yogas to help channel efforts effectively.' },
      { benefit: 'Removal of Obstacles', significance: 'Prescribes traditional personalized remedies (Japa, Danam, Vrata) for afflicted houses.' },
      { benefit: 'Mental/Emotional Peace', significance: 'Replaces fatalistic dread with constructive self-knowledge and calm clarity.' },
      { benefit: 'Spiritual Growth', significance: 'Guides the seeker toward their Ishta Devata and righteous living (Dharma Purushartha).' },
    ],
    websiteBenefits: [
      { title: 'Rigorous 12-Bhava & Divisional Chart Analysis', explanation: 'Examines your Lagna, Navamsha (D9), Dashamsha (D10), and Dwadasamsa charts for comprehensive insight.' },
      { title: 'Precise Mahadasha & Antardasha Mapping', explanation: 'Explains the active planetary periods governing your current life phase, career, and personal dynamics.' },
      { title: 'Ethical & Realistic Matchmaking (Kundali Milan)', explanation: 'Goes far beyond superficial Guna scores to evaluate longevity, mental harmony, and family alignment.' },
      { title: 'Identification of Innate Strengths & Talents', explanation: 'Assists students and professionals in discovering fields where their natural planetary configurations shine.' },
      { title: 'Personalized Scriptural Remedies (Upayas)', explanation: 'Prescribes authentic Vedic remedies—specific Stotras, charities, fasts, and mantras—without fearmongering.' },
      { title: 'Understanding Karmic Patterns & Life Lessons', explanation: 'Helps you make peace with past struggles and approach future opportunities with renewed purpose.' },
      { title: 'Direct Consultations with Kashi Vidwans', explanation: 'Direct one-on-one dialogue with Shastri Ji ensuring all questions are answered with patience and clarity.' },
    ],
    whyChooseKashiBrahmins: [
      'Trained in rigorous classical Sanskrit Kundali Ganita and Siddhanta at Varanasi.',
      'Exacting birth chart calculations incorporating true Ayanamsha and precision planetary longitudes.',
      'Honest, non-commercial advice: we never fabricate non-existent doshas to sell expensive rituals.',
      'Respectful, patient, and detailed consultations with full privacy assured.',
      'Comprehensive guidance encompassing spiritual growth, emotional wellness, and practical worldly wisdom.',
      'Grounded in the sacred tradition of Kashi, where astrology is practiced as a sacred Vidya.',
    ],
  },
}
