// backend/edit.js
import { supabase } from './supabase.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function loadForm() {
  const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
  document.querySelector('#edit-name').value = data.name
  document.querySelector('#edit-speed').value = data.speed
  document.querySelector('#edit-color').value = data.color
  document.querySelector(`input[name="headwear"][value="${data.headwear}"]`).checked = true

}

document.querySelector('#edit-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = document.querySelector('#edit-name').value
  const speed = parseFloat(document.querySelector('#edit-speed').value)
  const color = document.querySelector('#edit-color').value
  const headwear = document.querySelector('input[name="headwear"]:checked')?.value


  const { error } = await supabase.from('crewmates').update({ name, speed, color, headwear }).eq('id', id)
  if (!error) window.location.href = 'detail.html?id=' + id
})

document.querySelector('#delete-btn').addEventListener('click', async () => {
  const { error } = await supabase.from('crewmates').delete().eq('id', id)
  if (!error) window.location.href = 'gallery.html'
})

loadForm()
