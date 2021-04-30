const faker = require('faker')


function generateFakes(req, res){
    const funFact = [
        "Laser tag semi-pro",
        "Hula-Hoop master",
        "Star Wars lego addict",
        "Lvl 7 Halfling Rogue",
        "Balcony chili grower",
        "Dorito lover",
    ]

    const fakeUsers = {}
    fakeUsers['Name'] = faker.name.findName()
    fakeUsers['Address'] = faker.address.streetAddress()
    fakeUsers['City'] = faker.address.city()
    fakeUsers['Date of birth'] = faker.date.past(75)
    fakeUsers['Fun fact'] = `${funFact[Math.floor(Math.random() * funFact.length)]}`
    fakeUsers['Picture'] = faker.image.people()
    fakeUsers['Occupation'] = faker.name.jobType()
    return fakeUsers
}

module.exports = {
    generateFakes
}