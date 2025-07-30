// backend/detail.js
import { supabase } from './supabase.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function loadDetail() {
  const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single()
  const detail = document.querySelector('#detail')

  if (error) {
    detail.innerHTML = '<p>Not found</p>'
    return
  }

  const comment = data.speed < 3 ? "🐌 Slow crewmate" : "🚀 Fast crewmate"
  detail.innerHTML = `
    <h2>${data.name}</h2>
    <p>Speed: ${data.speed}</p>
    <p>Color: ${data.color}</p>
    <p>Headwear: ${data.headwear}</p>
    <img src="../headwears/${data.headwear}.jpeg" alt="${data.headwear}" width="60" />
    <p>${comment}</p>
    <a href="edit.html?id=${data.id}">Edit</a>
  `
}

loadDetail()
