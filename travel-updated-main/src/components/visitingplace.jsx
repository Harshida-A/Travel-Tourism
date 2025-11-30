import "./visitingplace.css";
const visitingPlaces = {
  "Andhra Pradesh": [
    { name: "Tirupati Temple", img: "https://tse2.mm.bing.net/th/id/OIP.MpwwmoIH--kEuI6zrbMdGAHaE6?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Famous temple and pilgrimage site." },
    { name: "Araku Valley", img: "https://tse4.mm.bing.net/th/id/OIP.ksFLmGuz0tGTE6BTXFm_vAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Beautiful hills and coffee plantations." },
    { name: "Borra Caves", img: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/caves-1.jpg?resize=800%2C530&ssl=1", desc: "Ancient limestone caves with stalactites and stalagmites." },
  { name: "Ramoji Film City", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ramoji_Film_City.jpg", desc: "World’s largest film studio complex with theme park attractions." },
  { name: "Visakhapatnam Beach", img: "https://media.tripinvites.com/places/visakhapatnam/visakhapatnam-beach-views-featured.jpg", desc: "Popular beach destination with scenic coastline." },
  { name: "Kailasagiri", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Kailasagiri.jpg", desc: "Hilltop park with panoramic views of Visakhapatnam city and coast." },
  { name: "Sri Sailam Temple", img: "https://cdn.shopify.com/s/files/1/0946/3329/6157/files/Srisailam-1-1024x683.jpg?v=1753266306", desc: "Ancient temple dedicated to Lord Mallikarjuna on the banks of Krishna river." },
  { name: "Konaseema", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Prabhalu_Festival.jpg/1200px-Prabhalu_Festival.jpg", desc: "Lush green delta region with coconut groves and backwaters." },
  { name: "Simhachalam Temple", img: "https://holidaysdna.com/wp-content/uploads/simhachalam-temple-visakhapatnam-india-tourism-1.jpg", desc: "Historic hilltop temple near Visakhapatnam." },
  { name: "Maredumilli Forests", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/fe/f8/29/the-beautiful-mountain.jpg?w=900&h=500&s=1", desc: "Dense forests ideal for eco-tourism and waterfalls." }

  ],
  "Arunachal Pradesh": [
    { name: "Tawang Monastery", img: "https://i.pinimg.com/736x/1f/03/7e/1f037e5a655beaa2eacdd1ff5d449982.jpg", desc: "Largest monastery in Arunachal Pradesh." },
    { name: "Ziro Valley", img: "https://i.pinimg.com/736x/60/e6/8d/60e68d00c36e3cc00b1770a52c22c888.jpg", desc: "Famous for rice fields and scenic beauty." },
    { name: "Bomdila", img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Bomdila.jpg", desc: "Hill town known for apple orchards and monasteries." },
  { name: "Sela Pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCZCXWk-QfUO2eY3eOuQSeeBJPaIwNMU9SF8jA3psY7-SbDfxc0_7PEGTqtAC1nMw6lw&usqp=CAU", desc: "High-altitude mountain pass with snow-capped views." },
  { name: "Namdapha National Park", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7HTp6fGoLiDGZ82z7BboPdMgFR8rjU3Iq6EVmhtYHyLsmBy7N0-0p7n8v7jC1_b8t27C6zpL2gSTLp66kqrs-lS2pVmy200DLobPTthyZ-Vz_aF1HNkjeOlvzW__iJ10JGF9QJOtk-tJn/s1600/1E1A5586.jpeg", desc: "Biodiverse park home to rare flora and fauna." },
  { name: "Mechuka Valley", img: "https://easternroutes.com/wp-content/uploads/2019/02/Mechuka_Arunachal_Pradesh.jpg", desc: "Secluded valley with picturesque landscapes." },
  { name: "Pangin", img: "https://www.tourmyindia.com/states/arunachalpradesh/images/pangin1.jpg", desc: "Riverside town with scenic views and tribal culture." },
  { name: "Itanagar", img: "https://www.esikkimtourism.in/wp-content/uploads/2018/07/Itanagar-Jawaharlal-Nehru-State-Museum.jpg", desc: "State capital with historical sites and museums." },
  { name: "Parshuram Kund", img: "https://static.toiimg.com/photo/94883598.cms", desc: "Sacred Hindu pilgrimage site along the Lohit river." },
  { name: "Tippi", img: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Tippi-Travel-Guide-840x425.jpg", desc: "Known for bamboo forests and traditional tribal life." }

  ],
  "Assam": [
    { name: "Kaziranga National Park", img: "https://www.tigersafariindia.com/wp-content/uploads/2023/11/elephants-playing-in-kaziranga-national-park.jpg", desc: "Home of the one-horned rhinoceros." },
    { name: "Majuli Island", img: "https://i.pinimg.com/1200x/97/c5/a4/97c5a4de65f1915315bf7afe40a4bc10.jpg", desc: "World's largest river island." },
    { name: "Manas National Park", img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Manas_landscape_rhino.jpg", desc: "UNESCO World Heritage site with rich wildlife." },
{ name: "Sivasagar", img: "https://s7ap1.scene7.com/is/image/incredibleindia/shiva-dol-sivasagar-assam-2-attr-hero?qlt=82&ts=1751459547120", desc: "Historic town known for Ahom-era monuments and temples." },
{ name: "Guwahati – Kamakhya Temple", img: "https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1742179171313", desc: "Famous hilltop temple and pilgrimage site." },
{ name: "Haflong", img: "https://static.toiimg.com/photo/msid-66346220,width-96,height-65.cms", desc: "Scenic hill station with lakes and waterfalls." },
{ name: "Tezpur", img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Agnigarh_Hill%2C_Tezpur.JPG", desc: "Cultural town with historical sites and riverfront views." },
{ name: "Dibrugarh", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/07/82/4f/mai-temple.jpg?w=600&h=-1&s=1", desc: "Tea city surrounded by lush plantations." },
{ name: "Jorhat", img: "https://s7ap1.scene7.com/is/image/incredibleindia/lachit-borphukan-maidam-jorhat-assam-1-attr-hero?qlt=82&ts=1742174331361", desc: "Gateway to tea gardens and cultural heritage." },
{ name: "Diphu", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Diphu_hills.JPG", desc: "Hill town in Karbi Anglong district with tribal culture." }

  ],
  "Bihar": [
    { name: "Bodh Gaya", img: "https://i.pinimg.com/736x/a3/2c/71/a32c716e7edfcc56aa77770ac9f21d56.jpg", desc: "Place of enlightenment of Buddha." },
    { name: "Nalanda University", img: "https://i.pinimg.com/1200x/33/33/db/3333dbd078d093cce94a2d9b79e71ef9.jpg" , desc: "Historic city with hot springs and Buddhist sites." },
{ name: "Vaishali", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/23/68/8a/caption.jpg?w=1200&h=-1&s=1", desc: "Ancient city associated with Mahavira and Buddha." },
{ name: "Patna Sahib Gurudwara", img: "https://hblimg.mmtcdn.com/content/hubble/img/patna/mmt/activities/m_activities_patna_takht_sri_patna_sahib_l_453_604.jpg", desc: "Important Sikh pilgrimage site in Patna." },
{ name: "Kesaria Stupa", img: "https://dy3rma73kowlp.cloudfront.net/uploads/2024/08/kesaria-buddha-stupa.jpg", desc: "Ancient Buddhist stupa, one of the tallest in the world." },
{ name: "Gaya", img: "https://static.wixstatic.com/media/4d32f3_94cf08eff5a94f8580aa7e5b3ffdc648~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4d32f3_94cf08eff5a94f8580aa7e5b3ffdc648~mv2.jpg", desc: "Religious city famous for Vishnupad Temple." },
{ name: "Buxar Fort", img: "https://atmabuxar.in/public/assets/images/hp4.jpg", desc: "Historic fort with archaeological significance." },
{ name: "Sasaram", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKkD2lzaOuM9uskZF_KKA6ytN2j0aIXCTYg&s", desc: "City with the grand tomb of Sher Shah Suri." },
{ name: "Bihar Sharif", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9bDsIKH0WeQQFWGMCoMF4moONbNrhoOeKepB56tb7ctXeTNEKG-5W1z1bFmN9GoBygo&usqp=CAU", desc: "Town known for historical mosques and shrines." }

  ],
  "Chhattisgarh": [
    { name: "Chitrakote Falls", img: "https://s7ap1.scene7.com/is/image/incredibleindia/chitrakote-water-falls-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011277081", desc: "Niagara of India." },
    { name: "Barnawapara Wildlife Sanctuary", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoByWY3s9caVgQJ0LQu1p2iSk_arTNmoo2Sw&s", desc: "Rich flora and fauna." },
    { name: "Bhoramdeo Temple", img: "https://puratattva.in/wp-content/uploads/2022/07/Chhapari_Bhoramdev-Temple_Chhattisgarh-135.jpeg", desc: "Ancient temple known as the 'Khajuraho of Chhattisgarh'." },
{ name: "Kanger Valley National Park", img: "https://static.toiimg.com/thumb/msid-118943591,width-1280,height-720,resizemode-72/118943591.jpg", desc: "Home to the famous Kutumsar and Kailash caves." },
{ name: "Raipur", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jawahar_Bazar%2C_Raipur.jpg/1200px-Jawahar_Bazar%2C_Raipur.jpg", desc: "Capital city with cultural and historical landmarks." },
{ name: "Sirpur", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QxWIZEdbHYi5cBk0lpbPRpiN9xJOulVca7wAoqVzcJPGaHji0O2pzCxIePH4ao-jJsA&usqp=CAU", desc: "Archaeological site with Buddhist and Hindu monuments." },
{ name: "Dantewada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFVUOJcHeNGfgan42WinMIwom8kQdou76dBTErJuKrgIO5i23wG-WiQJ0ymBwYcHBVy4&usqp=CAU", desc: "Town near the famous Danteshwari Temple." },
{ name: "Maitri Bagh Zoo", img: "https://chhattisgarhpedia.com/upload/blog/maitri-garden-or-maitri-bagh-zoo-bhilai-chhattisgarh.webp", desc: "Zoo and botanical garden in Bhilai." },
{ name: "Achanakmar Wildlife Sanctuary", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6vHit3y9Y4McXuZnaKLiZ0mRg_KPZ8RmtA&s", desc: "Biodiverse forest area ideal for safaris." },
{ name: "Dongargarh", img: "https://s7ap1.scene7.com/is/image/incredibleindia/old-maa-bamleshwari-devi-dongargarh-rajnandgaon-chhattisgarh-3-attr-hero?qlt=82&ts=1754895220823", desc: "Famous for the Maa Bamleshwari Temple on a hilltop." }

  ],
  "Goa": [
    { name: "Baga Beach", img: "https://i.pinimg.com/736x/0e/a0/da/0ea0da98ada84baffa10e8d3e15e4d08.jpg", desc: "Famous beach with nightlife." },
    { name: "Basilica of Bom Jesus", img: "https://i.pinimg.com/736x/a4/b8/c8/a4b8c83f8a2cd8713ab6826051534afd.jpg", desc: "UNESCO World Heritage site." },
    { name: "Calangute Beach", img: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_289603190_20200113114525.jpg", desc: "Largest and most popular beach in Goa." },
{ name: "Fort Aguada", img: "https://i.pinimg.com/736x/cb/ff/df/cbffdf3538036c41844ebd10c80382cd.jpg", desc: "17th-century Portuguese fort with sea views." },
{ name: "Dudhsagar Falls", img: "https://i.pinimg.com/1200x/8d/a2/82/8da2827f64c91076393ab0de7f0d7876.jpg", desc: "Spectacular four-tiered waterfall." },
{ name: "Anjuna Beach", img: "https://i.pinimg.com/736x/f9/7a/2a/f97a2a1058d0defc9280099b353e85a0.jpg", desc: "Known for its flea market and parties." },
{ name: "Chapora Fort", img: "https://i.pinimg.com/1200x/1f/10/9f/1f109f8a6b6df51cf6149ba16d7d3894.jpg", desc: "Iconic fort offering panoramic views." },
{ name: "Colva Beach", img: "https://i.pinimg.com/736x/df/09/1e/df091e1b68335a137629b1c376c15236.jpg", desc: "Popular beach with water activities." },
{ name: "Palolem Beach", img: "https://i.pinimg.com/1200x/37/67/74/3767741a84d8fd77b330b317339284b5.jpg", desc: "Scenic crescent-shaped beach." },
{ name: "Se Cathedral", img: "https://i.pinimg.com/1200x/3f/28/b8/3f28b8b56c63075aac8a2f9c915dccce.jpg", desc: "One of Asia’s largest churches." }

    ],
  "Gujarat": [
    { name: "Statue of Unity", img: "https://i.pinimg.com/736x/1a/7f/ff/1a7fffab99c12c12e227e8a7ed62b42a.jpg", desc: "Tallest statue in the world." },
    { name: "Gir National Park", img: "https://i.pinimg.com/736x/5f/d9/90/5fd990a28c73bcefd785ef9e490b5df2.jpg", desc: "Home of Asiatic lions." },
    { name: "Somnath Temple", img: "https://i.pinimg.com/1200x/65/80/11/658011808d7a409403f097bd0856dc47.jpg", desc: "Ancient temple and important pilgrimage site." },
    { name: "Rann of Kutch", img: "https://i.pinimg.com/736x/e9/d3/a9/e9d3a94780ac12463e0b71479ebbaa05.jpg", desc: "Vast salt desert known for Rann Utsav festival." },
    { name: "Ahmedabad", img: "https://i.pinimg.com/736x/67/5a/e0/675ae0f24ecf7b1d98fb45847f12f2f7.jpg", desc: "Historic city famous for heritage sites and Sabarmati Ashram." },
    { name: "Dwarkadhish Temple", img: "https://i.pinimg.com/1200x/e6/f3/a3/e6f3a3de9e134319002f1e395cf59c54.jpg", desc: "Temple dedicated to Lord Krishna in Dwarka." },
    { name: "Saputara", img: "https://i.pinimg.com/1200x/ee/ea/78/eeea787c19311cb6589b90f4f6de54b9.jpg", desc: "Hill station on the Gujarat-Maharashtra border." },
    { name: "Bhuj", img: "https://i.pinimg.com/1200x/89/ef/61/89ef61b12e78a502ecb9df9e3af20d8a.jpg", desc: "Gateway to Kutch region with rich culture and crafts." },
    { name: "Lothal", img: "https://i.pinimg.com/1200x/c1/fc/48/c1fc48a766c6e74d72d1ea64a2905c6b.jpg", desc: "Ancient Indus Valley Civilization site." },
    { name: "Modhera Sun Temple", img: "https://i.pinimg.com/1200x/23/91/97/239197ec916e4c032dc1e3439797533e.jpg", desc: "Ancient temple dedicated to the Sun God." }

  ],
  "Haryana": [
    { name: "Kurukshetra", img: "https://i.pinimg.com/1200x/2b/7a/3b/2b7a3b681f4093a1e05ad3ebe495a523.jpg", desc: "Historic city from Mahabharata." },
    { name: "Sultanpur Bird Sanctuary", img: "https://tse3.mm.bing.net/th/id/OIP.c8bubEUwoHKCuzeVh3JB7wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Famous for migratory birds." },
    { name: "Pinjore Gardens", img: "https://i.pinimg.com/1200x/39/88/70/398870ca41902f68de97446c63612a31.jpg", desc: "Historic Mughal-style terraced garden." },
{ name: "Morni Hills", img: "https://i.pinimg.com/1200x/d7/88/0d/d7880d31db204251fa573df878c6f4f3.jpg", desc: "Only hill station of Haryana." },
{ name: "Badkhal Lake", img: "https://i.pinimg.com/1200x/48/b8/c0/48b8c038fb2ac1f3fc18a580afc8b616.jpg", desc: "Scenic lake surrounded by Aravalli hills." },
{ name: "Kingdom of Dreams, Gurugram", img: "https://i.pinimg.com/736x/6a/fc/1d/6afc1da7246dc3edb42dd7880780d9fb.jpg", desc: "Entertainment and cultural destination." },
{ name: "Tilyar Lake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROecEjzwoWod3jbvD1GU5r-Wc78KAftXyQiw&s", desc: "Popular picnic spot with boating." },
{ name: "Brahma Sarovar", img: "https://i.pinimg.com/1200x/5e/38/ff/5e38ff442f05e068ca8e299d59a2636c.jpg", desc: "Sacred water tank in Kurukshetra." },
{ name: "Damdama Lake", img: "https://i.pinimg.com/736x/5d/c4/b8/5dc4b864fa1a026560a2b631748c8fa6.jpg", desc: "Adventure activities and scenic views." },
{ name: "Star Monument", img: "https://i.pinimg.com/736x/e8/48/47/e84847d5f2543343909e3256f7294c6c.jpg", desc: "Unique star-shaped architectural structure." }

  ],
  "Himachal Pradesh": [
    { name: "Manali", img: "https://i.pinimg.com/736x/8c/14/3e/8c143e84594eafe45e5db7ce2ce503a3.jpg", desc: "Popular hill station." },
    { name: "Shimla", img: "https://i.pinimg.com/736x/b5/19/f6/b519f640fed0bcd63c4da98640bd320d.jpg", desc: "Famous colonial town." },
    { name: "Dharamshala", img: "URL_HERE", desc: "Home of the Dalai Lama with scenic beauty." },
{ name: "McLeod Ganj", img: "URL_HERE", desc: "Known for monasteries and Tibetan culture." },
{ name: "Kasol", img: "URL_HERE", desc: "Popular with trekkers and backpackers." },
{ name: "Dalhousie", img: "URL_HERE", desc: "Peaceful hill town with colonial charm." },
{ name: "Spiti Valley", img: "URL_HERE", desc: "High-altitude desert with stunning views." },
{ name: "Kasauli", img: "URL_HERE", desc: "Quiet, picturesque cantonment town." },
{ name: "Kullu", img: "URL_HERE", desc: "Known for valleys and adventure sports." },
{ name: "Chamba", img: "URL_HERE", desc: "Historic town with temples and scenic beauty." }

  ],
  "Jharkhand": [
    { name: "Ranchi", img: "URL_HERE", desc: "Capital city with natural beauty." },
    { name: "Betla National Park", img: "URL_HERE", desc: "Wildlife sanctuary with forests." },
    { name: "Netarhat", img: "", desc: "Scenic hill station known as the Queen of Chotanagpur." },
{ name: "Hundru Falls", img: "", desc: "One of the highest and most beautiful waterfalls in Jharkhand." },
{ name: "Dassam Falls", img: "", desc: "Popular waterfall near Ranchi." },
{ name: "Jagannath Temple, Ranchi", img: "", desc: "Historic 17th-century temple." },
{ name: "Jubilee Park, Jamshedpur", img: "", desc: "Large green park with fountains." },
{ name: "Dalma Wildlife Sanctuary", img: "", desc: "Elephant reserve with trekking trails." },
{ name: "Deoghar (Baidyanath Dham)", img: "", desc: "Major pilgrimage site and Jyotirlinga temple." },
{ name: "Hazaribagh National Park", img: "", desc: "Wildlife park known for scenic landscapes." }

  ],
  "Karnataka": [
    { name: "Bengaluru", img: "URL_HERE", desc: "Silicon Valley of India." },
    { name: "Mysuru Palace", img: "URL_HERE", desc: "Famous royal palace." },
    { name: "Hampi", img: "", desc: "UNESCO World Heritage site with ancient ruins." },
{ name: "Coorg", img: "", desc: "Scenic hill station known for coffee plantations." },
{ name: "Gokarna", img: "", desc: "Peaceful beach destination." },
{ name: "Chikmagalur", img: "", desc: "Famous for hills and coffee estates." },
{ name: "Udupi", img: "", desc: "Known for temples and beaches." },
{ name: "Badami", img: "", desc: "Historic rock-cut cave temples." },
{ name: "Jog Falls", img: "", desc: "One of India's highest waterfalls." },
{ name: "Bandipur National Park", img: "", desc: "Popular wildlife sanctuary." }

  ],
  "Kerala": [
    { name: "Munnar", img: "URL_HERE", desc: "Tea gardens and scenic beauty." },
    { name: "Alleppey Backwaters", img: "URL_HERE", desc: "Houseboat experience in Kerala." },
    { name: "Kochi", img: "", desc: "Historic port city with colonial charm." },
{ name: "Kovalam Beach", img: "", desc: "Famous beach with lighthouse views." },
{ name: "Wayanad", img: "", desc: "Hill district known for wildlife and waterfalls." },
{ name: "Thekkady", img: "", desc: "Home to Periyar Wildlife Sanctuary." },
{ name: "Varkala", img: "", desc: "Cliffside beach with stunning scenery." },
{ name: "Kumarakom", img: "", desc: "Backwater destination with bird sanctuary." },
{ name: "Thrissur", img: "", desc: "Cultural capital known for festivals." },
{ name: "Palakkad", img: "", desc: "Known for dams, forts, and paddy fields." }

  ],
  "Madhya Pradesh": [
    { name: "Khajuraho Temples", img: "URL_HERE", desc: "UNESCO World Heritage site." },
    { name: "Kanha National Park", img: "URL_HERE", desc: "Famous wildlife sanctuary." },
    { name: "Bandhavgarh National Park", img: "", desc: "Known for tigers and rich wildlife." },
{ name: "Sanchi Stupa", img: "", desc: "Ancient Buddhist monument and UNESCO site." },
{ name: "Gwalior Fort", img: "", desc: "Majestic hilltop fort with rich history." },
{ name: "Ujjain", img: "", desc: "Holy city known for Mahakaleshwar Temple." },
{ name: "Pachmarhi", img: "", desc: "Scenic hill station in the Satpura range." },
{ name: "Omkareshwar", img: "", desc: "Island temple shaped like 'Om'." },
{ name: "Bhimbetka Caves", img: "", desc: "Prehistoric rock shelters and paintings." },
{ name: "Orchha", img: "", desc: "Historic town with palaces and temples." }

  ],
  "Maharashtra": [
    { name: "Mumbai", img: "URL_HERE", desc: "Financial hub and Bollywood." },
    { name: "Ajanta & Ellora Caves", img: "URL_HERE", desc: "Ancient rock-cut monuments." },
    { name: "Pune", img: "", desc: "Cultural city with historical landmarks." },
{ name: "Mahabaleshwar", img: "", desc: "Popular hill station known for viewpoints." },
{ name: "Lonavala & Khandala", img: "", desc: "Famous twin hill stations near Mumbai." },
{ name: "Nashik", img: "", desc: "Wine capital of India and pilgrimage city." },
{ name: "Shirdi", img: "", desc: "Pilgrimage site of Sai Baba." },
{ name: "Alibaug", img: "", desc: "Coastal town known for clean beaches." },
{ name: "Tadoba National Park", img: "", desc: "Tiger reserve with rich wildlife." },
{ name: "Sindhudurg Fort", img: "", desc: "Historic sea fort built by Shivaji Maharaj." }

  ],
  "Manipur": [
    { name: "Loktak Lake", img: "URL_HERE", desc: "Famous floating lake." },
    { name: "Imphal", img: "URL_HERE", desc: "Capital city with historical sites." },
    { name: "Keibul Lamjao National Park", img: "", desc: "World’s only floating national park." },
{ name: "Kangla Fort", img: "", desc: "Historic fort and cultural heritage site." },
{ name: "Ukhrul", img: "", desc: "Hill town known for Shiroy Lily." },
{ name: "Senapati", img: "", desc: "Scenic district with green landscapes." },
{ name: "Andro Village", img: "", desc: "Traditional village known for pottery." },
{ name: "Thoubal", img: "", desc: "Popular for trekking and scenic views." },
{ name: "Moreh", img: "", desc: "Border town and trade center." },
{ name: "Bishnupur", img: "", desc: "Famous for temples and natural beauty." }

  ],
  "Meghalaya": [
    { name: "Cherrapunji", img: "URL_HERE", desc: "Wettest place on Earth." },
    { name: "Living Root Bridges", img: "URL_HERE", desc: "Natural root bridges." },
    { name: "Shillong", img: "", desc: "Scenic hill station known as the Scotland of the East." },
{ name: "Dawki", img: "", desc: "Crystal-clear river near the India-Bangladesh border." },
{ name: "Mawlynnong", img: "", desc: "Asia’s cleanest village." },
{ name: "Nongriat", img: "", desc: "Famous for the double-decker living root bridge." },
{ name: "Jowai", img: "", desc: "Known for lakes, waterfalls, and caves." },
{ name: "Elephant Falls", img: "", desc: "Popular multi-tiered waterfall near Shillong." },
{ name: "Laitlum Canyons", img: "", desc: "Breathtaking canyon viewpoints." },
{ name: "Siju Cave", img: "", desc: "One of India’s longest limestone caves." }

  ],
  "Mizoram": [
    { name: "Aizawl", img: "URL_HERE", desc: "Capital city with hills." },
    { name: "Vantawng Falls", img: "URL_HERE", desc: "Tallest waterfall in Mizoram." },
    { name: "Champhai", img: "", desc: "Border town with vineyards and scenic views." },
{ name: "Lunglei", img: "", desc: "Second-largest town known for nature and trekking." },
{ name: "Reiek", img: "", desc: "Hilltop viewpoint with traditional Mizo village." },
{ name: "Phawngpui (Blue Mountain)", img: "", desc: "Highest peak in Mizoram." },
{ name: "Tam Dil Lake", img: "", desc: "Serene lake surrounded by forests." },
{ name: "Hmuifang", img: "", desc: "Beautiful hill station ideal for adventures." },
{ name: "Serchhip", img: "", desc: "Home to natural attractions and heritage sites." },
{ name: "Murlen National Park", img: "", desc: "Dense forest park with diverse wildlife." }

  ],
  "Nagaland": [
    { name: "Kohima", img: "URL_HERE", desc: "Capital city with cultural heritage." },
    { name: "Dzukou Valley", img: "URL_HERE", desc: "Scenic valley and trekking." },
    { name: "Dimapur", img: "", desc: "Gateway city with ancient ruins and markets." },
{ name: "Mokokchung", img: "", desc: "Cultural hub of the Ao tribe." },
{ name: "Wokha", img: "", desc: "Known for scenic landscapes and Lotha tribe culture." },
{ name: "Tuophema Village", img: "", desc: "Heritage village showcasing Naga traditions." },
{ name: "Mon", img: "", desc: "Famous for Konyak tribe and tattooed warriors." },
{ name: "Japfu Peak", img: "", desc: "Second-highest peak in Nagaland with great trekking." },
{ name: "Khonoma Village", img: "", desc: "Asia’s first green village." },
{ name: "Pfutsero", img: "", desc: "Coldest town in Nagaland with beautiful vistas." }

  ],
  "Odisha": [
    { name: "Konark Sun Temple", img: "URL_HERE", desc: "UNESCO World Heritage site." },
    { name: "Puri Beach", img: "URL_HERE", desc: "Famous seaside destination." },
    { name: "Chilika Lake", img: "", desc: "Asia’s largest brackish water lagoon." },
{ name: "Bhubaneswar", img: "", desc: "Temple city of India." },
{ name: "Similipal National Park", img: "", desc: "Tiger reserve with waterfalls and forests." },
{ name: "Cuttack", img: "", desc: "Historic city known for silver filigree work." },
{ name: "Raghurajpur", img: "", desc: "Crafts village famous for Pattachitra art." },
{ name: "Gopalpur Beach", img: "", desc: "Quiet and clean beach town." },
{ name: "Hirakud Dam", img: "", desc: "One of the world’s longest earthen dams." },
{ name: "Daringbadi", img: "", desc: "Known as the Kashmir of Odisha." }

  ],
  "Punjab": [
    { name: "Golden Temple", img: "URL_HERE", desc: "Sacred Sikh shrine." },
    { name: "Jallianwala Bagh", img: "URL_HERE", desc: "Historic site." },
    { name: "Wagah Border", img: "", desc: "Famous for the daily beating retreat ceremony." },
{ name: "Amritsar Market", img: "", desc: "Vibrant bazaars for food and shopping." },
{ name: "Anandpur Sahib", img: "", desc: "One of the holiest Sikh towns." },
{ name: "Patiala", img: "", desc: "Royal city known for forts and heritage." },
{ name: "Chandigarh Rock Garden", img: "", desc: "Unique garden made from recycled materials." },
{ name: "Sukhna Lake", img: "", desc: "Beautiful lake for boating and relaxation." },
{ name: "Ludhiana", img: "", desc: "Industrial city with museums and parks." },
{ name: "Bathinda Fort", img: "", desc: "Historic fort with archaeological importance." }

  ],
  "Rajasthan": [
    { name: "Jaipur", img: "URL_HERE", desc: "Pink City and forts." },
    { name: "Udaipur", img: "URL_HERE", desc: "City of lakes." },
    { name: "Jodhpur", img: "", desc: "Blue City known for Mehrangarh Fort." },
{ name: "Jaisalmer", img: "", desc: "Golden City with desert and sandstone forts." },
{ name: "Mount Abu", img: "", desc: "Only hill station of Rajasthan." },
{ name: "Pushkar", img: "", desc: "Sacred town famous for Brahma Temple." },
{ name: "Bikaner", img: "", desc: "Historic city known for Junagarh Fort." },
{ name: "Chittorgarh", img: "", desc: "Massive fort symbolizing Rajput valor." },
{ name: "Ranthambore National Park", img: "", desc: "Tiger reserve with ancient fort." },
{ name: "Ajmer", img: "", desc: "Famous for Ajmer Sharif Dargah." }

  ],
  "Sikkim": [
    { name: "Gangtok", img: "", desc: "Capital city in the hills." },
    { name: "Tsomgo Lake", img: "", desc: "Glacial lake surrounded by mountains." },
    { name: "Rumtek Monastery", img: "", desc: "One of the largest monasteries in Sikkim." },
    { name: "Nathula Pass", img: "", desc: "Mountain pass on the Indo-China border." },
    { name: "Yumthang Valley", img: "", desc: "Scenic valley known as the 'Valley of Flowers'." },
    { name: "Pelling", img: "", desc: "Town with views of the Kanchenjunga peak." },
    { name: "Seven Sisters Waterfalls", img: "", desc: "Beautiful cascading waterfalls near Gangtok." },
    { name: "Namchi", img: "", desc: "Town famous for Char Dham pilgrimage sites." },
    { name: "Tsongmo Lake", img: "", desc: "High-altitude lake with serene surroundings." },
    { name: "Ravangla", img: "", desc: "Small town known for Buddha Park and scenic views." }
],

  "Tamil Nadu": [
    { name: "Meenakshi Temple", img: "", desc: "One of the oldest and most famous temples in India." },
    { name: "Ooty", img: "", desc: "Queen of hill stations." },
    { name: "Mahabalipuram", img: "", desc: "Famous for rock-cut temples and shore temples." },
    { name: "Kanyakumari", img: "", desc: "Southernmost tip of India, known for sunrise and sunset views." },
    { name: "Rameswaram", img: "", desc: "Pilgrimage town with historic temples and Pamban Bridge." },
    { name: "Chidambaram", img: "", desc: "Temple town famous for the Nataraja Temple." },
    { name: "Madurai", img: "", desc: "Historic city known for Meenakshi Amman Temple and cultural heritage." },
    { name: "Kodaikanal", img: "", desc: "Hill station with scenic landscapes and lakes." },
    { name: "Thanjavur", img: "", desc: "Known for Brihadeeswarar Temple and classical arts." },
    { name: "Hogenakkal Falls", img: "", desc: "Picturesque waterfalls on the Kaveri river." }
],

  "Telangana": [
    { name: "Charminar", img: "", desc: "Iconic monument in Hyderabad." },
    { name: "Golconda Fort", img: "", desc: "Historic fortress." },
    { name: "Ramoji Film City", img: "", desc: "One of the largest film cities in the world." },
    { name: "Hussain Sagar Lake", img: "", desc: "Man-made lake with Buddha statue in the middle." },
    { name: "Salar Jung Museum", img: "", desc: "Museum housing rare art and artifacts." },
    { name: "Birla Mandir", img: "", desc: "Marble temple dedicated to Lord Venkateswara." },
    { name: "Medak Fort", img: "", desc: "Fort with historic significance and scenic views." },
    { name: "Kakatiya Kala Thoranam", img: "", desc: "Ancient arch in Warangal symbolizing Kakatiya dynasty." },
    { name: "Bhongir Fort", img: "", desc: "Hilltop fort with panoramic views." },
    { name: "Pocharam Wildlife Sanctuary", img: "", desc: "Sanctuary with diverse flora and fauna." }
],

  "Tripura": [
    { name: "Ujjayanta Palace", img: "", desc: "Royal palace in Agartala." },
    { name: "Neermahal", img: "", desc: "Palace in the middle of a lake." },
    { name: "Tripura Sundari Temple", img: "", desc: "One of the 51 Shakti Peethas in India." },
    { name: "Jampui Hills", img: "", desc: "Scenic hill range known for orange orchards." },
    { name: "Unakoti", img: "", desc: "Archaeological site with rock-cut sculptures." },
    { name: "Sepahijala Wildlife Sanctuary", img: "", desc: "Sanctuary with diverse wildlife and bird species." },
    { name: "Ambassa", img: "", desc: "Town famous for tribal culture and scenic surroundings." },
    { name: "Belonia", img: "", desc: "Town near the Bangladesh border with natural beauty." },
    { name: "Muktinagar", img: "", desc: "Place known for religious and historical significance." },
    { name: "Pilak", img: "", desc: "Ancient archaeological site with sculptures and ruins." }
],
  "Uttar Pradesh": [
    { name: "Taj Mahal", img: "", desc: "Symbol of love and UNESCO site." },
    { name: "Varanasi", img: "", desc: "Spiritual city on the Ganges." },
    { name: "Agra Fort", img: "", desc: "Historic fort near the Taj Mahal." },
    { name: "Fatehpur Sikri", img: "", desc: "UNESCO heritage city built by Akbar." },
    { name: "Mathura", img: "", desc: "Birthplace of Lord Krishna." },
    { name: "Vrindavan", img: "", desc: "Town associated with Krishna's life and temples." },
    { name: "Lucknow", img: "", desc: "Capital city known for Nawabi culture and cuisine." },
    { name: "Sarnath", img: "", desc: "Buddhist pilgrimage site where Buddha gave his first sermon." },
    { name: "Jhansi Fort", img: "", desc: "Historic fort associated with Rani Lakshmibai." },
    { name: "Allahabad (Prayagraj)", img: "", desc: "City famous for Triveni Sangam and Kumbh Mela." }
],
  "Uttarakhand": [
    { name: "Rishikesh", img: "", desc: "Yoga capital of the world." },
    { name: "Nainital", img: "", desc: "Beautiful hill station." },
    { name: "Haridwar", img: "", desc: "Holy city on the banks of the Ganges." },
    { name: "Mussoorie", img: "", desc: "Popular hill station known as 'Queen of Hills'." },
    { name: "Jim Corbett National Park", img: "", desc: "Famous wildlife sanctuary and tiger reserve." },
    { name: "Dehradun", img: "", desc: "Capital city surrounded by hills and rivers." },
    { name: "Auli", img: "", desc: "Skiing destination with stunning Himalayan views." },
    { name: "Kedarnath", img: "", desc: "Famous Hindu pilgrimage town in the Himalayas." },
    { name: "Badrinath", img: "", desc: "Sacred town and one of the Char Dham sites." },
    { name: "Valley of Flowers", img: "", desc: "UNESCO World Heritage site with alpine flowers." }
],
  "West Bengal": [
    { name: "Kolkata", img: "", desc: "City of joy with colonial architecture." },
    { name: "Darjeeling", img: "", desc: "Famous for tea gardens and mountains." },
    { name: "Sundarbans", img: "", desc: "Largest mangrove forest and home of the Royal Bengal Tiger." },
    { name: "Shantiniketan", img: "", desc: "Cultural town founded by Rabindranath Tagore." },
    { name: "Digha", img: "", desc: "Popular seaside resort town." },
    { name: "Kalimpong", img: "", desc: "Hill station with monasteries and scenic views." },
    { name: "Cooch Behar", img: "", desc: "Town known for its palaces and historic architecture." },
    { name: "Murshidabad", img: "", desc: "Historic city with Nawabi heritage." },
    { name: "Bishnupur", img: "", desc: "Famous for terracotta temples and crafts." },
    { name: "Santiniketan", img: "", desc: "Town known for Visva Bharati University and cultural heritage." }
]

};

export default visitingPlaces;