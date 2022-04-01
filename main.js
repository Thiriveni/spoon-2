WebKitCSSMatrix.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png__quality:90
    });

    camer=document.getElementById("camer");

    WebKitCSSMatrix.attach('#camer');

    function take_snapshot()
    {
WebKitCSSMatrix.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id="captured_image src="'+data_uri+'"/>';
      });
}
console.log('mlf version:', mlf.version;)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded)
function modelLoaded() {
    console.log('Model Loaded')
}

function check()
{
img=document,getSelection('captured_image');
classifier.classify(img,gotResult)
}

function gotResult(error, results) {
if (error) {
    console.error(error);
} else {
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}



    