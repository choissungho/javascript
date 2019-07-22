var sentence = "Hi, my name is Sam!";
document.getElementById("demo3").innerHTML = sentence.substr(sentence.indexOf("name"),4);
document.getElementById("demo4").innerHTML = sentence.substr(sentence.indexOf("Sam"),3);
