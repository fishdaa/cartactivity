
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
                    "12MP (ultrawide)"
                ]
            },
            selfie: "Single",
            detials: [
                "10MP (wide)"
            ]
        },
        battery: "Li-Ion 4000 mAh",
        os: "Android 11, One UI 3.1",
        comms: {
            network: "GSM/HSPA/LTE/5G",

        }

    },
    {
        id: 2,
        name: "Apple iPhone 12",
        image: "img2.jpg",
        price: "49990.20"
    },
    {
        id: 3,
        name: "Google Pixel 4A",
        image: "img3.jpg",
        price: "16500.50"
    },
    {
        id: 4,
        name: "Realme 6",
        image: "img4.jpg",
        price: "11990.10"
    },
    {
        id: 5,
        name: "Xiaomi Redmi Note 9",
        image: "img5.jpg",
        price: "9990.70"
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
        name: "vivo V20 2021",
        image: "img10.jpg",
        price: "19949.50"
    }
]

export { items };