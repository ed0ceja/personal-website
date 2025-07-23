// Cache buster - Force browser to reload: v3.0 - FRESH!
console.log('🚀 Places.js loaded - Version 3.0 - SUPER FRESH! 🔥');

// Places page JavaScript with Eddy's actual travel locations

let map;
let markers = [];
let places = []; // Will be populated from Eddy's travel data

// Eddy's actual travel locations
const eddyPlaces = [
    // Birthplace - Special highlight
    {
        name: "Varadero, Cuba",
        description: "🏠 My birthplace - where it all began! Beautiful beaches and the place that shaped my early years.",
        lat: 23.1361,
        lng: -81.2471,
        date: "Birthplace",
        category: "Home",
        isSpecial: true
    },

    // Caribbean & Latin America
    {
        name: "Cancún, Mexico",
        description: "Amazing beaches, vibrant culture, and incredible Mayan history. A perfect blend of relaxation and adventure.",
        lat: 21.1619,
        lng: -86.8515,
        date: "Visited",
        category: "Beach"
    },
    {
        name: "Dominican Republic",
        description: "Beautiful Caribbean island with rich culture, stunning beaches, and warm hospitality.",
        lat: 18.4861,
        lng: -69.9312,
        date: "Visited",
        category: "Beach"
    },

    // United States - East Coast
    {
        name: "Miami, Florida",
        description: "Art Deco architecture, vibrant nightlife, and that perfect Miami beach vibe.",
        lat: 25.7617,
        lng: -80.1918,
        date: "Visited",
        category: "Urban"
    },
    {
        name: "Orlando, Florida",
        description: "Theme park capital of the world! Magic, thrills, and unforgettable experiences.",
        lat: 28.5383,
        lng: -81.3792,
        date: "Visited",
        category: "Entertainment"
    },
    {
        name: "Davidson, South Carolina",
        description: "Charming Southern town with beautiful architecture and friendly locals.",
        lat: 35.4993,
        lng: -80.8482,
        date: "Visited",
        category: "Culture"
    },
    {
        name: "New York City",
        description: "The city that never sleeps! Broadway, Central Park, and endless opportunities.",
        lat: 40.7128,
        lng: -74.0060,
        date: "Visited",
        category: "Urban"
    },

    // United States - Central & West
    {
        name: "Chicago, Illinois",
        description: "Incredible architecture, deep-dish pizza, and that beautiful lakefront skyline.",
        lat: 41.8781,
        lng: -87.6298,
        date: "Visited",
        category: "Urban"
    },
    {
        name: "Minneapolis, Minnesota",
        description: "Land of 10,000 lakes! Beautiful nature and friendly Midwest charm.",
        lat: 44.9778,
        lng: -93.2650,
        date: "Visited",
        category: "Nature"
    },
    {
        name: "Austin, Texas",
        description: "Keep Austin Weird! Live music capital with amazing food scene and vibrant culture.",
        lat: 30.2672,
        lng: -97.7431,
        date: "Visited",
        category: "Culture"
    },
    {
        name: "Los Angeles, California",
        description: "Hollywood, beaches, and endless sunshine. The entertainment capital of the world.",
        lat: 34.0522,
        lng: -118.2437,
        date: "Visited",
        category: "Urban"
    },

    // International
    {
        name: "Toronto, Canada",
        description: "Multicultural metropolis with incredible food, friendly people, and stunning waterfront.",
        lat: 43.6532,
        lng: -79.3832,
        date: "Visited",
        category: "Urban"
    },
    {
        name: "Amsterdam, Netherlands",
        description: "Canals, bikes, and incredible art! A city where history and modernity blend perfectly.",
        lat: 52.3676,
        lng: 4.9041,
        date: "Visited",
        category: "Culture"
    },
    {
        name: "Kuala Lumpur, Malaysia",
        description: "Petronas Towers, incredible street food, and a fascinating mix of cultures.",
        lat: 3.1390,
        lng: 101.6869,
        date: "Visited",
        category: "Culture"
    },
    {
        name: "Bangkok, Thailand",
        description: "Temple of the Emerald Buddha, floating markets, and the most amazing Thai cuisine.",
        lat: 13.7563,
        lng: 100.5018,
        date: "Visited",
        category: "Culture"
    },

    // Australia
    {
        name: "Sydney, Australia",
        description: "Iconic Opera House, Harbour Bridge, and stunning harbour views. A vibrant cosmopolitan city.",
        lat: -33.8688,
        lng: 151.2093,
        date: "Visited",
        category: "Urban"
    },
    {
        name: "Terrigal, Australia",
        description: "Beautiful coastal town on the Central Coast with pristine beaches and stunning ocean views.",
        lat: -33.4462,
        lng: 151.4441,
        date: "Visited",
        category: "Beach"
    }
];

