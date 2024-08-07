$(document).ready(function () {
    $("#formOne").submit(function (event) {
        event.preventDefault();
        let item1 = $("#input1").val();
        let item2 = $("#input2").val();
        let item3 = $("#input3").val();
        let item4 = $("#input4").val();
        let item5 = $("#input5").val();
        $(".list1").hide();
        $(".result").show();
        let list = "";

        let itemsArray = [item1, item2, item3, item4, item5];
        let sortedItems = itemsArray.sort();
        sortedItems.forEach(function (item) {
            list += item + "<br>"  + "<br>"
            $("#list").html(list);
        });
    });
    $("h2").click(function (){
        $(".list1").show();
        $(".result").hide();
    });
});