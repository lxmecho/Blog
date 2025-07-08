/**
 * 将日期格式化为 YYYY-MM-DD 格式
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * 将日期格式化为本地化字符串
 */
export function formatDateLong(date: Date, locale: string = 'zh-CN'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 按年和月对文章进行分组
 */
export function groupPostsByDate<T extends { data: { pubDate: Date } }>(
  posts: T[]
): Record<number, Record<number, T[]>> {
  const grouped: Record<number, Record<number, T[]>> = {};
  
  for (const post of posts) {
    const date = post.data.pubDate;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    
    if (!grouped[year]) {
      grouped[year] = {};
    }
    
    if (!grouped[year][month]) {
      grouped[year][month] = [];
    }
    
    grouped[year][month].push(post);
  }
  
  return grouped;
} 