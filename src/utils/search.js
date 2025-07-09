/**
 * 博客搜索工具
 * 实现前端搜索功能，根据标题、描述、标签和分类搜索文章
 */

// 存储所有文章数据
let allPosts = [];

/**
 * 初始化搜索数据
 * @param {Array} posts - 博客文章数据
 */
export function initSearchData(posts) {
  allPosts = posts;
}

/**
 * 搜索文章
 * @param {string} query - 搜索关键词
 * @returns {Array} - 匹配的文章列表
 */
export function searchPosts(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return allPosts.filter(post => {
    const { title, description, tags, category } = post.data;
    
    // 将文章的各个字段组合成一个搜索文本
    const searchText = [
      title,
      description,
      ...(tags || []),
      category
    ].filter(Boolean).join(' ').toLowerCase();
    
    // 检查是否所有搜索词都匹配
    return searchTerms.every(term => searchText.includes(term));
  }).sort((a, b) => {
    // 按相关性排序 (标题匹配优先)
    const titleA = a.data.title.toLowerCase();
    const titleB = b.data.title.toLowerCase();
    const queryLower = query.toLowerCase();
    
    const titleMatchA = titleA.includes(queryLower);
    const titleMatchB = titleB.includes(queryLower);
    
    if (titleMatchA && !titleMatchB) return -1;
    if (!titleMatchA && titleMatchB) return 1;
    
    // 如果标题匹配相同，则按日期排序
    return new Date(b.data.pubDate) - new Date(a.data.pubDate);
  }).slice(0, 10); // 限制返回10个结果
}

/**
 * 高亮搜索关键词
 * @param {string} text - 原始文本
 * @param {string} query - 搜索关键词
 * @returns {string} - 高亮后的HTML
 */
export function highlightText(text, query) {
  if (!query || !text) return text;
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  let result = text;
  
  searchTerms.forEach(term => {
    if (term.length < 2) return; // 忽略过短的词
    
    const regex = new RegExp(`(${term})`, 'gi');
    result = result.replace(regex, '<mark class="bg-primary-100 dark:bg-primary-900 px-1 rounded">$1</mark>');
  });
  
  return result;
}

/**
 * 生成搜索结果HTML
 * @param {Array} results - 搜索结果
 * @param {string} query - 搜索关键词
 * @returns {string} - 结果HTML
 */
export function generateResultsHTML(results, query) {
  if (results.length === 0) {
    return `
      <div class="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>没有找到与"${query}"相关的文章</p>
      </div>
    `;
  }
  
  return results.map(post => {
    const { title, description, pubDate, category, tags, heroImage } = post.data;
    const highlightedTitle = highlightText(title, query);
    const highlightedDescription = highlightText(description, query);
    const formattedDate = new Date(pubDate).toLocaleDateString('zh-CN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    return `
      <a href="/post/${post.slug}" class="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <div class="flex items-start gap-3">
          ${heroImage ? `
            <div class="w-16 h-16 flex-shrink-0">
              <img src="${heroImage}" alt="${title}" class="w-full h-full object-cover rounded-md">
            </div>
          ` : ''}
          <div class="flex-grow">
            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">${highlightedTitle}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">${highlightedDescription}</p>
            <div class="flex items-center text-xs text-gray-500 dark:text-gray-500 mt-2 gap-3">
              <span>${formattedDate}</span>
              ${category ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">${category}</span>` : ''}
              ${tags && tags.length > 0 ? `
                <div class="flex gap-1">
                  ${tags.slice(0, 2).map(tag => `<span class="text-primary-500">#${tag}</span>`).join(' ')}
                  ${tags.length > 2 ? `<span>+${tags.length - 2}</span>` : ''}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </a>
    `;
  }).join('<div class="border-t border-gray-100 dark:border-gray-800"></div>');
} 