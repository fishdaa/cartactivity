
// sort of database like feature for storing data using js objects
// can easily add other items later.
// can also easily add other crud functions.
const items = [
    {
        id: 1,
        name: "Samsung Galaxy S21",
        image: "img1.jpg",
        price: "47990.30",
        body: {
            dimensions: "151.7 x 71.2 x 7.9 mm",
            weight: "169g"
        },
        display: "1080 x 2400 pixels AMOLED 120Hz",
        cpu: "Qualcomm Snapdragon 888",
        memory: "128GB 8GB RAM, 256GB 8GB RAM",
        camera: {
            main: {
                setup: "Tripple",
                details: [
                    "12MP (wide) OIS",
                    "64MP (telephoto) OIS",
                    "12MP (ultrawide)",
                    "LED flash, auto-HDR, panorama"
                ]
            },
            selfie: {
                setup: "Single",
                details: [
                    "10MP (wide)"
                ]
            } 
        },
        battery: "Li-Ion 4000 mAh",
        os: "Android 11, One UI 3.1",
        comms: {
            network: "GSM/HSPA/LTE/5G",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6",
            bluetooth: "5.0, A2DP, LE",
            gps: "yes",
            nfc: "yes",
            usb: "USB Type-C 3.2"
        },
        misc: [
            "fingerprint (under display, ultrasonic)",
            "accelerometer", 
            "gyro", 
            "proximity", 
            "compass", 
            "barometer",
            "Corning Gorilla Glass Victus"
        ]
    },
    {
        id: 2,
        name: "Apple iPhone 12",
        image: "img2.jpg",
        price: "49990.20",
        body: {
            dimensions: "146.7 x 71.5 x 7.4 mm",
            weight: "164g"
        },
        display: "1170 x 2532 pixels Super Retina XDR OLED",
        cpu: "Apple A14 Bionic",
        memory: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM",
        camera: {
            main: {
                setup: "Dual",
                details: [
                    "12MP (wide) OIS",
                    "12MP (ultrawide)",
                    "Dual-LED dual-tone flash, HDR"
                ]
            },
            selfie: {
                setup: "Dual",
                details: [
                    "12MP (wide)",
                    "SL 3D (depth/biometrics sensor)"
                ]
            }
        },
        battery: "Li-Ion 2815 mAh",
        os: "iOS 14.1, upgradable to iOS 14.6",
        comms: {
            network: "GSM/HSPA/LTE/5G",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6",
            bluetooth: "5.0, A2DP, LE",
            gps: "yes",
            nfc: "yes",
            usb: "Lightning, USB 2.0"

        },
        misc: [
            "Face ID",
            "accelerometer", 
            "gyro", 
            "proximity", 
            "compass", 
            "barometer",
            "Siri",
            "Scratch-resistant ceramic glass"
        ]
    },
    {
        id: 3,
        name: "Google Pixel 4A",
        image: "img3.jpg",
        price: "16500.50",
        body: {
            dimensions: "144 x 69.4 x 8.2 mm",
            weight: "143g"
        },
        display: "1080 x 2340 pixels OLED HDR",
        cpu: "Qualcomm Snapdragon 730G",
        memory: "128GB 6GB RAM",
        camera: {
            main: {
                setup: "Single",
                details: [
                    "12MP (wide) OIS"
                ]
            },
            selfie: {
                setup: "Single",
                details: [
                    "8MP (wide)"
                ]
            }
        },
        battery: "Li-Po 3140 mAh",
        os: "Android 10, upgradable to Android 11",
        comms: {
            network: "GSM/HSPA/LTE",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac",
            bluetooth: "5.0, A2DP, LE",
            gps: "yes",
            nfc: "yes",
            usb: "USB Type-C 3.1"
        },
        misc: [
            "fingerprint (rear-mounted)",
            "accelerometer", 
            "gyro", 
            "proximity", 
            "compass", 
            "barometer",
            "Corning Gorilla Glass 3"
        ]
    },
    {
        id: 4,
        name: "Realme 6",
        image: "img4.jpg",
        price: "11990.10",
        body: {
            dimensions: "162.1 x 74.8 x 8.9 mm",
            weight: "191g"
        },
        display: "1080 x 2400 pixels IPS 90Hz",
        cpu: "Mediatek MT6785",
        memory: "64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM,",
        camera: {
            main: {
                setup: "Quad",
                details: [
                    "64MP (wide)",
                    "8MP (ultrawide)",
                    "2MP (macro)",
                    "2 MP B/W (depth)",
                    "LED flash, HDR, panorama"
                ]
            },
            selfie: { 
                setup: "Single",
                details: [
                    "16MP (wide)"
                ]
            }
        },
        battery: "Li-Po 4300 mAh",
        os: "Android 10, Realme UI",
        comms: {
            network: "GSM/HSPA/LTE",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac",
            bluetooth: "5.0, A2DP, LE",
            gps: "yes",
            nfc: "yes",
            usb: "USB Type-C 2.0 OTG"
        },
        misc: [
            "fingerprint (side mounted)",
            "accelerometer", 
            "gyro", 
            "proximity", 
            "compass",
            "Corning Gorilla Glass 3"
        ]
    },
    {
        id: 5,
        name: "Xiaomi Redmi Note 9",
        image: "img5.jpg",
        price: "9990.70",
        body: {
            dimensions: "162.3 x 77.2 x 8.9 mm",
            weight: "199g"
        },
        display: "1080 x 2340 pixels IPS",
        cpu: "MediaTek Helio G85",
        memory: "64GB 3GB RAM, 64GB 4GB RAM, 128GB 4GB RAM",
        camera: {
            main: {
                setup: "Quad",
                details: [
                    "48MP (wide)",
                    "8MP (ultrawide)",
                    "2MP (macro)",
                    "2 MP B/W (depth)",
                    "LED flash, HDR, panorama"
                ]
            },
            selfie: { 
                setup: "Single",
                details: [
                    "13MP (wide)"
                ]
            }
        },
        battery: "Li-Ion 4000 mAh",
        os: "Android 10, MIUI 12",
        comms: {
            network: "GSM/HSPA/LTE",
            wlan: "Wi-Fi 802.11 a/b/g/n/ac",
            bluetooth: "5.0, A2DP, LE",
            gps: "yes",
            nfc: "yes",
            usb: "USB Type-C 2.0"
        },
        misc: [
            "fingerprint (rear mounted)",
            "accelerometer", 
            "gyro", 
            "proximity", 
            "compass",
            "Corning Gorilla Glass 5"
        ]
    },
    {
        id: 6,
        name: "Samsung Galaxy A41",
        image: "img6.jpg",
        price: "14949.10"
    },
    {
        id: 7,
        name: "Xiaomi Poco M3",
        image: "img7.jpg",
        price: "6990.60"
    },
    {
        id: 8,
        name: "Oppo F17",
        image: "img8.jpg",
        price: "15656.20"
    },
    {
        id: 9,
        name: "Huawei nova 8 SE",
        image: "img9.jpg",
        price: "23076.15"
    },
    {
        id: 10,
        name: "Vivo V20 2021",
        image: "img10.jpg",
        price: "19949.50"
    }
]

export { items };