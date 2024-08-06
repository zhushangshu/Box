var rule={
	title:'农民影视',
	host:'https://m.nmddd.com/',
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":MOBILE_UA}});let src = jsp.pdfh(html,"body&&a:eq(1)&&href");print(src);HOST=src',
	url:'/vod-list-id-fyfilter.html',
	filterable:1,
	filter_url:'{{fl.cateId}}-pg-fypage-order--by-{{fl.by or "time"}}-class-0-year-{{fl.year}}-letter-{{fl.letter}}-area-{{fl.area}}-lang-',
	
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		26:{cateId:'26'}
	},
	searchUrl:'/index.php?m=vod-search&wd=**',
	searchable:2,
	headers:{
		'User-Agent': 'MOBILE_UA',
	},
    class_name:'电影&连续剧&综艺&动漫&短剧',
    class_url:'1&2&3&4&26',
	play_parse: true,
	lazy:'',
	limit:6,
	推荐:'.globalPicList .resize_list;*;img&&data-src;*;*',
	一级:'.globalPicList li;.sTit&&Text;img&&src;.sBottom--em&&Text;a&&href',
	二级:{
		"title":".title&&Text;.type-title&&Text",
		"img":".page-hd&&img&&src",
		"desc":".desc_item:eq(3)&&Text;.desc_item:eq(4)--span&&Text;;.desc_item:eq(1)--span&&Text;.desc_item:eq(2)--span&&Text",
		"content":".detail-con p&&Text",
		"tabs":".hd li",
		"lists":".numList:eq(#id) li"
	},
	搜索:'.ulPicTxt.clearfix li;*;img&&data-src;.sDes:eq(1)&&Text;*',
}