<template>
  <!-- ======== Footer section ======== -->
  <footer class="footer">
    <div class="container medium-2 large-3 gap-2 py-1 medium-py-4">
      <!-- Footer logo and contact info -->
      <div class="contact-info">
        <a href="/" class="logo">
          <BaseImage image="https://scionassetbd.com/uploads/brands/logo-2.png" alt="Real Estate Logo" />
        </a>

        <BaseParagraph>
          We connect buyers and sellers with trusted real estate solutions.
          From dream homes to investment.
        </BaseParagraph>

        <div class="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>

      </div>

      <!-- Quick navigation links -->
      <div>
        <SubTitle>Contact Us</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <i class="fa-solid fa-location-dot"></i> 123 Business Centre London SW1A 1AA
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-phone"></i> +8801234567890
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-envelope"></i> realestate@gmail.com
          </ListItem>
        </ul>
      </div>


      <!-- Newsletter section -->
      <div class="newsletter">
        <SubTitle>Newsletter</SubTitle>
        <BaseParagraph>
          Subscribe to get the latest property updates, offers, and real estate insights.
        </BaseParagraph>
        <form class="newsletter-form">
          <InputField type="email" placeholder="Enter your email" required />
          <BaseButton type="submit"><i class="fa-solid fa-paper-plane"></i></BaseButton>
        </form>
      </div>
    </div>

    <!-- Footer bottom copyright -->
    <div class="footer-bottom">
      <BaseParagraph>{{ new Date().getFullYear() }} &copy; All rights reserved by RealEstate, Bangladesh
      </BaseParagraph>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: rgb(from var(--white-color)r g b / 90%);
  background: var(--dark-color);
}

.footer .logo img {
  height: 70px;
  width: auto;
}

.footer .social-links {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

}

.footer .social-links a {
  border-radius: .25rem;
  background: var(--white-color);
  color: var(--secondary-color);
  padding: 0 .75rem;
  /* border: 1px solid var(--border-color); */
}

.footer .sub-title {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.footer .sub-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 50px;
  background: var(--secondary-color);
}

.footer ul li {
  margin: .75rem 0;
}

.footer ul li a {
  padding: .25rem 0;
  position: relative;
}

.footer ul li a::before {
  content: '➔';
  position: absolute;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  transition: all .3s ease-in-out;
}

.footer ul li a:hover::before {
  left: 0;
  opacity: 1;
  color: var(--primary-color);
  visibility: visible;
}

.footer ul li a:hover {
  color: var(--primary-color);
  padding-left: 1.25rem;
}

.footer .newsletter-form {
  display: flex;
  align-items: center;
}

.footer .newsletter-form input {
  background: var(--white-color);
  border-radius: .25rem 0 0 .25rem;
  margin: 0;
  border: 1px solid var(--primary-color);
}

.footer .newsletter-form .btn {
  padding: 1rem 2rem;
  background: var(--secondary-color);
  border-radius: 0 .25rem .25rem 0;
  margin: 0;
}
.footer .newsletter-form .btn i{
  color: var(--white-color);
}

.footer-bottom {
  text-align: center;
  padding: .75rem;
  border-top: 1px solid rgb(from var(--border-color) r g b / 40%);
}
</style>
