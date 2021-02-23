import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore } from 'vuex'

// Create a new store instance.
export interface State {
  showProfileMenu: boolean,
  showMenu: boolean
}
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  state() {
    return {
      showProfileMenu: false,
      showMenu: false
    }
  },
  mutations: {
    changeProfileMenuVisible(state: State) {
      state.showProfileMenu = !state.showProfileMenu
    },
    changeMenuVisible(state: State) {
      state.showMenu = !state.showMenu
    }
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}

export default store