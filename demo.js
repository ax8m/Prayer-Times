
console.log("it is work")
function changeTime(athanName, pray) {
    document.getElementById(`${athanName}`).innerHTML = pray
}



function GetDate() {
    axios.get('http://api.aladhan.com/v1/timingsByCity?city=Riyadh&country=Saudi%20Arabi&method=8')
        .then((DH) => {
            // Date of hijri calendar
            const dateHijri = DH.data.data.date.hijri
            const dayInHijri = dateHijri.day
            const weehdayInHijri = dateHijri.weekday.ar
            const monthInHijri = dateHijri.month.ar
            const yearInHijri = dateHijri.year
            // console.log(`${weehdayInHijri} - ${dayInHijri} ${monthInHijri} ${yearInHijri}`)
            const formatDateHIjri = `${weehdayInHijri} - ${dayInHijri} ${monthInHijri} ${yearInHijri}`

            // Date of gergorian calendar
            const dateGre = DH.data.data.date.gregorian
            const dayInGre = dateGre.day
            const weehdayInGre = dateGre.weekday.en
            const monthInGre = dateGre.month.en
            const yearInGre = dateGre.year
            // console.log(`${weehdayInGre} - ${dayInGre} ${monthInGre} ${yearInGre}`)
            const formatDateGre = `${weehdayInGre} - ${dayInGre} ${monthInGre} ${yearInGre}`

            document.getElementById("date").innerHTML = `
                <h4>${formatDateGre}</h4>
                <h4>${formatDateHIjri}</h4>
                `
        }).catch((error) => {
            alert(error)
        })
}


function getPrayerTimesOfCity(city) {

    // axios.get('http://api.aladhan.com/v1/timingsByCity?city=Makkah&country=Saudi%20Arabi&method=8')
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: {
            country: "Saudi Arabi",
            city: city,
            methods: "8",

        }
    })
        .then((pray) => {
            const timings = pray.data.data.timings

            changeTime('fajr-athan', timings.Fajr)
            changeTime('sunrise-athan', timings.Sunrise)
            changeTime('Dhuhr-athan', timings.Dhuhr)
            changeTime('Asr-athan', timings.Asr)
            changeTime('Maghrib-athan', timings.Maghrib)
            changeTime('Isha-athan', timings.Isha)


        })
}

let cities = [
    {
        arName: "الرياض",
        enName: "Riyad"
    },
    {
        arName: "مكة المكرمة",
        enName: "Makkah"
    },
    {
        arName: "المدينة المنورة ",
        enName: "Medina"
    },
    {
        arName: "جدة",
        enName: "Jeddah"
    }
]

for (city of cities) {
    const content = `
        <option>${city.arName}</option>
    `
    document.getElementById("cities").innerHTML += content

}

function getcity() {
    let cityName = document.getElementById("cities").value

    let cityOfSelect = ""

    for (let city of cities) {
        if (city.arName == cityName) {
            cityOfSelect = city.enName
        }
    }
    document.getElementById("city-name").innerHTML = cityName

    getPrayerTimesOfCity(cityName)
}



GetDate()
getPrayerTimesOfCity("Riyad")


