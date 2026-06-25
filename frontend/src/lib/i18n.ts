import i18n from 'i18next';
import { initReactI18next } from '@/node_modules/react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';

/* ─── ENGLISH ─── */
const en = {
  nav: { home:'Home', about:'About Us', services:'Services', gallery:'Gallery', collections:'Collections', pricing:'Pricing', contact:'Contact', booking:'Booking', concierge:'Concierge' },
  hero: { subtitle:'Bespoke Executive Protocol', title:'Wear Confidence. Wear Class.', description:"Premium Men's Suits Tailored for Modern Gentlemen.", explore:'Explore Services', concierge:'Contact Concierge' },
  home: {
    eyebrow:'Nanat Protocol — Est. 2024', headline:'Elite Protocol & Concierge Services',
    subheadline:'Premium executive lifestyle services across Ethiopia — for diplomats, CEOs, investors, and high-net-worth individuals.',
    cta_primary:'Request Protocol Access', cta_secondary:'View Collections', cta_concierge:'Access Concierge',
    stat_vip:'VIP Engagements', stat_satisfaction:'Client Satisfaction', stat_support:'Protocol Support', stat_cities:'Cities — Adaba & Shashamene',
    collections_eyebrow:'Featured Collection', collections_title:'Signature Pieces', collections_link:'View archive',
    brand_eyebrow:'The Protocol Standard', brand_headline:'Presence is a language. We help you speak it fluently.',
    brand_body:'From diplomatic protocol to bespoke wardrobe curation — every detail is orchestrated so you command the room before you say a word.',
    brand_cta:'Explore services', services_eyebrow:'What we offer', services_title:'Executive Service Suite',
    services_body:'Every touchpoint — from wardrobe to transport to protocol — handled with precision.',
    cta_headline:'Ready to command every room?',
    cta_body:'Serving presidents, ambassadors, CEOs, and international dignitaries with absolute discretion.',
    featured_category_sig:'Signature Suits', featured_category_exec:'Executive Style', featured_category_event:'Event Ready',
    hero_piece_eyebrow:'Signature Piece', hero_piece_title:'Bespoke Executive Wardrobe',
    services: {
      protocol:{ title:'Protocol Management', desc:'Discreet diplomatic and executive protocol for high-profile events.' },
      concierge:{ title:'VIP Concierge', desc:'Round-the-clock personal concierge for dignitaries and executives.' },
      wardrobe:{ title:'Executive Wardrobe', desc:'Bespoke suit curation, styling, and complete wardrobe management.' },
      airport:{ title:'Airport Meet & Greet', desc:'Seamless arrival protocols with premium ground transportation.' },
      representation:{ title:'Business Representation', desc:'Professional representation for meetings, galas, and diplomatic functions.' },
      events:{ title:'Event Protocol', desc:'End-to-end event scenography, staging, and VIP guest management.' },
    },
    features: {
      grooming:{ title:'Executive Grooming', desc:'Precision tailoring and style protocol for the modern leader.' },
      logistics:{ title:'Luxury Logistics', desc:'Seamless executive transport and fleet management across Ethiopia.' },
      events:{ title:'Event Scenography', desc:'Artistic direction and VIP protocol for prestigious gatherings.' },
    },
    experience:{ title:'The Prestige Experience', subtitle:'WHERE QUALITY MEETS COMFORT', desc:'Our protocols are designed for those who value time and image.', cta:'Access Concierge' },
    signature:{ title:'The Signature Groom Package', subtitle:'The Ultimate Transformation', desc:'Our all-inclusive package designed for the modern gentleman on his most important day.' },
    testimonials:{ title:'The Elite Voice', subtitle:'Client Testimonials' },
    cta:{ title:'Your Premium Experience', subtitle:'Starts Here.', access:'Access Concierge' },
  },
  about: {
    title:'Complete Preparation for Every Occasion', subtitle:'The NANAT Legacy',
    description:'NANAT PROTOCOL is a full-service lifestyle and event support provider based in Adaba, with operations in Shashamene.',
    mission:'At NANAT PROTOCOL, we are committed to quality, convenience, and trust.',
    brand_story:'Our services are built around one simple idea: everything you need in one place.',
    quote:"Excellence is not a skill, it's an attitude that we apply to every detail of the protocol.",
    commitment:{ title:'Commitment to Quality', text:'At NANAT PROTOCOL, we are committed to quality, convenience, and trust—helping our clients present their best version, every time.' },
    community:{ title:'Community & Excellence', text:'We support students and the wider community through uniform preparation and professional laundry services.' },
    values:{ title:'Our Pillars', subtitle:'Core Values', excellence:'Excellence', excellence_desc:'Uncompromising Quality', trust:'Trust', trust_desc:'Absolute Reliability', prestige:'Prestige', prestige_desc:'Elite Presentation', professionalism:'Professionalism', professionalism_desc:'Protocol Standards', loyalty:'Loyalty', loyalty_desc:'Client Dedication', satisfaction:'Satisfaction', satisfaction_desc:'Ultimate Comfort' },
    ceo:{ title:'A Message from Leadership', quote:'Presentation goes beyond clothing—it includes overall experience.', message:"Whether it's for a wedding, graduation, or a business event, we ensure our clients are properly dressed and prepared." },
    stats:{ experience:'Years of Protocol', clients:'Executive Clients', garments:'Garments Perfected' },
  },
  services: {
    title:'Elite Protocol Services', subtitle:'PRESTIGE SOLUTIONS', cta:'Contact for Consultation',
    categories:{ all:'All', fashion:'Fashion', logistics:'Logistics', events:'Events', protocol:'Protocol', retail:'Retail', signature:'Signature', rental:'Rental', accessories:'Accessories', maintenance:'Maintenance' },
    list: {
      suits:{ title:'Suit Rental', desc:'Premium suits for weddings, graduations, meetings, and special events.' },
      decoration:{ title:'Decoration Services', desc:'Modern decoration setup for weddings, birthdays, and events.' },
      cars:{ title:'Car Rental', desc:'Luxury and comfortable cars available for rent.' },
      retail_suits:{ title:"Gentlemen's Suits", desc:'Stylish ready-to-wear suits for gentlemen.' },
      laundry:{ title:'Professional Laundry', desc:'Professional laundry and garment cleaning services.' },
      uniforms:{ title:'Uniform Services', desc:'School uniform preparation and supply services.' },
      shoes:{ title:'Premium Shoes', desc:'Classic and modern shoes for formal wear.' },
      ties:{ title:'Executive Neckties', desc:'Elegant neckties and fashion accessories.' },
      watches:{ title:'Luxury Watches', desc:'Luxury and stylish watches for men.' },
      perfumes:{ title:'Designer Perfumes', desc:'Premium perfumes with long-lasting fragrance.' },
      groom:{ title:'Groom Protocol', desc:'Complete groom preparation and fashion styling.' },
      accessories:{ title:"Men's Accessories", desc:'Belts, wallets, cufflinks, and other accessories.' },
    },
  },
  pricing: {
    title:'Our Service Pricing', subtitle:'Elite Tariffs', description:'"Affordable luxury services with premium quality."',
    cta:'View Pricing', getQuote:'Get Quote', limitedEdition:'Limited Edition', signaturePackages:'Signature Packages',
    mostPopular:'Most Popular', exclusiveRank:'Exclusive Rank', protocolStandard:'Protocol Standard', acquirePackage:'Acquire Package',
    weddingPkg:{ title:'Wedding Package', feature1:'Suit for Groom', feature2:'Matching Accessories', feature3:'Groom Styling', feature4:'Event Logistics' },
    vipPkg:{ title:'VIP Groom Package', feature1:'Bespoke Suit', feature2:'Luxury Timepiece', feature3:'Signature Perfume', feature4:'Private Concierge' },
    eventPkg:{ title:'Event Package', feature1:'Standard Rentals', feature2:'Laundry Restoration', feature3:'Group Coordination', feature4:'Fast Delivery' },
  },
  collections: {
    archive:'Archive', title:'The Nanat Archive', subtitle:'Est. 2024',
    description:'"Discover premium suits, watches, perfumes, and elite lifestyle services."',
    joinElite:'Join the Elite', concierge:'Private Concierge', catalogue:'Download Catalogue',
    bookNow:'Book Now', filterBy:'Filter By', bookPiece:'Request Piece', vaultAccess:'Vault Access Level: Gold',
    categories:{ ALL:'ALL', suits:'suits', watch:'watch', perfume:'perfume', shoes:'shoes', car:'car', decoration:'decoration', laundry:'laundry', 'student unifrom':'student uniform', 'suit packages':'suit packages' },
    items:{ 'suit-1':'Midnight Shadow Black','suit-2':'Royal Navy Executive','suit-3':'The Wedding Classic','suit-4':'Double-Breasted Ivory','suit-5':'Vintage Tweed Legacy','suit-6':'Charcoal Silk Blend','suit-7':'The Italian Cut','suit-8':'Burgundy Velvet Ceremony','suit-9':'Graphite Modern Fit','suit-10':'Onyx Tuxedo Elite','suit-11':'White Tuxedo Elite','watch-1':'Chrono Gold Heritage','watch-2':'Deep Sea Mariner','watch-3':'Skeleton Mechanical','watch-4':'Silver Dial Executive','perfume-1':'Midnight Oud Signature','perfume-2':'Royal Musk Extract','perfume-3':'Desert Rose Noir','perfume-4':'Liquid Platinum','car-1':'Phantom Ghost Series','car-2':'Stuttgart Classic Excellence','deco-1':'Imperial Suite Design','laundry-1':'Fabric Care Protocol','laundry-2':'Silk & Wool Sanctuary','uniform-1':'Professional Corporate Identity','shoes-1':'Handcrafted Oxford Gold','shoes-2':'Italian Leather Loafers','package-1':'Executive Collection Bundle','package-2':'Wedding Party Protocol' },
  },
  gallery: {
    title:'The Signature Portfolio', subtitle:'VISUAL EXCELLENCE', viewMore:'Enlarge View',
    cta_title:'Elite Portfolio Access', cta_body:'Our digital gallery showcases only a fraction of our prestige transformations.', cta_contact:'Contact Concierge', cta_brochure:'Download Brochure',
  },
  contact: {
    title:'Global Concierge', subtitle:'CONNECT WITH THE ELITE', establishment:'Our Establishment',
    standardHours:'Standard Hours', prioritySupport:'Priority Support', concierge247:'24/7 Concierge for Members',
    workingHours:'Mon — Sat: 08:30 - 20:00', est:'EST 2024', initializeTerminal:'Initialize Executive Request',
    formDesc:"Fill your requirements below. Your message will be sent directly to our Protocol Manager.",
    labels:{ fullName:'Full Identity', protocolChannel:'Protocol Channel', serviceInterest:'Service Interest', requirements:'Brief Requirements' },
    placeholders:{ name:'Ex: H.E. John Smith', email:'email@address.com', requirements:'Describe your executive needs...' },
    submit:'Secure Send via Telegram',
    services:{ grooming:'Executive Bespoke Grooming', logistics:'Privileged Logistics', events:'Event Scenography', protocol:'VIP Protocol Management', general:'General Inquiry' },
    branches:{ adaba:{ name:'Adaba Main Hub', location:'Arsi Zone', address:'Main Commercial Terminal, Adaba, Arsi, Ethiopia', focus:'Main Branch Hub' }, shashamene:{ name:'Shashamene Prestige', location:'West Arsi', address:'Executive Plaza, Central Shashamene, Ethiopia', focus:'Prestige Extension' } },
  },
  booking: {
    title:'Booking', subtitle:'Secure Your Slot',
    sidebar:{ title:'Secure Your Slot', description:"Ready to experience the pinnacle of executive style? Fill out our luxury booking terminal.", prioritySupport:'Priority Support', quote:'"We handle the fine details, so you can command the room."', location:'Adaba & Shashamene' },
    form:{ preferredDate:'Preferred Date', preferredTime:'Preferred Time', selectService:'Select Service', submit:'Confirm Booking Terminal' },
    success:{ title:'Reservation Confirmed', details:'Confirmed Details', at:'at', message:'Your request for {{service}} has been prioritized. A protocol officer will contact you within the hour.', return:'Return to Portfolio' },
  },
  footer:{ hubs:'Our Hubs', links:'Quick Links', product:'Product', company:'Company', tagline:'Refining the Art of Presence', rights:'All Rights Reserved.', pieces_total:'pieces total', contact_concierge:'Contact Concierge', download_brochure:'Download Brochure' },
  common:{ readMore:'Read More', selectLanguage:'Select Language', location:'Location', phone:'Phone', hours:'Business Hours', viewAll:'View All Services', branches:'Our Branches', telegram:'Telegram', local_excellence:'Local Excellence', branches_desc:'Strategically positioned to serve the most discerning clients across the region.', bookNow:'Book Now', elevateStyle:'Elevate Your Style', joinElite:'Join the Elite', experienceLuxury:'Experience Luxury With', whyChooseUs:'Why Choose Nanat', distinction:'THE PROTOCOL OF DISTINCTION', trustedService:'Trusted Service', trustedServiceDesc:'A legacy of excellence and discrete protocol management for high-profile clients.', premiumQuality:'Premium Quality', premiumQualityDesc:'Meticulously crafted fabrics and world-class accessories that define executive class.', affordableLuxury:'Affordable Luxury', affordableLuxuryDesc:'Experience the grandeur of high fashion at competitive rates without compromise.', fastDelivery:'Fast Delivery', fastDeliveryDesc:'Our elite logistics fleet ensures your assets arrive with precision timing.', professionalTeam:'Professional Team', professionalTeamDesc:'Elite styling consultants and master tailors dedicated to your personal protocol.', happyClients:'Happy Clients', suitRentals:'Suit Rentals', premiumServices:'Premium Services' },
};

