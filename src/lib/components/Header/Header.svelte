<header class="header">
  <div class="header__left">
    <p class="header__left__title">GRANDIORA</p>
    <p class="header__left__subtitle">REAL ESTATE • BARCELONA</p>
  </div>

  <div class="header__right">
    <a href="tel:+" class="header__right__link">+34 930 474 510</a>
    <a href="mailto:info@grandiora.es" class="header__right__link">info@grandiora.es</a>
    <a href="/contact-us" class="header__right__link header__right__link--button">Contact Us</a>
  </div>
</header>

<style lang="scss">
  @use '$lib/styles/variables' as *;

  .header {
    display: flex;
    justify-content: space-between;
    padding: $padding-medium;
    border-top: 3px solid #b89146;
    border-bottom: 1px solid #b89146;

    &__left {
      &__title {
        letter-spacing: 0.1em;
        color: #b89146;
        font-size: 32px;
        margin-bottom: 16px;
      }

      &__subtitle {
        letter-spacing: 0.4em;
        color: #6e6e6e;
        font-size: 14px;
      }
    }

    &__right {
      display: flex;
      align-items: center;

      &__link {
        margin-left: 16px;
        color: #6e6e6e;
        text-decoration: none;

        &--button {
          padding: 8px 16px;
          background-color: #b89146;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
</style>