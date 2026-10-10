---
title: "把旧账单一次搬进平生"
description: "把其他记账 App、银行或自己整理的账单一次性导入平生。支持 CSV 与 Excel，自动识别列、自动归类、自动去重。"
group: "finance"
order: 5
---

把其他记账 App、银行或自己整理的账单导入平生。支持 <strong>CSV</strong> 与 <strong>Excel（.xlsx）</strong>，自动识别列、自动归类、自动去重。不知道怎么整理？先下载下面的模板照着填。

> <strong>平生记账导入模板.csv</strong>：含表头与 6 行示例，照着填即可零配置识别。 [下载模板](/vitae/downloads/hiwik-import-template.csv)

## 在哪里导入

<strong>设置 → 账单导入 → 导入账单</strong>，点进去是一个独立的导入页，从上到下三步走：

1. <strong>下载模板文件</strong> —— 不知道该怎么整理时，先下这个模板照着填。
2. <strong>选择数据文件</strong> —— 选你要导入的 CSV / Excel 文件。
3. <strong>开始解析</strong> —— 点底部按钮，进入预览确认页。

<div class="shots">
<figure><img src="/vitae/images/screenshots/import-entry.png" alt="账单导入入口" loading="lazy"><figcaption>入口：设置 → 财务 →「导入账单」</figcaption></figure>
<figure><img src="/vitae/images/screenshots/import-steps.png" alt="导入页三步" loading="lazy"><figcaption>导入页：① 下载模板 → ② 选择文件 → ③ 开始解析</figcaption></figure>
</div>

## 支持哪些文件

| 类型 | 说明 |
|---|---|
| CSV | 逗号分隔，UTF-8 / GB18030 / UTF-16 编码都能自动识别。 |
| Excel | `.xlsx`（不支持老的 `.xls`，请在 Excel 里另存为 .xlsx）。 |

### 数据可以来自

- <strong>平生模板</strong>：下载模板照填，零配置识别。
- <strong>其他记账 App 导出</strong>：导出成 CSV / Excel 即可。
- <strong>银行 / 支付账单</strong>：导出成 CSV / Excel 后即可。
- <strong>自己用 Excel 整理的流水</strong>。

> 列名不规范也没关系：识别不了时，会让你<strong>手动指认哪一列是日期、哪一列是金额</strong>，指完照样能导。

## 推荐做法：用模板

最稳的方式是<strong>先下载模板</strong>，把数据填进去再导。模板的列如下：

| 列名 | 必填 | 说明 | 示例 |
|---|---|---|---|
| 交易时间 |  | 日期或日期+时间 | `2026-05-01 12:20` |
| 收/支 |  | 写「支出」或「收入」 | 支出 |
| 金额 |  | 正数即可，方向由「收/支」决定 | `32.50` |
| 分类 |  | 一级分类名，留空会自动猜 | 餐饮 / 交通 / 购物… |
| 账户 |  | 用哪个钱包付的 | 微信 / 招商银行 |
| 备注 |  | 这笔花在什么上，或补充说明 | 工作日午餐 和同事拼单 |

### 要点

- <strong>金额一律写正数</strong>，是支出还是收入由「收/支」那一列决定，别写负号。
- <strong>时间</strong>支持多种格式：`2026-05-01 12:20:00`、`2026/05/01`、`2026年05月01日` 都行，按北京时间理解。
- <strong>分类可留空</strong> —— 留空时平生会根据「备注」自动猜分类，拿不准的还能用 AI 优化。

## 从其他文件导出怎么对应

不用改列名，平生会自动识别这些常见叫法：

- <strong>日期列</strong>：交易时间 / 时间 / 日期 / 记账日期 / 账单时间 / date / time
- <strong>金额列</strong>：金额 / amount / money
- <strong>方向列</strong>：收/支 / 收支 / 类型 / type；或「收入」「支出」分成两列；或金额带正负号
- <strong>说明列</strong>：商品说明 / 商品 / 项目 / 标题 / 交易对方 / 说明
- <strong>分类列</strong>：分类 / 类别 / category / 一级分类
- <strong>账户列</strong>：账户 / 支付方式 / 钱包
- <strong>备注列</strong>：备注 / note / memo / 描述

> 只要文件里有<strong>日期</strong>和<strong>金额（或收入/支出分列）</strong>，就能导。

## 预览确认页能看到什么

点「开始解析」后进入预览页：

- <strong>扫描结果</strong>：解析行数、可导入、已存在（跳过）、无效（跳过）四个数。
- <strong>导入数据独有的分类</strong>：文件里有、但平生还没有的分类（如「宠物」「母婴」），会列出来，可一键建成你自己的自定义分类；关掉开关则这些记录归到「其他支出」。
- <strong>用 AI 优化分类</strong>：对自动归类没把握的记录，点一下用 AI 重新归类。
- <strong>前几笔预览</strong>：抽几笔给你核对格式对不对。

确认无误，点底部「开始导入」即可。

## 自动去重

平生用 <strong>时间 + 金额 + 标题</strong> 作为同一笔交易的判断依据：

- 文件里重复的行、以及<strong>已经在账本里的记录</strong>，都会被自动跳过，计入「已存在」。
- 所以<strong>重复导入同一个文件不会产生重复账单</strong>，导一半中断了再导也安全。

> 大文件也没问题：解析、预览、写入都在后台进行，不卡界面，写入时分批保存并显示进度。

## 会上传我的账单吗

解析、去重、规则归类都在<strong>本机</strong>完成。只有你主动点「用 AI 优化分类」时，才会把待归类那几笔的<strong>标题 / 备注</strong>发给分类服务，不含金额、账户等敏感信息。

## 常见问题

### 导入后金额方向反了？

检查「收/支」列。金额请写正数，方向交给「收/支」列表达，不要又写负号又写「支出」。

### 提示「找不到表头」或「文件编码无法识别」？

多半是文件被二次编辑或编码异常。用模板重新整理，或在 Excel 里「另存为 CSV UTF-8 / xlsx」再试。

### `.xls` 老格式能导吗？

不能，请在 Excel 里另存为 `.xlsx`。

### 分类没认对怎么办？

导入前可在预览页点「用 AI 优化分类」；导入后也能在账单里逐笔修改分类。

## 还有问题？

导入遇到问题，欢迎邮件联系，我们会在 7 个工作日内回复。

hongsikunjob@gmail.com
