import { locations, type Location } from '#constants'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const DEFAULT_LOCATION = locations.work

type LocationStore = {
  activeLocation: Location
  // activeLocation: (typeof locations)[keyof typeof locations]
  setActiveLocation: (location: Location) => void
  resetActiveLocation: () => void
}

const useLocationStore = create(
  immer<LocationStore>((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION
      }),
  }))
)

export default useLocationStore
