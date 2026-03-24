/* ============================================================
   MAYGOURMET — Effets visuels (effects.js)
   ============================================================ */

/* ── Thèmes sauvegardés : appliqués IMMÉDIATEMENT ─────────── */
(function () {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    var savedColor = localStorage.getItem('colorTheme');
    if (savedColor) {
        document.documentElement.setAttribute('data-color', savedColor);
    }
})();

/* ════════════════════════════════════════════════════════════
   MODAL — Fonction globale pour ouvrir la modal de suppression
   (doit être globale car appelée via onclick="..." dans le HTML)
   ════════════════════════════════════════════════════════════ */

// Fonction appelée par onclick="ouvrirModalSuppression('id')" dans equipe.ejs
function ouvrirModalSuppression(id) {
    // Stocker l'id du membre concerné
    idMembreASupprimer = id;
    // Ouvrir la modal
    var modal = document.getElementById("modalSupprimer");
    if (modal) {
        modal.style.display = "block";
    }
}

// Variable globale partagée avec le bloc DOMContentLoaded
var idMembreASupprimer = null;

/* ════════════════════════════════════════════════════════════
   MODAL MODIFIER — Fonction globale (appelée via onclick="...")
   Reçoit le bouton cliqué, lit ses data-* et pré-remplit le formulaire
   ════════════════════════════════════════════════════════════ */
function ouvrirModalModification(btn) {
    // Je lis les données du membre depuis les attributs data-* du bouton
    document.getElementById('inputIdModif').value      = btn.dataset.id;
    document.getElementById('inputNomModif').value     = btn.dataset.nom;
    document.getElementById('inputTelModif').value     = btn.dataset.telephone;
    document.getElementById('inputPosteModif').value   = btn.dataset.poste;
    document.getElementById('inputEmailModif').value   = btn.dataset.email;
    document.getElementById('inputSalaireModif').value = btn.dataset.salaire;
    document.getElementById('inputDateModif').value    = btn.dataset.date;

    // J'ouvre la modal de modification
    document.getElementById('modalModifier').style.display = 'block';
}

/* ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

    /* ── A / I. Barre de progression du scroll ────────────── */
    var scrollBar = document.getElementById('scroll-progress');
    if (scrollBar) {
        window.addEventListener('scroll', function () {
            var top  = document.documentElement.scrollTop || document.body.scrollTop;
            var max  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollBar.style.width = (max > 0 ? (top / max) * 100 : 0) + '%';
        }, { passive: true });
    }

    /* ── C. Loader de page ────────────────────────────────── */
    var loader = document.getElementById('page-loader');
    if (loader) {
        window.addEventListener('load', function () {
            loader.classList.add('loader-hidden');
            loader.addEventListener('transitionend', function () { loader.remove(); });
        });
        setTimeout(function () {
            if (loader && loader.parentNode) loader.classList.add('loader-hidden');
        }, 3000);
    }

    /* ── D. Scroll Reveal ─────────────────────────────────── */
    var revealEls = document.querySelectorAll('.scroll-reveal');
    if (revealEls.length > 0) {
        if ('IntersectionObserver' in window) {
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry, i) {
                    if (entry.isIntersecting) {
                        setTimeout(function () { entry.target.classList.add('visible'); }, i * 90);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            revealEls.forEach(function (el) { obs.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add('visible'); });
        }
    }

    /* ════════════════════════════════════════════════════════
       MODAL BOXES — JavaScript (structure identique à l'exemple du cours)
       ════════════════════════════════════════════════════════ */

    /* ── MODAL 1 : Modal d'information (page Accueil) ─────── */

    // récupérer le modal
    var modal = document.getElementById("myModal");

    // récuperer le boutton qui ouvre le modal
    var btn = document.getElementById("myBtn");

    // récupere le span qui ferme le modal
    var span = modal ? modal.getElementsByClassName("close")[0] : null;

    // quand l'utilisateur clique sur le boutton (), ouvre le modal
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // quand l'utilisateur clique sur le span (x), ferme le modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    /* ── MODAL 3 : Modal d'ajout d'un membre (page Équipe) ──── */

    // récuperer le modal
    var modalAjout = document.getElementById("modalAjout");

    // récuperer le boutton qui ouvre le modal
    var btnAjout = document.getElementById("btnAjout");

    // récuperer le  <span> element qui ferme le modal
    var spanAjout = document.getElementById("closeAjout");

    // récupérer "Annuler" button à l'intérieur du modal
    var btnFermerAjout = document.getElementById("btnFermerAjout");

    // quand l'utilisateur clique sur le boutton, ouvrir le modal
    if (btnAjout) {
        btnAjout.onclick = function() {
            modalAjout.style.display = "block"; 
        }
    }

    // quand l'utilisateur clique sur le <span> (x), fermer le modal
    if (spanAjout) {
        spanAjout.onclick = function() {
            modalAjout.style.display = "none";
        }
    }

    // quand l'utilisateur clique sur "Annuler", fermer le modal
    if (btnFermerAjout) {
        btnFermerAjout.onclick = function() {
            modalAjout.style.display = "none";
        }
    }

    /* ── MODAL 4 : Modal d'ajout d'un fournisseur (page Fournisseur) ── */

    // récuperer le modal
    var modalAjoutFournisseur = document.getElementById("modalAjoutFournisseur");

    // récuperer le boutton qui ouvre le modal
    var btnAjoutFournisseur = document.getElementById("btnAjoutFournisseur");

    // récuperer le <span> element qui ferme le modal
    var spanAjoutFournisseur = document.getElementById("closeAjoutFournisseur");

    // récupérer le bouton "Annuler" à l'intérieur du modal
    var btnFermerAjoutFournisseur = document.getElementById("btnFermerAjoutFournisseur");

    // quand l'utilisateur clique sur le boutton, ouvrir le modal
    if (btnAjoutFournisseur) {
        btnAjoutFournisseur.onclick = function() {
            modalAjoutFournisseur.style.display = "block";
        }
    }

    // quand l'utilisateur clique sur le <span> (x), fermer le modal
    if (spanAjoutFournisseur) {
        spanAjoutFournisseur.onclick = function() {
            modalAjoutFournisseur.style.display = "none";
        }
    }

    // quand l'utilisateur clique sur "Annuler", fermer le modal
    if (btnFermerAjoutFournisseur) {
        btnFermerAjoutFournisseur.onclick = function() {
            modalAjoutFournisseur.style.display = "none";
        }
    }

    // quand l'utilisateur clique en dehors du modal, fermer le modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        // Ferme aussi la modal de suppression si clic en dehors
        if (event.target == modalSupprimer) {
            modalSupprimer.style.display = "none";
        }
        // Ferme aussi la modal d'ajout équipe si clic en dehors
        if (event.target == modalAjout) {
            modalAjout.style.display = "none";
        }
        // Ferme aussi la modal d'ajout fournisseur si clic en dehors
        if (event.target == modalAjoutFournisseur) {
            modalAjoutFournisseur.style.display = "none";
        }
        // Ferme aussi la modal d'ajout plat si clic en dehors
        if (event.target == modalAjoutPlat) {
            modalAjoutPlat.style.display = "none";
        }
        // Ferme aussi la modal de modification si clic en dehors
        if (event.target == modalModifier) {
            modalModifier.style.display = "none";
        }
    }

    /* ── MODAL 6 : Modal de modification d'un membre (page Équipe) ──── */

    // récupérer le modal
    var modalModifier = document.getElementById("modalModifier");

    // récupérer le <span> (x) qui ferme le modal
    var spanModifier = document.getElementById("closeModifier");

    // récupérer le bouton "Annuler"
    var btnFermerModifier = document.getElementById("btnFermerModifier");

    // quand l'utilisateur clique sur le <span> (x), fermer le modal
    if (spanModifier) {
        spanModifier.onclick = function() {
            modalModifier.style.display = "none";
        }
    }

    // quand l'utilisateur clique sur "Annuler", fermer le modal
    if (btnFermerModifier) {
        btnFermerModifier.onclick = function() {
            modalModifier.style.display = "none";
        }
    }

    /* ── MODAL 2 : Modal de confirmation de suppression (page Équipe) ── */

    // Get the modal
    var modalSupprimer = document.getElementById("modalSupprimer");

    // Remarque : idMembreASupprimer est déclarée en variable globale (ligne 33)
    // afin qu'elle soit partagée avec la fonction ouvrirModalSuppression()
    // On ne la redéclare PAS ici pour éviter de masquer la variable globale

    // Get the <span> element that closes the modal
    var spanSupprimer = document.getElementById("closeSupprimer");

    // Get the confirm and cancel buttons
    var btnConfirmer = document.getElementById("btnConfirmerSupprimer");
    var btnAnnuler   = document.getElementById("btnAnnulerSupprimer");

    // When the user clicks on <span> (x), close the modal
    if (spanSupprimer) {
        spanSupprimer.onclick = function() {
            modalSupprimer.style.display = "none";
        }
    }

    // When the user clicks "Oui, supprimer" : appelle supprimer() de script.js
    if (btnConfirmer) {
        btnConfirmer.onclick = function() {
            modalSupprimer.style.display = "none";
            if (idMembreASupprimer !== null) {
                supprimer(idMembreASupprimer); // fonction définie dans script.js
            }
        }
    }

    // When the user clicks "Annuler" : ferme la modal sans rien faire
    if (btnAnnuler) {
        btnAnnuler.onclick = function() {
            modalSupprimer.style.display = "none";
            idMembreASupprimer = null;
        }
    }

    /* ── AU. Ripple thème (helper, défini tôt) ───────────────── */
    var themeRippleEl = document.getElementById('theme-ripple');
    function doThemeRipple(e, applyFn) {
        if (!themeRippleEl) { applyFn(); return; }
        var x = e ? e.clientX : window.innerWidth / 2;
        var y = e ? e.clientY : window.innerHeight / 2;
        /* Reset */
        themeRippleEl.style.transition  = 'none';
        themeRippleEl.style.opacity     = '1';
        themeRippleEl.style.clipPath    = 'circle(0px at ' + x + 'px ' + y + 'px)';
        themeRippleEl.style.display     = 'block';
        /* Double rAF pour garantir que le navigateur a pris le state initial */
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                themeRippleEl.style.transition = 'clip-path 0.44s cubic-bezier(0.4,0,0.2,1)';
                themeRippleEl.style.clipPath   = 'circle(200vmax at ' + x + 'px ' + y + 'px)';
                /* Appliquer le thème quand le ripple couvre l'écran */
                setTimeout(applyFn, 240);
                /* Faire disparaître le ripple */
                setTimeout(function () {
                    themeRippleEl.style.transition = 'opacity 0.32s ease';
                    themeRippleEl.style.opacity    = '0';
                    setTimeout(function () {
                        themeRippleEl.style.display  = 'none';
                        themeRippleEl.style.opacity  = '1';
                        themeRippleEl.style.clipPath = '';
                    }, 340);
                }, 450);
            });
        });
    }

    /* ── F. Dark Mode Toggle ──────────────────────────────── */
    var toggleBtn = document.getElementById('dark-toggle');

    function updateToggleIcon() {
        if (!toggleBtn) return;
        toggleBtn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    }
    updateToggleIcon();

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function (e) {
            var dark = document.documentElement.getAttribute('data-theme') === 'dark';
            doThemeRipple(e, function () {
                if (dark) {
                    document.documentElement.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'light');
                } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                }
                updateToggleIcon();
            });
        });
    }

    /* ── K. Navbar glassmorphisme au scroll ───────────────── */
    var headerEl = document.querySelector('header');
    if (headerEl) {
        window.addEventListener('scroll', function () {
            headerEl.classList.toggle('scrolled', window.pageYOffset > 60);
        }, { passive: true });
    }

    /* ── L. Parallaxe du hero ─────────────────────────────── */
    var heroInner   = document.querySelector('.hero-inner');
    var heroSection = document.querySelector('.hero');
    if (heroInner && heroSection) {
        window.addEventListener('scroll', function () {
            var s = window.pageYOffset;
            if (s < heroSection.offsetHeight + 100) {
                heroInner.style.transform = 'translateY(' + (s * 0.38) + 'px)';
                heroInner.style.opacity   = Math.max(0, 1 - s / 430).toFixed(3);
            }
        }, { passive: true });
    }

    /* ── N. Machine à écrire ──────────────────────────────── */
    var heroP = document.querySelector('.hero-inner p');
    if (heroP) {
        var txt = heroP.textContent.trim();
        heroP.textContent = '';
        heroP.style.minHeight = '3em';
        var ci = 0;
        function typeNext() {
            if (ci < txt.length) { heroP.textContent += txt[ci++]; setTimeout(typeNext, 38); }
        }
        setTimeout(typeNext, 800);
    }

    /* ── P. Bouton magnétique ─────────────────────────────── */
    var magnetBtn = document.querySelector('.hero-btn');
    if (magnetBtn) {
        magnetBtn.addEventListener('mousemove', function (e) {
            var r = this.getBoundingClientRect();
            var x = e.clientX - r.left  - r.width  / 2;
            var y = e.clientY - r.top   - r.height / 2;
            this.style.transition = 'transform 0.1s ease';
            this.style.transform  = 'translate(' + (x * 0.28) + 'px,' + (y * 0.28) + 'px) translateY(-3px)';
        });
        magnetBtn.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.2s';
            this.style.transform  = '';
        });
    }

    /* ── Q. Retour en haut ────────────────────────────────── */
    var backBtn = document.getElementById('back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', function () {
            backBtn.classList.toggle('visible', window.pageYOffset > 320);
        }, { passive: true });
        backBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ── R. Curseur personnalisé ──────────────────────────── */
    var cursor    = document.getElementById('custom-cursor');
    var cursorDot = document.getElementById('cursor-dot');
    if (cursor && cursorDot && !('ontouchstart' in window)) {
        var cx = -100, cy = -100, rx = -100, ry = -100, initiated = false;

        document.addEventListener('mousemove', function (e) {
            if (!initiated) { document.body.classList.add('has-custom-cursor'); initiated = true; }
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top  = e.clientY + 'px';
            cx = e.clientX; cy = e.clientY;
        });

        (function animCursor() {
            rx += (cx - rx) * 0.18;
            ry += (cy - ry) * 0.18;
            cursor.style.left = rx + 'px';
            cursor.style.top  = ry + 'px';
            requestAnimationFrame(animCursor);
        })();

        document.querySelectorAll('a, button, .btn, .card, .hero-card, input[type="button"], input[type="submit"]')
            .forEach(function (el) {
                el.addEventListener('mouseenter', function () { cursor.classList.add('cursor-hover'); });
                el.addEventListener('mouseleave', function () { cursor.classList.remove('cursor-hover'); });
            });

        document.addEventListener('mouseleave', function () { cursor.style.opacity = '0'; });
        document.addEventListener('mouseenter', function () { cursor.style.opacity = '1'; });
    }

    /* ── T. RIPPLE AU CLIC ────────────────────────────────── */
    document.querySelectorAll('.btn, form input[type="submit"], form button[type="submit"], input[type="button"]')
        .forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                var ripple = document.createElement('span');
                ripple.classList.add('ripple');
                var rect = this.getBoundingClientRect();
                var size = Math.max(rect.width, rect.height);
                ripple.style.width  = ripple.style.height = size + 'px';
                ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
                this.appendChild(ripple);
                setTimeout(function () { ripple.remove(); }, 700);
            });
        });

    /* ── U. TILT DYNAMIQUE DES CARTES ─────────────────────── */
    document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'box-shadow 0.2s ease';
        });
        card.addEventListener('mousemove', function (e) {
            /* Ne pas incliner une carte retournée ou en cours de flip */
            if (this.classList.contains('flipped') || this.classList.contains('flipping')) return;
            var r  = this.getBoundingClientRect();
            var xP = (e.clientX - r.left)  / r.width;   /* 0 → 1 */
            var yP = (e.clientY - r.top)   / r.height;  /* 0 → 1 */
            var tX = (yP - 0.5) * -22;  /* rotation X : -11° → +11° */
            var tY = (xP - 0.5) *  22;  /* rotation Y : -11° → +11° */
            this.style.transition = 'none';
            this.style.transform  = 'perspective(650px) rotateX(' + tX + 'deg) rotateY(' + tY + 'deg) translateY(-7px)';
            this.style.boxShadow  = (-tY * 1.5) + 'px ' + (Math.abs(tX) * 1.2 + 10) + 'px 30px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease';
            this.style.transform  = '';
            this.style.boxShadow  = '';
        });
    });

    /* ── V. TRANSITION DE PAGE ────────────────────────────── */
    document.querySelectorAll('a').forEach(function (link) {
        var href = link.getAttribute('href');
        /* Ignorer les liens externes, ancres, javascript: et liens vides */
        if (!href || !href.startsWith('/') || href.startsWith('//')) return;
        link.addEventListener('click', function (e) {
            /* Ignorer si une touche modificatrice est enfoncée (ouvrir dans un nouvel onglet…) */
            if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) return;
            e.preventDefault();
            var dest = this.href;
            /* Fondu de sortie sur le CONTENU (pas le body entier) */
            document.body.style.transition = 'opacity 0.22s ease';
            document.body.style.opacity    = '0';
            /* Timeout de sécurité : navigue toujours après 350ms max */
            var navTimer = setTimeout(function () {
                document.body.style.opacity = '1';
                window.location.href = dest;
            }, 250);
            /* Naviguer dès que la transition est terminée */
            document.body.addEventListener('transitionend', function onEnd() {
                clearTimeout(navTimer);
                document.body.removeEventListener('transitionend', onEnd);
                window.location.href = dest;
            });
        });
    });

    /* ── X. RECHERCHE EN TEMPS RÉEL (équipe) ─────────────── */
    var searchInput = document.getElementById('search-members');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            var q = this.value.toLowerCase().trim();
            document.querySelectorAll('#cards-grid .card').forEach(function (card) {
                var name  = card.querySelector('h4')     ? card.querySelector('h4').textContent.toLowerCase()     : '';
                var badge = card.querySelector('.badge') ? card.querySelector('.badge').textContent.toLowerCase() : '';
                card.style.display = (name.includes(q) || badge.includes(q)) ? '' : 'none';
            });
        });
    }

    /* ── X2. RECHERCHE EN TEMPS RÉEL (fournisseurs) ────────── */
    var searchFournisseurs = document.getElementById('search-fournisseurs');
    if (searchFournisseurs) {
        searchFournisseurs.addEventListener('input', function () {
            var q = this.value.toLowerCase().trim();
            document.querySelectorAll('#cards-grid-fournisseurs .card').forEach(function (card) {
                var name  = card.querySelector('h4')     ? card.querySelector('h4').textContent.toLowerCase()     : '';
                var badge = card.querySelector('.badge') ? card.querySelector('.badge').textContent.toLowerCase() : '';
                card.style.display = (name.includes(q) || badge.includes(q)) ? '' : 'none';
            });
        });
    }

    /* ── X3. RECHERCHE EN TEMPS RÉEL (plats) ───────────────── */
    var searchPlats = document.getElementById('search-plats');
    if (searchPlats) {
        searchPlats.addEventListener('input', function () {
            var q = this.value.toLowerCase().trim();
            document.querySelectorAll('#cards-grid-plats .card').forEach(function (card) {
                var name  = card.querySelector('h4')     ? card.querySelector('h4').textContent.toLowerCase()     : '';
                var badge = card.querySelector('.badge') ? card.querySelector('.badge').textContent.toLowerCase() : '';
                card.style.display = (name.includes(q) || badge.includes(q)) ? '' : 'none';
            });
        });
    }

    /* ── MODAL 5 : Modal d'ajout d'un plat (page Plats) ──── */

    // récuperer le modal
    var modalAjoutPlat = document.getElementById("modalAjoutPlat");

    // récuperer le boutton qui ouvre le modal
    var btnAjoutPlat = document.getElementById("btnAjoutPlat");

    // récuperer le <span> element qui ferme le modal
    var spanAjoutPlat = document.getElementById("closeAjoutPlat");

    // récupérer le bouton "Annuler" à l'intérieur du modal
    var btnFermerAjoutPlat = document.getElementById("btnFermerAjoutPlat");

    // quand l'utilisateur clique sur le boutton, ouvrir le modal
    if (btnAjoutPlat) {
        btnAjoutPlat.onclick = function() {
            modalAjoutPlat.style.display = "block";
        }
    }

    // quand l'utilisateur clique sur le <span> (x), fermer le modal
    if (spanAjoutPlat) {
        spanAjoutPlat.onclick = function() {
            modalAjoutPlat.style.display = "none";
        }
    }

    // quand l'utilisateur clique sur "Annuler", fermer le modal
    if (btnFermerAjoutPlat) {
        btnFermerAjoutPlat.onclick = function() {
            modalAjoutPlat.style.display = "none";
        }
    }

    /* ── Y. LIGHTBOX ──────────────────────────────────────── */
    var lightbox    = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    if (lightbox && lightboxImg) {
        document.querySelectorAll('.card img.team').forEach(function (img) {
            img.addEventListener('click', function (e) {
                e.stopPropagation();
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
                lightbox.classList.add('active');
            });
        });

        lightbox.addEventListener('click', function () {
            this.classList.remove('active');
        });

        lightboxImg.addEventListener('click', function (e) {
            e.stopPropagation(); /* ne ferme pas en cliquant sur l'image */
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') lightbox.classList.remove('active');
        });
    }

    /* ── Z. TOAST NOTIFICATION ────────────────────────────── */
    window.showToast = function (message, type, duration) {
        var toast = document.createElement('div');
        toast.className = 'toast toast-' + (type || 'info');
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(function () { toast.classList.add('show'); }, 50);
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 380);
        }, duration || 3200);
    };

    /* Toast de bienvenue sur la page d'accueil */
    if (window.location.pathname === '/api/accueil') {
        setTimeout(function () {
            showToast('Bienvenue chez May Gourmet ! 🍽️', 'info', 3500);
        }, 1400);
    }

    /* ── AF. SÉLECTEURS DE THÈME COULEUR ───────────────────── */
    var swatches = document.querySelectorAll('.swatch');
    swatches.forEach(function (sw) {
        sw.addEventListener('click', function (e) {
            var color = this.dataset.color;
            var self  = this;
            doThemeRipple(e, function () {
                if (color === 'red') {
                    document.documentElement.removeAttribute('data-color');
                    localStorage.removeItem('colorTheme');
                } else {
                    document.documentElement.setAttribute('data-color', color);
                    localStorage.setItem('colorTheme', color);
                }
                swatches.forEach(function (s) { s.classList.remove('active'); });
                self.classList.add('active');
            });
        });
    });
    /* Marquer le swatch actif au chargement */
    var currentColor = document.documentElement.getAttribute('data-color') || 'red';
    swatches.forEach(function (sw) {
        if (sw.dataset.color === currentColor) sw.classList.add('active');
    });

    /* ── AG. RETOURNEMENT DES CARTES ───────────────────────── */
    document.querySelectorAll('.flip-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var card = this.closest('.card');
            if (!card || card.classList.contains('flipping')) return;
            card.classList.add('flipping');
            card.style.transition = 'transform 0.18s ease';
            card.style.transform  = 'scaleX(0)';
            setTimeout(function () {
                card.classList.toggle('flipped');
                card.style.transform = 'scaleX(1)';
                setTimeout(function () {
                    card.classList.remove('flipping');
                    card.style.transition = '';
                    card.style.transform  = '';
                }, 200);
            }, 180);
        });
    });

    /* ── AH. COMPTEURS ANIMÉS (stats) ──────────────────────── */
    var statItems = document.querySelectorAll('.stat-item[data-target]');
    if (statItems.length > 0 && 'IntersectionObserver' in window) {
        var statsObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var item   = entry.target;
                var target = parseInt(item.dataset.target, 10);
                var numEl  = item.querySelector('.stat-number');
                if (!numEl) return;
                var duration  = 1600;
                var startTime = null;
                function step(ts) {
                    if (!startTime) startTime = ts;
                    var progress = Math.min((ts - startTime) / duration, 1);
                    var ease = 1 - Math.pow(1 - progress, 3);
                    numEl.textContent = Math.floor(ease * target);
                    if (progress < 1) { requestAnimationFrame(step); }
                    else { numEl.textContent = target; }
                }
                requestAnimationFrame(step);
                statsObs.unobserve(item);
            });
        }, { threshold: 0.4 });
        statItems.forEach(function (item) { statsObs.observe(item); });
    }

    /* ── AI. PARTICULES CANVAS (hero) ──────────────────────── */
    var heroCanvas = document.getElementById('hero-canvas');
    if (heroCanvas) {
        var ctx = heroCanvas.getContext('2d');
        var particles = [];
        var PARTICLE_COUNT = 28;

        function resizeCanvas() {
            heroCanvas.width  = heroCanvas.offsetWidth;
            heroCanvas.height = heroCanvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas, { passive: true });

        for (var pi = 0; pi < PARTICLE_COUNT; pi++) {
            particles.push({
                x:     Math.random() * heroCanvas.width,
                y:     Math.random() * heroCanvas.height,
                r:     Math.random() * 2.5 + 0.8,
                vx:    (Math.random() - 0.5) * 0.45,
                vy:    -Math.random() * 0.4 - 0.12,
                alpha: Math.random() * 0.45 + 0.15
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
            particles.forEach(function (p) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,' + p.alpha + ')';
                ctx.fill();
                p.x += p.vx;
                p.y += p.vy;
                if (p.y < -10) { p.y = heroCanvas.height + 10; p.x = Math.random() * heroCanvas.width; }
                if (p.x < -10) p.x = heroCanvas.width + 10;
                if (p.x > heroCanvas.width + 10) p.x = -10;
            });
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    /* ── AJ. MENU HAMBURGER ─────────────────────────────────── */
    var hamburger  = document.getElementById('hamburger');
    var navLinks   = document.getElementById('nav-links');
    var navOverlay = document.getElementById('nav-overlay');

    function closeMenu() {
        if (!hamburger) return;
        hamburger.classList.remove('open');
        if (navLinks)   navLinks.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            var isOpen = hamburger.classList.toggle('open');
            navLinks.classList.toggle('open', isOpen);
            if (navOverlay) navOverlay.classList.toggle('open', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });
    }
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    /* ── AK. SKELETON LOADING ───────────────────────────────── */
    var skeletonGrid = document.getElementById('skeleton-grid');
    var cardsGrid    = document.getElementById('cards-grid');
    if (skeletonGrid && cardsGrid) {
        setTimeout(function () {
            skeletonGrid.style.transition = 'opacity 0.4s ease';
            skeletonGrid.style.opacity = '0';
            setTimeout(function () {
                skeletonGrid.style.display = 'none';
                cardsGrid.style.display = '';
                cardsGrid.style.opacity = '0';
                var cards = cardsGrid.querySelectorAll('.card');
                cards.forEach(function (card, idx) {
                    card.style.opacity   = '0';
                    card.style.transform = 'translateY(22px)';
                    setTimeout(function () {
                        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                        card.style.opacity    = '1';
                        card.style.transform  = 'translateY(0)';
                    }, idx * 110);
                });
                cardsGrid.style.transition = 'opacity 0.2s ease';
                cardsGrid.style.opacity = '1';
            }, 420);
        }, 900);
    }

    /* ── AM. SPOTLIGHT SUR LES CARTES ──────────────────────── */
    document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            if (this.classList.contains('flipped') || this.classList.contains('flipping')) return;
            var r = this.getBoundingClientRect();
            this.style.setProperty('--mouse-x', ((e.clientX - r.left) / r.width  * 100) + '%');
            this.style.setProperty('--mouse-y', ((e.clientY - r.top)  / r.height * 100) + '%');
        });
        card.addEventListener('mouseleave', function () {
            this.style.removeProperty('--mouse-x');
            this.style.removeProperty('--mouse-y');
        });
    });

    /* ── AN. TRAINÉE DE CURSEUR ─────────────────────────────── */
    var TRAIL_N  = 6;
    var trailEls = [];
    var trailX   = [];
    var trailY   = [];
    var trailMX  = window.innerWidth  / 2;
    var trailMY  = window.innerHeight / 2;
    for (var ti = 0; ti < TRAIL_N; ti++) {
        var td = document.createElement('div');
        td.className = 'cursor-trail';
        document.body.appendChild(td);
        trailEls.push(td);
        trailX.push(trailMX);
        trailY.push(trailMY);
    }
    document.addEventListener('mousemove', function (e) {
        trailMX = e.clientX;
        trailMY = e.clientY;
    }, { passive: true });
    (function animTrail() {
        var px = trailMX, py = trailMY;
        var show = document.body.classList.contains('has-custom-cursor');
        trailEls.forEach(function (dot, i) {
            var lerp = 0.22 - i * 0.025;
            trailX[i] += (px - trailX[i]) * lerp;
            trailY[i] += (py - trailY[i]) * lerp;
            if (show) {
                dot.style.transform = 'translate(' + trailX[i] + 'px, ' + trailY[i] + 'px)';
                dot.style.opacity   = (0.38 - i * 0.055).toFixed(2);
            } else {
                dot.style.opacity = '0';
            }
            px = trailX[i];
            py = trailY[i];
        });
        requestAnimationFrame(animTrail);
    })();

    /* ── AP. SCRAMBLE TEXT SUR LES H2 ──────────────────────── */
    var GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%?!';
    function scramble(el) {
        var orig = el.dataset.orig || el.textContent;
        el.dataset.orig = orig;
        var frame = 0, total = 22;
        (function tick() {
            var out = '';
            for (var i = 0; i < orig.length; i++) {
                if (orig[i] === ' ' || orig[i] === '\'' || orig[i] === '-') {
                    out += orig[i];
                } else if (frame > i * (total / orig.length)) {
                    out += orig[i];
                } else {
                    out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                }
            }
            el.textContent = out;
            if (++frame <= total) { requestAnimationFrame(tick); }
            else { el.textContent = orig; }
        })();
    }
    if ('IntersectionObserver' in window) {
        var h2Obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                scramble(entry.target);
                h2Obs.unobserve(entry.target);
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('main h2, section h2, .page-banner h1').forEach(function (el) {
            h2Obs.observe(el);
        });
    }

    /* ── AT. PARALLAXE PROFONDEUR SUR IMAGES ───────────────── */
    var teamImgs = document.querySelectorAll('.team');
    if (teamImgs.length > 0) {
        function updateImgParallax() {
            teamImgs.forEach(function (img) {
                var card = img.closest('.card');
                if (!card) return;
                var rect = card.getBoundingClientRect();
                var vh   = window.innerHeight;
                /* Offset = distance du centre de la carte au centre du viewport */
                var offset = (rect.top + rect.height / 2 - vh / 2) * 0.1;
                img.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
            });
        }
        window.addEventListener('scroll', updateImgParallax, { passive: true });
        /* Appliquer une fois au chargement (pour skeleton → cards délai) */
        setTimeout(updateImgParallax, 1400);
    }

}); /* fin DOMContentLoaded */
