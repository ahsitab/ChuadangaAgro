document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let currentUser = null;
    let isAdmin = false;
    let products = [];
    let cart = [];
    let orders = [];
    let users = [];
    let admins = [
        { id: 1, username: 'sitab', password: 'admin123', name: 'Sitab Ali', email: 'sitab@chuadangaagro.com', phone: '01711223344' },
        { id: 2, username: 'shaker', password: 'admin123', name: 'Shaker Ahmed', email: 'shaker@chuadangaagro.com', phone: '01712233445' },
        { id: 3, username: 'jany', password: 'admin123', name: 'Jany Begum', email: 'jany@chuadangaagro.com', phone: '01713344556' },
        { id: 4, username: 'mamun', password: 'admin123', name: 'Mamun Rahman', email: 'mamun@chuadangaagro.com', phone: '01714455667' },
        { id: 5, username: 'jayan', password: 'admin123', name: 'Jayan Chowdhury', email: 'jayan@chuadangaagro.com', phone: '01715566778' }
    ];
    
    // Initialize the application
    initApp();
    
    function initApp() {
        // Load initial data
        loadProducts();
        loadUsers();
        loadOrders();
        
        // Set up event listeners
        setupEventListeners();
        
        // Update UI based on login state
        updateUI();
    }
    
    function loadProducts() {
        // Dummy product data - cows and fruits
        products = [
            {
                id: 1,
                name: 'Shahiwal-1',
                category: 'livestock',
                price: 520000,
                stock: 0,
                discount: 0,
                description: 'High-quality Friesian cow with excellent milk production. Healthy and vaccinated.',
                images: [
                    'c1.jpg',
                    'https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['dairy', 'milk', 'healthy'],
                instructions: 'Requires regular feeding with quality fodder and clean water. Needs shelter from extreme weather.',
                weight: '750 kg',
                age: '3 years',
                milkProduction: '0',
                color: 'Black and Red'
            },
            {
                id: 2,
                name: 'Shahiwal-2',
                category: 'livestock',
                price: 480000,
                stock: 0,
                discount: 0,
                description: 'Purebred Jersey cow known for high butterfat content in milk. Very docile temperament.',
                images: [
                    'c2.jpg',
                    'https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1549318867-3406d8a6a0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['dairy', 'butterfat', 'docile'],
                instructions: 'Needs balanced diet with mineral supplements. Regular milking schedule is important.',
                weight: '350-400 kg',
                age: '2.5 years',
                milkProduction: '0',
                color: 'white and black'
            },
            {
                id: 3,
                name: 'Local Deshi Cow',
                category: 'livestock',
                price: 250000,
                stock: 0,
                discount: 0,
                description: 'Indigenous breed well-adapted to local climate. Good for both milk and meat production.',
                images: [
                    'c3.jpg',
                    'https://images.unsplash.com/photo-1564087048484-2faba87bcdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1549318867-3406d8a6a0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['local', 'dual-purpose', 'hardy'],
                instructions: 'Low maintenance. Can thrive on local fodder. Resistant to common diseases.',
                weight: '250-300 kg',
                age: '3 years',
                milkProduction: '0',
                color: 'Black'
            },
            {
                id: 4,
                name: 'Sahiwal Cow',
                category: 'livestock',
                price: 375000,
                stock: 0,
                discount: 0,
                description: 'Heat-tolerant breed from Pakistan. Excellent milk production in tropical climates.',
                images: [
                    'c4.jpg',
                    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1549318867-3406d8a6a0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1564087048484-2faba87bcdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['tropical', 'heat-tolerant', 'dairy'],
                instructions: 'Needs shade and plenty of water in hot weather. Good quality fodder improves milk yield.',
                weight: '710 kg',
                age: '3.5 years',
                milkProduction: '00',
                color: 'Reddish brown'
            },
            {
                id: 5,
                name: 'Brahama Cross',
                category: 'livestock',
                price: 250000,
                stock: 0,
                discount: 0,
                description: 'High-quality pregnant Friesian cow. Expected to deliver in 2 months.',
                images: [
                    'c5.jpg',
                    'https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1564087048484-2faba87bcdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['pregnant', 'dairy', 'high-value'],
                instructions: 'Needs special care and nutrition during pregnancy. Consult vet regularly.',
                weight: '500-550 kg',
                age: '3 years',
                milkProduction: 'Will resume after calving',
                color: 'Black and white',
                pregnancyStatus: '0'
            },
            {
                id: 6,
                name: 'Mango (Amrapali)',
                category: 'fruits',
                price: 120,
                stock: 150,
                discount: 15,
                description: 'Premium Amrapali mangoes, sweet and fiberless. Grown organically in our orchards.',
                images: [
                    '3m.jpg',
                    '3m1.jpg',
                    'm2.jpg',
                    'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['sweet', 'fiberless', 'organic'],
                instructions: 'Store at room temperature until ripe, then refrigerate. Wash before eating.',
                variety: 'Amrapali',
                season: 'May-July',
                origin: 'Chuadanga',
                shelfLife: '7-10 days'
            },
            {
                id: 7,
                name: 'Banana (Sagar)',
                category: 'fruits',
                price: 60,
                stock: 200,
                discount: 0,
                description: 'Fresh Sagar bananas, rich in potassium and energy. Perfect for daily consumption.',
                images: [
                    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1603833665858-e61a17a96224?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1603833665858-e61a17a96224?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['energy', 'potassium', 'healthy'],
                instructions: 'Store at room temperature. Separate from other fruits to slow ripening.',
                variety: 'Sagar',
                season: 'Year-round',
                origin: 'Chuadanga',
                shelfLife: '5-7 days'
            },
            {
                id: 8,
                name: 'Litchi (100 pc)',
                category: 'fruits',
                price: 480,
                quantity: 100,
                stock: 80,
                discount: 20,
                description: 'Juicy Bombai litchis with thin skin and small seed. Seasonal delicacy.',
                images: [
                    'l1.jpg',
                    'l2.jpg',
                    'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['juicy', 'seasonal', 'delicacy'],
                instructions: 'Refrigerate to maintain freshness. Consume within 2-3 days for best taste.',
                variety: 'Bombai',
                season: 'May-June',
                origin: 'Chuadanga',
                shelfLife: '3-5 days'
            },
            {
                id: 9,
                name: 'Guava (Kazi)',
                category: 'fruits',
                price: 80,
                stock: 120,
                discount: 10,
                description: 'Kazi guavas with pink flesh and high vitamin C content. Crisp and sweet.',
                images: [
                    'g1.jpg',
                    'g2.jpg',
                    'https://images.unsplash.com/photo-1588771471271-32edb8e3c5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1588771471271-32edb8e3c5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['vitamin-c', 'sweet', 'crisp'],
                instructions: 'Store at room temperature or refrigerate. Wash before eating.',
                variety: 'Kazi',
                season: 'August-October',
                origin: 'Chuadanga',
                shelfLife: '7-10 days'
            },
            {
                id: 10,
                name: 'Pineapple (Honey Queen)',
                category: 'fruits',
                price: 150,
                stock: 60,
                discount: 0,
                description: 'Sweet Honey Queen pineapples with golden flesh. Perfect for juice and desserts.',
                images: [
                    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['sweet', 'juicy', 'tropical'],
                instructions: 'Store at room temperature until ripe, then refrigerate. Cut just before serving.',
                variety: 'Honey Queen',
                season: 'April-July',
                origin: 'Chuadanga',
                shelfLife: '5-7 days'
            },
            {
                id: 11,
                name: 'Onion',
                category: 'crops',
                price: 45,
                stock: 80,
                discount: 5,
                description: 'দেশী পাবনার পেয়াজ',
                images: [
                    'o1.jpg',
                    'o2.jpg',
                    'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['staple', 'high-yield', 'nutritious'],
                instructions: 'Store in a cool, dry place in airtight containers to prevent moisture and pests.',
                variety: 'BRRI Dhan 28',
                season: 'Aman',
                origin: 'Chuadanga',
                shelfLife: '1 year'
            },
            {
                id: 12,
                name: 'Fresh Milk',
                category: 'dairy',
                price: 60,
                stock: 50,
                discount: 0,
                description: 'Fresh, pasteurized milk from our healthy cows. Rich in calcium and protein.',
                images: [
                    'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
                ],
                tags: ['fresh', 'pasteurized', 'nutritious'],
                instructions: 'Keep refrigerated at all times. Consume within 3 days of purchase.',
                type: 'Cow milk',
                fatContent: '4%',
                volume: '1 liter',
                shelfLife: '3 days (refrigerated)'
            }
        ];
        
        renderProducts('all');
    }
    
    function loadUsers() {
        // Dummy user data
        users = [
            {
                id: 1,
                name: 'Rahim Khan',
                email: 'rahim@gmail.com',
                phone: '01711223344',
                username: 'rahim',
                password: 'password123',
                addresses: [
                    {
                        id: 1,
                        name: 'Home',
                        address: '123 Main Road, Chuadanga',
                        city: 'Chuadanga',
                        zip: '7200'
                    },
                    {
                        id: 2,
                        name: 'Office',
                        address: '456 Business Street, Damurhuda',
                        city: 'Damurhuda',
                        zip: '7210'
                    }
                ],
                orders: [1, 2],
                profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
                notifications: {
                    email: true,
                    sms: false
                }
            },
            {
                id: 2,
                name: 'Karim Ahmed',
                email: 'karim@gmail.com',
                phone: '01712233445',
                username: 'karim',
                password: 'password123',
                addresses: [
                    {
                        id: 1,
                        name: 'Home',
                        address: '789 Park Avenue, Jibannagar',
                        city: 'Jibannagar',
                        zip: '7220'
                    }
                ],
                orders: [3],
                profilePic: 'https://randomuser.me/api/portraits/men/45.jpg',
                notifications: {
                    email: true,
                    sms: true
                }
            }
        ];
    }
    
    function loadOrders() {
        // Dummy order data
        orders = [
            {
                id: 1,
                userId: 1,
                date: '2023-06-15',
                status: 'delivered',
                items: [
                    { productId: 1, quantity: 1, price: 120000 },
                    { productId: 6, quantity: 5, price: 120 }
                ],
                shipping: {
                    name: 'Rahim Khan',
                    email: 'rahim@gmail.com',
                    phone: '01711223344',
                    address: '123 Main Road, Chuadanga',
                    city: 'Chuadanga',
                    zip: '7200'
                },
                payment: {
                    method: 'bKash',
                    transactionId: 'TRX123456',
                    amount: 120600
                },
                total: 120650
            },
            {
                id: 2,
                userId: 1,
                date: '2023-06-20',
                status: 'processing',
                items: [
                    { productId: 3, quantity: 2, price: 65000 },
                    { productId: 12, quantity: 10, price: 60 }
                ],
                shipping: {
                    name: 'Rahim Khan',
                    email: 'rahim@gmail.com',
                    phone: '01711223344',
                    address: '456 Business Street, Damurhuda',
                    city: 'Damurhuda',
                    zip: '7210'
                },
                payment: {
                    method: 'cash',
                    transactionId: '',
                    amount: 130600
                },
                total: 130650
            },
            {
                id: 3,
                userId: 2,
                date: '2023-06-25',
                status: 'shipped',
                items: [
                    { productId: 2, quantity: 1, price: 95000 },
                    { productId: 7, quantity: 20, price: 60 }
                ],
                shipping: {
                    name: 'Karim Ahmed',
                    email: 'karim@gmail.com',
                    phone: '01712233445',
                    address: '789 Park Avenue, Jibannagar',
                    city: 'Jibannagar',
                    zip: '7220'
                },
                payment: {
                    method: 'nagad',
                    transactionId: 'TRX789012',
                    amount: 96200
                },
                total: 96250
            }
        ];
    }
    
    function setupEventListeners() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('href');
                if (target === '#') return;
                
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Category tabs
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                renderProducts(category);
            });
        });
        
        // Shop Now button
        document.getElementById('shopNowBtn').addEventListener('click', function() {
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // Learn More button
        document.getElementById('learnMoreBtn').addEventListener('click', function() {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // Login buttons
        document.getElementById('userLoginBtn').addEventListener('click', openLoginModal);
        document.getElementById('adminLoginBtn').addEventListener('click', openAdminLoginModal);
        
        // Register button
        document.getElementById('userRegisterBtn').addEventListener('click', openRegisterModal);
        
        // Logout button
        document.getElementById('userLogoutBtn').addEventListener('click', logout);
        
        // Cart icon
        document.querySelector('.cart-icon').addEventListener('click', openCartModal);
        
        // Modal close buttons
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', closeModal);
        });
        
        // Login form
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            loginUser(username, password);
        });
        
        // Register form
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value;
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showToast('Passwords do not match', 'error');
                return;
            }
            
            registerUser(name, email, phone, username, password);
        });
        
        // Contact form
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // In a real app, you would send this data to a server
            showToast('Your message has been sent successfully!', 'success');
            document.getElementById('contactForm').reset();
        });
        
        // Newsletter form
        document.getElementById('newsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            
            // In a real app, you would send this data to a server
            showToast('Thank you for subscribing to our newsletter!', 'success');
            document.getElementById('newsletterEmail').value = '';
        });
        
        // My Orders link
        document.getElementById('myOrdersLink').addEventListener('click', function(e) {
            e.preventDefault();
            if (!currentUser) {
                openLoginModal();
                showToast('Please login to view your orders', 'error');
                return;
            }
            openUserProfileModal('orders');
        });
        
        // Admin dashboard tabs
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchAdminTab(tabId);
            });
        });
        
        // Product management tabs
        document.querySelectorAll('.pm-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchProductManagementTab(tabId);
            });
        });
        
        // Profile tabs
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchProfileTab(tabId);
            });
        });
        
        // Settings tabs
        document.querySelectorAll('.settings-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchSettingsTab(tabId);
            });
        });
        
        // Checkout button
        document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
        
        // Place order button
        document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
        
        // Payment method change
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', function() {
                updatePaymentMethodDisplay(this.value);
            });
        });
        
        // View order button in confirmation
        document.getElementById('viewOrderBtn').addEventListener('click', function() {
            closeModal();
            const orderId = document.getElementById('orderIdDisplay').textContent;
            openOrderDetailsModal(orderId);
        });
        
        // Continue shopping button in confirmation
        document.getElementById('continueShoppingBtn').addEventListener('click', function() {
            closeModal();
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // Add product form
        document.getElementById('addProductForm').addEventListener('submit', function(e) {
            e.preventDefault();
            addProduct();
        });
        
        // Change profile picture button
        document.getElementById('changeProfilePic').addEventListener('click', function() {
            // In a real app, you would implement file upload
            showToast('Profile picture change functionality would be implemented here', 'info');
        });
        
        // Change admin profile picture button
        document.getElementById('changeAdminProfilePic').addEventListener('click', function() {
            // In a real app, you would implement file upload
            showToast('Admin profile picture change functionality would be implemented here', 'info');
        });
        
        // Personal info form
        document.getElementById('personalInfoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            updatePersonalInfo();
        });
        
        // Admin personal info form
        document.getElementById('adminPersonalInfoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            updateAdminPersonalInfo();
        });
        
        // User settings form
        document.getElementById('userSettingsForm').addEventListener('submit', function(e) {
            e.preventDefault();
            updateUserSettings();
        });
        
        // Admin settings form
        document.getElementById('adminSettingsForm').addEventListener('submit', function(e) {
            e.preventDefault();
            updateAdminSettings();
        });
        
        // Chat widget
        const chatIcon = document.querySelector('.chat-icon');
        const chatBox = document.querySelector('.chat-box');
        const closeChat = document.querySelector('.close-chat');
        const sendChatBtn = document.getElementById('sendChatBtn');
        
        chatIcon.addEventListener('click', function() {
            chatBox.classList.toggle('active');
        });
        
        closeChat.addEventListener('click', function() {
            chatBox.classList.remove('active');
        });
        
        sendChatBtn.addEventListener('click', sendChatMessage);
        
        // Initialize charts when admin dashboard is opened
        document.getElementById('adminDashboard').addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                initCharts();
            }
        });
    }
    
    function renderProducts(category) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<p class="empty-message">No products found in this category.</p>';
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const discountBadge = product.discount > 0 
                ? `<div class="product-badge">${product.discount}% OFF</div>` 
                : '';
            
            const originalPrice = product.discount > 0
                ? `<span class="original-price">৳${product.price.toLocaleString()}</span>`
                : '';
            
            const discountedPrice = product.discount > 0
                ? Math.round(product.price * (100 - product.discount) / 100)
                : product.price;
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${product.name}">
                    ${discountBadge}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="price">৳${discountedPrice.toLocaleString()}</span>
                        ${originalPrice}
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                    <button class="view-details-btn" data-id="${product.id}">View Details</button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
        
        // Add event listeners to "View Details" buttons
        document.querySelectorAll('.view-details-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                openProductDetailsModal(productId);
            });
        });
    }
    
    function addToCart(productId) {
        if (!currentUser) {
            openLoginModal();
            showToast('Please login to add items to cart', 'error');
            return;
        }
        
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = cart.find(item => item.productId === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                productId: product.id,
                name: product.name,
                price: product.discount > 0 
                    ? Math.round(product.price * (100 - product.discount) / 100)
                    : product.price,
                quantity: 1,
                image: product.images[0],
                category: product.category
            });
        }
        
        updateCartCount();
        showToast(`${product.name} added to cart`, 'success');
    }
    
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }
    
    function openCartModal() {
        if (cart.length === 0) {
            showToast('Your cart is empty', 'info');
            return;
        }
        
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-category">${item.category}</span>
                    <div class="cart-item-price">৳${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.productId}">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.productId}">
                        <button class="quantity-btn plus" data-id="${item.productId}">+</button>
                        <button class="cart-item-remove" data-id="${item.productId}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Calculate totals
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = 50;
        const total = subtotal + shipping;
        
        document.getElementById('cartSubtotal').textContent = `৳${subtotal.toLocaleString()}`;
        document.getElementById('cartTotal').textContent = `৳${total.toLocaleString()}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                updateCartItemQuantity(productId, -1);
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                updateCartItemQuantity(productId, 1);
            });
        });
        
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const newQuantity = parseInt(this.value);
                
                if (newQuantity < 1) {
                    this.value = 1;
                    return;
                }
                
                const item = cart.find(item => item.productId === productId);
                if (item) {
                    item.quantity = newQuantity;
                    updateCartModal();
                }
            });
        });
        
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
        
        openModal('cartModal');
    }
    
    function updateCartItemQuantity(productId, change) {
        const item = cart.find(item => item.productId === productId);
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity < 1) {
            item.quantity = 1;
        }
        
        updateCartModal();
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.productId !== productId);
        updateCartCount();
        
        if (cart.length === 0) {
            closeModal();
            showToast('Your cart is now empty', 'info');
        } else {
            updateCartModal();
        }
    }
    
    function updateCartModal() {
        openCartModal();
    }
    
    function openCheckoutModal() {
        if (cart.length === 0) {
            showToast('Your cart is empty', 'error');
            return;
        }
        
        const checkoutItems = document.getElementById('checkoutItems');
        checkoutItems.innerHTML = '';
        
        cart.forEach(item => {
            const checkoutItem = document.createElement('div');
            checkoutItem.className = 'order-item-checkout';
            
            checkoutItem.innerHTML = `
                <span class="order-item-name">${item.name}</span>
                <span class="order-item-qty">x${item.quantity}</span>
                <span class="order-item-price">৳${(item.price * item.quantity).toLocaleString()}</span>
            `;
            
            checkoutItems.appendChild(checkoutItem);
        });
        
        // Calculate totals
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = 50;
        const total = subtotal + shipping;
        
        document.getElementById('orderSubtotal').textContent = `৳${subtotal.toLocaleString()}`;
        document.getElementById('orderTotal').textContent = `৳${total.toLocaleString()}`;
        
        // If user is logged in, pre-fill their info
        if (currentUser) {
            const user = users.find(u => u.id === currentUser.id);
            if (user) {
                document.getElementById('checkoutName').value = user.name;
                document.getElementById('checkoutEmail').value = user.email;
                document.getElementById('checkoutPhone').value = user.phone;
                
                if (user.addresses && user.addresses.length > 0) {
                    document.getElementById('checkoutAddress').value = user.addresses[0].address;
                    document.getElementById('checkoutCity').value = user.addresses[0].city;
                    document.getElementById('checkoutZip').value = user.addresses[0].zip;
                }
            }
        }
        
        closeModal();
        openModal('checkoutModal');
    }
    
    function updatePaymentMethodDisplay(method) {
        document.getElementById('creditCardInfo').classList.add('hidden');
        document.getElementById('bKashInfo').classList.add('hidden');
        document.getElementById('nagadInfo').classList.add('hidden');
        
        if (method === 'card') {
            document.getElementById('creditCardInfo').classList.remove('hidden');
        } else if (method === 'bKash') {
            document.getElementById('bKashInfo').classList.remove('hidden');
        } else if (method === 'nagad') {
            document.getElementById('nagadInfo').classList.remove('hidden');
        }
    }
    
    function placeOrder() {
        const name = document.getElementById('checkoutName').value;
        const email = document.getElementById('checkoutEmail').value;
        const phone = document.getElementById('checkoutPhone').value;
        const address = document.getElementById('checkoutAddress').value;
        const city = document.getElementById('checkoutCity').value;
        const zip = document.getElementById('checkoutZip').value;
        
        if (!name || !email || !phone || !address || !city || !zip) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        let paymentDetails = {};
        
        if (paymentMethod === 'card') {
            const cardNumber = document.getElementById('cardNumber').value;
            const cardExpiry = document.getElementById('cardExpiry').value;
            const cardCvv = document.getElementById('cardCvv').value;
            
            if (!cardNumber || !cardExpiry || !cardCvv) {
                showToast('Please enter all card details', 'error');
                return;
            }
            
            paymentDetails = {
                method: 'credit_card',
                transactionId: `CARD-${Math.floor(Math.random() * 1000000)}`,
                amount: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 50
            };
        } else if (paymentMethod === 'bKash') {
            const bKashNumber = document.getElementById('bKashNumberCheckout').value;
            const bKashTrxID = document.getElementById('bKashTrxID').value;
            
            if (!bKashNumber || !bKashTrxID) {
                showToast('Please enter bKash number and transaction ID', 'error');
                return;
            }
            
            paymentDetails = {
                method: 'bKash',
                transactionId: bKashTrxID,
                amount: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 50
            };
        } else if (paymentMethod === 'nagad') {
            const nagadNumber = document.getElementById('nagadNumberCheckout').value;
            const nagadTrxID = document.getElementById('nagadTrxID').value;
            
            if (!nagadNumber || !nagadTrxID) {
                showToast('Please enter Nagad number and transaction ID', 'error');
                return;
            }
            
            paymentDetails = {
                method: 'nagad',
                transactionId: nagadTrxID,
                amount: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 50
            };
        } else {
            paymentDetails = {
                method: 'cash',
                transactionId: '',
                amount: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 50
            };
        }
        
        // Create new order
        const newOrder = {
            id: orders.length + 1,
            userId: currentUser ? currentUser.id : null,
            date: new Date().toISOString().split('T')[0],
            status: 'pending',
            items: cart.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item.price
            })),
            shipping: {
                name: name,
                email: email,
                phone: phone,
                address: address,
                city: city,
                zip: zip
            },
            payment: paymentDetails,
            total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 50
        };
        
        orders.push(newOrder);
        
        // Add order to user's order history if logged in
        if (currentUser) {
            const user = users.find(u => u.id === currentUser.id);
            if (user) {
                user.orders.push(newOrder.id);
                
                // Add shipping address to user's addresses if not already there
                const addressExists = user.addresses.some(addr => 
                    addr.address === address && addr.city === city && addr.zip === zip);
                
                if (!addressExists) {
                    user.addresses.push({
                        id: user.addresses.length + 1,
                        name: 'New Address',
                        address: address,
                        city: city,
                        zip: zip
                    });
                }
            }
        }
        
        // Clear cart
        cart = [];
        updateCartCount();
        
        // Show confirmation
        document.getElementById('orderIdDisplay').textContent = `CA-${newOrder.id.toString().padStart(6, '0')}`;
        
        closeModal();
        openModal('orderConfirmationModal');
    }
    
    function openOrderDetailsModal(orderId) {
        const order = orders.find(o => o.id === parseInt(orderId.replace('CA-', '')));
        if (!order) return;
        
        document.getElementById('detailOrderId').textContent = `CA-${order.id.toString().padStart(6, '0')}`;
        document.getElementById('detailOrderDate').textContent = new Date(order.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Set status with appropriate class
        const statusElement = document.getElementById('detailOrderStatus');
        statusElement.textContent = order.status.charAt(0).toUpperCase() + order.status.slice(1);
        statusElement.className = 'meta-value';
        statusElement.classList.add(order.status);
        
        // Shipping info
        const shippingInfo = document.getElementById('detailShippingInfo');
        shippingInfo.innerHTML = `
            <p><strong>Name:</strong> ${order.shipping.name}</p>
            <p><strong>Email:</strong> ${order.shipping.email}</p>
            <p><strong>Phone:</strong> ${order.shipping.phone}</p>
            <p><strong>Address:</strong> ${order.shipping.address}, ${order.shipping.city}, ${order.shipping.zip}</p>
        `;
        
        // Payment method
        const paymentMethod = document.getElementById('detailPaymentMethod');
        let paymentText = '';
        
        if (order.payment.method === 'credit_card') {
            paymentText = 'Credit Card';
        } else if (order.payment.method === 'bKash') {
            paymentText = `bKash (Transaction ID: ${order.payment.transactionId})`;
        } else if (order.payment.method === 'nagad') {
            paymentText = `Nagad (Transaction ID: ${order.payment.transactionId})`;
        } else {
            paymentText = 'Cash on Delivery';
        }
        
        paymentMethod.innerHTML = `
            <p><strong>Method:</strong> ${paymentText}</p>
            <p><strong>Amount:</strong> ৳${order.payment.amount.toLocaleString()}</p>
        `;
        
        // Order items
        const orderItems = document.getElementById('detailOrderItems');
        orderItems.innerHTML = '';
        
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            if (!product) return;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item-detail';
            
            orderItem.innerHTML = `
                <div class="order-item-image-detail">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="order-item-info-detail">
                    <h4 class="order-item-name-detail">${product.name}</h4>
                    <p class="order-item-meta-detail">Quantity: ${item.quantity} | Price: ৳${item.price.toLocaleString()}</p>
                </div>
                <div class="order-item-price-detail">৳${(item.price * item.quantity).toLocaleString()}</div>
            `;
            
            orderItems.appendChild(orderItem);
        });
        
        // Order totals
        document.getElementById('detailSubtotal').textContent = `৳${(order.total - 50).toLocaleString()}`;
        document.getElementById('detailTotal').textContent = `৳${order.total.toLocaleString()}`;
        
        openModal('orderDetailsModal');
    }
    
    function openProductDetailsModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        document.getElementById('detailProductName').textContent = product.name;
        document.getElementById('detailProductCategory').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        
        const discountedPrice = product.discount > 0
            ? Math.round(product.price * (100 - product.discount) / 100)
            : product.price;
        
        document.getElementById('detailProductPrice').textContent = `৳${discountedPrice.toLocaleString()}`;
        
        if (product.discount > 0) {
            document.getElementById('detailOriginalPrice').textContent = `৳${product.price.toLocaleString()}`;
            document.getElementById('detailDiscount').textContent = `${product.discount}% OFF`;
        } else {
            document.getElementById('detailOriginalPrice').textContent = '';
            document.getElementById('detailDiscount').textContent = '';
        }
        
        // Stock status
        const stockElement = document.getElementById('detailProductStock');
        if (product.stock > 10) {
            stockElement.textContent = 'In Stock';
            stockElement.className = 'product-stock in-stock';
        } else if (product.stock > 0) {
            stockElement.textContent = `Low Stock (${product.stock} left)`;
            stockElement.className = 'product-stock low-stock';
        } else {
            stockElement.textContent = 'Out of Stock';
            stockElement.className = 'product-stock out-of-stock';
        }
        
        document.getElementById('detailProductDescription').textContent = product.description;
        
        // Product specifications
        const specsElement = document.getElementById('productSpecs');
        specsElement.innerHTML = '';
        
        // Common specs for all products
        const commonSpecs = [
            { label: 'Category', value: product.category.charAt(0).toUpperCase() + product.category.slice(1) },
            { label: 'Price', value: `৳${product.price.toLocaleString()}` },
            { label: 'Discount', value: product.discount > 0 ? `${product.discount}%` : 'None' },
            { label: 'Stock', value: product.stock }
        ];
        
        // Category-specific specs
        let categorySpecs = [];
        if (product.category === 'livestock') {
            categorySpecs = [
                { label: 'Weight', value: product.weight || 'N/A' },
                { label: 'Age', value: product.age || 'N/A' },
                { label: 'Milk Production', value: product.milkProduction || 'N/A' },
                { label: 'Color', value: product.color || 'N/A' }
            ];
            
            if (product.pregnancyStatus) {
                categorySpecs.push({ label: 'Pregnancy Status', value: product.pregnancyStatus });
            }
        } else if (product.category === 'fruits') {
            categorySpecs = [
                { label: 'Variety', value: product.variety || 'N/A' },
                { label: 'Season', value: product.season || 'N/A' },
                { label: 'Origin', value: product.origin || 'N/A' },
                { label: 'Shelf Life', value: product.shelfLife || 'N/A' }
            ];
        } else if (product.category === 'crops') {
            categorySpecs = [
                { label: 'Variety', value: product.variety || 'N/A' },
                { label: 'Season', value: product.season || 'N/A' },
                { label: 'Origin', value: product.origin || 'N/A' },
                { label: 'Shelf Life', value: product.shelfLife || 'N/A' }
            ];
        } else if (product.category === 'dairy') {
            categorySpecs = [
                { label: 'Type', value: product.type || 'N/A' },
                { label: 'Fat Content', value: product.fatContent || 'N/A' },
                { label: 'Volume', value: product.volume || 'N/A' },
                { label: 'Shelf Life', value: product.shelfLife || 'N/A' }
            ];
        }
        
        // Combine and render all specs
        const allSpecs = [...commonSpecs, ...categorySpecs];
        
        allSpecs.forEach(spec => {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            
            specItem.innerHTML = `
                <span class="spec-label">${spec.label}:</span>
                <span class="spec-value">${spec.value}</span>
            `;
            
            specsElement.appendChild(specItem);
        });
        
        // Product images
        const mainImage = document.getElementById('mainProductImage');
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
        
        const thumbnailsContainer = document.getElementById('productThumbnails');
        thumbnailsContainer.innerHTML = '';
        
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${product.name} thumbnail ${index + 1}`;
            thumbnail.dataset.index = index;
            
            if (index === 0) {
                thumbnail.classList.add('active');
            }
            
            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src;
                document.querySelectorAll('#productThumbnails img').forEach(img => img.classList.remove('active'));
                this.classList.add('active');
            });
            
            thumbnailsContainer.appendChild(thumbnail);
        });
        
        // Set quantity to 1
        document.getElementById('detailQuantity').value = 1;
        
        // Add event listener to "Add to Cart" button
        document.getElementById('addToCartFromDetails').addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('detailQuantity').value);
            
            if (quantity < 1) {
                showToast('Quantity must be at least 1', 'error');
                return;
            }
            
            for (let i = 0; i < quantity; i++) {
                addToCart(product.id);
            }
            
            showToast(`${quantity} ${product.name}(s) added to cart`, 'success');
            closeModal();
        });
        
        openModal('productDetailsModal');
    }
    
    function openLoginModal() {
        document.getElementById('loginForm').reset();
        openModal('loginModal');
    }
    
    function openAdminLoginModal() {
        document.getElementById('loginForm').reset();
        document.getElementById('loginModal').querySelector('h2').textContent = 'Admin Login';
        openModal('loginModal');
    }
    
    function openRegisterModal() {
        document.getElementById('registerForm').reset();
        openModal('registerModal');
    }
    
    function openUserProfileModal(activeTab = 'personal') {
        if (!currentUser) return;
        
        const user = users.find(u => u.id === currentUser.id);
        if (!user) return;
        
        // Set profile info
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileEmail').textContent = user.email;
        document.getElementById('profilePicture').src = user.profilePic;
        
        // Set personal info form values
        const nameParts = user.name.split(' ');
        document.getElementById('profileFirstName').value = nameParts[0] || '';
        document.getElementById('profileLastName').value = nameParts.slice(1).join(' ') || '';
        document.getElementById('profilePhone').value = user.phone;
        
        // Set notification preferences
        document.querySelector('input[name="emailNotifications"]').checked = user.notifications.email;
        document.querySelector('input[name="smsNotifications"]').checked = user.notifications.sms;
        
        // Load orders if orders tab is active
        if (activeTab === 'orders') {
            loadUserOrders();
        }
        
        // Load addresses if addresses tab is active
        if (activeTab === 'addresses') {
            loadUserAddresses();
        }
        
        // Activate the requested tab
        switchProfileTab(activeTab);
        
        openModal('userProfileModal');
    }
    
    function loadUserOrders() {
        const userOrdersList = document.getElementById('userOrdersList');
        userOrdersList.innerHTML = '';
        
        const user = users.find(u => u.id === currentUser.id);
        if (!user) return;
        
        const userOrders = orders.filter(order => user.orders.includes(order.id));
        
        if (userOrders.length === 0) {
            userOrdersList.innerHTML = '<p class="empty-message">You have no orders yet.</p>';
            return;
        }
        
        userOrders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'order-item';
            
            orderElement.innerHTML = `
                <div class="order-header">
                    <span class="order-id">CA-${order.id.toString().padStart(6, '0')}</span>
                    <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
                    <span class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                </div>
                <div class="order-customer">${order.shipping.name} - ${order.shipping.phone}</div>
                <div class="order-total">Total: ৳${order.total.toLocaleString()}</div>
                <button class="btn small-btn outline-btn view-order-btn" data-id="${order.id}">View Details</button>
            `;
            
            userOrdersList.appendChild(orderElement);
        });
        
        // Add event listeners to view order buttons
        document.querySelectorAll('.view-order-btn').forEach(button => {
            button.addEventListener('click', function() {
                const orderId = this.getAttribute('data-id');
                closeModal();
                openOrderDetailsModal(`CA-${orderId.padStart(6, '0')}`);
            });
        });
    }
    
    function loadUserAddresses() {
        const userAddresses = document.getElementById('userAddresses');
        userAddresses.innerHTML = '';
        
        const user = users.find(u => u.id === currentUser.id);
        if (!user || !user.addresses || user.addresses.length === 0) {
            userAddresses.innerHTML = '<p class="empty-message">You have no saved addresses.</p>';
            return;
        }
        
        user.addresses.forEach(address => {
            const addressElement = document.createElement('div');
            addressElement.className = 'address-card';
            
            addressElement.innerHTML = `
                <h4>${address.name}</h4>
                <p>${address.address}</p>
                <p>${address.city}, ${address.zip}</p>
                <div class="address-actions">
                    <button class="btn small-btn outline-btn edit-address-btn" data-id="${address.id}">Edit</button>
                    <button class="btn small-btn outline-btn delete-address-btn" data-id="${address.id}">Delete</button>
                </div>
            `;
            
            userAddresses.appendChild(addressElement);
        });
        
        // Add event listeners to address action buttons
        document.querySelectorAll('.edit-address-btn').forEach(button => {
            button.addEventListener('click', function() {
                const addressId = parseInt(this.getAttribute('data-id'));
                // In a real app, you would implement address editing
                showToast('Address editing functionality would be implemented here', 'info');
            });
        });
        
        document.querySelectorAll('.delete-address-btn').forEach(button => {
            button.addEventListener('click', function() {
                const addressId = parseInt(this.getAttribute('data-id'));
                // In a real app, you would implement address deletion
                showToast('Address deletion functionality would be implemented here', 'info');
            });
        });
    }
    
    function openAdminProfileModal() {
        if (!currentUser || !isAdmin) return;
        
        const admin = admins.find(a => a.username === currentUser.username);
        if (!admin) return;
        
        // Set profile info
        document.getElementById('adminProfileName').textContent = admin.name;
        document.getElementById('adminProfileEmail').textContent = admin.email;
        document.getElementById('adminProfilePicture').src = 'https://randomuser.me/api/portraits/men/1.jpg';
        
        // Set personal info form values
        const nameParts = admin.name.split(' ');
        document.getElementById('adminProfileFirstName').value = nameParts[0] || '';
        document.getElementById('adminProfileLastName').value = nameParts.slice(1).join(' ') || '';
        document.getElementById('adminProfilePhone').value = admin.phone;
        
        openModal('adminProfileModal');
    }
    
    function loginUser(username, password) {
        // Check if admin login
        const admin = admins.find(a => a.username === username && a.password === password);
        if (admin) {
            currentUser = admin;
            isAdmin = true;
            closeModal();
            openAdminDashboard();
            showToast(`Welcome back, ${admin.name}!`, 'success');
            updateUI();
            return;
        }
        
        // Check regular user login
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            currentUser = user;
            isAdmin = false;
            closeModal();
            showToast(`Welcome back, ${user.name}!`, 'success');
            updateUI();
            return;
        }
        
        showToast('Invalid username or password', 'error');
    }
    
    function registerUser(name, email, phone, username, password) {
        // Check if username already exists
        if (users.some(u => u.username === username)) {
            showToast('Username already exists', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            phone: phone,
            username: username,
            password: password,
            addresses: [],
            orders: [],
            profilePic: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`,
            notifications: {
                email: true,
                sms: false
            }
        };
        
        users.push(newUser);
        
        // Auto-login the new user
        currentUser = newUser;
        isAdmin = false;
        
        closeModal();
        showToast(`Welcome to Chuadanga Agro, ${name}!`, 'success');
        updateUI();
    }
    
    function logout() {
        currentUser = null;
        isAdmin = false;
        showToast('You have been logged out', 'success');
        updateUI();
    }
    
    function updateUI() {
        const userLoginBtn = document.getElementById('userLoginBtn');
        const userRegisterBtn = document.getElementById('userRegisterBtn');
        const userLogoutBtn = document.getElementById('userLogoutBtn');
        const myOrdersLink = document.getElementById('myOrdersLink');
        
        if (currentUser) {
            userLoginBtn.classList.add('hidden');
            userRegisterBtn.classList.add('hidden');
            userLogoutBtn.classList.remove('hidden');
            myOrdersLink.classList.remove('hidden');
            
            if (isAdmin) {
                document.getElementById('adminLoginBtn').classList.add('hidden');
            } else {
                document.getElementById('adminLoginBtn').classList.remove('hidden');
            }
        } else {
            userLoginBtn.classList.remove('hidden');
            userRegisterBtn.classList.remove('hidden');
            userLogoutBtn.classList.add('hidden');
            myOrdersLink.classList.add('hidden');
            document.getElementById('adminLoginBtn').classList.remove('hidden');
        }
    }
    
    function openAdminDashboard() {
        // Load admin dashboard content
        loadAdminDashboard();
        loadAdminProducts();
        
        // Initialize charts
        initCharts();
        
        openModal('adminDashboard');
    }
    
    function loadAdminDashboard() {
        // Recent orders
        const recentOrderList = document.getElementById('recentOrderList');
        recentOrderList.innerHTML = '';
        
        const recentOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        
        recentOrders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            
            orderItem.innerHTML = `
                <span class="order-id">CA-${order.id.toString().padStart(6, '0')}</span>
                <span class="order-customer">${order.shipping.name}</span>
                <span class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                <span class="order-amount">৳${order.total.toLocaleString()}</span>
            `;
            
            recentOrderList.appendChild(orderItem);
        });
        
        // Customer activity
        const customerActivityList = document.getElementById('customerActivityList');
        customerActivityList.innerHTML = '';
        
        const activities = [
            { type: 'order', message: 'Placed a new order (CA-000123)', time: '2 hours ago' },
            { type: 'register', message: 'New customer registered', time: '5 hours ago' },
            { type: 'login', message: 'Logged in to account', time: '1 day ago' },
            { type: 'review', message: 'Left a product review', time: '2 days ago' },
            { type: 'contact', message: 'Sent a contact message', time: '3 days ago' }
        ];
        
        activities.forEach(activity => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item';
            
            let icon = '';
            let iconClass = '';
            
            switch (activity.type) {
                case 'order':
                    icon = 'fas fa-shopping-cart';
                    iconClass = 'order';
                    break;
                case 'register':
                    icon = 'fas fa-user-plus';
                    iconClass = 'register';
                    break;
                case 'login':
                    icon = 'fas fa-sign-in-alt';
                    iconClass = 'login';
                    break;
                case 'review':
                    icon = 'fas fa-star';
                    iconClass = 'review';
                    break;
                case 'contact':
                    icon = 'fas fa-envelope';
                    iconClass = 'contact';
                    break;
                default:
                    icon = 'fas fa-info-circle';
            }
            
            activityItem.innerHTML = `
                <div class="activity-icon ${iconClass}">
                    <i class="${icon}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-message">${activity.message}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            `;
            
            customerActivityList.appendChild(activityItem);
        });
    }
    
    function loadAdminProducts() {
        const adminProductList = document.getElementById('adminProductList');
        adminProductList.innerHTML = '';
        
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'admin-product-item';
            
            const discountedPrice = product.discount > 0
                ? Math.round(product.price * (100 - product.discount) / 100)
                : product.price;
            
            let stockStatus = '';
            let stockClass = '';
            
            if (product.stock > 10) {
                stockStatus = 'In Stock';
                stockClass = 'in-stock';
            } else if (product.stock > 0) {
                stockStatus = `Low Stock (${product.stock})`;
                stockClass = 'low';
            } else {
                stockStatus = 'Out of Stock';
                stockClass = 'out';
            }
            
            productItem.innerHTML = `
                <div class="admin-product-image">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="admin-product-info">
                    <h4 class="admin-product-name">${product.name}</h4>
                    <span class="admin-product-category">${product.category}</span>
                    <div class="admin-product-price">৳${discountedPrice.toLocaleString()}</div>
                    <div class="admin-product-stock ${stockClass}">${stockStatus}</div>
                </div>
                <div class="admin-product-actions">
                    <button class="edit-product" data-id="${product.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-product" data-id="${product.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            adminProductList.appendChild(productItem);
        });
        
        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.edit-product').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                editProduct(productId);
            });
        });
        
        document.querySelectorAll('.delete-product').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                deleteProduct(productId);
            });
        });
    }
    
    function editProduct(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        // Fill the form with product data
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productStock').value = product.stock;
        document.getElementById('productDiscount').value = product.discount;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productImage').value = product.images[0];
        document.getElementById('productTags').value = product.tags.join(', ');
        document.getElementById('productInstructions').value = product.instructions;
        
        // Show cancel button
        document.getElementById('cancelEditBtn').classList.remove('hidden');
        
        // Scroll to form
        document.getElementById('addProductForm').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    function deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            products = products.filter(p => p.id !== productId);
            loadAdminProducts();
            showToast('Product deleted successfully', 'success');
        }
    }
    
    function addProduct() {
        const name = document.getElementById('productName').value;
        const category = document.getElementById('productCategory').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const stock = parseInt(document.getElementById('productStock').value);
        const discount = parseInt(document.getElementById('productDiscount').value) || 0;
        const description = document.getElementById('productDescription').value;
        const image = document.getElementById('productImage').value;
        const tags = document.getElementById('productTags').value.split(',').map(tag => tag.trim());
        const instructions = document.getElementById('productInstructions').value;
        
        if (!name || !category || !price || !stock || !description || !image) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        // Check if we're editing an existing product
        const existingProductIndex = products.findIndex(p => p.name === name);
        
        if (existingProductIndex >= 0) {
            // Update existing product
            products[existingProductIndex] = {
                ...products[existingProductIndex],
                name,
                category,
                price,
                stock,
                discount,
                description,
                images: [image, ...products[existingProductIndex].images.slice(1)],
                tags,
                instructions
            };
            
            showToast('Product updated successfully', 'success');
        } else {
            // Create new product
            const newProduct = {
                id: products.length + 1,
                name,
                category,
                price,
                stock,
                discount,
                description,
                images: [image, image, image, image], // Using same image for all for simplicity
                tags,
                instructions,
                // Adding some default specs based on category
                ...(category === 'livestock' ? {
                    weight: 'N/A',
                    age: 'N/A',
                    milkProduction: 'N/A',
                    color: 'N/A'
                } : {}),
                ...(category === 'fruits' ? {
                    variety: 'N/A',
                    season: 'N/A',
                    origin: 'N/A',
                    shelfLife: 'N/A'
                } : {}),
                ...(category === 'crops' ? {
                    variety: 'N/A',
                    season: 'N/A',
                    origin: 'N/A',
                    shelfLife: 'N/A'
                } : {}),
                ...(category === 'dairy' ? {
                    type: 'N/A',
                    fatContent: 'N/A',
                    volume: 'N/A',
                    shelfLife: 'N/A'
                } : {})
            };
            
            products.push(newProduct);
            showToast('Product added successfully', 'success');
        }
        
        // Reset form
        document.getElementById('addProductForm').reset();
        document.getElementById('cancelEditBtn').classList.add('hidden');
        
        // Reload products
        loadAdminProducts();
    }
    
    function initCharts() {
        // Sales Chart
        const salesCtx = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales (BDT)',
                    data: [120000, 190000, 150000, 200000, 180000, 220000],
                    backgroundColor: 'rgba(46, 125, 50, 0.2)',
                    borderColor: 'rgba(46, 125, 50, 1)',
                    borderWidth: 2,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return '৳' + context.raw.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '৳' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        // Products Chart
        const productsCtx = document.getElementById('productsChart').getContext('2d');
        const productsChart = new Chart(productsCtx, {
            type: 'bar',
            data: {
                labels: ['Friesian Cow', 'Jersey Cow', 'Mango', 'Banana', 'Litchi'],
                datasets: [{
                    label: 'Quantity Sold',
                    data: [8, 5, 120, 200, 80],
                    backgroundColor: [
                        'rgba(46, 125, 50, 0.7)',
                        'rgba(67, 160, 71, 0.7)',
                        'rgba(102, 187, 106, 0.7)',
                        'rgba(129, 199, 132, 0.7)',
                        'rgba(165, 214, 167, 0.7)'
                    ],
                    borderColor: [
                        'rgba(46, 125, 50, 1)',
                        'rgba(67, 160, 71, 1)',
                        'rgba(102, 187, 106, 1)',
                        'rgba(129, 199, 132, 1)',
                        'rgba(165, 214, 167, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        // Sales Performance Chart (in Analytics tab)
        const salesPerformanceCtx = document.getElementById('salesPerformanceChart').getContext('2d');
        const salesPerformanceChart = new Chart(salesPerformanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [120000, 190000, 150000, 200000, 180000, 220000],
                        backgroundColor: 'rgba(46, 125, 50, 0.2)',
                        borderColor: 'rgba(46, 125, 50, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Orders',
                        data: [12, 19, 15, 20, 18, 22],
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                        borderColor: 'rgba(33, 150, 243, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label === 'Revenue') {
                                    label += ': ৳' + context.raw.toLocaleString();
                                } else {
                                    label += ': ' + context.raw;
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Revenue (BDT)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '৳' + value.toLocaleString();
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Orders'
                        },
                        grid: {
                            drawOnChartArea: false,
                        }
                    }
                }
            }
        });
        
        // Top Products Chart (in Analytics tab)
        const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
        const topProductsChart = new Chart(topProductsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Friesian Cow', 'Jersey Cow', 'Mango', 'Banana', 'Litchi'],
                datasets: [{
                    data: [960000, 475000, 14400, 12000, 14400],
                    backgroundColor: [
                        'rgba(46, 125, 50, 0.7)',
                        'rgba(67, 160, 71, 0.7)',
                        'rgba(102, 187, 106, 0.7)',
                        'rgba(129, 199, 132, 0.7)',
                        'rgba(165, 214, 167, 0.7)'
                    ],
                    borderColor: [
                        'rgba(46, 125, 50, 1)',
                        'rgba(67, 160, 71, 1)',
                        'rgba(102, 187, 106, 1)',
                        'rgba(129, 199, 132, 1)',
                        'rgba(165, 214, 167, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return '৳' + context.raw.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        // Customer Acquisition Chart (in Analytics tab)
        const customerAcquisitionCtx = document.getElementById('customerAcquisitionChart').getContext('2d');
        const customerAcquisitionChart = new Chart(customerAcquisitionCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'New Customers',
                    data: [5, 8, 6, 10, 7, 12],
                    backgroundColor: 'rgba(46, 125, 50, 0.7)',
                    borderColor: 'rgba(46, 125, 50, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    }
    
    function switchAdminTab(tabId) {
        // Update active tab
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            }
        });
        
        // Update active content
        document.querySelectorAll('.admin-content').forEach(content => {
            content.classList.add('hidden');
            if (content.id === `${tabId}Tab`) {
                content.classList.remove('hidden');
            }
        });
        
        // Load specific tab content if needed
        if (tabId === 'orders') {
            loadAdminOrders();
        } else if (tabId === 'customers') {
            loadAdminCustomers();
        } else if (tabId === 'messages') {
            loadAdminMessages();
        } else if (tabId === 'blog') {
            loadAdminBlogPosts();
        }
    }
    
    function loadAdminOrders() {
        const orderList = document.getElementById('orderList');
        orderList.innerHTML = '';
        
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            
            orderItem.innerHTML = `
                <div class="order-header">
                    <span class="order-id">CA-${order.id.toString().padStart(6, '0')}</span>
                    <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
                    <span class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                </div>
                <div class="order-customer">${order.shipping.name} - ${order.shipping.phone}</div>
                <div class="order-items">
                    ${order.items.map(item => {
                        const product = products.find(p => p.id === item.productId);
                        return product 
                            ? `<div class="order-item-row">
                                    <span>${product.name} x${item.quantity}</span>
                                    <span>৳${(item.price * item.quantity).toLocaleString()}</span>
                                </div>`
                            : '';
                    }).join('')}
                </div>
                <div class="order-total">Total: ৳${order.total.toLocaleString()}</div>
                <div class="order-actions">
                    <button class="btn small-btn primary-btn" data-id="${order.id}">Process</button>
                    <button class="btn small-btn outline-btn" data-id="${order.id}">View</button>
                </div>
            `;
            
            orderList.appendChild(orderItem);
        });
        
        // Add event listeners to order action buttons
        document.querySelectorAll('#orderList .btn').forEach(button => {
            button.addEventListener('click', function() {
                const orderId = parseInt(this.getAttribute('data-id'));
                
                if (this.classList.contains('primary-btn')) {
                    // Process order
                    const order = orders.find(o => o.id === orderId);
                    if (order) {
                        if (order.status === 'pending') {
                            order.status = 'processing';
                        } else if (order.status === 'processing') {
                            order.status = 'shipped';
                        } else if (order.status === 'shipped') {
                            order.status = 'delivered';
                        }
                        
                        loadAdminOrders();
                        showToast(`Order CA-${orderId.toString().padStart(6, '0')} status updated to ${order.status}`, 'success');
                    }
                } else {
                    // View order
                    openOrderDetailsModal(`CA-${orderId.toString().padStart(6, '0')}`);
                }
            });
        });
    }
    
    function loadAdminCustomers() {
        const customerList = document.getElementById('customerList');
        customerList.innerHTML = '';
        
        users.forEach(user => {
            const customerItem = document.createElement('div');
            customerItem.className = 'customer-item';
            
            const orderCount = orders.filter(o => o.userId === user.id).length;
            
            customerItem.innerHTML = `
                <div class="customer-avatar">
                    ${user.name.charAt(0)}
                </div>
                <div class="customer-info">
                    <h4 class="customer-name">${user.name}</h4>
                    <p class="customer-email">${user.email}</p>
                    <p class="customer-phone">${user.phone}</p>
                </div>
                <div class="customer-actions">
                    <span class="order-count">${orderCount} orders</span>
                    <button class="btn small-btn outline-btn" data-id="${user.id}">View</button>
                </div>
            `;
            
            customerList.appendChild(customerItem);
        });
        
        // Add event listeners to view buttons
        document.querySelectorAll('#customerList .btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = parseInt(this.getAttribute('data-id'));
                // In a real app, you would show customer details
                showToast(`Viewing details for customer ID: ${userId}`, 'info');
            });
        });
    }
    
    function loadAdminMessages() {
        const messageList = document.getElementById('messageList');
        messageList.innerHTML = '';
        
        const messages = [
            { id: 1, customer: 'Rahim Khan', channel: 'website', time: '2 hours ago', preview: 'I have a question about the Friesian cow...', read: false },
            { id: 2, customer: 'Karim Ahmed', channel: 'whatsapp', time: '5 hours ago', preview: 'When will my order be delivered?', read: true },
            { id: 3, customer: 'Sitab Ali', channel: 'email', time: '1 day ago', preview: 'Interested in bulk purchase of mangoes...', read: false },
            { id: 4, customer: 'Jany Begum', channel: 'facebook', time: '2 days ago', preview: 'Do you have any Jersey cows available?', read: true },
            { id: 5, customer: 'Mamun Rahman', channel: 'website', time: '3 days ago', preview: 'Issue with my recent order...', read: true }
        ];
        
        messages.forEach(message => {
            const messageItem = document.createElement('div');
            messageItem.className = `message-item ${message.read ? '' : 'unread'}`;
            
            let channelIcon = '';
            switch (message.channel) {
                case 'website':
                    channelIcon = 'fas fa-globe';
                    break;
                case 'whatsapp':
                    channelIcon = 'fab fa-whatsapp';
                    break;
                case 'email':
                    channelIcon = 'fas fa-envelope';
                    break;
                case 'facebook':
                    channelIcon = 'fab fa-facebook-messenger';
                    break;
                default:
                    channelIcon = 'fas fa-comment';
            }
            
            messageItem.innerHTML = `
                <div class="message-header">
                    <span class="message-customer">${message.customer}</span>
                    <span class="message-time">${message.time}</span>
                </div>
                <div class="message-channel">
                    <i class="${channelIcon}"></i> ${message.channel.charAt(0).toUpperCase() + message.channel.slice(1)}
                </div>
                <div class="message-preview">${message.preview}</div>
            `;
            
            messageList.appendChild(messageItem);
        });
    }
    
    function loadAdminBlogPosts() {
        const blogPosts = document.getElementById('blogPosts');
        blogPosts.innerHTML = '';
        
        const posts = [
            { id: 1, title: 'Best Practices for Dairy Farming', date: '2023-06-10', status: 'published', category: 'farming-tips' },
            { id: 2, title: 'Seasonal Fruits Available This Month', date: '2023-06-05', status: 'published', category: 'seasonal-crops' },
            { id: 3, title: 'New Jersey Cow Arrivals', date: '2023-05-28', status: 'published', category: 'product-news' },
            { id: 4, title: 'Upcoming Agricultural Trends', date: '2023-05-15', status: 'draft', category: 'agro-trends' }
        ];
        
        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.className = 'blog-post';
            
            postItem.innerHTML = `
                <div class="blog-post-header">
                    <h4 class="blog-post-title">${post.title}</h4>
                    <div>
                        <span class="blog-post-date">${new Date(post.date).toLocaleDateString()}</span>
                        <span class="blog-post-status ${post.status}">${post.status.charAt(0).toUpperCase() + post.status.slice(1)}</span>
                    </div>
                </div>
                <div class="blog-post-content">
                    <strong>Category:</strong> ${post.category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </div>
                <div class="blog-post-actions">
                    <button class="btn small-btn primary-btn" data-id="${post.id}">Edit</button>
                    <button class="btn small-btn outline-btn" data-id="${post.id}">${post.status === 'published' ? 'Unpublish' : 'Publish'}</button>
                    <button class="btn small-btn outline-btn" data-id="${post.id}">Delete</button>
                </div>
            `;
            
            blogPosts.appendChild(postItem);
        });
        
        // Add event listeners to post action buttons
        document.querySelectorAll('#blogPosts .btn').forEach(button => {
            button.addEventListener('click', function() {
                const postId = parseInt(this.getAttribute('data-id'));
                
                if (this.classList.contains('primary-btn')) {
                    // Edit post
                    showToast(`Editing post ID: ${postId}`, 'info');
                } else if (this.textContent === 'Publish' || this.textContent === 'Unpublish') {
                    // Toggle publish status
                    showToast(`Post ID: ${postId} status toggled`, 'success');
                } else {
                    // Delete post
                    if (confirm('Are you sure you want to delete this post?')) {
                        showToast(`Post ID: ${postId} deleted`, 'success');
                    }
                }
            });
        });
    }
    
    function switchProductManagementTab(tabId) {
        // Update active tab
        document.querySelectorAll('.pm-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            }
        });
        
        // Update active content
        document.querySelectorAll('.pm-content').forEach(content => {
            content.classList.add('hidden');
            if (content.id === `${tabId}-content`) {
                content.classList.remove('hidden');
            }
        });
    }
    
    function switchProfileTab(tabId) {
        // Update active tab
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            }
        });
        
        // Update active pane
        document.querySelectorAll('.profile-pane').forEach(pane => {
            pane.classList.add('hidden');
            if (pane.id === `${tabId}-pane`) {
                pane.classList.remove('hidden');
            }
        });
    }
    
    function switchSettingsTab(tabId) {
        // Update active tab
        document.querySelectorAll('.settings-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            }
        });
        
        // Update active pane
        document.querySelectorAll('.settings-pane').forEach(pane => {
            pane.classList.add('hidden');
            if (pane.id === `${tabId}-pane`) {
                pane.classList.remove('hidden');
            }
        });
    }
    
    function updatePersonalInfo() {
        const firstName = document.getElementById('profileFirstName').value;
        const lastName = document.getElementById('profileLastName').value;
        const phone = document.getElementById('profilePhone').value;
        
        if (!firstName || !phone) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        const user = users.find(u => u.id === currentUser.id);
        if (user) {
            user.name = `${firstName} ${lastName}`;
            user.phone = phone;
            
            // Update profile display
            document.getElementById('profileName').textContent = user.name;
            
            showToast('Personal information updated successfully', 'success');
        }
    }
    
    function updateAdminPersonalInfo() {
        const firstName = document.getElementById('adminProfileFirstName').value;
        const lastName = document.getElementById('adminProfileLastName').value;
        const phone = document.getElementById('adminProfilePhone').value;
        
        if (!firstName || !phone) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        const admin = admins.find(a => a.username === currentUser.username);
        if (admin) {
            admin.name = `${firstName} ${lastName}`;
            admin.phone = phone;
            
            // Update profile display
            document.getElementById('adminProfileName').textContent = admin.name;
            
            showToast('Personal information updated successfully', 'success');
        }
    }
    
    function updateUserSettings() {
        const emailNotifications = document.querySelector('input[name="emailNotifications"]').checked;
        const smsNotifications = document.querySelector('input[name="smsNotifications"]').checked;
        
        const user = users.find(u => u.id === currentUser.id);
        if (user) {
            user.notifications = {
                email: emailNotifications,
                sms: smsNotifications
            };
            
            showToast('Notification preferences updated successfully', 'success');
        }
    }
    
    function updateAdminSettings() {
        const showSalesChart = document.querySelector('input[name="showSalesChart"]').checked;
        const showRecentOrders = document.querySelector('input[name="showRecentOrders"]').checked;
        
        // In a real app, you would save these preferences
        showToast('Dashboard preferences updated successfully', 'success');
    }
    
    function sendChatMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message) return;
        
        const chatMessages = document.getElementById('chatMessages');
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message sent';
        userMessage.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(userMessage);
        
        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate reply after a delay
        setTimeout(() => {
            const replies = [
                "Thanks for your message! How can we help you today?",
                "Our team will get back to you shortly.",
                "Would you like information about any specific product?",
                "We're here to assist you with your agricultural needs.",
                "Please let us know if you have any questions about our products."
            ];
            
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            
            const botMessage = document.createElement('div');
            botMessage.className = 'message received';
            botMessage.innerHTML = `<p>${randomReply}</p>`;
            chatMessages.appendChild(botMessage);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
    
    function openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
    
    function showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    });
    
    // Close chat when clicking outside
    document.addEventListener('click', function(e) {
        const chatWidget = document.querySelector('.chat-widget');
        if (!chatWidget.contains(e.target)) {
            document.querySelector('.chat-box').classList.remove('active');
        }
    });
    
    // Handle window scroll for header effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });
});