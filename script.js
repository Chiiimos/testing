// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('FitTrack Pro Landing Page Loaded! 🚀');
    
    // 1. INTERACTIVE ELEMENT #1: Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // 2. INTERACTIVE ELEMENT #2: Smooth Scrolling Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 3. INTERACTIVE ELEMENT #3: Countdown Timer
    const countdownElement = document.getElementById('countdown');
    let timeLeft = 4 * 24 * 60 * 60; // 4 days in seconds
    
    function updateCountdown() {
        const days = Math.floor(timeLeft / (24 * 60 * 60));
        const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        const seconds = timeLeft % 60;
        
        countdownElement.textContent = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            countdownElement.textContent = 'Offer Expired!';
            countdownElement.style.color = '#ff4444';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // BONUS INTERACTIONS
    
    // Buy Now Buttons - Interactive Modal
    const buyButtons = document.querySelectorAll('.cta-button.primary, .pricing-buy');
    const modal = document.getElementById('buyModal');
    const closeModal = document.querySelector('.close');
    const modalPrice = document.getElementById('modalPrice');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = this.dataset.price || 199;
            modalPrice.textContent = price;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Learn More Button - Scroll to Features
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        document.getElementById('features').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Feature Cards Hover Animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Pricing Card Price Animation
    const pricingCard = document.querySelector('.pricing-card');
    pricingCard.addEventListener('mouseenter', function() {
        const priceAmount = this.querySelector('.price-amount');
        priceAmount.style.transform = 'scale(1.1)';
        priceAmount.style.color = '#ff5252';
    });
    
    pricingCard.addEventListener('mouseleave', function() {
        const priceAmount = this.querySelector('.price-amount');
        priceAmount.style.transform = 'scale(1)';
        priceAmount.style.color = '#ff6b6b';
    });
    
    // Scroll Animations for Feature Cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    console.log('✅ All interactive elements initialized:');
    console.log('   1. Mobile hamburger menu ✅');
    console.log('   2. Smooth scrolling navigation ✅');
    console.log('   3. Live countdown timer ✅');
    console.log('   + Bonus: Modal, animations, scroll effects ✅');
});