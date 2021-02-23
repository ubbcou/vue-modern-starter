import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// Create a new store instance.
export const key: InjectionKey<Store<StateTypes>> = Symbol('')
export interface StateTypes {
  showProfileMenu: boolean
  showMenu: boolean
}

const store = createStore<StateTypes>({
  state() {
    return {
      showProfileMenu: false,
      showMenu: false,
    }
  },
  mutations: {
    changeProfileMenuVisible(state: StateTypes) {
      state.showProfileMenu = !state.showProfileMenu
    },
    changeMenuVisible(state: StateTypes) {
      state.showMenu = !state.showMenu
    },
  },
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}

export default store
