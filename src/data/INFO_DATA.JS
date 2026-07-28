const infoCenterData = {
  faq: [
    {
      question: "What is the typical timeline for a residential project?",

      answer:
        "The timeline varies depending on project complexity. Typically, design and planning takes 4-8 weeks, approval processes 4-12 weeks, and construction 6-18 months. We provide detailed schedules during initial consultation.",
    },

    {
      question: "What technical drawings do I need for house construction?",

      answer:
        "For complete house construction, you need Site Plan, Floor Plans, Elevations, Sections, Structural Drawings, Electrical Plans, Plumbing Plans, Roof Plan, Door/Window Schedule, and Finishing Details.",
    },

    {
      question:
        "Do you provide structural engineering services for existing buildings?",

      answer:
        "Yes, we offer structural assessments, condition surveys, and refurbishment designs for existing buildings. Our team evaluates structural integrity and provides suitable solutions.",
    },

    {
      question: "What is BIM and how does it benefit my project?",

      answer:
        "Building Information Modeling (BIM) creates digital 3D models with intelligent data. Benefits include better coordination, clash detection, accurate quantity estimation, and lifecycle management.",
    },

    {
      question: "How do I obtain planning permission?",

      answer:
        "We assist with planning applications by preparing required drawings, reports, and documentation required for approval.",
    },

    {
      question: "What sustainable design options do you offer?",

      answer:
        "We incorporate sustainable features including solar integration, rainwater harvesting, energy-efficient insulation, and sustainable materials.",
    },

    {
      question: "What is your fee structure?",

      answer:
        "We offer flexible fee structures including fixed fees, percentage-based fees, and consultation-based pricing depending on project requirements.",
    },
  ],

  drawings: [
    {
      title: "1. Site Plan (Layout Plan)",

      icon: "fas fa-map-marked-alt",

      description:
        "Shows plot boundaries, building position, setbacks, access road, drainage, septic tank, water supply and landscaping.",

      points: [
        "Plot boundaries and dimensions",
        "Building footprint and setbacks",
        "Access roads and parking",
        "Drainage and utilities",
        "Landscaping elements",
      ],
    },

    {
      title: "2. Floor Plans",

      icon: "fas fa-draw-polygon",

      description:
        "Detailed layout of each floor showing room sizes, wall thickness, doors, windows, stairs and space usage.",

      points: [
        "Room dimensions and labels",
        "Door and window locations",
        "Wall thickness and materials",
        "Staircase and circulation",
        "Furniture layout options",
      ],
    },

    {
      title: "3. Elevation Drawings",

      icon: "fas fa-building",

      description:
        "Exterior views of the building showing height, finishes and architectural style.",

      points: [
        "Front, rear and side views",
        "Height dimensions and levels",
        "Exterior finishes and materials",
        "Window and door styles",
        "Roof design features",
      ],
    },

    {
      title: "4. Section Drawings",

      icon: "fas fa-cut",

      description:
        "Cut-through views showing internal heights, structural elements and construction details.",

      points: [
        "Floor-to-floor heights",
        "Foundation details",
        "Roof construction",
        "Wall build-ups",
        "Staircase sections",
      ],
    },

    {
      title: "5. Structural Drawings",

      icon: "fas fa-draw-polygon",

      description:
        "Includes foundation layouts, columns, beams, slabs and reinforcement details.",

      points: [
        "Foundation plans",
        "Column and beam layouts",
        "Slab reinforcement",
        "Structural connections",
        "Material specifications",
      ],
    },

    {
      title: "6. Electrical Drawings",

      icon: "fas fa-bolt",

      description:
        "Shows electrical wiring, lighting points, switches, sockets and power connections.",

      points: [
        "Lighting locations",
        "Switch and socket positions",
        "Distribution board layout",
        "Circuit diagrams",
        "Power calculations",
      ],
    },

    {
      title: "7. Plumbing Drawings",

      icon: "fas fa-water",

      description:
        "Shows water supply, drainage pipes, septic tank and sanitary fixtures.",

      points: [
        "Water supply layout",
        "Drainage pipes",
        "Septic tank design",
        "Manhole locations",
        "Fixture connections",
      ],
    },

    {
      title: "8. Roof Plan",

      icon: "fas fa-home",

      description:
        "Details roof slope, drainage, rainwater outlets and waterproofing.",

      points: [
        "Roof slope direction",
        "Rainwater outlets",
        "Parapet details",
        "Waterproofing specifications",
      ],
    },
  ],

  tips: [
    {
      title: "🏠 छत चुहावट रोक्ने सुझावहरू",

      content: [
        {
          type: "paragraph",

          text: "वर्षा मौसममा छत चुहावट सामान्य समस्या हो। उचित डिजाइन, नियमित मर्मत र सही सामग्री प्रयोग गरेर यसलाई रोक्न सकिन्छ।",
        },

        {
          type: "heading",

          text: "१. घरको छेउमा ठूलो रुख नरोप्नुहोस्",
        },

        {
          type: "paragraph",

          text: "ठूला रुखका हाँगा र जराले छत तथा संरचनामा असर गर्न सक्छन्। भवनबाट सुरक्षित दूरीमा मात्र रुख रोप्नु राम्रो हुन्छ।",
        },

        {
          type: "heading",

          text: "२. छत नियमित जाँच र सफा गर्नुहोस्",
        },

        {
          type: "paragraph",

          text: "छतमा जमेको फोहोर, पात र पानीको निकास नियमित सफा गर्दा चुहावटको सम्भावना कम हुन्छ।",
        },

        {
          type: "heading",

          text: "३. छतको ढलान सही राख्नुहोस्",
        },

        {
          type: "paragraph",

          text: "उचित ढलानले वर्षाको पानी सजिलै बगाउन मद्दत गर्छ र पानी जम्ने समस्या घटाउँछ।",
        },
      ],
    },

    {
      title: "📍 घर बनाउने जग्गा छान्ने सुझावहरू",

      content: [
        {
          type: "paragraph",

          text: "घर निर्माणका लागि जग्गा छनोट गर्दा पहुँच मार्ग, वरिपरिको सुविधा, पानी, बिजुली र सुरक्षालाई ध्यान दिनुपर्छ।",
        },

        {
          type: "heading",

          text: "🚗 पहुँच मार्ग (Access Road)",
        },

        {
          type: "paragraph",

          text: "सजिलो आवतजावत हुने र भविष्यमा मूल्य बढ्ने सम्भावना भएको स्थान छनोट गर्नु राम्रो हुन्छ।",
        },
      ],
    },
  ],

  stats: [
    {
      number: "128+",
      label: "Projects Delivered",
    },

    {
      number: "42",
      label: "Bridges Engineered",
    },

    {
      number: "90+",
      label: "BIM Models Created",
    },

    {
      number: "15",
      label: "Industry Awards",
    },
  ],
};

export default infoCenterData;
