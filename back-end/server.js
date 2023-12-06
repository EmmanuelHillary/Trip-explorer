const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const trips = [
  // Africa
  {
    id: 1,
    name: "Safari Adventure",
    continent: "Africa",
    continent_id: 1,
    description: "An exhilarating safari experience in the heart of Africa.",
    imageURL: "",
  },
  {
    id: 2,
    name: "Serengeti Expedition",
    continent: "Africa",
    continent_id: 1,
    description: "Explore the vast landscapes and wildlife of the Serengeti.",
    imageURL: "",
  },
  {
    id: 3,
    name: "Nile River Cruise",
    continent: "Africa",
    continent_id: 1,
    description: "Embark on a scenic cruise along the historic Nile River.",
    imageURL: "",
  },
  {
    id: 4,
    name: "African Wilderness Trek",
    continent: "Africa",
    continent_id: 1,
    description: "Trek through the untamed wilderness of Africa's heartland.",
    imageURL: "",
  },
  {
    id: 5,
    name: "Victoria Falls Discovery",
    continent: "Africa",
    continent_id: 1,
    description: "Witness the awe-inspiring beauty of Victoria Falls.",
    imageURL: "",
  },
  // Asia
  {
    id: 6,
    name: "Zen Garden Retreat",
    continent: "Asia",
    continent_id: 2,
    description: "Relax and rejuvenate in tranquil Asian Zen gardens.",
    imageURL: "",
  },
  {
    id: 7,
    name: "Asian Cultural Immersion",
    continent: "Asia",
    continent_id: 2,
    description: "Immerse yourself in the diverse cultures of Asia.",
    imageURL: "",
  },
  {
    id: 8,
    name: "Ancient Temples Discovery",
    continent: "Asia",
    continent_id: 2,
    description: "Discover ancient temples steeped in history and mystique.",
    imageURL: "",
  },
  {
    id: 9,
    name: "Himalayan Adventure",
    continent: "Asia",
    continent_id: 2,
    description: "Embark on a thrilling adventure amidst the Himalayas.",
    imageURL: "",
  },
  {
    id: 10,
    name: "Tropical Paradise Escape",
    continent: "Asia",
    continent_id: 2,
    description: "Experience paradise in the stunning Asian tropics.",
    imageURL: "",
  },
  // Europe
  {
    id: 11,
    name: "Romantic Paris Getaway",
    continent: "Europe",
    continent_id: 3,
    description:
      "Experience the romance and charm of Paris, the City of Lights.",
    imageURL: "",
  },
  {
    id: 12,
    name: "Historic Rome Tour",
    continent: "Europe",
    continent_id: 3,
    description: "Explore the ancient ruins and historic landmarks of Rome.",
    imageURL: "",
  },
  {
    id: 13,
    name: "Nordic Fjord Expedition",
    continent: "Europe",
    continent_id: 3,
    description:
      "Discover the breathtaking fjords and landscapes of the Nordic countries.",
    imageURL: "",
  },
  {
    id: 14,
    name: "Greek Island Hopping",
    continent: "Europe",
    continent_id: 3,
    description:
      "Sail between the stunning islands of Greece, enjoying the sun and sea.",
    imageURL: "",
  },
  {
    id: 15,
    name: "Alpine Ski Adventure",
    continent: "Europe",
    continent_id: 3,
    description: "Enjoy thrilling ski experiences in the majestic Alps.",
    imageURL: "",
  },

  // North America
  {
    id: 16,
    name: "New York City Explorer",
    continent: "North America",
    continent_id: 4,
    description:
      "Discover the vibrant culture and iconic landmarks of New York City.",
    imageURL: "",
  },
  {
    id: 17,
    name: "Canadian Rockies Journey",
    continent: "North America",
    continent_id: 4,
    description:
      "Explore the natural beauty of the Canadian Rockies and its wildlife.",
    imageURL: "",
  },
  {
    id: 18,
    name: "Californian Road Trip",
    continent: "North America",
    continent_id: 4,
    description: "Embark on a scenic road trip along the California coastline.",
    imageURL: "",
  },
  {
    id: 19,
    name: "Alaskan Wilderness Adventure",
    continent: "North America",
    continent_id: 4,
    description: "Experience the rugged beauty and wildlife of Alaska.",
    imageURL: "",
  },
  {
    id: 20,
    name: "Caribbean Cruise",
    continent: "North America",
    continent_id: 4,
    description: "Sail through the tropical paradise of the Caribbean islands.",
    imageURL: "",
  },

  // South America
  {
    id: 21,
    name: "Amazon Rainforest Expedition",
    continent: "South America",
    continent_id: 5,
    description: "Venture into the heart of the Amazon Rainforest.",
    imageURL: "",
  },
  {
    id: 22,
    name: "Inca Trail to Machu Picchu",
    continent: "South America",
    continent_id: 5,
    description: "Hike the historic Inca Trail to the ancient city of Machu Picchu.",
    imageURL: "",
  },
  {
    id: 23,
    name: "Rio de Janeiro Carnival",
    continent: "South America",
    continent_id: 5,
    description: "Experience the vibrant and colorful Carnival in Rio de Janeiro.",
    imageURL: "",
  },
  {
    id: 24,
    name: "Patagonia Trekking",
    continent: "South America",
    continent_id: 5,
    description: "Trek through the stunning landscapes of Patagonia.",
    imageURL: "",
  },
  {
    id: 25,
    name: "Galapagos Islands Adventure",
    continent: "South America",
    continent_id: 5,
    description: "Explore the unique wildlife and ecosystems of the Galapagos Islands.",
    imageURL: "",
  },
  // Australia
  {
    id: 26,
    name: "Great Barrier Reef Diving",
    continent: "Australia",
    continent_id: 6,
    description: "Dive in the Great Barrier Reef, a world-renowned marine paradise.",
    imageURL: "",
  },
  {
    id: 27,
    name: "Sydney Explorer",
    continent: "Australia",
    continent_id: 6,
    description: "Discover the landmarks and beaches of Sydney.",
    imageURL: "",
  },
  {
    id: 28,
    name: "Outback Wilderness Safari",
    continent: "Australia",
    continent_id: 6,
    description: "Experience the rugged beauty of the Australian Outback.",
    imageURL: "",
  },
  {
    id: 29,
    name: "Tasmanian Wilderness Adventure",
    continent: "Australia",
    continent_id: 6,
    description: "Explore the pristine wilderness of Tasmania.",
    imageURL: "",
  },
  {
    id: 30,
    name: "Kangaroo Island Wildlife",
    continent: "Australia",
    continent_id: 6,
    description: "Get up close with the unique wildlife of Kangaroo Island.",
    imageURL: "",
  },
  // Antarctica
  {
    id: 31,
    name: "Antarctic Expedition Cruise",
    continent: "Antarctica",
    continent_id: 7,
    description: "Embark on a once-in-a-lifetime cruise to the Antarctic Peninsula.",
    imageURL: "",
  },
  {
    id: 32,
    name: "South Pole Adventure",
    continent: "Antarctica",
    continent_id: 7,
    description: "Experience the extreme environment of the South Pole.",
    imageURL: "",
  },
  {
    id: 33,
    name: "Penguin Colony Visit",
    continent: "Antarctica",
    continent_id: 7,
    description: "Visit remote penguin colonies in their natural habitat.",
    imageURL: "",
  },
];

