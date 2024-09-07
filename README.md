# 微信Notion助手

> [!WARNING]
> 文档撰写中，请暂勿使用本项目。
> 预期完成时间：2024-09-10 12:00:00

## 安装、配置ollama并启动

详见[ollama](https://github.com/ollama/ollama)项目。

## 拷贝一份我的notion笔记demo

1. 打开网站：https://huaqinda.notion.site/a64b0b2bd8fe4db388cb8d1fbe9bb196?v=9c45fc728e6e4e75aae8d4c2dc7f2719&pvs=25

2. 点击复制

![](https://oss.kinda.info/image/202409080001811.png)

3. 点击右上角share

![](https://oss.kinda.info/image/202409080003537.png)

4. 点击Publish

![](https://oss.kinda.info/image/202409080002170.png)

5. 记录下`ID`作为`Notion Database ID`

> [!TIP]
> 注意ID是`/`后面的内容

![](https://oss.kinda.info/image/202409080002172.png)

## 创建你自己的Notion integration

1. 打开网站：https://www.notion.so/profile/integrations

2. 点击 New integration

![](https://oss.kinda.info/image/202409080009849.png)

3. 配置信息

![](https://oss.kinda.info/image/202409080009848.png)

4. 点击show显示密钥，这个密钥将作为`Notion API Key`

![](https://oss.kinda.info/image/202409080011321.png)

5. 打开密钥权限

![](https://oss.kinda.info/image/202409080010978.png)

6. 保存

![](https://oss.kinda.info/image/202409080011395.png)

## 克隆项目

```shell
git clone https://github.com/Alndaly/WeChat-assistant.git
```

## 环境配置

> [!TIP]
> 如果你没有pnpm的话也可以使用npm或者yarn。

```shell
cd WeChat-assistant
pnpm i
```

## 变量替换

> [!TIP]
> 如果你是windows系统的话，cp这个命令可能无法执行，此时请直接复制一份`./env.example`然后改名为`./env`。

```shell
cp ./env.example ./env
```

打开`env`文件，将`NOTION_API_KEY`和`NOTION_DATABASE_ID`的具体内容替换为上文中提到的你的`Notion Api Token`和`Notion Database ID`。

## 启动

```shell
npx tsx index.ts
```

启动之后扫码绑定微信，然后发送消息给自己，即可根据你的消息类型在Notion中你的database创建一条对应笔记。