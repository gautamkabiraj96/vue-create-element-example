import Vue from "vue";
import App from "./App.vue";

Vue.component("colors", {
  props: ["colorsList"],
  render(createElement) {
    if (this.colorsList.length) {
      return createElement(
        "ul",
        this.colorsList.map((c) => {
          return createElement("li", c);
        })
      );
    } else {
      return createElement("p", "Empty list!");
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
