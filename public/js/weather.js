// http://api.apixu.com/v1/current.json?key=<YOUR_API_KEY>&q=London

const url = "https://api.apixu.com/v1/current.json?key=b470f80b1fd44287bd2195524180707&q="

const search = function(){
    let place = document.getElementById("searchcity").value
    console.log(place)
    const request = async() =>  {
        const response = await fetch(url+place)
        const json = await response.json()
        console.log(json)
        document.getElementById("temperature").innerHTML = json.current.temp_c + "&deg C"
        document.getElementById("condition").innerHTML = json.current.condition.text
        document.getElementById("city").innerHTML = json.location.name +", "+json.location.country
    }
    request()
}