function customSearch() {
    // declare variables
    var input, filter, a;
    input = document.getElementById('search');
    filter = search.value.toLowerCase();
    // find anchor elements
    a = document.querySelectorAll('a');
    
    for(i=0;i<a.length;i++) {
        // hide everything
        a[i].classList.add('is-hidden')
    
        // console.log(a[i].dataset.caption.includes(filter))
        // if data-caption = search value > un-hide
        if(a[i].dataset.caption.toLowerCase().includes(filter)) {
            a[i].classList.remove('is-hidden');
        }
    }
}