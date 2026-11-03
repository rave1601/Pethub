export const initialPetData = {
  id: 'buddy-01',
  name: 'Buddy',
  breed: 'Golden Retriever',
  gender: 'Male',
  microchipId: 'ID-29471928',
  age: '3 Years',
  weight: '32 kg',
  neutered: 'Yes',
  dob: 'Oct 12, 2023',
  color: 'Golden Honey',
  ownerName: 'Sarah Jenkins',
  energyLevel: 'High Playful',
  favoriteToy: 'Squeaky Tennis Ball',
  allergies: 'Grains - Gluten-free diet',
  bloodGroup: 'DEA 1.1 Positive',
  healthScore: 92,
  healthCondition: 'Excellent Condition',
  gpsStatus: 'Collar Connection Active • GPS Live',
  gpsBattery: '94%',
  weightTrend: '32 kg (Stable)',
  weightHistory: [
    { month: 'Jun', weight: 31.2 },
    { month: 'Jul', weight: 31.6 },
    { month: 'Aug', weight: 31.9 },
    { month: 'Sep', weight: 32.0 },
    { month: 'Oct', weight: 32.0, active: true },
  ],
  avatar: '/logo.png' // fallback or brand badge
};

export const secondaryPets = [
  {
    id: 'luna-02',
    name: 'Luna',
    breed: 'Calico Cat',
    gender: 'Female',
    microchipId: 'ID-88371920',
    age: '2 Years',
    weight: '4.2 kg',
    neutered: 'Yes',
    dob: 'May 04, 2024',
    color: 'Tri-color Calico',
    ownerName: 'Sarah Jenkins',
    energyLevel: 'Calm & Affectionate',
    favoriteToy: 'Feather Wand',
    allergies: 'None recorded',
    bloodGroup: 'Type A',
    healthScore: 96,
    healthCondition: 'Optimal Health',
    gpsStatus: 'Indoor Beacon Connected',
    gpsBattery: '98%',
    weightTrend: '4.2 kg (Stable)',
    weightHistory: [
      { month: 'Jun', weight: 4.0 },
      { month: 'Jul', weight: 4.1 },
      { month: 'Aug', weight: 4.1 },
      { month: 'Sep', weight: 4.2 },
      { month: 'Oct', weight: 4.2, active: true },
    ]
  }
];

export const dashboardMetrics = {
  nextVetVisit: {
    label: 'Next Vet Visit',
    value: 'Oct 15, 10:00 AM',
    sub: 'Dr. Emily Rose, DVM',
    color: 'teal'
  },
  vaccinationDue: {
    label: 'Vaccination Due',
    value: 'In 3 days (Rabies)',
    sub: 'Booster Shot Scheduled',
    color: 'coral'
  },
  groomingScheduled: {
    label: 'Grooming Scheduled',
    value: 'Tomorrow, 2 PM',
    sub: 'With Jessica Miller',
    color: 'teal'
  },
  healthScore: {
    label: "Buddy's Health Score",
    value: '92',
    sub: 'Excellent Condition',
    color: 'teal'
  }
};

export const upcomingSchedule = [
  {
    id: 'sch-1',
    month: 'OCT',
    day: '15',
    time: '10:00 AM',
    title: 'Routine Health & Dental Exam',
    subtitle: 'Dr. Emily Rose • Paws & Claws Animal Clinic',
    type: 'vet',
    badge: 'Confirmed'
  },
  {
    id: 'sch-2',
    month: 'OCT',
    day: '16',
    time: '2:00 PM',
    title: 'Luxury Spa Bath & Deshedding',
    subtitle: 'Jessica Miller • Pet Palace Studio',
    type: 'grooming',
    badge: 'Tomorrow'
  },
  {
    id: 'sch-3',
    month: 'OCT',
    day: '18',
    time: '11:30 AM',
    title: 'Rabies Booster Dose',
    subtitle: 'Metro Pet Wellness Center',
    type: 'vaccine',
    badge: 'In 6 Days'
  }
];

