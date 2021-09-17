# sula

*QueryTable* *Table*
- 属性 props
> [remoteDataSource](https://docs.sula.vercel.app/component/table#remotedatasource) 
> 
表格初始化请求，分页按钮点击时从这里发送请求
```javascript
remoteDataSource: {
url: urlsMarket.getMarketList,
method: 'post',
// 处理请求参数
convertParams: (ctx) => {
  let provinceCode; let cityCode;

  // 提取搜索条件中的省份和城市，时间范围截取可参考
  if (ctx.params.filters && ctx.params.filters.area) {
    [provinceCode, cityCode] = ctx.params.filters.area.split('-');
  }

  // 将搜索条件转换
  const result = formatTableParams.requestParams({
    ...ctx,
    myParams: { provinceCode, cityCode },
    except: ['area']
  });

  return result
},
converter: (ctx)=>formatTableParamsresponseParams(ctx),
}
```