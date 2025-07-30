// create.js
import { supabase } from './supabase.js'

const form = document.querySelector('#create-form')
console.log('Form found:', form)

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  console.log('Form submitted!')

  const name = document.querySelector('#name').value
  const speed = parseFloat(document.querySelector('#speed').value)
  const color = document.querySelector('#color').value
  const headwear = document.querySelector('input[name="headwear"]:checked')?.value

  console.log('Values:', { name, speed, color, headwear })

  const { error } = await supabase.from('crewmates').insert([{ name, speed, color, headwear }])

  if (error) {
    console.error('Insert error:', error)
  } else {
    window.location.href = 'gallery.html'
  }
})
