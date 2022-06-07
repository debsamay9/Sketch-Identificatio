function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
function preload(){
    classifier= ml5.imageClassifier('DoodleNet');
}
function clearcanvas(){
    background("white");

}
function ClassifyCanvas(){
    classifier.classify(canvas,gotresults);

}
function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
            
        
    }
    }
    function gotresult(error,results){
        if (error){
            console.error(error);
        }
        else{
        console.log(results);
        document.getElementById("label").innerHTML = "label: "+ results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy: "+ Math.round(results[0].confidence*100)+"%";
        utterThis= new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
        }
    }