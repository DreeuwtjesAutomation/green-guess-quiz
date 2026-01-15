export interface PlantQuestion {
  id: number;
  imageUrl: string;
  correctAnswer: string;
  options: string[];
}

export const plantQuestions: PlantQuestion[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop",
    correctAnswer: "Monstera deliciosa",
    options: ["Monstera deliciosa", "Philodendron bipinnatifidum", "Alocasia amazonica", "Epipremnum aureum"],
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    correctAnswer: "Ficus elastica",
    options: ["Ficus lyrata", "Ficus elastica", "Ficus benjamina", "Schefflera arboricola"],
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=600&fit=crop",
    correctAnswer: "Lavandula angustifolia",
    options: ["Salvia officinalis", "Lavandula angustifolia", "Rosmarinus officinalis", "Thymus vulgaris"],
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&h=600&fit=crop",
    correctAnswer: "Helianthus annuus",
    options: ["Rudbeckia hirta", "Helianthus annuus", "Calendula officinalis", "Echinacea purpurea"],
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop",
    correctAnswer: "Rosa centifolia",
    options: ["Paeonia lactiflora", "Rosa centifolia", "Ranunculus asiaticus", "Dahlia pinnata"],
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1518882605630-8b63a8a14e85?w=600&h=600&fit=crop",
    correctAnswer: "Tulipa gesneriana",
    options: ["Narcissus pseudonarcissus", "Tulipa gesneriana", "Hyacinthus orientalis", "Crocus vernus"],
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1567331711402-509c12c41959?w=600&h=600&fit=crop",
    correctAnswer: "Sansevieria trifasciata",
    options: ["Dracaena marginata", "Sansevieria trifasciata", "Aspidistra elatior", "Chlorophytum comosum"],
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1597826368522-9f4cb5a6f8bd?w=600&h=600&fit=crop",
    correctAnswer: "Aloe vera",
    options: ["Haworthia fasciata", "Aloe vera", "Gasteria bicolor", "Agave americana"],
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&h=600&fit=crop",
    correctAnswer: "Fern (Nephrolepis)",
    options: ["Fern (Nephrolepis)", "Asparagus setaceus", "Selaginella kraussiana", "Adiantum capillus-veneris"],
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop",
    correctAnswer: "Pothos (Epipremnum)",
    options: ["Philodendron hederaceum", "Pothos (Epipremnum)", "Scindapsus pictus", "Syngonium podophyllum"],
  },
];

export function getShuffledQuestions(): PlantQuestion[] {
  const shuffled = [...plantQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 10);
}
