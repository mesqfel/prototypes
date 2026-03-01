'use strict';

/* ===== HAMBURGER MENU ===== */
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.getElementById('mainNav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
            var expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!expanded));
        });

        // Close menu when clicking a nav link
        nav.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

/* ===== ACCORDION (Services page) ===== */
function toggleAccordion(el) {
    var accordion = el.parentElement;
    var isOpen = accordion.classList.contains('open');
    // Close all accordions
    document.querySelectorAll('.accordion.open').forEach(function (a) {
        a.classList.remove('open');
    });
    // Toggle clicked one (only open if it was closed)
    if (!isOpen) {
        accordion.classList.add('open');
    }
}

/* ===== PRODUCT FILTER (Products page) ===== */
function filterProducts(btn, category) {
    document.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    document.querySelectorAll('.product-card').forEach(function (card) {
        if (category === 'todos' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
