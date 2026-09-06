export type Lang = 'hi' | 'en'

export type Bilingual = { hi: string; en: string }

export const contact = {
  phone: '9798802239',
  phoneIntl: '+919798802239',
  whatsapp: 'https://wa.me/919798802239',
  tel: 'tel:+919798802239',
  email: 'himanshujee802156@gmail.com',
  mailto: 'mailto:himanshujee802156@gmail.com',
  branches: {
    hi: 'वाराणसी • आरा • पटना',
    en: 'Varanasi • Ara • Patna',
  } as Bilingual,
}

export const brand = {
  name: {
    hi: 'मंगल ज्योतिष परामर्श केंद्र',
    en: 'Mangal Jyotish Paramarsh Kendra',
  } as Bilingual,
  expert: {
    hi: 'शास्त्री हिमांशु त्रिपाठी जी',
    en: 'Shastri Himanshu Tripathi Ji',
  } as Bilingual,
  title: {
    hi: 'फलित ज्योतिष, वास्तु शास्त्र एवं वैदिक कर्मकाण्ड विशेषज्ञ',
    en: 'Predictive Astrology, Vastu Shastra & Vedic Rituals Specialist',
  } as Bilingual,
  logo: '/images/logo.jpeg',
  portrait: '/images/shastri-ji.jpeg',
}

export const guru = {
  name: {
    hi: 'डॉ. उमाशंकर त्रिपाठी जी',
    en: 'Dr. Umashankar Tripathi Ji',
  } as Bilingual,
  title: {
    hi: 'शास्त्री हिमांशु त्रिपाठी जी के पूज्य गुरु',
    en: 'Revered Guru of Shastri Himanshu Tripathi Ji',
  } as Bilingual,
  tagline: {
    hi: '॥ गुरु कृपा ही केवलम् ॥',
    en: 'Guru Kripa Hi Kevalam',
  } as Bilingual,
  desc: {
    hi: 'सनातन वैदिक परंपरा एवं ज्योतिष शास्त्र के मूर्धन्य विद्वान, जिनके पावन मार्गदर्शन एवं शुभाशीर्वाद से यह ज्ञान परंपरा निरंतर अग्रसर है।',
    en: 'Eminent scholar of Sanatan Vedic tradition and astrology, under whose sacred guidance and blessings this knowledge lineage continues to flourish.',
  } as Bilingual,
  image: '/images/guru-ji.jpeg',
}

export const nav: { id: string; label: Bilingual }[] = [
  { id: 'home', label: { hi: 'होम', en: 'Home' } },
  { id: 'about', label: { hi: 'हमारे बारे में', en: 'About' } },
  { id: 'services', label: { hi: 'हमारी सेवाएं', en: 'Services' } },
  { id: 'astrology', label: { hi: 'ज्योतिष परामर्श', en: 'Astrology' } },
  { id: 'gallery', label: { hi: 'गैलरी', en: 'Gallery' } },
  { id: 'branches', label: { hi: 'शाखाएं', en: 'Branches' } },
  { id: 'contact', label: { hi: 'संपर्क करें', en: 'Contact' } },
]

export const highlights: { icon: string; label: Bilingual }[] = [
  { icon: 'om', label: { hi: 'वैदिक विधि-विधान', en: 'Vedic Rituals' } },
  { icon: 'sparkles', label: { hi: 'ज्योतिष एवं वैदिक कर्मकांड', en: 'Astrology & Vedic Karmakand' } },
  { icon: 'flower', label: { hi: 'श्रद्धा एवं परंपरा', en: 'Faith & Tradition' } },
  { icon: 'map', label: { hi: 'पूरे भारत में सेवाएं उपलब्ध', en: 'Services Across India' } },
]

