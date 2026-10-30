/**
 * La Revi - Haute Cuisine & Cellar
 * Modern Interactive Application Engine
 */

// --- Global State ---
const State = {
  currency: 'USD',
  exchangeRates: {
    USD: { rate: 1.0, symbol: '$', code: 'USD' },
    EUR: { rate: 0.92, symbol: '€', code: 'EUR' },
    GBP: { rate: 0.79, symbol: '£', code: 'GBP' },
    JPY: { rate: 155.0, symbol: '¥', code: 'JPY' }
  },
  activeMenuCategory: 'all',
  selectedDish: null,
  audioContext: null,
  isAudioPlaying: false,
  ambientNodes: [],
  bookingData: {
    location: 'Paris (Saint-Germain)',
    guests: 2,
    zone: 'Main Dining Room',
    date: '',
    time: '19:30 PM',
    experience: 'Grand Heritage Tasting (10 Courses)',
    experiencePrice: 285,
    winePairing: false,
    winePairingPrice: 140,
    caviarService: false,
    caviarPrice: 85,
    celebrationPackage: false,
    celebrationPrice: 120,
    salutation: 'Mr.',
    fullName: '',
    email: '',
    phone: '',
    dietary: '',
    specialRequests: '',
    bookingId: ''
  }
};

// --- Menu Database ---
const menuDatabase = [
  {
    id: 'scallop-crudo',
    category: 'starters',
    title: 'Hokkaido Scallop Crudo',
    frenchTitle: 'Crudo de Saint-Jacques de Hokkaido',
    priceUsd: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEv_5zk7eRbQXHJRMCMOdEp5_PYC3loQxkBvAOdEa1XsBWVms9iuZSSO__eiIW5GUhGyYV8KrkANJkIta8WEy75uroiVVxp200K87CLrkoJlnCaV4FUBM2D7fTXxpViGGGY5vh4mdVNrmCERXDK2J-Y9sL78WS6-utnpt9GMGZkTN1fPPb5b6ebCpl8SxIMBlen-h5plf7VSQrOzU2A6p_krIC0j6ble8JC1_wyFFL',
    desc: 'Osciètre Caviar, Meyer Lemon Emulsion, Sea Asparagus, Brown Butter Dashi.',
    story: 'Directly sourced from Hokkaido sub-arctic divers within 24 hours of harvest, sliced wafer-thin and accented with Royal Oscietra caviar and a 48-hour clarified brown butter dashi.',
    pairing: '2020 Domaine François Raveneau Chablis Premier Cru',
    badges: ["Chef's Signature", 'Gluten-Free', 'Raw Bar'],
    highlights: 'Wild-harvested, Zero culinary footprint'
  },
  {
    id: 'foie-gras',
    category: 'starters',
    title: 'Imperial Foie Gras Torchon',
    frenchTitle: 'Torchon de Foie Gras Impérial',
    priceUsd: 75,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    desc: 'Artisanal Brioche Feuilletée, Spiced Poached Quince Gelée, Tasmanian Mountain Pepper.',
    story: 'Ethically sourced Landes duck liver marinated in Armagnac 1985 and rolled in sea salt for 72 hours before gentle poaching.',
    pairing: '2017 Château d’Yquem Sauternes Premier Cru Supérieur',
    badges: ['Heritage Classic', 'Rich & Decadent'],
    highlights: 'Aged Armagnac marinade'
  },
  {
    id: 'black-truffle-agnolotti',
    category: 'starters',
    title: 'Perigord Black Truffle Agnolotti',
    frenchTitle: 'Agnolotti à la Truffe Noire du Périgord',
    priceUsd: 90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk4InPkR4jKX8LTXGzM0DN6FLJvXjYQ6_YEDNpVypwO-76PMJpQfeX5_T-8bi7m1kbWe4y-jzzxfBNaZt7uOwyScmdlEkk5CAN1pozrnt_tq9MTfufsjjiG9F3VyeKq1O4yJhga6Y1BBmgvHpq4aXHGgWcI9xjZSnPDxkS00rN9qylwlVkGHx5HOHgW4-ZTO4I2ViLCIXW3k8lf8oHnk1FzvAhDMvkBfIYg-OhM82I',
    desc: '36-Month Parmigiano-Reggiano, Fermented Mountain Butter, Hazelnut Crisp.',
    story: 'Hand-crimped Piedmontese pasta filled with mountain ricotta and bathed in whole Périgord black truffles shaved tableside.',
    pairing: '2018 Giacomo Conterno Barolo Francia',
    badges: ['Vegetarian', 'Tableside Shaving'],
    highlights: 'Fresh Périgord truffles'
  },
  {
    id: 'king-crab-tartare',
    category: 'starters',
    title: 'Norwegian King Crab Tartare',
    frenchTitle: 'Tartare de Crabe Royal de Norvège',
    priceUsd: 80,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNI2TCfPNeOgUp68K5LtwtPCwqTZkxs92hbcXiYZrDilFul4iC-suAY4wovYzHIIvhKXS9MLxAQ2-ni9PA_WnT2xz5xHabcVPkMFKoiequhfcM3iJi1zaMb-6dpiTNPaockxA7RJeP2h-H5XqrtitCyG9ztb86UAnd_5H4eJN3SpTX2opmBqaBNVLjY8WiPNJJZXJ1z2JwHZXTpviqFxFh6anhvafYgJbnwENWnmm',
    desc: 'Royal Caviar, Sea Buckthorn Coulis, Shiso Emulsion, Hand-Harvested Wakame Crisp.',
    story: 'Fresh king crab leg meat lightly tossed with kaffir lime zest and layered on compressed cucumber ribbons.',
    pairing: '2019 Domaine Leflaive Puligny-Montrachet',
    badges: ['Gluten-Free', 'Seafood'],
    highlights: 'Line-caught Arctic crab'
  },
  {
    id: 'canard-duck',
    category: 'mains',
    title: 'Dry-Aged Canard Duck',
    frenchTitle: 'Canard de Challans Rôti au Miel d’Acacia',
    priceUsd: 115,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC40S1kkAekehVDaNhqbYaZZIXFFEB2Pbymgnxqa-GkHBzyi8DE6HkOfMQPs_Z2f1uiUjzxPWKu606CJUWmVLDxWZH9x1N8X0O0eL2YroDbpTquBFCY_fRgzcGeFepZNxrdv4ke2Q5jRdPw6wtkrMrlj4RpO290wTGtp8Xuf6MVkTedZUOa7qZmw7rl9MYmyHiX5I3EWNPvkYp9YL4XwpbnMFVemn4S4xpIIouY1UbL',
    desc: 'Fermented Blackberry Glaze, Roasted Salsify, Lavender Infused Jus.',
    story: 'Aged for 21 days in our custom Himalayan salt curing room. Crisped over binchotan charcoal and glazed with wild forest blackberry reduction.',
    pairing: '2016 Domaine de la Romanée-Conti Échezeaux Grand Cru',
    badges: ["Chef's Signature", '21-Day Dry Aged'],
    highlights: 'Binchotan embers roast'
  },
  {
    id: 'miyazaki-wagyu',
    category: 'mains',
    title: 'A5 Miyazaki Wagyu Tenderloin',
    frenchTitle: 'Filet de Wagyu A5 de Miyazaki',
    priceUsd: 165,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    desc: 'Charred Alliums, Bone Marrow Glaze, Pomme Purée Robuchon, Morel Reduction.',
    story: 'Certified A5 BMS 11 Wagyu from Miyazaki Prefecture, seared tableside on Japanese river stones and finished with 50-year aged balsamic.',
    pairing: '2015 Château Margaux Premier Grand Cru Classé',
    badges: ['Prime Selection', 'Gluten-Free', 'Rare Vintage Pairing'],
    highlights: 'BMS 11 Marbling grade'
  },
  {
    id: 'brittany-turbot',
    category: 'mains',
    title: 'Brittany Wild Turbot',
    frenchTitle: 'Turbot Sauvage de Bretagne',
    priceUsd: 125,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    desc: 'Sea Urchin Emulsion, Salicornia, Braised Baby Fennel, Vintage Champagne Foam.',
    story: 'Sustainably landed by Brittany day boats. Slow-poached in fumet infused with sea kelp, paired with a cloud-light sea urchin velouté.',
    pairing: '2018 Domaine des Comtes Lafon Meursault-Charmes',
    badges: ['Seafood', 'Gluten-Free'],
    highlights: 'Wild day-boat catch'
  },
  {
    id: 'iberico-presa',
    category: 'mains',
    title: 'Ibérico Pork Presa Bellota',
    frenchTitle: 'Presa Ibérique Bellota Rôtie',
    priceUsd: 105,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    desc: 'Wild Chanterelles, Smoked Chestnut Crema, Pedro Ximénez Reduction.',
    story: 'Acorn-fed free-range Ibérico pork cooked medium-rare over oak coals, paired with seasonal chanterelles foraged in Fontainebleau.',
    pairing: '2017 Vega Sicilia Único Ribera del Duero',
    badges: ['100% Bellota', 'Gluten-Free'],
    highlights: 'Free-range acorn fed'
  },
  {
    id: 'valrhona-gold',
    category: 'desserts',
    title: 'Valrhona Gold Sphere',
    frenchTitle: 'Sphère d’Or Valrhona Guanaja',
    priceUsd: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWKsy985QLXFRczc3wBS_NcMF46yQoetbL6y-r5jdHGLFLGQ_3f8PTUYxveVtfiWr6K0uFLTnU4d6c1og7UOH2EQ-0Sn_1_lfrQdwofmPZtz6GES8eE3DHc72_6P9sVrnACgy_KwNAB_z81xrz9Q_tv6gO5DtuRl1nj_jeUJNLXCwabUtPZob2EUrlpiNVezBL_wPW95NcimNX47llom-dwPCRm0AJ6IQNy44VMwAA',
    desc: '70% Guanaja Chocolate, Smoked Vanilla Bean Gelato, Salted Caramel Tuile.',
    story: 'An architectural dark chocolate orb brushed with 24k gold leaf. Melted tableside with piping hot salted Madagascar vanilla caramel.',
    pairing: '20-Year Old Taylor Fladgate Tawny Port',
    badges: ["Confectionery Art", "Chef's Signature"],
    highlights: 'Interactive tableside melt'
  },
  {
    id: 'vanilla-millefeuille',
    category: 'desserts',
    title: 'Smoked Vanilla Mille-Feuille',
    frenchTitle: 'Mille-Feuille Caramélisé à la Vanille Fumée',
    priceUsd: 40,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    desc: 'Caramelized Inverted Puff Pastry, Bourbon Caviar Cream, Gold Leaf.',
    story: '72-layer caramelized arlettes enclosing whipped ganache made with triple-smoked Tahitian vanilla beans.',
    pairing: '2013 Tokaji Aszú 6 Puttonyos',
    badges: ['Vegetarian', 'Classic Haute Pâtisserie'],
    highlights: 'Triple-smoked Tahitian vanilla'
  },
  {
    id: 'yuzu-peach',
    category: 'desserts',
    title: 'Yuzu & White Peach Blossom',
    frenchTitle: 'Éclosion de Yuzu & Pêche Blanche',
    priceUsd: 38,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    desc: 'Calamansi Sorbet, Matcha Crisp, Bergamot Meringue, Jasmine Dew.',
    story: 'A refreshing tribute to Japanese citrus orchards, featuring crystallized white peach petals and frozen calamansi pearl spheres.',
    pairing: '2021 Vietti Cascinetta Moscato d’Asti',
    badges: ['Gluten-Free', 'Refreshing & Light'],
    highlights: 'Japanese citrus symphony'
  },
  {
    id: 'artisanal-cheese',
    category: 'desserts',
    title: 'Fromages Affinés du Maître',
    frenchTitle: 'Sélection de Fromages de Grands Affineurs',
    priceUsd: 50,
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=800&q=80',
    desc: '36-Month Comté, Roquefort Papillon, Époisses de Bourgogne, Wild Truffle Honeycomb.',
    story: 'Curated directly from Bernard Antony and Xavier David cellars, presented on our hand-carved walnut cheese trolley.',
    pairing: '2017 Domaine Dujac Morey-Saint-Denis',
    badges: ['AOP Certified', 'Trolley Presentation'],
    highlights: 'Aged cave master selection'
  },
  {
    id: 'cocktail-boulevardier',
    category: 'pairings',
    title: 'The Smoky Truffle Boulevardier',
    frenchTitle: 'Boulevardier Fumé aux Truffes Noires',
    priceUsd: 35,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    desc: 'Small Batch Kentucky Bourbon, Périgord Truffle Vermouth, Campari, Applewood Smoke.',
    story: 'Poured from an apothecary decanter saturated with aromatic charred applewood smoke into hand-cut Baccarat crystal.',
    pairing: 'Ideal with Canard Duck or Truffle Agnolotti',
    badges: ['Signature Mixology', 'Tableside Smoke'],
    highlights: 'Hand-cut Baccarat crystal'
  },
  {
    id: 'cocktail-champagne-gold',
    category: 'pairings',
    title: 'Champagne & Saffron 24k Royale',
    frenchTitle: 'Royale Impériale au Safran & Feuille d’Or',
    priceUsd: 40,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    desc: 'Dom Pérignon 2013, Hennessy XO, Persian Saffron Nectar, Edible 24k Gold Flakes.',
    story: 'An effervescent aperitif that glistens like liquid jewelry, accented with organic botanical saffron from Kashan.',
    pairing: 'Perfect opening pairing for Scallop Crudo',
    badges: ['24k Edible Gold', 'Prestige Aperitif'],
    highlights: 'Vintage Dom Pérignon base'
  },
  {
    id: 'sommelier-prestige',
    category: 'pairings',
    title: 'Prestige Grand Cru Flight (6 Pours)',
    frenchTitle: 'Accord Grand Cru Prestige du Sommelier',
    priceUsd: 190,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD80PkSbQya8rLf5UrhqePqc9VKoWPoqPNQcPrM7gX50Lhs3DD4pKMAf9OJheWDdaPSr0eGm_3cGEtJDBjNIlRWVaTxjPw7StwErmHrVQs66J1bpLZpkfp3eEDIzKZTYE76oz7R6634PNNbVE7PYkK7veqcI9KTZq01ocpUC8lnts-GrGofCQsPjByIwZvQTo5CFvhQAR7h8kJbO3bbDDnmUcMUJVU6Nt4hkXkSC-Ty',
    desc: 'Six hand-selected pours from our 2,500-bottle cellar vault matching each tasting course.',
    story: 'Curated by Head Sommelier Éléonore Mercier, featuring library vintages of DRC, Château Margaux, and rare grower Champagnes.',
    pairing: 'Accompanies the 10-Course Grand Tasting',
    badges: ['Cellar Vault Access', 'Rare Vintages'],
    highlights: 'Sommelier tableside service'
  }
];

