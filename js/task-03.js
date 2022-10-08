const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images
.map(image => `<li class="gallery__item">
<img class="gallery__image" src="${image.url}" alt="${image.alt}"/>
</li>`)
.join("");

const ulGalleryRef = document.querySelector(".gallery");
const headRef = document.querySelector("head");

ulGalleryRef.insertAdjacentHTML("afterbegin", markup);

const markupStyles = `
<style>
       .gallery {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      } 

       .galery__item {
        min-width: 300px;
        min-height: 200px;
      } 

      .gallery__item + .gallery__item {
      margin-left: 20px;
      }

      .gallery__image {
       display: block;  
       width: 100%;
       height: 100%; 
       object-fit: cover;      
      }

    </style>
`;

headRef.insertAdjacentHTML("beforeend", markupStyles);


