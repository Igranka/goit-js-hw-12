import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector('ul.gallery');
export function imageCard (images) {
      const card = images
    .map(
        image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
            <ul class="data">
                <li>
                    <p>Likes ${image.likes}</p>
                </li>
                <li>
                    <p>Views ${image.views}</p>
                </li>
                <li>
                    <p>Comments ${image.comments}</p>
                </li>
                <li>
                    <p>Downloads ${image.downloads}</p>
                </li>
            </ul>
        </a>
    </li>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", card);

    // Modal
    const modal = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionsDelay: 250,
    });

}

