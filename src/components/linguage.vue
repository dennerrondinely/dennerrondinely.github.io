<template>
  <div class="paleta">
    <div class="btn select--cores" @click="dropDown">
      {{ texto }}
      <icon-brasil v-if="linguage === 'PT'"/>
      <icon-usa v-if="linguage === 'ENG'"/>
      <icon-esp v-if="linguage === 'ESP'"/>
    </div>
    <ul class="paleta--cores" :style="{'display': status ? 'none' : 'flex'}">
      <li class="paleta--item" @click="selecionaCor('PT')">
        Portugues
        <icon-brasil/>
      </li>
      <li class="paleta--item" @click="selecionaCor('ENG')">
        Ingles
        <icon-usa/>
      </li>
      <li class="paleta--item" @click="selecionaCor('ESP')">
        Espanhol
        <icon-esp/>
      </li>
    </ul>
  </div>
</template>

<script>
import { brazil, usa, esp } from "@/sprite";
export default {
  components: {
    "icon-brasil": brazil,
    "icon-usa": usa,
    "icon-esp": esp,
  },
  props: {
    linguage: {
      type: String,
      default: "PT"
    },
    texto: {
      type: String,
      default: "Portugues"
    }
  },
  data() {
    return {
      status: true
    };
  },
  methods: {
    dropDown() {
      this.status = !this.status;
    },
    selecionaCor(linguage) {
      this.texto = linguage === 'PT' ? 'Portugues' : linguage === 'ENG' ? 'Ingles' : linguage === 'ESP' ? 'Espanhol' : '';
      this.linguage = linguage;
      this.$emit("linguage", this.linguage);
      this.dropDown();
    }
  }
};
</script>

<style lang="scss" scoped>
.paleta {
  width: 150px;
  height: 34px;
  margin: 5px 20px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  .select--cores {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffa500;
  }
  .btn {
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -moz-user-select: none;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
  }
  .paleta--cores {
    margin: 2px 0;
    padding: 0;
    justify-content: space-around;
    flex-wrap: wrap;
    height: auto;
    z-index: 1000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    list-style: none;
    top: 100%;
    width: 100%;
    .paleta--item {
      height: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 5px;
      cursor: pointer;
    }
    .paleta--texto {
      height: 20px;
      width: 30%;
      margin: 5px;
      cursor: pointer;
    }
  }
}
</style>
