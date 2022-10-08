---
category:
  - 使用指南
  - Koishi
tag:
  - 制图
---

# NovelAi 作图

> _快看快看！这是茉莉这几天的——新！成！果！怎么样，是不是比以前有进步了？_

这里是对[NovelAi](https://novelai.net/)作图功能的 bot 实现。

凭着好奇心和~~吃瓜精神~~，咱第一时间完成了 NovelAi 的实现，后来发现 Koishi 官方~~更是凶猛 ×~~，所以我选择加入他！(？)

:::warning 注意

1. 此功能处于内测阶段，仅对开发群开放，随时可能修改~~或跑路~~。

2. 限制全局频率为 30s 一次。

:::

### 绘制图片

输入`/nai [关键词]`进行图片绘制。关键词需要为**英文**，多个关键词之间**用逗号分隔**。例如：

```
/nai white hair,red eyes
```

### 切换生成模型

可以用 `-m` 或 `--model` 参数切换生成模型，可选值包括：

- `safe`：较安全的图片
- `nai`：自由度较高的图片 (默认)
- `furry`：福瑞控特攻

```
/nai white hair,red eyes -m furry
```

### 更改图片方向

可以用 `-o` 或 `--orient` 更改图片方向，可选值包括：

- `portrait`：768×512 (默认)
- `square`：640×640
- `landscape`：512×768

```
/nai white hair,red eyes -o landscape
```

### 设置采样器

可以用 `-s` 或 `--sampler` 设置采样器，可选值包括：

- `k_euler_ancestral` (默认)
- `k_euler`
- `k_lms`
- `plms`
- `ddim`

一般推荐使用 `k_euler_ancestral`，不建议修改

### 调整影响因子

使用**半角方括号** `[]` 包裹关键词以**弱化**该关键词的影响，使用**半角花括号** `{}` 包裹关键词以**强化**该关键词的影响。例如：

```
/nai {white hair},[red eyes]
```

### 要素混合

使用 `|` 分隔多个关键词以混合多个要素。例如：

```
/nai cat | frog
```

你将得到一只缝合怪 (字面意义上)。

### 特别感谢

- [NovelAi](https://novelai.net/)

- [ koishijs/koishi-plugin-novelai](https://github.com/koishijs/koishi-plugin-novelai)