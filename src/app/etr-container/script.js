document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-box');
    
    form.addEventListener('click', function(event) {
        const target = event.target;
        const inputs = form.querySelectorAll('input[required]');
        
        if (!target.closest('input')) {
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    alert('This field is required');
                    input.focus();
                }
            });
        }
    });
});
