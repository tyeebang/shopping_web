<%@page import="dao.MemberDAO"%>
<%@page import="dao.MemberDAO.MemberInfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="./menu.jsp"%>


<%
    MemberDAO dao = new MemberDAO();
    MemberInfo memberInfo = dao.getMemberList();
%>

<!-- article -->
	<article id="ad_art">
		<h1>회원 목록 조회(비번 제외 가능)</h1>
    	<table border="1">
        	<tr>
            	<th>ID</th>
            	<th>Email</th>
            	<th>Name</th>
            	<th>Phone</th>
            	<th>Address</th>
        	</tr>

        	<% 
        		for (int i = 0; i < memberInfo.getListId().size(); i++) { 
        	%>
            	<tr>
                	<td><%= memberInfo.getListId().get(i) %></td>
                	<td><%= memberInfo.getListMail().get(i) %></td>
                	<td><%= memberInfo.getListName().get(i) %></td>
                	<td><%= memberInfo.getListPhone().get(i) %></td>
                	<td><%= memberInfo.getListAddr().get(i) %></td>
            	</tr>
        	<%
        		} 
        	%>
    	</table>
	</article>

<%@ include file="./footer.jsp"%>