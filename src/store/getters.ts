import { StateTy } from '@/types/store'
import { useAppStore } from './app'
import { useUserStore } from './user'
const appStore = useAppStore()
const userStore = useUserStore()
const getters = {
  device: (state: StateTy) => appStore.device,
  cachedViews: (state: StateTy) => appStore.cachedViews,
  element: (state: StateTy) => userStore.element,
  id: (state: StateTy) => userStore.id
}
export default getters
