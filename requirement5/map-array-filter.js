const response = [
    {
        "name": "Amit",
        "city": "Mumbai",
        "skills": [
            "Actng",
            "Singing",
            "Dancing"
        ],
        "vehicle": {
            "model": "BMW",
            "year": 2021
        }
    },
    {
        "name": "Rahul",
        "city": "Jaipur",
        "skills": [
            "Swiming",
            "Walking",
            "Dancing"
        ],
        "vehicle": {
            "model": "Scoda",
            "year": 2019
        }
    },
    {
        "name": "Vijay",
        "city": "Pune",
        "skills": [
            "Sarcasm",
            "Debate",
            "RTI"
        ],
        "vehicle": {
            "model": "M80",
            "year": 1999
        }
    }
];
const mappedData = response.map(item => ({ name: item.name, year: item.vehicle.year }));

const filteredData = response.filter(item => item.vehicle.year > 2020);

console.log('Mapped data:', mappedData);
console.log('Filtered data:', filteredData);