export const about = {
  paragraphs: {
    hi: [
      'सनातन वैदिक परंपराओं और भारतीय धार्मिक संस्कृति के प्रति गहरी आस्था एवं ज्ञान के साथ शास्त्री हिमांशु त्रिपाठी जी विगत 10 वर्षों से ज्योतिष एवं वैदिक कर्मकांड के क्षेत्र में अपनी सेवाएँ प्रदान कर रहे हैं।',
      'विधि-विधान, श्रद्धा और परंपरागत वैदिक ज्ञान के आधार पर विभिन्न पूजा-पाठ एवं धार्मिक अनुष्ठान संपन्न कराए जाते हैं। उद्देश्य है कि प्रत्येक धार्मिक कार्य पूर्ण श्रद्धा एवं उचित वैदिक विधि-विधान के साथ संपन्न हो।',
    ],
    en: [
      'With deep faith in and knowledge of the Sanatan Vedic traditions and Indian religious culture, Shastri Himanshu Tripathi Ji has been serving in the field of astrology and Vedic rituals for the past 10 years.',
      'Various pujas and religious ceremonies are performed on the basis of proper rites, devotion and traditional Vedic knowledge. The aim is that every religious task is completed with complete devotion and proper Vedic procedure.',
    ],
  },
  facts: [
    {
      icon: 'award',
      label: { hi: 'अनुभव', en: 'Experience' } as Bilingual,
      value: { hi: '10 वर्षों का अनुभव', en: '10 Years of Experience' } as Bilingual,
    },
    {
      icon: 'graduation',
      label: { hi: 'शिक्षा', en: 'Education' } as Bilingual,
      value: { hi: 'शास्त्री (ज्योतिष)', en: 'Shastri (Jyotish)' } as Bilingual,
    },
    {
      icon: 'university',
      label: { hi: 'विश्वविद्यालय', en: 'University' } as Bilingual,
      value: {
        hi: 'संपूर्णानंद संस्कृत विश्वविद्यालय, वाराणसी',
        en: 'Sampurnanand Sanskrit University, Varanasi',
      } as Bilingual,
    },
    {
      icon: 'scroll',
      label: { hi: 'विशेषज्ञता', en: 'Specialization' } as Bilingual,
      value: { hi: 'ज्योतिष एवं वैदिक कर्मकांड', en: 'Astrology & Vedic Rituals' } as Bilingual,
    },
  ],
}

export const services: { id: string; icon: string; name: Bilingual; desc?: Bilingual }[] = [
  {
    id: 'yagya',
    icon: 'flame',
    name: { hi: 'यज्ञ / याग', en: 'Yagya / Yaag' },
    desc: {
      hi: 'पूरे गांव, समाज एवं देश की शांति, सुख-समृद्धि और कल्याण के लिए यज्ञ किया जाता है।',
      en: 'Yagya is performed for the peace, prosperity and welfare of the entire village, society and nation.',
    },
  },
  { id: 'havan', icon: 'flame', name: { hi: 'हवन', en: 'Havan' } },
  { id: 'griha-pravesh', icon: 'home', name: { hi: 'गृह प्रवेश पूजा', en: 'Griha Pravesh Puja' } },
  { id: 'baglamukhi', icon: 'shield', name: { hi: 'बगलामुखी पूजन', en: 'Baglamukhi Pujan' } },
  { id: 'rudrabhishek', icon: 'droplet', name: { hi: 'रुद्राभिषेक', en: 'Rudrabhishek' } },
  { id: 'mahamrityunjaya', icon: 'infinity', name: { hi: 'महामृत्युंजय जाप', en: 'Mahamrityunjaya Jaap' } },
  { id: 'shiva-upasana', icon: 'moon', name: { hi: 'शिव जी की उपासना', en: 'Worship of Lord Shiva' } },
  { id: 'navratri', icon: 'sparkles', name: { hi: 'नवरात्रि पूजा', en: 'Navratri Puja' } },
  { id: 'shatchandi', icon: 'book', name: { hi: 'शतचंडी पाठ', en: 'Shatchandi Paath' } },
  { id: 'navchandi', icon: 'book', name: { hi: 'नवचंडी पाठ', en: 'Navchandi Paath' } },
  { id: 'pitru-paksha', icon: 'users', name: { hi: 'पितृ पक्ष पूजा', en: 'Pitru Paksha Puja' } },
  { id: 'astrology', icon: 'star', name: { hi: 'ज्योतिष परामर्श', en: 'Astrology Consultation' } },
  { id: 'kundali', icon: 'compass', name: { hi: 'कुंडली परामर्श', en: 'Kundali Consultation' } },
  { id: 'griha-shanti', icon: 'heart', name: { hi: 'गृह शांति', en: 'Peace at Home' } },
  { id: 'marriage-obstacles', icon: 'gem', name: { hi: 'शादी में बाधा निवारण हेतु परामर्श', en: 'Guidance for Marriage Obstacles' } },
  { id: 'court-case', icon: 'gavel', name: { hi: 'कोर्ट केस में राहत हेतु परामर्श', en: 'Guidance for Court Case Relief' } },
  { id: 'kaal-sarp', icon: 'orbit', name: { hi: 'कालसर्प दोष निवारण', en: 'Kaal Sarp Dosh Remedy' } },
  { id: 'graha-badha', icon: 'orbit', name: { hi: 'ग्रह बाधा निवारण', en: 'Planetary Obstacle Remedy' } },
]

export const astrologyTopics: { icon: string; label: Bilingual }[] = [
  { icon: 'compass', label: { hi: 'कुंडली परामर्श', en: 'Kundali Consultation' } },
  { icon: 'heart', label: { hi: 'विवाह संबंधी मार्गदर्शन', en: 'Marriage Guidance' } },
  { icon: 'users', label: { hi: 'पारिवारिक विषयों पर मार्गदर्शन', en: 'Family Matters Guidance' } },
  { icon: 'orbit', label: { hi: 'ग्रह बाधा संबंधी मार्गदर्शन', en: 'Planetary Obstacle Guidance' } },
]

