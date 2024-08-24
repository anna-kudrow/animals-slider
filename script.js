// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const nextBtn = document.querySelector(".button-next");
const prevBtn = document.querySelector(".button-prev");

const slides = document.querySelectorAll(".slider__item");

nextBtn.addEventListener("click", () => {
  for (const slide of slides) {
    if (slide.classList.contains("slide__active")) {
      slide.classList.remove("slide__active");
      if (slide.nextElementSibling) {
        slide.nextElementSibling.classList.add("slide__active");
      } else {
        slides[0].classList.add("slide__active");
      }
      return;
    }
  }
});
