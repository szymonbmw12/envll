const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    answer.classList.toggle("active");
    
    icon.classList.toggle("fa-plus-circle");
    icon.classList.toggle("fa-minus-circle");
  });
});
