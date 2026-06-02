import i18n from 'i18next';
import { initReactI18next } from '@/node_modules/react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        gallery: 'Gallery',
        collections: 'Collections',
        pricing: 'Pricing',
        contact: 'Contact',
        booking: 'Booking',
        concierge: 'Concierge'
      },
      hero: {
        subtitle: 'Bespoke Executive Protocol',
        title: 'Wear Confidence. Wear Class.',
        description: 'Premium Men’s Suits Tailored for Modern Gentlemen. Experience the pinnacle of executive style.',
        explore: 'Explore Services',
        concierge: 'Contact Concierge'
      },
      home: {
        features: {
          grooming: {
            title: 'Executive Grooming',
            desc: 'Precision tailoring and style protocol for the modern leader.'
          },
          logistics: {
            title: 'Luxury Logistics',
            desc: 'Seamless executive transport and fleet management across Ethiopia.'
          },
          events: {
            title: 'Event Scenography',
            desc: 'Artistic direction and VIP protocol for prestigious gatherings.'
          }
        },
        experience: {
          title: 'The Prestige Experience',
          subtitle: 'WHERE QUALITY MEETS COMFORT',
          desc: 'Our protocols are designed for those who value time and image. We handle the details so you can focus on the vision.',
          cta: 'Access Concierge'
        },
        signature: {
          title: 'The Signature Groom Package',
          subtitle: 'The Ultimate Transformation',
          desc: 'Our all-inclusive package designed for the modern gentleman on his most important day. We handle every detail, from executive styling to logistics and protocol.'
        },
        testimonials: {
          title: 'The Elite Voice',
          subtitle: 'Client Testimonials'
        },
        cta: {
          title: 'Your Premium Experience',
          subtitle: 'Starts Here.',
          access: 'Access Concierge'
        }
      },
      about: {
        title: 'Complete Preparation for Every Occasion',
        subtitle: 'The NANAT Legacy',
        description: 'NANAT PROTOCOL is a full-service lifestyle and event support provider based in Adaba, with operations in Shashamene.',
        mission: 'At NANAT PROTOCOL, we are committed to quality, convenience, and trust.',
        stats: {
          experience: 'Years of Protocol',
          clients: 'Executive Clients',
          garments: 'Garments Perfected'
        },
        brand_story: 'Our services are built around one simple idea: everything you need in one place. From suit rental and sales to complete outfit coordination, decoration services, and car rental solutions, we are your reliable partner for every special occasion.',
        quote: 'Excellence is not a skill, it\'s an attitude that we apply to every detail of the protocol.',
        commitment: {
          title: 'Commitment to Quality',
          text: 'At NANAT PROTOCOL, we are committed to quality, convenience, and trust—helping our clients present their best version, every time.'
        },
        community: {
          title: 'Community & Excellence',
          text: 'We support students and the wider community through uniform preparation and professional laundry services, maintaining precision and care.'
        },
        values: {
          title: 'Our Pillars',
          subtitle: 'Core Values',
          excellence: 'Excellence',
          excellence_desc: 'Uncompromising Quality',
          trust: 'Trust',
          trust_desc: 'Absolute Reliability',
          prestige: 'Prestige',
          prestige_desc: 'Elite Presentation',
          professionalism: 'Professionalism',
          professionalism_desc: 'Protocol Standards',
          loyalty: 'Loyalty',
          loyalty_desc: 'Client Dedication',
          satisfaction: 'Satisfaction',
          satisfaction_desc: 'Ultimate Comfort'
        },
        ceo: {
          title: 'A Message from Leadership',
          quote: 'Presentation goes beyond clothing—it includes overall experience.',
          message: 'Whether it’s for a wedding, graduation, or a business event, we ensure our clients are properly dressed and prepared for the occasion.'
        }
      },
      services: {
        title: 'Elite Protocol Services',
        subtitle: 'PRESTIGE SOLUTIONS',
        cta: 'Contact for Consultation',
        categories: {
          all: 'All',
          fashion: 'Fashion',
          logistics: 'Logistics',
          events: 'Events',
          protocol: 'Protocol',
          retail: 'Retail',
          signature: 'Signature',
          rental: 'Rental',
          accessories: 'Accessories',
          maintenance: 'Maintenance'
        },
        list: {
          suits: { title: 'Suit Rental', desc: 'Premium suits for weddings, graduations, meetings, and special events.' },
          decoration: { title: 'Decoration Services', desc: 'Modern decoration setup for weddings, birthdays, and events.' },
          cars: { title: 'Car Rental', desc: 'Luxury and comfortable cars available for rent.' },
          retail_suits: { title: 'Gentlemen\'s Suits', desc: 'Stylish ready-to-wear suits for gentlemen.' },
          laundry: { title: 'Professional Laundry', desc: 'Professional laundry and garment cleaning services.' },
          uniforms: { title: 'Uniform Services', desc: 'School uniform preparation and supply services.' },
          shoes: { title: 'Premium Shoes', desc: 'Classic and modern shoes for formal wear.' },
          ties: { title: 'Executive Neckties', desc: 'Elegant neckties and fashion accessories.' },
          watches: { title: 'Luxury Watches', desc: 'Luxury and stylish watches for men.' },
          perfumes: { title: 'Designer Perfumes', desc: 'Premium perfumes with long-lasting fragrance.' },
          groom: { title: 'Groom Protocol', desc: 'Complete groom preparation and fashion styling.' },
          accessories: { title: 'Men\'s Accessories', desc: 'Belts, wallets, cufflinks, and other men’s accessories.' }
        }
      },
      pricing: {
        title: 'Our Service Pricing',
        subtitle: 'Elite Tariffs',
        description: '"Affordable luxury services with premium quality and professional experience curated for the modern gentleman."',
        cta: 'View Pricing',
        getQuote: 'Get Quote',
        limitedEdition: 'Limited Edition',
        signaturePackages: 'Signature Packages',
        mostPopular: 'Most Popular',
        exclusiveRank: 'Exclusive Rank',
        protocolStandard: 'Protocol Standard',
        acquirePackage: 'Acquire Package',
        weddingPkg: { title: 'Wedding Package', feature1: 'Suit for Groom', feature2: 'Matching Accessories', feature3: 'Groom Styling', feature4: 'Event Logistics' },
        vipPkg: { title: 'VIP Groom Package', feature1: 'Bespoke Suit', feature2: 'Luxury Timepiece', feature3: 'Signature Perfume', feature4: 'Private Concierge' },
        eventPkg: { title: 'Event Package', feature1: 'Standard Rentals', feature2: 'Laundry Restoration', feature3: 'Group Coordination', feature4: 'Fast Delivery' }
      },
      collections: {
        archive: 'Archive',
        title: 'The Nanat Archive',
        subtitle: 'Est. 2024',
        description: '"Discover premium suits, watches, perfumes, fashion accessories, and elite lifestyle services crafted for modern gentlemen."',
        suits: { title: 'Suits', subtitle: 'Elite Tailoring', suffix: 'Bespoke' },
        watches: { title: 'Chronos', subtitle: 'Limited Horological Icons', suffix: 'Archive' },
        perfumes: { title: 'Signature', subtitle: 'Scented Souls', suffix: 'Essences' },
        services: { title: 'Protocol', subtitle: 'Service Protocol', suffix: 'Services' },
        joinElite: 'Join the Elite',
        concierge: 'Private Concierge',
        catalogue: 'Download Catalogue',
        vault: 'Nanat Vault',
        vaultExclusive: 'Vault Exclusive',
        digitalBlueprint: 'Digital Blueprint Only',
        confidentialArchive: 'Confidential Archive',
        blueprintReserved: 'Detailed visual blueprints for this piece are reserved for elite members.',
        verifiedVault: 'Verified Vault',
        exclusiveItem: 'Exclusive Item',
        signatureSeries: 'SIGNATURE SERIES',
        curatedPieces: 'Curated Pieces',
        bookNow: 'Book Now',
        filterBy: 'Filter By',
        vaultAccess: 'Vault Access Level: Gold',
        bookPiece: 'Request Piece',
        categories: {
          ALL: 'ALL',
          suits: 'suits',
          watch: 'watch',
          perfume: 'perfume',
          shoes: 'shoes',
          car: 'car',
          decoration: 'decoration',
          laundry: 'laundry',
          'student unifrom': 'student unifrom',
          'suit packages': 'suit packages'
        },
        items: {
          'suit-1': 'Midnight Shadow Black',
          'suit-2': 'Royal Navy Executive',
          'suit-3': 'The Wedding Classic',
          'suit-4': 'Double-Breasted Ivory',
          'suit-5': 'Vintage Tweed Legacy',
          'suit-6': 'Charcoal Silk Blend',
          'suit-7': 'The Italian Cut',
          'suit-8': 'Burgundy Velvet Ceremony',
          'suit-9': 'Graphite Modern Fit',
          'suit-10': 'Onyx tuxedo Elite',
          'watch-1': 'Chrono Gold Heritage',
          'watch-2': 'Deep Sea Mariner',
          'watch-3': 'Skeleton Mechanical',
          'watch-4': 'Silver Dial Executive',
          'perfume-1': 'Midnight Oud Signature',
          'perfume-2': 'Royal Musk Extract',
          'perfume-3': 'Desert Rose Noir',
          'perfume-4': 'Liquid Platinum',
          'car-1': 'Phantom Ghost Series',
          'car-2': 'Stuttgart Classic Excellence',
          'deco-1': 'Imperial Suite Design',
          'laundry-1': 'Fabric Care Protocol',
          'laundry-2': 'Silk & Wool Sanctuary',
          'uniform-1': 'Professional Corporate Identity',
          'shoes-1': 'Handcrafted Oxford Gold',
          'shoes-2': 'Italian Leather Loafers',
          'package-1': 'Executive Collection Bundle',
          'package-2': 'Wedding Party protocol'
        }
      },
      gallery: {
        title: 'The Signature Portfolio',
        subtitle: 'VISUAL EXCELLENCE',
        viewMore: 'Enlarge View'
      },
      contact: {
        title: 'Global Concierge',
        subtitle: 'CONNECT WITH THE ELITE',
        establishment: 'Our Establishment',
        standardHours: 'Standard Hours',
        prioritySupport: 'Priority Support',
        concierge247: '24/7 Concierge for Members',
        workingHours: 'Mon — Sat: 08:30 - 20:00',
        est: 'EST 2024',
        initializeTerminal: 'Initialize Terminal',
        formDesc: "Fill your requirements below. Your message will be encrypted and sent directly to our Protocol Manager's Telegram.",
        labels: {
          fullName: 'Full Identity',
          protocolChannel: 'Protocol Channel',
          serviceInterest: 'Service Interest',
          requirements: 'Brief Requirements'
        },
        placeholders: {
          name: 'Ex: H.E. John Smith',
          email: 'email@address.com',
          requirements: 'Describe your executive needs...'
        },
        submit: 'Secure Send via Telegram',
        services: {
          grooming: 'Executive Bespoke Grooming',
          logistics: 'Privileged Logistics',
          events: 'Event Scenography',
          protocol: 'VIP Protocol Management',
          general: 'General Inquiry'
        },
        branches: {
          adaba: {
            name: 'Adaba Main Hub',
            location: 'Arsi Zone',
            address: 'Main Commercial Terminal, Adaba, Arsi, Ethiopia',
            focus: 'Main Branch Hub'
          },
          shashamene: {
            name: 'Shashamene Prestige',
            location: 'West Arsi',
            address: 'Executive Plaza, Central Shashamene, Ethiopia',
            focus: 'Prestige Extension'
          }
        }
      },
      booking: {
        title: 'Booking',
        subtitle: 'Secure Your Slot',
        sidebar: {
          title: 'Secure Your Slot',
          description: 'Ready to experience the pinnacle of executive style? Fill out our luxury booking terminal to begin your journey.',
          prioritySupport: 'Priority Support',
          quote: '"We handle the fine details, so you can command the room."',
          location: 'Adaba & Shashamene'
        },
        form: {
          preferredDate: 'Preferred Date',
          preferredTime: 'Preferred Time',
          selectService: 'Select Service',
          submit: 'Confirm Booking Terminal'
        },
        success: {
          title: 'Reservation Confirmed',
          details: 'Confirmed Details',
          at: 'at',
          message: 'Your request for {{service}} has been prioritized. A protocol officer will contact you within the hour to finalize the logistics.',
          return: 'Return to Portfolio'
        }
      },
      footer: {
        hubs: 'Our Hubs',
        links: 'Quick Links',
        tagline: 'Refining the Art of Presence',
        rights: 'All Rights Reserved.'
      },
      common: {
        readMore: 'Read More',
        selectLanguage: 'Select Language',
        location: 'Location',
        phone: 'Phone',
        hours: 'Business Hours',
        viewAll: 'View All Services',
        branches: 'Our Branches',
        telegram: 'Telegram',
        local_excellence: 'Local Excellence',
        branches_desc: 'Strategically positioned to serve the most discerning clients across the region.',
        bookNow: 'Book Now',
        elevateStyle: 'Elevate Your Style',
        joinElite: 'Join the Elite',
        experienceLuxury: 'Experience Luxury With',
        whyChooseUs: 'Why Choose Nanat',
        distinction: 'THE PROTOCOL OF DISTINCTION',
        trustedService: 'Trusted Service',
        trustedServiceDesc: 'A legacy of excellence and discrete protocol management for high-profile clients.',
        premiumQuality: 'Premium Quality',
        premiumQualityDesc: 'Meticulously crafted fabrics and world-class accessories that define executive class.',
        affordableLuxury: 'Affordable Luxury',
        affordableLuxuryDesc: 'Experience the grandeur of high fashion at competitive rates without compromise.',
        fastDelivery: 'Fast Delivery',
        fastDeliveryDesc: 'Our elite logistics fleet ensures your assets arrive with precision timing.',
        professionalTeam: 'Professional Team',
        professionalTeamDesc: 'Elite styling consultants and master tailors dedicated to your personal protocol.',
        happyClients: 'Happy Clients',
        suitRentals: 'Suit Rentals',
        premiumServices: 'Premium Services'
      }
    }
  },
  am: {
    translation: {
      nav: {
        home: 'መነሻ',
        about: 'ስለ እኛ',
        services: 'አገልግሎቶች',
        gallery: 'ጋለሪ',
        collections: 'ስብስቦች',
        pricing: 'ዋጋ',
        contact: 'እኛን ያግኙ',
        booking: 'ቦታ ይያዙ',
        concierge: 'ረዳት'
      },
      hero: {
        subtitle: 'ልዩ የስራ አስፈፃሚ ፕሮቶኮል',
        title: 'ግርማዊ ልብስ። ግርማዊ ማንነት።',
        description: 'ለዘመናዊ መሪዎች የተዘጋጀ ግርማዊ አለባበስ። የተመረጠ የስታይል ተሞክሮን ይለማመዱ።',
        explore: 'አገልግሎቶችን ያስሱ',
        concierge: 'ረዳትን ያግኙ'
      },
      home: {
        features: {
          grooming: {
            title: 'ግርማዊ አለባበስ',
            desc: 'ጥበብ ያረፈበት ስፌትና ለዘመናዊ መሪዎች የሚመጥን የአለባበስ ስነ-ስርዓት።'
          },
          logistics: {
            title: 'ልዩ የትራንስፖርት አገልግሎት',
            desc: 'በመላው ኢትዮጵያ የሚከናወን ቀልጣፋና አስተማማኝ የስራ አስፈፃሚ ሎጅስቲክስ።'
          },
          events: {
            title: 'የዝግጅት ድባብ ፈጠራ',
            desc: 'ለተከበሩ ስብሰባዎች የሚቀርብ ጥበባዊ አመራርና የላቀ የቪአይፒ ፕሮቶኮል::'
          }
        },
        experience: {
          title: 'የክብር ተሞክሮ',
          subtitle: 'ጥራት ከምቾት ጋር የሚገናኝበት',
          desc: 'የእኛ ስነ-ስርዓቶች ጊዜንና ክብርን ለሚመርጡ የተነደፉ ናቸው። እርስዎ በራዕይዎ ላይ እንዲያተኩሩ እኛ ዝርዝሮቹን በጥበብ እንይዛለን።',
          cta: 'ረዳትን ያግኙ'
        },
        signature: {
          title: 'ልዩ የፊርማ ሙሽራ ፓኬጅ',
          subtitle: 'ግርማዊ ለውጥ',
          desc: 'በጣም አስፈላጊ በሆነው ቀንዎ ለዘመናዊ መሪ ተብሎ የተነደፈ ሁሉንም ያካተተ ጥቅል። ከአስፈፃሚ ስታይል እስከ ሎጅስቲክስና ፕሮቶኮል እያንዳንዱን ዝርዝር በልዩ ጥበብ እንይዛለን።'
        },
        testimonials: {
          title: 'የላቁ ድምጾች',
          subtitle: 'የተከበሩ ደንበኞች ምስክርነት'
        },
        cta: {
          title: 'የእርስዎ ፕሪሚየም ተሞክሮ',
          subtitle: 'እዚህ ይጀምራል::',
          access: 'ረዳትን ያግኙ'
        }
      },
      about: {
        title: 'ለእያንዳንዱ አጋጣሚ የተሟላ ዝግጅት',
        subtitle: 'የናናት ታሪካዊ ቅርስ',
        description: 'ናናት ፕሮቶኮል በአዳባ የሚገኝና በሻሸመኔ ስራዎችን የሚያከናውን ሙሉ የአኗኗር ዘይቤና የዝግጅት ድጋፍ ሰጪ ተቋም ነው።',
        mission: 'በናናት ፕሮቶኮል ለላቀ ጥራት፣ ለምቾትና ለታማኝነት ከፍተኛ ቁርጠኝነት አለን።',
        stats: {
          experience: 'የፕሮቶኮል ዓመታት',
          clients: 'ክቡራን ደንበኞች',
          garments: 'ጥበብ ያረፈባቸው አልባሳት'
        },
        brand_story: 'አገልግሎቶቻችን በአንድ ቀላል ሃሳብ ላይ የተገነቡ ናቸው፡ የሚያስፈልጓቸውን ነገሮቹን ሁሉ በአንድ ቦታ ማግኘት። ከልብስ ኪራይና ሽያጭ ጀምሮ እስከ ሙሉ አልባሳት ቅንጅት፣ የጌጣጌጥ አገልግሎቶችና የመኪና ኪራይ መፍትሄዎች ለእያንዳንዱ ልዩ አጋጣሚ ታማኝ አጋርዎ ነን።',
        quote: 'ጥራት ችሎታ አይደለም፤ በእያንዳንዱ ዝርዝር ውስጥ የምንተገብረው ግርማዊ አመለካከት ነው።',
        commitment: {
          title: 'ለጥራት ያለን ቁርጠኝነት',
          text: 'በናናት ፕሮቶኮል ደንበኞቻችን ምርጥ ማንነታቸውን እንዲያሳዩ በሚያግዝ ጥራት፣ ምቾትና እምነት ላይ ቆርጠን ተነስተናል::'
        },
        community: {
          title: 'ማህበረሰብና ላቀነት',
          text: 'ጥንቃቄና በትክክለኛ አገልግሎት በመስጠት ማህበረሰቡን በደንብ ልብስ ዝግጅትና በልብስ ማጠቢያ አገልግሎቶች እንደግፋለን::'
        },
        values: {
          title: 'ምሶሶቻችን',
          subtitle: 'ዋና እሴቶቻችን',
          excellence: 'ላቀነት',
          excellence_desc: 'የማይቀየር ጥራት',
          trust: 'ታማኝነት',
          trust_desc: 'ፍጹም አስተማማኝነት',
          prestige: 'ግርማዊነት',
          prestige_desc: 'ምርጥ አቀራረብ',
          professionalism: 'ሙያዊነት',
          professionalism_desc: 'የፕሮቶኮል ደረጃዎች',
          loyalty: 'ታማኝነት',
          loyalty_desc: 'ለደንበኛ ታማኝነት',
          satisfaction: 'እርካታ',
          satisfaction_desc: 'የላቀ እርካታ'
        },
        ceo: {
          title: 'ከአመራሩ የተላለፈ መልዕክት',
          quote: 'አቀራረብ ከልብስ በላይ ነው—ሙሉ ተሞክሮን ያካትታል።',
          message: 'ለሠርግ፣ ለምረቃ ወይም ለንግድ ዝግጅት ደንበኞቻችን በአግባቡ መልበሳቸውንና ለአጋጣሚው መዘጋጀታቸውን እናረጋግጣለን።'
        }
      },
      services: {
        title: 'ልዩ የፕሮቶኮል አገልግሎቶች',
        subtitle: 'የክብር መፍትሄዎች',
        cta: 'ለምክክር ያግኙን',
        categories: {
          all: 'ሁሉም',
          fashion: 'ፋሽን',
          logistics: 'ሎጅስቲክስ',
          events: 'ዝግጅቶች',
          protocol: 'ፕሮቶኮል',
          retail: 'ሽያጭ',
          signature: 'ልዩ ፊርማ',
          rental: 'ኪራይ',
          accessories: 'መለዋወጫዎች',
          maintenance: 'ጥገና'
        },
        list: {
          suits: { title: 'የልብስ ኪራይ', desc: 'ለሰርግ፣ ለምረቃ፣ ለስብሰባዎች እና ለልዩ ዝግጅቶች የሚሆኑ ምርጥ ልብሶች::' },
          decoration: { title: 'የጌጣጌጥ አገልግሎቶች', desc: 'ለሰርግ፣ ለልደት እና ለተለያዩ ዝግጅቶች የሚሆን ዘመናዊ የጌጣጌጥ ዝግጅት::' },
          cars: { title: 'የመኪና ኪራይ', desc: 'ለኪራይ የሚቀርቡ የቅንጦት እና ምቹ መኪናዎች::' },
          retail_suits: { title: 'የወንዶች ልብሶች', desc: 'ለወንዶች የሚሆኑ ዘመናዊና ዝግጁ የሆኑ አልባሳት::' },
          laundry: { title: 'ፕሮፌሽናል የልብስ ማጠቢያ', desc: 'ጥራት ያለው የልብስ ማጠቢያ እና የፅዳት አገልግሎቶች::' },
          uniforms: { title: 'የዩኒፎርም አገልግሎቶች', desc: 'የትምህርት ቤት ዩኒፎርም ዝግጅት እና አቅርቦት አገልግሎቶች::' },
          shoes: { title: 'ፕሪሚየም ጫማዎች', desc: 'ለክብር ዝግጅቶች የሚሆኑ ክላሲክ እና ዘመናዊ ጫማዎች::' },
          ties: { title: 'ክራቫቶች', desc: 'የሚያማምሩ ክራቫቶች እና የፋሽን መለዋወጫዎች::' },
          watches: { title: 'የእጅ ሰዓቶች', desc: 'ለወንዶች የሚሆኑ የቅንጦት እና ዘመናዊ የእጅ ሰዓቶች::' },
          perfumes: { title: 'ሽቶዎች', desc: 'ረጅም ጊዜ የሚቆዩ ምርጥ ሽቶዎች::' },
          groom: { title: 'የሙሽራ ፕሮቶኮል', desc: 'የተሟላ የሙሽራ ዝግጅት እና የፋሽን ስታይሊንግ::' },
          accessories: { title: 'የወንዶች መለዋወጫዎች', desc: 'ቀበቶዎች፣ ቦርሳዎች እና ሌሎች የወንዶች መለዋወጫዎች::' }
        }
      },
      pricing: {
        title: 'የአልግሎቶቻችን ዋጋ',
        subtitle: 'ልዩ የታሪፍ ዝርዝር',
        description: '"ጥራት ያላቸው የቅንጦት አገልግሎቶች በተመጣጣኝ ዋጋ ለዘመናዊ ደንበኞች በባለሙያዎች የተዘጋጀ::"',
        cta: 'ዋጋዎችን ይመልከቱ',
        getQuote: 'ዋጋ ይጠይቁ',
        limitedEdition: 'ውስን እትም',
        signaturePackages: 'ልዩ ፓኬጆች',
        mostPopular: 'በብዛት የተመረጠ',
        exclusiveRank: 'ልዩ ደረጃ',
        protocolStandard: 'የፕሮቶኮል ደረጃ',
        acquirePackage: 'ፓኬጁን ያግኙ',
        weddingPkg: { title: 'የሰርግ ፓኬጅ', feature1: 'ልብስ ለሙሽራ', feature2: 'ተዛማጅ መለዋወጫዎች', feature3: 'የሙሽራ ስታይሊንግ', feature4: 'ዝግጅት ሎጅስቲክስ' },
        vipPkg: { title: 'ቪአይፒ የሙሽራ ፓኬጅ', feature1: 'ልዩ የተሰፋ ልብስ', feature2: 'የቅንጦት ሰዓት', feature3: 'ልዩ ሽቶ', feature4: 'የግል ረዳት' },
        eventPkg: { title: 'የዝግጅት ፓኬጅ', feature1: 'መደበኛ ኪራዮች', feature2: 'የልብስ እድሳት', feature3: 'የቡድን ቅንጅት', feature4: 'ፈጣን አቅርቦት' }
      },
      collections: {
        archive: 'ማህደር',
        title: 'የናናት መዝገብ',
        subtitle: 'ከ2024 እ.ኤ.አ ጀምሮ',
        description: '"ለዘመናዊ ደንበኞች የተሰሩ ምርጥ ልብሶችን፣ ሰዓቶችን፣ ሽቶዎችን እና ፋሽን መለዋወጫዎችን ያግኙ::"',
        suits: { title: 'ልብሶች', subtitle: 'ልዩ ስፌት', suffix: 'ንድፍ' },
        watches: { title: 'ክሮኖስ', subtitle: 'ውስን የእጅ ሰዓቶች', suffix: 'ማህደር' },
        perfumes: { title: 'ምልክት', subtitle: 'ጥሩ መዓዛዎች', suffix: 'እርሳሶች' },
        services: { title: 'ፕሮቶኮል', subtitle: 'የአገልግሎት ፕሮቶኮል', suffix: 'አገልግሎቶች' },
        joinElite: 'ምርጦቹን ይቀላቀሉ',
        concierge: 'የግል ረዳት',
        catalogue: 'ካታሎግ ያውርዱ',
        vault: 'የናናት ግምጃ ቤት',
        vaultExclusive: 'የግምጃ ቤት ልዩ',
        digitalBlueprint: 'ዲጂታል ብሉፕሪንት ብቻ',
        confidentialArchive: 'ሚስጥራዊ ማህደር',
        blueprintReserved: 'ለዚህ ዕቃ ዝርዝር ምስላዊ እቅዶች ለላቁ አባላት የተጠበቁ ናቸው::',
        verifiedVault: 'የተረጋገጠ ግምጃ ቤት',
        exclusiveItem: 'ልዩ ዕቃ',
        signatureSeries: 'የፊርማ ተከታታይ',
        curatedPieces: 'የተመረጡ ዕቃዎች',
        bookNow: 'አሁን ይዘዙ',
        filterBy: 'በ ... ይለዩ',
        vaultAccess: 'የግምጃ ቤት መዳረሻ ደረጃ፡ ወርቅ',
        bookPiece: 'ዕቃውን ይጠይቁ',
        categories: {
          ALL: 'ሁሉም',
          suits: 'ልብሶች',
          watch: 'ሰዓት',
          perfume: 'ሽቶ',
          shoes: 'ጫማዎች',
          car: 'መኪና',
          decoration: 'ጌጣጌጥ',
          laundry: 'ልብስ ማጠቢያ',
          'student unifrom': 'የተማሪ ዩኒፎርም',
          'suit packages': 'የልብስ ፓኬጆች'
        },
        items: {
          'suit-1': 'ሚድናይት ሻዶ ጥቁር',
          'suit-2': 'ሮያል ኔቪ ኤክስኪዩቲቭ',
          'suit-3': 'ክላሲክ የሰርግ ልብስ',
          'suit-4': 'ደብል ብሬስትድ አይቮሪ',
          'suit-5': 'ቪንቴጅ ትዊድ ሌጋሲ',
          'suit-6': 'ቻርኮል ሲልክ ብሌንድ',
          'suit-7': 'የኢጣሊያ ስታይል',
          'suit-8': 'በርገንዲ ቬልቬት ሴሬሞኒ',
          'suit-9': 'ግራፋይት ሞደርን ፊት',
          'suit-10': 'ኦኒክስ ታክሲዶ ኢሊት',
          'watch-1': 'ክሮኖ ጎልድ ሄሪቴጅ',
          'watch-2': 'ዲፕ ሲ ማሪነር',
          'watch-3': 'ስኬልተን ሜካኒካል',
          'watch-4': 'ሲልቨር ዳያል ኤክስኪዩቲቭ',
          'perfume-1': 'ሚድናይት ኡድ ሲግኔቸር',
          'perfume-2': 'ሮያል መስክ ኤክስትራክት',
          'perfume-3': 'ዴዘርት ሮዝ ኗር',
          'perfume-4': 'ሊኩዊድ ፕላቲነም',
          'car-1': 'ፋንተም ጎስት ሲሪየስ',
          'car-2': 'ስቱትጋርት ክላሲክ ኤክሰለንስ',
          'deco-1': 'ኢምፔሪያል ሱዊት ዲዛይን',
          'laundry-1': 'ፋብሪክ ኬር ፕሮቶኮል',
          'laundry-2': 'ሲልክ እና ዉል ሳንክቸሪ',
          'uniform-1': 'ፕሮፌሽናል ኮርፖሬት አይደንቲቲ',
          'shoes-1': 'ሃንድክራፍትድ ኦክስፎርድ ጎልድ',
          'shoes-2': 'የኢጣሊያ ሌዘር ሎፈር',
          'package-1': 'ኤክስኪዩቲቭ ኮሌክሽን ባንድል',
          'package-2': 'የሰርግ ድግስ ፕሮቶኮል'
        }
      },
      gallery: {
        title: 'ልዩ የፊርማ ፖርትፎሊዮ',
        subtitle: 'ጥበባዊ እይታ',
        viewMore: 'አተልቆ ይመልከቱ'
      },
      contact: {
        title: 'ግሎባል ኮንሲየር',
        subtitle: 'ከምርጦች ጋር ይገናኙ',
        establishment: 'የእኛ ማዕከላት',
        standardHours: 'መደበኛ ሰዓታት',
        prioritySupport: 'ቅድሚያ የሚሰጠው ድጋፍ',
        concierge247: '24/7 ለደንበኞች የሚሰጥ ድጋፍ',
        workingHours: 'ከሰኞ — ቅዳሜ: 2:30 - 2:00',
        est: 'ከ2024 እ.ኤ.አ ጀምሮ',
        initializeTerminal: 'ዝርዝሩን ይሙሉ',
        formDesc: 'መስፈርቶቻችሁን ከዚህ በታች ይሙሉ:: መልዕክትዎ በቀጥታ ወደ እኛ የፕሮቶኮል ማኔጀር ቴሌግራም ይላካል::',
        labels: {
          fullName: 'ሙሉ ማንነት',
          protocolChannel: 'የመገናኛ መስመር',
          serviceInterest: 'የአገልግሎት ፍላጎት',
          requirements: 'አጭር መስፈርቶች'
        },
        placeholders: {
          name: 'ምሳሌ: አቶ ዮሐንስ ስሚዝ',
          email: 'ኢሜይል አድራሻ',
          requirements: 'የአስተዳደር ፍላጎቶችዎን ይግለጹ...'
        },
        submit: 'በቴሌግራም ደህንነቱ በተጠበቀ ሁኔታ ይላኩ',
        services: {
          grooming: 'ልዩ የሙሽራ ዝግጅት',
          logistics: 'ልዩ ሎጅስቲክስ',
          events: 'የዝግጅት ስነ-ስርዓት',
          protocol: 'ቪአይፒ የፕሮቶኮል አመራር',
          general: 'አጠቃላይ ጥያቄ'
        },
        branches: {
          adaba: {
            name: 'የአዳባ ዋና ማዕከል',
            location: 'አርሲ ዞን',
            address: 'ዋና የንግድ ተርሚናል፣ አዳባ፣ አርሲ፣ ኢትዮጵያ',
            focus: 'ዋና ቅርንጫፍ ማዕከል'
          },
          shashamene: {
            name: 'የሻሸመኔ ፕሪስቲጅ',
            location: 'ምእራብ አርሲ',
            address: 'ኤክስኪዩቲቭ ፕላዛ፣ የመካከለኛው ሻሸመኔ፣ ኢትዮጵያ',
            focus: 'ልዩ የሻሸመኔ ቅርንጫፍ'
          }
        }
      },
      booking: {
        title: 'ቦታ ይያዙ',
        subtitle: 'ቦታዎን ያስከብሩ',
        sidebar: {
          title: 'ቦታዎን ያስከብሩ',
          description: 'የላቀ የኤክስኪዩቲቭ ስታይልን ለመለማመድ ዝግጁ ነዎት? ጉዞዎን ለመጀመር የቅንጦት ማስያዣ ተርሚናላችንን ይሙሉ::',
          prioritySupport: 'ቅድሚያ የሚሰጠው ድጋፍ',
          quote: '"እኛ ጥቃቅን ዝርዝሮችን እንይዛለን፣ እርስዎ ደግሞ መድረኩን እንዲቆጣጠሩ እናደርጋለን::"',
          location: 'አዳባ እና ሻሸመኔ'
        },
        form: {
          preferredDate: 'ተመራጭ ቀን',
          preferredTime: 'ተመራጭ ሰዓት',
          selectService: 'አገልግሎት ይምረጡ',
          submit: 'የማስያዣ ተርሚናልን ያረጋግጡ'
        },
        success: {
          title: 'ማስያዣው ተረጋግጧል',
          details: 'የተረጋገጡ ዝርዝሮች',
          at: 'በ',
          message: 'ለ {{service}} ያቀረቡት ጥያቄ ቅድሚያ ተሰጥቶታል። የሎጂስቲክስ ስራውን ለማጠናቀቅ አንድ የፕሮቶኮል ኦፊሰር በአንድ ሰአት ውስጥ ያነጋግርዎታል።',
          return: 'ወደ ፖርትፎሊዮ ይመለሱ'
        }
      },
      footer: {
        hubs: 'የእኛ ማዕከላት',
        links: 'ፈጣን ሊንኮች',
        tagline: 'ግርማዊ አቀራረብን የማጥራት ጥበብ',
        rights: 'መብቱ በህግ የተጠበቀ ነው።'
      },
      common: {
        readMore: 'ተጨማሪ ያንብቡ',
        selectLanguage: 'ቋንቋ ይምረጡ',
        location: 'አድራሻ',
        phone: 'ስልክ',
        hours: 'የስራ ሰዓታት',
        viewAll: 'ሁሉንም አገልግሎቶች ይመልከቱ',
        branches: 'ቅርንጫፎቻችን',
        telegram: 'ቴሌግራም',
        local_excellence: 'አካባቢያዊ ብቃት',
        branches_desc: 'በክልሉ ውስጥ ያሉ በጣም አስተዋይ የሆኑ ደንበኞችን ለማገልገል በስትራቴጂካዊ ሁኔታ የተቀመጠ::',
        bookNow: 'አሁኑኑ ይዘዙ',
        elevateStyle: 'ስታይልዎን ያሳድጉ',
        joinElite: 'ግርማውያንን ይቀላቀሉ',
        experienceLuxury: 'ግርማዊነትን ከ ... ጋር ይለማመዱ',
        whyChooseUs: 'ለምን ናናትን ይመርጣሉ?',
        distinction: 'የላቀ የፕሮቶኮል ስነ-ስርዓት',
        trustedService: 'ታማኝ አገልግሎት',
        trustedServiceDesc: 'ለከፍተኛ ደንበኞች የሚሰጥ የላቀ አገልግሎት እና የፕሮቶኮል አመራር::',
        premiumQuality: 'ከፍተኛ ጥራት',
        premiumQualityDesc: 'አስፈፃሚ ደረጃን የሚገልጹ በጥንቃቄ የተሰሩ ጨርቆች እና የአለም ደረጃ የሆኑ መለዋወጫዎች::',
        affordableLuxury: 'ተመጣጣኝ ግርማዊነት',
        affordableLuxuryDesc: 'ያለ ምንም ቅናሽ በዝቅተኛ ዋጋ የከፍተኛ ፋሽን ግርማዊነትን ያግኙ::',
        fastDelivery: 'ፈጣን ማድረስ',
        fastDeliveryDesc: 'ቀልጣፋ የሎጅስቲክስ ቡድናችን ንብረቶችዎን በወቅቱ እንዲደርሱ ያደርጋል::',
        professionalTeam: 'ሙያዊ ቡድን',
        professionalTeamDesc: 'ለእርስዎ የግል ፕሮቶኮል የሚሰሩ ከፍተኛ የስታይል አማካሪዎች::',
        happyClients: 'ደስተኛ ደንበኞች',
        suitRentals: 'የልብስ ኪራዮች',
        premiumServices: 'ፕሪሚየም አገልግሎቶች'
      }
    }
  },
  om: {
    translation: {
      nav: {
        home: 'Mana',
        about: 'Waa\'ee Keenya',
        services: 'Tajaajiloota',
        gallery: 'Galaree',
        collections: 'Kolekshinii',
        pricing: 'Gatii',
        contact: 'Nu Quunnamaa',
        booking: 'Bakka Qabadhu',
        concierge: 'Konseeryajii'
      },
      hero: {
        subtitle: 'Pirootokoolii Geggeessitootaa Olaanaa',
        title: 'Uffannaa Kabajamaa. Eenyummaa Olaanaa.',
        description: 'Uffannaa dhuunfaa geggeessitoota ammayyaaf qophaa\'e. Muuxannoo bifa olaanaa qabu akkamiin akka argatan ni taasisna.',
        explore: 'Tajaajiloota Filatamaa',
        concierge: 'Nu Quunnamaa'
      },
      home: {
        features: {
          grooming: {
            title: 'Uffannaa Kabajamaa',
            desc: 'Akaakuu uffannaa dhuunfaa fi pirootokoolii bifa geggeessitoota ammayyaa.'
          },
          logistics: {
            title: 'Geejjiba Filatamaa',
            desc: 'Itoophiyaa keessatti tajaajila geejjiba hoji-raawwachiiftuu fi bulchiinsa mijaawaa.'
          },
          events: {
            title: 'Qindoomina Sagantaa',
            desc: 'Qajeelfama ogummaa fi pirootokoolii VIP qophiilee ciccimoo irratti.'
          }
        },
        experience: {
          title: 'Muuxannoo Kabajamaa',
          subtitle: 'BAKKA QULQULLINNI FI MIJAATAAN WALITTI DHUFAN',
          desc: 'Pirootokoolliwwan keenya warra yeroo fi bifa ofii agarsiisuun kabaja kennaniif qophaa\'an. Isin mul\'ata keessan irratti akka xiyyeeffattan nuyi dhimmoota biro hunda qulqullinaan raawwanna.',
          cta: 'Tajaajila Argadhu'
        },
        signature: {
          title: 'Paakeejii Mallattoo',
          subtitle: 'Jijjiirama Olaanaa',
          desc: 'Paakeejii hunda hammate kan guyyaa keessan isa murteessaa irratti geggeessitoota ammayyaaf qophaa\'e. Akkaataa uffannaa irraa kaasee hanga loojistiksii fi pirootokoolliitti dhimmoota hunda ogummaan ni raawwanna.'
        },
        testimonials: {
          title: 'Sagalee Kabajamaa',
          subtitle: 'Dhugaa-ba’umsa Maamiltootaa'
        },
        cta: {
          title: 'Muuxannoon Kee Olaanaan',
          subtitle: 'Asitti Jalqaba.',
          access: 'Tajaajila Argadhu'
        }
      },
      about: {
        title: 'Qophii Guutuu Yeroo Hundumaaf',
        subtitle: 'Dhaalmaya NANAT',
        description: 'PIROOTOKOOLIIN NANAT kenna tajaajila jireenyaa fi deeggarsa sagantaa guutuu Adaamaa keessatti kan hundaa\'e dha.',
        mission: 'Pirootokoolii NANAT keessatti qulqullina, mijataa fi amanamummaaf kutannoo qabna.',
        stats: {
          experience: 'Waggaa Pirootokoolii',
          clients: 'Maamiltoota Olaanoo',
          garments: 'Uffata Ogummaan Qophaa\'e'
        },
        brand_story: 'Tajaajiloonni keenya yaada salphaa tokko irratti ijaaraman: waan isin barbaachisun hunda iddoo tokkotti argachuu. Kiraa uffata dhiiraa irraa kaasee hanga qindeessuu uffataa guutuu, tajaajila faayaa fi kireessu konkolaataa, dhimmoota addaa hundaaf hiriyyaa keessan amanamoo dha.',
        quote: 'Qulqullinni dandeettii qofa miti, pirootokoolii keenya keessatti dhimmoota hunda irratti bifa ogummaa qabuun hojjennu dha.',
        commitment: {
          title: 'Kutannoo Qulqullinaa',
          text: 'Pirootokoolii NANAT keessatti qulqullina, mijataa fi amanamummaaf kutannoo qabna—maamiltoota keenya yeroo hunda bifa isaanii isa gaarii akka agarsiisan gargaarra.'
        },
        community: {
          title: 'Hawaasa fi Olaantummaa',
          text: 'Qophii yuunivarmichaa fi tajaajila dhiqannaa uffataa ogummaan hawaasa bal\'aa deeggarra.'
        },
        values: {
          title: 'Utubaa Keenya',
          subtitle: 'Duudhaalee Keenya',
          excellence: 'Olaantummaa',
          excellence_desc: 'Qulqullina Amansiisaa',
          trust: 'Amanamummaa',
          trust_desc: 'Amanamummaa Guutuu',
          prestige: 'Kabaja',
          prestige_desc: 'Agarsiisa Olaanaa',
          professionalism: 'Ogummaa',
          professionalism_desc: 'Sadarkaa Pirootokoolii',
          loyalty: 'Amanummaa',
          loyalty_desc: 'Kutannoo Maamilaa',
          satisfaction: 'Qannoo',
          satisfaction_desc: 'Qannoo Olaanaa'
        },
        ceo: {
          title: 'Ergaa Hooggansa irraa',
          quote: 'Bifa ofii agarsiisuun uffata qofa miti—muuxannoo walii galaa of keessaa qaba.',
          message: 'Cidhaaf, eebbaaf ykn sagantaa daldalaaf maamiltoota keenya akka gaariitti uffatanii fi qophaa\'anii akka argaman ni taasisna.'
        }
      },
      services: {
        title: 'Tajaajiloota Pirootokoolii Olaanaa',
        subtitle: 'FURMAATA KABAJAA',
        cta: 'Gorsaaf Nu Quunnamaa',
        categories: {
          all: 'Hunda',
          fashion: 'Faashinii',
          logistics: 'Loojistiksii',
          events: 'Sagantaawwan',
          protocol: 'Pirootokoolii',
          retail: 'Daldala',
          signature: 'Mallattoo',
          rental: 'Kiraa',
          accessories: 'Faayalee',
          maintenance: 'Suphaa'
        },
        list: {
          suits: { title: 'Kiraa Suutii', desc: 'Cidhaaf, eebbaaf, walga\'ii fi sagantaa addaatiif kan ta\'an.' },
          decoration: { title: 'Tajaajila Faayaa', desc: 'Cidhaaf, guyyaa dhalootaa fi sagantaaleef qophii faayaa ammayyaa.' },
          cars: { title: 'Kiraa Konkolaataa', desc: 'Konkolaattota mijaawaa fi qaalii kiraaf qophaa\'an.' },
          retail_suits: { title: 'Suutii Dhiiraa', desc: 'Suutiiwwan dhiira ammayyaa qophaa\'anii jiran.' },
          laundry: { title: 'Dhiqannaa Ogummaa', desc: 'Tajaajila dhiqannaa uffataa fi qulqullinaa.' },
          uniforms: { title: 'Tajaajila Yuunivarmichaa', desc: 'Qophii fi dhiyeessii yuunivarmichaa manneen barnootaa.' },
          shoes: { title: 'Kopphee Filatamoof', desc: 'Kopphee ammayyaa fi klasiikaa sagantaa kabajaatif ta\'an.' },
          ties: { title: 'Kiraavaattii', desc: 'Kiraavaattii fi faaya uffataa bifa miidhagaa qaban.' },
          watches: { title: 'Sa\'aatii Harkaa', desc: 'Sa\'atii harkaa dhiiraa kan bifa qaalii qaban.' },
          perfumes: { title: 'Urgooftuu (Perfume)', desc: 'Urgooftuuwwan qulqulluu yeroo dheeraa turan.' },
          groom: { title: 'Pirootokoolii Misirroo', desc: 'Qophii misirroo fi qindeessuu bifa faashinii guutuu.' },
          accessories: { title: 'Faaya Dhiiraa', desc: 'Qabattoo, boorsaa harkaa fi faayalee dhiiraa biro.' }
        }
      },
      pricing: {
        title: 'Gatii Tajaajila Keenyaa',
        subtitle: 'Taarifa Olaanaa',
        description: '"Tajaajila qaalii gatii mijaawaan qulqullina olaanaa fi muuxannoo ogummaa qabuun dhiira ammayyaatiif kan qophaa\'e."',
        cta: 'Gatii Ilaali',
        getQuote: 'Gatii Gaafadhu',
        limitedEdition: 'Maxxansa Murtaa\'aa',
        signaturePackages: 'Paakeejiiwwan Mallattoo',
        mostPopular: 'Baay\'ee Kan Filatame',
        exclusiveRank: 'Sadarkaa Addaa',
        protocolStandard: 'Sadarkaa Pirootokoolii',
        acquirePackage: 'Paakeejicha Argadhu',
        weddingPkg: { title: 'Paakeejii Cidhaa', feature1: 'Suutii Misirrootiif', feature2: 'Faayalee Wal-fakkatan', feature3: 'Qindaa\'ina Misirroo', feature4: 'Loojistiiksii Sagantaa' },
        vipPkg: { title: 'Paakeejii Misirroo VIP', feature1: 'Suutii Addatti Hodhame', feature2: 'Sa\'aatii Harkaa Qaalii', feature3: 'Urgooftuu Mallattoo', feature4: 'Gargaaraa Dhuunfaa' },
        eventPkg: { title: 'Paakeejii Sagantaa', feature1: 'Kiraa Standardii', feature2: 'Suphaa Dhiqannaa', feature3: 'Qindaa\'ina Garee', feature4: 'Dhiyeessii Saffisaa' }
      },
      collections: {
        archive: 'Kuusaa',
        title: 'Kuusaa Nanat',
        subtitle: 'Est. 2024',
        description: '"Suutiiwwan qaalii, sa\'aatii harkaa, urgooftuu, faayalee faashinii fi tajaajiloota jireenya olaanoo dhiira ammayyaatiif qophaa\'an argadhu."',
        suits: { title: 'Suutiiwwan', subtitle: 'Hodhaa Ogummaa', suffix: 'Bespoke' },
        watches: { title: 'Kiroonoos', subtitle: 'Mallattoolee Sa\'aatii Murtaa\'an', suffix: 'Kuusaa' },
        perfumes: { title: 'Mallattoo', subtitle: 'Madda Urgooftuu', suffix: 'Essence' },
        services: { title: 'Pirootokoolii', subtitle: 'Tajaajila Pirootokoolii', suffix: 'Tajaajiloota' },
        joinElite: 'Oolummaa Keenya Join godhaa',
        concierge: 'Gargaaraa Dhuunfaa',
        catalogue: 'Kaataalogii Buufadhaa',
        vault: 'Mankuusa Nanat',
        vaultExclusive: 'Guyyaa Mankuusa Addaa',
        digitalBlueprint: 'Digital Blueprint Qofa',
        confidentialArchive: 'Kuusaa Iccitii',
        blueprintReserved: 'Meeshaa kanaaf dhimmoota bal\'inaan agarsiisan miseensota olaanoof qofa dursa kennamu.',
        verifiedVault: 'Mankuusa Mirkanaa\'e',
        exclusiveItem: 'Meeshaa Addaa',
        signatureSeries: 'TOORA MALLATTOO',
        curatedPieces: 'Meeshaalee Filataman',
        bookNow: 'Amma Book godhaa',
        filterBy: 'Akkaataan Fili',
        vaultAccess: 'Sadarkaa Seensaa Mankuusa: Warqii',
        bookPiece: 'Meeshaa Gaafadhu',
        categories: {
          ALL: 'HUNDA',
          suits: 'Suutiiwwan',
          watch: 'Sa\'aatii',
          perfume: 'Urgooftuu',
          shoes: 'Kopphee',
          car: 'Konkolaataa',
          decoration: 'Faaya',
          laundry: 'Dhiqannaa',
          'student unifrom': 'Yuunivarmichaa',
          'suit packages': 'Paakeejii Suutii'
        },
        items: {
          'suit-1': 'Midnight Shadow Gurraacha',
          'suit-2': 'Royal Navy Executive',
          'suit-3': 'Filannoo Cidha Klasiikaa',
          'suit-4': 'Double-Breasted Ivory',
          'suit-5': 'Vintage Tweed Legacy',
          'suit-6': 'Charcoal Silk Blend',
          'suit-7': 'Akkaataa Xaaliyaanii',
          'suit-8': 'Burgundy Velvet Ceremony',
          'suit-9': 'Graphite Modern Fit',
          'suit-10': 'Onyx tuxedo Elite',
          'watch-1': 'Chrono Gold Heritage',
          'watch-2': 'Deep Sea Mariner',
          'watch-3': 'Skeleton Mechanical',
          'watch-4': 'Silver Dial Executive',
          'perfume-1': 'Midnight Oud Signature',
          'perfume-2': 'Royal Musk Extract',
          'perfume-3': 'Desert Rose Noir',
          'perfume-4': 'Liquid Platinum',
          'car-1': 'Phantom Ghost Series',
          'car-2': 'Stuttgart Classic Excellence',
          'deco-1': 'Imperial Suite Design',
          'laundry-1': 'Fabric Care Protocol',
          'laundry-2': 'Silk & Wool Sanctuary',
          'uniform-1': 'Professional Corporate Identity',
          'shoes-1': 'Handcrafted Oxford Gold',
          'shoes-2': 'Italian Leather Loafers',
          'package-1': 'Executive Collection Bundle',
          'package-2': 'Wedding Party protocol'
        }
      },
      gallery: {
        title: 'Poortifooliyoo Mallattoo',
        subtitle: 'OLAANTUMMAA ARGAITII',
        viewMore: 'Bal\'isii Ilaali'
      },
      contact: {
        title: 'Global Concierge',
        subtitle: 'OOLUMMAA KEENYA QUUNNAMAA',
        establishment: 'Dhaabbata Keenya',
        standardHours: 'Sa\'aatii Hojii',
        prioritySupport: 'Deeggarsa Prioritii',
        concierge247: 'Tajaajila Miseensotaaf 24/7',
        workingHours: 'Wiixata — Sanbata: 08:30 - 20:00',
        est: 'EST 2024',
        initializeTerminal: 'Unka Jalqabaa',
        formDesc: 'Ulaagaalee keessan armaan gaditti guutaa. Ergaan keessan kallattiin gara Telegiraama To\'ataa Pirootokoolii keenyaatti ergama.',
        labels: {
          fullName: 'Eenyummaa Guutuu',
          protocolChannel: 'Toora Pirootokoolii',
          serviceInterest: 'Fedhii Tajaajilaa',
          requirements: 'Ibsa Gabaabaa'
        },
        placeholders: {
          name: 'Fkn: H.E. John Smith',
          email: 'email@address.com',
          requirements: 'Fedhii pirootokoolii keessan ibsaa...'
        },
        submit: 'Telegiraamaan Saffisaan Ergi',
        services: {
          grooming: 'Qophii Misirroo Olaanaa',
          logistics: 'Loojistiiksii Addaa',
          events: 'Qindaa\'ina Sagantaa',
          protocol: 'Bulchiinsa Pirootokoolii VIP',
          general: 'Gaaffii Waliigalaa'
        },
        branches: {
          adaba: {
            name: 'Wiirtuu Adabaa',
            location: 'Godina Arsii',
            address: 'Teerminaala Daldala Olaanaa, Adaabaa, Arsii, Itoophiyaa',
            focus: 'Wiirtuu Damee Olaanaa'
          },
          shashamene: {
            name: 'Prestiijii Shasamannee',
            location: 'Arsii Lixaa',
            address: 'Executive Plaza, Shasamannee Giddu-galaa, Itoophiyaa',
            focus: 'Damee Addaa Shasamannee'
          }
        }
      },
      booking: {
        title: 'Bakka Qabadhu',
        subtitle: 'Bakka keessan kabachiisaa',
        sidebar: {
          title: 'Bakka keessan kabachiisaa',
          description: 'Sadarkaa olaanaa fooyya\'ina \'executive\' dhandhamuuf qophiidhaa? Imala keessan jalqabuuf terminal nannoo keenyaa kan qaalii ta\'ee guutaa.',
          prioritySupport: 'Deeggarsa Prioritii',
          quote: '"Nutti bal\'ina xixinnoo ni hordofna, isin ammoo iddoo san to\'achuu dandeessu."',
          location: 'Adaabaa fi Shaashamannee'
        },
        form: {
          preferredDate: 'Guyyaa Filatame',
          preferredTime: 'Sa\'aatii Filatame',
          selectService: 'Tajaajila Filadhu',
          submit: 'Terminaala Bakka Qabachuu Mirkaneessi'
        },
        success: {
          title: 'Bakka Qabachuun Mirkanaa\'ee Jira',
          details: 'Ibsa Mirkanaa\'ee',
          at: 'sa\'aatii',
          message: 'Gaaffiin keessan {{service}}\'f dursa argatee jira. Qindeessaa pirootokoolii sa\'aatii tokko keessatti isin quunnama.',
          return: 'Gara Pootifooliyootti Deebi\'i'
        }
      },
      footer: {
        hubs: 'Wiirtuuwwan Keenya',
        links: 'Liinkiiwwan Saffisaa',
        tagline: 'Ogummaa Miidhaginaa Fooyyessuu',
        rights: 'Mirgi Hunduu Kan Eegame.'
      },
      common: {
        readMore: 'Dabalata Dubbisi',
        selectLanguage: 'Afaan Filadhu',
        location: 'Bakka',
        phone: 'Bilbila',
        hours: 'Sa\'aatii Hojii',
        viewAll: 'Tajaajiloota Hunda Ilaali',
        branches: 'Wiirtuu Keenya',
        telegram: 'Teleegiraamii',
        local_excellence: 'Olaantummaa Naannoo',
        branches_desc: 'Maamiltoota keenya hundaaf tajaajila qulqulluu kennuuf bakka mijaawaa irratti kan argaman dha.',
        bookNow: 'Amma Bitadhu',
        elevateStyle: 'Akkaataa Kee Olaanaatti Jijjiiri',
        joinElite: 'Kabajamtoota Gadii',
        experienceLuxury: 'Olaantummaa Waliin Muuxannoo Argadhu',
        whyChooseUs: 'Maaliif Nanat Filiitu?',
        distinction: 'PIROOTOKOOLII ADDAA',
        trustedService: 'Tajaajila Amanamaa',
        trustedServiceDesc: 'Maamiltoota kabajamoof tajaajila qulqulluu fi bulchiinsa pirootokoolii amanamu.',
        premiumQuality: 'Qulqullina Olaanaa',
        premiumQualityDesc: 'Uffata dhuunfaa fi faayaa addunyaa kan bifa daldala dursa agarsiisan.',
        affordableLuxury: 'Miidhagina Gatiin Galu',
        affordableLuxuryDesc: 'Qulqullina osoo hin hir\'isin gatii mijaawaan muuxannoo faashinii olaanaa argadhu.',
        fastDelivery: 'Geejjiba Saffisaa',
        fastDeliveryDesc: 'Loojistiksiin filatamaan keenya meeshaalee keessan yeroo qulqulluun akka gahan taasisa.',
        professionalTeam: 'Garee Ogummaa Qabu',
        professionalTeamDesc: 'Gorsitoota bifa ofii fi ogeeyyiin hodhaa pirootokoolii dhuunfaa keessaniif hojjetan.',
        happyClients: 'Maamiltoota Gammadan',
        suitRentals: 'Kiraa Suutii',
        premiumServices: 'Tajaajiloota Olaanoo'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Update html lang attribute on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

// Set initial lang attribute
document.documentElement.lang = i18n.language;

export default i18n;
