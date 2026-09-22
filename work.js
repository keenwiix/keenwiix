// ============================================
// WORK / PORTFOLIO
// ============================================

(function () {
    'use strict';

    const projects = [
        {
            id: 1,
            slug: 'digital-banking-platform',
            title: 'Digital Banking Platform',
            category: 'design',
            year: '2026',
            description: 'Modern banking experience focused on financial wellness and user empowerment.',
            tags: ['UX Research', 'UI Design'],
            thumbnail: 'images/projects/project-1.jpg',
            link: 'work-detail-banking.html'
        },
        {
            id: 2,
            slug: 'health-wellness-app',
            title: 'Health & Wellness App',
            category: 'design',
            year: '2025',
            description: 'User-centered design for mental health and wellbeing tracking.',
            tags: ['UX Research', 'UI Design'],
            thumbnail: 'images/projects/project-2.jpg',
            link: 'work-detail-health.html'
        },
        {
            id: 3,
            slug: 'ecommerce-platform',
            title: 'E-Commerce Platform',
            category: 'development',
            year: '2025',
            description: 'Full-stack e-commerce solution with modern architecture and elegant UI.',
            tags: ['Frontend', 'React'],
            thumbnail: 'images/projects/project-3.jpg',
            link: 'work-detail-ecommerce.html'
        },
        {
            id: 4,
            slug: 'design-system',
            title: 'Design System',
            category: 'design',
            year: '2024',
            description: 'Scalable design system for enterprise applications with 80+ components.',
            tags: ['Design Tokens', 'Components'],
            thumbnail: 'images/projects/project-4.jpg',
            link: 'work-detail-design-system.html'
        },
        {
            id: 5,
            slug: 'portfolio-website',
            title: 'Portfolio Website',
            category: 'development',
            year: '2024',
            description: 'Personal portfolio built from scratch with modern design and animations.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            thumbnail: 'images/projects/project-5.jpg',
            link: 'work-detail-portfolio.html'
        },
        {
            id: 6,
            slug: 'ux-research-study',
            title: 'UX Research Study',
            category: 'research',
            year: '2024',
            description: 'Comprehensive UX research for a healthcare application with 40+ interviews.',
            tags: ['User Interviews', 'Surveys'],
            thumbnail: 'images/projects/project-6.jpg',
            link: 'work-detail-research.html'
        }
    ];

    const buildProjectCard = (project, index) => `
        <article class="work-item" data-id="${project.id}">
            <div class="work-thumbnail">
                ${project.thumbnail
                    ? `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />`
                    : `<div class="placeholder">Project ${String(index + 1).padStart(2, '0')}</div>`
                }
            </div>
            <div class="work-info">
                <div class="meta">
                    <span class="number">${String(index + 1).padStart(2, '0')}</span>
                    <span class="category">${project.tags.slice(0, 2).join(' · ')}</span>
                </div>
                <h3>${project.title}</h3>
                <p class="desc">${project.description}</p>
                <a href="${project.link}" class="view-link">
                    View case study <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `;

    const renderProjects = (containerId, filter = 'all') => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filtered = filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);

        container.innerHTML = filtered.map((p, i) => buildProjectCard(p, i)).join('');

        if (window.animateOnScroll) {
            const newItems = container.querySelectorAll('.work-item');
            newItems.forEach((el, index) => {
                const delay = (index % 4) * 0.1;
                el.style.transitionDelay = `${delay}s`;
            });
            window.animateOnScroll(newItems);
        }
    };

    const renderPreview = () => {
        const container = document.getElementById('workGrid');
        if (!container) return;

        const preview = projects.slice(0, 3);
        container.innerHTML = preview.map((p, i) => buildProjectCard(p, i)).join('');

        if (window.animateOnScroll) {
            window.animateOnScroll(container.querySelectorAll('.work-item'));
        }
    };

    const initFilters = () => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        if (!filterBtns.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects('workGridFull', btn.dataset.filter);
            });
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        renderPreview();
        renderProjects('workGridFull', 'all');
        initFilters();
    });
})();