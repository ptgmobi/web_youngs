import { debounce } from '@/utils'
// import { debounce } from 'lodash'
export default function (chart) {
  let $_sidebarElm = null
  let $_resizeHandler = null
  const activated = () => {
    if (!$_resizeHandler) {
      // avoid duplication init
      initListener()
    }
    // when keep-alive chart activated, auto resize
    resize()
  }
  const $_sidebarResizeHandler = (e) => {
    if (e.propertyName === 'width') {
      $_resizeHandler()
    }
  }
  const initListener = () => {
    $_resizeHandler = debounce(() => {
      console.log('resize')
      resize()
    }, 100)
    window.addEventListener('resize', $_resizeHandler)

    $_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    $_sidebarElm && $_sidebarElm.addEventListener('transitionend', $_sidebarResizeHandler)
  }
  const destroyListener = () => {
    window.removeEventListener('resize', $_resizeHandler)
    $_resizeHandler = null

    $_sidebarElm && $_sidebarElm.removeEventListener('transitionend', $_sidebarResizeHandler)
  }
  const resize = () => {
    chart && chart.resize()
  }
  return {
    activated,
    $_sidebarResizeHandler,
    initListener,
    destroyListener,
    resize
  }
}
