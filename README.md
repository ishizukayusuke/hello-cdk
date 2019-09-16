# awscdk

ちょっと触ってみた(s3立てるだけ)。  

[元記事](https://qiita.com/is_ryo/items/8e6787a457a84447461a)

## 前提条件

```
Node.js >= 8.11.x
TypeScript => 2.7
```

## インストール

```
$ npm i -g aws-cdk
$ cdk --version
1.8.0 (build 5244f97)
$ npm install
```

## awscli設定

```
$ aws configure
```

## コマンド

```
// デプロイ
$ cdk deploy

// スタックを指定してデプロイ
$ cdk deploy ${StackName} 

// CloudFormationのテンプレートファイル生成
$ cdk synth

// 差分を確認
$ cdk diff

// 破壊
$ cdk destroy
```