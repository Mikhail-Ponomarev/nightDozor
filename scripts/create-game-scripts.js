const gameName = document.getElementById('gameNameID')
const history = document.getElementById('historyID')
const dateStart = document.getElementById('dateStartID')
const dateEnd = document.getElementById('dateEndID')
const difficultyLevel = document.getElementById('difficultyLevelID')
const placeLegend = document.getElementById('placeLegendID')
const place = document.getElementById('placeID')
const responce = document.getElementById('responceID')
const createRiddle = document.querySelector('.btn')
const create = document.querySelector('.btn-block')

gameName.addEventListener('focus', () => { gameName.placeholder='' })
gameName.addEventListener('blur', () => { if(!gameName.value){ gameName.placeholder='Название игры' } })

history.addEventListener('focus', () => { history.placeholder = ''})

