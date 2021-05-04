const User = require('../models/usermodel')
const cron = require('node-cron')

const clearFakelimit = cron.schedule(
    "* * * * * *",//Ändra till 00 00 00 * * * 
    async () => {
        await User.resetFakelimit()
        console.log("User fake limit reset");
    },
    {
        scheduled: true,
        timezone: "Europe/Stockholm"
    }
)

clearFakelimit.start()



