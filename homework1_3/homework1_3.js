const getAllFriendsData = async () => {
    try {
        const response = await axios.get("https://dev.codekit.co/devcamp-api/friends.txt");
        const allFriendsData = response.data
        console.log('allFriendsData', allFriendsData)
        return allFriendsData
        
    } catch (error) {
        console.log('error', error)
    }
}

getAllFriendsData().then((allFriendsData) => {
    if(allFriendsData){
        console.log('have data')

        const allGenderMale = allFriendsData.filter((obj) => obj.gender === 'male' && obj.friends.length >= 2);
        const result = allGenderMale.map((item) => ({
            name: item.name,
            gender: item.gender,
            company: item.company,
            email: item.email,
            friends: item.friends,
            balance: `$${Number(item.balance.replace('$', '').replace(',', '')) / 10}`,
        }))
      
        console.log('result: ', result);
    }
})