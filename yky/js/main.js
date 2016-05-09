 $(function(){
  var searchContent=$(".search-content")
  searchContent.focus(function(){
   searchContent.val(" ")
  })
  searchContent.blur(function(){
   searchContent.val("站内搜索")
  })

  var navlist=$(".nav li")
  navlist.mouseover(function(){
    navlist.first().css({background:'none'})
    navlist.css({background:'none'})
    $(this).css({background:'#6AAA58'})
  })

var imgs=$('img')
var array=[]
 imgs.each(function(index){
  var top=$(this).offset().top
    var height=$(window).height()
    var sTop=$(window).scrollTop()
  array[index]=$(this).attr("src")
  $(this).attr("src","")
  if (top<height+sTop) {
      $(this).attr("src",array[index])
    };
 })
 $(window).scroll(function(){
  imgs.each(function(index){
    var top=$(this).offset().top
    var height=$(window).height()
    var sTop=$(window).scrollTop()
    if (top<height+sTop) {
      $(this).attr("src",array[index])
    };
  })
 })

 $(".h-small a").last().css({marginRight:0})
 var hBig=$(".h-big")
 $(".h-small a").mouseover(function(){
    var index=$(this).index()
    hBig.css({display:'none'}).eq(index).css({display:'block'})
 })
})
