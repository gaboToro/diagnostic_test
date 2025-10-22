const charactersContainer = document.getElementById('charactersContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const API_BASE_URL = 'https://rickandmortyapi.com/api/character';

function createCharacterCard(character) {
  const card = document.createElement('div');
  card.classList.add('character-card');

  card.innerHTML = `
    <img src="${character.image}" alt="${character.name}" />
    <h3>${character.name}</h3>
    <p><strong>Estado:</strong> ${character.status}</p>
    <p><strong>Especie:</strong> ${character.species}</p>
    <p><strong>Género:</strong> ${character.gender}</p>
    <p><strong>Origen:</strong> ${character.origin.name}</p>
  `;

  return card;
}

function showError(message) {
  charactersContainer.innerHTML = `<p id="errorMessage">${message}</p>`;
}

function loadCharacters(name = '') {
  charactersContainer.innerHTML = 'Cargando personajes...';

  // Construimos la URL con query para nombre si existe
  const url = name ? `${API_BASE_URL}/?name=${encodeURIComponent(name)}` : API_BASE_URL;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se encontraron personajes');
      }
      return response.json();
    })
    .then(data => {
      charactersContainer.innerHTML = '';
      data.results.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
      });
    })
    .catch(err => {
      showError(err.message);
    });
}

// Cargar personajes inicialmente sin filtro
loadCharacters();

searchBtn.addEventListener('click', () => {
  const name = searchInput.value.trim();
  loadCharacters(name);
});

