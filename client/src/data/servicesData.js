export const servicesData = [
  {
    id: 1,
    title: "Lawn Care",
    description: "Regular mowing, edging, fertilization, and weed control to keep your lawn lush and healthy all year round.",
    icon: "🌱",
    image: "/src/assets/images/services/lawn-care.jpg",
    features: ["Regular Mowing", "Edging", "Fertilization", "Weed Control"]
  },
  {
    id: 2,
    title: "Landscaping",
    description: "Custom landscape design and installation including flower beds, pathways, retaining walls, and water features.",
    icon: "🧱",
    image: "/src/assets/images/services/landscaping.jpg",
    features: ["Custom Design", "Flower Beds", "Pathways", "Retaining Walls"]
  },
  {
    id: 3,
    title: "Tree Trimming",
    description: "Professional tree pruning, shaping, and removal services to maintain safety and aesthetics.",
    icon: "🌳",
    image: "/src/assets/images/services/tree-trimming.jpg",
    features: ["Pruning", "Shaping", "Tree Removal", "Safety Check"]
  },
  {
    id: 4,
    title: "Weeding & Garden Clearance",
    description: "Thorough weeding and garden clearance services to keep your plant beds tidy and healthy.",
    icon: "🌱",
    image: "/src/assets/images/gallery/img1.jpg",
    features: ["Manual Weeding", "Chemical Control", "Total Clearance", "Green Waste Removal"]
  },
  {
    id: 5,
    title: "Grass Cutting",
    description: "Regular or one-off grass cutting and lawn maintenance for a pristine, healthy lawn.",
    icon: "✂️",
    image: "/src/assets/images/services/lawn-care.jpg",
    features: ["Regular Mowing", "Edging", "Lawn Feeding", "Scarification"]
  },
  {
    id: 6,
    title: "Fish Pond Maintenance",
    description: "Comprehensive care for your garden ponds, including cleaning, filter maintenance, and water testing.",
    icon: "🐟",
    image: "/src/assets/images/gallery/img8.jpg",
    features: ["Pond Cleaning", "Pump & Filter Care", "Algae Control", "Plant Maintenance"]
  },
  {
    id: 7,
    title: "Tree Work",
    description: "Professional tree surgery, including pruning, reduction, and safe tree removal.",
    icon: "🌳",
    image: "/src/assets/images/services/tree-trimming.jpg",
    features: ["Crown Reduction", "Tree Felling", "Branch Pruning", "Stump Removal"]
  },
  {
    id: 8,
    title: "Hedge Cutting",
    description: "Expert hedge trimming and shaping to maintain boundaries and keep your garden looking sharp.",
    icon: "📏",
    image: "/src/assets/images/gallery/img15.jpg",
    features: ["Shaping", "Reduction", "Regular Trimming", "Hedge Removal"]
  },
  {
    id: 9,
    title: "Slab Laying",
    description: "High-quality patio and path installation using a variety of paving slabs and natural stone.",
    icon: "🧱",
    image: "/src/assets/images/services/landscaping.jpg",
    features: ["Patio Design", "Path Installation", "Repointing", "Ground Preparation"]
  },
  {
    id: 10,
    title: "Jet Washing",
    description: "Powerful pressure washing to clean driveways, patios, and decking, removing grime and moss.",
    icon: "🌊",
    image: "/src/assets/images/gallery/img22.jpg",
    features: ["Patio Cleaning", "Driveway Washing", "Decking Cleaning", "Brickwork Wash"]
  },
  {
    id: 11,
    title: "Turfing",
    description: "Instant lawn solutions with high-quality turf laying for a lush, green finish.",
    icon: "⛳",
    image: "/src/assets/images/gallery/img4.jpg",
    features: ["Ground Preparation", "Turf Laying", "Total Installation", "Aftercare Advice"]
  },
  {
    id: 12,
    title: "Fake Grass Laying",
    description: "Low-maintenance artificial grass installation for a perfect lawn all year round.",
    icon: "🌾",
    image: "/src/assets/images/gallery/img10.jpg",
    features: ["Standard Artificial Grass", "Pet-Friendly Grass", "Infill Options", "Base Preparation"]
  },
  {
    id: 13,
    title: "Fish Pond Installs",
    description: "Professional design and installation of custom garden fish ponds and water features.",
    icon: "💧",
    image: "/src/assets/images/gallery/img11.jpg",
    features: ["Pond Design", "Liner Installation", "Pump & Filter Setup", "Aquatic Planting"]
  }
]

export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id)
}