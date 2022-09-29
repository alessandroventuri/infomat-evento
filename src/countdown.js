const eventStart = new Date('Oct 26, 2022 09:00:00').getTime()
const daysEl = document.getElementById('days-el')
const hoursEl = document.getElementById('hours-el')
const minutesEl = document.getElementById('minutes-el')

setInterval(() => {
  const now = new Date().getTime()
  const timeLeft = eventStart - now

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))

  daysEl.innerHTML = days
  hoursEl.innerHTML = hours
  minutesEl.innerHTML = minutes
}, 1000)
