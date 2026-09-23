import { databaseGunung, databaseRiwayat } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const pageHero = document.getElementById('pageHero');
    const pageTrips = document.getElementById('pageTrips');
    const pageDetails = document.getElementById('pageDetails');
    
    const tripsContainer = document.getElementById('tripsContainer');
    const tripHistoryContainer = document.getElementById('tripHistoryContainer');
    const detailsTitle = document.querySelector('.details-title');
    const tripsSubTitle = document.getElementById('tripsSubTitle');

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    let currentRegion = "JAWA TIMUR";

    const gmapsIcon = `
        <svg class="gmaps-icon" viewBox="0 0 24 24" width="16" height="22" aria-hidden="true">
            <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74L12 22l4-7.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z"/>
            <path fill="#4285F4" d="M12 2c3.87 0 7 3.13 7 7 0 2.38-1.19 4.47-3 5.74L12 22V2z"/>
            <path fill="#FBBC04" d="M5 9c0 2.38 1.19 4.47 3 5.74L12 22V9H5z"/>
            <path fill="#34A853" d="M12 22l4-7.26C17.81 13.47 19 11.38 19 9H12v13z"/>
            <circle cx="12" cy="9" r="2.8" fill="#FFFFFF"/>
        </svg>
    `;

    // 1. Render Daftar Gunung
    function renderGunung(wilayah) {
        currentRegion = wilayah.toUpperCase();
        if (tripsSubTitle) tripsSubTitle.textContent = currentRegion;
        if (!tripsContainer) return;
        
        const listGunung = databaseGunung[currentRegion] || [];

        if (listGunung.length === 0) {
            tripsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-mountain-sun" aria-hidden="true"></i>
                    <p>Belum ada data gunung untuk wilayah ${currentRegion}.</p>
                </div>
            `;
            return;
        }

        tripsContainer.innerHTML = listGunung.map(gunung => {
            const kota = gunung.lokasi ? gunung.lokasi.split(',')[0].trim() : '-';
            const rankBadge = gunung.rank ? `<div class="rank-badge" aria-label="Peringkat ${gunung.rank}">${gunung.rank}</div>` : '';
            const isSummitted = gunung.status === 'y';
            const statusIconPath = isSummitted ? 'image/label/centang.png' : 'image/label/silang.png';
            
            return `
                <div class="trip-card-wrapper">
                    <div class="status-badge ${isSummitted ? 'summitted' : 'not-summitted'}" title="${isSummitted ? 'Sudah Didaki' : 'Belum Didaki'}">
                        <img src="${statusIconPath}" alt="${isSummitted ? 'Sudah Didaki' : 'Belum Didaki'}" class="status-img">
                    </div>
                    
                    <article class="trip-card">
                        <div class="trip-img btn-open-details" data-id="${gunung.id}" role="button" tabindex="0" aria-label="Lihat detail gunung ${gunung.nama}">
                            ${rankBadge}
                            <img src="${gunung.gambar}" alt="Gunung ${gunung.nama}" loading="lazy">
                            <div class="trip-info">
                                <div class="title-badge">
                                    <h2 class="trip-title">${gunung.nama}</h2>
                                </div>
                            </div>
                        </div>
                        
                        <div class="trip-bottom-bar">
                            <a href="${gunung.linkMaps || '#'}" target="_blank" rel="noopener noreferrer" class="trip-location-badge">
                                <span class="loc-icon">${gmapsIcon}</span>
                                <span class="loc-city">${kota}</span>
                            </a>
                            <div class="trip-mdpl-card">
                                <span class="mdpl-text">${gunung.mdpl || '-'}</span>
                            </div>
                        </div>
                    </article>
                </div>
            `;
        }).join('');

        // Event listener klik & keyboard kartu gunung
        document.querySelectorAll('.btn-open-details').forEach(card => {
            const openDetails = () => {
                const idGunung = card.getAttribute('data-id');
                window.location.hash = `details?id=${idGunung}`;
            };

            card.addEventListener('click', openDetails);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openDetails();
                }
            });
        });
    }

    // 2. Render Riwayat Pendakian
    function renderRiwayat(idGunung) {
        if (!tripHistoryContainer) return;
        
        const gunungFound = Object.values(databaseGunung).flat().find(g => g.id === idGunung);
        const namaGunung = gunungFound ? gunungFound.nama : "";

        if (detailsTitle) {
            detailsTitle.textContent = namaGunung ? `Riwayat Pendakian - ${namaGunung}` : "Detail Pendakian";
        }

        const listRiwayat = databaseRiwayat[idGunung];

        if (!listRiwayat || listRiwayat.length === 0) {
            tripHistoryContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-person-hiking" aria-hidden="true"></i>
                    <p>Belum ada catatan riwayat pendakian untuk gunung ini.</p>
                </div>
            `;
            return;
        }

        tripHistoryContainer.innerHTML = listRiwayat.map(item => {
            const photosHTML = item.foto.map(imgUrl => `
                <div class="photo-card preview-trigger" role="button" tabindex="0" aria-label="Perbesar foto pendakian">
                    <img src="${imgUrl}" alt="Dokumentasi pendakian ${namaGunung}" onerror="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'">
                    <div class="photo-overlay"><i class="fa-solid fa-magnifying-glass-plus" aria-hidden="true"></i></div>
                </div>
            `).join('');

            const viaBadge = item.via ? `
                <div class="trip-via-wrapper">
                    <div class="trip-via-badge">
                        <i class="fa-solid fa-route" aria-hidden="true"></i>
                        <span>Via : ${item.via}</span>
                    </div>
                </div>
            ` : '';

            return `
                <article class="trip-history-item">
                    ${viaBadge}
                    <div class="details-photos-grid">${photosHTML}</div>
                    <div class="details-single-card">
                        <div class="description-box">
                            <p class="description-text">${item.deskripsi}</p>
                        </div>
                        <time class="trip-date" datetime="${item.tanggal}">
                            <i class="fa-regular fa-calendar-days" aria-hidden="true"></i>
                            <span>${item.tanggal}</span>
                        </time>
                    </div>
                </article>
            `;
        }).join('');
    }

    // 3. Routing Berdasarkan Hash URL
    function handleRouting() {
        const hash = window.location.hash || '#home';
        
        [pageHero, pageTrips, pageDetails].forEach(page => page?.classList.remove('active-page'));
        window.scrollTo({ top: 0, behavior: 'instant' });

        if (hash.startsWith('#trips')) {
            const urlParams = new URLSearchParams(hash.split('?')[1]);
            const region = urlParams.get('region') || 'JAWA TIMUR';
            renderGunung(region);
            pageTrips?.classList.add('active-page');
            document.title = `MDPL ENTHUSIAST - ${region}`;
        } 
        else if (hash.startsWith('#details')) {
            const urlParams = new URLSearchParams(hash.split('?')[1]);
            const id = urlParams.get('id');
            renderRiwayat(id);
            pageDetails?.classList.add('active-page');
            document.title = `MDPL ENTHUSIAST - Detail Pendakian`;
        } 
        else {
            pageHero?.classList.add('active-page');
            document.title = `MDPL ENTHUSIAST`;
        }
    }

    // Event Listeners Navigasi
    window.addEventListener('hashchange', handleRouting);
    
    document.querySelectorAll('.region-card').forEach(card => {
        card.addEventListener('click', () => {
            const region = card.getAttribute('data-region');
            window.location.hash = `trips?region=${encodeURIComponent(region)}`;
        });
    });

    document.getElementById('btnBackToHome')?.addEventListener('click', () => window.location.hash = 'home');
    document.getElementById('btnBackToTrips')?.addEventListener('click', () => window.location.hash = `trips?region=${encodeURIComponent(currentRegion)}`);

    // Modal Preview Gambar Event
    const openModal = (trigger) => {
        const imgElement = trigger.querySelector('img');
        if (imgElement && imageModal && modalImage) {
            modalImage.src = imgElement.src;
            modalImage.alt = imgElement.alt;
            imageModal.showModal();
        }
    };

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.preview-trigger');
        if (trigger) openModal(trigger);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const trigger = e.target.closest('.preview-trigger');
            if (trigger) {
                e.preventDefault();
                openModal(trigger);
            }
        }
    });

    modalClose?.addEventListener('click', () => imageModal.close());
    imageModal?.addEventListener('click', (e) => {
        if (e.target === imageModal) imageModal.close();
    });

    // Inisialisasi Aplikasi
    handleRouting();
});