export const gallery: {
  src: string
  orientation: 'portrait' | 'landscape'
  alt: Bilingual
}[] = [
  {
    src: '/images/gallery/lotus-shivling-marble.png',
    orientation: 'landscape',
    alt: {
      hi: 'कमल एवं पुष्पों से सुसज्जित शिवलिंग का श्रृंगार',
      en: 'Shivling adorned with lotus and floral decoration',
    },
  },
  {
    src: '/images/gallery/shastri-durga-temple.png',
    orientation: 'portrait',
    alt: {
      hi: 'माँ दुर्गा मंदिर में शास्त्री हिमांशु त्रिपाठी जी',
      en: 'Shastri Himanshu Tripathi Ji at the Maa Durga temple',
    },
  },
  {
    src: '/images/gallery/multi-deity-puja.png',
    orientation: 'landscape',
    alt: {
      hi: 'देवी-देवताओं की चित्र सहित भव्य पूजा एवं अनुष्ठान',
      en: 'Grand puja and rituals with framed images of deities',
    },
  },
  {
    src: '/images/gallery/shastri-seated.png',
    orientation: 'portrait',
    alt: {
      hi: 'पूजा स्थल पर आसन ग्रहण किए शास्त्री जी',
      en: 'Shastri Ji seated at the place of worship',
    },
  },
  {
    src: '/images/gallery/floral-shivling-petals.png',
    orientation: 'portrait',
    alt: {
      hi: 'गेंदा एवं गुलाब की पंखुड़ियों से सजा शिवलिंग',
      en: 'Shivling decorated with marigold and rose petals',
    },
  },
  {
    src: '/images/gallery/rudraksha-altar.png',
    orientation: 'landscape',
    alt: {
      hi: 'रुद्राक्ष एवं नारियल सहित पूजन सामग्री की सज्जा',
      en: 'Altar arranged with rudraksha, coconut and offerings',
    },
  },
  {
    src: '/images/gallery/shastri-gold-shawl.png',
    orientation: 'portrait',
    alt: {
      hi: 'स्वर्ण दुपट्टा धारण किए शास्त्री हिमांशु त्रिपाठी जी',
      en: 'Shastri Himanshu Tripathi Ji wearing a golden shawl',
    },
  },
  {
    src: '/images/gallery/navagraha-kalash.png',
    orientation: 'landscape',
    alt: {
      hi: 'कलश एवं पुष्प मालाओं सहित नवग्रह पूजन',
      en: 'Navagraha puja with kalash and floral garlands',
    },
  },
  {
    src: '/images/gallery/shiv-parivar-puja.png',
    orientation: 'portrait',
    alt: {
      hi: 'शिव परिवार के समक्ष संपन्न पूजा-अर्चना',
      en: 'Puja performed before the Shiv Parivar',
    },
  },
  {
    src: '/images/gallery/shastri-yellow-shawl.png',
    orientation: 'portrait',
    alt: {
      hi: 'पीत दुपट्टा धारण किए शास्त्री हिमांशु त्रिपाठी जी',
      en: 'Shastri Himanshu Tripathi Ji wearing a yellow shawl',
    },
  },
]

export const branchList: { icon: string; name: Bilingual; type: Bilingual }[] = [
  { icon: 'star', name: { hi: 'वाराणसी', en: 'Varanasi' }, type: { hi: 'मुख्य शाखा', en: 'Main Branch' } },
  { icon: 'pin', name: { hi: 'आरा', en: 'Ara' }, type: { hi: 'शाखा', en: 'Branch' } },
  { icon: 'pin', name: { hi: 'पटना', en: 'Patna' }, type: { hi: 'शाखा', en: 'Branch' } },
]

