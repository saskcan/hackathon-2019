
// pseudocode
function select(region) {
    const index = regions.indexOf(region);
    const selected = document.querySelector('[data-region="'+index+'"]);
    // hide all the charts
    // todo add the "hidden" class
    show the selected ones:
    selected.forEach(selected => selected.classList.remove("hidden");
}

// control image map clicks
$('area').on('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
