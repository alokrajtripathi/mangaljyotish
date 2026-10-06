'use client'

import { useEffect, useState } from 'react'
import {
  X,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Flame,
  Sun,
  Shield,
  Droplet,
  BookOpen,
  MapPin,
  HelpCircle,
  Calendar,
  Check,
} from 'lucide-react'
import { useLanguage } from './language-provider'
import { allPujaBenefitsData, type PujaBenefitItem } from '@/lib/puja-benefits-data'
import { contact } from '@/lib/site-data'

interface ServiceDetailModalProps {
  serviceId: string | null
  onClose: () => void
}

export function ServiceDetailModal({ serviceId, onClose }: ServiceDetailModalProps) {
  const { lang, tr } = useLanguage()
  const [activeTab, setActiveTab] = useState<string>('benefits')
  const [expandedAnushthan, setExpandedAnushthan] = useState<number | null>(null)

  const isPitruDosh = serviceId === 'pitru-dosh'
  const serviceData: PujaBenefitItem | undefined = serviceId ? allPujaBenefitsData[serviceId] : undefined

  useEffect(() => {
    setActiveTab('benefits')
    setExpandedAnushthan(null)
  }, [serviceId])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (serviceId) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [serviceId, onClose])

  if (!serviceId || !serviceData) return null

  const isHindi = lang === 'hi'

  // Pitru Dosh Specific Data
  const pitruAnushthanList = [
    {
      icon: Flame,
      title: { hi: 'त्रिपिंडी श्राद्ध', en: 'Tripindi Shraddha' },
      desc: {
        hi: 'पूर्वजों की शांति एवं पितृ ऋण से संबंधित वैदिक कर्मकांड। इसे विशेष रूप से उन परिस्थितियों में किया जाता है जहां पितृ शांति हेतु विशेष अनुष्ठान की आवश्यकता मानी जाती है।',
        en: 'Vedic ritual for ancestral peace and discharging filial obligations, performed especially when distinct spiritual rites are needed for forebears.',
      },
    },
    {
      icon: Sun,
      title: { hi: 'नारायण बलि पूजा', en: 'Narayan Bali Puja' },
      desc: {
        hi: 'अकाल मृत्यु अथवा असामान्य परिस्थितियों में दिवंगत आत्मा की शांति के लिए परंपरागत रूप से किया जाने वाला विशेष वैदिक अनुष्ठान।',
        en: 'Special Vedic ceremony traditionally performed for the peaceful deliverance and spiritual elevation of souls departed under unusual circumstances.',
      },
    },
    {
      icon: Shield,
      title: { hi: 'नाग बलि पूजा', en: 'Nag Bali Puja' },
      desc: {
        hi: 'नाग संबंधी दोषों एवं पितृ कर्म से जुड़ी मान्यताओं के निवारण हेतु परंपरागत विधि से किया जाने वाला अनुष्ठान।',
        en: 'Traditional Vedic ritual performed to pacify serpentine planetary afflictions and ancestral spiritual blockages.',
      },
    },
    {
      icon: Droplet,
      title: { hi: 'पितृ शांति एवं तर्पण', en: 'Pitru Shanti & Tarpan' },
      desc: {
        hi: 'पूर्वजों के प्रति श्रद्धा, तर्पण एवं शांति की कामना के लिए वैदिक मंत्रों एवं विधि से किया जाने वाला कर्मकांड।',
        en: 'Solemn offering of holy water and sacred sesame with Vedic hymns, expressing heartfelt filial gratitude and prayers for peace.',
      },
    },
    {
      icon: BookOpen,
      title: { hi: 'श्राद्ध एवं पिंडदान', en: 'Shraddha & Pinda Daan' },
      desc: {
        hi: 'पूर्वजों के निमित्त श्रद्धापूर्वक पिंडदान, तर्पण एवं श्राद्ध कर्म करने की पारंपरिक विधि।',
        en: 'Traditional scriptural rite of offering sanctified Pindas, performing water libations, and praying for ancestral contentment.',
      },
    },
    {
      icon: MapPin,
      title: { hi: 'गया श्राद्ध / पिंडदान', en: 'Gaya Shraddha / Pinda Daan' },
      desc: {
        hi: 'गया जी में पिंडदान एवं श्राद्ध की धार्मिक परंपरा तथा इसके महत्व से संबंधित जानकारी।',
        en: 'Sacred timeless pilgrimage tradition of Gaya Teerth Pinda Daan for eternal ancestral peace and salvation (Moksha).',
      },
    },
  ]

  const pitruBenefitsList = [
    { hi: 'पितृ शांति की कामना', en: 'Seeking Ancestral Peace' },
    { hi: 'पूर्वजों के प्रति श्रद्धा एवं कृतज्ञता', en: 'Reverence & Filial Gratitude' },
    { hi: 'पारिवारिक शांति एवं सकारात्मक वातावरण', en: 'Family Peace & Positive Energy' },
    { hi: 'पारंपरिक वैदिक कर्मकांड का पालन', en: 'Observance of Vedic Rites' },
    { hi: 'पितृ ऋण से संबंधित धार्मिक मान्यताओं में शांति की कामना', en: 'Discharging Sacred Filial Debt' },
    { hi: 'मानसिक एवं आध्यात्मिक संतुलन की भावना', en: 'Mental & Spiritual Equilibrium' },
    { hi: 'परिवार की सुख-समृद्धि की कामना', en: 'Prayers for Family Prosperity' },
  ]

  const pitruCircumstances = [
    { hi: 'परिवार में बार-बार आने वाली परेशानियां (धार्मिक मान्यतानुसार)', en: 'Recurring familial difficulties (as per traditional belief)' },
    { hi: 'विवाह संबंधी बाधाओं के साथ पितृ दोष की धार्मिक मान्यता', en: 'Marriage delays associated with ancestral dosha considerations' },
    { hi: 'संतान संबंधी बाधाओं के साथ पितृ दोष की मान्यता', en: 'Progeny and childbirth hindrances traditionally linked with pitru dosha' },
    { hi: 'परिवार में लगातार अशांति एवं क्लेश की स्थिति', en: 'Persistent domestic friction and unresolved household unrest' },
    { hi: 'अकाल मृत्यु से संबंधित पारिवारिक धार्मिक मान्यताएं', en: 'Family circumstances involving untimely or unnatural departure of elders' },
    { hi: 'ज्योतिषीय कुंडली में पितृ दोष बताए जाने पर वैदिक शांति', en: 'Planetary indicators of Pitru Dosh in astrological birth charts' },
  ]

  const pitruSamagriList = [
    { hi: 'तिल (काले तिल)', en: 'Black Sesame Seeds (Tila)' },
    { hi: 'कुश (पवित्र कुशा घास)', en: 'Sacred Kusha Grass' },
    { hi: 'जल (पवित्र गंगाजल)', en: 'Holy Gangajal & Pure Water' },
    { hi: 'पुष्प (सफेद एवं सात्विक पुष्प)', en: 'White & Sattvic Flowers' },
    { hi: 'अक्षत (यव / जौ एवं चावल)', en: 'Barley (Yava) & Sacred Rice' },
    { hi: 'पिंड सामग्री (जौ का आटा, घृत, मधु)', en: 'Pinda Ingredients (Barley flour, ghee, honey)' },
    { hi: 'शुद्ध गाय का घी', en: 'Pure Desi Cow Ghee' },
    { hi: 'दीप (पीतल / मिट्टी का दीपक)', en: 'Sacred Brass / Clay Lamps' },
    { hi: 'धूप एवं गुग्गुल', en: 'Incense, Dhoop & Guggul' },
    { hi: 'पंचामृत (दूध, दही, घी, शहद, शर्करा)', en: 'Panchamrit (Milk, curd, ghee, honey, sugar)' },
    { hi: 'वस्त्र एवं यज्ञोपवीत (जनेऊ)', en: 'Sacred Cloth & Yajnopavita' },
    { hi: 'अन्य आवश्यक पूजन सामग्री', en: 'Betel nuts, cloves, cardamom & Dakshina' },
  ]

  const pitruStepsList = [
    {
      step: '1',
      title: { hi: 'संकल्प', en: 'Sankalp' },
      desc: { hi: 'यजमान के नाम, गोत्र, स्थान एवं पूर्वजों के निमित्त शास्त्रोक्त संकल्प ग्रहण।', en: 'Solemn Vedic resolve invoking your Gotra, name, location, and forebears.' },
    },
    {
      step: '2',
      title: { hi: 'गणेश एवं देव पूजन', en: 'Ganesha & Deity Worship' },
      desc: { hi: 'विघ्नहर्ता श्रीगणेश, नवग्रह एवं भगवान विष्णु का आह्वान व पूजन।', en: 'Invoking Lord Ganesha, Navagrahas, and Lord Vishnu for auspicious completion.' },
    },
    {
      step: '3',
      title: { hi: 'पितृ आवाहन', en: 'Pitru Avahan' },
      desc: { hi: 'कुश, तिल एवं पवित्र जल से तीन पीढ़ियों के पितृगणों का सादर स्मरण व आवाहन।', en: 'Reverent invocation of three generations of maternal and paternal ancestors.' },
    },
    {
      step: '4',
      title: { hi: 'तर्पण', en: 'Tarpan' },
      desc: { hi: 'अंगूठे के मूल (पितृतीर्थ) से जौ, तिल, अक्षत एवं गंगाजल द्वारा विधिवत तर्पण।', en: 'Sacred water libations offered with holy Kusha, barley, and black sesame.' },
    },
    {
      step: '5',
      title: { hi: 'पिंडदान / संबंधित कर्म', en: 'Pinda Daan & Allied Rites' },
      desc: { hi: 'जौ के आटे/चावल से निर्मित पिंडों का विधिपूर्वक अर्पण एवं विष्णुपद ध्यान।', en: 'Scriptural offering of sacred Pindas invoking the grace of Lord Gadadhara.' },
    },
    {
      step: '6',
      title: { hi: 'मंत्र एवं वैदिक अनुष्ठान', en: 'Vedic Hymns & Anushthan' },
      desc: { hi: 'गरुड़ पुराणोक्त, यजुर्वेदीय एवं शांति पाठ के विशेष वैदिक मंत्रोच्चार।', en: 'Vedic recitation from Yajurveda, Garuda Purana, and Shanti Paath.' },
    },
    {
      step: '7',
      title: { hi: 'ब्राह्मण पूजन / दक्षिणा', en: 'Brahmin Worship & Dakshina' },
      desc: { hi: 'विद्वान ब्राह्मणों को आदरपूर्वक भोजन/सामग्री एवं दक्षिणा समर्पण।', en: 'Honoring learned Vedic Brahmins with Bhojan, clothing, and traditional Dakshina.' },
    },
    {
      step: '8',
      title: { hi: 'समापन एवं आशीर्वाद', en: 'Culmination & Blessings' },
      desc: { hi: 'प्रार्थना, क्षमा याचना, आरती एवं कुल के लिए पितरों का शुभाशीर्वाद।', en: 'Concluding Aarti, Kshama Prarthana, and seeking ancestral peace for the entire family.' },
    },
  ]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-accent/40 bg-card text-card-foreground shadow-2xl shadow-primary/20">
        {/* Header */}
        <div className="relative border-b border-border bg-gradient-to-r from-maroon-deep via-maroon to-maroon-deep px-6 py-6 text-cream">
          <button
            onClick={onClose}
            aria-label={isHindi ? 'बंद करें' : 'Close modal'}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-cream transition hover:bg-white/20 hover:text-white"
          >
            <X className="size-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="size-4" />
            <span>{isHindi ? 'वैदिक पूजा एवं अनुष्ठान' : 'Vedic Puja & Rituals'}</span>
          </div>

          <h2 id="service-modal-title" className="mt-1 font-display text-2xl font-bold text-accent sm:text-3xl">
            {isPitruDosh
              ? (isHindi ? 'पितृ दोष निवारण पूजा' : 'Pitru Dosh Nivaran Puja')
              : tr(serviceData.name)}
          </h2>

          <p className="mt-1.5 text-xs text-cream/90 sm:text-sm leading-relaxed">
            {isPitruDosh ? (
              <span>
                <strong className="text-accent font-semibold">{isHindi ? 'मुख्य रूप से:' : 'Mainly:'} </strong>
                {isHindi
                  ? 'त्रिपिंडी श्राद्ध, नारायण बलि, नाग बलि एवं पितृ शांति संबंधी वैदिक अनुष्ठान'
                  : 'Tripindi Shraddha, Narayan Bali, Nag Bali & Pitru Shanti Vedic Rituals'}
              </span>
            ) : (
              <span>
                <strong className="text-accent font-semibold">{isHindi ? 'मुख्य देव:' : 'Main Deity:'} </strong>
                {tr(serviceData.mainDeity)}
              </span>
            )}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-border bg-muted/40 px-6 scrollbar-none">
          {isPitruDosh ? (
            <>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'benefits'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'विस्तृत लाभ' : 'Detailed Benefits'}
              </button>
              <button
                onClick={() => setActiveTab('vidhi')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'vidhi'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'पूजा विधि' : 'Puja Vidhi'}
              </button>
              <button
                onClick={() => setActiveTab('kashi')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'kashi'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'काशी में क्यों?' : 'Why in Kashi?'}
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'contact'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'संपर्क / बुकिंग' : 'Contact & Booking'}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'benefits'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'विस्तृत लाभ' : 'Detailed Benefits'}
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'table'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'लाभ तालिका' : 'Benefits Table'}
              </button>
              <button
                onClick={() => setActiveTab('kashi')}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === 'kashi'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isHindi ? 'काशी के ब्राह्मण क्यों?' : 'Why Kashi Brahmins?'}
              </button>
            </>
          )}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 text-foreground">
          {/* PITRU DOSH SPECIFIC CONTENT */}
          {isPitruDosh && activeTab === 'benefits' && (
            <div className="space-y-6">
              {/* Introduction Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isHindi ? 'धार्मिक महत्व' : 'Religious Significance'}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {isHindi
                      ? 'पितृ दोष से संबंधित मान्यताओं में पूर्वजों की शांति एवं उनके निमित्त किए जाने वाले वैदिक कर्मकांडों का विशेष महत्व माना जाता है। उचित विधि एवं संकल्प के साथ किए गए अनुष्ठान पितृ शांति के लिए किए जाते हैं।'
                      : 'In traditional beliefs regarding Pitru Dosh, performing Vedic rituals for the peaceful deliverance of ancestors holds profound significance. Rites conducted with proper scriptural resolve seek peaceful onward spiritual journey.'}
                  </p>
                </div>

                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isHindi ? 'पौराणिक महत्व' : 'Puranic Context'}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {isHindi
                      ? 'वैदिक एवं पौराणिक परंपराओं में श्राद्ध, तर्पण, त्रिपिंडी श्राद्ध तथा नारायण बलि जैसे कर्मकांडों का उल्लेख मिलता है। इनका उद्देश्य दिवंगत पूर्वजों के प्रति श्रद्धा एवं शांति की कामना करना है।'
                      : 'Vedic and Puranic scriptures elaborate upon rites such as Shraddha, Tarpan, Tripindi Shraddha, and Narayan Bali with the sacred intent of honoring departed ancestors and seeking their benevolent peace.'}
                  </p>
                </div>
              </div>

              {/* Main Section: Pitru Dosh Anushthan Cards */}
              <div>
                <div className="flex items-center gap-2">
                  <Flame className="size-5 text-accent" />
                  <h3 className="font-display text-lg font-bold text-primary">
                    {isHindi ? 'पितृ दोष निवारण के प्रमुख अनुष्ठान' : 'Major Rituals for Pitru Dosh Nivaran'}
                  </h3>
                </div>
                <div className="mt-3.5 grid gap-3 sm:grid-cols-2">
                  {pitruAnushthanList.map((item, idx) => {
                    const IconComp = item.icon
                    const isExpanded = expandedAnushthan === idx
                    return (
                      <div
                        key={idx}
                        onClick={() => setExpandedAnushthan(isExpanded ? null : idx)}
                        className="group cursor-pointer rounded-2xl border border-border/80 bg-card p-4 transition-all hover:border-accent hover:shadow-md"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                            <IconComp className="size-4.5" />
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition">
                                {idx + 1}. {tr(item.title)}
                              </h4>
                              <ChevronRight className={`size-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90 text-primary' : ''}`} />
                            </div>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                              {tr(item.desc)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Section: Major Benefits (7 clean cards) */}
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary" />
                  <h3 className="font-display text-lg font-bold text-primary">
                    {isHindi ? 'पितृ दोष निवारण के प्रमुख लाभ' : 'Key Benefits of Pitru Dosh Nivaran'}
                  </h3>
                </div>
                <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                  {pitruBenefitsList.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-muted/20 px-3.5 py-3 transition hover:border-accent/40"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-foreground/90">
                        {tr(benefit)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Circumstances */}
              <div className="rounded-2xl border border-border bg-muted/30 p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="size-5 text-accent" />
                  <h3 className="font-display text-base sm:text-lg font-bold text-primary">
                    {isHindi ? 'किस परिस्थिति में पूजा कराई जाती है?' : 'When is this Puja Traditionally Performed?'}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isHindi
                    ? 'सनातन परंपरा एवं वैदिक ज्योतिष की मान्यताओं के अनुसार निम्नलिखित परिस्थितियों में पितृ शांति अनुष्ठान का परामर्श दिया जाता है:'
                    : 'According to Sanatan traditions and Vedic astrology lore, Pitru Shanti rituals are recommended in scenarios such as:'}
                </p>

                <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                  {pitruCircumstances.map((circ, idx) => (
                    <div key={idx} className="flex items-start gap-2 rounded-xl bg-card p-3 border border-border/60">
                      <span className="text-primary font-bold text-xs">•</span>
                      <span className="text-xs text-foreground/85 leading-relaxed">{tr(circ)}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-[11px] text-muted-foreground/80 italic leading-tight">
                  {isHindi
                    ? '* नोट: यह विवरण सनातन धार्मिक परंपरा एवं वैदिक मान्यताओं पर आधारित है। इसे किसी प्रकार का चिकित्सीय अथवा कानूनी दावा नहीं माना जाना चाहिए।'
                    : '* Note: These details reflect traditional Sanatan religious faith and lore, not medical or legal claims.'}
                </p>
              </div>
            </div>
          )}

          {isPitruDosh && activeTab === 'vidhi' && (
            <div className="space-y-6">
              {/* Puja Procedure (Steps 1 to 8) */}
              <div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-5 text-accent" />
                  <h3 className="font-display text-lg font-bold text-primary">
                    {isHindi ? 'पूजा की सामान्य प्रक्रिया' : 'Standard Puja Procedure'}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isHindi
                    ? 'काशी के विद्वान ब्राह्मणों द्वारा शास्त्रसम्मत विधि से निम्नलिखित ८ चरणों में अनुष्ठान संपन्न कराया जाता है:'
                    : 'The ceremony is conducted in 8 systematic Vedic steps by learned Brahmins:'}
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {pitruStepsList.map((stepItem, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-maroon-deep">
                        {stepItem.step}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-foreground">{tr(stepItem.title)}</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{tr(stepItem.desc)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Samagri Section (Two-column grid) */}
              <div className="rounded-2xl border border-border bg-muted/30 p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  <h3 className="font-display text-base sm:text-lg font-bold text-primary">
                    {isHindi ? 'पूजा में शामिल प्रमुख सामग्री' : 'Essential Puja Materials (Samagri)'}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isHindi
                    ? 'अनुष्ठान हेतु उपयोग की जाने वाली शास्त्रसम्मत एवं शुद्ध सामग्रियां:'
                    : 'Scripturally approved satvik materials utilized in the ceremony:'}
                </p>

                <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {pitruSamagriList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-xl border border-border/70 bg-card px-3 py-2.5 text-xs text-foreground/90"
                    >
                      <CheckCircle2 className="size-3.5 shrink-0 text-accent" />
                      <span className="truncate">{tr(item)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isPitruDosh && activeTab === 'kashi' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-card via-accent/5 to-card p-5">
                <div className="flex items-center gap-2.5 text-primary">
                  <ShieldCheck className="size-6 text-accent" />
                  <h3 className="font-display text-lg font-bold">
                    {isHindi ? 'पितृ दोष निवारण के लिए काशी क्यों?' : 'Why Kashi for Pitru Dosh Nivaran?'}
                  </h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isHindi
                    ? 'काशी (वाराणसी) अनादि काल से भगवान शिव की त्रिशूल पर बसी मोक्षदायिनी नगरी है। काशी के पिशाचमोचन तीर्थ, मणिकर्णिका एवं दशाश्वमेध घाट पर त्रिपिंडी श्राद्ध, नारायण बलि एवं पितृ कर्म कराने से पूर्वजों को परम शांति एवं तृप्ति मिलने की प्राचीन धार्मिक मान्यता है।'
                    : 'Kashi (Varanasi) is the eternal spiritual city of liberation. Performing Tripindi Shraddha, Narayan Bali, and Pitru Tarpan at sacred shrines like Pishachmochan Teerth and Manikarnika holds supreme scriptural merit for ancestral peace.'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceData.whyChooseKashiBrahmins.map((item, idx) => (
                  <div key={idx} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{tr(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isPitruDosh && activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
                <h3 className="font-display text-lg font-bold text-primary">
                  {isHindi ? 'पितृ दोष निवारण पूजा परामर्श एवं बुकिंग' : 'Consultation & Booking for Pitru Dosh Puja'}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                  {isHindi
                    ? 'अपनी पारिवारिक स्थिति एवं जन्म कुंडली के अनुसार उचित अनुष्ठान व शुभ मुहूर्त की जानकारी हेतु संपर्क करें।'
                    : 'Contact Shastri Himanshu Tripathi Ji for astrological assessment, auspicious muhurat, and booking rites.'}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <span className="text-xs font-bold uppercase text-primary">
                    {isHindi ? 'मुख्य संपर्क सूत्र' : 'Direct Contact'}
                  </span>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-foreground">
                    <p><strong>{isHindi ? 'शास्त्री जी:' : 'Astrologer:'}</strong> Shastri Himanshu Tripathi</p>
                    <p><strong>{isHindi ? 'फ़ोन नंबर:' : 'Phone:'}</strong> {contact.phone}</p>
                    <p><strong>{isHindi ? 'ईमेल:' : 'Email:'}</strong> {contact.email}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                  <span className="text-xs font-bold uppercase text-primary">
                    {isHindi ? 'शाखाएं एवं सेवा क्षेत्र' : 'Branches & Service Area'}
                  </span>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-foreground">
                    <p><strong>{isHindi ? 'शाखाएं:' : 'Branches:'}</strong> {tr(contact.branches)}</p>
                    <p><strong>{isHindi ? 'सेवा क्षेत्र:' : 'Service Area:'}</strong> {isHindi ? 'वाराणसी, आरा, पटना एवं सम्पूर्ण भारत' : 'Varanasi, Ara, Patna & all across India'}</p>
                    <p><strong>{isHindi ? 'पद्धति:' : 'Method:'}</strong> {isHindi ? 'काशी तीर्थ प्रत्यक्ष अथवा वैदिक यजमान संकल्प' : 'In-person at Kashi or Vedic online sankalp'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STANDARD SERVICE VIEW FOR ALL OTHER SERVICES */}
          {!isPitruDosh && activeTab === 'benefits' && (
            <div className="space-y-6">
              {/* Scriptural & Traditional Reason */}
              <div className="grid gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isHindi ? 'धार्मिक उद्देश्य' : 'Religious Purpose'}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {tr(serviceData.religiousPurpose)}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isHindi ? 'पारंपरिक महत्व' : 'Traditional Significance'}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {tr(serviceData.traditionalReason)}
                  </p>
                </div>
              </div>

              {/* 7 Web Benefits */}
              <div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {isHindi ? `${tr(serviceData.name)} के प्रमुख लाभ` : `Key Benefits of ${tr(serviceData.name)}`}
                </h3>
                <div className="mt-3 space-y-3">
                  {serviceData.websiteBenefits.map((item, idx) => (
                    <div key={idx} className="flex gap-3 rounded-xl border border-border/80 bg-muted/20 p-3.5 transition hover:border-accent/50">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{tr(item.title)}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {tr(item.explanation)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific Categories A-E */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <h4 className="font-display text-base font-bold text-primary">
                  {isHindi ? 'पारंपरिक लाभ वर्गीकरण' : 'Traditional Benefit Classifications'}
                </h4>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'A. आध्यात्मिक लाभ' : 'A. Spiritual Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.spiritual.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'B. धार्मिक लाभ' : 'B. Religious Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.religious.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'C. पारिवारिक एवं गृह लाभ' : 'C. Family & Home Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.family.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'D. व्यक्तिगत लाभ' : 'D. Personal Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.personal.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {serviceData.categories.specificPurpose && serviceData.categories.specificPurpose.length > 0 && (
                    <div className="rounded-xl bg-muted/40 p-3 sm:col-span-2">
                      <span className="text-xs font-bold uppercase text-primary">
                        {isHindi ? 'E. विशिष्ट उद्देश्य एवं संकल्प' : 'E. Specific Purpose & Sankalp'}
                      </span>
                      <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                        {serviceData.categories.specificPurpose.map((pt, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            <span>{tr(pt)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!isPitruDosh && activeTab === 'table' && (
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground sm:text-sm">
                {isHindi
                  ? 'सनातन वैदिक परंपरा के अनुसार इस सेवा के पारंपरिक महत्व की तालिका:'
                  : 'Traditional significance matrix for this ritual according to Vedic tradition:'}
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-border bg-muted/70 text-xs font-bold uppercase text-primary">
                    <tr>
                      <th className="px-4 py-3 sm:px-6">{isHindi ? 'लाभ' : 'Benefit'}</th>
                      <th className="px-4 py-3 sm:px-6">{isHindi ? 'पारंपरिक महत्व' : 'Traditional Significance'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {serviceData.tableRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-foreground sm:px-6">
                          {tr(row.benefit)}
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground sm:px-6">
                          {tr(row.significance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {!isPitruDosh && activeTab === 'kashi' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-card via-accent/5 to-card p-5">
                <div className="flex items-center gap-2.5 text-primary">
                  <ShieldCheck className="size-6 text-accent" />
                  <h3 className="font-display text-lg font-bold">
                    {isHindi ? 'इस पूजा के लिए काशी के ब्राह्मणों को क्यों चुनें?' : 'Why Choose Kashi Brahmins for This Puja?'}
                  </h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isHindi
                    ? 'काशी (वाराणसी) अनादि काल से सनातन धर्म, वेद विद्या एवं कर्मकांड की पावन राजधानी रही है। काशी के विद्वान ब्राह्मणों द्वारा शास्त्रीय विधि-विधान, शुद्ध मंत्रोच्चार एवं पूर्ण संकल्प के साथ अनुष्ठान संपन्न कराया जाता है।'
                    : 'Kashi (Varanasi) is the timeless spiritual capital of Vedic knowledge and ritual traditions. Learned Brahmins of Kashi perform this ceremony with strict adherence to Shastric rites, precise Vedic pronunciation, and proper devotion.'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceData.whyChooseKashiBrahmins.map((item, idx) => (
                  <div key={idx} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{tr(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col gap-3 border-t border-border bg-muted/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {isPitruDosh
              ? (isHindi ? 'पितृ दोष निवारण पूजा के लिए संपर्क करें' : 'Contact for Pitru Dosh Nivaran Puja')
              : (isHindi
                ? 'प्रत्येक अनुष्ठान वैदिक विधि-विधान एवं निष्ठापूर्वक संपन्न कराया जाता है।'
                : 'Each ritual is performed strictly adhering to Vedic traditions and devotion.')}
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href={`${contact.whatsapp}?text=${encodeURIComponent(
                isHindi
                  ? `नमस्ते शास्त्री जी, मुझे "${isPitruDosh ? 'पितृ दोष निवारण पूजा' : tr(serviceData.name)}" के बारे में जानकारी एवं परामर्श चाहिए।`
                  : `Namaste Shastri Ji, I would like consultation and booking details for "${isPitruDosh ? 'Pitru Dosh Nivaran Puja' : tr(serviceData.name)}".`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-maroon-deep shadow transition hover:bg-gold-soft sm:flex-initial sm:text-sm"
            >
              <MessageCircle className="size-4" />
              <span>{isHindi ? 'WhatsApp पर पूछें' : 'WhatsApp'}</span>
            </a>
            <a
              href={contact.tel}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition hover:bg-muted sm:flex-initial sm:text-sm"
            >
              <Phone className="size-4 text-primary" />
              <span>{isHindi ? 'कॉल करें' : 'Call'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

