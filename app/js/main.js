$(function (){

    const modal = document.getElementById("js-model");
    const btnOpen = document.getElementById("js-model-btn-open");
    const btnClose = document.getElementById("js-model-btn-close");

    btnOpen.addEventListener('click', function() {
        modal.classList.add('active');
    });

    btnClose.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });

});

$(".form-reg__select").select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Country',
    width: 'resolve',
});
