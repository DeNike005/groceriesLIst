$(document).ready(function () {
    $("#btn").click(function () {
        let textCont = $("#word-box").val().trim();
        let textArray = textCont.split(" ");
        let neededWords = [... new Set(textArray)]
        let newArray = [];
        let result = ""
        textArray.forEach(function (word) {
            if (word.length >= 3 && word.length !== 0) {
                newArray.push(word);
            }
        });
        $(".result-1").text(newArray.reverse().join(" "));
        
        neededWords.forEach(function (word2) {
            let count = 0;
            textArray.forEach(function (words) {

                if ( !Number(word2) && words.toLowerCase() === word2.toLowerCase()) {
                    count++
                }

               
            });
            result += word2 + ": " + count + "<br>";                    
            $(".result-2").html(result);
        });
    });
    
});