// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let username = prompt("What's your name?")

  alert('We want to know if you like programming!')

  let answer = prompt('Do you like programming'+username+'?')

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
  
}

function questionnaire() {
  let name= prompt("What's your name?")

  let breakfast= prompt ("What did you have for breakfast?")

  let colour= prompt ("What is your favourite colour at the moment?")
  let age=prompt('How old are you?')
  age=age+11
  alert("you are"+age+ "years old on your next birthday")

  alert("I don't like that colour!")
}
