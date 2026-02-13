/**
 * NoLoTiro - Aplicación completa
 * JavaScript puro - SPA
 */

// ============================================
// DATOS SIMULADOS
// ============================================

const articulos = [
{
    id: 1,
    titulo: "Silla de madera moderna",
    descripcion: "Silla de madera cómoda en excelente estado.",
    categoria: "Muebles",
    estadoProducto: "Bueno - poco uso",
    estadoPublicacion: "Disponible",
    distancia: "500 m",
    publicadoHace: "Hace 3 horas",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80",
    usuario: "María S.",
    valoracion: 4.8,
    articulosCount: 12,
    ubicacion: "Centro",
    featured: true,
    urgent: false
},
{
    id: 2,
    titulo: "Colección de novelas clásicas",
    descripcion: "Pack de novelas clásicas.",
    categoria: "Libros",
    estadoProducto: "Como nuevo",
    estadoPublicacion: "Disponible",
    distancia: "800 m",
    publicadoHace: "Hace 2 horas",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    usuario: "Elena L.",
    valoracion: 4.7,
    articulosCount: 8,
    ubicacion: "Ronda",
    featured: true,
    urgent: false
},
{
    id: 3,
    titulo: "Sofá de dos plazas gris",
    descripcion: "Sofá cómodo gris.",
    categoria: "Muebles",
    estadoProducto: "Usado - buen estado",
    estadoPublicacion: "Disponible",
    distancia: "1.8 km",
    publicadoHace: "Hace 1 hora",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    usuario: "Carlos P.",
    valoracion: 4.5,
    articulosCount: 15,
    ubicacion: "Zaidín",
    featured: false,
    urgent: true
},
{
    id: 4,
    titulo: "Bicicleta urbana",
    descripcion: "Bici de ciudad en buen estado.",
    categoria: "Deporte",
    estadoProducto: "Buen estado",
    estadoPublicacion: "Disponible",
    distancia: "1.1 km",
    publicadoHace: "Hace 2 horas",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
    usuario: "Pedro L.",
    valoracion: 4.6,
    articulosCount: 5,
    ubicacion: "Realejo",
    featured: false,
    urgent: true
},
{
    id: 5,
    titulo: "Maceta decorativa",
    descripcion: "Maceta artesanal.",
    categoria: "Jardín",
    estadoProducto: "Como nuevo",
    estadoPublicacion: "Disponible",
    distancia: "600 m",
    publicadoHace: "Hace 30 min",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1598300053653-59c7b33c9b5d?auto=format&fit=crop&w=600&q=80",
    usuario: "Lisa T.",
    valoracion: 4.9,
    articulosCount: 20,
    ubicacion: "Albaicín",
    featured: false,
    urgent: false
},
{
    id: 6,
    titulo: "Lámpara de pie vintage",
    descripcion: "Lámpara estilo vintage.",
    categoria: "Hogar",
    estadoProducto: "Buen estado",
    estadoPublicacion: "Disponible",
    distancia: "900 m",
    publicadoHace: "Hace 45 min",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=600&q=80",
    usuario: "Ana M.",
    valoracion: 4.4,
    articulosCount: 7,
    ubicacion: "Centro",
    featured: true,
    urgent: false
},
{
    id: 7,
    titulo: "Chaqueta de invierno",
    descripcion: "Chaqueta azul marino.",
    categoria: "Ropa",
    estadoProducto: "Como nuevo",
    estadoPublicacion: "Reservado",
    distancia: "1.2 km",
    publicadoHace: "Hace 1 hora",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=600&q=80",
    usuario: "Miguel R.",
    valoracion: 4.3,
    articulosCount: 9,
    ubicacion: "Camino de Ronda",
    featured: false,
    urgent: false
},
{
    id: 8,
    titulo: "Microondas Samsung",
    descripcion: "Microondas 700W.",
    categoria: "Electrodomésticos",
    estadoProducto: "Funcional",
    estadoPublicacion: "Disponible",
    distancia: "300 m",
    publicadoHace: "Hace 3 horas",
    ciudad: "Granada",
    imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    usuario: "Ana García",
    valoracion: 4.9,
    articulosCount: 12,
    ubicacion: "Calle Recogidas",
    featured: false,
    urgent: false
}
];

