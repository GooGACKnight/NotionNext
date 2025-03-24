import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 文章版权组件
 * 
 * 该组件用于在文章页面底部显示文章的版权信息，包括作者、文章链接和版权声明
 * 它会根据当前页面路径生成完整的文章链接，并提供作者的关于页面链接
 * 只有当站点配置中启用了文章版权功能时，才会显示版权信息
 */
export default function ArticleCopyright () {
  // 获取当前页面路由
  const router = useRouter()
  // 状态管理当前页面的完整URL路径
  const [path, setPath] = useState(siteConfig('LINK') + router.asPath)
  // 当组件挂载时，更新路径为当前窗口的完整URL
  useEffect(() => {
    setPath(window.location.href)
  })

  // 获取全局状态中的语言设置
  const { locale } = useGlobal()

  // 如果站点配置中未启用文章版权功能，则不显示任何内容
  if (!siteConfig('HEXO_ARTICLE_COPYRIGHT', null, CONFIG)) {
    return <></>
  }

  // 返回版权信息的HTML结构
  return (
    <section className="dark:text-gray-300 mt-6 mx-1 ">
      <ul className="overflow-x-auto whitespace-nowrap text-sm dark:bg-gray-900 bg-gray-100 p-5 leading-8 border-l-2 border-indigo-500">
        <li>
          <strong className='mr-2'>{locale.COMMON.AUTHOR}:</strong>
          <Link href={'/about'} className="hover:underline">
            {siteConfig('AUTHOR')}
          </Link>
        </li>
        <li>
          <strong className='mr-2'>{locale.COMMON.URL}:</strong>
          <a className="whitespace-normal break-words hover:underline" href={path}>
            {path}
          </a>
        </li>
        <li>
          <strong className='mr-2'>{locale.COMMON.COPYRIGHT}:</strong>
          {locale.COMMON.COPYRIGHT_NOTICE}
        </li>
      </ul>
    </section>
  );
}