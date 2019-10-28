let phone =11813575;//填入电话号码
let url = "https://mina.10010.com/wxapplet/bind/getIndexData/alipay/alipaymini?user_id="+phone;
$httpClient.get(url,function (error, response, data) {
    if(!error){
        let dataobj = JSON.parse(data);
        var result = dataobj.dataList;
        $notification.post(dataobj.packageName+'   时间:'+dataobj.flush_date_time,result[1].remainTitle+result[1].number+result[1].unit,result[0].remainTitle+result[0].number+result[0].unit+' '+result[2].remainTitle+result[2].number+result[2].unit,data);

    }
});
$done();
