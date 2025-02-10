const sampleListings =[
    {
      title: "Seaside Resort",
      description: "A luxurious beachfront resort with stunning ocean views, a spa, and fine dining options.",
      price: 2500,
      image:{filename:"listingimage",url:"https://media.istockphoto.com/id/1453463109/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=yKmvn-I941PPBLz2HUKYFgC4TDlGFazX07WZDpedTXo="},
      location: "Malibu, California",
      country: "United States"
    },
    {
      title: "Mountain Lodge",
      description: "A cozy lodge nestled in the mountains, offering hiking trails and a warm fireplace.",
      price: 1800,
      image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1544646280-e243b3ab7d1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBsb2RnZXxlbnwwfHwwfHx8MA%3D%3D"},
      location: "Aspen, Colorado",
      country: "United States"
    },
    {
      title: "City Heights Hotel",
      description: "A modern hotel located in the heart of the city with easy access to shopping and nightlife.",
      price: 1200,
      image:{filename:"listingimage",url:"https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGhlaWdodHMlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D"
      },
      location: "Downtown, Toronto",
      country: "Canada"
    },
    {
      title: "Palace of Dreams",
      description: "An opulent palace with historical architecture and a world-class restaurant.",
      price: 5000,
      image:{filename:"listingimage",url: "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzY3IlMjJBbiUyMG9wdWxlbnQlMjBwYWxhY2UlMjB3aXRoJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMGFuZCUyMGElMjB3b3JsZCUyMGNsYXNzJTIwcmVzdGF1cmFudC4lMjIlMkN8ZW58MHx8MHx8fDA%3D"
      },
      location: "Paris, Île-de-France",
      country: "France"
    },
    {
      title: "Tropical Escape Resort",
      description: "A luxury resort surrounded by tropical forests, perfect for relaxation and adventure.",
      price: 3200,
      image:{filename:"listingimage",url:      "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QSUyMGx1eHVyeSUyMHJlc29ydCUyMHN1cnJvdW5kZWQlMjBieSUyMHRyb3BpY2FsJTIwZm9yZXN0c3xlbnwwfHwwfHx8MA%3D%3D"
      },
      location: "Bali, Ubud",
      country: "Indonesia"
    },
    {
      title: "Skyline Towers Hotel",
      description: "A high-rise hotel with panoramic views of the city skyline, featuring a rooftop bar.",
      price: 1500,
      image:{filename:"listingimage",url:      "https://media.istockphoto.com/id/1053011884/photo/couple-relaxing-on-hotel-rooftop-looking-at-barcelona-city-skyline-photo-composition.webp?a=1&b=1&s=612x612&w=0&k=20&c=CN4qJgdK9wYibHi2LbvvR-igzjEdYiGAn2hWbJkE3UU="
      },
      location: "Singapore",
      country: "Singapore"
    },
    {
      title: "Safari Lodge",
      description: "An all-inclusive lodge set in the heart of the African savanna, offering safari tours and luxury tents.",
      price: 4500,
      image:{filename:"listingimage",url:      "https://media.istockphoto.com/id/466572633/photo/mud-hut-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=nmRGqXtMuNXcaEFqFL86IWBogTrPjJGoa3QaNiWFw2Y="
      },
      location: "Serengeti National Park",
      country: "Tanzania"
    },
    {
      title: "Ivy Garden Inn",
      description: "A charming inn with lush gardens, ideal for a peaceful getaway in the countryside.",
      price: 9000,
      image:{filename:"listingimage",url:  "https://media.istockphoto.com/id/1426853219/photo/swiss-switzerland-ticino-canton-intragna-village-urban-costruzione-made-with-stone-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=VzDG9W51EOTeCgA6fUuVVFoF4O9-R76WwtGl-yuL14k="
      },
      location: "Oxford, Oxfordshire",
      country: "United Kingdom"
    },
    {
      title: "Luxury Beachfront Villa",
      description: "A private villa with a pool and direct beach access, offering exclusive services and privacy.",
      price: 12000,
      image:{filename:"listingimage",url:      "https://media.istockphoto.com/id/1398980165/photo/3d-rendering-of-modern-house-with-wood-plank-facade-by-the-sea-or-ocean.jpg?s=612x612&w=0&k=20&c=W_QCbVSNE968h_A1vf2rlYWvaq-rMqli4UbbklbFzHw="
      },
      location: "Phuket, Kata Beach",
      country: "Thailand"
    },
    {
      title: "Sahara Desert Camp",
      description: "An exclusive desert camp experience with luxury tents, camel rides, and stargazing in the Sahara.",
      price: 3500,
      image:{filename:"listingimage",url:      "https://media.istockphoto.com/id/1130912270/photo/nomadic-settlement-in-the-sahara-desert-near-morocco-north-africa.jpg?s=612x612&w=0&k=20&c=ldkzFhB74tIWLB1cRIlNNMHABHwph470XbWqelvw5SI="
      },
      location: "Merzouga, Sahara Desert",
      country: "Morocco"
    },
  ];

  module.exports= {data: sampleListings};