/* ─── AMHARIC ─── */
const am = {
  nav: { home:'መነሻ', about:'ስለ እኛ', services:'አገልግሎቶች', gallery:'ጋለሪ', collections:'ስብስቦች', pricing:'ዋጋ', contact:'እኛን ያግኙ', booking:'ቦታ ይያዙ', concierge:'ረዳት' },
  hero: { subtitle:'ልዩ የስራ አስፈፃሚ ፕሮቶኮል', title:'ግርማዊ ልብስ። ግርማዊ ማንነት።', description:'ለዘመናዊ መሪዎች የተዘጋጀ ግርማዊ አለባበስ።', explore:'አገልግሎቶችን ያስሱ', concierge:'ረዳትን ያግኙ' },
  home: {
    eyebrow:'ናናት ፕሮቶኮል — ከ2024 ጀምሮ', headline:'ልዩ ፕሮቶኮል እና ኮንሲዬርጂ አገልግሎቶች',
    subheadline:'በኢትዮጵያ ውስጥ ፕሪሚየም የስራ አስፈፃሚ የአኗኗር ዘይቤ አገልግሎቶች',
    cta_primary:'ፕሮቶኮል ደረሱ', cta_secondary:'ስብስቦችን ይመልከቱ', cta_concierge:'ኮንሲዬርጂ ያግኙ',
    stat_vip:'ቪአይፒ ተሳትፎዎች', stat_satisfaction:'የደንበኛ እርካታ', stat_support:'ፕሮቶኮል ድጋፍ', stat_cities:'ከተሞች — አዳባ እና ሻሸመኔ',
    collections_eyebrow:'ተለይቶ የቀረበ ስብስብ', collections_title:'ፊርማ ዕቃዎች', collections_link:'መዝገብ ይመልከቱ',
    brand_eyebrow:'የፕሮቶኮል ደረጃ', brand_headline:'ቅርበት ቋንቋ ነው። እንዲናገሩት እንረዳዎታለን።',
    brand_body:'ከዲፕሎማሲ ፕሮቶኮል እስከ ቤስፖክ ልብስ ኩሬሽን — እርስዎ ቃሉን ሳይናገሩ ፊቱን እንዲቆጣጠሩ እያንዳንዱ ዝርዝር ቅንጅት ይሰጣል።',
    brand_cta:'አገልግሎቶችን ያስሱ', services_eyebrow:'የምናቀርበው', services_title:'የስራ አስፈፃሚ አገልግሎቶች',
    services_body:'ከልብስ እስከ ትራንስፖርት እና ፕሮቶኮል — ሁሉም ነጥቦች በትክክል ይያዛሉ።',
    cta_headline:'ለእያንዳንዱ ቤት ዝግጁ ነዎት?', cta_body:'ፕሬዚዳንቶችን፣ አምባሳደሮችን፣ ዋና ሥራ አስፈፃሚዎችን እና አለም አቀፍ ሹሞችን ያገለግላሉ።',
    featured_category_sig:'ፊርማ ሱቶች', featured_category_exec:'ኤክስኪዩቲቭ ስታይል', featured_category_event:'ዝግጅት ዝግጁ',
    hero_piece_eyebrow:'ፊርማ ዕቃ', hero_piece_title:'ቤስፖክ ኤክስኪዩቲቭ ልብስ',
    services: {
      protocol:{ title:'ፕሮቶኮል አስተዳደር', desc:'ለከፍተኛ ደረጃ ዝግጅቶች ሚስጥራዊ ዲፕሎማሲ ፕሮቶኮል።' },
      concierge:{ title:'ቪአይፒ ኮንሲዬርጂ', desc:'ለሹሞች እና ዋና ሥራ አስፈፃሚዎች ቀኑን ሙሉ አገልግሎት።' },
      wardrobe:{ title:'ኤክስኪዩቲቭ ልብስ', desc:'ቤስፖክ ሱት ኩሬሽን እና ሙሉ የልብስ አስተዳደር።' },
      airport:{ title:'አውሮፕላን ቦታ አቀባበል', desc:'ፕሪሚየም ትራንስፖርት ጋር ቀላል ሽያጭ ወደ ፕሮቶኮሎች።' },
      representation:{ title:'ቢዝነስ ውክልና', desc:'ለስብሰባዎች፣ ጋሎዎች እና ዲፕሎማሲ ተግባራት ሙያዊ ውክልና።' },
      events:{ title:'ዝግጅት ፕሮቶኮል', desc:'ከጫፍ እስከ ጫፍ ዝግጅት ቅርፃቅርፅ እና ቪአይፒ እንግዳ አስተዳደር።' },
    },
    features:{ grooming:{ title:'ግርማዊ አለባበስ', desc:'ጥበብ ያረፈበት ስፌትና ለዘመናዊ መሪዎች የሚመጥን ስነ-ስርዓት።' }, logistics:{ title:'ልዩ ትራንስፖርት', desc:'በኢትዮጵያ ቀልጣፋ ሎጅስቲክስ።' }, events:{ title:'ዝግጅት ድባብ ፈጠራ', desc:'ለተከበሩ ስብሰባዎች ጥበባዊ አመራር።' } },
    experience:{ title:'የክብር ተሞክሮ', subtitle:'ጥራት ከምቾት ጋር', desc:'ዝርዝሮቹን በጥበብ እንይዛለን።', cta:'ረዳትን ያግኙ' },
    signature:{ title:'ልዩ የፊርማ ሙሽራ ፓኬጅ', subtitle:'ግርማዊ ለውጥ', desc:'ሁሉንም ያካተተ ጥቅል።' },
    testimonials:{ title:'የላቁ ድምጾች', subtitle:'የተከበሩ ደንበኞች ምስክርነት' },
    cta:{ title:'የእርስዎ ፕሪሚየም ተሞክሮ', subtitle:'እዚህ ይጀምራል::', access:'ረዳትን ያግኙ' },
  },
  about: { title:'ለእያንዳንዱ አጋጣሚ የተሟላ ዝግጅት', subtitle:'የናናት ታሪካዊ ቅርስ', description:'ናናት ፕሮቶኮል በአዳባ ላይ ያተኮረ ሙሉ አገልግሎት ሰጪ ተቋም ነው።', mission:'ለላቀ ጥራት ቁርጠኝነት አለን።', brand_story:'አገልግሎቶቻችን ሁሉን ያካተቱ ናቸው።', quote:'ጥራት ችሎታ አይደለም፤ አመለካከት ነው።', commitment:{ title:'ለጥራት ያለን ቁርጠኝነት', text:'ደንበኞቻችን ምርጥ ማንነታቸውን እንዲያሳዩ ቁርጠኞች ነን።' }, community:{ title:'ማህበረሰብና ላቀነት', text:'ዩኒፎርምና ልብስ ማጠቢያ አገልግሎቶች እናቀርባለን።' }, values:{ title:'ምሶሶቻችን', subtitle:'ዋና እሴቶቻችን', excellence:'ላቀነት', excellence_desc:'የማይቀየር ጥራት', trust:'ታማኝነት', trust_desc:'ፍጹም አስተማማኝነት', prestige:'ግርማዊነት', prestige_desc:'ምርጥ አቀራረብ', professionalism:'ሙያዊነት', professionalism_desc:'የፕሮቶኮል ደረጃዎች', loyalty:'ታማኝነት', loyalty_desc:'ለደንበኛ ታማኝነት', satisfaction:'እርካታ', satisfaction_desc:'የላቀ እርካታ' }, ceo:{ title:'ከአመራሩ የተላለፈ መልዕክት', quote:'አቀራረብ ከልብስ በላይ ነው።', message:'ደንበኞቻችን በአግባቡ መልበሳቸውን እናረጋግጣለን።' }, stats:{ experience:'የፕሮቶኮል ዓመታት', clients:'ክቡራን ደንበኞች', garments:'ጥበብ ያረፈባቸው አልባሳት' } },
  services: { title:'ልዩ የፕሮቶኮል አገልግሎቶች', subtitle:'የክብር መፍትሄዎች', cta:'ለምክክር ያግኙን', categories:{ all:'ሁሉም', fashion:'ፋሽን', logistics:'ሎጅስቲክስ', events:'ዝግጅቶች', protocol:'ፕሮቶኮል', retail:'ሽያጭ', signature:'ልዩ ፊርማ', rental:'ኪራይ', accessories:'መለዋወጫዎች', maintenance:'ጥገና' }, list:{ suits:{ title:'የልብስ ኪራይ', desc:'ለሰርግ፣ ለምረቃ፣ ለስብሰባዎች ምርጥ ልብሶች።' }, decoration:{ title:'የጌጣጌጥ አገልግሎቶች', desc:'ዘመናዊ የጌጣጌጥ ዝግጅት።' }, cars:{ title:'የመኪና ኪራይ', desc:'ምርጥ መኪናዎች ለኪራይ።' }, retail_suits:{ title:'የወንዶች ልብሶች', desc:'ዘመናዊ ዝግጁ አልባሳት።' }, laundry:{ title:'ፕሮፌሽናል ልብስ ማጠቢያ', desc:'ጥራት ያለው ፅዳት አገልግሎት።' }, uniforms:{ title:'የዩኒፎርም አገልግሎቶች', desc:'ዝግጅት እና አቅርቦት።' }, shoes:{ title:'ፕሪሚየም ጫማዎች', desc:'ክላሲክ ጫማዎች።' }, ties:{ title:'ክራቫቶች', desc:'ሚያማምሩ ክራቫቶች።' }, watches:{ title:'የእጅ ሰዓቶች', desc:'ምርጥ ሰዓቶች።' }, perfumes:{ title:'ሽቶዎች', desc:'ምርጥ ሽቶዎች።' }, groom:{ title:'የሙሽራ ፕሮቶኮል', desc:'ሙሉ ዝግጅት።' }, accessories:{ title:'መለዋወጫዎች', desc:'ቀበቶዎች ወዘተ።' } } },
  pricing: { title:'የአልግሎቶቻችን ዋጋ', subtitle:'ልዩ ታሪፍ', description:'ጥራት ያላቸው አገልግሎቶች።', cta:'ዋጋዎችን ይመልከቱ', getQuote:'ዋጋ ይጠይቁ', limitedEdition:'ውስን እትም', signaturePackages:'ልዩ ፓኬጆች', mostPopular:'በብዛት የተመረጠ', exclusiveRank:'ልዩ ደረጃ', protocolStandard:'የፕሮቶኮል ደረጃ', acquirePackage:'ፓኬጁን ያግኙ', weddingPkg:{ title:'የሰርግ ፓኬጅ', feature1:'ልብስ ለሙሽራ', feature2:'ተዛማጅ መለዋወጫዎች', feature3:'የሙሽራ ስታይሊንግ', feature4:'ዝግጅት ሎጅስቲክስ' }, vipPkg:{ title:'ቪአይፒ ፓኬጅ', feature1:'ልዩ ልብስ', feature2:'ሰዓት', feature3:'ሽቶ', feature4:'ኮንሲዬርጂ' }, eventPkg:{ title:'የዝግጅት ፓኬጅ', feature1:'ኪራዮች', feature2:'ልብስ እድሳት', feature3:'ቡድን ቅንጅት', feature4:'ፈጣን አቅርቦት' } },
  collections: { archive:'ማህደር', title:'የናናት መዝገብ', subtitle:'ከ2024 እ.ኤ.አ', description:'ምርጥ ልብሶችን ያግኙ።', joinElite:'ግርማውያንን ይቀላቀሉ', concierge:'ኮንሲዬርጂ', catalogue:'ካታሎግ ያውርዱ', bookNow:'አሁን ይዘዙ', filterBy:'ይለዩ', bookPiece:'ዕቃውን ይጠይቁ', vaultAccess:'ደረጃ: ወርቅ', categories:{ ALL:'ሁሉም', suits:'ልብሶች', watch:'ሰዓት', perfume:'ሽቶ', shoes:'ጫማዎች', car:'መኪና', decoration:'ጌጣጌጥ', laundry:'ልብስ ማጠቢያ', 'student unifrom':'ዩኒፎርም', 'suit packages':'ፓኬጆች' }, items:{ 'suit-1':'ሚድናይት ሻዶ ጥቁር','suit-2':'ሮያል ኔቪ','suit-3':'ክላሲክ ሰርግ','suit-4':'ደብል ብሬስትድ','suit-5':'ቪንቴጅ','suit-6':'ቻርኮል','suit-7':'ኢጣሊያ','suit-8':'በርገንዲ','suit-9':'ግራፋይት','suit-10':'ኦኒክስ','suit-11':'ነጭ ታክሲዶ','watch-1':'ክሮኖ ጎልድ','watch-2':'ዲፕ ሲ','watch-3':'ስኬልተን','watch-4':'ሲልቨር','perfume-1':'ሚድናይት ኡድ','perfume-2':'ሮያል','perfume-3':'ዴዘርት ሮዝ','perfume-4':'ፕላቲነም','car-1':'ፋንተም','car-2':'ስቱትጋርት','deco-1':'ኢምፔሪያል','laundry-1':'ፋብሪክ ኬር','laundry-2':'ሲልክ','uniform-1':'ኮርፖሬት','shoes-1':'ኦክስፎርድ','shoes-2':'ሎፈር','package-1':'ኤክስኪዩቲቭ ባንድል','package-2':'ሰርግ ፕሮቶኮል' } },
  gallery: { title:'ልዩ ፖርትፎሊዮ', subtitle:'ጥበባዊ እይታ', viewMore:'አተልቆ ይመልከቱ', cta_title:'ፖርትፎሊዮ', cta_body:'ዲጂታል ጋለሪያችን ለቅርብ ቀጠሮ ያግኙን።', cta_contact:'ኮንሲዬርጂ ያግኙ', cta_brochure:'ብሮሸር ያውርዱ' },
  contact: { title:'ግሎባል ኮንሲዬር', subtitle:'ከምርጦች ጋር ይገናኙ', establishment:'ማዕከላቶቻችን', standardHours:'መደበኛ ሰዓታት', prioritySupport:'ቅድሚያ ድጋፍ', concierge247:'24/7 ለደንበኞች', workingHours:'ሰኞ — ቅዳሜ: 2:30 - 2:00', est:'ከ2024', initializeTerminal:'ዝርዝሩን ይሙሉ', formDesc:'መስፈርቶቻቸውን ይሙሉ።', labels:{ fullName:'ሙሉ ስም', protocolChannel:'መስመር', serviceInterest:'አገልግሎት', requirements:'መስፈርቶች' }, placeholders:{ name:'ምሳሌ: አቶ ዮሐንስ', email:'ኢሜይል', requirements:'ፍላጎቶችዎን ይግለጹ...' }, submit:'ይላኩ', services:{ grooming:'ዝግጅት', logistics:'ሎጅስቲክስ', events:'ዝግጅቶች', protocol:'ፕሮቶኮል', general:'አጠቃላይ' }, branches:{ adaba:{ name:'የአዳባ ዋና ማዕከል', location:'አርሲ ዞን', address:'ዋና ተርሚናል, አዳባ, ኢትዮጵያ', focus:'ዋና ቅርንጫፍ' }, shashamene:{ name:'ሻሸመኔ ፕሪስቲጅ', location:'ምዕራብ አርሲ', address:'ሻሸመኔ, ኢትዮጵያ', focus:'ፕሪስቲጅ' } } },
  booking: { title:'ቦታ ይያዙ', subtitle:'ቦታዎን ያስከብሩ', sidebar:{ title:'ቦታዎን ያስከብሩ', description:'ጥያቄዎን ለመጀመር ቅጹን ይሙሉ።', prioritySupport:'ቅድሚያ ድጋፍ', quote:'"እኛ ዝርዝሮቹን እንይዛለን::"', location:'አዳባ እና ሻሸመኔ' }, form:{ preferredDate:'ቀን', preferredTime:'ሰዓት', selectService:'አገልግሎት ይምረጡ', submit:'ያረጋግጡ' }, success:{ title:'ተረጋግጧል', details:'ዝርዝሮች', at:'በ', message:'ጥያቄዎ ቅድሚያ ተሰጥቶታል።', return:'ተመለሱ' } },
  footer:{ hubs:'ማዕከላቶቻችን', links:'ፈጣን ሊንኮች', product:'ምርቶች', company:'ኩባንያ', tagline:'ግርማዊ አቀራረብን የማጥራት ጥበብ', rights:'መብቱ በህግ የተጠበቀ ነው።', pieces_total:'ዕቃዎች', contact_concierge:'ኮንሲዬርጂ ያግኙ', download_brochure:'ብሮሸር ያውርዱ' },
  common:{ readMore:'ተጨማሪ ያንብቡ', selectLanguage:'ቋንቋ ይምረጡ', location:'አድራሻ', phone:'ስልክ', hours:'ሰዓታት', viewAll:'ሁሉንም ያሳዩ', branches:'ቅርንጫፎቻችን', telegram:'ቴሌግራም', local_excellence:'አካባቢያዊ ብቃት', branches_desc:'ለምርጥ ደንበኞቻችን ዝግጁ ነን።', bookNow:'አሁን ይዘዙ', elevateStyle:'ስታይልዎን ያሳድጉ', joinElite:'ምርጦቹን ይቀላቀሉ', experienceLuxury:'ፕሪሚየም ያግኙ', whyChooseUs:'ለምን ናናትን ይምረጣሉ?', distinction:'ልዩ ፕሮቶኮል', trustedService:'ታማኝ አገልግሎት', trustedServiceDesc:'ለምርጥ ደንበኞች ታማኝ።', premiumQuality:'ከፍተኛ ጥራት', premiumQualityDesc:'ዓለም ደረጃ ምርቶች።', affordableLuxury:'ተመጣጣኝ', affordableLuxuryDesc:'ፕሪሚየም ተሞክሮ።', fastDelivery:'ፈጣን ማድረስ', fastDeliveryDesc:'ወቅቱን ጠብቀን እናደርሳለን።', professionalTeam:'ሙያዊ ቡድን', professionalTeamDesc:'ምርጥ አማካሪዎቻችን።', happyClients:'ደስተኛ ደንበኞች', suitRentals:'ኪራዮች', premiumServices:'ፕሪሚየም አገልግሎቶች' },
};

