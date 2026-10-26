/* =====================================================================
   ✏️  YOUR PROJECTS (and illustrated books) — each entry gets a card on the home page
   and its own page (project.html?p=SLUG). Copy a whole { ... } block to add one.
   Cards appear in the order listed here (newest first).
   ===================================================================== */
/*
  slug     : short web-safe name, lowercase, no spaces (used in the page address)
  kind     : leave out for projects; "book" puts it under Illustration → Illustrated books
  title    : project name
  year     : year of production, e.g. "2024" (or several: "2014, 2015, 2023")
  role     : what you did, e.g. "Director · Animator"
  summary  : one line shown on the home-page card
  cover    : image for the card (and the page, if there's no video) — leave "" if none yet
  heroImage : optional wide image for the top of the page (instead of the cover)
  video    : { type: "vimeo" | "youtube", id: "..." }  — leave id "" if none yet
  videoCaption : optional small caption under the video
  feature  : optional highlight box at the top with a button to an outside link
             { label: "...", text: "...", url: "https://...", button: "..." }
  tools    : software used, shown as tags, e.g. ["Toon Boom", "After Effects"]
  altTitle : optional second title under the main one (e.g. the Chinese title)
  aboutTitle : optional heading above the paragraphs, e.g. "Synopsis"
  quote    : optional pull quote under the paragraphs { text: "...", source: "..." }
  series   : optional list of series cards { label, title, year, video, text, episodes[], credits[[role,name]], url, button }
  footnote : optional small print at the bottom of the page
  about    : paragraphs for the project page (each "..." is one paragraph)
  credits  : [ "Role", "Name" ] pairs
  stills   : images shown in a gallery at the bottom of the page
  awards   : festival laurels — transparent PNGs in images/awards/ (900×600)
             [ { src: "images/awards/....png", name: "Official Selection — Festival 2026" } ]
*/
const PROJECTS = [
  {
    slug: "the-hole",
    title: "The Hole",
    year: "2025", role: "Producer · Director · Writer", summary: "8 min 2D animation",
    cover: "images/work/the-hole.jpg",
    awards: [
      { src: "images/awards/the-hole-athens-animfest-2026.png", name: "Official Selection — Athens ANIMFEST 2026" },
      { src: "images/awards/the-hole-brighton-2026.png",        name: "Official Selection — Brighton International Animation Festival 2026" },
      { src: "images/awards/the-hole-comicron-2026.png",        name: "Official Selection — Comicron Film Festival 2026" },
      { src: "images/awards/the-hole-fest-anca-2026.png",       name: "Official Selection — Fest Anča 2026" },
      { src: "images/awards/the-hole-flipbook-2026.png",        name: "Official Selection — Flipbook Film Festival 2026" },
      { src: "images/awards/the-hole-seoul-indie-anifest-2026.png", name: "Official Selection — Seoul Indie-AniFest 2026" },
      { src: "images/awards/the-hole-turku-2026.png",           name: "Official Selection — Turku Animated Film Festival 2026" },
      { src: "images/awards/the-hole-damnation-2025.png",       name: "Official Selection — DAMNATION Animation Film Festival 2025" },
    ],
    video: { type: "vimeo", id: "" },
    tools: ["MOHO", "After Effects", "Premiere"],
    aboutTitle: "Synopsis",
    about: [
      "In a quiet estate park, a new security guard enforces order, silencing the residents' small moments of joy.",
      "As he tightens control, the echoes of his own unrest grow louder. Beneath his duty and restraint, a fragile human longing stirs: the desire to speak, to feel, to be free.",
    ],
    creditsTitle: "Full cast & credits",
    credits: [
      ["Producer, Director, Writer", "Wing Yan Lilian Fu"],
      ["Animator", "Angela Wong"],
      ["Animator", "Siu Fong"],
      ["Sound Designer", "Raoul Brand"],
      ["Composer", "Matthew James Kelly"],
    ],
    stills: [
      "images/work/the-hole-opening.gif",
      "images/work/the-hole-pigeon.gif",
      "images/work/the-hole.jpg",
      "images/work/the-hole-jump-water.gif",
      "images/work/the-hole-skatepark.jpg",
      "images/work/the-hole-french-kiss.gif",
      "images/work/the-hole-kiss.jpg",
      "images/work/the-hole-park-night.jpg",
      "images/work/the-hole-waterfall.jpg",
    ],
  },
  {
    slug: "my-dear-son",
    title: "My Dear Son",
    year: "2023", role: "Director · Animator · Producer", summary: "8 min 2D animation",
    cover: "images/work/my-dear-son-dinner.jpg",
    awards: [
      { src: "images/awards/my-dear-son-digicon6-asia-gold-2022.png",      name: "Winner — Asia Gold, TBS Japan DigiCon6 ASIA 2022" },
      { src: "images/awards/my-dear-son-digicon6-hong-kong-gold-2022.png", name: "Winner — Hong Kong Gold, TBS Japan DigiCon6 ASIA 2022" },
      { src: "images/awards/my-dear-son-toronto-iwff-2022.png",            name: "Winner — Best Animation, Toronto International Women Film Festival 2022" },
      { src: "images/awards/my-dear-son-art-film-spirit-2023.png",         name: "Winner — Best Animation, Art Film Spirit Awards 2023" },
      { src: "images/awards/my-dear-son-tatras-2022.png",                  name: "Winner — Best Animation, Tatras International Film Festival 2022" },
      { src: "images/awards/my-dear-son-all-that-moves-2022.png",          name: "Finalist — All That Moves International Film Festival 2022" },
      { src: "images/awards/my-dear-son-chester-2023.png",                 name: "Finalist — Chester Animation Festival 2023" },
      { src: "images/awards/my-dear-son-barnes-2023.png",                  name: "UK Animation Honourable Mention — Barnes Film Festival 2023" },
    ],
    video: { type: "vimeo", id: "" },
    tools: ["Toon Boom", "Adobe Photoshop", "After Effects", "Premiere"],
    aboutTitle: "Synopsis",
    about: [
      "In a capitalist city, where people have kids to be proud of, a woman – Rose – unexpectedly gives birth to a cat son.",
      "The baby doesn't behave like an ordinary baby, and Rose struggles to love him. She tries her best to change him, even if it means changing his true nature. But to find a connection, she will need to learn to love him for who he is – and to remember something about herself that she forgot a long time ago.",
    ],
    creditsTitle: "Full cast & credits",
    credits: [
      ["Director", "Wing Yan Lilian Fu"],
      ["Writer", "Egle Vertelyte"],
      ["Editor", "Johannes Bock"],
      ["Sound", "Raoul Brand"],
      ["Music", "Matthew James Kelly"],
      ["Animator", "Wing Yan Lilian Fu"],
      ["Design", "Siu Wing Fong"],
    ],
    stills: [
      "images/work/my-dear-son-mama.gif",
      "images/work/my-dear-son-dinner.jpg",
      "images/work/my-dear-son-cat-tree.gif",
      "images/work/my-dear-son-rose.jpg",
      "images/work/my-dear-son-flowers.gif",
      "images/work/my-dear-son-crowd-collage.gif",
      "images/work/my-dear-son-box.jpg",
      "images/work/my-dear-son-bedroom.jpg",
      "images/work/my-dear-son-going-home.jpg",
      "images/work/my-dear-son-cityscape.jpg",
      "images/work/my-dear-son-city-collage.jpg",
      "images/work/my-dear-son-crowd.jpg",
      "images/work/my-dear-son-rose-poses.jpg",
      "images/work/my-dear-son-rose-and-cats.jpg",
      "images/work/my-dear-son-cat-expressions.jpg",
      "images/work/my-dear-son-cat-face-turnaround.jpg",
    ],
  },
  {
    slug: "bbc-bitesize",
    title: "BBC Bitesize",
    year: "2014, 2015, 2023", role: "Director · Designer · Animator", summary: "4 educational series",
    cover: "images/work/bbc-bitesize-background.jpg",
    // Highlight box at the top of the page, linking to a video that can't be embedded
    feature: {
      label: "Latest · BBC Teach · 2023",
      text: "Primary History: Significant Individuals",
      url: "https://www.bbc.co.uk/teach/class-clips-video/articles/zshmywx",
      button: "Watch on BBC Teach",
    },
    video: { type: "vimeo", id: "142891231" },
    videoCaption: "BBC Bitesize · 2015",
    about: [
      "Lilian Fu directed, designed and animated these four series of BBC Bitesize and BBC Teach content.",
    ],
    credits: [],
    seriesTitle: "The series",
    series: [
      {
        label: "BBC Teach",
        title: "Primary History: Significant Individuals",
        year: "2023",
        episodes: [
          "Elizabeth I and Elizabeth II",
          "Matthew Henson and Neil Armstrong",
          "William Caxton and Tim Berners-Lee",
          "Emily Davison and Rosa Parks",
          "Ada Lovelace and Alan Turing",
          "Vincent van Gogh and Frida Kahlo",
        ],
        credits: [
          ["Executive Producer", "Andy Glynne"],
          ["Producer", "Anita Norfolk"],
          ["Director of Animation", "Lilian Fu"],
          ["Composer / Sound Design", "Alex Parsons"],
          ["Academic Consultant", "Bea Gill"],
          ["Narration", "Maureen Lipman"],
        ],
        url: "https://www.bbc.co.uk/teach/class-clips-video/articles/zshmywx",
        button: "Watch on BBC Teach",
      },
      {
        label: "BBC Bitesize · KS1",
        title: "English",
        text: "Inspirational videos for BBC Bitesize KS1 English.",
        credits: [
          ["Executive Producer", "Andy Glynne"],
          ["Producer", "Anita Norfolk"],
          ["Animation Director", "Lilian Fu"],
          ["Composer / Sound Design", "Alex Parsons"],
          ["Narration", "Maureen Lipman"],
        ],
      },
      {
        label: "BBC Bitesize · KS2",
        title: "History",
        episodes: [
          "How to be a historian",
          "How was Christianity introduced to Britain?",
          "What did the Greeks do for us?",
          "The Greek theatre",
          "What did the Romans do for us?",
          "Viking beliefs",
        ],
      },
      {
        label: "BBC Bitesize · GCSE",
        title: "English Literature",
        episodes: [
          "A Taste of Honey by Shelagh Delaney",
          "About a Boy by Nick Hornby",
          "A View from the Bridge by Arthur Miller",
          "To Kill a Mockingbird by Harper Lee",
          "Heroes by Robert Cormier",
          "Of Mice and Men by John Steinbeck",
          "Never Let Me Go by Kazuo Ishiguro",
        ],
        url: "https://www.bbc.co.uk/bitesize/topics/zs3487h/articles/ztnvgk7",
        button: "Visit BBC Bitesize",
      },
    ],
    footnote: "All rights, including copyright and database right, in the BBC content shown or linked here are owned by or licensed to BBC Studios, or otherwise used by BBC Studios as permitted by applicable law.",
    stills: [
      "images/work/bbc-thor.gif",
      "images/work/bbc-viking-ship.gif",
      "images/work/bbc-loki.gif",
      "images/work/bbc-bitesize-background.jpg",
      "images/work/bbc-significant-individuals-characters.jpg",
      "images/work/bbc-tudors.jpg",
      "images/work/bbc-tudor-portraits.jpg",
      "images/work/bbc-tudor-houses.jpg",
      "images/work/bbc-aneurin-bevan.jpg",
      "images/work/bbc-katherine-johnson.jpg",
      "images/work/bbc-noor-inayat-khan.jpg",
      "images/work/bbc-robert-burns.jpg",
      "images/work/bbc-wangari-maathai.jpg",
      "images/work/bbc-henson-armstrong.jpg",
      "images/work/bbc-ks2-characters.jpg",
      "images/work/bbc-columba-aidan-augustine.jpg",
      "images/work/bbc-king-conversion.jpg",
      "images/work/bbc-library.jpg",
      "images/work/bbc-past-and-present.jpg",
      "images/work/bbc-buildings.jpg",
      "images/work/bbc-book-authors.jpg",
      "images/work/bbc-to-kill-a-mockingbird-characters.jpg",
      "images/work/bbc-view-from-the-bridge-characters.jpg",
      "images/work/bbc-brooklyn-1950s.jpg",
      "images/work/bbc-about-a-boy-characters.jpg",
      "images/work/bbc-taste-of-honey-characters.jpg",
      "images/work/bbc-never-let-me-go-characters.jpg",
    ],
  },
  {
    slug: "world-migratory-bird-day",
    title: "Birds Connect Our World",
    altTitle: "EAAFP · World Migratory Bird Day",
    year: "2020", role: "Director · Writer · Animator", summary: "Commissioned by EAAFP · 3.5 min",
    cover: "images/work/wmbd-jane.jpg",
    awards: [
      { src: "images/awards/birds-connect-our-world-uae-iff-2023.png",         name: "Winner — Best Environment/Nature Short Film, United Arab Emirates International Film Festival 2023" },
      { src: "images/awards/birds-connect-our-world-golden-nugget-2021.png",   name: "Winner — Best Environmental Short, Golden Nugget International Film Festival 2021" },
      { src: "images/awards/birds-connect-our-world-best-environmentally-conscious-2020.png", name: "Winner — Best Environmentally Conscious Documentary Short 2020" },
    ],
    video: { type: "youtube", id: "KMKP8Zvvy0U" },
    about: [
      "Birds Connect Our World was commissioned by the East Asian–Australasian Flyway Partnership (EAAFP) to follow a small bird on its journey across continents, raising awareness of the issues facing migratory birds.",
      "Through its protagonist – a great knot named Beak Beak – the film captures what birds face on their vast journey.",
    ],
    quote: {
      text: "Following a migratory path that spans from Siberia to Australia, Birds Connect Our World is a showcase of colourful background landscapes and intriguing wide aspect shots. Against these settings, Lilian’s illustratively designed great knots go about their daily lives; watched over by a devoted researcher who tracks their progress. The story sheds an important light on threats faced by the birds, from extreme weather events, habitat loss, pollution and hunting.",
      source: "Toon Boom",
    },
    creditsTitle: "Full cast & credits",
    credits: [
      ["Director", "Lilian Fu"],
      ["Writers", "Lilian Fu, Leander Thom, EAAFP Secretariat"],
      ["Animator", "Lilian Fu"],
      ["Sound", "Raoul Brand"],
      ["Narrators", "Ruby Smith (English), Eunhye Sun (Korean)"],
      ["Music", "Fiona Roberts"],
      ["Visual Effects", "Allar Kaasik"],
      ["Additional Animation", "Min Young Oh"],
      ["Recording Engineer", "Ruby Smith"],
    ],
    seriesTitle: "Also for World Migratory Bird Day",
    series: [
      {
        label: "EAAFP · World Migratory Bird Day",
        title: "Protect Birds: Be the Solution to Plastic Pollution!",
        video: { type: "youtube", id: "ub5zIiYU3zY" },
        text: "World Migratory Bird Day (WMBD) is a global annual campaign raising awareness of the importance of conserving migratory birds and their habitats. This year’s theme, “Protect Birds: Be the Solution to Plastic Pollution!”, highlights the impact of plastic pollution on migratory birds and their habitats. Everyone can act to solve this global problem – for migratory birds, for people and for nature.",
        credits: [
          ["Director", "Lilian Fu"],
          ["Sound Effects", "Raoul Brand"],
          ["Voice", "Emma Powell"],
        ],
      },
    ],
    stills: [
      "images/work/wmbd-jane.jpg",
      "images/work/wmbd-jane-sketches.jpg",
      "images/work/wmbd-background-01.jpg",
      "images/work/wmbd-background-02.jpg",
      "images/work/wetland-spoonbills.jpg",
    ],
  },
  {
    slug: "wetland-in-my-heart",
    title: "Wetland in My Heart",
    altTitle: "《我的濕地印記》",
    year: "2019", role: "", summary: "10 min · Commissioned by Hong Kong Wetland Park",
    cover: "images/work/wetland-title.jpg",
    video: { type: "vimeo", id: "275050940" },
    about: [
      "A 10-minute film made in Hong Kong in 2019, commissioned by Hong Kong Wetland Park.",
      "Now playing in permanent screenings in the Hong Kong Wetland Park gallery.",
    ],
    credits: [],
    stills: [
      "images/work/wetland-style-frame.jpg",
      "images/work/wetland-farm-boy.jpg",
      "images/work/wetland-background.jpg",
      "images/work/wetland-little-fish.jpg",
      "images/work/wetland-kids-lineup.jpg",
      "images/work/wetland-character-sketches.jpg",
      "images/work/wetland-fish.jpg",
    ],
  },
  {
    slug: "rthk-kids-say",
    title: "RTHK Kids Say",
    altTitle: "「孩子說」（香港電台委約作品）十集足本",
    year: "2014", role: "", summary: "10-episode documentary series · Commissioned by RTHK",
    cover: "https://vumbnail.com/103214787.jpg",  // Vimeo preview image — swap for your own still any time
    video: { type: "vimeo", id: "103214787" },
    about: [
      "Kids Say is a 10-episode, research-based documentary television series commissioned by Radio Television Hong Kong (RTHK).",
      "It explores everyday-life topics from kids’ point of view – philosophical, daily and emotional subjects such as love, siblings and sadness. The content was collected by interviewing 60 schoolchildren during school time and at after-school clubs.",
    ],
    credits: [],
    seriesTitle: "The episodes",
    series: [
      {
        label: "10 episodes",
        title: "Themes",
        episodes: ["Love", "Happiness", "Family", "Friendship", "Siblings", "Sadness and Anger", "Kids and Adults", "Good and Bad", "Life and Death", "World"],
      },
    ],
    stills: [],
  },
  {
    slug: "first-light",
    title: "First Light",
    year: "2013", role: "Director", summary: "NFTS graduation film · 11 min · No dialogue",
    cover: "images/work/first-light-title.jpg",
    video: { type: "vimeo", id: "61668243" },
    aboutTitle: "Synopsis",
    about: [
      "First Light is a 2D digital animated short about a woman who loses her house in a mobile metropolis, forcing her on a journey to discover where she truly belongs.",
      "National Film and Television School graduation film · 11 min · No dialogue.",
    ],
    creditsTitle: "Full cast & credits",
    credits: [
      ["Director", "Lilian Fu"],
      ["Producer", "Rob Darnell"],
      ["Editor", "John Murphy"],
      ["Sound", "Raoul Brand"],
      ["Designer", "Alex Toomey"],
      ["Music", "Alexandra Harwood"],
      ["SFX", "Rouchen Wong"],
    ],
    stills: [
      "images/work/first-light-title.jpg",
      "images/work/first-light-background.gif",
    ],
  },
  {
    slug: "fishing-with-popo",
    title: "Fishing with Popo",
    year: "2011", role: "Director", summary: "Animated documentary · 8 min 26 s",
    cover: "images/work/fishing-with-popo-poster.jpg",
    awards: [
      { src: "images/awards/fishing-with-popo-wamm-2012.png",              name: "Winner — Best Animation, Women and Minorities in Media Festival (WAMM) 2012" },
      { src: "images/awards/fishing-with-popo-ifva-special-mention.png",   name: "Special Mention — 18th ifva Awards (Incubator for Film & Visual media in Asia), Animation Category" },
      { src: "images/awards/fishing-with-popo-lidf-2012.png",              name: "Official Selection — London International Documentary Festival 2012" },
      { src: "images/awards/fishing-with-popo-big-sky-2013.png",           name: "Official Selection — Big Sky Documentary Film Festival 2013" },
    ],
    coverPosition: "top",                       // shows the top of the poster on the card
    video: { type: "vimeo", id: "62324180" },
    aboutTitle: "Synopsis",
    about: [
      "As she visits her grandmother’s grave, a girl remembers the funeral, her grandmother’s vivid storytelling and a curious dream she had of her grandmother in the afterlife.",
    ],
    credits: [],
    stills: [
      "images/work/fishing-with-popo-poster.jpg",
      "images/work/fishing-with-popo-01.jpg",
      "images/work/fishing-with-popo-02.jpg",
      "images/work/fishing-with-popo-03.jpg",
    ],
  },
  /* ================= Illustrated books (kind: "book") ================= */
  {
    slug: "the-tallest-tree",
    kind: "book",
    title: "The Tallest Tree",
    year: "2022", role: "Illustrator", summary: "Cut-out collage picture book · Ages 5–12",
    cover: "images/work/tallest-tree-cover.jpg",
    heroImage: "images/work/tallest-tree-hornbill.jpg",       // wide image at the top of the book page
    coverPosition: "center 30%",
    video: { type: "vimeo", id: "" },
    about: [
      "A cut-out collage book I illustrated to promote the endangered helmeted hornbill and Sunda pangolin.",
      "Written for children aged 5–12, it aims to raise awareness of the illegal wildlife trade.",
    ],
    credits: [],
    stills: [
      "images/work/tallest-tree-cover.jpg",
      "images/work/tallest-tree-hornbill.jpg",
      "images/work/tallest-tree-pangolin.jpg",
      "images/work/tallest-tree-poachers.jpg",
      "images/work/tallest-tree-forest.jpg",
      "images/work/tallest-tree-world-pangolin-day.jpg",
      "images/work/tallest-tree-behind-the-scenes.jpg",
    ],
  },
  {
    slug: "etter-regn-kommer-rate",
    kind: "book",
    title: "Etter regn kommer råte",
    year: "2016", role: "Illustrator", summary: "Poetry book by Eirik Willyson",
    cover: "images/work/etter-regn-cover.jpg",
    heroImage: "images/work/etter-regn-spread-photo.jpg",
    coverPosition: "center 35%",
    video: { type: "vimeo", id: "" },
    about: [
      "A little poetry book I illustrated for the talented Norwegian writer Eirik Willyson.",
    ],
    credits: [
      ["Writer", "Eirik Willyson"],
      ["Illustrator", "Lilian Fu"],
    ],
    stills: [
      "images/work/etter-regn-cover.jpg",
      "images/work/etter-regn-book-photo.jpg",
      "images/work/intens-forskning.jpg",
      "images/work/etter-regn-angel.jpg",
      "images/work/etter-regn-christmas.jpg",
      "images/work/etter-regn-hvem-hadde-trodd.jpg",
      "images/work/etter-regn-party.jpg",
      "images/work/etter-regn-spread-photo.jpg",
    ],
  },
];
