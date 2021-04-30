const faker = require('faker')

function generateFakes(req, res){
    const fakeUsers = {}
    fakeUsers['Name'] = faker.name.findName()
    fakeUsers['Address'] = faker.address.streetAddress()
    fakeUsers['City'] = faker.address.city()
    fakeUsers['Date of birth'] = faker.date.past(100)
    fakeUsers['Favorite music'] = faker.music.genre()
    fakeUsers['Picture'] = faker.image.people()
    fakeUsers['Occupation'] = faker.name.jobType()
    res.json({fakeUsers})
}

module.exports = {
    generateFakes
}