$('button').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: 'https://script.google.com/a/turner.io/macros/s/AKfycby9oN0_8u43R7i7SQx-VK6QDIqCe0zzgA-kFvABuQiINdRiOH0/exec',
    method: 'get',
    dataType: 'json',
    data: { protest: $('#protest').val() }
  }).success(function(response){ console.log(response); })
})

$('video').on('canplaythrough', function() {
	this.play()
})