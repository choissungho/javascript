$(function () {
    $("#remove_bt").click(function () {
        $("#sentence1").empty();
    });
    $("#create_bt").click(function () {
        $("#sentence1").html($("#sentence2").html());
    });
    $("#add_bt").click(function () {
        $("<span>" + $("#sentence2").html() + "</span>").appendTo("#sentence1");
    });
}); 

$(function () {
    $("#bt1").click(function () {
        $("#output").text($('#name_input').attr('name') + ", " + $('#comment_input').attr('name') + ", " + $('#select_input').attr('name'));
    });
    $("#bt2").click(function () {
        $("#output").text($("#name_input").val() + ", " + $("#comment_input").val() + ", " + $("#select_input").val());
    });
    $("#bt3").click(function () {
        $("#output").text($("#select_input").val());
    });

});


$(function () {
    $("#check_submit").click(function () {
        if ($("input:checked").length == 0) {
            $("input[type=checkbox]").prop("checked", true);
        } else {
            $("input[type=checkbox]").prop("checked", false);
        }


    });

});