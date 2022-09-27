import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
//mock
import { viteMockServe } from 'vite-plugin-mock'
//inject title
import { createHtmlPlugin } from 'vite-plugin-html'

//setup name
import VueSetupExtend from 'vite-plugin-vue-setup-extend-plus'

//auto import element-plus has some issue
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//auto import vue https://www.npmjs.com/package/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

import setting from './src/settings'

const prodMock = setting.openProdMock
// import packageJson from './package.json'
// import { loadEnv } from 'vite'

// 多页面配置开始-------------------------------------- 获取pnpm run dev后缀来运行对应的项目
// 引入多页面配置文件
// const project = require('./scripts/multiPages.json')
// const npm_config_project = process.env.npm_config_project
// let filterProjects = []
// if (npm_config_project) {
//   // 这一步操作主要是处理要单独打包和单独运行的配置项
//   filterProjects = project.filter((ele) => {
//     // 过滤出用户输入的单独打包的配置项
//     return ele.chunk.toLowerCase() === npm_config_project.toLowerCase()
//   })
//   console.log(`--------单独构建：${filterProjects[0]['chunkName']}--------`)
// } else {
//   filterProjects = project
// }

/** 多页面配置 */
const multiPages = (p) => {
  const pages = {}
  p.forEach((ele) => {
    const htmlUrl = path.resolve(
      __dirname,
      `src/Project/${ele.chunk}/index.html`
    )
    pages[ele.chunk] = htmlUrl
  })
  return pages
}
/**多页面打包 */
const multiBuild = (p) => {
  const buildOutputConfigs = []
  p.forEach((ele) => {
    // 配置多出口打包
    buildOutputConfigs.push({
      dir: `dist/${ele.chunk}/`,
      assetFileNames: '[ext]/[name]-[hash].[ext]',
      chunkFileNames: 'js/[name]-[hash].js',
      entryFileNames: 'js/[name]-[hash].js'
    })
  })
  return buildOutputConfigs
}
// 多页面配置结束 --------------------------------------

export default ({ command, mode }: any) => {
  console.log(__dirname);
  return {
    /*
     * "/vue3-admin-plus" nginx deploy folder
     * detail to look https://vitejs.cn/config/#base
     * how to config, such as http://8.135.1.141/vue3-admin-plus/#/dashboard
     * "/vue3-admin-plus/" --> config to base is you need
     * http://8.135.1.141 --> if you config "/" , you can visit attached  to http://8.135.1.141
     * */
    base: setting.viteBasePath,
    define: {
      'process.platform': null,
      'process.version': null,
      GLOBAL_STRING: JSON.stringify('i am global var from vite.config.js define'),
      GLOBAL_VAR: {
        test: 'i am global var from vite.config.js define'
      }
    },
    clearScreen: false,
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 5003, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      //proxy look for https://vitejs.cn/config/#server-proxy
      // proxy: {
      //   '/api': {
      //     target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
      proxy: {
        '/dev-api': {
          // 本地测试
          // target: 'http://172.31.21.88:8888',
          // 线上地址
          target: 'http://manager.adsyoungs.com/prod-api/',
          ws: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, '')
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      // legacy({
      //   targets: ['ie >= 11'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // }),
      viteSvgIcons({
        // config svg dir that can config multi
        iconDirs: [path.resolve(process.cwd(), 'src/icons/common'), path.resolve(process.cwd(), 'src/icons/nav-bar')],
        // appoint svg icon using mode
        symbolId: 'icon-[dir]-[name]'
      }),
      //https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
      viteMockServe({
        supportTs: true,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: true
      }),
      VueSetupExtend(),
      //https://github.com/antfu/unplugin-auto-import/blob/HEAD/src/types.ts
      AutoImport({
        // resolvers: [ElementPlusResolver()],
        imports: [
          'vue',
          'pinia',
          'vue-router',
          {
            '@/hooks/global/useCommon': ['useCommon'],
            '@/hooks/global/useElement': ['useElement'],
            '@/hooks/global/useVueRouter': ['useVueRouter'],
            '@/utils/axiosReq': ['axiosReq']
          }
        ],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: true //auto generation auto-imports.d.ts file
      }),
      // auto config of index.html title
      createHtmlPlugin({
        inject: {
          // Inject data into ejs template
          data: {
            title: setting.title
          }
        }
      })
      // Components({
      //   resolvers: [ElementPlusResolver()]
      // })
    ],
    // logLevel: 'error',
    build: {
      //target: 'es2015',
      minify: 'terser',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      //remote console.log in prod
      terserOptions: {
        //detail to look https://terser.org/docs/api-reference#compress-options
        compress: {
          drop_console: false,
          pure_funcs: ['console.log', 'console.info'],
          drop_debugger: true
        }
      },
      //build assets Separate
      assetsDir: 'static/assets',
      rollupOptions: {
        input: {
          // main: resolve(__dirname, 'src/index/index.html'),
          youngs: resolve(__dirname, 'youngs.html'),
          dsp: resolve(__dirname, 'dsp.html')
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
        // //配置多页应用程序入口文件
        // input: multiPages(filterProjects),
        // //打包到目标目录
        // output: multiBuild(filterProjects)
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      //why remove it , look for https://github.com/vitejs/vite/issues/6026
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      },
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@use "sass:math";@import "@/styles/variables.scss";`
        }
      }
    },
    optimizeDeps: {
      include: ['moment-mini']
    }
  }
}
