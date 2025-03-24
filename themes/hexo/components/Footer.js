// 引入备案相关组件和PoweredBy组件
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import PoweredBy from '@/components/PoweredBy'
// 引入站点配置
import { siteConfig } from '@/lib/config'

/**
 * Footer组件，用于显示网站的页脚信息
 * @param {Object} props - 组件属性
 * @param {string} props.title - 网站标题，用于在页脚中显示
 * @returns {JSX.Element} - 页脚组件
 */
const Footer = ({ title }) => {
  // 获取当前年份
  const d = new Date()
  const currentYear = d.getFullYear()
  // 获取站点配置中的建站年份
  const since = siteConfig('SINCE')
  // 计算版权年份，如果建站年份小于当前年份，则显示区间年份，否则只显示当前年份
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  // 返回页脚 JSX 结构
  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'>
      // <DarkModeButton/> 暂时注释掉暗黑模式按钮
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />
        <a
          href={siteConfig('LINK')}
          className='underline font-bold  dark:text-gray-300 '>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        // 显示网站备案信息和公安备案信息
        <BeiAnSite />
        <BeiAnGongAn />
        // 流量统计，使用 busuanzi 计数器
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' />
          <span className='px-1 busuanzi_value_site_uv'> </span>
        </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}
        </h1>
        // 显示驱动网站的技术信息
        <PoweredBy className='justify-center' />
      </span>
      <br />
    </footer>
  )
}

// 导出Footer组件
export default Footer
