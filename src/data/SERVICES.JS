import {
  faRoad,
  faBridge,
  faWater,
  faMountain,
  faCube,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
const SERVICES = [
  {
    service: "Highway & Road Design",
    description:
      "Alignment optimization, pavement design, junction modelling, and comprehensive traffic assessments for urban and rural infrastructure.",
    icon: faRoad,
  },
  {
    service: "Bridge Engineering",
    description:
      "Inspection, load rating, refurbishment and new-build design for pedestrian, highway, and railway bridges using advanced analysis tools.",
    icon: faBridge,
  },
  {
    service: "Drainage & Flood Mitigation",
    description:
      "Sustainable drainage systems (SuDS), attenuation solutions, and hydraulic modelling to manage surface water and prevent flooding.",
    icon: faWater,
  },
  {
    service: "Geotechnical Solutions",
    description:
      "Retaining walls, soil-nailing, slope stability analysis, and foundation design for challenging ground conditions.",
    icon: faMountain,
  },
  {
    service: "BIM & Digital Engineering",
    description:
      "Full BIM coordination, 3D modelling, clash detection, and digital twins for efficient project delivery and lifecycle management.",
    icon: faCube,
  },
  {
    service: "Structural Assessment",
    description:
      "Detailed structural analysis, condition surveys, and remediation strategies for existing buildings and infrastructure.",
    icon: faClipboardCheck,
  },
];

export default SERVICES;
