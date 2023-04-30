$(".addition-1").hide();
$(".addition-2").hide();
$(".add-section").click(function () {
    $(".addition-1").show(200)
    $(".add-section").hide(200)
    $(".delete-section").show(200)
    $(".add-section-2").show(200)
    $("#history-table").clone(200).appendTo(".table-2").attr({"id": "history-table"})
    $(".table-1").empty(300)
});
$(".delete-section").hide().click(function () {
    $(".addition-1").hide(200)
    $(".add-section").show(200)
    $(".delete-section").hide(200)
    $(".add-section-2").hide(200);
    $("#history-table").clone(200).appendTo(".table-1").attr({"id": "history-table"})
    $(".table-2").empty(300)
});
$(".add-section-2").hide().click(function () {
    $(".addition-2").show(200)
    $(".add-section-2").hide(200)
    $(".delete-section-2").show(200)
    $(".delete-section").hide(200)
    $("#history-table").clone(200).appendTo(".table-3").attr({"id": "history-table"})
    $(".table-2").empty(300)
});
$(".delete-section-2").hide().click(function () {
    $(".addition-2").hide(200)
    $(".add-section-2").show(200)
    $(".delete-section").show(200)
    $(".delete-section-2").hide(200);
    $("#history-table").clone(200).appendTo(".table-2").attr({"id": "history-table"})
    $(".table-3").empty(300)
});
