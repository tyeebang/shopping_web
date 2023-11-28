<%@page import="vo.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ONLY YOU</title>
<link rel="stylesheet" href="./css/style.css?umA">
<link rel="stylesheet" href="./css/items.css?umA">
<link rel="stylesheet" href="./css/login.css?umA">
<link rel="stylesheet" href="./css/register.css?umA">
</head>
<body>
	<!-- header -->
	<header>
		<div id="hd_tp">
			<%
			MemberVO login = (MemberVO)session.getAttribute("loginOK");
				if(login == null) {
			%>
					<ul id="hd_tp_ul">
						<li><a href="./login.jsp">LOGIN</a></li>
						<li><a href="./register.jsp">JOIN</a></li>
					</ul>
			<%
				} else if(login.getMemberId().equals("admin")) {
			%>
					<ul id="hd_tp_ul" style="width: 350px">
						<li><a href="/shopping_web/logout">LOGOUT(<%= login.getMemberId() %>)</a></li>
						<li><a href="./admin.jsp">only ADMIN</a></li>
					</ul>
			<%
				} else {
			%>
					<ul id="hd_tp_ul" style="width: 350px">
						<li><a href="/shopping_web/logout">LOGOUT(<%= login.getMemberId() %>)</a></li>
						<!-- <li><a href="#">CART</a></li> -->
						<li><a href="./myPage.jsp">MY PAGE</a></li>
					</ul>
			<%
				}
			%>
		</div>

		<div id="hd_logo">
			<a href="./index.jsp"> <img src="./img/logo/logo.png" alt="logo">
			</a>
		</div>

		<div id="hd_menu">
			<ul id="hd_bt_ul">
				<li><a href="./itemsTop.jsp">TOP</a></li>
				<li><a href="./itemsBottom.jsp">BOTTOM</a></li>
				<li><a href="./itemsOuter.jsp">OUTER</a></li>
				<li><a href="./itemsOps.jsp">OPS</a></li>
				<li><a href="./itemsSkirt.jsp">SKIRT</a></li>
			</ul>
		</div>

		<div id="scroll">
			<div id="scroll_up"></div>
			<div id="scroll_down"></div>
		</div>
	</header>