let getId = (elId) => document.getElementById(elId)
let form = getId('form-evento')
emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const Azienda = getId('azienda').value
  const Nome = getId('nome').value
  const Cognome = getId('cognome').value
  const Email = getId('email').value
  const Telefono = getId('telefono').value
  const Data = getId('data').value
  const Orario = getId('orario').value
  const Pranzo = getId('pranzo').checked

  getId('await-result').classList.remove('hidden')

  if (!Email.match(emailPattern)) {
    getId('invalid-email').classList.remove('hidden')
  } else {
    getId('invalid-email').classList.add('hidden')
    getId('server-error').classList.add('hidden')

    const url = 'https://www.betaservice.it/betaservicerestws/api/generic/registrazioneevento'
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IdCliente: 7,
        IdEvento: 1,
        Descrizione: 'Evento Infomat ottobre 2022',
        Azienda,
        Nome,
        Cognome,
        Email,
        Telefono,
        Data,
        Orario,
        Pranzo,
      }),
    }

    console.log(getId('pranzo').checked)

    fetch(url, options)
      .then(() => {
        getId('await-result').classList.add('hidden')
        getId('submit-button').disabled = true
        getId('success-message').classList.remove('hidden')
      })
      .catch(() => {
        getId('await-result').classList.add('hidden')
        getId('server-error').classList.remove('hidden')
      })
  }
})
