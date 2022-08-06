let timeEl = moment().format("dddd, MMMM Do")
let date = document.querySelector("#currentDay")
date.textContent = timeEl


function presentTime(){
    let currentTime = moment().hour() -9
    
    for (i = 0; i < 9; i++){

        let textArea = document.querySelectorAll(".description")

        if (i < currentTime){
            $(textArea[i]).addClass("past")   
        }
        else if (i === currentTime){
            $(textArea[i]).addClass("present")
        }
        else {
            $(textArea[i]).addClass("future")
        }
    }
    
}

presentTime()

$('#textArea1').val(localStorage.getItem('hour1'))
$('#textArea2').val(localStorage.getItem('hour2'))
$('#textArea3').val(localStorage.getItem('hour3'))
$('#textArea4').val(localStorage.getItem('hour4'))
$('#textArea5').val(localStorage.getItem('hour5'))
$('#textArea6').val(localStorage.getItem('hour6'))
$('#textArea7').val(localStorage.getItem('hour7'))
$('#textArea8').val(localStorage.getItem('hour8'))
$('#textArea9').val(localStorage.getItem('hour9'))


$(".saveBtn").click(function(){
    let text1 = document.getElementById("textArea1").value

    let text2 = document.querySelector("#textArea2").value

    let text3 = document.querySelector("#textArea3").value

    let text4 = document.querySelector("#textArea4").value

    let text5 = document.querySelector("#textArea5").value

    let text6 = document.querySelector("#textArea6").value

    let text7 = document.querySelector("#textArea7").value

    let text8 = document.querySelector("#textArea8").value

    let text9 = document.querySelector("#textArea9").value

    localStorage.setItem("hour1",text1)
    localStorage.setItem("hour2",text2)
    localStorage.setItem("hour3",text3)
    localStorage.setItem("hour4",text4)
    localStorage.setItem("hour5",text5)
    localStorage.setItem("hour6",text6)
    localStorage.setItem("hour7",text7)
    localStorage.setItem("hour8",text8)
    localStorage.setItem("hour9",text9)

    $('#textArea1').val(localStorage.getItem('hour1'))


})


// $(".saveBtn").click(function(){
//     let text = document.querySelector("#textArea").value
//     console.log(text)

// })






// console.log(typeof(hour.textContent), typeof(currentTime))
// textArea.classList.add("past")

// console.log(currentTime)