const solicitudes = [
    {
        id: 1,
        articuloId: 1,
        articuloTitulo: "Silla de madera moderna",
        articuloImagen: "🪑",
        tiempo: "Hace 2 horas",
        usuario: "Carlos M.",
        usuarioAvatar: "C",
        valoracion: 4.7,
        mensaje: "Hola, me interesa mucho esta silla para mi nueva casa. ¿Estaría disponible para recogerla mañana?",
        estado: "Pendiente"
    },
    {
        id: 2,
        articuloId: 1,
        articuloTitulo: "Silla de madera moderna",
        articuloImagen: "🪑",
        tiempo: "Hace 5 horas",
        usuario: "Laura P.",
        usuarioAvatar: "L",
        valoracion: 5.0,
        mensaje: "¡Me encanta! ¿Puedo recogerla el fin de semana?",
        estado: "Pendiente"
    },
    {
        id: 3,
        articuloId: 7,
        articuloTitulo: "Chaqueta de invierno - Talla M",
        articuloImagen: "🧥",
        tiempo: "Hace 1 día",
        usuario: "Ana G.",
        usuarioAvatar: "A",
        valoracion: 4.9,
        mensaje: "Hola, ¿sigue disponible la chaqueta?",
        estado: "Aprobado"
    },
    {
        id: 4,
        articuloId: 2,
        articuloTitulo: "Colección de novelas clásicas",
        articuloImagen: "📚",
        tiempo: "Hace 2 días",
        usuario: "Pedro R.",
        usuarioAvatar: "P",
        valoracion: 4.3,
        mensaje: "Me interesa el pack de juegos.",
        estado: "Rechazado"
    }
];

const misPublicaciones = [
    {
        id: 1,
        titulo: "Silla de madera moderna",
        imagen: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=200&q=80",
        estado: "Disponible",
        solicitudes: 3
    },
    {
        id: 7,
        titulo: "Chaqueta de invierno - Talla M",
        imagen: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=200&q=80",
        estado: "Reservado",
        solicitudes: 0
    },
    {
        id: 8,
        titulo: "Pack de juegos de mesa",
        imagen: "https://images.unsplash.com/photo-1610890716171-6b1c9f2bd40c?auto=format&fit=crop&w=200&q=80",
        estado: "Disponible",
        solicitudes: 2
    }
];

const misSolicitudes = [
    {
        id: 1,
        titulo: "Colección de novelas clásicas",
        tiempo: "Hace 2 días",
        estado: "Aprobado"
    },
    {
        id: 2,
        titulo: "Maceta decorativa",
        tiempo: "Hace 1 día",
        estado: "Pendiente"
    }
];

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

let favoritos = [];
let articuloActual = null;
let searchTerm = '';
let currentTab = 'todas';
let isLoggedIn = false;

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    cargarFavoritos();
    renderizarHome();
    renderizarCuenta();
    renderizarSolicitudes();
    configurarBusqueda();
});

// ============================================
// NAVEGACIÓN SPA
// ============================================

function navigateTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    switch(screen) {
        case 'onboarding':
            document.getElementById('onboardingScreen').classList.add('active');
            break;
        case 'login':
            document.getElementById('loginScreen').classList.add('active');
            break;
        case 'register':
            document.getElementById('registerScreen').classList.add('active');
            break;
        case 'home':
            document.getElementById('homeScreen').classList.add('active');
            updateBottomNav('home');
            break;
        case 'detail':
            document.getElementById('detailScreen').classList.add('active');
            break;
        case 'account':
            if (!isLoggedIn) {
                navigateTo('login');
                return;
            }
            document.getElementById('accountScreen').classList.add('active');
            updateBottomNav('account');
            break;
        case 'solicitudes':
            if (!isLoggedIn) {
                navigateTo('login');
                return;
            }
            document.getElementById('solicitudesScreen').classList.add('active');
            break;
        case 'favorites':
            document.getElementById('favoritesScreen').classList.add('active');
            renderizarFavoritos();
            updateBottomNav('favorites');
            break;
        case 'publish':
            if (!isLoggedIn) {
                navigateTo('login');
                return;
            }
            document.getElementById('publishScreen').classList.add('active');
            break;
        case 'settings':
            if (!isLoggedIn) {
                navigateTo('login');
                return;
            }
            document.getElementById('settingsScreen').classList.add('active');
            // Reinicializar iconos de Lucide para la pantalla de configuración
            setTimeout(() => {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 50);
            break;
    }
    
    window.scrollTo(0, 0);
}

