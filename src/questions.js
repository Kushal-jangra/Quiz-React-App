const questions = [
  {
    id: 1,
    text: "Which classification system identifies BWh as a Subtropical desert?",
    answers: ["Köppen", "Holdridge", "Thornthwaite", "Trewartha"]
  },
  {
    id: 2,
    text: "The “W” in Köppen classification denotes:",
    answers: ["Desert (no rainfall)", "Wet", "Windy", "Winter"]
  },
  {
    id: 3,
    text: "Why are deserts mostly located on the western sides of continents?",
    answers: ["Cold currents reduce air moisture", "Warm currents", "Orographic rainfall", "High pressure zones"]
  },
  {
    id: 4,
    text: "What type of current leads to desert formation?",
    answers: ["Cold current", "Warm current", "Tidal current", "Equatorial current"]
  },
  {
    id: 5,
    text: "Which of these is a Subtropical Steppe?",
    answers: ["BSh", "BWh", "Cfa", "Af"]
  },
  {
    id: 6,
    text: "What is the shape of the constellation also known as the Condor Galaxy?",
    answers: ["Cross-shaped", "Square", "Spiral", "Oval"]
  },
  {
    id: 7,
    text: "Pal Ghat connects:",
    answers: ["Nilgiri to Annamalai", "Mumbai to Pune", "Mumbai to Nashik", "Chennai to Bangalore"]
  },
  {
    id: 8,
    text: "Which pass connects Mumbai to Pune?",
    answers: ["Bhor Ghat", "Pal Ghat", "Thal Ghat", "Shipki La"]
  },
  {
    id: 9,
    text: "Umling La is famous for being the:",
    answers: ["Highest motorable pass", "Lowest motorable pass", "Pass with highest rainfall", "Coldest pass"]
  },
  {
    id: 10,
    text: "Which pass connects Srinagar to Gilgit (PoK)?",
    answers: ["Burzil Pass", "Zoji La", "Banihal Pass", "Rohtang Pass"]
  },
  {
    id: 11,
    text: "Who composed the Adi Granth?",
    answers: ["Guru Arjan Dev", "Guru Ram Das", "Guru Tegh Bahadur", "Guru Nanak Dev"]
  },
  {
    id: 12,
    text: "Who introduced the Gurumukhi script?",
    answers: ["Guru Angad Dev", "Guru Arjan Dev", "Guru Nanak Dev", "Guru Ram Das"]
  },
  {
    id: 13,
    text: "Golden plating of Golden Temple was done by:",
    answers: ["Maharaja Ranjit Singh", "Guru Nanak Dev", "Guru Gobind Singh", "Guru Tegh Bahadur"]
  },
  {
    id: 14,
    text: "Guru Amar Das started:",
    answers: ["Manji and Piri system", "Gurumukhi script", "Golden Temple", "Akal Takht"]
  },
  {
    id: 15,
    text: "Guru Ram Das founded:",
    answers: ["Amritsar", "Patiala", "Anandpur Sahib", "Tarn Taran"]
  },
  {
    id: 16,
    text: "Which Mughal emperor executed Guru Tegh Bahadur?",
    answers: ["Aurangzeb", "Akbar", "Babur", "Shah Jahan"]
  },
  {
    id: 17,
    text: "Which Act was repealed in 1882?",
    answers: ["Vernacular Press Act", "Ilbert Bill", "Factory Act", "Morley-Minto Act"]
  },
  {
    id: 18,
    text: "The First Factory Act was passed in:",
    answers: ["1881", "1857", "1892", "1911"]
  },
  {
    id: 19,
    text: "Who is called the Father of Indian Census?",
    answers: ["Henry Walter", "Wellesley", "Lord Ripon", "Curzon"]
  },
  {
    id: 20,
    text: "Bengal Partition was carried out by:",
    answers: ["Lord Curzon", "Lord Ripon", "Lord Hardinge", "Lord Lytton"]
  },
  { id: 21, text: "The Subsidiary Alliance was introduced by:", answers: ["Lord Wellesley", "Lord Cornwallis", "Lord Ripon", "Lord Dalhousie"] },
  { id: 22, text: "The first state to accept the Subsidiary Alliance was:", answers: ["Hyderabad", "Awadh", "Mysore", "Punjab"] },
  { id: 23, text: "Permanent Settlement was introduced in:", answers: ["1793", "1801", "1785", "1813"] },
  { id: 24, text: "Lord Cornwallis is called:", answers: ["Father of Indian Civil Services", "Father of Indian Police", "Father of Indian Army", "Father of Indian Forest Services"] },
  { id: 25, text: "The Quit India Movement was launched due to the failure of:", answers: ["Cripps Mission", "Cabinet Mission", "Simon Commission", "Round Table Conference"] },
  { id: 26, text: "Quit India Movement was launched on:", answers: ["8 Aug 1942", "26 Jan 1942", "15 Aug 1942", "2 Oct 1942"] },
  { id: 27, text: "The leader who continued underground radio broadcasts during the Quit India Movement:", answers: ["Usha Mehta", "Aruna Asaf Ali", "Sucheta Kriplani", "Annie Besant"] },
  { id: 28, text: "The parallel government in Satara during Quit India was known as:", answers: ["Prati Sarkar", "Jatiya Sarkar", "Lok Sarkar", "Azad Sarkar"] },
  { id: 29, text: "The Peacock Throne was built by:", answers: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"] },
  { id: 30, text: "Who looted the Peacock Throne?", answers: ["Nadir Shah", "Babur", "Ahmad Shah Abdali", "Robert Clive"] },
  { id: 31, text: "The principal quantum number (n) represents:", answers: ["Energy level", "Shape of orbital", "Orientation", "Spin"] },
  { id: 32, text: "The azimuthal quantum number (l) for a d-orbital is:", answers: ["2", "0", "1", "3"] },
  { id: 33, text: "The magnetic quantum number (m) for a p-orbital can be:", answers: ["-1, 0, +1", "-2, -1, 0, +1, +2", "0", "±½"] },
  { id: 34, text: "The spin quantum number (s) can be:", answers: ["-½ or +½", "0 or 1", "-1 or +1", "any real number"] },
  { id: 35, text: "For the orbital 4f, what is the value of the principal quantum number (n)?", answers: ["4", "3", "5", "6"] },
  { id: 36, text: "Hair-like structures in plants, responsible for absorption, are part of:", answers: ["Root epidermis", "Stem", "Root cortex", "Phloem"] },
  { id: 37, text: "Mosses and liverworts are part of:", answers: ["Bryophytes", "Angiosperms", "Algae", "Pteridophytes"] },
  { id: 38, text: "Riccia is an example of:", answers: ["Liverwort", "Hornwort", "Fern", "Algae"] },
  { id: 39, text: "Function of phloem in plants:", answers: ["Transport food", "Transport water", "Support plant", "Absorb minerals"] },
  { id: 40, text: "The first number in the orbital notation like “3p” represents:", answers: ["n", "l", "m", "s"] },
  { id: 41, text: "Cess is:", answers: ["Tax for a specific purpose", "Income tax", "Gift tax", "Surcharge"] },
  { id: 42, text: "Surcharge is:", answers: ["Tax on tax", "Tax on income", "Tax for a state", "Rebate"] },
  { id: 43, text: "Revenue Deficit is:", answers: ["Revenue expenditure - revenue receipts", "Total revenue receipts - capital expenditure", "Total expenditure - total receipts", "None"] },
  { id: 44, text: "Effective Revenue Deficit =", answers: ["Revenue deficit - grants for capital assets", "Revenue deficit + borrowings", "Total deficit - fiscal deficit", "Fiscal deficit + primary deficit"] },
  { id: 45, text: "Budget Deficit refers to:", answers: ["Total expenditure - total receipt", "Revenue - Capital", "Borrowings - receipts", "Expenditure - borrowings"] },
  { id: 46, text: "Fiscal Deficit formula is:", answers: ["Total Expenditure - (Revenue Receipt + Capital Receipt - Borrowings)", "Total Expenditure - Revenue Receipt", "Total Expenditure - (Revenue Receipt + Capital Receipt)", "Revenue Receipt - Total Expenditure"] },
  { id: 47, text: "Primary Deficit =", answers: ["Fiscal Deficit - Interest Payment", "Fiscal Deficit + Interest", "Fiscal Deficit - Borrowings", "Revenue Deficit - Interest"] },
  { id: 48, text: "Direct tax example:", answers: ["Income Tax", "GST", "Excise Duty", "Customs Duty"] },
  { id: 49, text: "Gift tax is:", answers: ["Direct Tax", "Indirect Tax", "Import Tax", "State Tax"] },
  { id: 50, text: "GST is considered:", answers: ["Indirect and Proportional", "Direct and Regressive", "Indirect and Progressive", "Direct and Proportional"] },
  { id: 51, text: "Which goal replaced the Millennium Development Goals (MDGs)?", answers: ["Sustainable Development Goals (SDGs)", "Green Goals", "Social Welfare Goals", "Economic Growth Goals"] },
  { id: 52, text: "The WTO was established in:", answers: ["1995", "1993", "1994", "1996"] },
  { id: 53, text: "WTO was established through:", answers: ["Marrakesh Agreement", "Geneva Declaration", "Bretton Woods Agreement", "Doha Round"] },
  { id: 54, text: "Headquarters of WTO is in:", answers: ["Geneva", "Washington DC", "Paris", "New York"] },
  { id: 55, text: "IMF and World Bank were formed in:", answers: ["1944", "1945", "1946", "1947"] },
  { id: 56, text: "IMF and World Bank were established through:", answers: ["Bretton Woods Conference", "Marrakesh Agreement", "Washington Treaty", "GATT"] },
  { id: 57, text: "Headquarters of IMF and World Bank:", answers: ["Washington DC", "New York", "Geneva", "Brussels"] },
  { id: 58, text: "Ministry responsible for food security in India:", answers: ["Ministry of Consumer Affairs", "Ministry of Agriculture", "Ministry of Food Processing", "Ministry of Health"] },
  { id: 59, text: "Trick to remember SDGs in notes refers to:", answers: ["Spices (Pyaaz, Lehsun)", "Periodic Table", "States", "Vegetables"] },
  { id: 60, text: "Trick mentioned in the notes to remember SDGs includes:", answers: ["2 Pyaaz, 2 Lehsun", "3 Mirch, 2 Haldi", "4 Daal, 3 Roti", "5 Dahi, 1 Chawal"] },
  { id: 61, text: "Guillotine Closure means:", answers: ["Voting without debate on remaining clauses", "Entire bill is discarded", "Rewriting clauses", "Tabling the bill"] },
  { id: 62, text: "Kangaroo Closure involves:", answers: ["Voting only on selected clauses", "Jumping the bill", "Postponing vote", "Debating every clause"] },
  { id: 63, text: "A Censure motion:", answers: ["Does not require resignation", "Requires resignation", "Is unconstitutional", "Must pass Rajya Sabha"] },
  { id: 64, text: "No-confidence motion requires:", answers: ["50 MPs’ support", "10 MPs", "25% of Lok Sabha", "Only 1 MP"] },
  { id: 65, text: "Censure motion can be passed:", answers: ["Only in Lok Sabha", "Only in Rajya Sabha", "Both houses", "In joint session"] },
  { id: 66, text: "No-confidence motion leads to:", answers: ["Resignation of entire CoM", "Dissolution of assembly", "Prime Minister’s resignation only", "Fresh elections"] },
  { id: 67, text: "Green Revolution began with the import of:", answers: ["PL-480 Wheat", "IR20", "HYV Seeds", "IRRI Seeds"] },
  { id: 68, text: "Which country introduced IR8 rice before India?", answers: ["Philippines", "USA", "Bangladesh", "China"] },
  { id: 69, text: "Effect of Green Revolution:", answers: ["Increased disparity between farmers", "Unified farmer growth", "Reduced migration", "More manual labor"] },
  { id: 70, text: "Region focused during initial Green Revolution:", answers: ["TN, Punjab, Haryana, Andhra Pradesh", "East India", "South India", "UP and Bihar"] },
  { id: 71, text: "Moti Masjid in Delhi was built by:", answers: ["Aurangzeb", "Shah Jahan", "Akbar", "Bahadur Shah Zafar"] },
  { id: 72, text: "Moti Masjid in Agra was built by:", answers: ["Shah Jahan", "Akbar", "Aurangzeb", "Humayun"] },
  { id: 73, text: "Moti Masjid in Lahore was built by:", answers: ["Jahangir", "Babur", "Shah Jahan", "Aurangzeb"] },
  { id: 74, text: "Bernier visited India during the reign of:", answers: ["Shah Jahan", "Babur", "Akbar", "Aurangzeb"] },
  { id: 75, text: "Peacock Throne was looted by:", answers: ["Nadir Shah", "Robert Clive", "Warren Hastings", "Timur"] },
  { id: 76, text: "Taj Mahal was built by:", answers: ["Shah Jahan", "Akbar", "Jahangir", "Aurangzeb"] },
  { id: 77, text: "Golden Temple was started by:", answers: ["Guru Arjan Dev", "Guru Nanak", "Guru Tegh Bahadur", "Guru Ram Das"] },
  { id: 78, text: "City of Amritsar was founded by:", answers: ["Guru Ram Das", "Guru Nanak Dev", "Guru Angad", "Guru Gobind Singh"] },
  { id: 79, text: "Anand Karaj (Sikh Marriage Ceremony) was started by:", answers: ["Guru Arjan Dev", "Guru Nanak", "Guru Amar Das", "Guru Ram Das"] },
  { id: 80, text: "Guru Amar Das was a contemporary of:", answers: ["Akbar", "Babur", "Jahagir", "Shah Jahan"] },
  { id: 81, text: "The First Nuclear Test in India was conducted in:", answers: ["1974", "1971", "1972", "1976"] },
  { id: 82, text: "The First synchronized Indian Census was in:", answers: ["1881", "1872", "1830", "1851"] },
  { id: 83, text: "The Ilbert Bill Controversy happened in:", answers: ["1883", "1881", "1885", "1890"] },
  { id: 84, text: "Vernacular Press Act was repealed in:", answers: ["1882", "1883", "1884", "1881"] },
  { id: 85, text: "Who conducted the first city census (Dacca)?", answers: ["Henry Walter", "Curzon", "Cornwallis", "Lord Ripon"] },
  { id: 86, text: "Lord William Bentinck is known for abolishing:", answers: ["Thuggee system", "Vernacular Press", "Zamindari system", "Police force"] },
  { id: 87, text: "Thal Ghat connects:", answers: ["Mumbai–Nashik", "Pune–Nagpur", "Mumbai–Delhi", "Pune–Bangalore"] },
  { id: 88, text: "Rohtang Pass connects:", answers: ["Manali–Lahaul Spiti", "Srinagar–Leh", "Leh–Kargil", "Manali–Shimla"] },
  { id: 89, text: "Shipki La Pass is associated with:", answers: ["Sutlej River", "Beas River", "Chenab", "Jhelum"] },
  { id: 90, text: "Lipulekh is at the tri-junction of:", answers: ["India–Nepal–China", "India–Bhutan–Nepal", "India–China–Myanmar", "Nepal–China–Bangladesh"] },
  { id: 91, text: "Nathu La connects India with:", answers: ["Bhutan and China", "China and Nepal", "Bhutan and Myanmar", "Nepal and Bangladesh"] },
  { id: 92, text: "The 4th Five-Year Plan was from:", answers: ["1969–74", "1966–71", "1972–77", "1974–79"] },
  { id: 93, text: "The 4th Plan focused on:", answers: ["Family Planning and Employment", "Infrastructure", "Nuclear weapons", "Green Revolution"] },
  { id: 94, text: "“Smiling Buddha” was:", answers: ["First nuclear test", "India’s first peace treaty", "Defense satellite", "Economic agreement"] },
  { id: 95, text: "Adi Granth is also known as:", answers: ["Guru Granth Sahib", "Dasam Granth", "Ramayana", "Mahabharata"] },
  { id: 96, text: "Lord Ripon is associated with:", answers: ["Ilbert Bill", "Vernacular Press Act", "Subsidiary Alliance", "Permanent Settlement"] },
  { id: 97, text: "Younghusband Mission is associated with:", answers: ["Tibet", "Afghanistan", "China", "Persia"] },
  { id: 98, text: "The cold current along western coasts causes:", answers: ["Desert formation", "Monsoon", "Deforestation", "Snowfall"] },
  { id: 99, text: "Wealth tax is a:", answers: ["Direct Tax", "Indirect Tax", "Export Duty", "Capital Receipt"] },
  { id: 100, text: "Customs duty is a:", answers: ["Import/Export tax (Indirect)", "Direct Tax", "Budget Deficit", "Special Economic Tax"] }


// Export or use as needed

];

export default questions;