/* ─── OROMO ─── */
const om = {
  nav: { home:'Mana', about:"Waa'ee Keenya", services:'Tajaajiloota', gallery:'Galaree', collections:'Kolekshinii', pricing:'Gatii', contact:'Nu Quunnamaa', booking:'Bakka Qabadhu', concierge:'Konseeryajii' },
  hero: { subtitle:'Pirootokoolii Geggeessitootaa', title:'Uffannaa Kabajamaa. Eenyummaa Olaanaa.', description:"Uffannaa dhuunfaa geggeessitoota ammayyaaf qophaa'e.", explore:'Tajaajiloota Filatamaa', concierge:'Nu Quunnamaa' },
  home: {
    eyebrow:'Nanat Protocol — Est. 2024', headline:'Pirootokoolii fi Tajaajila Konseerjii Olaanaa',
    subheadline:'Tajaajila jireenyaa geggeessitootaa sadarkaa olaanaa Itoophiyaa keessatti',
    cta_primary:'Seensa Pirootokoolii Gaafadhu', cta_secondary:'Kolekshinii Ilaali', cta_concierge:'Konseerjii Argadhu',
    stat_vip:'Hirmaannaa VIP', stat_satisfaction:'Qannoo Maamiltootaa', stat_support:'Deeggarsa Pirootokoolii', stat_cities:'Magaalaalee — Adaabaa & Shaashamannee',
    collections_eyebrow:'Kolekshinii Filatame', collections_title:'Meeshaalee Mallattoo', collections_link:'Kuusaa Ilaali',
    brand_eyebrow:'Sadarkaa Pirootokoolii', brand_headline:'Argamni afaan dha. Sirriitti akka dubbattan gargaarra.',
    brand_body:"Pirootokoolii diiploomaasii irraa hanga qindeessuu uffataa bespoke — iddoo hundumaatti ol'aantummaa raawwanna.",
    brand_cta:'Tajaajiloota Filadhu', services_eyebrow:'Maal dhiheessina', services_title:'Tajaajila Geggeessitootaa',
    services_body:"Hunda — uffataa irraa hanga geejjibaatti fi pirootokoolii — sirriitti qindaa'a.",
    cta_headline:"Bakka hundumaatti ol'aantummaa agarsisuuf qophiidhaa?",
    cta_body:'Prezidaantoota, ambaasaaderootaa, hooggantoota fi keessummaa addunyaa tajaajiluu ogummaan raawwanna.',
    featured_category_sig:'Suutiiwwan Mallattoo', featured_category_exec:'Bifa Geggeessitootaa', featured_category_event:"Sagantaatiif Qophaa'e",
    hero_piece_eyebrow:'Meeshaa Mallattoo', hero_piece_title:'Uffata Geggeessitootaa Bespoke',
    services: {
      protocol:{ title:'Bulchiinsa Pirootokoolii', desc:'Pirootokoolii diiploomaasii sagantaalee sadarkaa olaanaa.' },
      concierge:{ title:'Konseerjii VIP', desc:"Tajaajila dhuunfaa sa'aatii 24 geggeessitoota." },
      wardrobe:{ title:'Uffata Geggeessitootaa', desc:'Qindeessuu suutii bespoke fi bulchiinsa uffataa guutuu.' },
      airport:{ title:'Simaa Buufata Xiyyaaraa', desc:'Dhufaatii fi deemsa mijaawaa pirootokoolii.' },
      representation:{ title:"Bakka Bu'uumsa Daldalaa", desc:'Bakka bu\'uumsa ogummaa walgahiiwwaniif.' },
      events:{ title:'Pirootokoolii Sagantaa', desc:'Hooggansa sagantaa irraa hanga dhumaatti.' },
    },
    features:{ grooming:{ title:'Uffannaa Kabajamaa', desc:'Akaakuu uffannaa dhuunfaa fi pirootokoolii.' }, logistics:{ title:'Geejjiba Filatamaa', desc:'Tajaajila geejjiba Itoophiyaa keessatti.' }, events:{ title:'Qindoomina Sagantaa', desc:'Qajeelfama ogummaa fi pirootokoolii VIP.' } },
    experience:{ title:'Muuxannoo Kabajamaa', subtitle:'BAKKA QULQULLINNI FI MIJAATAAN WALITTI DHUFAN', desc:"Pirootokoolliwwan keenya warra yeroo fi bifa ofii agarsiisuun kabaja kennaniif qophaa'an.", cta:'Tajaajila Argadhu' },
    signature:{ title:'Paakeejii Mallattoo', subtitle:'Jijjiirama Olaanaa', desc:"Paakeejii hunda hammate kan guyyaa keessan isa murteessaa irratti geggeessitoota ammayyaaf qophaa'e." },
    testimonials:{ title:'Sagalee Kabajamaa', subtitle:"Dhugaa-ba'umsa Maamiltootaa" },
    cta:{ title:'Muuxannoon Kee Olaanaan', subtitle:'Asitti Jalqaba.', access:'Tajaajila Argadhu' },
  },
  about: { title:'Qophii Guutuu Yeroo Hundumaaf', subtitle:'Dhaalmaya NANAT', description:"PIROOTOKOOLIIN NANAT kenna tajaajila jireenyaa fi deeggarsa sagantaa guutuu Adaamaa keessatti kan hundaa'e dha.", mission:'Pirootokoolii NANAT keessatti qulqullina fi amanamummaaf kutannoo qabna.', brand_story:"Tajaajiloonni keenya yaada salphaa tokko irratti ijaaraman: waan isin barbaachisun hunda iddoo tokkotti argachuu.", quote:"Qulqullinni dandeettii qofa miti, pirootokoolii keenya keessatti dhimmoota hunda irratti bifa ogummaa qabuun hojjennu dha.", commitment:{ title:'Kutannoo Qulqullinaa', text:"Pirootokoolii NANAT keessatti qulqullina fi amanamummaaf kutannoo qabna—maamiltoota keenya yeroo hunda bifa isaanii isa gaarii akka agarsiisan gargaarra." }, community:{ title:'Hawaasa fi Olaantummaa', text:"Qophii yuunivarmichaa fi tajaajila dhiqannaa uffataa ogummaan hawaasa bal'aa deeggarra." }, values:{ title:'Utubaa Keenya', subtitle:'Duudhaalee Keenya', excellence:'Olaantummaa', excellence_desc:'Qulqullina Amansiisaa', trust:'Amanamummaa', trust_desc:'Amanamummaa Guutuu', prestige:'Kabaja', prestige_desc:'Agarsiisa Olaanaa', professionalism:'Ogummaa', professionalism_desc:'Sadarkaa Pirootokoolii', loyalty:'Amanummaa', loyalty_desc:'Kutannoo Maamilaa', satisfaction:'Qannoo', satisfaction_desc:'Qannoo Olaanaa' }, ceo:{ title:'Ergaa Hooggansa irraa', quote:'Bifa ofii agarsiisuun uffata qofa miti—muuxannoo walii galaa of keessaa qaba.', message:"Cidhaaf, eebbaaf ykn sagantaa daldalaaf maamiltoota keenya akka gaariitti uffatanii fi qophaa'anii akka argaman ni taasisna." }, stats:{ experience:'Waggaa Pirootokoolii', clients:'Maamiltoota Olaanoo', garments:"Uffata Ogummaan Qophaa'e" } },
  services: { title:'Tajaajiloota Pirootokoolii Olaanaa', subtitle:'FURMAATA KABAJAA', cta:'Gorsaaf Nu Quunnamaa', categories:{ all:'Hunda', fashion:'Faashinii', logistics:'Loojistiksii', events:'Sagantaawwan', protocol:'Pirootokoolii', retail:'Daldala', signature:'Mallattoo', rental:'Kiraa', accessories:'Faayalee', maintenance:'Suphaa' }, list:{ suits:{ title:'Kiraa Suutii', desc:"Cidhaaf, eebbaaf, walga'ii fi sagantaa addaatiif kan ta'an." }, decoration:{ title:'Tajaajila Faayaa', desc:'Cidhaaf, guyyaa dhalootaa fi sagantaaleef qophii faayaa ammayyaa.' }, cars:{ title:'Kiraa Konkolaataa', desc:"Konkolaattota mijaawaa fi qaalii kiraaf qophaa'an." }, retail_suits:{ title:'Suutii Dhiiraa', desc:"Suutiiwwan dhiira ammayyaa qophaa'anii jiran." }, laundry:{ title:'Dhiqannaa Ogummaa', desc:'Tajaajila dhiqannaa uffataa fi qulqullinaa.' }, uniforms:{ title:'Tajaajila Yuunivarmichaa', desc:'Qophii fi dhiyeessii yuunivarmichaa.' }, shoes:{ title:'Kopphee Filatamoof', desc:"Kopphee ammayyaa fi klasiikaa sagantaa kabajaatif ta'an." }, ties:{ title:'Kiraavaattii', desc:'Kiraavaattii fi faaya uffataa bifa miidhagaa qaban.' }, watches:{ title:"Sa'aatii Harkaa", desc:"Sa'atii harkaa dhiiraa kan bifa qaalii qaban." }, perfumes:{ title:'Urgooftuu', desc:'Urgooftuuwwan qulqulluu yeroo dheeraa turan.' }, groom:{ title:'Pirootokoolii Misirroo', desc:'Qophii misirroo fi qindeessuu bifa faashinii guutuu.' }, accessories:{ title:'Faaya Dhiiraa', desc:'Qabattoo, boorsaa harkaa fi faayalee dhiiraa biro.' } } },
  pricing: { title:'Gatii Tajaajila Keenyaa', subtitle:'Taarifa Olaanaa', description:'"Tajaajila qaalii gatii mijaawaan."', cta:'Gatii Ilaali', getQuote:'Gatii Gaafadhu', limitedEdition:"Maxxansa Murtaa'aa", signaturePackages:'Paakeejiiwwan Mallattoo', mostPopular:"Baay'ee Kan Filatame", exclusiveRank:'Sadarkaa Addaa', protocolStandard:'Sadarkaa Pirootokoolii', acquirePackage:'Paakeejicha Argadhu', weddingPkg:{ title:'Paakeejii Cidhaa', feature1:'Suutii Misirrootiif', feature2:"Faayalee Wal-fakkatan", feature3:"Qindaa'ina Misirroo", feature4:'Loojistiiksii Sagantaa' }, vipPkg:{ title:'Paakeejii Misirroo VIP', feature1:'Suutii Addatti Hodhame', feature2:"Sa'aatii Harkaa Qaalii", feature3:'Urgooftuu Mallattoo', feature4:'Gargaaraa Dhuunfaa' }, eventPkg:{ title:'Paakeejii Sagantaa', feature1:'Kiraa Standardii', feature2:'Suphaa Dhiqannaa', feature3:"Qindaa'ina Garee", feature4:'Dhiyeessii Saffisaa' } },
  collections: { archive:'Kuusaa', title:'Kuusaa Nanat', subtitle:'Est. 2024', description:'"Suutiiwwan qaalii argadhu."', joinElite:'Oolummaa Keenya Join godhaa', concierge:'Gargaaraa Dhuunfaa', catalogue:'Kaataalogii Buufadhaa', bookNow:'Amma Book godhaa', filterBy:'Akkaataan Fili', bookPiece:'Meeshaa Gaafadhu', vaultAccess:"Sadarkaa Seensaa Mankuusa: Warqii", categories:{ ALL:'HUNDA', suits:'Suutiiwwan', watch:"Sa'aatii", perfume:'Urgooftuu', shoes:'Kopphee', car:'Konkolaataa', decoration:'Faaya', laundry:'Dhiqannaa', 'student unifrom':'Yuunivarmichaa', 'suit packages':'Paakeejii Suutii' }, items:{ 'suit-1':'Midnight Shadow Gurraacha','suit-2':'Royal Navy Executive','suit-3':'Filannoo Cidha Klasiikaa','suit-4':'Double-Breasted Ivory','suit-5':'Vintage Tweed Legacy','suit-6':'Charcoal Silk Blend','suit-7':'Akkaataa Xaaliyaanii','suit-8':'Burgundy Velvet Ceremony','suit-9':'Graphite Modern Fit','suit-10':'Onyx tuxedo Elite','suit-11':'White Tuxedo Elite','watch-1':'Chrono Gold Heritage','watch-2':'Deep Sea Mariner','watch-3':'Skeleton Mechanical','watch-4':'Silver Dial Executive','perfume-1':'Midnight Oud Signature','perfume-2':'Royal Musk Extract','perfume-3':'Desert Rose Noir','perfume-4':'Liquid Platinum','car-1':'Phantom Ghost Series','car-2':'Stuttgart Classic Excellence','deco-1':'Imperial Suite Design','laundry-1':'Fabric Care Protocol','laundry-2':'Silk & Wool Sanctuary','uniform-1':'Professional Corporate Identity','shoes-1':'Handcrafted Oxford Gold','shoes-2':'Italian Leather Loafers','package-1':'Executive Collection Bundle','package-2':'Wedding Party protocol' } },
  gallery: { title:'Poortifooliyoo Mallattoo', subtitle:'OLAANTUMMAA ARGAITII', viewMore:"Bal'isii Ilaali", cta_title:'Seensaa Pootifooliyoo Olaanaa', cta_body:'Galareen dijitaalaa keenya xiqqoo qofa agarsiisa.', cta_contact:'Koonseeranjii Quunnamaa', cta_brochure:'Birooshara Buufadhu' },
  contact: { title:'Global Concierge', subtitle:'OOLUMMAA KEENYA QUUNNAMAA', establishment:'Dhaabbata Keenya', standardHours:"Sa'aatii Hojii", prioritySupport:'Deeggarsa Prioritii', concierge247:'Tajaajila Miseensotaaf 24/7', workingHours:'Wiixata — Sanbata: 08:30 - 20:00', est:'EST 2024', initializeTerminal:'Unka Jalqabaa', formDesc:'Ulaagaalee keessan guutaa.', labels:{ fullName:'Eenyummaa Guutuu', protocolChannel:'Toora Pirootokoolii', serviceInterest:'Fedhii Tajaajilaa', requirements:'Ibsa Gabaabaa' }, placeholders:{ name:'Fkn: H.E. John Smith', email:'email@address.com', requirements:'Fedhii pirootokoolii keessan ibsaa...' }, submit:'Telegiraamaan Saffisaan Ergi', services:{ grooming:"Qophii Misirroo Olaanaa", logistics:'Loojistiiksii Addaa', events:"Qindaa'ina Sagantaa", protocol:'Bulchiinsa Pirootokoolii VIP', general:'Gaaffii Waliigalaa' }, branches:{ adaba:{ name:'Wiirtuu Adabaa', location:'Godina Arsii', address:'Teerminaala Daldala Olaanaa, Adaabaa, Arsii, Itoophiyaa', focus:'Wiirtuu Damee Olaanaa' }, shashamene:{ name:'Prestiijii Shasamannee', location:'Arsii Lixaa', address:'Executive Plaza, Shasamannee Giddu-galaa, Itoophiyaa', focus:'Damee Addaa Shasamannee' } } },
  booking: { title:'Bakka Qabadhu', subtitle:'Bakka keessan kabachiisaa', sidebar:{ title:'Bakka keessan kabachiisaa', description:"Sadarkaa olaanaa dhandhamuuf qophiidhaa? Terminal nannoo keenyaa guutaa.", prioritySupport:'Deeggarsa Prioritii', quote:'"Nutti bal\'ina xixinnoo ni hordofna."', location:'Adaabaa fi Shaashamannee' }, form:{ preferredDate:'Guyyaa Filatame', preferredTime:"Sa'aatii Filatame", selectService:'Tajaajila Filadhu', submit:'Terminaala Bakka Qabachuu Mirkaneessi' }, success:{ title:"Bakka Qabachuun Mirkanaa'ee Jira", details:"Ibsa Mirkanaa'ee", at:"sa'aatii", message:"Gaaffiin keessan {{service}}'f dursa argatee jira.", return:"Gara Pootifooliyootti Deebi'i" } },
  footer:{ hubs:'Wiirtuuwwan Keenya', links:'Liinkiiwwan Saffisaa', product:'Oomishaalee', company:'Dhaabbata', tagline:'Ogummaa Miidhaginaa Fooyyessuu', rights:'Mirgi Hunduu Kan Eegame.', pieces_total:'meeshaalee', contact_concierge:'Koonseeranjii Quunnamaa', download_brochure:'Birooshara Buufadhu' },
  common:{ readMore:'Dabalata Dubbisi', selectLanguage:'Afaan Filadhu', location:'Bakka', phone:'Bilbila', hours:"Sa'aatii Hojii", viewAll:'Tajaajiloota Hunda Ilaali', branches:'Wiirtuu Keenya', telegram:'Teleegiraamii', local_excellence:'Olaantummaa Naannoo', branches_desc:"Maamiltoota keenya hundaaf tajaajila qulqulluu kennuuf bakka mijaawaa irratti kan argaman dha.", bookNow:'Amma Bitadhu', elevateStyle:'Akkaataa Kee Olaanaatti Jijjiiri', joinElite:'Kabajamtoota Gadii', experienceLuxury:'Olaantummaa Waliin Muuxannoo Argadhu', whyChooseUs:'Maaliif Nanat Filiitu?', distinction:'PIROOTOKOOLII ADDAA', trustedService:'Tajaajila Amanamaa', trustedServiceDesc:'Maamiltoota kabajamoof tajaajila qulqulluu.', premiumQuality:'Qulqullina Olaanaa', premiumQualityDesc:'Uffata dhuunfaa fi faayaa addunyaa.', affordableLuxury:'Miidhagina Gatiin Galu', affordableLuxuryDesc:'Qulqullina osoo hin hir\'isin gatii mijaawaan.', fastDelivery:'Geejjiba Saffisaa', fastDeliveryDesc:"Loojistiksiin filatamaan keenya meeshaalee keessan yeroo qulqulluun akka gahan taasisa.", professionalTeam:'Garee Ogummaa Qabu', professionalTeamDesc:'Gorsitoota bifa ofii pirootokoolii dhuunfaa keessaniif hojjetan.', happyClients:'Maamiltoota Gammadan', suitRentals:'Kiraa Suutii', premiumServices:'Tajaajiloota Olaanoo' },
};

/* ─── BOOTSTRAP ─── */
const resources = {
  en: { translation: en },
  am: { translation: am },
  om: { translation: om },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => { document.documentElement.lang = lng; });
document.documentElement.lang = i18n.language;

export default i18n;
