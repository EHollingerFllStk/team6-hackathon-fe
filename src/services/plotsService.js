import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/plots`

async function getPlots() {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createPlot(form) {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json', 
      },
      method: 'POST',
      body: JSON.stringify(form)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function getPlotsById(id) {
  try {
    const res = await fetch(`${BASE_URL}/profile/${id}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  getPlots,
  createPlot,
  getPlotsById
}