// Demo data fallback (keeping for reference)
const demoPlaces = [
    {
        name: "Location A",
        description: "An amazing place full of culture and incredible experiences.",
        lat: 40.7128,
        lng: -74.0060,
        date: "2023",
        category: "Urban"
    },
    {
        name: "Location B",
        description: "Beautiful architecture and vibrant local life.",
        lat: 48.8566,
        lng: 2.3522,
        date: "2022",
        category: "Culture"
    },
    {
        name: "Location C",
        description: "A perfect blend of tradition and modernity.",
        lat: 35.6762,
        lng: 139.6503,
        date: "2023",
        category: "Culture"
    },
    {
        name: "Home Base",
        description: "Where the journey begins and where the heart is.",
        lat: 4.7110,
        lng: -74.0721,
        date: "Always",
        category: "Home"
    }
];

// Initialize map with Eddy's actual travel data (called by Google Maps API)
function initMapWithDemoData() {
    console.log('🌍 Google Maps API loaded - initializing with Eddy\'s travel locations');
    places = eddyPlaces; // Use Eddy's real places instead of demo data
    console.log('📍 Loading', places.length, 'places');
    initMap();
    updatePlaceCards(places); // Populate the places grid with all locations
    updateTravelStats(places.length); // Update travel statistics
    setupPlaceCardHandlers(); // Setup interaction handlers after map is ready
    console.log('✅ Map, places grid, and handlers initialized successfully!');
}

