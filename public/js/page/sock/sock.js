$(document).ready(function(){
  var ul = $('#p-ul-wrap');
  var lists = sockData.list;
  ul.append(tpl(lists));
});


function tpl(lists){
  var arr = [];
  for(var i = 0;i<lists.length;i++){
    arr.push('<li>');
    arr.push('<a hidefocus="true" target="_blank" href="'+lists[i].href+'">');
    arr.push('<div class="image" title="'+lists[i].alt+'">');
    arr.push('<img class="lazy" data-src="'+lists[i].img+'" alt="'+lists[i].alt+'" src="'+lists[i].img+'" style="display: inline;">');
    arr.push('</div>');
    arr.push('<div class="title" title="'+lists[i].alt+'">');
    arr.push(lists[i].alt);
    arr.push('</div>');
    arr.push('<div class="price-info ">');
    arr.push('<span class="pink f-14">¥</span>');
    arr.push('<span class="price price-int">'+lists[i].priceInt+'</span><span class="price price-decimal">'+lists[i].priceDecimal+'</span>');
    arr.push('<span class="origin-price strike mr-10">'+lists[i].originPrice+'</span>');
    arr.push('<span class="discount">'+lists[i].discount+'</span>');
    arr.push('</div>');
    arr.push('</a>');
    arr.push('</li>');
  }
  return arr.join('');
}
