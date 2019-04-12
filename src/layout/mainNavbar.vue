<template>
  <nav class="nav-bar" :style="{background}" v-scroll="handleScroll">
    <div class="container">
      <div class="nav-bar--logo">
        <router-link :to="{name: 'index'}" tag="a" class="nav-bar--link">Dênner</router-link>
      </div>
      <div class="navigation">
        <div :class="{'btn-menu': true, 'btn-show': button}" @click="ativaMenu">
          <i class="fas fa-bars"></i>
        </div>
        <ul :class="{'navigation-nav': true, 'navigation-nav-show': !button}">
          <li class="nav-item">
            <router-link :to="{name: ''}" tag="a">LinkTitle</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: ''}" tag="a">LinkTitle</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: ''}" tag="a">LinkTitle</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: ''}" tag="a">LinkTitle</router-link>
          </li>
          <div :class="{ 'btn-close': true}" @click="ativaMenu">
            <i class="fas fa-times"></i>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      background: "transparent",
      button: true
    };
  },
  methods: {
    ativaMenu() {
      this.button = !this.button;
    },
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        this.background =
          "linear-gradient(0deg, rgba(44, 44, 44, 0.2), #090909)";
      } else {
        this.background = "transparent";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  min-height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-bottom: 20px;
  background-color: transparent;
  z-index: 1;
  transition: 0.75s;
  .container {
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: nowrap;
    .navigation {
      -webkit-box-flex: 1;
      flex-grow: 1;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-basis: auto;
      background: transparent;
      .btn-menu {
        height: 20px;
        width: 20px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        display: none;
      }
      .btn-show {
        display: block;
      }
      .btn-close {
        display: none;
      }
      .navigation-nav {
        margin-top: 0;
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        margin-left: auto;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        .nav-item {
          list-style: none;
          a {
            display: block;
            text-decoration: none;
            background-color: transparent;
            color: #fff;
            text-transform: uppercase;
            font-size: 0.7142em;
            padding: 0.5rem 0.7rem;
            line-height: 1.625rem;
          }
        }
      }
    }
    .nav-bar--logo {
      .nav-bar--link {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .navigation {
    display: flex;
    justify-content: flex-end;
  }
  .btn-close {
    display: block !important;
    z-index: 1;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .navigation-nav {
    position: absolute;
    background: rgba(0, 0, 0, 0)
      linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgb(9, 9, 9)) repeat scroll
      0% 0%;
    right: 0;
    top: -100vh;
    height: 100vh;
    width: 100vw;
    transition: 0.5s;
  }
  .navigation-nav-show {
    display: flex !important;
    flex-direction: column !important;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
