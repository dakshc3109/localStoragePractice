function getScore(){
    var score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: "+score+"</h1>";
}

function getBack(){
    window.location = "activity_1.html";
}