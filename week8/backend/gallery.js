// backend/gallery.js
import { supabase } from './supabase.js'

async function loadGallery() {
  console.log('Loading gallery...')
  
  const { data, error } = await supabase.from('crewmates').select('*')
  
  console.log('Supabase response:', { data, error })
  
  const gallery = document.querySelector('#gallery')
  console.log('Gallery element:', gallery)

  if (error) {
    console.error('Error loading data:', error)
    gallery.innerHTML = '<p>Error loading data</p>'
    return
  }

  console.log('Data to display:', data)
  
  gallery.innerHTML = data.map(c => `
    <div class="card">
      <h3>${c.name}</h3>
      <p>Speed: ${c.speed}</p>
      <p>Color: ${c.color}</p>
      <p>Headwear: ${c.headwear}</p>
    <img src="../headwears/${c.headwear}.jpeg" alt="${c.headwear}" width="60" />
      <a href="detail.html?id=${c.id}">View Details</a>
    </div>
  `).join('')
}

loadGallery()