/* UI strings */
export const t = {
  devotionalLine: {
    hi: 'वन्दे त्वां जगदम्बिका',
    en: 'Vande Tvam Jagadambika',
  },
  announcement: {
    hi: 'वैदिक पूजा-पाठ • धार्मिक अनुष्ठान • ज्योतिष परामर्श',
    en: 'Vedic Pujas • Religious Rituals • Astrology Consultation',
  },
  navCta: { hi: 'परामर्श लें', en: 'Get Consultation' },
  indiaWide: { hi: 'पूरे भारत में सेवाएं उपलब्ध', en: 'Services Available Across India' },
  hero: {
    sub: {
      hi: 'वैदिक पूजा-पाठ, धार्मिक अनुष्ठान एवं ज्योतिषीय मार्गदर्शन',
      en: 'Vedic Pujas, Religious Rituals & Astrological Guidance',
    },
    intro: {
      hi: 'सनातन परंपरा और वैदिक ज्ञान के आधार पर श्रद्धा एवं विधि-विधान के साथ आपके प्रत्येक धार्मिक कार्य में सच्चा मार्गदर्शन।',
      en: 'True guidance for your every religious endeavour, rooted in Sanatan tradition and Vedic knowledge, performed with devotion and proper rites.',
    },
    whatsapp: { hi: 'WhatsApp पर संपर्क करें', en: 'Contact on WhatsApp' },
    call: { hi: 'कॉल करें', en: 'Call Now' },
  },
  aboutHeading: { hi: 'हमारे बारे में', en: 'About Us' },
  servicesHeading: { hi: 'हमारी सेवाएं', en: 'Our Services' },
  servicesIntro: {
    hi: 'काशी के विद्वान ब्राह्मणों द्वारा वैदिक विधि-विधान एवं परंपरा के अनुसार सभी पूजा-पाठ और धार्मिक अनुष्ठान संपन्न कराए जाते हैं।',
    en: 'All pujas and religious rituals are performed by the learned Brahmins of Kashi in accordance with Vedic rites and tradition.',
  },
  astrologyHeading: { hi: 'ज्योतिष परामर्श', en: 'Astrology Consultation' },
  astrologyText: {
    hi: 'जीवन से जुड़े विभिन्न विषयों पर ज्योतिष एवं वैदिक परंपरा के अनुसार उचित मार्गदर्शन प्राप्त करें।',
    en: 'Receive appropriate guidance on various matters of life according to astrology and Vedic tradition.',
  },
  astrologyCta: { hi: 'परामर्श के लिए संपर्क करें', en: 'Contact for Consultation' },
  galleryHeading: { hi: 'हमारी गैलरी', en: 'Our Gallery' },
  galleryIntro: {
    hi: 'श्रद्धा एवं वैदिक विधि-विधान के साथ संपन्न पूजा-पाठ एवं धार्मिक अनुष्ठानों की कुछ पावन झलकियाँ।',
    en: 'A few sacred glimpses of pujas and religious rituals performed with devotion and proper Vedic rites.',
  },
  branchesHeading: { hi: 'हमारी शाखाएं एवं सेवा क्षेत्र', en: 'Our Branches & Service Area' },
  branchesNote: {
    hi: 'पूरे भारत में पूजा-पाठ एवं धार्मिक सेवाएं उपलब्ध',
    en: 'Pujas and religious services available across India',
  },
  branchesSoon: {
    hi: 'विस्तृत पते एवं मानचित्र शीघ्र जोड़े जाएंगे।',
    en: 'Detailed addresses and maps will be added soon.',
  },
  contactHeading: { hi: 'संपर्क करें', en: 'Contact Us' },
  contactSub: {
    hi: 'किसी भी पूजा-पाठ, अनुष्ठान अथवा ज्योतिष परामर्श हेतु हमसे संपर्क करें।',
    en: 'Reach out to us for any puja, ritual or astrology consultation.',
  },
  form: {
    name: { hi: 'नाम', en: 'Name' },
    phone: { hi: 'मोबाइल नंबर', en: 'Mobile Number' },
    place: { hi: 'स्थान', en: 'Location' },
    service: { hi: 'सेवा चुनें', en: 'Select a Service' },
    dob: { hi: 'जन्म तिथि', en: 'Date of Birth' },
    birthTime: { hi: 'जन्म समय', en: 'Birth Time' },
    message: { hi: 'संदेश', en: 'Message' },
    submit: { hi: 'संपर्क करें', en: 'Send Message' },
    success: {
      hi: 'धन्यवाद! आपका संदेश प्राप्त हो गया है। हम शीघ्र संपर्क करेंगे।',
      en: 'Thank you! Your message has been received. We will contact you soon.',
    },
  },
  labels: {
    phone: { hi: 'फ़ोन', en: 'Phone' },
    whatsapp: { hi: 'व्हाट्सएप', en: 'WhatsApp' },
    email: { hi: 'ईमेल', en: 'Email' },
    branches: { hi: 'शाखाएं', en: 'Branches' },
    serviceArea: { hi: 'सेवा क्षेत्र', en: 'Service Area' },
  },
  footer: {
    tagline: { hi: 'आस्था • परंपरा • वैदिक मार्गदर्शन', en: 'Faith • Tradition • Vedic Guidance' },
    quickLinks: { hi: 'त्वरित लिंक', en: 'Quick Links' },
    rights: {
      hi: '© 2026 मंगल ज्योतिष परामर्श केंद्र. सर्वाधिकार सुरक्षित।',
      en: '© 2026 Mangal Jyotish Paramarsh Kendra. All Rights Reserved.',
    },
  },
}
