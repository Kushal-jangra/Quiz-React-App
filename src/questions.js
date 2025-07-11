const questions = [
  {
    id: 1,
    text: "Which chromosome is affected in Down Syndrome?",
    answers: ["Trisomy 21", "Trisomy 13", "Trisomy 18", "Monosomy X"]
  },
  {
    id: 2,
    text: "Which syndrome is characterized by Trisomy 13?",
    answers: ["Patau Syndrome", "Turner Syndrome", "Down Syndrome", "Klinefelter’s Syndrome"]
  },
  {
    id: 3,
    text: "Turner Syndrome occurs due to:",
    answers: ["Absence of one X chromosome in females", "Extra X chromosome", "Extra Y chromosome", "Absence of autosomes"]
  },
  {
    id: 4,
    text: "Klinefelter's Syndrome occurs due to:",
    answers: ["Extra X chromosome in males", "Extra Y chromosome", "Absence of X chromosome", "Extra autosome"]
  },
  {
    id: 5,
    text: "Total number of chromosomes in humans is:",
    answers: ["46", "44", "48", "42"]
  },
  {
    id: 6,
    text: "Sex chromosomes in females are:",
    answers: ["XX", "XY", "YY", "XXY"]
  },
  {
    id: 7,
    text: "Which of the following is a Mendelian disorder?",
    answers: ["Sickle Cell Anemia", "AIDS", "Cancer", "Diabetes"]
  },
  {
    id: 8,
    text: "Which Mendelian disorder affects the blood's ability to clot?",
    answers: ["Hemophilia", "Thalassemia", "Sickle cell anemia", "Color blindness"]
  },
  {
    id: 9,
    text: "Which base pair is found in RNA but not in DNA?",
    answers: ["U", "A", "G", "T"]
  },
  {
    id: 10,
    text: "How many pairs of autosomes are found in humans?",
    answers: ["22", "23", "21", "20"]
  },
  {
    id: 11,
    text: "Evergreen forests are found in regions with rainfall:",
    answers: [">200 cm", "<100 cm", "50–100 cm", "None of the above"]
  },
  {
    id: 12,
    text: "Which of the following is NOT a tree found in evergreen forests?",
    answers: ["Teak", "Rosewood", "Mahogany", "Ebony"]
  },
  {
    id: 13,
    text: "NW4 corridor is located at the stretch of which rivers?",
    answers: ["Krishna–Godavari", "Ganga–Yamuna", "Narmada–Tapi", "Brahmaputra–Teesta"]
  },
  {
    id: 14,
    text: "Eastern coastal plain is:",
    answers: ["Emerging", "Submerging", "Mutilated", "Rocky"]
  },
  {
    id: 15,
    text: "Which port is also called a satellite port?",
    answers: ["Nhava Sheva", "Haldia", "Kochi", "Kandla"]
  },
  {
    id: 16,
    text: "Which state has the highest number of major ports?",
    answers: ["Tamil Nadu", "Gujarat", "Maharashtra", "Kerala"]
  },
  {
    id: 17,
    text: "How many major ports are there in India?",
    answers: ["13", "12", "14", "15"]
  },
  {
    id: 18,
    text: "Which is the oldest port of India, also called Diamond Harbour?",
    answers: ["Haldia", "Mumbai", "Kandla", "Kochi"]
  },
  {
    id: 19,
    text: "Who is known as the Father of Ecology in India?",
    answers: ["Ramdeo Mishra", "Ernst Haeckel", "Charles Elton", "Tansley"]
  },
  {
    id: 20,
    text: "Who gave the concept of the Energy Pyramid?",
    answers: ["Lindemann", "Elton", "Haeckel", "Tansley"]
  },
  {
    id: 21,
    text: "Headquarters of SAARC is located in:",
    answers: ["Kathmandu", "Delhi", "Dhaka", "Islamabad"]
  },
  {
    id: 22,
    text: "Where is BIMSTEC Headquarters?",
    answers: ["Dhaka", "Colombo", "Kathmandu", "Bangkok"]
  },
  {
    id: 23,
    text: "Which country is NOT a member of BIMSTEC?",
    answers: ["Pakistan", "Bhutan", "Myanmar", "Sri Lanka"]
  },
  {
    id: 24,
    text: "SCO was established in:",
    answers: ["2001", "2000", "2002", "2003"]
  },
  {
    id: 25,
    text: "Headquarters of SCO is located in:",
    answers: ["Beijing", "Shanghai", "Delhi", "Moscow"]
  },
  {
    id: 26,
    text: "India and Pakistan joined SCO in:",
    answers: ["2017", "2015", "2016", "2018"]
  },
  {
    id: 27,
    text: "Latest member of SCO (2024):",
    answers: ["Belarus", "Iran", "Afghanistan", "Turkey"]
  },
  {
    id: 28,
    text: "What is RATS under SCO?",
    answers: ["Intelligence Sharing Organization", "Military Unit", "Agricultural Division", "Banking Committee"]
  },
  {
    id: 29,
    text: "Indian National Army (INA) was originally formed in 1942 by:",
    answers: ["Captain Mohan Singh", "Subhash Chandra Bose", "Rash Behari Bose", "Bhagat Singh"]
  },
  {
    id: 30,
    text: "If Captain Mohan Singh is not an option, who should you mark for INA formation?",
    answers: ["Rash Behari Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "C Rajagopalachari"]
  },
  {
    id: 31,
    text: "Subhash Chandra Bose reorganized INA in:",
    answers: ["1943", "1941", "1942", "1945"]
  },
  {
    id: 32,
    text: "Which female regiment was created by SC Bose?",
    answers: ["Rani Lakshmibai Regiment", "Rani Jhansi Battalion", "Durga Vahini", "Nari Sena"]
  },
  {
    id: 33,
    text: "Leader of Rani Lakshmibai Regiment:",
    answers: ["Captain Lakshmi Sahgal", "Sarojini Naidu", "Annie Besant", "Sucheta Kriplani"]
  },
  {
    id: 34,
    text: "Free India Legion was founded by SC Bose in:",
    answers: ["1941", "1942", "1943", "1944"]
  },
  {
    id: 35,
    text: "Where was the Free India Legion founded?",
    answers: ["Berlin", "Tokyo", "Singapore", "Rangoon"]
  },
  {
    id: 36,
    text: "Durand Line is between:",
    answers: ["Afghanistan and Pakistan", "India and Pakistan", "India and China", "India and Bangladesh"]
  },
  {
    id: 37,
    text: "38th Parallel separates:",
    answers: ["North and South Korea", "USA and Canada", "East and West Germany", "Vietnam and Cambodia"]
  },
  {
    id: 38,
    text: "49th Parallel forms boundary between:",
    answers: ["USA and Canada", "Canada and Mexico", "USA and Mexico", "UK and France"]
  },
  {
    id: 39,
    text: "Hindenburg Line was between:",
    answers: ["Germany and Poland", "France and Germany", "India and China", "China and Mongolia"]
  },
  {
    id: 40,
    text: "Maginot Line lies between:",
    answers: ["France and Germany", "USA and Canada", "UK and France", "Russia and Ukraine"]
  },
  {
    id: 41,
    text: "Triple helical structure of collagen was proposed by:",
    answers: ["G.V. Ramachandran", "Watson & Crick", "Linus Pauling", "Rosalind Franklin"]
  },
  {
    id: 42,
    text: "Gas leaked in Bhopal disaster:",
    answers: ["CH3NCO", "CO2", "SO2", "CFC"]
  },
  {
    id: 43,
    text: "Chemical name of Aspirin:",
    answers: ["Acetylsalicylic Acid", "Paracetamol", "Ibuprofen", "Naproxen"]
  },
  {
    id: 44,
    text: "Aspirin is used as a:",
    answers: ["Analgesic", "Antibiotic", "Antacid", "Antiseptic"]
  },
  {
    id: 45,
    text: "Chemical formula of Gypsum:",
    answers: ["CaSO₄·2H₂O", "CaCO₃", "Ca(OH)₂", "CaCl₂"]
  },
  {
    id: 46,
    text: "Plaster of Paris (POP) formula is:",
    answers: ["CaSO₄·H₂O", "CaSO₄", "CaSO₄·3H₂O", "Ca(OH)₂"]
  },
  {
    id: 47,
    text: "Green vitriol is chemically:",
    answers: ["FeSO₄·7H₂O", "CuSO₄·5H₂O", "MgSO₄·7H₂O", "Na₂SO₄·10H₂O"]
  },
  {
    id: 48,
    text: "Blue vitriol is:",
    answers: ["CuSO₄·5H₂O", "MgSO₄", "FeSO₄", "CaSO₄"]
  },
  {
    id: 49,
    text: "Caustic soda is:",
    answers: ["NaOH", "KOH", "NaHCO₃", "CaOH"]
  },
  {
    id: 50,
    text: "Caustic potash is:",
    answers: ["KOH", "NaOH", "CaOH", "Na₂CO₃"]
  },
  {
    id: 51,
    text: "Who is NOT one of the Carnatic music trinity?",
    answers: ["Tansen", "Tyagaraja", "Shyama Shastri", "Muthuswami Dikshitar"]
  },
  {
    id: 52,
    text: "Carnatic music trinity does NOT include:",
    answers: ["Amir Khusrau", "P Tyagaraja", "Shyam Shastri", "Muthuswami Dikshitar"]
  },
  {
    id: 53,
    text: "Which year marked the beginning of License Raj?",
    answers: ["1948", "1947", "1956", "1991"]
  },
  {
    id: 54,
    text: "IPR 1948 classified industries into how many groups?",
    answers: ["4", "2", "3", "5"]
  },
  {
    id: 55,
    text: "IPR 1956 classified industries into how many schedules?",
    answers: ["3", "2", "4", "5"]
  },
  {
    id: 56,
    text: "Schedule A industries were operated by:",
    answers: ["Government", "Private", "NGOs", "Co-operatives"]
  },
  {
    id: 57,
    text: "Public Private Partnership (PPP) belongs to which schedule in IPR 1956?",
    answers: ["Schedule B", "Schedule A", "Schedule C", "None"]
  },
  {
    id: 58,
    text: "Which of the following is a Schedule A industry?",
    answers: ["Railways", "Textiles", "Cement", "Paper"]
  },
  {
    id: 59,
    text: "Industrial Policy of 1956 laid the foundation for:",
    answers: ["Socialism", "Capitalism", "Liberalism", "Communism"]
  },
  {
    id: 60,
    text: "LPG stands for:",
    answers: ["Liberalisation, Privatisation, Globalisation", "Legal, Public, Government", "Law, Police, Government", "Logistics, Production, Growth"]
  },
  {
    id: 61,
    text: "Which port is known as Queen of Arabian Sea?",
    answers: ["Cochin", "Mumbai", "Chennai", "Vizag"]
  },
  {
    id: 62,
    text: "Which port is India’s first corporatised major port?",
    answers: ["Ennore (Kamarajar)", "Kandla", "Paradip", "Mormugao"]
  },
  {
    id: 63,
    text: "Which is the deepest landlocked port in India?",
    answers: ["Vishakhapatnam", "Kandla", "Chennai", "Haldia"]
  },
  {
    id: 64,
    text: "Coastal areas experience:",
    answers: ["Moderating influence of sea", "High temperature variation", "Low rainfall", "Low humidity"]
  },
  {
    id: 65,
    text: "Diurnal and annual temperature range is higher in:",
    answers: ["Interiors of continents", "Coastal areas", "Islands", "Deserts only"]
  },
  {
    id: 66,
    text: "Which country is the most successful in Hockey World Cup history?",
    answers: ["Pakistan", "India", "Australia", "Germany"]
  },
  {
    id: 67,
    text: "Latest Hockey World Cup winner (as per document):",
    answers: ["Germany", "India", "Australia", "Netherlands"]
  },
  {
    id: 68,
    text: "Germany defeated which country in the latest Hockey World Cup final?",
    answers: ["Belgium", "India", "Australia", "Pakistan"]
  },
  {
    id: 69,
    text: "Pakistan Day is celebrated on:",
    answers: ["23 March", "14 August", "15 August", "26 January"]
  },
  {
    id: 70,
    text: "Washing soda chemical formula is:",
    answers: ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "CaCO₃"]
  },
  {
    id: 71,
    text: "Baking soda is chemically known as:",
    answers: ["NaHCO₃", "Na₂CO₃", "NaOH", "KOH"]
  },
  {
    id: 72,
    text: "Who coined the term ‘Ecology’?",
    answers: ["Ernst Haeckel", "Charles Darwin", "Tansley", "Elton"]
  },
  {
    id: 73,
    text: "Concept of ecosystem was given by:",
    answers: ["Tansley", "Charles Darwin", "Ramdeo Mishra", "Haeckel"]
  },
  {
    id: 74,
    text: "Ecological Pyramid concept was proposed by:",
    answers: ["Charles Elton", "Tansley", "Linnaeus", "Darwin"]
  },
  {
    id: 75,
    text: "The longest international boundary lies along:",
    answers: ["USA-Canada", "India-Pakistan", "China-Russia", "India-Bangladesh"]
  },
  {
    id: 76,
    text: "Aihole and Pattadakal temples are associated with:",
    answers: ["Chalukya", "Maurya", "Gupta", "Rashtrakuta"]
  },
  {
    id: 77,
    text: "Which port is in West Bengal and also called Diamond Harbour?",
    answers: ["Haldia", "Paradip", "Vishakhapatnam", "Kandla"]
  },
  {
    id: 78,
    text: "Which chemical is used in fire extinguishers and baking powder?",
    answers: ["Mg(OH)₂", "CaCO₃", "NaOH", "HCl"]
  },
  {
    id: 79,
    text: "What is used as an antacid?",
    answers: ["Mg(OH)₂", "HCl", "NaCl", "Ca(OH)₂"]
  },
  {
    id: 80,
    text: "Which tree species is an epiphyte in evergreen forests?",
    answers: ["Epiphyte", "Teak", "Neem", "Deodar"]
  },
  {
    id: 81,
    text: "Free India Legion was also known as:",
    answers: ["India Legion", "Indian Army", "Azad Hind Sena", "INA"]
  },
  {
    id: 82,
    text: "Which of these rivers belong to Odisha coast?",
    answers: ["Brahmani-Baitarani", "Krishna-Godavari", "Narmada-Tapi", "Mahi-Sabarmati"]
  },
  {
    id: 83,
    text: "Who gave the concept of the ecological energy flow model?",
    answers: ["Lindemann", "Darwin", "Elton", "Haeckel"]
  },
  {
    id: 84,
    text: "Which year marks the start of India-Pak war leading to Bangladesh Liberation?",
    answers: ["1971", "1947", "1965", "1999"]
  },
  {
    id: 85,
    text: "Who reorganized INA into Azad Hind Fauj?",
    answers: ["Subhash Chandra Bose", "Mohan Singh", "Rash Behari Bose", "Lala Lajpat Rai"]
  },
  {
    id: 86,
    text: "What is meant by liberalising foreign integration?",
    answers: ["Integrating economies globally", "Breaking off global ties", "Imposing strict tariffs", "Restricting FDI"]
  },
  {
    id: 87,
    text: "India has how many major public ports?",
    answers: ["12", "10", "11", "13"]
  },
  {
    id: 88,
    text: "India’s 13th port is which type?",
    answers: ["Corporate", "Private", "Military", "Traditional"]
  },
  {
    id: 89,
    text: "Which industrial policy laid foundation of public-private operations?",
    answers: ["1956", "1948", "1991", "2000"]
  },
  {
    id: 90,
    text: "Which Indian scientist gave triple helical collagen model?",
    answers: ["G V Ramachandran", "M S Swaminathan", "C V Raman", "Homi Bhabha"]
  },
  {
    id: 91,
    text: "Which is the longest coastal line among evergreen forest areas (as per lecture)?",
    answers: ["Odisha", "Gujarat", "Kerala", "Maharashtra"]
  },
  {
    id: 92,
    text: "Rhodophyceae refers to:",
    answers: ["Red algae", "Green algae", "Blue-green algae", "Fungi"]
  },
  {
    id: 93,
    text: "Which of the following is used in toothpaste and fire extinguishers?",
    answers: ["Mg(OH)₂", "HCl", "NaCl", "Na₂SO₄"]
  },
  {
    id: 94,
    text: "Which ecosystem concept was proposed in 1935?",
    answers: ["Ecosystem", "Food Web", "Food Chain", "Energy Pyramid"]
  },
  {
    id: 95,
    text: "Which country was defeated in the final of Hockey WC by Germany?",
    answers: ["Belgium", "Australia", "India", "France"]
  },
  {
    id: 96,
    text: "Blue vitriol is commonly used in:",
    answers: ["Fungicide", "Fertilizer", "Antiseptic", "Analgesic"]
  },
  {
    id: 97,
    text: "India Legion was founded in:",
    answers: ["Berlin", "Tokyo", "Rome", "Paris"]
  },
  {
    id: 98,
    text: "Which of the following boundaries is from 1944?",
    answers: ["Hindenburg Line", "Maginot Line", "Durand Line", "38th Parallel"]
  },
  {
    id: 99,
    text: "Which of the following chemicals is NOT a vitriol?",
    answers: ["NaCl", "FeSO₄", "CuSO₄", "ZnSO₄"]
  },
  {
    id: 100,
    text: "Which river combination is associated with evergreen forest and NW-4?",
    answers: ["Krishna–Godavari", "Mahanadi–Krishna", "Ganga–Yamuna", "Narmada–Tapi"]
  }
];

export default questions;

