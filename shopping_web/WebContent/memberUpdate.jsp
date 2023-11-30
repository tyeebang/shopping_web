<%@page import="dao.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");
		String idFir, id, pwd, mail, name, phone, adrr;
		int n = 0;
		MemberDAO dao = new MemberDAO();

		idFir = request.getParameter("idFir");
		id = request.getParameter("id");
		pwd = request.getParameter("pwd");
		mail = request.getParameter("mail");
		name = request.getParameter("name");
		phone = request.getParameter("phone");
		adrr = request.getParameter("addr");
		
		n = dao.updateMember(idFir, id, pwd, mail, name, phone, adrr);
		
		if(n > 0) {
			out.print("<script> alert('success'); </script>");
			response.sendRedirect("./index.jsp");
		} else {
			out.print("<script> alert('failed'); history.back(); </script>");
		}
	%>
</body>
</html>