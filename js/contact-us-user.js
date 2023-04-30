$("#maxLengthOfText").hide()

$(".submit").click(function () {
    if ($(".text-area").val().length >= 150) {
        $(".text-area").empty()
        alert("Your massage should not be over 150 chars")
    }
    if ($("#Massage").val() === " ") {
        alert("Your massage should not be empty")
    }
})

function checkInput() {
    if ($("#Massage").val().length >= 150) {
        $("#maxLengthOfText").show(300)

    }
    if ($("#Massage").val().length <= 150) {
        $("#maxLengthOfText").hide(200)
    }
    if ($("#Massage").val() === " ") {
        $("#minLengthOfText").show(200)
    }
    if ($("#Massage").val() !== " ") {
        $("#minLengthOfText").hide(200)
    }
    if ($("#Massage").val().length === 0) {
        $("#minLengthOfText").show(200)
    }
}


