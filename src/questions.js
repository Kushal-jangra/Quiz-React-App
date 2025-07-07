const questions = [
  {
    id: 1,
    text: "Which Constitutional Amendment inserted the 9th Schedule in the Constitution of India?",
    answers: [
      "1st Amendment",
      "42nd Amendment",
      "44th Amendment",
      "52nd Amendment"
    ]
  },
  {
    id: 2,
    text: "What does the 9th Schedule of the Indian Constitution deal with?",
    answers: [
      "Protection of laws from judicial review",
      "Emergency Provisions",
      "Panchayati Raj",
      "Reservation"
    ]
  },
  {
    id: 3,
    text: "In which case did the Supreme Court say that judicial review is a basic feature of the Constitution?",
    answers: [
      "Kesavananda Bharati case",
      "Minerva Mills case",
      "Golaknath case",
      "Maneka Gandhi case"
    ]
  },
  {
    id: 4,
    text: "The Kesavananda Bharati case emphasized that Parliament can amend the Constitution but not:",
    answers: [
      "Destroy the Basic Structure",
      "Change the Preamble",
      "Alter the federal structure",
      "Remove the President"
    ]
  },
  {
    id: 5,
    text: "In which year was the Kesavananda Bharati judgment delivered?",
    answers: [
      "1973",
      "1971",
      "1976",
      "1980"
    ]
  },
  {
    id: 6,
    text: "The I.R. Coelho vs. State of TN case was related to:",
    answers: [
      "Judicial review of 9th Schedule laws",
      "Reservations",
      "Basic Structure doctrine",
      "President’s Rule"
    ]
  },
  {
    id: 7,
    text: "The judgment in I.R. Coelho case was delivered in:",
    answers: [
      "2007",
      "2001",
      "2003",
      "2005"
    ]
  },
  {
    id: 8,
    text: "Who was the first Indian to join the Executive Council of the Viceroy?",
    answers: [
      "Satyendra Prasad Sinha",
      "C. Rajagopalachari",
      "Motilal Nehru",
      "Surendranath Banerjee"
    ]
  },
  {
    id: 9,
    text: "How many Round Table Conferences were held in London?",
    answers: [
      "Three",
      "One",
      "Two",
      "Four"
    ]
  },
  {
    id: 10,
    text: "When was the First Round Table Conference held?",
    answers: [
      "1930",
      "1928",
      "1929",
      "1932"
    ]
  },
  {
    id: 11,
    text: "Which party boycotted the First Round Table Conference?",
    answers: [
      "Indian National Congress",
      "Muslim League",
      "Hindu Mahasabha",
      "Justice Party"
    ]
  },
  {
    id: 12,
    text: "Gandhiji participated in which Round Table Conference?",
    answers: [
      "Second",
      "First",
      "Third",
      "All"
    ]
  },
  {
    id: 13,
    text: "Gandhi participated in the Second RTC after signing the:",
    answers: [
      "Gandhi-Irwin Pact",
      "Poona Pact",
      "Lahore Resolution",
      "Lucknow Pact"
    ]
  },
  {
    id: 14,
    text: "Who participated in all three Round Table Conferences?",
    answers: [
      "Dr. B.R. Ambedkar",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel"
    ]
  },
  {
    id: 15,
    text: "Who was the founder of Odantpuri University?",
    answers: [
      "Gopala",
      "Kumaragupta",
      "Harshavardhana",
      "Dharmapala"
    ]
  },
  {
    id: 16,
    text: "Which ruler founded Nalanda University?",
    answers: [
      "Kumaragupta",
      "Harshavardhana",
      "Samudragupta",
      "Chandragupta I"
    ]
  },
  {
    id: 17,
    text: "The Battle of Tarain was fought between:",
    answers: [
      "Prithviraj Chauhan and Muhammad Ghori",
      "Akbar and Rana Pratap",
      "Babur and Rana Sanga",
      "Sher Shah and Humayun"
    ]
  },
  {
    id: 18,
    text: "The Bahmani Sultanate was established in:",
    answers: [
      "1347",
      "1320",
      "1336",
      "1351"
    ]
  },
  {
    id: 19,
    text: "Governors in the Bahmani Kingdom were known as:",
    answers: [
      "Tarafdars",
      "Subedars",
      "Jagirdars",
      "Zamindars"
    ]
  },
  {
    id: 20,
    text: "Bahmani Sultanate was famous for its:",
    answers: [
      "AshwaPati (cavalry)",
      "Naval forces",
      "Buddhist patronage",
      "Trade in spices"
    ]
  },
  {
    id: 21,
    text: "Macdonald Communal Award was introduced in:",
    answers: [
      "1932",
      "1930",
      "1931",
      "1935"
    ]
  },
  {
    id: 22,
    text: "The Poona Pact was signed between Gandhi and:",
    answers: [
      "Madan Mohan Malviya",
      "Jinnah",
      "Motilal Nehru",
      "Dr. B.R. Ambedkar"
    ]
  },
  {
    id: 23,
    text: "The Scheduled Caste Federation was established in:",
    answers: [
      "1942",
      "1930",
      "1932",
      "1946"
    ]
  },
  {
    id: 24,
    text: "The Depressed Classes Association was formed in:",
    answers: [
      "1930",
      "1920",
      "1940",
      "1950"
    ]
  },
  {
    id: 25,
    text: "The Second World War started in:",
    answers: [
      "1939",
      "1935",
      "1937",
      "1941"
    ]
  },
  {
    id: 26,
    text: "What was the immediate Indian response to British involvement in WWII without consulting Indians?",
    answers: [
      "Resignation of Congress Ministries",
      "Non-Cooperation Movement",
      "Quit India Movement",
      "Launch of Civil Disobedience"
    ]
  },
  {
    id: 27,
    text: "Who was the Viceroy during the August Offer (1940)?",
    answers: [
      "Lord Linlithgow",
      "Lord Irwin",
      "Lord Wavell",
      "Lord Mountbatten"
    ]
  },
  {
    id: 28,
    text: "What did the August Offer propose?",
    answers: [
      "Formation of a Constituent Assembly",
      "Immediate Independence",
      "Separate Electorates",
      "Partition of India"
    ]
  },
  {
    id: 29,
    text: "Who was the first Individual Satyagrahi in 1940?",
    answers: [
      "Vinoba Bhave",
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Brahma Dutt"
    ]
  },
  {
    id: 30,
    text: "Who was the second Individual Satyagrahi?",
    answers: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Patel",
      "Rajendra Prasad"
    ]
  },
  {
    id: 31,
    text: "What is the function of alpha cells in the pancreas?",
    answers: [
      "Produce glucagon",
      "Produce insulin",
      "Produce bile",
      "Secrete enzymes"
    ]
  },
  {
    id: 32,
    text: "What hormone is secreted by beta cells of the pancreas?",
    answers: [
      "Insulin",
      "Glucagon",
      "Cortisol",
      "Oxytocin"
    ]
  },
  {
    id: 33,
    text: "Glucagon helps in:",
    answers: [
      "Converting glycogen into glucose",
      "Decreasing blood glucose",
      "Breaking down proteins",
      "Absorbing nutrients"
    ]
  },
  {
    id: 34,
    text: "Which of the following is known as the 'love hormone'?",
    answers: [
      "Oxytocin",
      "Insulin",
      "Vasopressin",
      "Prolactin"
    ]
  },
  {
    id: 35,
    text: "ADH helps regulate:",
    answers: [
      "Water balance",
      "Blood sugar",
      "Protein synthesis",
      "Oxygen levels"
    ]
  },
  {
    id: 36,
    text: "ADH and Oxytocin are produced by:",
    answers: [
      "Hypothalamus",
      "Pituitary gland",
      "Pineal gland",
      "Thyroid gland"
    ]
  },
  {
    id: 37,
    text: "Growth hormone is also known as:",
    answers: [
      "Somatotropin",
      "Oxytocin",
      "Vasopressin",
      "Melatonin"
    ]
  },
  {
    id: 38,
    text: "Deficiency of growth hormone causes:",
    answers: [
      "Dwarfism",
      "Gigantism",
      "Acromegaly",
      "Diabetes"
    ]
  },
  {
    id: 39,
    text: "The largest endocrine gland in the human body is:",
    answers: [
      "Thyroid",
      "Pituitary",
      "Adrenal",
      "Pancreas"
    ]
  },
  {
    id: 40,
    text: "Water loss through stomata during the day is called:",
    answers: [
      "Transpiration",
      "Evaporation",
      "Guttation",
      "Perspiration"
    ]
  },
  {
    id: 41,
    text: "Water loss through hydathodes at night is called:",
    answers: [
      "Guttation",
      "Evaporation",
      "Dew",
      "Transpiration"
    ]
  },
  {
    id: 42,
    text: "Dew, fog, mist, and frost are caused by:",
    answers: [
      "Condensation",
      "Evaporation",
      "Conduction",
      "Radiation"
    ]
  },
  {
    id: 43,
    text: "The temperature at which air becomes saturated with moisture is called:",
    answers: [
      "Dew point",
      "Boiling point",
      "Freezing point",
      "Condensation point"
    ]
  },
  {
    id: 44,
    text: "Electron was discovered by:",
    answers: [
      "J.J. Thomson",
      "Rutherford",
      "Bohr",
      "James Chadwick"
    ]
  },
  {
    id: 45,
    text: "Who discovered the proton and nucleus?",
    answers: [
      "Rutherford",
      "J.J. Thomson",
      "Neils Bohr",
      "Dalton"
    ]
  },
  {
    id: 46,
    text: "Who discovered the neutron in 1932?",
    answers: [
      "James Chadwick",
      "J.J. Thomson",
      "Rutherford",
      "Lavoisier"
    ]
  },
  {
    id: 47,
    text: "Law of Conservation of Mass was given by:",
    answers: [
      "Antoine Lavoisier",
      "Joseph Proust",
      "John Dalton",
      "Avogadro"
    ]
  },
  {
    id: 48,
    text: "The Law of Constant Proportion was proposed by:",
    answers: [
      "Joseph Proust",
      "Lavoisier",
      "Rutherford",
      "Bohr"
    ]
  },
  {
    id: 49,
    text: "What is the duration of the Rolling Plan launched by the Janata Government?",
    answers: [
      "1978–1980",
      "1976–1981",
      "1977–1982",
      "1979–1983"
    ]
  },
  {
    id: 50,
    text: "The capital expenditure includes:",
    answers: [
      "Construction of roads",
      "Salaries",
      "Interest payments",
      "Pensions"
    ]
  },
  {
    id: 51,
    text: "Revenue expenditure includes:",
    answers: [
      "Salaries and pensions",
      "Loans to states",
      "Road construction",
      "Equity in PSUs"
    ]
  },
  {
    id: 52,
    text: "Which type of budget expenditure helps in creating assets?",
    answers: [
      "Capital expenditure",
      "Revenue expenditure",
      "Operational expenditure",
      "Supplementary expenditure"
    ]
  },
  {
    id: 53,
    text: "Bhakra Nangal Dam is built on which river?",
    answers: [
      "Satluj",
      "Yamuna",
      "Beas",
      "Ravi"
    ]
  },
  {
    id: 54,
    text: "Tehri Dam is located on which river?",
    answers: [
      "Bhagirathi",
      "Alaknanda",
      "Yamuna",
      "Ganga"
    ]
  },
  {
    id: 55,
    text: "The highest dam in India is:",
    answers: [
      "Tehri Dam",
      "Bhakra Nangal Dam",
      "Hirakud Dam",
      "Sardar Sarovar Dam"
    ]
  },
  {
    id: 56,
    text: "Maharana Pratap Dam is also known as:",
    answers: [
      "Pong Dam",
      "Bhakra Dam",
      "Rana Pratap Sagar Dam",
      "Gandhi Sagar Dam"
    ]
  },
  {
    id: 57,
    text: "Indira Sagar Dam is built on which river?",
    answers: [
      "Narmada",
      "Chambal",
      "Betwa",
      "Yamuna"
    ]
  },
  {
    id: 58,
    text: "Rana Pratap Sagar Dam is located in:",
    answers: [
      "Rajasthan",
      "Himachal Pradesh",
      "Madhya Pradesh",
      "Uttar Pradesh"
    ]
  },
  {
    id: 59,
    text: "Gandhi Sagar Dam is situated on which river?",
    answers: [
      "Chambal",
      "Narmada",
      "Betwa",
      "Son"
    ]
  },
  {
    id: 60,
    text: "How many biosphere reserves in India are under UNESCO's MAB Programme?",
    answers: [
      "12",
      "10",
      "15",
      "18"
    ]
  },
  {
    id: 61,
    text: "Which is the first biosphere reserve in India?",
    answers: [
      "Nilgiri",
      "Sundarbans",
      "Nanda Devi",
      "Gulf of Mannar"
    ]
  },
  {
    id: 62,
    text: "Nilgiri biosphere reserve is spread across which states?",
    answers: [
      "Kerala, Tamil Nadu, Karnataka",
      "Kerala, Andhra Pradesh, Karnataka",
      "Tamil Nadu, Maharashtra, Kerala",
      "Tamil Nadu, Andhra Pradesh, Karnataka"
    ]
  },
  {
    id: 63,
    text: "Coral reefs are made up of:",
    answers: [
      "Coral polyps and zooxanthellae algae",
      "Sponges",
      "Mollusks",
      "Shells"
    ]
  },
  {
    id: 64,
    text: "Coral bleaching occurs due to:",
    answers: [
      "Global warming",
      "Excess salt",
      "Ocean currents",
      "Marine pollution"
    ]
  },
  {
    id: 65,
    text: "Favourable conditions for coral growth include:",
    answers: [
      "Shallow sunlit warm saline waters",
      "Deep cold waters",
      "Freshwater environment",
      "Nutrient-rich waters"
    ]
  },
  {
    id: 66,
    text: "What is the ideal depth range for coral growth?",
    answers: [
      "Up to 30 meters",
      "5–10 meters",
      "10–50 meters",
      "40–60 meters"
    ]
  },
  {
    id: 67,
    text: "What temperature range is ideal for coral reefs?",
    answers: [
      "25–30°C",
      "15–20°C",
      "20–25°C",
      "30–35°C"
    ]
  },
  {
    id: 68,
    text: "Which phylum do corals belong to?",
    answers: [
      "Cnideria",
      "Porifera",
      "Mollusca",
      "Echinodermata"
    ]
  },
  {
    id: 69,
    text: "Which desert is located in Australia?",
    answers: [
      "Great Australian Desert",
      "Kalahari",
      "Sahara",
      "Atacama"
    ]
  },
  {
    id: 70,
    text: "Bernoulli’s Theorem relates to:",
    answers: [
      "Fluid dynamics",
      "Conservation of mass",
      "Mechanical advantage",
      "Photosynthesis"
    ]
  },
  {
    id: 71,
    text: "Which of the following is constant in Bernoulli’s Theorem?",
    answers: [
      "Pressure + K.E. + P.E.",
      "Pressure + Kinetic Energy",
      "Volume + Mass",
      "Temperature + Velocity"
    ]
  },
  {
    id: 72,
    text: "At the topmost point of a falling object:",
    answers: [
      "K.E. is zero and P.E. is maximum",
      "K.E. is maximum",
      "P.E. is zero",
      "K.E. = P.E."
    ]
  },
  {
    id: 73,
    text: "Just before hitting the ground, an object’s:",
    answers: [
      "K.E. is maximum and P.E. is zero",
      "P.E. is maximum",
      "K.E. is zero",
      "Both energies are equal"
    ]
  },
  {
    id: 74,
    text: "Linear momentum is represented as:",
    answers: [
      "p",
      "E",
      "F",
      "m"
    ]
  },
  {
    id: 75,
    text: "Supreme Court is constituted under which Article of the Indian Constitution?",
    answers: [
      "Article 124",
      "Article 122",
      "Article 120",
      "Article 126"
    ]
  },
  {
    id: 76,
    text: "Article 125 of the Constitution deals with:",
    answers: [
      "Salaries of Supreme Court Judges",
      "Acting Chief Justice",
      "Seat of Supreme Court",
      "Court of Record"
    ]
  },
  {
    id: 77,
    text: "Acting Chief Justice is covered under which Article?",
    answers: [
      "Article 126",
      "Article 125",
      "Article 127",
      "Article 124"
    ]
  },
  {
    id: 78,
    text: "Ad hoc Judges are dealt under:",
    answers: [
      "Article 127",
      "Article 128",
      "Article 129",
      "Article 130"
    ]
  },
  {
    id: 79,
    text: "Retired judges sitting in SC is provided under:",
    answers: [
      "Article 128",
      "Article 124",
      "Article 126",
      "Article 129"
    ]
  },
  {
    id: 80,
    text: "Supreme Court is a Court of Record as per:",
    answers: [
      "Article 129",
      "Article 124",
      "Article 130",
      "Article 131"
    ]
  },
  {
    id: 81,
    text: "The seat of the Supreme Court is specified under:",
    answers: [
      "Article 130",
      "Article 127",
      "Article 128",
      "Article 124"
    ]
  },
  {
    id: 82,
    text: "Supreme Court’s original jurisdiction is under:",
    answers: [
      "Article 131",
      "Article 124",
      "Article 128",
      "Article 143"
    ]
  },
  {
    id: 83,
    text: "Article 143 empowers the President to:",
    answers: [
      "Ask SC for advisory opinion",
      "Appoint Judges",
      "Remove Governor",
      "Amend Constitution"
    ]
  },
  {
    id: 84,
    text: "The advisory opinion of SC under Article 143 is:",
    answers: [
      "Not binding",
      "Binding",
      "Partially binding",
      "Compulsory"
    ]
  },
  {
    id: 85,
    text: "SC’s advisory jurisdiction under Article 143 is invoked in cases of:",
    answers: [
      "Public importance and Pre-Constitution treaties",
      "Fundamental Rights only",
      "President’s election",
      "Emergency matters"
    ]
  },
  {
    id: 86,
    text: "Who founded the Gwalior Gharana of classical music?",
    answers: [
      "Haddu-Hassu Khan",
      "Bhimsen Joshi",
      "Abdul Karim Khan",
      "Gagan Maharaj"
    ]
  },
  {
    id: 87,
    text: "Bhimsen Joshi is associated with which field?",
    answers: [
      "Classical Music",
      "Dance",
      "Literature",
      "Science"
    ]
  },
  {
    id: 88,
    text: "Who is known for the do-or-die hormone (Adrenaline)?",
    answers: [
      "Adrenal gland",
      "Pituitary",
      "Thyroid",
      "Pancreas"
    ]
  },
  {
    id: 89,
    text: "Addison’s disease is associated with deficiency of:",
    answers: [
      "Adrenaline",
      "Thyroxine",
      "Insulin",
      "Growth hormone"
    ]
  },
  {
    id: 90,
    text: "Growth hormone is secreted by which part of the pituitary gland?",
    answers: [
      "Anterior",
      "Posterior",
      "Middle",
      "Hypothalamus"
    ]
  },
  {
    id: 91,
    text: "Which hormone helps in milk formation?",
    answers: [
      "Prolactin",
      "Oxytocin",
      "ADH",
      "Estrogen"
    ]
  },
  {
    id: 92,
    text: "Which hormone helps in milk secretion?",
    answers: [
      "Oxytocin",
      "Prolactin",
      "Testosterone",
      "Insulin"
    ]
  },
  {
    id: 93,
    text: "Mechanical energy is equal to:",
    answers: [
      "K.E. + P.E.",
      "K.E. × P.E.",
      "K.E. − P.E.",
      "P.E. ÷ K.E."
    ]
  },
  {
    id: 94,
    text: "Linear momentum (p) is related to kinetic energy by:",
    answers: [
      "K.E. = p² / 2m",
      "K.E. = p / 2m",
      "K.E. = 2p / m",
      "K.E. = m / 2p"
    ]
  },
  {
    id: 95,
    text: "Who introduced the Communal Award in 1932?",
    answers: [
      "Ramsay MacDonald",
      "Lord Irwin",
      "Winston Churchill",
      "Lord Mountbatten"
    ]
  },
  {
    id: 96,
    text: "The Poona Pact ensured:",
    answers: [
      "Joint electorate for Depressed Classes",
      "Separate electorate for Muslims",
      "Dominion Status",
      "End of British rule"
    ]
  },
  {
    id: 97,
    text: "Where was Gandhiji imprisoned during the Poona Pact crisis?",
    answers: [
      "Yerawada Jail",
      "Cellular Jail",
      "Sabarmati Jail",
      "Agra Jail"
    ]
  },
  {
    id: 98,
    text: "Who signed the Poona Pact on behalf of Gandhiji?",
    answers: [
      "Madan Mohan Malviya",
      "Rajendra Prasad",
      "Sardar Patel",
      "Jawaharlal Nehru"
    ]
  },
  {
    id: 99,
    text: "World War II began in the year:",
    answers: [
      "1939",
      "1937",
      "1938",
      "1940"
    ]
  },
  {
    id: 100,
    text: "World War II ended in the year:",
    answers: [
      "1945",
      "1944",
      "1946",
      "1947"
    ]
  }


];

export default questions;
