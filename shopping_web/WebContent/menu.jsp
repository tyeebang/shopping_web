<%@page import="vo.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ONLY YOU</title>
<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" href="./css/items.css">
<link rel="stylesheet" href="./css/login.css">
<link rel="stylesheet" href="./css/register.css">
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
				} else {
			%>
			<ul id="hd_tp_ul" style="width: 350px">
					<li><a href="/shopping_web/logout">LOGOUT(<%= login.getMemberId() %>)</a></li>
					<li><a href="#">CART</a></li>
					<li><a href="#">MY PAGE</a></li>
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
				<li><a href="./items.jsp">TOP</a></li>
				<li><a href="./items.jsp">BOTTOM</a></li>
				<li><a href="./items.jsp">OUTER</a></li>
				<li><a href="./items.jsp">OPS</a></li>
				<li><a href="./items.jsp">SKIRT</a></li>
				<li><a href="./items.jsp">SEASON</a></li>
			</ul>
		</div>

		<div id="scroll">
			<div id="scroll_up"></div>
			<div id="scroll_down"></div>
		</div>
	</header>