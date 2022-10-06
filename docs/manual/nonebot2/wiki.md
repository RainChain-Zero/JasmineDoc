---
category:
  - 使用指南
  - NoneBot2
tag:
  - 搜索
---

# MediaWiki

> _作为高性能机器人，拥有一定的统筹能力是公认的事实。_

茉莉可以在同一时间对多个使用了**MediaWiki**的 wiki 网站进行接入查询。

如果你是一名 wiki 编辑人员，那可能使用起来比较亲切（

总的来说，该本功能分为普通用户和 bot 管理员两类，他们的区别在于是否是全局的。

**全局指令**仅能管理员使用（除查询），下方指令不加`-g`参数视为本地（本群）内指令。

本地配置的优先级大于全局配置。

### 查询

- 查询条目： [[条目名]] [[prefix:条目名]]

- 查询条目（方法 2）： `wiki 条目名`和`wiki prefix:条目名`

> 当前环境存在多个 wiki，需要指定前缀，前缀可以在添加时设置

- 查询模板： {{模板名}} {{prefix:模板名}}

- 绕过 api 查询条目： ((条目名)) ((prefix:条目名))

目前已全局添加**萌娘百科**和**PRTS**百科，所以你可以直接使用——

- [[prts:条目名]]、[[mg:条目名]]

### 添加

/wiki.add <prefix> [api 地址（可选）] <通用 url 地址> [-g(全局)]

### 删除

/wiki.delete <prefix> [-g]

### wiki 列表

/wiki.list [-g]

### 设置默认 wiki（本群或全局）

/wiki.default <前缀> [-g]

### 如何获取 api 和通用 url 地址？

在对应 wiki 中输入搜索`Special:版本#接入点URL`就可以找到了。

比如萌娘百科：

- api 地址：https://zh.moegirl.org.cn/api.php

- 通用 url 地址：https://zh.moegirl.org.cn/
