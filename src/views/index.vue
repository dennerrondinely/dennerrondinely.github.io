<template>
  <div>
    <div class="content-header">
      <div class="content-background">
        <div class="content-img"></div>
        <div class="content-profile">
          <div class="profile-img">
            <img src="../assets/profile.jpg" alt>
          </div>
          <div class="profile-title">
            <h2>Dênner Rondinely</h2>
            <p>Desenvolvedor Front-end</p>
          </div>
          <div class="profile-info">
            <div class="info-box">
              <span>teste</span>
              <span>10</span>
            </div>
            <div class="info-box">
              <span>teste</span>
              <span>20</span>
            </div>
            <div class="info-box">
              <span>teste</span>
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-buttons">
        <div class="buttom">Follow</div>
        <div class="buttom">
          <i class="fab fa-github"></i>
        </div>
        <div class="buttom">
          <i class="fab fa-instagram"></i>
        </div>
      </div>
      <div class="content-info">
        <H2>Sobre mim</H2>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
        <p>
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
          all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px 40px 10px;
    p {
      width: 60%;
      font-size: 18px;
      padding: 5px 15px;
      color: #8a8989;
    }
  }
  .content-buttons {
    width: 320px;
    position: relative;
    top: -35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
    .buttom {
      height: 40px;
      width: 40px;
      font-size: 30px;
      border-radius: 50px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #808080;
      color: #fff;
      transition: 0.5s;
      cursor: pointer;
      &:first-child {
        font-size: 20px;
        width: 150px;
        padding: 5px;
        border-radius: 50px;
        background: #ffa500;
        &:hover {
          background: #f8c15e;
        }
      }
      &:hover {
        background: #8a8989;
      }
    }
  }
}
.content-header {
  .content-background {
    position: absolute;
    min-height: 550px;
    max-height: 999px;
    padding: 0;
    color: #ffffff;
    position: relative;
    overflow: hidden;
    .content-img {
      width: 100%;
      height: 100%;
      min-height: 550px;
      background-image: url("../assets/design.jpg");
      background-size: cover;
      background-position: center center;
      position: absolute;
      z-index: -1;
    }
    .content-profile {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 150px;
        width: 150px;
        border-radius: 100px;
      }
      .profile-title {
        p {
          color: #c9bdbd;
        }
      }
      .profile-info {
        padding: 5px;
        margin: 10px 0 0 0;
        width: 50%;
        display: flex;
        justify-content: space-around;
        .info-box {
          span {
            &:first-child {
              font-size: 30px;
              margin: 0 0 5px 0;
              padding: 5px;
            }
            &:last-child {
              font-size: 20px;
              margin: 0 0 5px 0;
              padding: 5px;
              color: #c9bdbd;
            }
          }
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>

