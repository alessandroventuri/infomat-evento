let form = document.getElementById('form-evento')

let getValue = (elId) => document.getElementById(elId).value

form.addEventListener('submit', (e) => {
  e.preventDefault()
  emailPattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

  document.getElementById('await-result').classList.remove('hidden')
  if (!getValue('email').match(emailPattern)) {
    document.getElementById('invalid-email').classList.remove('hidden')
  } else {
    document.getElementById('invalid-email').classList.add('hidden')
    document.getElementById('server-error').classList.add('hidden')

    let url = 'https://www.betaservice.it/betaservicerestws/api/generic/registrazioneevento'
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IdCliente: 7,
        IdEvento: 1,
        Descrizione: 'Evento Infomat ottobre 2022',
        Azienda: getValue('azienda'),
        Nome: getValue('nome'),
        Cognome: getValue('cognome'),
        Email: getValue('email'),
        Telefono: getValue('telefono'),
        Data: getValue('data'),
        Orario: getValue('orario'),
      }),
    }

    fetch(url, options)
      .then(() => {
        document.getElementById('await-result').classList.add('hidden')
        document.getElementById('submit-button').disabled = true
        document.getElementById('success-message').classList.remove('hidden')
      })
      .catch(() => {
        document.getElementById('await-result').classList.add('hidden')
        document.getElementById('server-error').classList.remove('hidden')
      })
  }
})
