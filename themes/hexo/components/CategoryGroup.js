import Link from 'next/link'

/**
 * CategoryGroup 组件用于显示一个分类列表，其中每个分类都是可点击的链接。
 * 它根据当前分类和所有分类生成一个分类列表，用户可以点击列表中的分类来浏览相应的内容。
 * 
 * @param {Object} props - 组件的props对象。
 * @param {string} props.currentCategory - 当前选中的分类名称。
 * @param {Array} props.categories - 包含所有分类的数组。
 * @returns {JSX.Element} - 返回一个分类列表，如果categories参数为null，则不返回任何内容。
 */
const CategoryGroup = ({ currentCategory, categories }) => {
  // 如果没有提供categories数组，则不渲染任何内容。
  if (!categories) {
    return <></>
  }
  // 渲染分类列表。
  return <div id='category-list' className='dark:border-gray-600 flex flex-wrap  mx-4'>
    {categories.map(category => {
      // 判断当前分类是否被选中。
      const selected = currentCategory === category.name
      // 为每个分类生成一个可点击的链接。
      return (
        <Link
          key={category.name}
          href={`/category/${category.name}`}
          passHref
          // 根据分类是否被选中，应用不同的样式。
          className={(selected
            ? 'hover:text-white dark:hover:text-white bg-indigo-600 text-white '
            : 'dark:text-gray-400 text-gray-500 hover:text-white dark:hover:text-white hover:bg-indigo-600') +
            '  text-sm w-full items-center duration-300 px-2  cursor-pointer py-1 font-light'}>
          <div>
            // 使用图标表示分类是否被选中，并显示分类名称和包含的内容数量。
            <i className={`mr-2 fas ${selected ? 'fa-folder-open' : 'fa-folder'}`} />{category.name}({category.count})
          </div>
        </Link>
      );
    })}
  </div>
}

export default CategoryGroup
