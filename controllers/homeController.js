const https = require("https");
module.exports={
    //Function to display home.ejs
    display:function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        const query = "Brussel";
        const apiKey = "5353491f8c68921b0ad4abea7c8cb317";
        const unit ="metric";
        const url="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
        https.get(url,function(response){
            console.log(response.statusCode);
            response.on("data", function(data){
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const iconImage = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                res.render('../views/home', {username: username, admin:admin, query:query, temp:temp, weatherDescription:weatherDescription});
        })
    })
        
   }
}