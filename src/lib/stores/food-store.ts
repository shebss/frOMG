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
    remove: (index: number) => {
      update((items) => {
        items.splice(index, 1)
        return items
      })
    },
  }
}

export let foodStore = createFoodStore([])