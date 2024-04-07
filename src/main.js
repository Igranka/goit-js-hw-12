import "./js/pixabay-api";
import { http } from "./js/pixabay-api";
import "./js/render-function";
import { imageCard } from "./js/render-function";
import { gallery } from "./js/render-function";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const input = document.querySelector("input");
const loader = document.querySelector(".loader");

    const modal = new SimpleLightbox(".gallery-link", {
    captionsData: "alt",
    captionDelay: 250,
    });

form.addEventListener("submit", event => {
  event.preventDefault();
  loader.classList.add("is-open");
  gallery.innerHTML = "";
  modal.refresh();
  const inputTrimmed = input.value.trim();
  if (inputTrimmed === "") {
    loader.classList.remove("is-open");
    return iziToast.show({
        color: '#EF4040',
        progressBarColor: 'rgb(181, 27, 27)',
        messageColor: '#FFFFFF',
        message: `Please enter a valid value`,
        position: 'topRight',
    });
    }
    
  http(inputTrimmed)
    .then(response => {
      if (response.hits.length === 0) {
        return iziToast.show({
          color: '#EF4040',
          progressBarColor: 'rgb(181, 27, 27)',
          messageColor: '#FFFFFF',
          message: "Sorry! There are no images matching your search query. Please try again!",
          position: "topRight",
        });
      }
      imageCard(response.hits);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => loader.classList.remove("is-open"));
    input.value = "";
});
