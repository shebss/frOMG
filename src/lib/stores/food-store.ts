import type { Food } from "$lib/types/food"
import { writable } from "svelte/store"

function createFoodStore(foodArray: Food[]) {
  let { subscribe, update } = writable<Food[]>(foodArray)

  return {
    subscribe,
    update,
    add: (item: Food) => {
      update((items) => [...items, item])
    },
    remove: (uid: number) => {
      update((items) => items.filter((item) => item.uid !== uid))
    },
  }
}