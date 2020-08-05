use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jimmy Lawrence",
        email: "jimmylawrence@gmail.com",
        checkedIn: true
    },
    {
        name: "Hastings McAllister",
        email: "twolastnames@hotmail.co.uk",
        checkedIn: false
    },
    {
        name: "Donald Trump",
        email: "makeamericagreatagain@gmail.biz",
        checkedIn: true
    }
]);

