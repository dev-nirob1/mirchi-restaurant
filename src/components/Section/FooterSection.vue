<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Logo & About -->
        <div class="footer-col col-main">
          <a href="#" class="logo">
            <span class="logo-text">MIR<span class="text-secondary">CHI</span></span>
          </a>
          <BaseParagraph class="text-muted">
            Savor the extraordinary at Mirchi, where tradition meets innovation in every spicy bite. 
            Experience authentic flavors in a premium ambient setting.
          </BaseParagraph>
          <div class="social-links flex gap-1">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Working Hours -->
        <div class="footer-col">
          <SubTitle class="footer-title">Working Hours</SubTitle>
          <ul class="footer-list">
            <ListItem class="flex gap-1">
              <span class="text-main">Mon - Fri:</span>
              <span class="text-muted">10am - 11pm</span>
            </ListItem>
            <ListItem class="flex gap-1">
              <span class="text-main">Sat - Sun:</span>
              <span class="text-muted">11am - 12pm</span>
            </ListItem>
            <ListItem class="text-secondary italic mt-1">
              * Kitchen closes 30 mins early
            </ListItem>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-col">
          <SubTitle class="footer-title">Find Us</SubTitle>
          <ul class="footer-list">
            <ListItem>
              <i class="fa-solid fa-location-dot text-secondary mr-2"></i>
              <span class="text-muted">123 Spice Route, Foodie Hub, Mirpur 1216</span>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-phone text-secondary mr-2"></i>
              <span class="text-muted">+880 1234 567 890</span>
            </ListItem>
            <ListItem>
              <i class="fa-solid fa-envelope text-secondary mr-2"></i>
              <span class="text-muted">hello@mirchirestaurant.com</span>
            </ListItem>
          </ul>
        </div>
      </div>

      <div class="footer-bottom mt-3">
        <BaseParagraph class="text-muted">
          &copy; {{ new Date().getFullYear() }} MIRCHI RESTAURANT. All rights reserved. 
          <span class="medium-none">Crafted for Excellence.</span>
        </BaseParagraph>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-darker);
  border-top: 1px solid var(--border-muted);
  padding-top: 3rem;
  padding-bottom: .5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 4rem;
}

.logo-text {
  font-family: var(--heading-font);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--white);
  display: block;
}

.footer-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--white);
  position: relative;
  display: inline-block;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 40px;
  height: 2px;
  background: var(--secondary-color);
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: .75rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-surface);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.social-icon:hover {
  background: var(--secondary-color);
  color: var(--primary-color);
  transform: translateY(-10%);
  border-color: var(--secondary-color);
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid var(--border-muted);
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .footer-col {
    text-align: center;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-list li {
    justify-content: center !important;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
