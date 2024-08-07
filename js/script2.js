$(document).ready(function () {
    $("#submit-btn").click(function () {
        let data = $("#cards").val();
        let cardArray = ["spades", "clubs", "hearts", "diamond"];
        let cardArrayNumber = ["List","2", "3", "4", "5", "6", "7", "8", "9", "Ace", "Jack", "Queen", "King"];
        let result = "";

        cardArray.forEach(function (card) {
            result += "<br>";
            if (data === card) {
                cardArrayNumber.forEach(function (number) {
                    result += number + " of " + card + "<br>";
                    $(".result-cont").html(result);
                });

            } else if (data === "4") {
                cardArrayNumber.forEach(function (number) {
                    result += number + " of " + card + "<br>";
                    $(".result-cont").html(result);
                });
            }
        });

        $(".result-cont").toggle();
    });
    $("#cards").click(function(){
        $(".result-cont").hide();
    });

});