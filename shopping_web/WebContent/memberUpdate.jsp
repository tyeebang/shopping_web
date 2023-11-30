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
		
        out.println("<script>");
        if(n > 0) {
            out.println("alert('Success, please log in again');");
            out.println("window.location.href = './index.jsp';");
            out.println("</script>");
            session.removeAttribute("loginOK");
        } else {
            out.println("alert('Failed');");
            out.println("history.back();");
            out.println("</script>");
        }
    %>
</body>
</html>