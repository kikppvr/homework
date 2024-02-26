const getAllCovidData = async () => {
    try {
        const response = await axios.get("https://dev.codekit.co/devcamp-api/covid-country.txt");
        const allCovidData = response.data;
        // console.log('allCovidData ', allCovidData)
        return allCovidData;
    } catch (error) {
        console.log("error", error);
    }
};


getAllCovidData().then((allCovidData) => {
    if(allCovidData){
        const totalTodayRecovered = allCovidData.reduce((total, country) => {
            return total + country.todayRecovered
        }, 0); 

        const todayDeaths = allCovidData.filter((country) => country.todayDeaths < 10 && country.population > 100000000).map((country => country.country))

        console.log(`คนที่หายจาก Covid วันนี้: ${totalTodayRecovered} คน`)
        console.log(`ประเทศที่มี todayDeaths น้อยกว่า 10 คน และมีประชากรมากกว่า 100,000,000 คน: ${todayDeaths}`)
    }
})
