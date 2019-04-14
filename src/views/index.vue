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
      <div class="content-work">
        <div :class="['work-btn', {'work-btn-active': foto}]" @click="workActive(1)">
          <i class="fas fa-camera"></i>
        </div>
        <div :class="['work-btn', {'work-btn-active': work}]" @click="workActive(2)">
          <i class="fas fa-palette"></i>
        </div>
        <div :class="['work-btn', {'work-btn-active': favorite}]" @click="workActive(3)">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <box-fotos :items="fotos" v-if="foto"/>
      <box-fotos :items="works" v-if="work"/>
      <box-fotos :items="favorites" v-if="favorite"/>
    </div>
  </div>
</template>

<script>
import boxFotos from "@/views/components/fotos.vue";

export default {
  name: "index",
  components: {
    "box-fotos": boxFotos
  },
  data() {
    return {
      foto: true,
      work: false,
      favorite: false,
      fotos: [
        'Fespaco.jpg?alt=media&token=cad2d3aa-6208-4eb8-8419-62da261407b8',
        'flago.jpg?alt=media&token=00f05723-0425-4b41-af4d-fd5e8e78d2b7',
        'Flobo.jpg?alt=media&token=ef119f65-0956-41e8-b7c4-f230595a36a6',
        'Fsol.jpg?alt=media&token=27183ed1-6295-41dd-8eb3-c5f8d5b4c651',
        ],
      works: [
        'flago.jpg?alt=media&token=00f05723-0425-4b41-af4d-fd5e8e78d2b7',
        'Fespaco.jpg?alt=media&token=cad2d3aa-6208-4eb8-8419-62da261407b8',
        'Flobo.jpg?alt=media&token=ef119f65-0956-41e8-b7c4-f230595a36a6',
        'Fsol.jpg?alt=media&token=27183ed1-6295-41dd-8eb3-c5f8d5b4c651',
        ],
      favorites: [
        'Fsol.jpg?alt=media&token=27183ed1-6295-41dd-8eb3-c5f8d5b4c651',
        'flago.jpg?alt=media&token=00f05723-0425-4b41-af4d-fd5e8e78d2b7',
        'Fespaco.jpg?alt=media&token=cad2d3aa-6208-4eb8-8419-62da261407b8',
        'Flobo.jpg?alt=media&token=ef119f65-0956-41e8-b7c4-f230595a36a6',
        ],
    };
  },
  methods: {
    workActive(value) {
      this.foto = value === 1 ? true : false;
      this.work = value === 2 ? true : false;
      this.favorite = value === 3 ? true : false;
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-work {
    height: auto;
    width: 500px;
    margin: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 40px;
    .work-btn {
      height: 100px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #808080;
      border-radius: 20px;
      cursor: pointer;
    }
    .work-btn-active {
      height: 100px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border-radius: 10px;
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2),
        0 13px 24px -11px rgb(255, 165, 0);
      background: rgb(255, 165, 0);
    }
  }
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

