<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="./menu.jsp" %>


	<%
		MemberVO id = (MemberVO)session.getAttribute("loginOK");
	%>
    <!-- article -->
    <div>
		<form action="./memberUpdate.jsp" method="post">
			<input type="text" name="idFir" value="<%= id.getMemberId() %>" readonly>
			<input type="text" name="id">
			<input type="password" name="pwd">
			<input type="text" name="mail">
			<input type="text" name="name">
			<input type="text" name="phone">
			<input type="text" name="addr">
			<input type="submit">
		</form>
    </div>

<%@ include file="./footer.jsp" %>