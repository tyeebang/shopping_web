<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>
<body>

	<p id="demo"></p>

	<br>

	<button type="button">click</button>
	<script>
		$(function() {
			$("button").click(
					function() {
						$.ajax({
							url : "./items.json",
							type : 'get',
							dataType : "json",

							success : function(json) {
								let str = JSON.stringify(json);
								alert(str);

								for (let i = 0; i < json.length; i++) {
									$("#demo").append(i + '번째 ' + json[i].it_name + " || ");
									$("#demo").append(json[i].price + " || ");
									$("#demo").append(json[i].img_url + " || ");
									$("#demo").append(json[i].category + "<br>");
								}

							},
							error : function() {
								alert('error');
							}
						});
				});
		});
	</script>
</body>
</html>