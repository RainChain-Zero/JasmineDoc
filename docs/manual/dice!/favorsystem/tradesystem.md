---
category:
  - 使用指南
  - Dice!
tag:
  - 好感组件
  - 物品
  - 交易
---


# 交易系统——一半一半

> "你的生命给了我一半"
> 
> "你的爱也给了我一半"

你知道吗？在同一个世界中，只有一个茉莉和一位陪在茉莉身边的人。

在这里，我们将介绍如何让你跨越时空和不同时间/世界线的大家交易！大家可以用自己的『一半』换取对方的另『一半』。

## 交易系统指令集

### 1. "交易 @< QQ > [T]? 给出的道具数量 给出的道具 [F]? 对方要给出的道具数量 对方要给出的道具"

这个指令，看上去挺复杂的是吧？所以我们现在详细说明一下它——

+ 参数之间的空格是可选可不选的
+ T和F不区分大小写，语意为trade sth for sth 中的T和F，**可以省略**
+ 如果**对方要给出的道具数量设为0**，则视为**赠送**
+ 如果自己的道具数量余额不足，交易**自动判定失败**
+ 同一用户**只能有一次同时进行的交易**，如果多次进行，**只保留最后一次请求**，之前的请求视作无效
+ @QQ**必须是群内有效的@** 否则视作无效
+ ~~支持将“@< QQ >"**改成单纯的QQ号**，以**支持跨群交易**~~（因为腾讯审查原因，本条已暂时**弃用**）

> 例:“交易 @xxx T 1 FL F 1 FL”


### 2. "交易同意/拒绝"

这个看起来可就简单多了！当对方向你发送交易请求时，你可以通过这条指令来选择你是否同意或者拒绝他。

+ 参数空格可选可不选
+ 同意和拒绝二选一
+ 如果对方要求给出的道具余额不足，即使同意系统也会判定失败
