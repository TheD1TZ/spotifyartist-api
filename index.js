function getArtist(artistID) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.spotify.com/v1/artists/"+ artistID +"/top-tracks?market=NL");

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer BQB09x0FOybr_EL5CpeK0GW-JzjfuBMSDi_7ozqbnN819SDguDT6HgAGTboYqaIwKu5nEfJCsmYTKg9iUY-RLjJWZz4Jxc_NjRuAtbp0pPThplym1s4uJkMTG44xjbODM0eQ1-Z0i6mLnfmPVmaFssUu26CTL5KMFaWydI_Ty52y4FgHTMkrpEA288u98QJOLdE");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);

            return xhr.responseText;
        }};

    xhr.send();
}


module.exports = {
    getArtist: getArtist
}