// --- Tasting Menu Course Progression ---
const tastingCourses = [
  { step: '01', course: "L'Éveil", title: 'Smoked Sea Urchin & Yuzu Pearls', notes: 'Hokkaido Uni, dashi gelee, finger lime caviar', wine: 'Krug Grande Cuvée 170th Edition' },
  { step: '02', course: 'Le Jardin', title: 'Heirloom Baby Vegetables & Truffle Soil', notes: '40 micro-vegetables, hazelnut dust, herb emulsion', wine: '2021 Didier Dagueneau Blanc Fumé' },
  { step: '03', course: "L'Océan", title: 'Hokkaido Scallop Crudo & Caviar', notes: 'Oscietra Royal, Meyer lemon, sea asparagus', wine: '2020 Chablis Premier Cru Raveneau' },
  { step: '04', course: 'La Rivière', title: 'Brittany Wild Turbot Poached in Fumet', notes: 'Sea urchin foam, salicornia, baby leeks', wine: '2018 Meursault Charmes Domaine des Comtes Lafon' },
  { step: '05', course: 'Le Palais', title: 'Bergamot Sorbet with Champagne Foam', notes: 'Intermezzo palate cleanser with elderflower dew', wine: 'Palate cleansing rinse' },
  { step: '06', course: 'Le Terroir', title: 'Dry-Aged Canard Duck with Blackberry Jus', notes: 'Fermented berries, salsify, lavender', wine: '2016 Vosne-Romanée DRC' },
  { step: '07', course: 'La Majesté', title: 'A5 Miyazaki Wagyu & Robuchon Purée', notes: 'Charred alliums, bone marrow jus, black truffle', wine: '2015 Château Margaux Grand Cru' },
  { step: '08', course: 'Les Terroirs', title: 'Affiné Farmhouse Cheese Trolley', notes: '36-month Comté, Roquefort, honeycomb', wine: '2017 Domaine Dujac Morey-Saint-Denis' },
  { step: '09', course: "L'Or Noir", title: 'Valrhona Gold Sphere & Smoked Gelato', notes: 'Guanaja chocolate, gold leaf, warm salted caramel', wine: '20-Year Taylor Fladgate Tawny Port' },
  { step: '10', course: 'Mignardises', title: 'Artisanal Macarons & Truffles', notes: 'Saffron macarons, smoked sea salt caramels, herbal infusion', wine: 'Rare Mountain Oolong Tea' }
];

