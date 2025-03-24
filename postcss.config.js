/*
 * @Author: GooGACKnight kmkopenai@gmail.com
 * @Date: 2025-03-22 09:37:59
 * @LastEditors: GooGACKnight kmkopenai@gmail.com
 * @LastEditTime: 2025-03-24 23:41:58
 * @FilePath: \NotionNext\postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 导出一个配置对象，用于指定在项目中使用的PostCSS插件
 * 这里的配置主要目的是为了集成Tailwind CSS和自动前缀功能
 * 
 * @type {Object} 配置对象
 * @property {Object} plugins PostCSS插件的配置
 * @property {Object} tailwindcss Tailwind CSS插件的配置项，这里留空表示使用默认配置
 * @property {Object} autoprefixer 自动前缀插件的配置项，这里留空表示使用默认配置
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}