const projects = [
  {
    id: 1,
    category: "residential",
    title: "Modern Luxury Villa",
    tag: "Residential Design",
    badge: "Concept",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A contemporary villa design featuring open spaces, floor-to-ceiling windows, and seamless indoor-outdoor living with a private garden and infinity pool.",
    details: [
      {
        icon: "fa-vector-square",
        text: "3,500 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Kathmandu Valley",
      },
    ],
  },

  {
    id: 2,
    category: "commercial",
    title: "Mixed-Use Commercial Complex",
    tag: "Commercial Design",
    badge: "Concept",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A modern 5-story commercial building with retail spaces on the ground floor, offices above, and a rooftop garden with panoramic city views.",
    details: [
      {
        icon: "fa-vector-square",
        text: "15,000 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Kathmandu",
      },
    ],
  },

  {
    id: 3,
    category: "sustainable",
    title: "Eco-Friendly Housing Community",
    tag: "Sustainable Design",
    badge: "Green Design",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A sustainable residential community featuring solar panels, rainwater harvesting, vertical gardens, and energy-efficient building materials.",
    details: [
      {
        icon: "fa-leaf",
        text: "Net-Zero Ready",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Outside Valley",
      },
    ],
  },

  {
    id: 4,
    category: "residential",
    title: "Neo-Classical Villa",
    tag: "Residential Design",
    badge: "Concept",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
    description:
      "A grand villa design with classical columns, symmetrical facade, and luxurious interiors featuring marble finishes and premium architectural elements.",
    details: [
      {
        icon: "fa-vector-square",
        text: "4,200 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Lalitpur",
      },
    ],
  },

  {
    id: 5,
    category: "residential",
    title: "Modern Minimalist House",
    tag: "Residential Design",
    badge: "Concept",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A sleek minimalist home featuring clean lines, flat roofs, large glass windows, and an open-plan layout designed for urban living with maximum natural light.",
    details: [
      {
        icon: "fa-vector-square",
        text: "2,800 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Kathmandu",
      },
    ],
  },

  {
    id: 6,
    category: "residential",
    title: "Traditional Nepali Heritage House",
    tag: "Residential Design",
    badge: "Concept",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A beautiful fusion of traditional Nepali architecture with modern comfort, featuring brickwork, intricate wood carvings, sloped roofs, and a courtyard design inspired by Newari heritage.",
    details: [
      {
        icon: "fa-vector-square",
        text: "3,200 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Bhaktapur",
      },
    ],
  },

  {
    id: 7,
    category: "commercial",
    title: "Boutique Hotel & Resort",
    tag: "Commercial Design",
    badge: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A luxurious 20-room boutique hotel design with traditional Nepali aesthetics, modern amenities, landscaped gardens, a rooftop restaurant, and panoramic mountain views.",
    details: [
      {
        icon: "fa-bed",
        text: "20 Rooms",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Pokhara",
      },
    ],
  },

  {
    id: 8,
    category: "sustainable",
    title: "Eco-Friendly School Campus",
    tag: "Sustainable Design",
    badge: "Green Design",
    image:
      "https://images.unsplash.com/photo-1671706466693-28fb04684694?q=80&w=1332&auto=format&fit=crop",
    description:
      "A sustainable school campus design featuring rainwater harvesting, solar power generation, natural ventilation, outdoor learning spaces, and a green playground for holistic education.",
    details: [
      {
        icon: "fa-users",
        text: "500 Students",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Kathmandu Valley",
      },
    ],
  },

  {
    id: 9,
    category: "infrastructure",
    title: "Community Health Center",
    tag: "Infrastructure",
    badge: "Future Project",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A modern 50-bed community hospital design with emergency services, outpatient departments, operation theaters, and specialized clinics, designed for accessibility and patient comfort.",
    details: [
      {
        icon: "fa-hospital",
        text: "50 Beds",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Outside Valley",
      },
    ],
  },

  {
    id: 10,
    category: "industrial",
    title: "Agro-Processing & Cold Storage",
    tag: "Industrial Design",
    badge: "Concept",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A state-of-the-art agro-processing facility with cold storage units, processing lines, and quality control laboratories, designed to support Nepal's agricultural sector with modern infrastructure.",
    details: [
      {
        icon: "fa-warehouse",
        text: "25,000 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Chitwan",
      },
    ],
  },

  {
    id: 11,
    category: "commercial",
    title: "Corporate Office Tower",
    tag: "Commercial Design",
    badge: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "A 10-story corporate office building with modern glass facade, collaborative workspaces, green terraces, and state-of-the-art amenities.",
    details: [
      {
        icon: "fa-vector-square",
        text: "50,000 sq ft",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Kathmandu",
      },
    ],
  },

  {
    id: 12,
    category: "sustainable",
    title: "Urban Drainage & Flood Mitigation",
    tag: "Sustainable Design",
    badge: "Future Project",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    description:
      "A comprehensive drainage system design incorporating SuDS (Sustainable Drainage Systems), flood attenuation, and water management for urban areas.",
    details: [
      {
        icon: "fa-water",
        text: "SuDS Solution",
      },
      {
        icon: "fa-map-marker-alt",
        text: "Kathmandu",
      },
    ],
  },
];

export default projects;
