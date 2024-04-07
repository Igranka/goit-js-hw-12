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
const loadMore = document.querySelector(".load-more-button");

const modal = new SimpleLightbox(".gallery-link", {
    captionsData: "alt",
    captionDelay: 250,
});

let inputTrimmed;
let page = 1;
let maxPage = 0;
const pageVolume = 15;
let imageData;

form.addEventListener('submit', submit);
loadMore.addEventListener('click', load);

async function submit(event) {
  event.preventDefault();
  loader.classList.add("is-open");
  gallery.innerHTML = "";
  modal.refresh();

  inputTrimmed = input.value.trim();
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
  page = 1;

  try {
    imageData = await http(inputTrimmed, page);
    maxPage = Math.ceil(imageData.totalHits / pageVolume);

    if (imageData.hits.length === 0) {
      loader.classList.remove("is-open");
      loadMore.classList.remove("is-open");
        return iziToast.info({
            color: '#EF4040',
            progressBarColor: 'rgb(181, 27, 27)',
            messageColor: '#FFFFFF',
            message:'Image limit reached',
            position: 'topRight',
      });
    }

    imageCard(imageData.hits);
  } catch (error) {
    console.error(error);
  } finally {
    loader.classList.remove("is-open");
  }
  loader.classList.remove("is-open");
  input.value = '';
}

async function load(event) {
  loader.classList.add("is-open");
  page += 1;

  try {
    imageData = await http(inputTrimmed, page);
    imageCard(imageData.hits);
  } catch (error) {
    console.error(error);
  } finally {
    loader.classList.remove("is-open");
    hideButton();
    
    //   Smooth scrolling
  const countCards = 2;
  const height = gallery.firstElementChild.getBoundingClientRect().height * countCards;
  scrollBy({
    top: height,
    behavior: 'smooth',
  });
  }
}

function hideButton() {
  if (page >= maxPage) {
    loadMore.classList.remove("is-open");
      return iziToast.show({
      color: '#EF4040',
      progressBarColor: 'rgb(181, 27, 27)',
      messageColor: '#FFFFFF',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    loadMore.classList.add("is-open");
  }
}