// --- Reviews & Press Data ---
const pressReviews = [
  {
    quote: "La Revi delivers a masterclass in modern gastronomy. Every course is an exquisite revelation of flavor and artistic vision that lingers in memory long after the evening ends.",
    author: "Michelin Guide Inspector",
    source: "Michelin Guide France (3 Stars)",
    rating: 5
  },
  {
    quote: "Chef Alexandre Vance transforms dining into theater. The dry-aged Canard and Hokkaido scallop crudo are absolute milestones of 21st-century culinary artistry.",
    author: "Frank Bruni / Pete Wells Selection",
    source: "The New York Times Gastronomy",
    rating: 5
  },
  {
    quote: "The 2,500-bottle cellar overseen by Éléonore Mercier is nothing short of a national treasure. An essential pilgrimage for any true connoisseur.",
    author: "World’s 50 Best Restaurants Academy",
    source: "Global Culinary Heritage Award",
    rating: 5
  },
  {
    quote: "Dining here feels like an intimate ballet of quiet luxury. The hospitality is gracious, intuitive, and genuinely extraordinary from the first champagne flute to the final mignardise.",
    author: "Lord Henry & Lady Clarissa Davenport",
    source: "Private Dining Patrons, London",
    rating: 5
  }
];

// --- Utility Functions ---
function formatPrice(usdAmount) {
  const current = State.exchangeRates[State.currency];
  const converted = Math.round(usdAmount * current.rate);
  if (State.currency === 'JPY') {
    return `${current.symbol}${converted.toLocaleString()}`;
  }
  return `${current.symbol}${converted}`;
}

