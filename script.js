function showCityInfo() {
    const citySelector = document.getElementById("city-selector");
    const cityInfo = document.getElementById("city-info");
    const daysElement = document.querySelector(".days");
    const attractionsList = document.querySelector(".attractions-list");
    const selectedCity = citySelector.value;
    const cities = {
        paris: {
            days: "5-7 days",
            description: "Paris, the City of Light, offers a perfect blend of history, art, and romance with iconic landmarks.",
            attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Seine River Walk", "Montmartre & Sacré-Cœur"],
        },
        london: {
            days: "5-7 days",
            description: "London combines rich history with modern vibrancy, from royal palaces to bustling markets.",
            attractions: ["Big Ben & Parliament", "British Museum", "Tower of London", "Buckingham Palace", "Camden Market"],
        },
        bangkok: {
            days: "4-6 days",
            description: "Bangkok is a vibrant city known for its stunning temples, bustling markets, and lively nightlife.",
            attractions: ["Grand Palace", "Wat Arun (Temple of Dawn)", "Chatuchak Market", "Khao San Road", "Chao Phraya River Boat Tour"],
        },
        "new-york": {
            days: "5-7 days",
            description: "New York City, the Big Apple, is a bustling metropolis with iconic landmarks and endless energy.",
            attractions: ["Statue of Liberty", "Times Square", "Central Park", "Empire State Building", "Metropolitan Museum of Art (MET)"],
        },
        tokyo: {
            days: "7-10 days",
            description: "Tokyo blends ultramodern skyscrapers with traditional temples, offering a unique cultural experience.",
            attractions: ["Shibuya Crossing", "Senso-ji Temple in Asakusa", "Tokyo Skytree", "Akihabara (Electronics District)", "Imperial Palace Gardens"],
        },
        dubai: {
            days: "4-6 days",
            description: "Dubai is a city of luxury and innovation, known for its towering skyscrapers and desert adventures.",
            attractions: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Burj Al Arab", "The Palm Jumeirah"],
        },
        istanbul: {
            days: "4-6 days",
            description: "Istanbul bridges Europe and Asia, offering a rich history with stunning architecture and markets.",
            attractions: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Topkapi Palace", "Bosphorus Cruise"],
        },
        singapore: {
            days: "3-5 days",
            description: "Singapore is a modern city-state with futuristic gardens, vibrant neighborhoods, and cultural diversity.",
            attractions: ["Marina Bay Sands", "Gardens by the Bay", "Merlion Park", "Chinatown", "Sentosa Island"],
        },
        rome: {
            days: "4-6 days",
            description: "Rome, the Eternal City, is a living museum with ancient ruins and Renaissance masterpieces.",
            attractions: ["Colosseum", "Roman Forum", "Pantheon", "Trevi Fountain", "Vatican City (St. Peter's Basilica)"],
        },
        barcelona: {
            days: "4-6 days",
            description: "Barcelona offers a mix of Gothic architecture, modernist landmarks, and sunny beaches.",
            attractions: ["Sagrada Familia", "Park Güell", "La Rambla", "Gothic Quarter", "Barceloneta Beach"],
        },
        sydney: {
            days: "5-7 days",
            description: "Sydney, Australia's iconic harbor city, is known for its stunning beaches, vibrant culture, and natural beauty.",
            attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach", "The Rocks", "Royal Botanic Garden"],
        },
        "cape-town": {
            days: "4-6 days",
            description: "Cape Town offers breathtaking landscapes, rich history, and vibrant culture at the tip of Africa.",
            attractions: ["Table Mountain", "Robben Island", "Cape of Good Hope", "V&A Waterfront", "Kirstenbosch Botanical Gardens"],
        },
        "rio-de-janeiro": {
            days: "4-6 days",
            description: "Rio de Janeiro is a vibrant city known for its carnival, stunning beaches, and dramatic landscapes.",
            attractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Ipanema Beach", "Tijuca National Park"],
        },
        kyoto: {
            days: "4-6 days",
            description: "Kyoto, Japan's cultural heart, is famous for its historic temples, serene gardens, and traditional tea houses.",
            attractions: ["Fushimi Inari Shrine", "Kinkaku-ji (Golden Pavilion)", "Arashiyama Bamboo Grove", "Gion District", "Kiyomizu-dera Temple"],
        },
        prague: {
            days: "3-5 days",
            description: "Prague, the City of a Hundred Spires, is a fairy-tale destination with medieval charm and stunning architecture.",
            attractions: ["Prague Castle", "Charles Bridge", "Old Town Square", "Astronomical Clock", "Vyšehrad"],
        },
    };
    if (selectedCity && cities[selectedCity]) {
        daysElement.textContent = cities[selectedCity].days;
        let descriptionElement = document.querySelector(".city-description");
        if (!descriptionElement) {
            descriptionElement = document.createElement("p");
            descriptionElement.classList.add("city-description");
            daysElement.insertAdjacentElement("afterend", descriptionElement);
        }
        descriptionElement.textContent = cities[selectedCity].description;
        attractionsList.innerHTML = "";
        cities[selectedCity].attractions.forEach((attraction) => {
            const li = document.createElement("li");
            li.textContent = attraction;
            attractionsList.appendChild(li);
        });
        cityInfo.classList.add("visible");
    } else {
        daysElement.textContent = "Select a city to explore";
        const descriptionElement = document.querySelector(".city-description");
        if (descriptionElement) {
            descriptionElement.textContent = "";
        }
        attractionsList.innerHTML = "";
        daysElement.classList.add("empty-state");
        cityInfo.classList.remove("visible");
    }
}