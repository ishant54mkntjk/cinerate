const movies = [
  {
    "title": "Nightfall Protocol",
    "year": 2024,
    "genre": "Thriller",
    "rating": 8.7,
    "runtime": "2h 11m",
    "poster": "https://picsum.photos/seed/nightfall/500/750",
    "backdrop": "https://picsum.photos/seed/nightfallwide/1600/700",
    "description": "A disgraced intelligence analyst races against time to stop a rogue AI from triggering a global blackout, uncovering a conspiracy that reaches the top of her own agency.",
    "reviews": [
      {
        "user": "Amir K.",
        "rating": 9,
        "text": "Relentless pacing and a genuinely surprising third act. One of the best thrillers this year."
      },
      {
        "user": "Priya S.",
        "rating": 8,
        "text": "Tight editing, strong lead performance. Loses a bit of steam in the middle."
      },
      {
        "user": "Devon W.",
        "rating": 9,
        "text": "The tension never lets up. Score and sound design are phenomenal."
      }
    ]
  },
  {
    "title": "Paper Moons",
    "year": 2023,
    "genre": "Drama",
    "rating": 9.1,
    "runtime": "2h 4m",
    "poster": "https://picsum.photos/seed/papermoons/500/750",
    "backdrop": "https://picsum.photos/seed/papermoonswide/1600/700",
    "description": "Two estranged sisters reunite after their father's death and slowly rebuild a bond neither believed was possible, set against a quiet coastal town.",
    "reviews": [
      {
        "user": "Elena R.",
        "rating": 10,
        "text": "Devastating and tender in equal measure. Best ensemble cast of the year."
      },
      {
        "user": "Marcus T.",
        "rating": 9,
        "text": "Understated direction lets the performances breathe."
      },
      {
        "user": "Sofia L.",
        "rating": 8,
        "text": "A slow burn, but the payoff is worth it."
      }
    ]
  },
  {
    "title": "Ironclad Sky",
    "year": 2022,
    "genre": "Action",
    "rating": 7.9,
    "runtime": "2h 22m",
    "poster": "https://picsum.photos/seed/ironclad/500/750",
    "backdrop": "https://picsum.photos/seed/ironcladwide/1600/700",
    "description": "An elite pilot squadron must defend the last free city on Earth from an airborne empire in this high-octane sky-war epic.",
    "reviews": [
      {
        "user": "Jake M.",
        "rating": 8,
        "text": "The aerial sequences are jaw-dropping. Story is standard but who cares."
      },
      {
        "user": "Nina P.",
        "rating": 7,
        "text": "Fun popcorn action. Runtime could've been trimmed by 20 minutes."
      },
      {
        "user": "Carlos D.",
        "rating": 8,
        "text": "IMAX-ready spectacle. One of the better action films in years."
      }
    ]
  },
  {
    "title": "The Quiet Ledger",
    "year": 2021,
    "genre": "Mystery",
    "rating": 8.3,
    "runtime": "1h 58m",
    "poster": "https://picsum.photos/seed/ledger/500/750",
    "backdrop": "https://picsum.photos/seed/ledgerwide/1600/700",
    "description": "A small-town accountant discovers a decades-old fraud buried in her firm's records, and pulling the thread puts everyone she loves in danger.",
    "reviews": [
      {
        "user": "Hannah G.",
        "rating": 9,
        "text": "Smart, methodical mystery that respects the audience's intelligence."
      },
      {
        "user": "Tom B.",
        "rating": 8,
        "text": "Great twist. Didn't see it coming."
      },
      {
        "user": "Ruth A.",
        "rating": 8,
        "text": "Slow start, but it rewards patience."
      }
    ]
  },
  {
    "title": "Wildflower Radio",
    "year": 2024,
    "genre": "Comedy",
    "rating": 7.6,
    "runtime": "1h 45m",
    "poster": "https://picsum.photos/seed/wildflower/500/750",
    "backdrop": "https://picsum.photos/seed/wildflowerwide/1600/700",
    "description": "A washed-up radio DJ and a teenage runaway team up to save a dying small-town station, one chaotic broadcast at a time.",
    "reviews": [
      {
        "user": "Leo F.",
        "rating": 8,
        "text": "Warm, funny, and genuinely charming. Great soundtrack too."
      },
      {
        "user": "Grace H.",
        "rating": 7,
        "text": "Predictable but endearing. Perfect Sunday afternoon watch."
      },
      {
        "user": "Omar Y.",
        "rating": 8,
        "text": "The chemistry between the leads carries the whole film."
      }
    ]
  },
  {
    "title": "Glass Horizon",
    "year": 2020,
    "genre": "Sci-Fi",
    "rating": 8.9,
    "runtime": "2h 16m",
    "poster": "https://picsum.photos/seed/glasshorizon/500/750",
    "backdrop": "https://picsum.photos/seed/glasshorizonwide/1600/700",
    "description": "On a generation ship centuries into its voyage, a young engineer uncovers evidence that the mission's true destination was hidden from the crew.",
    "reviews": [
      {
        "user": "Ivy C.",
        "rating": 9,
        "text": "Gorgeous production design and a genuinely thought-provoking premise."
      },
      {
        "user": "Sam K.",
        "rating": 9,
        "text": "Best sci-fi film in a decade. The ending stuck with me for days."
      },
      {
        "user": "Rae J.",
        "rating": 9,
        "text": "Visually stunning, emotionally grounded. A rare combination."
      }
    ]
  },
  {
    "title": "Blackout City",
    "year": 2023,
    "genre": "Action",
    "rating": 7.2,
    "runtime": "1h 52m",
    "poster": "https://picsum.photos/seed/blackoutcity/500/750",
    "backdrop": "https://picsum.photos/seed/blackoutcitywide/1600/700",
    "description": "When the power grid fails across a sprawling metropolis, a former soldier must cross the city on foot to reach his family before the looting starts.",
    "reviews": [
      {
        "user": "Derek N.",
        "rating": 7,
        "text": "Solid B-movie energy. Great practical stunt work."
      },
      {
        "user": "Mia V.",
        "rating": 7,
        "text": "Nothing new, but well executed for what it is."
      },
      {
        "user": "Owen Z.",
        "rating": 8,
        "text": "Surprisingly tense in the second half."
      }
    ]
  },
  {
    "title": "Salt & Ceremony",
    "year": 2022,
    "genre": "Drama",
    "rating": 8.5,
    "runtime": "2h 9m",
    "poster": "https://picsum.photos/seed/saltceremony/500/750",
    "backdrop": "https://picsum.photos/seed/saltceremonywide/1600/700",
    "description": "A chef returns to her late grandmother's restaurant to save it from closure and confronts a family history she spent years avoiding.",
    "reviews": [
      {
        "user": "Zoe P.",
        "rating": 9,
        "text": "Beautifully shot food scenes and an even more beautiful story."
      },
      {
        "user": "Adam L.",
        "rating": 8,
        "text": "Made me cry twice. Not ashamed to admit it."
      },
      {
        "user": "Freya S.",
        "rating": 8,
        "text": "A quiet, moving film about grief and legacy."
      }
    ]
  },
  {
    "title": "Static Hour",
    "year": 2021,
    "genre": "Horror",
    "rating": 7.8,
    "runtime": "1h 41m",
    "poster": "https://picsum.photos/seed/statichour/500/750",
    "backdrop": "https://picsum.photos/seed/statichourwide/1600/700",
    "description": "Every night at 3:13am, a late-night radio host's callers describe things that haven't happened yet — and then they start happening.",
    "reviews": [
      {
        "user": "Chris O.",
        "rating": 8,
        "text": "Genuinely unsettling atmosphere. Sound design does a lot of heavy lifting."
      },
      {
        "user": "Bella R.",
        "rating": 7,
        "text": "Effective slow-burn horror, though the ending is a bit abrupt."
      },
      {
        "user": "Victor H.",
        "rating": 8,
        "text": "Didn't sleep well after watching this. Mission accomplished."
      }
    ]
  },
  {
    "title": "The Last Regatta",
    "year": 2019,
    "genre": "Drama",
    "rating": 8,
    "runtime": "2h 1m",
    "poster": "https://picsum.photos/seed/regatta/500/750",
    "backdrop": "https://picsum.photos/seed/regattawide/1600/700",
    "description": "A retired sailor comes out of retirement for one final race, mentoring a headstrong young sailor who reminds him of his younger self.",
    "reviews": [
      {
        "user": "Wendy A.",
        "rating": 8,
        "text": "Classic sports-drama beats done really well. Gorgeous ocean cinematography."
      },
      {
        "user": "Felix D.",
        "rating": 8,
        "text": "Genuinely moving finale. Great score."
      },
      {
        "user": "Nora T.",
        "rating": 8,
        "text": "A little formulaic but executed with real heart."
      }
    ]
  },
  {
    "title": "Crimson Ledger",
    "year": 2024,
    "genre": "Mystery",
    "rating": 8.4,
    "runtime": "2h 6m",
    "poster": "https://picsum.photos/seed/crimsonledger/500/750",
    "backdrop": "https://picsum.photos/seed/crimsonledgerwide/1600/700",
    "description": "A journalist investigating a string of unsolved disappearances realizes the killer has been feeding her the story all along.",
    "reviews": [
      {
        "user": "Julia M.",
        "rating": 9,
        "text": "Twisty, dark, and confidently directed. Kept me guessing until the end."
      },
      {
        "user": "Ray B.",
        "rating": 8,
        "text": "Great atmosphere and a chilling villain reveal."
      },
      {
        "user": "Kim S.",
        "rating": 8,
        "text": "One of the smarter mysteries I've seen recently."
      }
    ]
  },
  {
    "title": "Sundown Diner",
    "year": 2020,
    "genre": "Comedy",
    "rating": 7.4,
    "runtime": "1h 38m",
    "poster": "https://picsum.photos/seed/sundowndiner/500/750",
    "backdrop": "https://picsum.photos/seed/sundowndinerwide/1600/700",
    "description": "Over one chaotic overnight shift, a roadside diner's mismatched staff and stranded travelers collide in this feel-good ensemble comedy.",
    "reviews": [
      {
        "user": "Tara N.",
        "rating": 7,
        "text": "Light, funny, and a great cast of characters."
      },
      {
        "user": "Ben C.",
        "rating": 7,
        "text": "Nothing groundbreaking but a genuinely good time."
      },
      {
        "user": "Alina F.",
        "rating": 8,
        "text": "Charming ensemble comedy, perfect background watch."
      }
    ]
  }
];

export default movies;

