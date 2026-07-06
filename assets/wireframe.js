    // Highlight active nav tab
    document.querySelectorAll('input[name="wireframe"]').forEach(radio => {

        radio.addEventListener('change', function() {

            document.querySelectorAll('.nav-tabs label').forEach(label => {

                label.classList.remove('active-radio');

            });

            const id = this.id;

            document.querySelectorAll('.nav-tabs label').forEach(label => {

                if (label.getAttribute('for') === id) {

                    label.classList.add('active-radio');

                }

            });

        });
        
    });
    document.querySelector('label[for="page-home"]').classList.add('active-radio');
