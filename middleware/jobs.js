const User = require('../models/usermodel')
const cron = require('node-cron')

const clearFakelimit = cron.schedule(
    "00 26 18 * * *",//Ändra till 00 00 00 * * * 
    async () => {
        //Kod som clearar User.fakelimit från usermodel.
        const users = await User.findAll()
        console.log(users);



        // console.log("User fake limit reset");
    },
    {
        scheduled: true,
        timezone: "Europe/Stockholm"
    }
)

clearFakelimit.start()


module.exports = { clearFakelimit }