Webcam.set({ width:350, height:350, image_format:"jpg", jpg_quality:90 });
camera=document.getElementById("camera"); Webcam.attach(camera); function t_img(){ Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML="<img id='t_image' src="+data_uri+">" }); };
console.log("ml5 version",ml5.version); classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o7pGut9Hf/model.json",modeloaded); function modeloaded(){
console.log("Model Loaded!") };
function r_img(){ img=document.getElementById('t_image'); classifier.classify(img,gotResult); }
function gotResult(error,result){ if (error){ console.error(error) }
else { console.log(result) document.getElementById("persons").innerHTML=result[0].label; document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3); } }