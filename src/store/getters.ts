import { StateTy } from '@/types/store'
import { useAppStore } from './app'
import { useUserStore } from './user'
import { useDspStore } from './dsp'
const appStore = useAppStore()
const userStore = useUserStore()
const dspStore = useDspStore()
const getters = {
  device: (state: StateTy) => appStore.device,
  cachedViews: (state: StateTy) => appStore.cachedViews,
  element: (state: StateTy) => userStore.element,
  id: (state: StateTy) => userStore.id,
  topsearch: (state: StateTy) => dspStore.topsearch
}
export default getters
