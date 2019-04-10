<template>
  <nav class="nav-bar">
    <div class="container">
      <div class="nav-bar--logo">
        <router-link :to="{name: '/'}" tag="a" class="nav-bar--link">LinkTitle</router-link>
      </div>
      <div class="navigation">
        <ul class="navigation-nav">
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
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
  background-color: #f96332 !important;
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
      .navigation-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-left: 0;
        margin: 0 0 0 auto;
        list-style: none;
        .nav-item {
          list-style: none;
          a {
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
</style>
