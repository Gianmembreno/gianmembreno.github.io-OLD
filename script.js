const countEl = document.getElementById("count");

updateVisitCount();

function updateVisitCount() {
  fetch(
    "https://api.countapi.xyz/get/gianmembreno.com/167e01d9-9353-4407-8383-d38e1ca99908/?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}
