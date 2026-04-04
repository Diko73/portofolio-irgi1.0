
        document.addEventListener('DOMContentLoaded', function() {
            const typedNameElement = document.getElementById('typed-name');
            const name = "Diko";
            let i = 0;
            
            function typeWriter() {
                if (i < name.length) {
                    typedNameElement.textContent += name.charAt(i);
                    i++;
                    setTimeout(typeWriter, 80);
                }
            }
            
            setTimeout(typeWriter, 500);
            
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        navLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });
            
            function checkVisibility() {
                const sections = document.querySelectorAll('.content-section, .about-waifu');
                
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                        section.classList.remove('hidden');
                        setTimeout(() => {
                            section.classList.add('visible');
                        }, 50);
                    } else {
                        section.classList.remove('visible');
                        section.classList.add('hidden');
                    }
                });
                
                updateActiveNav();
            }
            
            function updateActiveNav() {
                const sections = document.querySelectorAll('.content-section');
                let currentSectionId = '';
                
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
                        currentSectionId = section.id;
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
            
            window.addEventListener('scroll', checkVisibility);
            
            checkVisibility();
            
  
            const profileImageHero = document.querySelector('.profile-image-hero');
            profileImageHero.style.opacity = '0';
            profileImageHero.style.transform = 'translateY(50px) scale(0.9)';
            profileImageHero.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                profileImageHero.style.opacity = '1';
                profileImageHero.style.transform = 'translateY(0) scale(1)';
            }, 300);
            

            const interactiveElements = document.querySelectorAll('.skill-item, .achievement-item, .social-link, .quality-item');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', function() {
                    if (this.classList.contains('achievement-item') || this.classList.contains('skill-item')) {
                        this.style.transform = 'translateY(-10px)';
                    } else if (this.classList.contains('quality-item')) {
                        this.style.transform = 'translateY(-5px)';
                    }
                });
                
                el.addEventListener('mouseleave', function() {
                    if (this.classList.contains('achievement-item') || this.classList.contains('skill-item')) {
                        this.style.transform = 'translateY(0)';
                    } else if (this.classList.contains('quality-item')) {
                        this.style.transform = 'translateY(0)';
                    }
                });
            });
            

            const hiddenElements = document.querySelectorAll('.hidden');
            hiddenElements.forEach(el => {
                el.style.display = 'block';
            });
        });