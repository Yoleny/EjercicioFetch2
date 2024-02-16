
    fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then(data => {
      const categoriesContainer = document.getElementById('categories');
  
      data.forEach(categories=> {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
  
        const image = document.createElement('img');
        image.src = categories.image;
        image.classList.add('card-img-top');
        image.alt = categories.title;
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const name = document.createElement('h5');
        name.classList.add('card-name');
        name.textContent = categories.name;
  
        cardBody.appendChild(name);
  
        card.appendChild(image);
        card.appendChild(cardBody);
  
        categoriesContainer.appendChild(card);
      });
    });
  