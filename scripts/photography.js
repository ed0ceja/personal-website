// Photography page JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Gallery filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter photos
            photoItems.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Photo modal functionality
    const modal = createPhotoModal();
    document.body.appendChild(modal);

    photoItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            const info = this.querySelector('.photo-info');

            if (img && info) {
                const title = info.querySelector('h4').textContent;
                const location = info.querySelector('p').textContent;

                openPhotoModal(img.src, title, location);
            }
        });

        // Add hover animations
        item.addEventListener('mouseenter', function () {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function () {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });

    // Masonry layout adjustment
    adjustMasonryLayout();
    window.addEventListener('resize', adjustMasonryLayout);

    // Lazy loading for images
    setupLazyLoading();
});

// Create photo modal
function createPhotoModal() {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-backdrop">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img class="modal-image" src="" alt="">
                <div class="modal-info">
                    <h3 class="modal-title"></h3>
                    <p class="modal-location"></p>
                </div>
                <div class="modal-nav">
                    <button class="modal-prev">‹</button>
                    <button class="modal-next">›</button>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .photo-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
        }

        .modal-backdrop {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .modal-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .modal-image {
            max-width: 100%;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 10px;
        }

        .modal-close {
            position: absolute;
            top: -50px;
            right: 0;
            background: none;
            border: none;
            color: #fff;
            font-size: 2rem;
            cursor: pointer;
            z-index: 2001;
        }

        .modal-info {
            text-align: center;
            margin-top: 1rem;
        }

        .modal-title {
            color: #fff;
            margin-bottom: 0.5rem;
        }

        .modal-location {
            color: #ccc;
        }

        .modal-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            pointer-events: none;
        }

        .modal-prev, .modal-next {
            background: rgba(0, 0, 0, 0.5);
            border: none;
            color: #fff;
            font-size: 2rem;
            padding: 1rem;
            cursor: pointer;
            border-radius: 50%;
            pointer-events: all;
            transform: translateY(-50%);
        }

        .modal-prev:hover, .modal-next:hover {
            background: rgba(0, 0, 0, 0.8);
        }
    `;
    document.head.appendChild(modalStyles);

    // Add event listeners
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');

    closeBtn.addEventListener('click', () => closePhotoModal(modal));
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            closePhotoModal(modal);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closePhotoModal(modal);
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto(-1);
            } else if (e.key === 'ArrowRight') {
                navigatePhoto(1);
            }
        }
    });

    return modal;
}

// Open photo modal
function openPhotoModal(src, title, location) {
    const modal = document.querySelector('.photo-modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalLocation = modal.querySelector('.modal-location');

    modalImage.src = src;
    modalTitle.textContent = title;
    modalLocation.textContent = location;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close photo modal
function closePhotoModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigate between photos
function navigatePhoto(direction) {
    // Implementation for photo navigation
    console.log('Navigate photo:', direction);
}

// Adjust masonry layout
function adjustMasonryLayout() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    // Simple masonry-like layout adjustment
    const items = grid.querySelectorAll('.photo-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Setup lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('.photo-item img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in-out';

                img.onload = () => {
                    img.style.opacity = '1';
                };

                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Add CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .photo-item {
        animation: fadeIn 0.6s ease-in-out;
    }

    .photo-item img {
        transition: transform 0.3s ease-in-out;
    }
`;
document.head.appendChild(animationStyles); 