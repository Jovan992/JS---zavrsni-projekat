document.body.style.backgroundColor = "#1bbc9b";

var srvdiv1 = document.getElementById("srvdiv1");
var f0 = document.getElementById("form0Div");
var f1 = document.getElementById("form1Div");
var f2 = document.getElementById("form2Div");
var f3 = document.getElementById("form3Div");
var f4 = document.getElementById("form4Div");
var f5 = document.getElementById("form5Div");
var feedbackDiv = document.getElementById("feedbackDiv");

var t1 = document.getElementById("text1");
var t2 = document.getElementById("text2");
var ft1 = document.getElementById("fText1");
var ft2 = document.getElementById("fText2");
var ft3 = document.getElementById("fText3");

var brojac = 0;

var qn = document.getElementById("questionNo");

var b1 = document.getElementById("buttonNext");

var fa1 = document.getElementById("fa1");
var fa2 = document.getElementById("fa2");
var fa3 = document.getElementById("fa3");
var fa4 = document.getElementById("fa4");
var fa5 = document.getElementById("fa5");

var start = () => {
    brojac++;
    qn.textContent = "Question " + (brojac) + " of 5";
    srvdiv1.style.display = "none";
    f0.style.display = "block";
    t1.textContent = "Before we dive in, what's your name?";
    b1Div.style.display = "block";
}

var clickRadio = () => {
    var r27 = document.getElementById("Radio27");
    var d1 = document.getElementById("otherTextDiv");
    if (r27.checked) {
        d1.style.display = "block";
    }
    else {
        d1.style.display = "none";
    }
}

var next = () => {
    var fName = document.getElementById("floatingName").value;
    switch (brojac) {
        case 1:
            {
                if (fName != "") {
                    brojac++;
                    t1.textContent = "Where are you in your career?";
                    t2.style.display = 'none';
                    f1.style.display = 'none';
                    f2.style.display = 'block';
                } else {
                    alert("Name must be filled out");
                }
                break;
            }
        case 2:
            {
                brojac++;
                t1.textContent = "What's your biggest concern about learning tech skills?";
                f2.style.display = 'none';
                f3.style.display = 'block';
            }
            break;
        case 3:
            {
                brojac++;
                t1.textContent = "Picture the perferct workplace for you. What do you see?";
                f3.style.display = 'none';
                f4.style.display = 'block';
            }
            break;
        case 4:
            {
                brojac++;
                t1.textContent = "Just one more thing! How much you like this survey?";
                f4.style.display = 'none';
                f5.style.display = 'block';
                b1.textContent = "SUBMIT";
            }
            break;
        case 5:
            {
                brojac++;
                f0.style.display = "none";
                f5.style.display = 'none';
                feedbackDiv.style.display = 'block';
                b1.onclick = submitFeedback();
            }
        case 6:
            {
                ft1.textContent = "Hi " + fName;
            }
            break;
    }
    qn.textContent = "Question " + brojac + " of 5";
}

var feedback = document.getElementById("customRange1").value;

var submitFeedback = () => {
    var feedback = document.getElementById("customRange1").value;
    switch (feedback) {
        case "1":
            ft3.textContent = "We appreciate your opinion. Oooops, sorry to disappoint you.";
            fa1.style.display = 'block';
            break;
        case "2":
            ft3.textContent = "We appreciate your opinion. We hope it will be better next time!";
            fa2.style.display = 'block';
            break;
        case "3":
            ft3.textContent = "We appreciate your opinion. Golden middle!";
            break;
            fa3.style.display = 'block';
        case "4":
            ft3.textContent = "We appreciate your opinion. Thanks for the veery good rating!";
            fa4.style.display = 'block';
            break;
        case "5":
            ft3.textContent = "We appreciate your opinion. Perfect! We are glad to meet your requirements!";
            fa5.style.display = 'block';
            break;
    }
}


