var tablinks=document.getElementsByClassName('tab-links')
var tabcontents=document.getElementsByClassName('tab-contents')
var sidemeu=document.getElementById("sidemenu")

function opentab(tabname){
	for(tablink of tablinks){
		tablink.classList.remove('active-links')
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove('active-tab')
	}
	event.currentTarget.classList.add('active-links')
	document.getElementById(tabname).classList.add('active-tab')
}

function openMenu(){
    sidemeu.style.right="0"
}
function closeMenu(){
    sidemeu.style.right="-200px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzlCpziKLlus4aLhS2-PvPvAOxYJeRbi0jqixVsAZiO7S8a80A3VJseXrPf4R3mEcyVEA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=''
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "ramyaachar1998@gmail.com",
//         Password : "RamyA@2110",
//         To : 'ramyaachar1998@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

