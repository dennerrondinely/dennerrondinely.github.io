<template>
  <nav class="nav-bar">
    <div class="container">
      <div class="nav-bar--logo">
        <router-link :to="{name: 'index'}" tag="a" class="nav-bar--link">Dênner</router-link>
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
  background-color: transparent;
  z-index: 1;
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
</style>