function showToast(message, type = 'gold') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `px-6 py-4 rounded-none bg-surface-container-high border ${
    type === 'gold' ? 'border-primary text-on-surface' : 'border-outline-variant text-on-surface'
  } shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-4 opacity-0 z-50`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-primary text-[20px]">
      ${type === 'gold' ? 'hotel_class' : 'info'}
    </span>
    <span class="text-sm font-light tracking-wide">${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// --- Menu Rendering & Filtering ---
function renderMenu(category = 'all') {
  const grid = document.getElementById('menu-items-grid');
  if (!grid) return;

  let items = menuDatabase;
  if (category !== 'all') {
    items = menuDatabase.filter(item => item.category === category);
  }

  grid.innerHTML = items.map(dish => `
    <div class="bg-surface-container-low flex flex-col group overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-outline-variant/30 hover:border-primary/50 relative">
      <div class="h-64 sm:h-72 overflow-hidden relative cursor-pointer" onclick="openDishModal('${dish.id}')">
        <div class="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-700" 
             style="background-image: url('${dish.image}')" 
             loading="lazy">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <span class="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 text-label-sm text-primary tracking-widest border border-primary/30 font-medium">
          ${formatPrice(dish.priceUsd)}
        </span>
        <div class="absolute bottom-3 left-4 flex flex-wrap gap-1">
          ${dish.badges.map(b => `<span class="bg-surface-container-highest/80 backdrop-blur-sm text-[10px] tracking-wider uppercase px-2 py-0.5 text-on-surface-variant border border-outline-variant/30">${b}</span>`).join('')}
        </div>
      </div>
      <div class="p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          <div class="flex justify-between items-baseline mb-1">
            <h3 class="font-serif-luxury text-xl text-on-surface hover:text-primary transition-colors cursor-pointer" onclick="openDishModal('${dish.id}')">
              ${dish.title}
            </h3>
          </div>
          <p class="text-xs text-primary/80 italic mb-2 tracking-wide font-light">${dish.frenchTitle}</p>
          <p class="text-xs text-on-surface-variant leading-relaxed line-clamp-2">${dish.desc}</p>
        </div>
        
        <div class="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
          <button onclick="openDishModal('${dish.id}')" class="text-[11px] uppercase tracking-widest text-primary hover:text-on-primary-container flex items-center gap-1 group/btn font-medium">
            Story &amp; Pairing
            <span class="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button onclick="quickSelectForBooking('${dish.title}')" class="text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/30 px-2.5 py-1 hover:border-primary">
            Request in Tasting
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu(category, clickedBtn) {
  State.activeMenuCategory = category;
  document.querySelectorAll('.menu-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }
  renderMenu(category);
}

// --- Dish Detail Modal ---
function openDishModal(dishId) {
  const dish = menuDatabase.find(d => d.id === dishId);
  if (!dish) return;
  State.selectedDish = dish;

  const modal = document.getElementById('dish-detail-modal');
  const content = document.getElementById('dish-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-0 bg-surface-container-low border border-outline-variant shadow-2xl max-w-4xl w-full mx-auto overflow-hidden">
      <div class="md:col-span-6 relative min-h-[320px] md:min-h-full">
        <div class="bg-cover bg-center w-full h-full" style="background-image: url('${dish.image}')"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent md:hidden"></div>
      </div>
      <div class="md:col-span-6 p-8 md:p-10 flex flex-col justify-between gap-6">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] uppercase tracking-[0.2em] text-primary font-medium">Chef's Gastronomy</span>
            <span class="text-xl font-serif-luxury text-primary">${formatPrice(dish.priceUsd)}</span>
          </div>
          <h2 class="font-serif-luxury text-2xl md:text-3xl text-on-surface mb-1">${dish.title}</h2>
          <p class="text-sm italic text-primary/80 mb-4 font-light">${dish.frenchTitle}</p>
          <p class="text-sm text-on-surface-variant leading-relaxed mb-6 font-light">${dish.story}</p>
          
          <div class="space-y-3 pt-4 border-t border-outline-variant/30">
            <div>
              <span class="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">Key Elements</span>
              <p class="text-xs text-on-surface">${dish.desc}</p>
            </div>
            <div>
              <span class="text-[10px] uppercase tracking-widest text-primary block mb-1">Sommelier Cellar Pairing</span>
              <p class="text-xs text-on-surface-variant italic flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px] text-primary">wine_bar</span>
                ${dish.pairing}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row gap-3">
          <button onclick="bookWithDishPreselected('${dish.title}')" class="flex-1 py-3 bg-primary text-on-primary text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors font-semibold text-center">
            Book Tasting Table
          </button>
          <button onclick="closeDishModal()" class="py-3 px-6 border border-outline-variant text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDishModal() {
  const modal = document.getElementById('dish-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function bookWithDishPreselected(dishTitle) {
  closeDishModal();
  const resSection = document.getElementById('reservations');
  if (resSection) {
    resSection.scrollIntoView({ behavior: 'smooth' });
    const requestsField = document.getElementById('res-special-requests');
    if (requestsField) {
      requestsField.value = `Please feature '${dishTitle}' in our tasting course if available.`;
    }
    showToast(`Preferences updated: '${dishTitle}' selected for your reservation.`, 'gold');
  }
}

function quickSelectForBooking(dishTitle) {
  const resSection = document.getElementById('reservations');
  if (resSection) {
    resSection.scrollIntoView({ behavior: 'smooth' });
    const requestsField = document.getElementById('res-special-requests');
    if (requestsField) {
      if (!requestsField.value.includes(dishTitle)) {
        requestsField.value = requestsField.value ? `${requestsField.value}\nRequested course: ${dishTitle}` : `Requested course: ${dishTitle}`;
      }
    }
    showToast(`Added '${dishTitle}' to your dining requests.`, 'gold');
  }
}

// --- Tasting Menu Progression Render ---
function renderTastingJourney() {
  const container = document.getElementById('tasting-journey-steps');
  if (!container) return;

  container.innerHTML = tastingCourses.map(item => `
    <div class="relative pl-10 pb-8 border-l border-outline-variant/40 last:border-0 group">
      <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-none bg-surface-container-high border border-primary flex items-center justify-center text-[10px] text-primary font-bold group-hover:bg-primary group-hover:text-on-primary transition-colors">
        ${item.step}
      </div>
      <div>
        <div class="flex items-center gap-3">
          <span class="text-[11px] uppercase tracking-widest text-primary font-medium">${item.course}</span>
          <span class="text-xs text-on-surface-variant font-light">• Course ${parseInt(item.step)} of 10</span>
        </div>
        <h4 class="font-serif-luxury text-lg text-on-surface mt-1">${item.title}</h4>
        <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">${item.notes}</p>
        <div class="mt-2.5 flex items-center gap-2 text-[11px] text-primary/80">
          <span class="material-symbols-outlined text-[14px]">wine_bar</span>
          <span class="italic font-light">${item.wine}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// --- Currency Switcher ---
function setCurrency(newCurrency) {
  if (!State.exchangeRates[newCurrency]) return;
  State.currency = newCurrency;
  
  // Update currency labels
  document.querySelectorAll('.current-currency-label').forEach(el => el.textContent = newCurrency);
  
  // Re-render menu
  renderMenu(State.activeMenuCategory);
  
  // Update event calculator
  calculatePrivateEventProposal();
  
  // Update reservation summary
  updateReservationPriceSummary();
  
  showToast(`Currency updated to ${newCurrency} (${State.exchangeRates[newCurrency].symbol})`);
}

// --- Private Dining & Event Proposal Calculator ---
function calculatePrivateEventProposal() {
  const spaceSelect = document.getElementById('event-space-select');
  const guestInput = document.getElementById('event-guests-input');
  const tierSelect = document.getElementById('event-tier-select');
  const pairingSelect = document.getElementById('event-pairing-select');
  
  if (!spaceSelect || !guestInput || !tierSelect || !pairingSelect) return;

  const guests = parseInt(guestInput.value) || 12;
  const space = spaceSelect.value;
  
  let basePerPerson = 250; // Discovery
  if (tierSelect.value === 'heritage') basePerPerson = 320;
  if (tierSelect.value === 'imperial') basePerPerson = 450;

  let pairingPerPerson = 0;
  if (pairingSelect.value === 'classic') pairingPerPerson = 120;
  if (pairingSelect.value === 'prestige') pairingPerPerson = 190;

  const roomRental = space === 'salon' ? 1000 : 2500;
  const foodAndBevTotal = (basePerPerson + pairingPerPerson) * guests;
  const totalUsd = foodAndBevTotal + roomRental;
  const perPersonTotalUsd = totalUsd / guests;

  const totalEl = document.getElementById('event-calc-total');
  const perPersonEl = document.getElementById('event-calc-per-person');
  const breakdownEl = document.getElementById('event-calc-breakdown');

  if (totalEl) totalEl.textContent = formatPrice(totalUsd);
  if (perPersonEl) perPersonEl.textContent = `${formatPrice(perPersonTotalUsd)} / guest`;
  if (breakdownEl) {
    breakdownEl.textContent = `${guests} Guests • ${space === 'salon' ? 'Le Salon Privé' : 'The Grand Atrium'} • Includes ${formatPrice(roomRental)} salon exclusivity & sommelier concierge.`;
  }
}

// --- Interactive Table Reservation Engine ---
function initReservationEngine() {
  // Set default minimum date to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    State.bookingData.date = dateInput.value;
  }

  // Update live preview
  updateReservationPriceSummary();
}

function selectTimeSlot(slot, btnElement) {
  State.bookingData.time = slot;
  document.querySelectorAll('.time-slot-btn').forEach(btn => {
    btn.classList.remove('bg-primary', 'text-on-primary', 'font-semibold', 'border-primary');
    btn.classList.add('bg-surface', 'text-on-surface', 'border-outline-variant/30');
  });
  if (btnElement) {
    btnElement.classList.remove('bg-surface', 'text-on-surface', 'border-outline-variant/30');
    btnElement.classList.add('bg-primary', 'text-on-primary', 'font-semibold', 'border-primary');
  }
  updateReservationPriceSummary();
}

function updateReservationPriceSummary() {
  const guestsSelect = document.getElementById('res-guests');
  const experienceSelect = document.getElementById('res-experience');
  const wineCheck = document.getElementById('res-addon-wine');
  const caviarCheck = document.getElementById('res-addon-caviar');
  const celebCheck = document.getElementById('res-addon-celeb');

  const guests = parseInt(guestsSelect ? guestsSelect.value : State.bookingData.guests) || 2;
  State.bookingData.guests = guests;

  let experienceBase = 285; // Grand Heritage
  let experienceName = 'Grand Heritage Tasting (10 Courses)';
  if (experienceSelect) {
    if (experienceSelect.value === 'discovery') {
      experienceBase = 195;
      experienceName = 'Seasonal Discovery Tasting (7 Courses)';
    } else if (experienceSelect.value === 'alacarte') {
      experienceBase = 150;
      experienceName = 'À La Carte Chef Selections (Minimum)';
    }
  }
  State.bookingData.experience = experienceName;
  State.bookingData.experiencePrice = experienceBase;

  State.bookingData.winePairing = wineCheck ? wineCheck.checked : false;
  State.bookingData.caviarService = caviarCheck ? caviarCheck.checked : false;
  State.bookingData.celebrationPackage = celebCheck ? celebCheck.checked : false;

  let perPerson = experienceBase;
  if (State.bookingData.winePairing) perPerson += State.bookingData.winePairingPrice;
  if (State.bookingData.caviarService) perPerson += State.bookingData.caviarPrice;

  let totalEstimate = perPerson * guests;
  if (State.bookingData.celebrationPackage) totalEstimate += State.bookingData.celebrationPrice;

  const totalEl = document.getElementById('res-summary-total');
  const summaryDetails = document.getElementById('res-summary-details');

  if (totalEl) totalEl.textContent = formatPrice(totalEstimate);
  if (summaryDetails) {
    summaryDetails.textContent = `${guests} Guests • ${experienceName} ${
      State.bookingData.winePairing ? '+ Sommelier Wine Flight' : ''
    }`;
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const salutation = document.getElementById('res-salutation')?.value || 'Mr.';
  const fullName = document.getElementById('res-name')?.value || 'Valued Guest';
  const email = document.getElementById('res-email')?.value || '';
  const phone = document.getElementById('res-phone')?.value || '';
  const date = document.getElementById('res-date')?.value || '';
  const zone = document.getElementById('res-zone')?.value || 'Main Dining Room';
  const dietary = document.getElementById('res-dietary')?.value || 'None specified';
  const specialRequests = document.getElementById('res-special-requests')?.value || '';

  // Generate Booking Code
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const bookingId = `LR-${randomNum}`;

  State.bookingData.salutation = salutation;
  State.bookingData.fullName = fullName;
  State.bookingData.email = email;
  State.bookingData.phone = phone;
  State.bookingData.date = date;
  State.bookingData.zone = zone;
  State.bookingData.dietary = dietary;
  State.bookingData.specialRequests = specialRequests;
  State.bookingData.bookingId = bookingId;

  // Persist to localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('la_revi_reservations') || '[]');
    existing.unshift({
      ...State.bookingData,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('la_revi_reservations', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage not available', err);
  }

  // Play subtle confirmation chime if audio enabled
  playChime();

  // Show Confirmation Modal
  showBookingConfirmationModal(State.bookingData);
}

function showBookingConfirmationModal(data) {
  const modal = document.getElementById('booking-confirmation-modal');
  const content = document.getElementById('booking-confirmation-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div id="printable-voucher" class="bg-surface-container-low border border-primary/40 shadow-2xl p-8 md:p-12 max-w-2xl w-full mx-auto relative overflow-hidden">
      <!-- Watermark crest -->
      <div class="absolute -right-12 -bottom-12 opacity-5 pointer-events-none select-none text-[160px] font-serif-luxury text-primary">
        LR
      </div>

      <div class="text-center mb-8 border-b border-outline-variant/30 pb-6">
        <span class="text-[11px] uppercase tracking-[0.3em] text-primary block mb-2 font-medium">Reservation Confirmed</span>
        <h2 class="font-serif-luxury text-3xl md:text-4xl text-on-surface">La Revi Haute Cuisine</h2>
        <p class="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Boulevard Saint-Germain • Paris</p>
      </div>

      <div class="bg-surface-container-high/60 border border-outline-variant/30 p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <span class="text-[10px] uppercase tracking-widest text-on-surface-variant block">Booking Reference</span>
            <span class="font-mono text-xl text-primary font-bold">${data.bookingId}</span>
          </div>
          <span class="px-3 py-1 bg-primary/20 text-primary text-xs uppercase tracking-wider font-semibold border border-primary/30">
            Confirmed Table
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider">Guest Name</span>
            <span class="text-on-surface font-medium">${data.salutation} ${data.fullName}</span>
          </div>
          <div>
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider">Party Size</span>
            <span class="text-on-surface font-medium">${data.guests} Guests</span>
          </div>
          <div>
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider">Seating Area</span>
            <span class="text-on-surface font-medium">${data.zone}</span>
          </div>
          <div>
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider">Date</span>
            <span class="text-on-surface font-medium">${data.date}</span>
          </div>
          <div>
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider">Seating Time</span>
            <span class="text-on-surface font-medium">${data.time}</span>
          </div>
          <div>
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider">Experience</span>
            <span class="text-on-surface font-medium">${data.experience.split('(')[0]}</span>
          </div>
        </div>

        ${data.specialRequests ? `
          <div class="mt-4 pt-3 border-t border-outline-variant/20 text-xs">
            <span class="text-on-surface-variant block text-[10px] uppercase tracking-wider mb-1">Notes &amp; Dietary</span>
            <p class="text-on-surface-variant italic font-light">${data.specialRequests}</p>
          </div>
        ` : ''}
      </div>

      <div class="text-xs text-on-surface-variant space-y-2 mb-8">
        <p class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-primary">check_circle</span>
          A formal reservation dispatch has been sent to <strong class="text-on-surface">${data.email}</strong>.
        </p>
        <p class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-primary">dry_cleaning</span>
          Dress Code: Elegantly attired. Jackets are requested for gentlemen.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3">
        <button onclick="downloadCalendarInvite()" class="flex-1 py-3 bg-primary text-on-primary text-xs uppercase tracking-widest font-semibold hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[16px]">calendar_today</span>
          Add to Calendar (.ics)
        </button>
        <button onclick="window.print()" class="py-3 px-5 border border-outline-variant text-xs uppercase tracking-widest text-on-surface hover:border-primary transition-colors flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[16px]">print</span>
          Print Voucher
        </button>
        <button onclick="closeConfirmationModal()" class="py-3 px-5 bg-surface text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeConfirmationModal() {
  const modal = document.getElementById('booking-confirmation-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// --- ICS Calendar File Generator ---
function downloadCalendarInvite() {
  const b = State.bookingData;
  if (!b.date) return;

  const dateClean = b.date.replace(/-/g, '');
  const [hourStr, minuteStr] = b.time.replace(/[^0-9:]/g, '').split(':');
  let hour = parseInt(hourStr) || 19;
  if (b.time.includes('PM') && hour < 12) hour += 12;

  const startHourStr = String(hour).padStart(2, '0');
  const startMinuteStr = minuteStr ? String(minuteStr).padStart(2, '0') : '00';
  const endHourStr = String((hour + 3) % 24).padStart(2, '0');

  const dtStart = `${dateClean}T${startHourStr}${startMinuteStr}00`;
  const dtEnd = `${dateClean}T${endHourStr}${startMinuteStr}00`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//La Revi Haute Cuisine//Reservation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${b.bookingId}@larevi-restaurant.com`,
    `DTSTAMP:${dateClean}T120000Z`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:Dinner at La Revi (${b.guests} Guests) - Ref ${b.bookingId}`,
    `DESCRIPTION:Reservation for ${b.salutation} ${b.fullName}\\nExperience: ${b.experience}\\nSeating: ${b.zone}\\nRef: ${b.bookingId}\\nDress code: Elegantly Attired.`,
    'LOCATION:La Revi, 452 Boulevard Saint-Germain, 75007 Paris, France',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `LaRevi-Reservation-${b.bookingId}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast('Calendar invite (.ics) downloaded successfully!', 'gold');
}

// --- Reservation Lookup / Management Modal ---
function openBookingLookupModal() {
  const modal = document.getElementById('booking-lookup-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderRecentBookingsList();
  }
}

function closeBookingLookupModal() {
  const modal = document.getElementById('booking-lookup-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderRecentBookingsList() {
  const listEl = document.getElementById('lookup-recent-list');
  if (!listEl) return;

  try {
    const list = JSON.parse(localStorage.getItem('la_revi_reservations') || '[]');
    if (list.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-on-surface-variant italic">No stored reservations found on this device. Enter your booking reference above.</p>`;
      return;
    }

    listEl.innerHTML = list.map(item => `
      <div class="bg-surface-container-high/50 p-4 border border-outline-variant/30 flex justify-between items-center text-xs">
        <div>
          <span class="font-mono text-primary font-bold text-sm">${item.bookingId}</span>
          <p class="text-on-surface mt-0.5">${item.fullName} • ${item.guests} Guests</p>
          <p class="text-[11px] text-on-surface-variant">${item.date} at ${item.time}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="viewExistingBooking('${item.bookingId}')" class="px-3 py-1.5 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors uppercase text-[10px] tracking-wider">
            View Details
          </button>
          <button onclick="cancelStoredBooking('${item.bookingId}')" class="px-2 py-1.5 text-error hover:underline text-[10px] uppercase">
            Cancel
          </button>
        </div>
      </div>
    `).join('');
  } catch (e) {
    listEl.innerHTML = '';
  }
}

function viewExistingBooking(bookingId) {
  try {
    const list = JSON.parse(localStorage.getItem('la_revi_reservations') || '[]');
    const found = list.find(b => b.bookingId === bookingId);
    if (found) {
      closeBookingLookupModal();
      State.bookingData = found;
      showBookingConfirmationModal(found);
    } else {
      showToast('Booking reference not found.', 'error');
    }
  } catch (e) {
    showToast('Could not retrieve booking.', 'error');
  }
}

function cancelStoredBooking(bookingId) {
  if (!confirm(`Are you sure you wish to cancel reservation ${bookingId}?`)) return;
  try {
    let list = JSON.parse(localStorage.getItem('la_revi_reservations') || '[]');
    list = list.filter(b => b.bookingId !== bookingId);
    localStorage.setItem('la_revi_reservations', JSON.stringify(list));
    renderRecentBookingsList();
    showToast(`Reservation ${bookingId} has been gracefully cancelled.`, 'gold');
  } catch (e) {
    showToast('Failed to cancel reservation.', 'error');
  }
}

function lookupBookingByInput() {
  const input = document.getElementById('lookup-ref-input')?.value.trim();
  if (!input) return;
  viewExistingBooking(input);
}

// --- Luxury Gift Card Modal ---
function openGiftCardModal() {
  const modal = document.getElementById('gift-card-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    updateGiftCardPreview();
  }
}

function closeGiftCardModal() {
  const modal = document.getElementById('gift-card-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function updateGiftCardPreview() {
  const recipient = document.getElementById('gift-recipient')?.value || 'Honored Guest';
  const sender = document.getElementById('gift-sender')?.value || 'Alexandre Vance';
  const amount = document.getElementById('gift-amount-select')?.value || '500';
  const message = document.getElementById('gift-message')?.value || 'With our compliments for an unforgettable evening at La Revi.';

  const previewAmount = document.getElementById('gift-preview-amount');
  const previewRecipient = document.getElementById('gift-preview-recipient');
  const previewSender = document.getElementById('gift-preview-sender');
  const previewMessage = document.getElementById('gift-preview-message');

  if (previewAmount) previewAmount.textContent = formatPrice(parseInt(amount));
  if (previewRecipient) previewRecipient.textContent = recipient;
  if (previewSender) previewSender.textContent = sender;
  if (previewMessage) previewMessage.textContent = message;
}

function purchaseGiftCard(e) {
  e.preventDefault();
  closeGiftCardModal();
  showToast('Digital luxury gift voucher issued! A presentation folio has been sent to your email.', 'gold');
}

// --- Web Audio API Luxury Ambience ---
function toggleAudioAmbience() {
  const btn = document.getElementById('audio-ambient-btn');
  const icon = document.getElementById('audio-ambient-icon');

  if (!State.audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    State.audioContext = new AudioContext();
  }

  if (State.audioContext.state === 'suspended') {
    State.audioContext.resume();
  }

  if (State.isAudioPlaying) {
    // Stop nodes
    State.ambientNodes.forEach(node => {
      try { node.stop(); node.disconnect(); } catch (e) {}
    });
    State.ambientNodes = [];
    State.isAudioPlaying = false;
    if (btn) btn.classList.remove('text-primary');
    if (icon) icon.textContent = 'volume_off';
    showToast('Lounge soundscape muted.');
  } else {
    // Start warm ambient drone chords (low C, G, E warm pad)
    try {
      const frequencies = [65.41, 98.00, 130.81, 196.00]; // Warm low C chord
      const masterGain = State.audioContext.createGain();
      masterGain.gain.setValueAtTime(0.04, State.audioContext.currentTime);

      // Low pass filter for velvet warmth
      const filter = State.audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, State.audioContext.currentTime);

      masterGain.connect(filter);
      filter.connect(State.audioContext.destination);

      frequencies.forEach(freq => {
        const osc = State.audioContext.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, State.audioContext.currentTime);
        osc.connect(masterGain);
        osc.start();
        State.ambientNodes.push(osc);
      });

      State.isAudioPlaying = true;
      if (btn) btn.classList.add('text-primary');
      if (icon) icon.textContent = 'volume_up';
      showToast('Atmospheric acoustic soundscape active.', 'gold');
    } catch (err) {
      console.warn('Audio API error', err);
    }
  }
}

function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880.0, ctx.currentTime + 0.3); // A5

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch (e) {}
}

// --- Mobile Navigation Drawer ---
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer) return;
  drawer.classList.toggle('hidden');
}

// --- Quick Reservation Bar in Hero ---
function handleHeroQuickCheck(e) {
  e.preventDefault();
  const dateVal = document.getElementById('hero-quick-date')?.value;
  const guestsVal = document.getElementById('hero-quick-guests')?.value;
  const timeVal = document.getElementById('hero-quick-time')?.value;

  if (dateVal) {
    const resDate = document.getElementById('res-date');
    if (resDate) resDate.value = dateVal;
    State.bookingData.date = dateVal;
  }
  if (guestsVal) {
    const resGuests = document.getElementById('res-guests');
    if (resGuests) resGuests.value = guestsVal;
    State.bookingData.guests = parseInt(guestsVal);
  }
  if (timeVal) {
    State.bookingData.time = timeVal;
  }

  const resSection = document.getElementById('reservations');
  if (resSection) {
    resSection.scrollIntoView({ behavior: 'smooth' });
    updateReservationPriceSummary();
    showToast(`Checking prime tables for ${guestsVal || 2} guests...`, 'gold');
  }
}

// --- FAQ Accordion ---
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.material-symbols-outlined');
  if (!content) return;

  const isOpen = !content.classList.contains('hidden');
  if (isOpen) {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  } else {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// --- Newsletter Subscription ---
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input) {
    showToast(`Thank you. You have been added to the La Revi Private Gazette.`, 'gold');
    input.value = '';
  }
}

// --- Concierge Contact Form ---
function handleContactForm(e) {
  e.preventDefault();
  showToast('Inquiry delivered to our Head Concierge. We shall respond within 4 hours.', 'gold');
  e.target.reset();
}

// --- Gallery Lightbox ---
function openGalleryModal(imgSrc, caption) {
  const modal = document.getElementById('gallery-lightbox');
  const modalImg = document.getElementById('gallery-lightbox-img');
  const modalCaption = document.getElementById('gallery-lightbox-caption');
  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = caption || 'La Revi Experience';
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeGalleryModal() {
  const modal = document.getElementById('gallery-lightbox');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// --- Initialization on DOM Load ---
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderTastingJourney();
  initReservationEngine();
  calculatePrivateEventProposal();

  // Close modals on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDishModal();
      closeConfirmationModal();
      closeBookingLookupModal();
      closeGiftCardModal();
      closeGalleryModal();
    }
  });
});