function updateBottomNav(active) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    if (active === 'home') navItems[0].classList.add('active');
    if (active === 'favorites') navItems[1].classList.add('active');
    if (active === 'account') navItems[4].classList.add('active');
    // No hay nav item para publish (es el botón central), así que no necesita active state
}

// ============================================
// AUTH
// ============================================

function handleLogin(event) {
    event.preventDefault();
    isLoggedIn = true;
    showToast('¡Bienvenido de vuelta!');
    navigateTo('home');
}

function handleRegister(event) {
    event.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showToast('Las contraseñas no coinciden');
        return;
    }
    
    isLoggedIn = true;
    showToast('¡Cuenta creada exitosamente!');
    navigateTo('home');
}

function logout() {
    isLoggedIn = false;
    showToast('Sesión cerrada');
    navigateTo('login');
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
}

// ============================================
// FAVORITOS
// ============================================

function cargarFavoritos() {
    try {
        const guardados = localStorage.getItem('nolotiro_favoritos');
        if (guardados) {
            favoritos = JSON.parse(guardados);
        }
    } catch (e) {
        favoritos = [];
    }
}

function guardarFavoritos() {
    try {
        localStorage.setItem('nolotiro_favoritos', JSON.stringify(favoritos));
    } catch (e) {
        console.warn('No se pudo guardar:', e);
    }
}

function toggleFavorito(id, event) {
    if (event) event.stopPropagation();
    
    const index = favoritos.indexOf(id);
    if (index === -1) {
        favoritos.push(id);
        showToast('Añadido a favoritos');
    } else {
        favoritos.splice(index, 1);
        showToast('Eliminado de favoritos');
    }
    
    guardarFavoritos();
    renderizarHome();
    
    if (articuloActual && articuloActual.id === id) {
        actualizarBotonFavoritoDetalle();
    }
}

function toggleDetailFavorite() {
    if (articuloActual) {
        toggleFavorito(articuloActual.id);
    }
}

function actualizarBotonFavoritoDetalle() {
    const btn = document.getElementById('detailFavoriteBtn');
    const heart = btn.querySelector('.heart-icon');
    
    if (favoritos.includes(articuloActual.id)) {
        heart.textContent = '❤️';
        btn.classList.add('active');
    } else {
        heart.textContent = '🤍';
        btn.classList.remove('active');
    }
}

function esFavorito(id) {
    return favoritos.includes(id);
}

// ============================================
// RENDERIZADO
// ============================================

function crearCardHTML(articulo) {
    const esFav = esFavorito(articulo.id);
    
    let badgeClass = 'badge-available';
    let badgeText = articulo.estadoPublicacion;
    
    if (articulo.estadoPublicacion === 'Reservado') {
        badgeClass = 'badge-reserved';
    } else if (articulo.estadoPublicacion === 'Recogido') {
        badgeClass = 'badge-picked';
    } else if (articulo.featured) {
        badgeClass = 'badge-featured';
        badgeText = 'Destacado';
    } else if (articulo.urgent) {
        badgeClass = 'badge-urgent';
        badgeText = '¡Últimas horas!';
    }
    
    // Verificar si la imagen es una URL o un emoji
    const esUrl = articulo.imagen && (articulo.imagen.startsWith('http') || articulo.imagen.startsWith('https'));
    
    const imagenHTML = esUrl 
        ? `<img src="${articulo.imagen}" alt="${articulo.titulo}" loading="lazy">`
        : `<span class="card-image-placeholder">${articulo.imagen}</span>`;
    
    return `
        <article class="product-card" onclick="verDetalle(${articulo.id})">
            <div class="card-image">
                ${imagenHTML}
                <span class="badge ${badgeClass}">${badgeText}</span>
                <button class="favorite-btn-card ${esFav ? 'active' : ''}" 
                        onclick="toggleFavorito(${articulo.id}, event)"
                        aria-label="${esFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
                    <span>${esFav ? '❤️' : '🤍'}</span>
                </button>
            </div>
            <div class="card-content">
                <h4 class="card-title">${articulo.titulo}</h4>
                <div class="card-meta">
                    <span>📍 ${articulo.distancia}</span>
                    <span>${articulo.publicadoHace}</span>
                </div>
                <div class="card-footer">
                    <span class="price-free">Gratis</span>
                    <span class="card-seller">${articulo.usuario}</span>
                </div>
            </div>
        </article>
    `;
}

