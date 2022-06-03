---
category:
  - 使用指南
  - NoneBot2
tag:
  - 制图
---

# 头像表情包

> 自从上次发现绘画的乐趣后，她似乎不再满足于简单的恶作剧，当你看见她手中的小摄像机时，最好保护好自己。
>
> "诶——！别跑啊——！就、就一下啦！"你可不敢回头看正挥舞着小相机在后穷追不舍的她。

当你被茉莉拍到的时候，你应该明白，懂的物尽其用的她会做出什么来。

咦？不会的，茉莉能有什么坏心思呢(

### 特别感谢

本功能修改自[原项目](https://github.com/noneplugin/nonebot-plugin-petpet)，是它的mirai协议适配版，感谢MeetWq佬的帮助！大佬真的太可爱了呜呜呜(

:::warning 使用限制
本功能要求个人好感度≥500
:::

因为指令众多，就和[之前的制图](../mirai/makepic.md)功能一样简单说明一下，然后放图吧。

本功能有以下几种**触发方式**——

+ 指令+@user，如“/小天使 @meetwq”

+ 指令+QQ号，如“/小天使 114514”

+ 指令+自己，如“/小天使 自己”

+ 指令+图片，如“/小天使 [图片]”

前三种将以目标的QQ头像作为目标生成，最后一种相当于指定图片生成。

:::info 说明
如果采用QQ号，即第二种形式，**目标QQ需要是茉莉的好友**，所以我们建议使用群@的方式进行。

部分指令可以**修改文字内容**，具体会在下面阐述。
:::

那么，下面就直接放图吧，如果还不太清楚，在**文末**有一点具体的指令作为演示。

## PetPet指令集

注意，以下指令**均需要指令前缀**“/”，不再赘述。

![使用说明](https://s2.loli.net/2022/05/31/m51RO3DuGN6Exoq.jpg)

## 逐一演示效果


| 指令 | 效果 | 备注 |
| --- | --- | --- |
| 万能表情<br>空白表情 | <img src="https://s2.loli.net/2022/05/29/C2VRA6iw4hzWZXO.jpg" width="200" /> | 简单的图片加文字 |
| 摸<br>摸摸<br>摸头<br>摸摸头<br>rua | <img src="https://s2.loli.net/2022/02/23/oNGVO4iuCk73g8S.gif" width="200" /> | 可使用参数“圆”让头像为圆形<br>如：摸头圆 自己 |
| 亲<br>亲亲 | <img src="https://s2.loli.net/2022/02/23/RuoiqP8plJBgw9K.gif" width="200" /> | 可指定一个或两个目标<br>若为一个则为 发送人 亲 目标<br>若为两个则为 目标1 亲 目标2<br>如：亲 114514 自己 |
| 贴<br>贴贴<br>蹭<br>蹭蹭 | <img src="https://s2.loli.net/2022/02/23/QDCE5YZIfroavub.gif" width="200" /> | 可指定一个或两个目标<br>类似 亲 |
| 顶<br>玩 | <img src="https://s2.loli.net/2022/02/23/YwxA7fFgWyshuZX.gif" width="200" /> |  |
| 拍 | <img src="https://s2.loli.net/2022/02/23/5mv6pFJMNtzHhcl.gif" width="200" /> |  |
| 撕 | <img src="https://s2.loli.net/2022/05/29/FDcam9ROPkqvwxH.jpg" width="200" > |  |
| 丢<br>扔 | <img src="https://s2.loli.net/2022/02/23/LlDrSGYdpcqEINu.jpg" width="200" /> |  |
| 抛<br>掷 | <img src="https://s2.loli.net/2022/03/10/W8X6cGZS5VMDOmh.gif" width="200" /> |  |
| 爬 | <img src="https://s2.loli.net/2022/02/23/hfmAToDuF2actC1.jpg" width="200" /> | 默认为随机选取一张爬表情<br>可使用数字指定特定表情<br>如：爬 13 自己 |
| 精神支柱 | <img src="https://s2.loli.net/2022/02/23/WwjNmiz4JXbuE1B.jpg" width="200" /> |  |
| 一直 | <img src="https://s2.loli.net/2022/02/23/dAf9Z3kMDwYcRWv.gif" width="200" /> | 支持gif |
| 加载中 | <img src="https://s2.loli.net/2022/02/23/751Oudrah6gBsWe.gif" width="200" /> | 支持gif |
| 转 | <img src="https://s2.loli.net/2022/02/23/HoZaCcDIRgs784Y.gif" width="200" /> |  |
| 小天使 | <img src="https://s2.loli.net/2022/02/23/ZgD1WSMRxLIymCq.jpg" width="200" /> | 图中名字为目标qq昵称<br>可指定名字，如：小天使 meetwq 自己 |
| 不要靠近 | <img src="https://s2.loli.net/2022/02/23/BTdkAzvhRDLOa3U.jpg" width="200" /> |  |
| 一样 | <img src="https://s2.loli.net/2022/02/23/SwAXoOgfdjP4ecE.jpg" width="200" /> |  |
| 滚 | <img src="https://s2.loli.net/2022/02/23/atzZsSE53UDIlOe.gif" width="200" /> |  |
| 玩游戏<br>来玩游戏 | <img src="https://s2.loli.net/2022/05/31/j9ZKB7cFOSklzMe.jpg" width="200" /> | 图中描述默认为：来玩休闲游戏啊<br>可指定描述<br>支持gif |
| 膜<br>膜拜 | <img src="https://s2.loli.net/2022/02/23/nPgBJwV5qDb1s9l.gif" width="200" /> |  |
| 吃 | <img src="https://s2.loli.net/2022/02/23/ba8cCtIWEvX9sS1.gif" width="200" /> |  |
| 啃 | <img src="https://s2.loli.net/2022/02/23/k82n76U4KoNwsr3.gif" width="200" /> |  |
| 出警 | <img src="https://s2.loli.net/2022/05/31/Q7WL1q2TlHgnERr.jpg" width="200" /> |  |
| 警察 | <img src="https://s2.loli.net/2022/03/12/xYLgKVJcd3HvqfM.jpg" width="200" > |  |
| 问问<br>去问问 | <img src="https://s2.loli.net/2022/02/23/GUyax1BF6q5Hvin.jpg" width="200" /> | 名字为qq昵称，可指定名字 |
| 舔<br>舔屏<br>prpr | <img src="https://s2.loli.net/2022/03/05/WMHpwygtmN5bdEV.jpg" width="200" /> | 支持gif |
| 搓 | <img src="https://s2.loli.net/2022/03/09/slRF4ue56xSQzra.gif" width="200" /> |  |
| 墙纸 | <img src="https://s2.loli.net/2022/03/10/tQRXzLamGyWi24s.jpg" width="200" /> | 支持gif |
| 国旗 | <img src="https://s2.loli.net/2022/03/10/p7nwCvgsU3LxBDI.jpg" width="200" /> |  |
| 交个朋友 | <img src="https://s2.loli.net/2022/03/10/SnmkNrjKuFeZvbA.jpg" width="200" /> | 名字为qq昵称，可指定名字 |
| 继续干活<br>打工人 | <img src="https://s2.loli.net/2022/04/20/LIak2BsJ9Dd5O7l.jpg" width="200" > |  |
| 完美<br>完美的 | <img src="https://s2.loli.net/2022/03/10/lUS1nmPAKIYtwih.jpg" width="200" /> |  |
| 关注 | <img src="https://s2.loli.net/2022/03/12/FlpjRWCte72ozqs.jpg" width="200" > | 名字为qq昵称，可指定名字 |
| 我朋友说<br>我有个朋友说 | <img src="https://s2.loli.net/2022/03/12/cBk4aG3RwIoYbMF.jpg" width="200" > | 默认使用发送者的头像<br>如：我朋友说 来份涩图 |
| 这像画吗 | <img src="https://s2.loli.net/2022/03/12/PiSAM1T6EvxXWgD.jpg" width="200" > |  |
| 震惊 | <img src="https://s2.loli.net/2022/03/12/4krO6y53bKzYpUg.gif" width="200" > |  |
| 兑换券 | <img src="https://s2.loli.net/2022/03/12/6tS7dDaprb1sUxj.jpg" width="200" > | 默认文字为：qq昵称 + 陪睡券<br>可指定文字 |
| 听音乐 | <img src="https://s2.loli.net/2022/03/15/rjgvbXeOJtIW8fF.gif" width="200" > |  |
| 典中典 | <img src="https://s2.loli.net/2022/03/18/ikQ1IB6hS4x3EjD.jpg" width="200" > |  |
| 哈哈镜 | <img src="https://s2.loli.net/2022/03/15/DwRPaErSNZWXGgp.gif" width="200" > |  |
| 永远爱你 | <img src="https://s2.loli.net/2022/03/15/o6mhWk7crwdepU5.gif" width="200" > |  |
| 对称 | <img src="https://s2.loli.net/2022/03/15/HXntCy8kc7IRZxp.jpg" width="200" > | 可使用参数“上”、“下”、“左”、“右”指定对称方向 |
| 安全感 | <img src="https://s2.loli.net/2022/03/15/58pPzrgxJNkUYRT.jpg" width="200" > | 可指定描述 |
| 永远喜欢<br>我永远喜欢 | <img src="https://s2.loli.net/2022/03/15/EpTiUbcoVGCXLkJ.jpg" width="200" > | 图中名字为目标qq昵称<br>可指定名字<br>可指定多个目标叠buff |
| 采访 | <img src="https://s2.loli.net/2022/03/15/AYpkWEc2BrXhKeU.jpg" width="200" > | 可指定描述 |
| 打拳 | <img src="https://s2.loli.net/2022/03/18/heA9fCPMQWXBxTn.gif" width="200" > |  |
| 群青 | <img src="https://s2.loli.net/2022/03/18/drwXx3yK14IMVCf.jpg" width="200" > |  |
| 捣 | <img src="https://s2.loli.net/2022/03/30/M9xUehlV64OpGoY.gif" width="200" > |  |
| 捶 | <img src="https://s2.loli.net/2022/03/30/ElnARr7ohVXjtJx.gif" width="200" > |  |
| 需要<br>你可能需要 | <img src="https://s2.loli.net/2022/03/30/VBDG74QeZUYcunh.jpg" width="200" > |  |
| 捂脸 | <img src="https://s2.loli.net/2022/03/30/NLy4Eb6CHKP3Svo.jpg" width="200" > |  |
| 敲 | <img src="https://s2.loli.net/2022/04/14/uHP8z3bDMtGdOCk.gif" width="200" > |  |
| 垃圾<br>垃圾桶 | <img src="https://s2.loli.net/2022/04/14/i1ok2NUYaMfKezT.gif" width="200" > |  |
| 为什么@我<br>为什么at我 | <img src="https://s2.loli.net/2022/04/14/qQYydurABV7TMbN.jpg" width="200" > |  |
| 像样的亲亲 | <img src="https://s2.loli.net/2022/04/14/1KvLjb2uRYQ9mCI.jpg" width="200" > |  |
| 啾啾 | <img src="https://s2.loli.net/2022/04/20/v3YrbLMnND8BoPK.gif" width="200" > |  |
| 吸<br>嗦 | <img src="https://s2.loli.net/2022/04/20/LlFNscXC1IQrkgE.gif" width="200" > |  |
| 锤 | <img src="https://s2.loli.net/2022/04/20/ajXFm95tHRM6CzZ.gif" width="200" > |  |
| 紧贴<br>紧紧贴着 | <img src="https://s2.loli.net/2022/04/20/FiBwc3ZxvVLObGP.gif" width="200" > |  |
| 注意力涣散 | <img src="https://s2.loli.net/2022/05/11/mEtyxoZ3DfwBCn5.jpg" width="200" > |  |
| 阿尼亚喜欢 | <img src="https://s2.loli.net/2022/05/11/U3ZMXHB1PduKckQ.jpg" width="200" > | 支持gif |
| 想什么 | <img src="https://s2.loli.net/2022/05/18/ck1jNO2K8Qd6Lo3.jpg" width="200" > | 支持gif |
| 远离 | <img src="https://s2.loli.net/2022/05/31/lqyOu25WPTsGBcb.jpg" width="200" > |  |
| 结婚申请<br>结婚登记 | <img src="https://s2.loli.net/2022/05/31/tZR3ls7cBrdGHTL.jpg" width="200" > |  |

## 更为详细的说明

你可以看到，部分指令支持自定义文字，那么最复杂的一种情况就是，你指定了某人的头像作为目标的同时需要指定昵称和文字，如“我朋友说”这一指令。

那么你可以这么写——

### “/我朋友RainChain说 灵音好可爱 谁赞成，谁反对 3032902237”

效果为用3032902237这一QQ号的头像并用RainChain这一昵称生成一条“灵音好可爱”“谁赞成，谁反对”两条消息（两条消息用**空格隔开**），效果图如下。

![效果图1](../../images/petpet/%E6%95%88%E6%9E%9C%E5%9B%BE1.jpg)

:::tip 指令规范
为了指令规范和便于记忆而言，我们建议你将QQ号或者@放在指令的最后，见上面指令所使用的那样。
:::