// Process Google Takeout location data
function processGoogleTakeoutData(jsonData) {
    const processedPlaces = [];
    console.log('Processing Google Takeout data. Top-level keys:', Object.keys(jsonData));

    // Try different possible data structures
    let locationHistory = [];

    // Format 1: Direct locations array
    if (jsonData.locations) {
        locationHistory = jsonData.locations;
        console.log('Found locations array with', locationHistory.length, 'items');
    }
    // Format 2: Timeline objects
    else if (jsonData.timelineObjects) {
        locationHistory = jsonData.timelineObjects;
        console.log('Found timelineObjects array with', locationHistory.length, 'items');
    }
    // Format 3: Semantic location history
    else if (jsonData.visits) {
        locationHistory = jsonData.visits;
        console.log('Found visits array with', locationHistory.length, 'items');
    }
    // Format 4: Just an array at the root
    else if (Array.isArray(jsonData)) {
        locationHistory = jsonData;
        console.log('Data is a direct array with', locationHistory.length, 'items');
    }
    // Format 5: Look for any array property
    else {
        for (const key of Object.keys(jsonData)) {
            if (Array.isArray(jsonData[key]) && jsonData[key].length > 0) {
                locationHistory = jsonData[key];
                console.log(`Found array data under key "${key}" with`, locationHistory.length, 'items');
                break;
            }
        }
    }

    if (locationHistory.length === 0) {
        console.log('No location data found in any expected format');
        return [];
    }

    console.log('Sample location item:', locationHistory[0]);

    // Process different formats of Google Takeout data
    locationHistory.forEach((item, index) => {
        if (index % Math.max(1, Math.floor(locationHistory.length / 50)) === 0) { // Sample data to get ~50 locations
            let location = item;
            let timestamp = null;
            let placeName = null;

            // Handle different JSON structures
            if (item.placeVisit) {
                location = item.placeVisit.location;
                timestamp = item.placeVisit.duration?.startTimestamp || item.placeVisit.startTimestamp;
                placeName = location.name;
            } else if (item.activitySegment) {
                location = item.activitySegment.startLocation || item.activitySegment.endLocation;
                timestamp = item.activitySegment.duration?.startTimestamp;
            } else if (item.visit) {
                location = item.visit.topCandidate?.placeLocation || item.visit.location;
                timestamp = item.visit.startTime;
                placeName = location.name;
            }

            // Handle direct location objects
            if (!location && item.latitudeE7) {
                location = item;
                timestamp = item.timestampMs || item.timestamp;
            }

            // Try to extract coordinates
            let lat = null, lng = null;

            if (location) {
                // E7 format (most common)
                if (location.latitudeE7 && location.longitudeE7) {
                    lat = location.latitudeE7 / 10000000;
                    lng = location.longitudeE7 / 10000000;
                }
                // Decimal format
                else if (location.latitude && location.longitude) {
                    lat = parseFloat(location.latitude);
                    lng = parseFloat(location.longitude);
                }
                // LatLng object
                else if (location.latLng) {
                    lat = location.latLng.latitude;
                    lng = location.latLng.longitude;
                }
            }

            if (lat && lng && Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
                // Get place name and details
                placeName = placeName || location.name || location.address || `Location ${processedPlaces.length + 1}`;
                timestamp = timestamp || item.timestampMs || item.timestamp || Date.now();

                // Convert timestamp if it's a string
                if (typeof timestamp === 'string') {
                    timestamp = new Date(timestamp).getTime();
                } else if (typeof timestamp === 'string' && timestamp.length > 10) {
                    // Might be in milliseconds as string
                    timestamp = parseInt(timestamp);
                } else if (typeof timestamp === 'number' && timestamp.toString().length === 10) {
                    // Convert seconds to milliseconds
                    timestamp = timestamp * 1000;
                }

                const date = new Date(timestamp).getFullYear().toString();

                processedPlaces.push({
                    name: placeName,
                    description: `Visited on ${new Date(timestamp).toLocaleDateString()}`,
                    lat: lat,
                    lng: lng,
                    date: date,
                    category: 'Travel'
                });

                if (processedPlaces.length === 1) {
                    console.log('First processed location:', processedPlaces[0]);
                }
            }
        }
    });

    console.log(`Processed ${processedPlaces.length} valid locations from ${locationHistory.length} total items`);
    return processedPlaces.slice(0, 50); // Limit to 50 locations
}