function renderizarHome() {
    const destacados = articulos.filter(a => a.featured && a.estadoPublicacion === 'Disponible');
    const popular = [...articulos]
        .filter(a => a.estadoPublicacion === 'Disponible')
        .sort((a, b) => parseDistancia(a.distancia) - parseDistancia(b.distancia))
        .slice(0, 4);
    const urgentes = articulos.filter(a => a.urgent && a.estadoPublicacion === 'Disponible');
    const recientes = articulos.filter(a => a.estadoPublicacion === 'Disponible').slice(0, 4);
    const nuevos = articulos.filter(a => a.estadoPublicacion === 'Disponible').slice(0, 4);
    
    document.getElementById('featuredGrid').innerHTML = destacados.map(crearCardHTML).join('');
    document.getElementById('popularGrid').innerHTML = popular.map(crearCardHTML).join('');
    document.getElementById('urgentGrid').innerHTML = urgentes.map(crearCardHTML).join('');
    document.getElementById('recentGrid').innerHTML = recientes.map(crearCardHTML).join('');
    document.getElementById('newGrid').innerHTML = nuevos.map(crearCardHTML).join('');
}

function renderizarFavoritos() {
    const favoritosArticulos = articulos.filter(a => favoritos.includes(a.id));
    const grid = document.getElementById('favoritesGrid');
    const empty = document.getElementById('emptyFavorites');
    
    if (favoritosArticulos.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        empty.style.display = 'none';
        grid.innerHTML = favoritosArticulos.map(crearCardHTML).join('');
    }
}

function renderizarCuenta() {
    // Mis publicaciones
    const pubHTML = misPublicaciones.map(pub => {
        const statusClass = pub.estado === 'Disponible' ? 'status-available' : 'status-reserved';
        const solicitudesText = pub.solicitudes > 0 ? `<span class="solicitudes-count"> · ${pub.solicitudes} solicitudes</span>` : '';
        
        return `
            <div class="account-item" onclick="verDetalle(${pub.id})">
                <div class="account-item-image">
                    <img src="${pub.imagen}" alt="${pub.titulo}" loading="lazy">
                </div>
                <div class="account-item-info">
                    <div class="account-item-title">${pub.titulo}</div>
                    <div class="account-item-meta">
                        <span class="status-badge ${statusClass}">${pub.estado.toUpperCase()}</span>
                        ${solicitudesText}
                    </div>
                </div>
                <i data-lucide="chevron-right" class="account-item-arrow"></i>
            </div>
        `;
    }).join('');
    
    document.getElementById('myPublications').innerHTML = pubHTML;
    
    // Mis solicitudes
    const solHTML = misSolicitudes.map(sol => {
        const statusClass = sol.estado === 'Aprobado' ? 'status-approved' : 'status-pending';
        const iconName = sol.estado === 'Aprobado' ? 'check-circle' : 'clock';
        
        return `
            <div class="account-item">
                <div class="account-item-icon">
                    <i data-lucide="${iconName}"></i>
                </div>
                <div class="account-item-info">
                    <div class="account-item-title">${sol.titulo}</div>
                    <div class="account-item-meta">
                        <span>${sol.tiempo}</span>
                        <span class="status-badge ${statusClass}">${sol.estado}</span>
                    </div>
                </div>
                <i data-lucide="chevron-right" class="account-item-arrow"></i>
            </div>
        `;
    }).join('');
    
    document.getElementById('myRequests').innerHTML = solHTML;
    
    // Reinicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderizarSolicitudes() {
    const list = document.getElementById('solicitudesList');
    
    const filtered = currentTab === 'todas' 
        ? solicitudes 
        : solicitudes.filter(s => s.estado.toLowerCase() === currentTab);
    
    list.innerHTML = filtered.map(sol => {
        const statusBadge = {
            'Pendiente': '<span class="status-badge status-pending">⏳ Pendiente</span>',
            'Aprobado': '<span class="status-badge status-approved">✓ Aprobado</span>',
            'Rechazado': '<span class="status-badge" style="background: #fee2e2; color: #ef4444;">✕ Rechazado</span>'
        }[sol.estado];
        
        const actions = sol.estado === 'Pendiente' ? `
            <div class="solicitud-actions">
                <button class="btn-reject" onclick="showToast('Solicitud rechazada')">Rechazar</button>
                <button class="btn-approve" onclick="showToast('Solicitud aprobada')">Aprobar</button>
            </div>
        ` : sol.estado === 'Aprobado' ? `
            <button class="btn-message" onclick="showToast('Mensaje enviado')">💬 Enviar mensaje</button>
        ` : `
            <div class="solicitud-status">Solicitud rechazada</div>
        `;
        
        return `
            <div class="solicitud-card">
                <div class="solicitud-header">
                    <div class="solicitud-image">${sol.articuloImagen}</div>
                    <div class="solicitud-info">
                        <div class="solicitud-title">${sol.articuloTitulo}</div>
                        <div class="solicitud-time">${sol.tiempo}</div>
                    </div>
                    ${statusBadge}
                </div>
                <div class="solicitud-user">
                    <div class="user-avatar">${sol.usuarioAvatar}</div>
                    <div class="user-info">
                        <div class="user-name">${sol.usuario}</div>
                        <div class="user-rating">⭐ ${sol.valoracion} valoración</div>
                    </div>
                </div>
                <div class="solicitud-message">${sol.mensaje}</div>
                ${actions}
            </div>
        `;
    }).join('');
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderizarSolicitudes();
}

