<template>
  <div class="paleta">
    <div class="btn select--cores" @click="dropDown">
      <span>
        {{ texto }}
      </span>
      <icon-brasil v-if="linguage === 'PT'"/>
      <icon-usa v-if="linguage === 'ENG'"/>
      <icon-esp v-if="linguage === 'ESP'"/>
    </div>
    <ul class="paleta--cores" :style="{'display': status ? 'none' : 'flex'}">
      <li class="paleta--item" @click="selecionaCor('PT')">
        <span>{{ subTexto.pt }}</span>
        <icon-brasil/>
      </li>
      <li class="paleta--item" @click="selecionaCor('ENG')">
        <span>{{ subTexto.eng }}</span>
        <icon-usa/>
      </li>
      <li class="paleta--item" @click="selecionaCor('ESP')">
        <span>{{ subTexto.esp }}</span>
        <icon-esp/>
      </li>
    </ul>
  </div>
</template>

<script>
import { brazil, usa, esp } from '@/sprite';
export default {
  components: {
    'icon-brasil': brazil,
    'icon-usa': usa,
    'icon-esp': esp,
  },
  data() {
    return {
      texto: 'Portugês',
      linguage: 'PT',
      status: true,
      subTexto: {
        pt: 'Português',
        eng: 'Inglês',
        esp: 'Espanhol'
      }
    };
  },
  methods: {
    dropDown() {
      this.status = !this.status;
    },
    selecionaCor(linguage) {

        let eng = {
          pt:'Portuguese',
          eng:'English',
          esp:'Spanish'
        },
        pt = {
          pt: 'Português',
          eng: 'Inglês',
          esp: 'Espanhol'
        },
        esp = {
          pt: 'Portugués',
          eng: 'Inglés',
          esp: 'Español'
        }

      this.texto = linguage === 'PT' ? 'Português' : linguage === 'ENG' ? 'English' : linguage === 'ESP' ? 'Español' : '';
      this.subTexto = linguage === 'PT' ? pt : linguage === 'ENG' ? eng : linguage === 'ESP' ? esp : '';
      this.linguage = linguage;
      this.$emit('linguage', this.linguage);
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
  cursor: pointer;
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
@media screen and (max-width: 1000px) {
  .paleta {
    width: 44px;
  .select--cores {
    span {
      display: none;
    }
  }
  .paleta--cores {

    .paleta--item {
      justify-content: center;
      align-items: center;
      span {
        display: none;
      }
    }
    .paleta--texto {
    }
  }
}
}
</style>
