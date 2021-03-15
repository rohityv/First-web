var mathresult = document.getElementById("mathresult")
function calculateFunc(){
  var num1 = document.getElementById("firstnumber").value
  var num2 = document.getElementById("secondnumber").value
  var operator = document.getElementById("operator").value
  if(num1 == "" || num2 == "" || operator == ""){
    mathresult.innerHTML = ("Please enter a valid input");
  }
  else{
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
        if(operator == "+"){
          mathresult.innerHTML = (num1 + num2);
        }
        else if (operator == "-"){
          mathresult.innerHTML = (num1 - num2);
        }
        else if (operator == "*"){
          mathresult.innerHTML = (num1 * num2);
        }
        else if (operator == "/"){
          mathresult.innerHTML = (num1 / num2);
        }
        else{
          mathresult.innerHTML = ("Wrong operator");
        }
     }
}

var sentmessages = document.getElementById("sentmessages")
function sendmessageFunc(){
  var typemessage = document.getElementById("typemessage")
  var node  = document.createElement("li")
  node.innerHTML = typemessage.value.toUpperCase()
  sentmessages.appendChild(node)
  typemessage.value = ("")
}

// var questions = [
//       {
//       question:"what color are apples \n (a) red/green \n (b) purple \n (c) orange",
//       answer: "a"
//       },
//       {
//         question:"what color are bananas \n (a) orange \n (b) purple \n (c) yellow",
//         answer: "c"
//       },
//       {
//         question:"what color are strawberries \n (a) purple \n (b) red \n (c) orange",
//         answer: "b"
//       }
//     ]
// var score = 0;
//     for(var i = 0; i<questions.length; i++){
//       // var response = window.prompt(questions[i].question)
//       if(response == questions[i].answer){
//         score++
//         alert("Correct!")
//       }else{
//         alert("Wrong")
//       }
//     }
//     alert("you got " + score + "/" + questions.length)
