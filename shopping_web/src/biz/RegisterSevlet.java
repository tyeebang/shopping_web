package biz;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.MemberDAO;
import vo.MemberVO;

/**
 * Servlet implementation class RegisterSevlet
 */
@WebServlet("/register")
public class RegisterSevlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterSevlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		MemberDAO dao = new MemberDAO();
		boolean isExist = dao.existID(request.getParameter("memberId"));
		int result = 0;
		
		if (isExist) {
			out.println("<script> alert('The ID that already exists.'); history.back(); </script>");
		} else {
			MemberVO data = new MemberVO();
			data.setMemberId(request.getParameter("memberId"));
			data.setMemberPwd(request.getParameter("memberPwd"));
			data.setMemberMail(request.getParameter("mail"));
			data.setMemberName(request.getParameter("name"));
			data.setMemberPhone(request.getParameter("phone"));
			data.setMemberAddr(request.getParameter("addr"));
			
			result = dao.insertMember(data);
			if (result > 0) {
				HttpSession session = request.getSession();
				session.setAttribute("loginOK", data);
				out.println("<script> alert('join success'); </script>");
			} else {
				out.println("<script> alert('join failed'); </script>");
			}
			
			response.sendRedirect("/shopping_web/index.jsp");
		}
	}

}
