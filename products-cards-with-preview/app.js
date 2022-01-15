const previewContainer = document.querySelector('.products-preview');
const allPreviews = document.querySelectorAll('.preview');
const allProducts = document.querySelectorAll('.product');

allProducts.forEach(product => {
    product.addEventListener('click', () => {
        const productName = product.getAttribute('data-name');
        allPreviews.forEach(preview => {
            const previewProductName = preview.getAttribute('data-target');
            if(productName === previewProductName){
                previewContainer.style.display = 'flex';
                preview.classList.add('active');
            }
        });
    });
});

allPreviews.forEach(preview => {
    preview.querySelector('.fa-times').onclick = () =>{
        preview.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});