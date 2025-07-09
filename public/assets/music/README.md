# 音乐播放器使用说明

## 目录结构

```
public/assets/music/
├── covers/         # 音乐封面图片目录
│   ├── song1.jpg
│   ├── song2.jpg
│   └── ...
├── song1.mp3       # 音乐文件
├── song2.mp3
└── ...
```

## 如何添加音乐

1. 将你的音乐文件（MP3格式）放在 `public/assets/music/` 目录下
2. 将对应的封面图片（JPG或PNG格式）放在 `public/assets/music/covers/` 目录下
3. 在 `src/components/MusicPlayer.astro` 文件中找到 `musicLibrary` 数组，按照以下格式添加你的音乐：

```javascript
const musicLibrary = [
  {
    title: "歌曲名称",
    artist: "艺术家",
    src: "/assets/music/你的音乐文件.mp3",
    cover: "/assets/music/covers/你的封面图片.jpg"
  },
  // 添加更多音乐...
];
```

## 注意事项

- 请确保你拥有音乐的版权或使用权
- 建议使用较小的音频文件，以提高加载速度
- 封面图片建议尺寸为 300x300 像素
- 支持的音频格式：MP3、WAV、OGG（推荐使用MP3格式，兼容性最好） 