export const medicalRecordsData = [
  {
    id: 'rec-1',
    date: 'Sept 12, 2026',
    category: 'Routine Checkup',
    title: 'Annual Comprehensive Wellness Exam',
    doctor: 'Dr. Emily Rose, DVM',
    clinic: 'Paws & Claws Animal Clinic',
    status: 'Completed',
    notes: 'Heart and lungs clear. Ears and teeth clean with minimal tartar. Coat is shiny with good skin elasticity. Weight stable at 32 kg. Recommended continuation of gluten-free diet.'
  },
  {
    id: 'rec-2',
    date: 'Aug 12, 2026',
    category: 'Vaccination',
    title: 'Rabies 1-Year Dose & Heartworm Screening',
    doctor: 'Dr. Michael Chen, BVSc',
    clinic: 'City Pet Care Hospital',
    status: 'Completed',
    notes: 'Administered 1ml Rabies vaccine subcutaneously in right hind leg. Negative for heartworm microfilariae on snap test. Prescribed 6-month preventive chewables.'
  },
  {
    id: 'rec-3',
    date: 'June 28, 2026',
    category: 'Surgery & Lab',
    title: 'Blood Chemistry Panel & Allergy Sensitivity Test',
    doctor: 'Dr. Emily Rose, DVM',
    clinic: 'Paws & Claws Animal Clinic',
    status: 'Completed',
    notes: 'Full panel CBC normal. Liver and kidney values in optimal range. Confirmed mild wheat gluten antibody elevation. Successfully transitioned to Apoquel 16mg for seasonal itch control.'
  },
  {
    id: 'rec-4',
    date: 'April 15, 2026',
    category: 'Routine Checkup',
    title: 'Bi-Annual Dental Polishing & Ultrasonic Scale',
    doctor: 'Dr. Sarah Jenkins, DDS-Vet',
    clinic: 'Paws & Claws Animal Clinic',
    status: 'Completed',
    notes: 'No signs of gingivitis or cracked premolars. Fluoride seal applied.'
  }
];

export const appointmentsData = [
  {
    id: 'apt-1',
    date: 'Oct 15, 2026',
    time: '10:00 AM',
    doctor: 'Dr. Emily Rose, DVM',
    service: 'Comprehensive Health & Dental Exam',
    clinic: 'Paws & Claws Animal Clinic',
    status: 'Upcoming',
    room: 'Exam Room 3'
  },
  {
    id: 'apt-2',
    date: 'Oct 16, 2026',
    time: '2:00 PM',
    doctor: 'Jessica Miller',
    service: 'Luxury Spa Bath & Organic Oat Wash',
    clinic: 'Pet Palace Grooming Studio',
    status: 'Upcoming',
    room: 'Spa Station 1'
  },
  {
    id: 'apt-3',
    date: 'Oct 18, 2026',
    time: '11:30 AM',
    doctor: 'Dr. Michael Chen',
    service: 'Rabies Booster Vaccination',
    clinic: 'City Pet Care Hospital',
    status: 'Upcoming',
    room: 'Vaccine Suite B'
  }
];

export const pastAppointmentsData = [
  {
    id: 'past-1',
    date: 'Sept 12, 2026',
    doctor: 'Dr. Emily Rose, DVM',
    service: 'Routine Checkup',
    outcome: 'Healthy & Cleared',
    cost: '$85.00'
  },
  {
    id: 'past-2',
    date: 'Aug 12, 2026',
    doctor: 'Dr. Michael Chen',
    service: 'Annual Vaccination',
    outcome: 'Vaccinated (Batch #RB-9921)',
    cost: '$60.00'
  },
  {
    id: 'past-3',
    date: 'July 20, 2026',
    doctor: 'Jessica Miller',
    service: 'Summer Coat Trim & Nail Care',
    outcome: 'Groomed & Deshedded',
    cost: '$75.00'
  }
];

