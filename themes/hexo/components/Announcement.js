/*
 * @Author: GooGACKnight kmkopenai@gmail.com
 * @Date: 2025-03-22 09:38:00
 * @LastEditors: GooGACKnight kmkopenai@gmail.com
 * @LastEditTime: 2025-03-25 00:03:42
 * @FilePath: \NotionNext\themes\hexo\components\Announcement.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入全局状态管理器和动态导入功能
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'

// 动态导入NotionPage组件以提高性能
const NotionPage = dynamic(() => import('@/components/NotionPage'))

/**
 * Announcement组件用于显示公告信息
 * @param {Object} post - 包含公告内容的对象
 * @param {string} className - 要添加到组件外部div的类名
 * @returns {JSX.Element} - 公告组件的JSX
 */
const Announcement = ({ post, className }) => {
  // 使用全局状态管理器获取当前语言环境
  const { locale } = useGlobal()

  // 如果post对象包含blockMap属性，则渲染公告内容
  if (post?.blockMap) {
    return <div className={className}>
        <section id='announcement-wrapper' className="dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray">
            <div><i className='mr-2 fas fa-bullhorn' />{locale.COMMON.ANNOUNCEMENT}</div>
            {post && (<div id="announcement-content">
                <NotionPage post={post} className='text-center' />
            </div>)}
        </section>
    </div>
  } else {
    // 如果post对象不包含blockMap属性，则不渲染任何内容
    return <></>
  }
}

// 导出Announcement组件以供其他组件使用
export default Announcement