// ============================================
// BÚSQUEDA
// ============================================

function configurarBusqueda() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderizarHome();
        } else {
            buscarArticulos(searchTerm);
        }
    });
}

function buscarArticulos(termino) {
    const resultados = articulos.filter(articulo => 
        articulo.titulo.toLowerCase().includes(termino) ||
        articulo.categoria.toLowerCase().includes(termino) ||
        articulo.descripcion.toLowerCase().includes(termino)
    );
    
    const html = resultados.length > 0 
        ? resultados.map(crearCardHTML).join('')
        : '<p style="padding: 20px; color: #6b7280; grid-column: span 2;">No se encontraron artículos</p>';
    
    document.getElementById('featuredGrid').innerHTML = html;
    document.getElementById('popularGrid').innerHTML = html;
    document.getElementById('urgentGrid').innerHTML = html;
    document.getElementById('recentGrid').innerHTML = html;
    document.getElementById('newGrid').innerHTML = html;
}

function parseDistancia(distanciaStr) {
    const match = distanciaStr.match(/([\d.]+)\s*(m|km)/i);
    if (!match) return Infinity;
    const valor = parseFloat(match[1]);
    const unidad = match[2].toLowerCase();
    return unidad === 'km' ? valor * 1000 : valor;
}

// ============================================
// DETALLE
// ============================================