export const vaccinationsData = [
  {
    id: 'vac-1',
    name: 'Rabies 1-Year Dose',
    administered: 'Aug 12, 2026',
    nextDue: 'Oct 18, 2026',
    status: 'Due Soon (3d)',
    statusType: 'coral',
    doctor: 'Dr. Emily Rose',
    batch: 'RB-9921'
  },
  {
    id: 'vac-2',
    name: 'DHPP Core Booster',
    administered: 'July 10, 2026',
    nextDue: 'July 10, 2027',
    status: 'Up to Date',
    statusType: 'teal',
    doctor: 'Dr. Michael Chen',
    batch: 'DH-4412'
  },
  {
    id: 'vac-3',
    name: 'Bordetella Bronchiseptica (Kennel Cough)',
    administered: 'July 04, 2026',
    nextDue: 'Jan 04, 2027',
    status: 'Up to Date',
    statusType: 'teal',
    doctor: 'Dr. Emily Rose',
    batch: 'BB-1029'
  },
  {
    id: 'vac-4',
    name: 'Lyme Disease Vaccine',
    administered: 'June 15, 2026',
    nextDue: 'June 15, 2027',
    status: 'Up to Date',
    statusType: 'teal',
    doctor: 'Dr. Emily Rose',
    batch: 'LM-8831'
  },
  {
    id: 'vac-5',
    name: 'Leptospirosis 4-Way',
    administered: 'Nov 20, 2025',
    nextDue: 'Nov 20, 2026',
    status: 'Up to Date',
    statusType: 'teal',
    doctor: 'Dr. Michael Chen',
    batch: 'LP-3312'
  }
];

export const activeMedicationsData = [
  {
    id: 'med-1',
    name: 'Apoquel 16mg',
    purpose: 'Seasonal Allergy & Itch Control',
    dosage: '1 Tablet Daily with morning meal',
    countdown: 'Next dose in 4h 20m',
    remaining: '18 Tablets remaining',
    status: 'Active Daily'
  },
  {
    id: 'med-2',
    name: 'NexGard Chewables',
    purpose: 'Flea & Tick Prevention',
    dosage: '1 Soft Chew Monthly',
    countdown: 'Next dose in 12 days',
    remaining: '2 Chews remaining',
    status: 'Monthly'
  }
];

export const verifiedHostelsData = [
  {
    id: 'hostel-1',
    name: 'Bark & Brush Resort',
    rating: 4.9,
    reviews: 142,
    price: '$45',
    unit: '/ night',
    distance: '2.4 miles away',
    location: 'West Hollywood, CA',
    amenities: ['24/7 Webcams', 'Cage-Free Lawns', 'Private Suites', 'Pool Splash'],
    tag: 'Top Rated'
  },
  {
    id: 'hostel-2',
    name: 'Green Fields Pet Oasis',
    rating: 4.8,
    reviews: 98,
    price: '$52',
    unit: '/ night',
    distance: '3.8 miles away',
    location: 'Beverly Hills Outskirts, CA',
    amenities: ['Individual Cabanas', 'Organic Diet Chef', 'Agility Park', 'Live Vet On-Site'],
    tag: 'Luxury'
  },
  {
    id: 'hostel-3',
    name: 'Pawsome Haven Boarding',
    rating: 4.7,
    reviews: 76,
    price: '$38',
    unit: '/ night',
    distance: '5.1 miles away',
    location: 'Pasadena, CA',
    amenities: ['Indoor Climate Controlled', 'Daily Walk Report', 'Night Cuddle Staff'],
    tag: 'Affordable'
  },
  {
    id: 'hostel-4',
    name: 'Sunset Valley Dog Retreat',
    rating: 4.9,
    reviews: 110,
    price: '$60',
    unit: '/ night',
    distance: '6.4 miles away',
    location: 'Malibu Bluffs, CA',
    amenities: ['Ocean View Suites', 'Spa Treatments', 'Personal Sitter Assigned'],
    tag: 'Exclusive'
  }
];

export const dailyCareData = {
  stats: {
    steps: '4,200',
    stepsTarget: '6,000 steps',
    meals: '2 / 3',
    mealsSub: 'Servings Logged',
    water: '1.2 L',
    waterSub: 'Optimal Hydration',
    mood: 'Super Happy 😊',
    moodSub: 'High Energy Level'
  },
  feed: [
    {
      id: 'care-1',
      time: '1:45 PM',
      category: 'Playtime',
      title: 'Afternoon Fetch & Agility in Backyard',
      loggedBy: 'Sitter Mike Evans',
      description: 'Buddy had a fantastic 45-minute ball retrieval session with his favorite squeaky tennis ball. Very responsive to fetch and recall commands.',
      stat: '45 mins • 820 Calories burned'
    },
    {
      id: 'care-2',
      time: '12:30 PM',
      category: 'Meals',
      title: 'Lunch Meal: Grain-Free Salmon Bowl',
      loggedBy: 'Sarah Jenkins (Mom)',
      description: 'Served 1.5 cups of Salmon & Sweet Potato gluten-free kibble mixed with warm bone broth. Ate enthusiastically within 3 minutes.',
      stat: '1.5 cups • 100% finished'
    },
    {
      id: 'care-3',
      time: '8:30 AM',
      category: 'Walks',
      title: 'Morning Park Trail & Neighborhood Stroll',
      loggedBy: 'Sitter Mike Evans',
      description: 'Morning walk through Maplewood Park. Encountered two friendly labradors. Sniffed along the brook and maintained excellent leash walking manners.',
      stat: '2.4 km • 38 mins • 4,200 steps'
    }
  ]
};

