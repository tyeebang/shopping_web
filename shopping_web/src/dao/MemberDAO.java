package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import common.JdbcUtil;
import vo.MemberVO;

public class MemberDAO {
	
	public MemberDAO() {
		
	}
	
	
	public MemberVO getMemberData(String id) {
		MemberVO vo = null;
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from member where member_id = ?";
		
		try {
			conn = JdbcUtil.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			
			if (rs.next()) {
				vo = new MemberVO();
				vo.setMemberId(rs.getString("member_id"));
				vo.setMemberPwd(rs.getString("member_pwd"));
				vo.setMemberMail(rs.getString("member_mail"));
				vo.setMemberName(rs.getString("member_name"));
				vo.setMemberPhone(rs.getString("member_phone"));
				vo.setMemberAddr(rs.getString("member_addr"));
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
			System.out.println("checkLoginUser : sql error");
		}
		
		return vo;
	}
	
	
	public boolean existID(String id) {
		boolean isExist = false;

		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from member where member_id = ?";
		
		try {
			conn = JdbcUtil.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			
			if (rs.next()) {
				isExist = true;
			}
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
			System.out.println("checkLoginUser : sql error");
		} finally {
			JdbcUtil.close(conn, pstmt, rs);
		}
		
		return isExist;
	}
	
	
	public int removeMember(String id) {
		int result = 0;
		Connection conn = null;
		PreparedStatement pstmt = null;
		String sql = "delete from member where member_id = ?";
		
		try {
			conn = JdbcUtil.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return result;
	}
	
	
	public int insertMember(MemberVO data) {
		int result = 0;
		Connection conn = null;
		PreparedStatement pstmt = null;
		String sql = "insert into member(member_id, member_pwd, member_mail, member_name, member_phone, member_addr) values(?, ?, ?, ?, ?, ?)";
		
		try {
			conn = JdbcUtil.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, data.getMemberId());
			pstmt.setString(2, data.getMemberPwd());
			pstmt.setString(3, data.getMemberMail());
			pstmt.setString(4, data.getMemberName());
			pstmt.setString(5, data.getMemberPhone());
			pstmt.setString(6, data.getMemberAddr());
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return result;
	}
	
	
	public int updateMember(String idFir, String id, String pwd, String mail, String name, String phone, String addr) {
		int result = 0;
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		String sql = "update member set member_id = ?, member_pwd = ?, member_mail = ?, member_name = ?, member_phone = ?, member_addr = ? where member_id = ?";
		
		try {
			conn = JdbcUtil.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			pstmt.setString(2, pwd);
			pstmt.setString(3, mail);
			pstmt.setString(4, name);
			pstmt.setString(5, phone);
			pstmt.setString(6, addr);
			pstmt.setString(7, idFir);
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, pstmt);
		}
		
		return result;
	}
	
	
}
