import { StateTy } from '@/types/store'

const getters = {
  device: (state: StateTy) => state.app.device,
  cachedViews: (state: StateTy) => state.app.cachedViews,
  element: (state: StateTy) => state.user.element,
  id: (state: StateTy) => state.user.id
}
export default getters
