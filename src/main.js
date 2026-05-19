import "./styles.css";

const products = [
  {
    id: 1,
    title: "Extra Wide Crew Socks",
    benefit: "Designed for wide feet",
    description:
      "Soft ring-spun cotton socks with a non-binding fit, superior stretch, and extra room through the foot and ankle.",
    link: "https://amzn.to/3OTcD1X",
    image: "/images/sockspng.png",
    alt: "Comfort socks product image"
  },
  {
    id: 2,
    title: "Wrangler Comfort Flex Waist Relaxed Fit Jean",
    benefit: "Comfortable room through the leg",
    description:
      "A relaxed-fit jean with a comfort flex waistband that makes everyday wear easier and more comfortable.",
    link: "https://amzn.to/3P6S4PC",
    image: "/images/jeans.png",
    alt: "Jeans product image"
  },
  {
    id: 3,
    title: "Champion Heavyweight Fleece Zip-Up Hoodie",
    benefit: "Reliable cold-weather layer",
    description:
      "A warm heavyweight zip-up hoodie with soft fleece lining, built for comfort, layering, and extended size availability.",
    link: "https://amzn.to/4cSvoMU",
    image: "/images/hoodie.png",
    alt: "Hoodie product image"
  },
  {
    id: 4,
    title: "Dickies Dri-Tech Moisture Control Crew Socks",
    benefit: "Everyday athletic comfort",
    description:
      "Crew-length athletic socks with moisture control and a dependable fit for daily wear, walking, or work.",
    link: "https://amzn.to/40wqTQO",
    image: "/images/wsocks.png",
    alt: "Warm socks product image"
  },
  {
    id: 5,
    title: "Brown Steel Toe Work Boots",
    benefit: "Reliable cold-weather layer",
    description:
      "Protective steel toe work boots designed for durability, support, and everyday jobsite wear.",
    link: "https://amzn.to/3ZYcxZl",
    image: "/images/boots.png",
    alt: "Boots product image"
  },
  {
    id: 6,
    title: "Dickies Long Sleeve Heavyweight Crew Neck",
    benefit: "Better sleeve coverage",
    description:
      "A sturdy heavyweight long sleeve shirt that works well on its own or as a dependable everyday layer.",
    link: "https://amzn.to/3P8PZ5G",
    image: "/images/longsleeve.png",
    alt: "Long sleeve product image"
  },
  {
    id: 7,
    title: "IZOD Performance Comfort Plaid Button Down",
    benefit: "Easy fit for taller frames",
    description:
      "A polished long sleeve button-down with big and tall sizing, made for better comfort and cleaner everyday wear.",
    link: "https://amzn.to/4qXMBrF",
    image: "/images/buttonup.png",
    alt: "Button up shirt product image"
  },
  {
    id: 8,
    title: "Carhartt Dearborn Loose Fit Long Sleeve T-Shirt",
    benefit: "Durable everyday staple",
    description:
      "A heavyweight long sleeve pocket tee with a loose fit, built for durability, comfort, and consistent everyday wear.",
    link: "https://amazon.com/Carhartt-Workwear-T-Shirt-Midweight-Original/dp/B002GHC1Q6?linkCode=ll2&tag=mywebsi03fc26-20",
    image: "/images/carharttshirt.png",
    alt: "Carhartt long sleeve shirt product image"
  },
  {
    id: 9,
    title: "IZOD Performance Comfort Plaid Button Down",
    benefit: "Classic long-sleeve option",
    description:
      "A comfortable plaid button-down in big and tall sizing that works well for everyday outfits or casual dinners out.",
    link: "https://amzn.to/4slEtT6",
    image: "/images/plaid.png",
    alt: "Plaid shirt product image"
  },
  {
    id: 10,
    title: "Curated Amazon Pick",
    benefit: "Easy fit for taller frames",
    description:
      "A dependable everyday option with sizing options suited for bigger builds. Update title and image when ready.",
    link: "https://amzn.to/4e9XjbT",
    image: "/images/whiteshoes.png",
    alt: "White shoes product image"
  },
  {
    id: 11,
    title: "Curated Amazon Pick",
    benefit: "Practical everyday wear",
    description:
      "A practical pick chosen for comfort and fit. Update title and image when ready.",
    link: "https://amzn.to/4tzL4uf",
    image: "/images/wshortsleeve.png",
    alt: "White short sleeve shirt product image"
  },
  {
    id: 12,
    title: "Dickies Men's Big & Tall Heavyweight Crew Neck Tee",
    benefit: "Reliable everyday workwear",
    description:
      "A 100% heavyweight cotton pocket tee with a relaxed fit, chest pocket, and long tail—available in big and tall sizes for dependable everyday and jobsite wear.",
    link: "https://www.amazon.com/Dickies-Heavyweight-Short-Sleeve-Smoke/dp/B0821M2ZBN?crid=2SMANWYDSXHXT&dib=eyJ2IjoiMSJ9.tv6KxeblXt5NeVT6N5cn-iuu89iu1xyw9Xo6vQ90n7jApLJ5M9tyijSGnKujN9RdxZ0nLcgq7wbeZskRhTymqZYMAVzFjAyoVKz903k0Q6UqlAJpWUMRl8S4Y42bf_J8Ul3XqhwxGy8hM1cs6-CvKddUpuLL18by6UoNsggy62AgLijn1FY229DEOLEMYJe_1JijwS5QNG7wR-USrrcrDE_B3v4k1brk6R5TQtKdMuT0zCBguPTOpXmcWOukQy4Rcrlk-nwMV8S5mlhXKg9qCol6npjo_qcdDnMWzG3USTk.QL02ICkpXW9s0kK7y3gO57FFnuXYqvlULbuwel5IDjU&dib_tag=se&keywords=dickie%2Bwork%2Bt%2Bshirts%2Bfor%2Bmen%2Bshort%2Bsleeve&nsdOptOutParam=true&qid=1779144328&sprefix=Dickie%27s%2Bshort%2Bsleeve%2Bwork%2Bt%2Caps%2C377&sr=8-1&th=1&linkCode=sl2&tag=mywebsi03fc26-20&linkId=b5f32a85d56b004a85605bb9500cea0a&language=en_US&ref_=as_li_ss_tl&psc=1",
    image: "/images/dickiesshirt.png",
    alt: "Dickies heavyweight short sleeve shirt product image"
  },
  {
    id: 13,
    title: "Dickies Relaxed Fit Heavyweight Carpenter Jeans",
    benefit: "Comfortable room through the leg",
    description:
      "Relaxed-fit carpenter jeans with a heavyweight feel, made for durability, movement, and everyday jobsite wear.",
    link: "https://www.dickies.com/en-us/products/relaxed-fit-heavyweight-carpenter-jeans-dk001993snb",
    buttonLabel: "Shop on Dickies",
    showCommissionNote: false,
    image: "/images/bluejeans.png",
    alt: "Dickies carpenter jeans product image"
  },
  {
    id: 14,
    title: "Skechers Work Relaxed Fit: Cessnock",
    benefit: "Built for long work days",
    description:
      "A relaxed-fit work shoe designed for comfort, support, and steady wear through long shifts on your feet.",
    link: "https://www.skechers.com/work-relaxed-fit-cessnock/77188W_BLK.html",
    buttonLabel: "Shop on Skechers",
    showCommissionNote: false,
    image: "/images/sketchers.png",
    alt: "Skechers work shoe product image"
  },
  {
    id: 15,
    title: "Stafford Big and Tall Smart Tech Dress Shirt",
    benefit: "Polished everyday option",
    description:
      "A wrinkle-free stretch dress shirt with regular fit styling, made for cleaner everyday and dress-casual wear.",
    link: "https://www.jcpenney.com/p/stafford-big-and-tall-smart-tech-mens-regular-fit-stretch-fabric-wrinkle-free-long-sleeve-dress-shirt/ppr5008400328?pTmplType=regular&searchTerm=Big+and+Tall+dress+shirt&geoZip=84782",
    buttonLabel: "Shop on JCPenney",
    showCommissionNote: false,
    image: "/images/stafford.png",
    alt: "Stafford big and tall dress shirt product image"
  },
  {
    id: 16,
    title: "St. John's Bay Big and Tall Polo Shirt",
    benefit: "Easy casual staple",
    description:
      "A classic-fit short sleeve polo with stretch comfort, designed for easy everyday outfits in big and tall sizes.",
    link: "https://www.jcpenney.com/p/st-johns-bay-premium-stretch-big-and-tall-mens-classic-fit-short-sleeve-polo-shirt/ppr5008392017?pTmplType=regular&searchTerm=Big+and+Tall&geoZip=84782",
    buttonLabel: "Shop on JCPenney",
    showCommissionNote: false,
    image: "/images/products/polo.png",
    alt: "St John's Bay big and tall polo product image"
  },
  {
    id: 17,
    title: "St. John's Bay Big and Tall Microfleece Pajama Pants",
    benefit: "Comfortable off-duty wear",
    description:
      "Soft microfleece pajama pants with an easy fit, made for relaxed comfort at home in big and tall sizing.",
    link: "https://www.jcpenney.com/p/st-johns-bay-mens-big-and-tall-microfleece-pajama-pants/ppr5008522926?pTmplType=regular&searchTerm=Big+and+Tall+pajama+pants&geoZip=84782",
    buttonLabel: "Shop on JCPenney",
    showCommissionNote: false,
    image: "/images/pajamas.png",
    alt: "Big and tall pajama pants product image"
  },
  {
    id: 18,
    title: "Gold Toe Harrington Big and Tall Crew Socks (6 Pair)",
    benefit: "Designed for wide feet",
    description:
      "A six-pair crew sock pack with dependable everyday comfort and sizing made for bigger builds.",
    link: "https://www.jcpenney.com/p/gold-toe-harrington-mens-6-pair-big-and-tall-crew-socks/pp5008150180?pTmplType=regular&searchTerm=Big+and+Tall+socks&geoZip=84782",
    buttonLabel: "Shop on JCPenney",
    showCommissionNote: false,
    image: "/images/socksgold.png",
    alt: "Gold Toe big and tall crew socks product image"
  }
];

const productsGrid = document.querySelector("#products-grid");
const yearEl = document.querySelector("#year");

function isAmazonLink(link) {
  return link.includes("amzn.to") || link.includes("amazon.com");
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card reveal";

  const buttonLabel = product.buttonLabel ?? "Check Price on Amazon";
  const rel = isAmazonLink(product.link) ? "noopener noreferrer sponsored" : "noopener noreferrer";
  const showCommissionNote =
    product.showCommissionNote !== false && isAmazonLink(product.link);

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
        rel="${rel}"
        aria-label="${buttonLabel} for ${product.title}"
      >
        ${buttonLabel}
      </a>
      ${showCommissionNote ? "<small>Purchases may earn a commission.</small>" : ""}
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
// - buttonLabel: set retailer-specific CTA text (defaults to Amazon wording).
