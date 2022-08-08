//*//*https://teachablemachine.withgoogle.com/models/oVJ6c605r/*//*//
function sound1() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oVJ6c605r/model.json', modelReady);
}

function modelReady() {
    console.log("Hack has been deployed");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);                                                                                                                                                     
        var rnr = Math.floor(Math.random() * 255) + 1;
        var rng = Math.floor(Math.random() * 255) + 1;
        var rnb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + rnr + "," + rng + "," + rnb + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + rnr + "," + rng + "," + rnb + ")";

        var img1 = document.getElementById("result");
       
       

        if (results[0].label == "cat") {
            img1.src = "cat.jpg";
            
        } else if (results[0].label == "dog") {
           
            img1.src = "dog.jpg";
           
        } else if (results[0].label == "bull") {
            img1.src = "bull.jpg";
        } else {
            img1.src = "";
           
        }
    }

}