export const groomingData = {
  upcomingSession: {
    specialist: 'Jessica Miller',
    role: 'Senior Master Groomer',
    studio: 'Pet Palace Studio • West Hollywood',
    scheduledTime: 'Tomorrow (Oct 16) at 2:00 PM',
    badges: ['Premium Bath', 'Organic Oat Wash', 'Deshedding', 'Nail Trim & Paw Balm'],
    duration: '1h 30m'
  },
  preferences: {
    sensitivity: 'High - Prone to seasonal dry skin',
    shampoo: 'Hypoallergenic Organic Oatmeal & Aloe',
    dryerSetting: 'Low Noise & Warm Air Only',
    behaviorNotes: 'Very sweet; loves ear scratches; slightly sensitive around back paws.'
  },
  packages: [
    {
      id: 'pkg-1',
      name: 'Bath & Tidy',
      price: '$45',
      time: '45 mins',
      features: ['Gentle warm water bath', 'Organic oat wash shampoo', 'Blow dry & light brush out', 'Ear cleaning & nail clip'],
      highlighted: false
    },
    {
      id: 'pkg-2',
      name: 'Full Show Styling',
      price: '$75',
      time: '1h 30m',
      features: ['Complete coat styling & trim', 'Deep deshedding undercoat treatment', 'Paw balm & nail grind polishing', 'Blueberry facial cleanser'],
      highlighted: true
    },
    {
      id: 'pkg-3',
      name: 'Spa Deluxe & Mud Bath',
      price: '$95',
      time: '2 hours',
      features: ['Dead sea mineral mud soak', 'Aromatherapy coat massage', 'Teeth brushing & mint breath spray', 'Signature scented bandana'],
      highlighted: false
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Summer Show Trim',
      date: 'Aug 2026',
      before: 'Fluffy & Overgrown',
      after: 'Sleek & Clean Contours'
    },
    {
      id: 'gal-2',
      title: 'Spa Bath & Deshedding',
      date: 'July 2026',
      before: 'Matt-prone coat',
      after: 'Silky Gloss Finish'
    }
  ]
};

export const servicesDirectoryData = [
  {
    id: 'srv-1',
    title: 'Veterinary Care',
    icon: 'Stethoscope',
    description: 'Certified pet clinics, annual health checkups, routine surgeries, and 24/7 ER consultations.',
    providers: '42 Doctors nearby'
  },
  {
    id: 'srv-2',
    title: 'Luxury Grooming',
    icon: 'Scissors',
    description: 'Organic coat washing, styling haircuts, paw spa, deshedding therapy, and mobile vans.',
    providers: '18 Salons open'
  },
  {
    id: 'srv-3',
    title: 'Pet Hostels & Hotels',
    icon: 'Home',
    description: 'Cage-free boarding resorts, 24/7 camera monitoring, playtime yards, and cozy suites.',
    providers: '12 Hostels available'
  },
  {
    id: 'srv-4',
    title: 'Professional Training',
    icon: 'Award',
    description: 'Puppy obedience classes, leash manners, agility training, and behavioral rehabilitation.',
    providers: '15 Trainers'
  },
  {
    id: 'srv-5',
    title: 'Pet Walking',
    icon: 'Footprints',
    description: 'GPS-tracked 30m & 60m daily walks with route maps and potty logs sent directly to your phone.',
    providers: '29 Walkers online'
  },
  {
    id: 'srv-6',
    title: 'Pet Sitting',
    icon: 'HeartHandshake',
    description: 'Vetted in-home sitters, overnight companionship, feeding schedules, and medication administration.',
    providers: '21 Sitters'
  },
  {
    id: 'srv-7',
    title: 'Pet Taxi',
    icon: 'Car',
    description: 'Climate-controlled safe transport to vet appointments, airports, or grooming salons.',
    providers: '8 Taxis on call'
  },
  {
    id: 'srv-8',
    title: 'Pet Store',
    icon: 'ShoppingBag',
    description: 'Curated organic food, grain-free treats, orthopedic beds, smart collar trackers, and toys.',
    providers: 'Over 500 items'
  }
];

