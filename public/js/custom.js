/*
 * @Author: GooGACKnight kmkopenai@gmail.com
 * @Date: 2025-03-22 09:38:00
 * @LastEditors: GooGACKnight kmkopenai@gmail.com
 * @LastEditTime: 2025-03-24 08:16:35
 * @FilePath: \NotionNext\public\js\custom.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 这里编写自定义js脚本；将被静态引入到页面中

/**
 * 封装文字弹出的函数
 * @param {*} arr
 * @param {*} options
 * @returns
 */
const fnTextPopup = function (arr, options) {
    // arr参数是必须的
    if (!arr || !arr.length) {
      return
    }
    // 主逻辑
    let index = 0
    document.documentElement.addEventListener('click', function (event) {
      const x = event.pageX; const y = event.pageY
      const eleText = document.createElement('span')
      // 随机颜色
      eleText.style.color = 'rgb(' + 255 * Math.random() + ',' + 255 * Math.random() + ',' + 255 * Math.random() + ')'
      // 动画样式
      eleText.className = 'text-popup'
      this.appendChild(eleText)
      if (arr[index]) {
        eleText.innerHTML = arr[index]
      } else {
        index = 0
        eleText.innerHTML = arr[0]
      }
      // 动画结束后删除自己
      eleText.addEventListener('animationend', function () {
        eleText.parentNode.removeChild(eleText)
      })
      // 位置
      eleText.style.left = (x - eleText.clientWidth / 2) + 'px'
      eleText.style.top = (y - eleText.clientHeight) + 'px'
      // index递增
      index++
    })
  }
  
  // 执行，传入文字内容
  fnTextPopup(['❤富强❤', '❤民主❤', '❤文明❤', '❤和谐❤', '❤自由❤', '❤平等❤', '❤公正❤', '❤法治❤', '❤爱国❤', '❤敬业❤', '❤诚信❤', '❤友善❤'])