// Handle file upload
function handleFileUpload(event) {
    console.log('🚨 UPLOAD FUNCTION CALLED!');

    const file = event.target.files[0];
    if (!file) {
        console.log('❌ No file selected');
        return;
    }

    console.log('📂 File selected:', file.name, 'Size:', file.size, 'Type:', file.type);

    // Show immediate feedback
    alert(`File selected: ${file.name} (${file.size} bytes)`);

    const statusDiv = document.getElementById('uploadStatus');
    if (!statusDiv) {
        console.error('❌ uploadStatus div not found!');
        return;
    }

    statusDiv.innerHTML = '📊 Processing your location data...';
    statusDiv.className = 'upload-status loading';

    const reader = new FileReader();
    reader.onload = function (e) {
        console.log('📄 FileReader onload triggered');
        try {
            console.log('📄 File read successfully, parsing JSON...');
            const jsonData = JSON.parse(e.target.result);

            // COMPREHENSIVE FILE ANALYSIS
            console.log('🔍 === FILE ANALYSIS ===');
            console.log('📋 File name:', file.name);
            console.log('📏 File size:', file.size, 'bytes');
            console.log('🗂️ JSON structure - Top level keys:', Object.keys(jsonData));
            console.log('📊 Full data preview:', jsonData);

            // Check for different possible location data formats
            const possibleLocationFields = [
                'locations', 'timelineObjects', 'activities', 'placeVisits',
                'records', 'timeline', 'semanticLocationHistory', 'data', 'reviews'
            ];

            console.log('🔍 Checking for location data fields...');
            possibleLocationFields.forEach(field => {
                if (jsonData[field]) {
                    console.log(`✅ Found field '${field}':`, Array.isArray(jsonData[field]) ? `Array with ${jsonData[field].length} items` : typeof jsonData[field]);
                    if (Array.isArray(jsonData[field]) && jsonData[field].length > 0) {
                        console.log(`📋 Sample item from '${field}':`, jsonData[field][0]);
                    }
                } else {
                    console.log(`❌ Field '${field}' not found`);
                }
            });

            // Check if this is a settings file
            if (file.name.toLowerCase().includes('settings') || file.name.toLowerCase().includes('setting')) {
                console.log('⚠️ WARNING: This appears to be a settings file, not location data!');
                statusDiv.innerHTML = `⚠️ This appears to be a settings file, not location data. <br>
                    <strong>Look for these files instead:</strong><br>
                    • Records.json<br>
                    • semantic_location_history/2024_JANUARY.json<br>
                    • timeline_edits.json`;
                statusDiv.className = 'upload-status error';
                return;
            }

            const newPlaces = processGoogleTakeoutData(jsonData);
            console.log('📍 Processed places:', newPlaces.length, newPlaces);

            if (newPlaces.length > 0) {
                places = newPlaces;

                // Update place cards
                updatePlaceCards(places.slice(0, 4)); // Show first 4 in cards

                // Reinitialize map with new data
                initMap();

                // Update stats
                updateTravelStats(places.length);

                statusDiv.innerHTML = `✅ Successfully loaded ${places.length} locations from your history!`;
                statusDiv.className = 'upload-status success';

                console.log('✅ Successfully processed and displayed locations');
            } else {
                console.log('❌ No valid locations found in the data');
                console.log('🔍 This might be because:');
                console.log('  - The file contains settings, not location data');
                console.log('  - The file format is different than expected');
                console.log('  - The location data is in a different field');

                // Show more helpful error message
                statusDiv.innerHTML = `❌ No location data found in this file.<br>
                    <strong>Try uploading:</strong><br>
                    • Records.json<br>
                    • Files from semantic_location_history/ folder<br>
                    • Check the console for more details`;
                statusDiv.className = 'upload-status error';
            }

        } catch (error) {
            console.error('❌ Error parsing location data:', error);
            console.log('📄 File content preview (first 500 chars):', e.target.result.substring(0, 500) + '...');
            statusDiv.innerHTML = `❌ Error reading file: ${error.message}<br>
                Please make sure you uploaded a valid JSON file from Google Takeout.`;
            statusDiv.className = 'upload-status error';
        }
    };

    reader.onerror = function (error) {
        console.error('❌ FileReader error:', error);
    };

    console.log('📖 Starting to read file...');
    reader.readAsText(file);
}

