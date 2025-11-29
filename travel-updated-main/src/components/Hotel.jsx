import React, { useState } from "react";
import "./Hotel.css";

function Hotels() {
  // HOTELS GROUPED BY STATE
  const hotelData = {
    "Tamil Nadu": [
      {
        name: "Chidambara Vilas - A Luxury Heritage Resort",
        desc: "A restored Chettinad heritage mansion offering an authentic royal luxury experience.",
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/6612942.jpg?k=562596e59f8eb815fff63e715ae555e56410693ea077882550635d8a2037f3e9&o=&hp=1",
      },
      {
        name: "Kaldan Samudhra Palace (Luxury Property)",
        desc: "A beautiful luxury beach resort in Chennai.",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/36/34/81/kaldan-samudhra-palace.jpg?w=700&h=-1&s=1"
      },
      {
        name: "ITC Grand Chola, a Luxury Collection Hotel",
        desc: "A beautiful luxury beach resort in Chennai.",
        img: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/overview-desktop/exterior-dusk.png",
      },
      {
        name: "The Park Chennai",
        desc: "A beautiful luxury beach resort in Chennai.",
        img: "https://lh3.googleusercontent.com/p/AF1QipOL3q3re_FGXpcyKDaAXdVyESb_3tuoEW6ebakB=w574-h384-n-k-rw-no-v1",
      },
      {
        name: "The Leela Palace Chennai - Seaside Modern Palace Hotel",
        desc: "A beautiful luxury beach resort in Chennai.",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/46318684.jpg?k=8455ec443557c8406d496705065b0e6cff6bcf8974325e0f26729810b328cf2b&o=",
      },
    ],

    "Andhra Pradesh": [
  {
    name: "Novotel Vizag Varun Beach",
    desc: "A luxury beachfront hotel offering panoramic views of RK Beach.",
    img: "https://www.ahstatic.com/photos/7535_ho_00_p_1024x768.jpg",
  },
  {
    name: "Fairfield by Marriott Visakhapatnam",
    desc: "A premium stay with modern amenities in the heart of Vizag.",
    img: "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/188/982/822/0wcDp1WHF02IuJKTKsiyw_vtzfi-exterior-0021_O.jpg?tr=w-1200%2Cfo-auto",
  },
  {
    name: "Taj Tirupati",
    desc: "A luxury stay near the iconic Tirumala temple with serene ambience.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/545843023.jpg?k=95038d113926af290a00476e74fcc7490122922e23761e218a891d397575758c&o=",
  },
  {
    name: "Marasa Sarovar Premiere",
    desc: "India's first theme-based hotel offering a divine blend of luxury.",
    img: "https://r1imghtlak.ibcdn.com/da705a19-2246-4260-b824-084699378d6d.jpg?downsize=520:350&output-format=webp",
  },
  {
    name: "Welcomehotel Guntur",
    desc: "A modern luxury hotel offering comfort in the city center.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ac/6b/90/exterior.jpg?w=500&h=-1&s=1",
  },
],


    "Arunachal Pradesh": [
  {
    name: "Hotel Pemaling",
    desc: "A scenic retreat offering mountain views in Dirang.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/60/d1/3e/hotel-side-view.jpg?w=900&h=500&s=1",
  },
  {
    name: "Hotel Donyi Polo Ashok",
    desc: "A premium hotel located in the heart of Itanagar.",
    img: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1442122540/Domestic%20Hotels/Hotels_Itanagar/Hotel%20Donyi%20Polo%20Ashok/OverVIew.jpg",
  },
  {
    name: "Sai Hotel Tawang",
    desc: "A comfortable stay with views of the Tawang monastery.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/df/aa/b3/caption.jpg?w=900&h=500&s=1",
  },
  {
    name: "Tawang Heights",
    desc: "A cozy hotel offering peaceful mountain surroundings.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5evhmtCooK7F2GU28Q81VY8UlcrlnwUp5g&s",
  },
  {
    name: "Hotel Yangzom",
    desc: "A warm and welcoming stay in Tawang with great hospitality.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/12/da/1e/99/hotel-yangzom.jpg",
  },
],


    "Assam": [
  {
    name: "Vivanta Guwahati",
    desc: "A premium modern stay surrounded by greenery in Guwahati.",
    img: "https://cdn.sanity.io/images/ocl5w36p/prod5/245d8ebbff3d1111ce4150fca7cb55377894d58d-906x840.jpg",
  },
  {
    name: "Arista by Ambition (5-star hotel)",
    desc: "A luxurious hotel offering fine dining and upscale comfort.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/2c/11/05/90/caption.jpg",
  },
  {
    name: "Hotel Lilawati Grand",
    desc: "A comfortable stay with convenient access to city attractions.",
    img: "https://r1imghtlak.mmtcdn.com/e970fd046b8111e78d640a4cef95d023.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg",
  },
  {
    name: "Radisson Blu Hotel Guwahati",
    desc: "A top-rated luxury hotel known for its hospitality.",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Brahmaputra Jungle Resort",
    desc: "A nature-themed stay offering peace and adventure.",
    img: "https://gos3.ibcdn.com/1ba6716444e211eaa62e0242ac110003.jpeg",
  },
],

    "Bihar": [
  {
    name: "Lemon Tree Premier Patna",
    desc: "A premium stay in Patna with modern facilities.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/54/f5/dd/lemon-tree-premier-patna.jpg?w=500&h=-1&s=1",
  },
  {
    name: "Hotel Maurya Patna",
    desc: "A landmark luxury hotel in Patna offering comfort and elegance.",
    img: "https://3.imimg.com/data3/SK/YS/MY-10551119/hotel-maurya-patna-500x500.jpg",
  },
  {
    name: "Marasa Sarovar Premiere Bodhgaya",
    desc: "A peaceful stay near the Mahabodhi Temple.",
    img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_117,w_2240,h_1260,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/marasa-sarovar-premiere-bodhgaya/_A4A9743_okb1b1",
  },
  {
    name: "Hotel Bodhgaya Regency",
    desc: "A serene hotel offering a spiritual stay experience.",
    img: "https://content.jdmagicbox.com/comp/bodhgaya/g7/9999px631.x631.140604121021.h5g7/catalogue/bodhgaya-regency-hotel-bodhgaya-ho-bodhgaya-4-star-hotels-u4d9zn7.jpg",
  },
  {
    name: "Hotel Gargee Grand",
    desc: "A centrally located hotel with modern amenities.",
    img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201201201027215116-7b78271a-d50d-41d6-94a6-85dc697242a2.jpg",
  }
],


    "Chhattisgarh": [
  {
    name: "Courtyard by Marriott Raipur",
    desc: "A premium hotel offering world-class comfort in Raipur.",
    img: "https://gos3.ibcdn.com/a6b2b018220911e8b874025f77df004f.jpg",
  },
  {
    name: "Hotel Babylon International",
    desc: "A luxury stay with elegant interiors and fine dining.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/92/d0/cd/caption.jpg?w=1100&h=1100&s=1",
  },
  {
    name: "Sayaji Raipur",
    desc: "A modern upscale hotel with excellent service and amenities.",
    img: "https://r1imghtlak.mmtcdn.com/d8bf89b2d84511ed8b9b0a58a9feac02.jpg?&output-quality=75&downsize=520:350&crop=520:350;31,0&output-format=jpg&downsize=480:336&crop=480:336",
  },
  {
    name: "Hyatt Raipur",
    desc: "A classy business hotel in the heart of the city.",
    img: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1632/RPRHY-P015-Exterior-Terrace.jpg/RPRHY-P015-Exterior-Terrace.16x9.jpg",
  },
  {
    name: "The Bliss International",
    desc: "A comfortable luxury hotel offering a peaceful stay.",
    img: "https://www.blissinternational.in/assets/Images/hotel1.jpg",
  },
],

    "Goa": [
  {
    name: "Taj Exotica Goa",
    desc: "A serene luxury beach stay in South Goa.",
    img: "https://image.wedmegood.com/resized/720X/uploads/member/24875/1447847069_Taj_Exotica_Goa_7.jpg",
  },
  {
    name: "ITC Grand Goa",
    desc: "A beautiful Indo-Portuguese style beachfront resort.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/20/90/d1/itc-grand-goa-resort.jpg?w=900&h=500&s=1",
  },
  {
    name: "W Goa",
    desc: "A stylish luxury resort located on Vagator Beach.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2c/d3/ce/porte-cochere.jpg?w=900&h=500&s=1",
  },
  {
    name: "Grand Hyatt Goa",
    desc: "A lavish bayside resort with modern comforts.",
    img: "https://go-goa.guide/assets/images/grand-hyatt-goa-under-the-moonlight-640x426.jpg",
  },
  {
    name: "The Leela Goa",
    desc: "A luxurious beach resort surrounded by nature.",
    img: "https://img.easemytrip.com/EMTHotel-39266/70/a/l/15488817_1.jpg",
  },
],
"Gujarat": [
  {
    name: "The Leela Gandhinagar",
    desc: "A grand luxury hotel with palace-style interiors.",
    img: "https://storage.ghadiscovery.com/cdn-cgi/image/width=1920,f=auto,g=auto,fit=scale-down/img/images/6/2/9/6/26926-1-eng-GB/LETLGN1_Exterior.jpg",
  },
  {
    name: "ITC Narmada",
    desc: "A premium luxury hotel located in Ahmedabad.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f7/a6/20/hotel-exterior.jpg?w=900&h=500&s=1",
  },
  {
    name: "Hyatt Regency Ahmedabad",
    desc: "A modern hotel offering riverfront luxury.",
    img: "https://r1imghtlak.mmtcdn.com/f605727c98bf11ed9f8c0a58a9feac02.jpg",
  },
  {
    name: "The Grand Bhagwati",
    desc: "A popular upscale hotel with excellent facilities.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f6/f4/9d/exterior.jpg?w=900&h=500&s=1",
  },
  {
    name: "Novotel Ahmedabad",
    desc: "A stylish and comfortable stay suitable for families.",
    img: "https://www.ahstatic.com/photos/8173_ho_00_p_1024x768.jpg",
  },
],
"Haryana": [
  {
    name: "The Oberoi Gurgaon",
    desc: "A world-class luxury hotel offering elegant living.",
    img: "https://www.oberoihotels.com/-/media/oberoi-hotel/global-contactus/contact-us/desktop1024x706/gurgaon.jpg",
  },
  {
    name: "The Leela Ambience Gurugram",
    desc: "A premium hotel connected to Ambience Mall.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255634843.jpg?k=417a18333030dea1b1d1c5b41f036100faf826d49063755b58f475e5a964654e&o=",
  },
  {
    name: "Trident Gurgaon",
    desc: "A resort-style luxury property with stunning architecture.",
    img: "https://www.tridenthotels.com/-/media/trident-hotel/trident-gurgaon/Gurgaon-Overview/Banner/Desktop-1920x1080/banner2.jpg",
  },
  {
    name: "Radisson Blu Faridabad",
    desc: "A modern luxury hotel with top-tier hospitality.",
    img: "https://radissonhotels.iceportal.com/image/radisson-blu-hotel-faridabad/exterior/16256-116512-f68227592_3XL.jpg",
  },
  {
    name: "Taj City Centre Gurugram",
    desc: "A classy urban hotel offering modern comfort.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244893543.jpg?k=307877119fd11d82699e0ffd69a1981cddc12934e7547d82e7321925e0b6affe&o=",
  },
],
"Maharashtra": [
  {
    name: "The Taj Mahal Palace Mumbai",
    desc: "Iconic luxury hotel overlooking the Gateway of India.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705059.jpg?k=9e078265b31ad1815a573da8ed2a665f863e3925e1efd730df703421868a2ada&o="
  },
  {
    name: "The Oberoi Mumbai",
    desc: "A luxurious oceanfront hotel located in Marine Drive.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759044.jpg?k=4a3e476214895d86a0e71808d9eb5b85acaebe0cbff06bbd2ecdbb3054d98600&o="
  },
  {
    name: "JW Marriott Mumbai Juhu",
    desc: "Premium beachfront property popular among tourists.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=500&h=400&s=1"
  },
  {
    name: "Hilton Shillim Estate Retreat & Spa",
    desc: "A peaceful wellness retreat in the Sahyadris.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/99/e6/df/hilton-shillim-estate.jpg?w=1200&h=-1&s=1"
  },
  {
    name: "The Westin Pune Koregaon Park",
    desc: "Stylish 5-star hotel offering modern luxury.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538764360.jpg?k=8cc92dbf1d30f48bd19b6a935d4a41dd675ca5ecbf09633c216dfdd7098fcc10&o="
  }
],
"Rajasthan": [
  {
    name: "The Oberoi Udaivilas Udaipur",
    desc: "Magnificent palace hotel on the banks of Lake Pichola.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/31/80/70/6a/premier-rooms-with-semi.jpg"
  },
  {
    name: "Taj Lake Palace Udaipur",
    desc: "Stunning floating palace in the middle of Lake Pichola.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/713031969.jpg?k=35bce585ebe5cff87dca1db2ec83ad536e258322179ecb3311551734bde042f3&o="
  },
  {
    name: "Rambagh Palace Jaipur",
    desc: "Former royal residence offering grand luxury.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ec/03/e0/facade-of-rambagh-palace.jpg?w=900&h=500&s=1"
  },
  {
    name: "Umaid Bhawan Palace Jodhpur",
    desc: "Historic palace hotel set atop Chittar Hill.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/1996_-218-20A_Jodhpur_Hotel_Umaid_Bhawan_Palace_%282233393509%29.jpg"
  },
  {
    name: "Suryagarh Jaisalmer",
    desc: "Luxury fortress-style hotel in the Thar Desert.",
    img: "https://gos3.ibcdn.com/d12cb53ef50711e78d7d02f70f7f94f0.jpg"
  }
],
"Madhya Pradesh": [
  {
    name: "Jehan Numa Palace Bhopal",
    desc: "Beautiful heritage hotel with colonial charm.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4e/33/7f/jehan-numa-palace-hotel.jpg?w=900&h=-1&s=1"
  },
  {
    name: "Taj Usha Kiran Palace Gwalior",
    desc: "Historic palace turned luxury hotel.",
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/hotelier-images/66/81/f2b2a24e14d7f9dfc768813897f90ed505480dccb42d816a6d9d743bd0b2.jpeg"
  },
  {
    name: "Marriott Indore",
    desc: "Premium 5-star hotel offering modern comforts.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e3/35/90/indore-marriott-hotel.jpg?w=900&h=500&s=1"
  },
  {
    name: "The Lalit Temple View Khajuraho",
    desc: "Luxury stay with views of the Khajuraho temples.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/53/9f/85/the-lalit-temple-view.jpg?w=900&h=-1&s=1"
  },
  {
    name: "Kanha Earth Lodge",
    desc: "Nature-inspired jungle lodge near Kanha National Park.",
    img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201201131102236695-7af1589b-dd8c-46f9-a9c5-e500ba1e0bd9.jpg"
  }
],
"Himachal Pradesh": [
  {
    name: "Wildflower Hall, Shimla",
    desc: "Oberoi’s iconic mountain luxury resort.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/80/73/25/wildflower-hall-exterior.jpg?w=500&h=-1&s=1"
  },
  {
    name: "The Himalayan, Manali",
    desc: "Castle-style boutique luxury stay in Manali.",
    img: "https://api.blessingsonthenet.com/uploads/hotels/a331ced4f895d976a89fcd325dc5fb57-1690259291940-The%20Himalayan%20Resort%20and%20Spa%20Manali_3.jpg"
  },
  {
    name: "Amoeba Resort Dharamshala",
    desc: "Scenic premium resort with valley views.",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/600945764.jpg?k=c241aae8c2047e232758cb698ed09f299c8cb60921e39a0997cefff3a879be14&o="
  },
  {
    name: "The Oberoi Cecil, Shimla",
    desc: "British-era luxury heritage hotel.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/2c/26/7b/ce/caption.jpg"
  },
  {
    name: "Hyatt Regency Dharamshala",
    desc: "Hill-view luxury hotel surrounded by cedar forests.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/05/c1/c4/hyatt-regency-dharamshala.jpg?w=900&h=500&s=1"
  }
],
"Jharkhand": [
  {
    name: "Radisson Blu Ranchi",
    desc: "Top luxury hotel in the city with premium amenities.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/c9/d2/ce/exterior-view.jpg?w=900&h=500&s=1"
  },
  {
    name: "The Chanakya BNR Hotel",
    desc: "Heritage hotel known for its colonial architecture.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/2d/16/d2/12/caption.jpg"
  },
  {
    name: "Le Lac Sarovar Portico",
    desc: "Popular lakeside luxury stay in Ranchi.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260895896.jpg?k=e5ae0800117f382569e38619ba5ace5a9d9593f81c52f2a5806fe456aa46c9e6&o="
  },
  {
    name: "Capitol Hill",
    desc: "Premium business hotel in Ranchi with modern interiors.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/85/91/32/capital-building.jpg?w=900&h=500&s=1"
  },
  {
    name: "Hotel Jiva, Jamshedpur",
    desc: "Premium boutique-style luxury stay.",
    img: "https://content.r9cdn.net/rimg/himg/69/2b/93/expedia_group-748283-99935085-155185.jpg?width=500&height=350&xhint=540&yhint=333&crop=true"
  }
],
"Karnataka": [
  {
    name: "The Leela Palace Bengaluru",
    desc: "Palace-style ultra luxury hotel in Bangalore.",
    img: "https://www.theleela.com/prod/content/assets/2025-04/Intro_1035x600.webp?VersionId=nswIVLxsjSDa7CHipN18s_q4485NIOvh"
  },
  {
    name: "Taj Madikeri Resort & Spa, Coorg",
    desc: "Luxury resort in the hills of Coorg.",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/251734433.jpg?k=9abfa26b3bb8509610cc0021a2d4d028e423339dc8565b3314730f48bc8709b6&o="
  },
  {
    name: "Evolve Back, Hampi",
    desc: "Heritage luxury resort inspired by Vijayanagara architecture.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96973001.jpg?k=2f1f3542c42927b8d861bcf88ae7969f6ecb90cdf7200b264841d085337a3758&o="
  },
  {
    name: "The Ritz-Carlton Bengaluru",
    desc: "Iconic 5-star hotel in the centre of the city.",
    img: "https://cache.marriott.com/is/image/marriotts7prod/rcbanga_00013:Classic-Hor?wid=1300&fit=constrain"
  },
  {
    name: "Grand Mercure Mysore",
    desc: "Premium luxury hotel near Mysore Palace.",
    img: "https://www.ahstatic.com/photos/9306_ho_00_p_1024x768.jpg"
  }
],
"Odisha": [
  {
    name: "Mayfair Lagoon, Bhubaneswar",
    desc: "Luxury resort with serene lake views in Bhubaneswar.",
    img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_111,w_2756,h_1550,r_0/q_80,w_900,h_506,dpr_1,f_auto,fl_progressive,c_limit/mayfair-lagoon-bhubaneswar/P_RPX2944_e1r0ny"
  },
  {
    name: "Swosti Premium, Bhubaneswar",
    desc: "Modern 5-star hotel in the heart of the city.",
    img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_599,h_337,r_0/q_80,w_900,h_506,dpr_1,f_auto,fl_progressive,c_limit/swosti-revamp-premium-bhubaneswar/bhubaneshwar_socsrr"
  },
  {
    name: "Trident, Bhubaneswar",
    desc: "Elegant hotel with premium amenities and dining.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/02/27/a0/trident-bhubaneswar.jpg?w=900&h=-1&s=1"
  },
  {
  name: "Hotel Pal Heights, Bhubaneswar",
  desc: "A stylish upscale hotel offering modern rooms and great dining options.",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/751511391.jpg?k=68ade2f6db05e548cf4f52a79c1e23c642a67bac328ab15ec0b9c2c35578d28c&o="
},
{
  name: "Welcomhotel by ITC, Bhubaneswar",
  desc: "Premium 5-star hotel with elegant interiors and top-class hospitality.",
  img: "https://media-cdn.tripadvisor.com/media/photo-s/1f/c8/68/77/facade.jpg"
}

],

"Punjab": [
  {
    name: "Taj Chandigarh",
    desc: "Luxury hotel with contemporary architecture in Chandigarh.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17170908.jpg?k=893c2a8dfe5928fbd95112f00428b1d5608c5d78d0466ff9ffa7247b5d1becc4&o="
  },
  {
    name: "JW Marriott, Chandigarh",
    desc: "Premium 5-star hotel with modern amenities.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/434764471.jpg?k=626211cb4c828bc52dae104f7940f269226786f1b97fd016474cd477bde37938&o="
  },
  {
    name: "Radisson Blu, Amritsar",
    desc: "Elegant hotel close to the Golden Temple.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d2QKNFtIiIv5lOuuUX8_fuEHyCOQR1bhnA&s"
  },
  {
  name: "Hyatt Regency, Ludhiana",
  desc: "Upscale business hotel with stylish rooms and top-notch dining.",
  img: "https://r1imghtlak.mmtcdn.com/91108bf0079311ebbea30242ac110002.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,20&output-format=jpg&downsize=480:336&crop=480:336"
},
{
  name: "Ramada by Wyndham, Amritsar",
  desc: "Popular hotel near the Golden Temple with great comfort and service.",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/181941240.jpg?k=3949df3257ba1b4b7edd53392c056b6f1be4b190a97a1f7814120093e7066b42&o="
}

],

"Kerala": [
  {
    name: "Taj Malabar Resort & Spa, Kochi",
    desc: "Luxury waterfront resort with spa facilities.",
    img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200706181322512338-8d56e4c8-d850-4d32-86da-df5ea92b42e2.jpg"
  },
  {
    name: "Leela Kovalam",
    desc: "Iconic cliff-top beach resort in Kovalam.",
    img: "https://d19lgisewk9l6l.cloudfront.net/assetbank/dinining_by_pool_side_The_Leela_Kovalam_5655.jpg"
  },
  {
    name: "Vismaya River Retreat, Alleppey",
    desc: "Peaceful resort on the backwaters with houseboat experience.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsd_JXoR1FfWsiPmq9FpOC9_OcWjRizWXSIw&s"
  },
  {
  name: "Kumarakom Lake Resort, Kottayam",
  desc: "Luxury backwater resort known for traditional Kerala architecture.",
  img: "https://www.greavesindia.co.uk/wp-content/uploads/2016/10/Kumarakom-Lake-Resort.jpg"
},
{
  name: "The Zuri Kumarakom Kerala Resort & Spa",
  desc: "Premium lakeside resort offering scenic views and world-class spa.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/38/f0/cf/the-zuri-kumarakom.jpg?w=900&h=500&s=1"
}
],

"West Bengal": [
  {
    name: "The Oberoi Grand, Kolkata",
    desc: "Historic 5-star hotel in the heart of Kolkata.",
    img: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/200701171150375566-ecf173de210411e49e1c36cfdd80c293.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=webp"
  },
  {
    name: "ITC Sonar, Kolkata",
    desc: "Luxury hotel with garden views and premium amenities.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/24/4a/c9/itc-sonar.jpg?w=900&h=500&s=1"
  },
  {
    name: "Novotel, Kolkata",
    desc: "Modern hotel with city skyline views.",
    img: "https://www.ahstatic.com/photos/6937_ho_00_p_1024x768.jpg"
  },
  {
  name: "Taj Bengal, Kolkata",
  desc: "Elegant luxury hotel known for its classic architecture and premium service.",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/176691961.jpg?k=e6064056c7df89f677f56492796e3b0a6623eb8bbb0a70e821f67316de6ff214&o="
},
{
  name: "Raajkutir, Kolkata – IHCL SeleQtions",
  desc: "Boutique heritage-style hotel inspired by Bengal’s cultural legacy.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/5e/9a/rangmanch.jpg?w=700&h=-1&s=1"
}

],

"Uttar Pradesh": [
  {
    name: "Taj Mahal Hotel, Agra",
    desc: "Luxury hotel near the Taj Mahal with premium facilities.",
    img: "https://r1imghtlak.mmtcdn.com/acb994ab-491e-4fa5-ae16-83ea40092171.jpg"
  },
  {
    name: "ITC Mughal, Agra",
    desc: "Elegant hotel blending luxury and Mughal heritage.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/24/3d/7a/itc-mughal-agra.jpg?w=900&h=500&s=1"
  },
  {
    name: "Radisson Blu, Lucknow",
    desc: "Modern hotel with comfort and convenience in Lucknow.",
    img: "https://radissonhotels.iceportal.com/image/park-inn-by-radisson-lucknow-vikas-nagar/exterior/16256-182356-f86620755_3XL.jpg"
  },
  {
  name: "The Oberoi Amarvilas, Agra",
  desc: "Ultra-luxury hotel offering direct views of the Taj Mahal.",
  img: "https://hblimg.mmtcdn.com/content/hubble/img/activity-img/mmt/activities/m_oberoi_amarvilas_dine_under_the_stars_1_l_1117_1678.jpg"
},
{
  name: "Taj Hotel & Convention Centre, Agra",
  desc: "Contemporary 5-star hotel with rooftop Taj Mahal views.",
  img: "https://r1imghtlak.mmtcdn.com/acb994ab-491e-4fa5-ae16-83ea40092171.jpg"
}

],

"Uttarakhand": [
  {
    name: "JW Marriott, Mussoorie",
    desc: "Luxury hill resort with stunning views of the mountains.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/3d/ef/50/jw-marriott-mussoorie.jpg?w=900&h=500&s=1"
  },
  {
    name: "The Naini Retreat, Nainital",
    desc: "Elegant resort overlooking the Naini Lake.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f9/c0/24/facade.jpg?w=700&h=-1&s=1"
  },
  {
    name: "Aalia Resort, Rishikesh",
    desc: "Luxury riverside resort with yoga and wellness amenities.",
    img: "https://www.swantour.com/sites/default/files/node_import_images/aalia-resort-rishikesh-6_0.jpg"
  },
  {
  name: "The Roseate Ganges, Rishikesh",
  desc: "Luxury boutique resort on the banks of the Ganges with serene views.",
  img: "https://gos3.ibcdn.com/6d41568620b811ea9ff60242ac110004.jpg"
},
{
  name: "Ananda in the Himalayas, Rishikesh",
  desc: "World-renowned wellness retreat offering yoga, spa, and holistic healing.",
  img: "https://scdn.aro.ie/Sites/50/anandaspa/uploads/images/default.jpg"
}

],

"Tripura": [
  {
    name: "Hotel Tripura Castle, Agartala",
    desc: "Premium hotel in Agartala with modern amenities.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/db/be/09/the-forest-view-building.jpg?w=900&h=500&s=1"
  },
  {
    name: "Hotel Sonar Bangla, Agartala",
    desc: "Comfortable stay with traditional hospitality.",
    img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201506171826202460-81a91652f6c311ecb8de0a58a9feac02.jpg"
  },
  {
  name: "Ginger Hotel, Agartala",
  desc: "Modern budget-friendly hotel offering comfort and convenience.",
  img: "https://gos3.ibcdn.com/5c7c0a3e-2a48-44b3-aa01-2fac4387e00d.jpg"
},
{
  name: "The Parkline, Agartala",
  desc: "Contemporary hotel with clean rooms and essential amenities.",
  img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202103121016082829-e62a6764a11711eb8d620242ac110002.jpg"
},
{
  name: "Hotel Polo Towers, Agartala",
  desc: "Popular upscale hotel with premium facilities and great service.",
  img: "https://cdn0.weddingwire.in/vendor/7992/3_2/960/jpg/47_15_367992-162156639711592.jpeg"
}

],

"Sikkim": [
  {
    name: "The Elgin Nor-Khill, Gangtok",
    desc: "Heritage luxury hotel in the hills of Gangtok.",
    img: "https://api.blessingsonthenet.com/uploads/hotels/239a438eb076cf52bfe47f1148925c08-1692159118571-Hotel%20Elgin%20Nor%20Khill%20Gangtok.jpg"
  },
  {
    name: "Mayfair Spa Resort & Casino, Gangtok",
    desc: "Luxury resort with wellness and leisure facilities.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0a/e1/af/caption.jpg?w=900&h=500&s=1"
  },
  {
  name: "Summit Norling Resort & Spa, Gangtok",
  desc: "Peaceful resort surrounded by lush greenery with modern comforts.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/fd/4e/ed/caption.jpg?w=900&h=-1&s=1"
},
{
  name: "The Royal Plaza, Gangtok",
  desc: "Elegant hotel offering scenic mountain views and premium amenities.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/5c/b5/7e/the-royal-plaza.jpg?w=900&h=500&s=1"
},
{
  name: "Lachung Continental, Lachung",
  desc: "Comfortable hotel near Yumthang Valley, ideal for mountain stays.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7fzZ8HynDlrqMTAPtpzrGUkycnjt19FKBQ&s"
}

],

"Meghalaya": [
  {
    name: "Hotel Polo Towers, Shillong",
    desc: "Modern hotel in the heart of Shillong.",
    img: "https://assets.simplotel.com/simplotel/image/upload/x_366,y_0,w_2868,h_2151,r_0,c_crop,q_80,fl_progressive/w_1350,f_auto,c_fit/hotel-polo-towers-shillong/Exterior_view_of_our_hotel_in_Shillong,_Hotel_Polo_Towers,_Shillong-_23"
  },
  {
    name: "Ri Kynjai, Shillong",
    desc: "Serene resort overlooking Umiam Lake.",
    img: "https://static.wixstatic.com/media/27d9fc_6a5c9b8bffe84016b2c8b5f59092df6a~mv2.jpg/v1/fill/w_853,h_640,q_90,enc_avif,quality_auto/27d9fc_6a5c9b8bffe84016b2c8b5f59092df6a~mv2.jpg"
  },
  {
  name: "Cafe Shillong Bed & Breakfast",
  desc: "Cozy boutique stay with homely ambience and great food.",
  img: "https://pix10.agoda.net/hotelImages/446772/0/1fa83cb22d30f0e8a4a8c7cff979da87.jpeg?ce=0&s=414x232"
},
{
  name: "The Loft, Shillong",
  desc: "Contemporary boutique hotel offering comfort and style.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLr3qzrK85YM5mmRyRumKA27iIA5n2F3I105VwbNJW8zy3E2i2WDzkhYrBmiSWbIcW2T0&usqp=CAU"
},
{
  name: "Jiva Resort, Sohra (Cherrapunji)",
  desc: "Scenic resort located amidst the misty hills of Cherrapunji.",
  img: "https://juggler.makemytrip.com/juggler/stream/key/platform-ugc-01JZTCX4HZ3B5Y85QVD5WSK1V1/01JZTCX4HZ3B5Y85QVD5WSK1V1.jpg"
}

],

"Manipur": [
  {
    name: "Hotel Classic Grande, Imphal",
    desc: "Comfortable hotel with modern amenities in Imphal.",
    img: "https://images.trvl-media.com/lodging/66000000/65260000/65254600/65254503/ad4a40c4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
  },
  {
    name: "Aurora Boutique Hotel, Imphal",
    desc: "Premium stay with excellent hospitality.",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/411475370.jpg?k=fdc12590af848bcbdd6fb40af24406f4479c656aa0bc7d66ea396ff09e1a5d6d&o="
  },
  {
  name: "The Sangai Continental, Imphal",
  desc: "Modern boutique hotel offering comfort and quality service.",
  img: "https://gos3.ibcdn.com/c5c984086b7111e79bd10a9df65c8753.jpg"
},
{
  name: "The Accord Hotel, Imphal",
  desc: "Clean and comfortable hotel with modern rooms and friendly service.",
  img: "https://images.getaroom-cdn.com/image/upload/s--ETFb3Wq6--/c_limit,e_improve,fl_lossy.immutable_cache,h_460,q_auto:good,w_460/v1704373649/4b5dca7a09705eaf95120d5ae94eed901f3819c8?_a=BACAEuDL&atc=e7cd1cfa"
},

{
  name: "Imphal Hotel, Imphal",
  desc: "Popular stay offering a blend of comfort and traditional hospitality.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/8d/c5/50/hotel-imphal-front-view.jpg?w=900&h=500&s=1"
}

],

"Mizoram": [
  {
    name: "Hotel Regency, Aizawl",
    desc: "Comfortable stay in the capital city with modern facilities.",
    img: "https://rukmini-ct.flixcart.com/w_2048,f_auto,q_auto/ct-hotel-images/places/hotels/cms/7111/711122/images/99a346f5cd0cf9e5e1652fc74bc8303e.jpg"
  },
  {
    name: "Hotel Vantawng, Aizawl",
    desc: "Modern hotel with great local hospitality.",
    img: "https://content.jdmagicbox.com/v2/comp/serchhip/y4/9999px389.x389.230202000959.n2y4/catalogue/vantawng-hotel-cum-restaurant-thenzawl-serchhip-restaurants-cywoaq775b.jpg"
  },
  {
  name: "Hotel Chief, Aizawl",
  desc: "Well-known hotel offering comfortable rooms and city views.",
  img: "https://content.jdmagicbox.com/comp/aizawl/v7/9999px389.x389.140118185711.a5v7/catalogue/hotel-chief-aizawl-h-o-aizawl-hotels-48krgxo5ik-250.jpg"
},
{
  name: "Tourist Lodge, Chaltlang",
  desc: "Government-run lodge providing a peaceful and budget-friendly stay.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/08/48/3b/chaltalang-tourist-lodge.jpg?w=900&h=-1&s=1"
},
{
  name: "Hotel Floria, Aizawl",
  desc: "Popular hotel with clean rooms and warm hospitality.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/a5/83/frontage.jpg?w=900&h=-1&s=1"
}

],

"Nagaland": [
  {
    name: "Hotel Japfü, Kohima",
    desc: "Premium hotel in Kohima offering comfort and convenience.",
    img: "https://superbcollections.com/wp-content/uploads/2023/09/hotel-japhu-kohima.webp"
  },
  {
    name: "Hotel Keny, Dimapur",
    desc: "Well-maintained hotel with modern amenities.",
    img: "https://content3.jdmagicbox.com/v2/comp/dimapur/l7/9999p3862.3862.140402141531.c1l7/catalogue/hotel-kent-dimapur-bazar-dimapur-3-star-hotels-Jqk2RLMLkb.jpg"
  },
  {
  name: "De Oriental Grand, Kohima",
  desc: "Upscale hotel with spacious rooms and scenic views of Kohima.",
  img: "https://r1imghtlak.mmtcdn.com/772f377241da11eca6d50a58a9feac02.jpg"
},
{
  name: "Niathu Resort, Dimapur",
  desc: "Premium resort offering lush surroundings, comfort, and great hospitality.",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/9f/ca/0f/niathu-resort.jpg?w=900&h=500&s=1"
},
{
  name: "Villa Shalom, Kohima",
  desc: "Cozy boutique stay known for its peaceful ambience and warm service.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsARexVE9uYRUBuKWx7_Yr7o-zGoRDqSu8g&s"
}

],

"Telangana": [
  {
    name: "Taj Falaknuma Palace, Hyderabad",
    desc: "Historic palace converted into a luxury hotel.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181467.jpg?k=73b25a9cb3b5e18877cf578c8d146a1ba4ff213a6bf3801f4480a0337bac1b1f&o="
  },
  {
    name: "ITC Kakatiya, Hyderabad",
    desc: "Modern luxury hotel with premium facilities.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628229562.jpg?k=484b554574eb9ed0b6dacd97668c906addcb53d1814c1319175dec32d52cf0d0&o="
  },
  {
    name: "Trident, Hyderabad",
    desc: "Contemporary hotel with riverside views and excellent services.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d7/8c/40/infinity-edge-poolside.jpg?w=900&h=-1&s=1"
  },
  {
  name: "Park Hyatt, Hyderabad",
  desc: "Premium 5-star luxury hotel known for its elegant design and fine dining.",
  img: "https://res.cloudinary.com/wejgrnjqf/image/upload/c_limit,w_3840/f_auto/q_auto/v1/b54d81ed-9277-4ecb-a133-8abcdcfd5826?_a=BAVAZGGf0"
},
{
  name: "The Westin, Hyderabad Mindspace",
  desc: "Upscale business hotel offering comfort, wellness, and modern facilities.",
  img: "https://r1imghtlak.mmtcdn.com/634eca52fe0211e8ba570242ac110002.jpg"
}

]
};
const allHotels = Object.values(hotelData).flat();

// ------------------------
// SEARCH FUNCTIONALITY
// ------------------------
const [searchText, setSearchText] = useState("");
const [suggestions, setSuggestions] = useState([]);

const handleSearch = (value) => {
  setSearchText(value);

  if (value.trim() === "") {
    setSuggestions([]);
    return;
  }

  // Filter hotels
  const filteredHotels = allHotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(value.toLowerCase())
  );

  // Filter states
  const filteredStates = Object.keys(hotelData).filter((state) =>
    state.toLowerCase().includes(value.toLowerCase())
  );

  // Combine both (states first)
  const combined = [
    ...filteredStates.map((state) => ({ type: "state", name: state })),
    ...filteredHotels.map((hotel) => ({ type: "hotel", ...hotel })),
  ];

  setSuggestions(combined.slice(0, 8)); // max 8 suggestions
};
  return (
  <div className="hotels-container">

    {/* ------------------------
        SEARCH BAR
    ------------------------- */}
    <div className="hotel-search-bar">
      <input
        type="text"
        placeholder="Search states or hotels..."
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="suggestions-box">

          {suggestions.map((item, index) => (
            <div className="suggestion-item" key={index}>

              {/* STATE SUGGESTION */}
              {item.type === "state" && (
                <div className="state-suggestion">
                  <strong>State:</strong> {item.name}
                </div>
              )}

              {/* HOTEL SUGGESTION */}
              {item.type === "hotel" && (
                <>
                  <img src={item.img} alt="" />
                  <div>
                    <p className="s-name">{item.name}</p>
                    <p className="s-desc">{item.desc}</p>
                  </div>
                </>
              )}

            </div>
          ))}

        </div>
      )}
    </div>

      {/* ------------------------
          HEADING
      ------------------------- */}
      <h2 className="hotel-title">Explore Hotels by State</h2>

      {/* ------------------------
          HOTELS BY STATE
      ------------------------- */}
      {Object.keys(hotelData).map((state) => (
        <div key={state}>
          <h3 className="state-buttons"><button><center>{state}</center></button></h3>

          <div className="hotel-grid">
            {hotelData[state].map((hotel, index) => (
              <div className="card" key={index}>
                <img src={hotel.img} alt="" className="hotel-img" />
                <h4>{hotel.name}</h4>
                <p>{hotel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;