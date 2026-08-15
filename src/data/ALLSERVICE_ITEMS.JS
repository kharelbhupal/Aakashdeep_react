const allServiceItem = [
  // enginnering
  {
    id: 1,
    category: "engineering",
    title: "Engineering Services",
    icon: "fa-tools",
    services: [
      {
        id: 101,
        title: "Highway & Road Design",
        icon: "fa-road",
        tag: "Transportation",
        description:
          "Alignment optimization, pavement design, junction modelling, and comprehensive traffic assessments for urban and rural infrastructure.",
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      },
      {
        id: 102,
        title: "Bridge Engineering",
        icon: "fa-bridge",
        tag: "Infrastructure",
        description:
          "Inspection, load rating, refurbishment and new-build design for pedestrian, highway, and railway bridges using advanced analysis tools.",
        image:
          "https://images.unsplash.com/photo-1582555497446-9ce11d1db93d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        id: 103,
        title: "Drainage & Flood Mitigation",
        icon: "fa-water",
        tag: "Water Management",
        description:
          "Sustainable drainage systems (SuDS), attenuation solutions, and hydraulic modelling to manage surface water and prevent flooding.",
        image:
          "https://plus.unsplash.com/premium_photo-1661373732193-ea19ebe7f51d?w=600&auto=format&fit=crop&q=60",
      },
      {
        id: 104,
        title: "Geotechnical Solutions",
        icon: "fa-mountain",
        tag: "Ground Engineering",
        description:
          "Retaining walls, soil-nailing, slope stability analysis, and foundation design for challenging ground conditions.",
        image:
          "https://images.unsplash.com/photo-1652303713917-2666b8bee507?q=80&w=1074&auto=format&fit=crop",
      },
      {
        id: 105,
        title: "BIM & Digital Engineering",
        icon: "fa-cube",
        tag: "Digital Construction",
        description:
          "Full BIM coordination, 3D modelling, clash detection, and digital twins for efficient project delivery and lifecycle management.",
        image:
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 106,
        title: "Structural Assessment",
        icon: "fa-clipboard-check",
        tag: "Building Safety",
        description:
          "Detailed structural analysis, condition surveys, and remediation strategies for existing buildings and infrastructure.",
        image:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 107,
        title: "Structural Analysis",
        icon: "fa-calculator",
        tag: "Engineering Analysis",
        description:
          "Advanced finite element analysis, load calculations, and structural modeling for complex buildings and infrastructure projects.",
        image:
          "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=779&auto=format&fit=crop",
      },
      {
        id: 108,
        title: "Structural Monitoring",
        icon: "fa-chart-line",
        tag: "Real-Time Monitoring",
        description:
          "Installation and analysis of monitoring systems for critical structures, including real-time data collection and reporting.",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  // residentional section
  {
    id: 2,
    category: "residential",
    title: "Residential Design Services",
    icon: "fa-home",
    services: [
      {
        id: 201,
        title: "Neo-Classical House Design",
        icon: "fa-landmark",
        tag: "Luxury Living",
        description:
          "Grand and elegant look with columns and symmetry. Rich detailing with premium architectural elements. Perfect for luxury and high-end residential projects.",
        image: "./img/neo.jpg",
      },
      {
        id: 202,
        title: "Modern House Design",
        icon: "fa-building",
        tag: "Urban Living",
        description:
          "Flat roofs and large glass windows. Functional and space-efficient design. Most popular for urban homes.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 203,
        title: "American House Design",
        icon: "fa-archway",
        tag: "Family Home",
        description:
          "Cozy design with sloped roofs and front porch. Functional layout with garage and family spaces. Comfortable and practical for everyday living.",
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 204,
        title: "Villa Design",
        icon: "fa-umbrella-beach",
        tag: "Premium Living",
        description:
          "Spacious layout with luxury living experience. Strong indoor–outdoor connection (garden, terrace, pool). Ideal for premium lifestyle and private living.",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
      },
      {
        id: 205,
        title: "Contemporary House Design",
        icon: "fa-palette",
        tag: "Creative Design",
        description:
          "Mix of modern and creative elements. Unique shapes and materials (wood, glass, stone). Focus on aesthetics + functionality.",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 206,
        title: "Minimalist House Design",
        icon: "fa-cube",
        tag: "Simple & Elegant",
        description:
          "Simple, clean, and clutter-free. Neutral colors and open spaces. Cost-effective and elegant.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 207,
        title: "Duplex House Design",
        icon: "fa-building",
        tag: "Investment",
        description:
          "Two-family or rental-friendly design. Separate entrances and functional layout. Ideal for investment properties.",
        image: "./img/duplex.png",
      },
      {
        id: 208,
        title: "Apartment / Rental House Design",
        icon: "fa-city",
        tag: "Rental Income",
        description:
          "Designed for multiple tenants. Maximum space utilization. Income-generating properties.",
        image: "./img/apart.png",
      },
      {
        id: 209,
        title: "Traditional / Nepali House Design",
        icon: "fa-temple",
        tag: "Cultural Heritage",
        description:
          "Inspired by local culture & heritage. Brickwork, wood carvings, and sloped roofs. Perfect blend of tradition + modern comfort.",
        image:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 210,
        title: "Bungalow House Design",
        icon: "fa-home",
        tag: "Accessible Living",
        description:
          "Single-story living. Spacious and easy accessibility. Ideal for families and elderly.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  // commercial section
  {
    id: 3,
    category: "commercial",
    title: "Commercial Design Services",
    icon: "fa-store",
    services: [
      {
        id: 301,
        title: "Commercial Building Design",
        icon: "fa-building",
        tag: "Business Focus",
        description:
          "Modern and attractive exterior design for businesses. Optimized layout for shops, offices, and public flow. Designed for visibility and commercial value.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 302,
        title: "Shop / Showroom Design",
        icon: "fa-store",
        tag: "Retail Excellence",
        description:
          "Eye-catching storefront and display design. Smart space planning to increase sales. Branding-focused interior and exterior.",
        image:
          "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 303,
        title: "Office Building Design",
        icon: "fa-briefcase",
        tag: "Corporate",
        description:
          "Professional and corporate appearance. Efficient workspace planning. Designed for productivity and comfort.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 304,
        title: "Hotel & Resort Design",
        icon: "fa-hotel",
        tag: "Hospitality",
        description:
          "Attractive and welcoming design for guests. Focus on luxury, comfort, and experience. Integrated landscape and outdoor spaces.",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 305,
        title: "Institutional Building Design",
        icon: "fa-university",
        tag: "Public Service",
        description:
          "Schools, colleges, hospitals, and public buildings. Functional and safe design planning. Designed for high user capacity.",
        image: "./img/school.jpg",
      },
      {
        id: 306,
        title: "Mixed-Use Building Design",
        icon: "fa-layer-group",
        tag: "Urban Development",
        description:
          "Shops + offices + residential in one building. Maximum space utilization and income potential. Ideal for urban and city areas.",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  // industrial section
  {
    id: 4,
    category: "industrial",
    title: "Industrial Design Services",
    icon: "fa-industry",
    services: [
      {
        id: 401,
        title: "Factory / Manufacturing Plant Design",
        icon: "fa-factory",
        tag: "Manufacturing",
        description:
          "Efficient layout for smooth production workflow. Designed for heavy machinery and operations. Focus on safety, ventilation, and durability.",
        image:
          "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 402,
        title: "Warehouse & Storage Design",
        icon: "fa-warehouse",
        tag: "Logistics",
        description:
          "Large-span structures for maximum storage. Easy loading/unloading access for logistics. Optimized for inventory management.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 403,
        title: "Industrial Shed Design",
        icon: "fa-drafting-compass",
        tag: "Steel Structure",
        description:
          "Cost-effective steel structure solutions. Quick construction and flexible design. Ideal for factories, workshops, and storage.",
        image:
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 404,
        title: "Workshop / Production Unit Design",
        icon: "fa-tools",
        tag: "Workshop",
        description:
          "Smart layout for machinery and workforce. Proper lighting, ventilation, and safety planning. Designed for efficiency and productivity.",
        image: "./img/workshop.jpg",
      },
      {
        id: 405,
        title: "Logistics & Distribution Center Design",
        icon: "fa-truck",
        tag: "Distribution",
        description:
          "Designed for transport and supply chain flow. Truck access, loading bays, and circulation planning. High-efficiency movement and storage systems.",
        image:
          "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
      },
      {
        id: 406,
        title: "Cold Storage & Specialized Industrial Design",
        icon: "fa-snowflake",
        tag: "Cold Storage",
        description:
          "Temperature-controlled storage facilities. Food, agriculture, and pharma industries. Designed with technical and safety standards.",
        image: "./img/coldstorage.jpg",
      },
    ],
  },
  // infrastructure section
  {
    id: 5,
    category: "infrastructure",
    title: "Infrastructure Services",
    icon: "fa-bridge",
    services: [
      {
        id: 502,
        title: "Public Infrastructure",
        icon: "fa-school",
        tag: "Public Works",
        description:
          "Planning and design for public infrastructure projects. Schools, hospitals, roads, offices, and community buildings. Compliance with government standards, codes, and regulations.",
        image: "/other/government.png",
      },
    ],
  },
  // vastu section
  {
    id: 6,
    category: "vastu",
    title: "Vastu Consultation",
    icon: "fa-om",

    details: {
      heading: "वास्तुशास्त्र परामर्श",

      mantra: `ॐ वास्तुपुरुषाय नमः ।
धनधान्यसमृद्धिं देहि, शुभं भवतु सर्वदा ।`,

      description:
        "हाम्रो कम्पनीले प्राचीन वास्तुशास्त्रका सिद्धान्तहरूलाई उच्च सम्मानका साथ अपनाउँछ। नेपालका धेरै घरधनी तथा व्यवसायिक संस्थाहरूका लागि वास्तु अनुरूप भवन निर्माण गर्नु अत्यन्त महत्वपूर्ण हुने भएकाले हामी यस विषयमा विशेष ध्यान दिन्छौं।",

      features: [
        "दिशा अनुसार मुख्य प्रवेशद्वार",
        "कोठाहरूको उचित व्यवस्थापन",
        "प्राकृतिक प्रकाश र हावापानी",
        "पाँच तत्त्वहरूको सन्तुलन",
      ],

      commitment:
        "परम्परागत ज्ञान र आधुनिक निर्माण प्रविधिको संयोजनमार्फत हामी सुरक्षित, सुन्दर, आरामदायी तथा आध्यात्मिक रूपमा सन्तुलित भवन निर्माण गर्न प्रतिबद्ध छौं।",

      image: "./img/Vastu.png",

      imageTitle: "Vastu Directions",

      imageCaption: "वास्तु दिशा चार्ट - सन्तुलित ऊर्जाका लागि",
    },

    services: [],
  },
  // property valuation section
  {
    id: 7,
    category: "valuation",
    title: "Property Valuation Services",
    icon: "fa-chart-line",
    services: [
      {
        id: 701,
        title: "Residential Property Valuation",
        icon: "fa-calculator",
        tag: "Residential",
        description:
          "Professional valuation services for residential properties including houses, apartments, villas, and land. Accurate market value assessment for buying, selling, or refinancing.",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80",
      },
      {
        id: 702,
        title: "Commercial Property Valuation",
        icon: "fa-store",
        tag: "Commercial",
        description:
          "Comprehensive valuation for commercial properties including offices, shops, showrooms, hotels, and mixed-use developments for investment and business purposes.",
        image:
          "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=1074&auto=format&fit=crop",
      },
      {
        id: 703,
        title: "Land & Plot Valuation",
        icon: "fa-map",
        tag: "Land",
        description:
          "Accurate land valuation services for residential, commercial, and industrial plots. Includes location analysis, market trends, and development potential assessment.",
        image: "/other/land_val.png",
      },
      {
        id: 704,
        title: "Industrial Property Valuation",
        icon: "fa-industry",
        tag: "Industrial",
        description:
          "Specialized valuation services for industrial properties including factories, warehouses, manufacturing plants, and cold storage facilities.",
        image: "/other/industry.png",
      },
      {
        id: 705,
        title: "Investment Property Valuation",
        icon: "fa-chart-pie",
        tag: "Investment",
        description:
          "Expert valuation for investment properties including rental income analysis, ROI calculations, and market trend assessment for informed investment decisions.",
        image: "/other/investment_property.png",
      },
      {
        id: 706,
        title: "Real Estate Consulting",
        icon: "fa-handshake",
        tag: "Consulting",
        description:
          "Professional real estate consulting services including market analysis, feasibility studies, and strategic advisory for property development and investment.",
        image: "/other/realestate.png",
      },
    ],
  },
];

export default allServiceItem;
