const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this beautiful cottage right by the ocean. Perfect for a weekend getaway.",
    image: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", filename: "listingimg" },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.6784, 34.0259] },
    category: "rooms"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Experience the city life in this stylish and spacious loft.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", filename: "listingimg" },
    price: 2500,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
    category: "iconic cities"
  },
  {
    title: "Mountain Retreat",
    description: "A peaceful cabin tucked away in the snowy mountains.",
    image: { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", filename: "listingimg" },
    price: 1200,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: "mountains"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this beautifully restored medieval castle.",
    image: { url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98", filename: "listingimg" },
    price: 10000,
    location: "Edinburgh",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
    category: "castles"
  },
  {
    title: "Luxury Infinity Pool Villa",
    description: "Enjoy breathtaking views from your private infinity pool.",
    image: { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6", filename: "listingimg" },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    category: "amazing pools"
  },
  {
    title: "Rustic Farmhouse",
    description: "A charming farmhouse surrounded by organic vineyards.",
    image: { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "listingimg" },
    price: 900,
    location: "Tuscany",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: "farms"
  },
  {
    title: "Riverside Camping Tent",
    description: "Glamping experience with all modern amenities by the river.",
    image: { url: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03", filename: "listingimg" },
    price: 500,
    location: "Rishikesh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
    category: "camping"
  },
  {
    title: "Parisian Art Studio",
    description: "Stay in the heart of Montmartre in this historic studio.",
    image: { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", filename: "listingimg" },
    price: 2200,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
    category: "iconic cities"
  },
  {
    title: "Tropical Island Resort",
    description: "Private island experience with white sandy beaches.",
    image: { url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000", filename: "listingimg" },
    price: 8000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] },
    category: "amazing pools"
  },
  {
    title: "Nordic Lake House",
    description: "Quiet lakefront house with a private sauna.",
    image: { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", filename: "listingimg" },
    price: 1400,
    location: "Stockholm",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.0686, 59.3293] },
    category: "arctic"
  },
  {
    title: "London Penthouse",
    description: "Overlooking the Thames river and London Eye.",
    image: { url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad", filename: "listingimg" },
    price: 4000,
    location: "London",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5074] },
    category: "iconic cities"
  },
  {
    title: "Tulum Beach Club",
    description: "Vibrant beach club vibes with jungle views.",
    image: { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", filename: "listingimg" },
    price: 1900,
    location: "Tulum",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-87.4624, 20.2114] },
    category: "trending"
  },
  {
    title: "Swiss Alps Chalet",
    description: "Luxury wooden chalet with a fireplace.",
    image: { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb", filename: "listingimg" },
    price: 3600,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2285, 46.0968] },
    category: "mountains"
  },
  {
    title: "Kyoto Machiya House",
    description: "Traditional wooden townhouse in Gion district.",
    image: { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", filename: "listingimg" },
    price: 1700,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
    category: "iconic cities"
  },
  {
    title: "Santorini Cave Villa",
    description: "Whitewashed villa with a private plunge pool.",
    image: { url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff", filename: "listingimg" },
    price: 5500,
    location: "Oia",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3753, 36.4618] },
    category: "amazing pools"
  },
  {
    title: "Provence Lavender Farm",
    description: "Stay amidst blooming lavender fields in summer.",
    image: { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", filename: "listingimg" },
    price: 1100,
    location: "Provence",
    country: "France",
    geometry: { type: "Point", coordinates: [5.3698, 43.2965] },
    category: "farms"
  },
  {
    title: "Sydney Harbour Apartment",
    description: "Watch the fireworks from your balcony over the Opera House.",
    image: { url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9", filename: "listingimg" },
    price: 3800,
    location: "Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] },
    category: "iconic cities"
  },
  {
    title: "Bamboo House",
    description: "Unique sustainable bamboo architecture in the jungle.",
    image: { url: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7", filename: "listingimg" },
    price: 1300,
    location: "Ubud",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.2625, -8.5069] },
    category: "trending"
  },
  {
    title: "Loch Ness Manor",
    description: "Spooky and grand manor near the famous lake.",
    image: { url: "https://images.unsplash.com/photo-1505832018823-50331d70d237", filename: "listingimg" },
    price: 4800,
    location: "Inverness",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2289, 57.4778] },
    category: "castles"
  },
  {
    title: "Rooftop Pool Penthouse",
    description: "Ultra-modern apartment with a glass-bottom pool.",
    image: { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", filename: "listingimg" },
    price: 6000,
    location: "Dubai",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "amazing pools"
  }
];

module.exports = { data: sampleListings };