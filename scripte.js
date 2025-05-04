const panier = {};
const cartCount = document.getElementById('cart-count');
const cartInfo = document.getElementById('cart-info');

function ajouterProduit(nomProduit) {
  // Ajouter au panier
  if (panier[nomProduit]) {
    panier[nomProduit]++;
  } else {
    panier[nomProduit] = 1;
  }

  // Alerte immédiate
  alert(`${nomProduit} a été ajouté au panier`);

  // Mettre à jour le panier
  mettreAJourPanier();
}

function mettreAJourPanier() {
  let total = 0;
  let commentaire = 'Vous avez ajouté :<br>';
  
  for (let produit in panier) {
    total += panier[produit];
    commentaire += `- ${produit} : ${panier[produit]}<br>`;
  }

  cartCount.textContent = total;
  cartInfo.innerHTML = commentaire;
}
//Slide Show
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change d'image toutes les 3 secondes
}