export const emergencyData = {
  status: 'SOS EMERGENCY ACTIVE - Transmitting GPS Live Position',
  location: 'Maplewood Park, Zone B • 34.0522° N, 118.2437° W',
  accuracy: 'Accurate to 3 meters',
  primaryVet: {
    name: 'Dr. Emily Rose, DVM',
    clinic: 'Paws & Claws Emergency Care',
    phone: '+1 (555) 234-9871',
    address: '424 Elm St, Suite 100, West Hollywood'
  },
  erHospitals: [
    {
      name: 'Metropolitan 24/7 Animal Trauma Center',
      distance: '1.8 miles away',
      phone: '+1 (555) 911-PETS',
      open: 'Open 24/7 • Trauma Ready',
      eta: '4 mins drive'
    },
    {
      name: 'Westside Veterinary Emergency Hospital',
      distance: '3.4 miles away',
      phone: '+1 (555) 443-8822',
      open: 'Open 24/7',
      eta: '8 mins drive'
    }
  ],
  poisonControl: {
    name: 'ASPCA Animal Poison Control',
    phone: '+1 (888) 426-4435',
    hours: '24/7/365 Hotline'
  },
  medicalId: {
    petName: 'Buddy',
    species: 'Canine (Dog)',
    breed: 'Golden Retriever',
    weight: '32 kg',
    bloodGroup: 'DEA 1.1 Positive',
    severeAllergies: 'Grains & Wheat Gluten (Causes severe dermatological hives)',
    activeMeds: 'Apoquel 16mg Daily',
    microchip: 'ID-29471928'
  }
};

export const notificationsData = [
  {
    id: 'notif-1',
    group: 'Today',
    time: '10 mins ago',
    category: 'Reminders',
    title: 'Vaccination Due in 3 Days',
    message: 'Buddy is scheduled for his Rabies Booster dose on Oct 18, 2026. Review clinic details or reschedule.',
    unread: true,
    action: 'View Vaccination'
  },
  {
    id: 'notif-2',
    group: 'Today',
    time: '2 hours ago',
    category: 'Appointments',
    title: 'Grooming Scheduled Tomorrow',
    message: 'Jessica Miller confirmed the Luxury Spa Bath session for tomorrow, Oct 16 at 2:00 PM.',
    unread: true,
    action: 'View Booking'
  },
  {
    id: 'notif-3',
    group: 'Today',
    time: '4 hours ago',
    category: 'Health',
    title: 'Collar Battery at 94%',
    message: 'GPS collar is synced and actively monitoring safe zone boundaries around your residence.',
    unread: false,
    action: 'Check Battery'
  },
  {
    id: 'notif-4',
    group: 'Yesterday',
    time: 'Yesterday at 4:30 PM',
    category: 'Health',
    title: 'New Medical Record Uploaded',
    message: 'Dr. Emily Rose uploaded the wellness report and ear checkup notes from your previous consultation.',
    unread: false,
    action: 'Read Report'
  },
  {
    id: 'notif-5',
    group: 'Yesterday',
    time: 'Yesterday at 1:15 PM',
    category: 'Updates',
    title: 'Daily Care Sitter Log',
    message: 'Sitter Mike logged the morning walk (2.4 km, 4,200 steps) with photos and route summary.',
    unread: false,
    action: 'Open Daily Care'
  },
  {
    id: 'notif-6',
    group: 'Yesterday',
    time: 'Yesterday at 9:00 AM',
    category: 'Reminders',
    title: 'Apoquel Morning Dose Recorded',
    message: 'Morning allergy medication was marked as administered on schedule.',
    unread: false,
    action: 'Check Meds'
  }
];
