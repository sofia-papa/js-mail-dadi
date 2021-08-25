
 const eMail = ["giuseppina@gmail.it", "edoardo@gmail.it","alessandro@gmail.it"];
 
 const emailScelta = prompt("Inserisci la tua email");

 let verificaEmail = false;

 for (let i = 0; i < eMail.length; i++){
    let emailCorrente = eMail[i];

    if (emailCorrente == emailScelta){
        verificaEmail = true;
    }
 }

if (verificaEmail == true) {
  console.log("Puoi accedere!");
}
else {
  console.log("Mi dispiace, non sei nella lista!");
}