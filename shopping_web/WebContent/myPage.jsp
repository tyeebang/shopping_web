<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="./menu.jsp" %>


	<%
		MemberVO id = (MemberVO)session.getAttribute("loginOK");
	%>
    <!-- article -->
    <article id="myPg">
		<form action="./memberUpdate.jsp" method="post">
			<div class="info">
				<p>기존 ID : </p>
				<input type="text" name="idFir" value="<%= id.getMemberId() %>" readonly>
			</div>
			<div class="info">
				<p>ID : </p>
				<input type="text" name="id" required>
			</div>
			<div class="info">
				<p>PW : </p>
				<input type="password" name="pwd" required>
			</div>
			<div class="info">
				<p>MAIL : </p>
				<input type="text" name="mail" required>
			</div>
			<div class="info">
				<p>NAME : </p>
				<input type="text" name="name" required>
			</div>
			<div class="info">
				<p>PHONE NUM : </p>
				<input type="text" name="phone" required>
			</div>
			<div class="info">
				<p>ADDRESS : </p>
				<input type="text" name="addr" required>
			</div>
            <div class="btns">
                <input type="submit" value="정보 수정">
            </div>
		</form>
		
		<form action="/shopping_web/delete">
			<input type="hidden" name="idFir" value="<%= id.getMemberId() %>" readonly>
    		<input type="submit" value="회원 탈퇴" id="del">
		</form>
    </article>

<%@ include file="./footer.jsp" %>