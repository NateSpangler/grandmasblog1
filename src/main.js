import "./styles.css";

const products = [
  {
    id: 1,
    title: "Everyday Comfort Stretch Chino",
    benefit: "Great for everyday wear",
    description:
      "A roomy, flexible option built for easy movement and a cleaner look that still feels relaxed.",
    link: "https://amzn.to/3OTcD1X",
    image: "/images/sockspng.png",
    alt: "Comfort socks product image"
  },
  {
    id: 2,
    title: "Long Sleeve Fit-Focused Henley",
    benefit: "Better sleeve coverage",
    description:
      "Designed with extra length through the body and sleeves for better comfort on taller frames.",
    link: "https://amzn.to/3P6S4PC",
    image: "/images/jeans.png",
    alt: "Jeans product image"
  },
  {
    id: 3,
    title: "Soft Knit Lounge Jogger",
    benefit: "Easy fit for taller frames",
    description:
      "Comfort-first loungewear with an easy fit that works well for home, travel, and casual errands.",
    link: "https://amzn.to/4cSvoMU",
    image: "/images/hoodie.png",
    alt: "Hoodie product image"
  },
  {
    id: 4,
    title: "Classic Fit Performance Polo",
    benefit: "Great for everyday wear",
    description:
      "Breathable and polished, this pick balances everyday comfort with a put-together appearance.",
    link: "https://amzn.to/40wqTQO",
    image: "/images/wsocks.png",
    alt: "Warm socks product image"
  },
  {
    id: 5,
    title: "All-Season Lightweight Jacket",
    benefit: "Reliable cold-weather layer",
    description:
      "A practical layer with extra room where it counts, making cool mornings and evenings easier.",
    link: "https://amzn.to/3ZYcxZl",
    image: "/images/boots.png",
    alt: "Boots product image"
  },
  {
    id: 6,
    title: "Supportive Everyday Walking Shoe",
    benefit: "All-day support for bigger strides",
    description:
      "A dependable shoe option built for long days, with cushioning and structure for all-day wear.",
    link: "https://amzn.to/3P8PZ5G",
    image: "/images/longsleeve.png",
    alt: "Long sleeve product image"
  },
  {
    id: 7,
    title: "Heavyweight Crewneck Tee Pack",
    benefit: "Easy fit for taller frames",
    description:
      "Reliable basics with better length and comfort, ideal for layering or wearing on their own.",
    link: "https://amzn.to/4qXMBrF",
    image: "/images/buttonup.png",
    alt: "Button up shirt product image"
  },
  {
    id: 8,
    title: "Relaxed Fit Weekend Denim",
    benefit: "Comfortable room through the leg",
    description:
      "A sturdy denim pick with room through the leg and waist for a comfortable, flattering fit.",
    link: "https://amzn.to/4aZ8IrK",
    image: "/images/redsleeve.png",
    alt: "Red sleeve shirt product image"
  },
  {
    id: 9,
    title: "Layered Weather-Ready Overshirt",
    benefit: "Reliable cold-weather layer",
    description:
      "A versatile outer layer that pairs well with everyday staples while staying soft and breathable.",
    link: "https://amzn.to/4slEtT6",
    image: "/images/plaid.png",
    alt: "Plaid shirt product image"
  }
];

const productsGrid = document.querySelector("#products-grid");
const yearEl = document.querySelector("#year");

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card reveal";

  card.innerHTML = `
    <figure class="product-media">
      <img src="${product.image}" alt="${product.alt}" loading="lazy" />
    </figure>
    <div class="product-body">
      <p class="product-benefit">${product.benefit}</p>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <a
        class="product-btn"
        href="${product.link}"
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label="Check price for ${product.title} on Amazon"
      >
        Check Price on Amazon
      </a>
      <small>Purchases may earn a commission.</small>
    </div>
  `;

  return card;
}

products.forEach((product) => {
  productsGrid.appendChild(createProductCard(product));
});

yearEl.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

// Update product metadata later:
// - Title: edit each `title` field in the `products` array.
// - Description: edit each `description` field in the `products` array.
// - Image: update each `image` field to files in `public/images/`.