const continents = [
  {
    id: 1,
    name: "Africa",
    description:
      "Known for its vast and diverse landscapes, Africa is home to numerous cultures, languages, and wildlife. Notable features include the Sahara Desert, the Nile River, and a wealth of biodiversity.",
    displayImage:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhfGVufDB8fDB8fHww",
    coverImage:
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adventureIntros: "Embark on an African escapade like never before!",
  },
  {
    id: 2,
    name: "Asia",
    description:
      "The largest continent, Asia is known for its rich history, diverse cultures, and rapid modernization. It includes ancient civilizations, bustling cities, and varied landscapes.",
    displayImage:
      "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1585631474537-46643eea8df2?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fEFzaWF8ZW58MHx8MHx8fDA%3D",
    adventureIntros:
      "Ready to explore the wonders of the world's largest continent?",
  },
  {
    id: 3,
    name: "Europe",
    description:
      "Europe is renowned for its historical significance and cultural diversity, home to many famous landmarks including the Eiffel Tower, the Colosseum, and numerous medieval castles.",
    displayImage:
      "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adventureIntros: "Discover the charm of Europe's timeless treasures",
  },
  {
    id: 4,
    name: "North America",
    description:
      "Featuring diverse landscapes and cultural influences, North America includes bustling cities, the Grand Canyon, Niagara Falls, and more.",
    displayImage:
      "https://images.unsplash.com/photo-1603015245012-68988952fc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9ydGglMjBhbWVyaWNhfGVufDB8fDB8fHww",
    coverImage:
      "https://images.unsplash.com/photo-1575552286163-7ca796f555a9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adventureIntros:
      "Venture into the heart of North America's diverse landscapes!",
  },
  {
    id: 5,
    name: "South America",
    description:
      "Celebrated for its vibrant cultures, tropical rainforests, and ancient ruins, South America is home to the Amazon Rainforest, the Andes Mountains, and historical sites like Machu Picchu.",
    displayImage:
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U291dGglMjBBbWVyaWNhfGVufDB8fDB8fHww",
    coverImage: "",
    adventureIntros:
      "Get ready for a South American odyssey of culture and nature!",
  },
  {
    id: 6,
    name: "Australia",
    description:
      "Known for its unique wildlife and natural wonders, Australia and Oceania comprise diverse islands and the vast Australian Outback, with attractions like the Great Barrier Reef and Ayers Rock.",
    displayImage:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1579288626050-a94bd5178925?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxzb3V0aCUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    adventureIntros:
      "Explore Australia's unique landscapes and vibrant wildlife!",
  },
  {
    id: 7,
    name: "Antarctica",
    description:
      "The most remote and least populated continent, Antarctica is a land of extremes, known for its vast ice sheets and unique wildlife like penguins.",
    displayImage:
      "https://images.unsplash.com/photo-1493328967571-819121ed5085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW50YXJjdGljYXxlbnwwfHwwfHx8MA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1687904536125-29aebeee69c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fEFudGFydGljYXxlbnwwfHwwfHx8MA%3D%3D",
    adventureIntros:
      "Unleash your adventurous spirit in the remote wonders of Antarctica!",
  },
];

app.get("/api/countries", (req, res) => {
  res.json(continents);
});

app.get("/api/countries/:id", (req, res) => {
  const continent = continents.find((t) => t.id === parseInt(req.params.id));
  if (!continent) res.status(404).send("Continent not found");
  const continent_trips = trips.filter(trip => trip.continent_id === continent.id) 
  const data = {
    continent,
    trips: continent_trips
  }
  res.json(data);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
