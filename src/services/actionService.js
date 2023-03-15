import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/actions`

const create = async (formData) => {
  try{
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch(error) {
    console.log(error)
  }
}

export {
  create
}