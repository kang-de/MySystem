function DataCopyInvokeCallbackMethod(xmlHttpObj,datasObj)
{
	
	if(xmlHttpObj.responseText!=null&&xmlHttpObj.responseText!='')
	{
		alert(xmlHttpObj.responseText);
	}
	else
	{
		alert("数据复制失败");
	}
	refreshComponentDisplay('shitingxingneng_button',null,false);
}
function testcallback(pageid,reportid,selectedTrObjArr,deselectedTrObjArr)
{
	var str=getTrObjsValue(deselectedTrObjArr);
	alert('被选中的所有行：'+str);
	if(str!=null&&str!='')
	{
		alert('本次被取消选中的行：'+str);
	}
	str=getTrObjsValue(selectedTrObjArr);
	if(str!=null&&str!='')
	{
		alert('本次选中的行：'+str);
	}
	var allSelectedTrObjsArr=getListReportSelectedTrObjs(pageid,reportid);//取到所有选中的行对象
	str=getTrObjsValue(allSelectedTrObjsArr);
	if(str!=null&&str!='')
	{
		alert('被选中的所有行：'+str);
	}
}
function testonload1()
{
	alert('我被执行了：');
	refreshComponentDisplay('xinxijiansuo','report1',false);
	
}
function SheBeiRefresh()
{

	artDialog.open.origin.refreshComponentDisplay('shebei',null,false);

}
function RefreshLihuafeng()
{

	artDialog.open.origin.refreshComponentDisplay('zhuangbeishiyong','report1',false);

}
function RefreshLihuafeng2()
{

	artDialog.open.origin.refreshComponentDisplay('zhuangbeishiyong','report2',false);

}