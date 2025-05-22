document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');

    // Function to open the modal
    function showModal() {
        if (modal) {
            modal.showModal();
            document.body.classList.add('modal-open');
        }
    }

    // Function to close the modal
    function closeModal() {
        if (modal) {
            modal.close();
            document.body.classList.remove('modal-open');
        }
    }

    // Remove modal-open class when modal is closed by any means
    if (modal) {
        modal.addEventListener('close', () => {
            document.body.classList.remove('modal-open');
        });
    }

    // Close modal on ESC key press
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.open) {
            closeModal();
        }
    });

    // Expose showModal function globally if needed
    window.showModal = showModal;
});