function verDetalle(id) {
    const articulo = articulos.find(a => a.id === id);
    if (!articulo) return;
    
    articuloActual = articulo;
    
    // Actualizar título
    document.getElementById('detailTitle').textContent = articulo.titulo;
    
    // Actualizar imagen
    const esUrl = articulo.imagen && (articulo.imagen.startsWith('http') || articulo.imagen.startsWith('https'));
    if (esUrl) {
        document.getElementById('detailImage').src = articulo.imagen;
    } else {
        document.getElementById('detailImage').src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='320'><rect fill='%23f3f4f6' width='400' height='320'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='100'>${articulo.imagen}</text></svg>`;
    }
    document.getElementById('detailImage').alt = articulo.titulo;
    
    // Actualizar badge
    const badge = document.getElementById('detailBadge');
    badge.textContent = articulo.estadoPublicacion;
    
    // Colores según estado
    if (articulo.estadoPublicacion === 'Disponible') {
        badge.style.background = 'var(--color-available-bg)';
        badge.style.color = 'var(--color-available)';
    } else if (articulo.estadoPublicacion === 'Reservado') {
        badge.style.background = 'var(--color-reserved-bg)';
        badge.style.color = 'var(--color-reserved)';
    } else {
        badge.style.background = 'var(--color-picked-bg)';
        badge.style.color = 'var(--color-picked)';
    }
    
    // Actualizar campos
    document.getElementById('detailCategory').textContent = articulo.categoria;
    document.getElementById('detailCondition').textContent = articulo.estadoProducto;
    document.getElementById('detailAvailability').textContent = articulo.estadoPublicacion === 'Disponible' 
        ? 'Disponible para recoger' 
        : articulo.estadoPublicacion;
    document.getElementById('detailPublished').textContent = articulo.publicadoHace;
    document.getElementById('detailDescription').textContent = articulo.descripcion;
    document.getElementById('detailLocation').textContent = articulo.ubicacion;
    document.getElementById('detailDistance').textContent = 'A ' + articulo.distancia + ' de ti';
    
    // Vendedor
    document.getElementById('detailSellerName').textContent = articulo.usuario;
    document.getElementById('detailSellerAvatar').textContent = '👤';
    document.getElementById('detailRating').textContent = articulo.valoracion;
    document.getElementById('detailItemsCount').textContent = articulo.articulosCount;
    
    // Actualizar botón de favorito
    actualizarBotonFavoritoDetalle();
    
    navigateTo('detail');
}

// ============================================
// MODALES Y TOAST
// ============================================

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function requestItem() {
    if (!articuloActual) return;
    
    if (articuloActual.estadoPublicacion !== 'Disponible') {
        showToast('Este artículo no está disponible');
        return;
    }
    
    showModal('requestModal');
}

function showToast(mensaje) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = mensaje;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 2500);
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// ============================================
// PUBLICAR ARTÍCULO
// ============================================

function handlePublish(event) {
    event.preventDefault();
    
    // Recoger datos del formulario
    const nombre = document.getElementById('articleName').value;
    const categoria = document.getElementById('articleCategory').value;
    const estado = document.getElementById('articleCondition').value;
    const descripcion = document.getElementById('articleDescription').value;
    const ubicacion = document.getElementById('articleLocation').value;
    
    // Recoger disponibilidad
    const availabilityChecks = document.querySelectorAll('input[name="availability"]:checked');
    const disponibilidad = Array.from(availabilityChecks).map(cb => cb.value);
    
    // Crear nuevo artículo
    const nuevoArticulo = {
        id: articulos.length + 1,
        titulo: nombre,
        descripcion: descripcion,
        categoria: categoria,
        estadoProducto: estado,
        estadoPublicacion: "Disponible",
        distancia: "0 m",
        publicadoHace: "Ahora mismo",
        ciudad: "Granada",
        imagen: "📦", // Emoji por defecto, en producción sería la foto subida
        usuario: "Ana García", // Usuario logueado
        valoracion: 4.9,
        articulosCount: 13,
        ubicacion: ubicacion,
        featured: false,
        urgent: false
    };
    
    // Añadir al array de artículos
    articulos.unshift(nuevoArticulo);
    
    // Añadir a mis publicaciones
    misPublicaciones.unshift({
        id: nuevoArticulo.id,
        titulo: nuevoArticulo.titulo,
        imagen: nuevoArticulo.imagen,
        estado: "Disponible",
        solicitudes: 0
    });
    
    // Mostrar mensaje de éxito
    showToast('¡Artículo publicado exitosamente!');
    
    // Resetear formulario
    document.getElementById('publishForm').reset();
    document.getElementById('charCount').textContent = 'Mínimo 20 caracteres';
    document.getElementById('charCount').classList.remove('valid');
    
    // Redirigir a home después de un momento
    setTimeout(() => {
        navigateTo('home');
        renderizarHome();
        renderizarCuenta();
    }, 1500);
}

// Contador de caracteres para la descripción
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    
    // Configurar contador de caracteres
    const descriptionField = document.getElementById('articleDescription');
    if (descriptionField) {
        descriptionField.addEventListener('input', (e) => {
            const length = e.target.value.length;
            const charCount = document.getElementById('charCount');
            
            if (length < 20) {
                charCount.textContent = `${length}/20 caracteres mínimos`;
                charCount.classList.remove('valid');
            } else {
                charCount.textContent = `${length}/500 caracteres`;
                charCount.classList.add('valid');
            }
        });
    }
});

// ============================================
// EXPONER FUNCIONES GLOBALES
// ============================================

window.navigateTo = navigateTo;
window.verDetalle = verDetalle;
window.toggleFavorito = toggleFavorito;
window.toggleDetailFavorite = toggleDetailFavorite;
window.showModal = showModal;
window.hideModal = hideModal;
window.requestItem = requestItem;
window.showToast = showToast;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.togglePassword = togglePassword;
window.logout = logout;
window.switchTab = switchTab;
window.handlePublish = handlePublish;
window.showDeleteAccountModal = showDeleteAccountModal;
window.confirmDeleteAccount = confirmDeleteAccount;