// Update place cards with real data
function updatePlaceCards(placesToShow) {
    const placesGrid = document.querySelector('.places-grid');
    if (!placesGrid) return;

    // Clear existing cards
    placesGrid.innerHTML = '';

    // Create cards for all places
    placesToShow.forEach((place, index) => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.dataset.lat = place.lat;
        card.dataset.lng = place.lng;

        // Choose appropriate icon based on place
        let icon = '📍';
        if (place.isSpecial) icon = '🏠';
        else if (place.category === 'Beach') icon = '🏖️';
        else if (place.category === 'Urban') icon = '🏙️';
        else if (place.category === 'Culture') icon = '🎭';
        else if (place.category === 'Nature') icon = '🌲';
        else if (place.category === 'Entertainment') icon = '🎢';

        card.innerHTML = `
            <div class="place-image-placeholder">
                <span class="place-icon">${icon}</span>
            </div>
            <div class="place-info">
                <h4>${place.name}</h4>
                <p>${place.description}</p>
                <span class="place-date">${place.date}</span>
            </div>
        `;

        placesGrid.appendChild(card);
    });
}

// Update travel stats
function updateTravelStats(locationCount) {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers[0]) statNumbers[0].textContent = Math.min(locationCount, 99);
    if (statNumbers[1]) statNumbers[1].textContent = Math.floor(locationCount * 1.5);
}

// Drag and drop functionality (only if upload area exists)
function setupDragAndDrop() {
    const uploadArea = document.getElementById('uploadArea');
    if (!uploadArea) {
        console.log('No upload area found - skipping drag and drop setup');
        return;
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });

    uploadArea.addEventListener('drop', handleDrop, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(e) {
        uploadArea.classList.add('dragover');
    }

    function unhighlight(e) {
        uploadArea.classList.remove('dragover');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;

        if (files.length > 0) {
            document.getElementById('locationFile').files = files;
            handleFileUpload({ target: { files: files } });
        }
    }
}

// Initialize Google Maps
function initMap() {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Create map centered on world view
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: { lat: 20, lng: 0 },
        mapTypeControl: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{ "color": "#ff6b35" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#2196f3" }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#ffffff" }, { "weight": 0.5 }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            }
        ]
    });

    // Add markers for each place
    places.forEach(place => {
        const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#ff6b35',
                fillOpacity: 0.9,
                strokeColor: '#fff7ed',
                strokeWeight: 2,
            }
        });

        // Special highlight for birthplace (Cuba) - Prominent golden glow
        if (place.isSpecial) {
            console.log('🏠 Adding prominent glow for birthplace:', place.name);

            // Custom larger icon for birthplace
            marker.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: 16,
                fillColor: '#FFD700',
                fillOpacity: 1.0,
                strokeColor: '#ff6b35',
                strokeWeight: 4,
            });

            // Large outer bright glow - VERY visible
            const outerCircle = new google.maps.Circle({
                strokeColor: '#FFD700',
                strokeOpacity: 1.0,
                strokeWeight: 6,
                fillColor: '#FFD700',
                fillOpacity: 0.4,
                map: map,
                center: { lat: place.lat, lng: place.lng },
                radius: 200000 // 200km radius - very large
            });

            // Medium orange circle - HIGH contrast
            const middleCircle = new google.maps.Circle({
                strokeColor: '#ff6b35',
                strokeOpacity: 1.0,
                strokeWeight: 5,
                fillColor: '#ff6b35',
                fillOpacity: 0.5,
                map: map,
                center: { lat: place.lat, lng: place.lng },
                radius: 120000 // 120km radius
            });

            // Inner bright yellow circle - MAXIMUM visibility
            const innerCircle = new google.maps.Circle({
                strokeColor: '#FFFF00',
                strokeOpacity: 1.0,
                strokeWeight: 4,
                fillColor: '#FFFF00',
                fillOpacity: 0.6,
                map: map,
                center: { lat: place.lat, lng: place.lng },
                radius: 60000 // 60km radius
            });
        }

        // No click interaction needed - just display the places

        markers.push(marker);
    });
}

// Location info display removed - no interactive features needed

// Setup place card handlers after map is initialized
function setupPlaceCardHandlers() {
    console.log('🎯 Setting up place card handlers');

    // Place cards are for display only - no click interaction needed

    // Add hover effects to place cards
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    console.log('✅ Place card handlers setup complete');
}

// Google Maps API is working with proper key - no fallback needed