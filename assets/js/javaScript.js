
// var to hold possible horoscopes
var possibleHoroscopes = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

//need to reference buttons, name them for each signand link spann id to possible horoscope value
//should the spans be buttons?

// var Aquarius = $(".flaticon-aquarius")
// var Pisces = $(".flaticon-pisces")
// var Aries = $(".flaticon-aries")
// var Taurus = $(".flaticon-taurus")
// var Gemini = $(".flaticon-gemini")
// var Cancer = $(".flaticon-cancer")
// var Leo = $(".flaticon-leo")
// var Virgo = $(".flaticon-virgo")
// var Libra = $(".flaticon-libra")
// var Scorpio = $(".flaticon-scorpio")
// var Sagittarius = $(".flaticon-sagittarius")
// var Capricorn = $(".flaticon-capricorn")


//var to hold user input of which horoscope button they cliked
// var userHoroscopesDecision = user.input
var userHoroscope = "Taurus"
// var userHoroscope = (user.input)


var iframe = document.getElementById("spotifyFrame");
// var iframe = spotifyURL
// var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
// elmnt.style.display = "none";


// function urlChange(spotifyURL) {
//     var site = spotifyURL
//     document.getElementById('spotifyFrame').src = site;

// function urlSpotify() {

function replaceIframeContent(iframe, spotifyURL) {
    iframe.src = "about:blank";
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(spotifyURL);
    iframe.contentWindow.document.close();


    if (userHoroscope === "Aries") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2DC3Q7JOmYe"
    }
    else if (userHoroscope === "Taurus") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXbCgDGG5xQtb"
    }
    else if
        (userHoroscope === "Gemini") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DWWVULl5wUsL9"
    }
    else if
        (userHoroscope === "Cancer") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXaeX3MJpiD4U"
    }
    else if
        (userHoroscope === "Leo") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX7cvHpkIJFt2"
    }
    else if
        (userHoroscope === "Virgo") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX6PdsVYbP4rI"
    }
    else if
        (userHoroscope === "Libra") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXco4NYQOMLiT"
    }
    else if
        (userHoroscope === "Scorpio") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX0YZgrwmizcR"
    }
    else if
        (userHoroscope === "Sagittarius") {
        var spotifyURL = "https://open.spotify.com/ebed/playlist/37i9dQZF1DX93MXPufCcuk"
    }
    else if
        (userHoroscope === "Capricorn") {
        var spotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2rcqmLx0nK4"
    }

    else {
        console.log("Something went wrong")
        var spotifyURL = "https://open.spotify.com/embed/playlist/2B1859Lda95JAkvkV5XFWg"
    } // else - something went wrong
    // } // changeURL function

    // var iframeSelector = $("#spotifyFrame")

    // $(iframeSelector).contents().find('html').html(spotifyURL);

    console.log(spotifyURL);
}
replaceIframeContent();

// urlSpotify();

// changeURL();