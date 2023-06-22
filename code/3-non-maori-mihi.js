// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert("Non-Māori Mihi")
  alert("This program will help you build a basic mihi.")
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  alert("What is your name?")
  let name = prompt()

  // more questions and answers here
  let username = prompt("What is your name?")
  alert("What is your mountain?")
  let mountain = prompt()
  alert("What is your body of water?")
  let river = prompt()
  alert("What is your hometown?")
  let hometown = prompt()

  alert("Your mihi:")
  // more outputs here
  alert("Tena koutou,")
  alert("Kei te mihi au ki a" + mountain)
  alert("Kei te mihi au ki a" + river)
  alert("Ko Te Tiriti o Waitangi te waka,")
  alert("Ko Aotearoa te iwi,")
  alert("No" + hometown + "au,")
  alert("Ko " + name + " tōku ingoa,")
  alert("Tēnā koutou,")
  alert("Tēnā koutou,")
  alert("Tēnā koutou, katoa.")
 
}
