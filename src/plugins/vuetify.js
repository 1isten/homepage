import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '../../public/css/roboto-mono-v7-latin.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
});
