package common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcUtil {

	public static Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "hr", "hr");
			
		} catch(Exception e)
		{
			System.out.println("DB Connection failed");
			e.printStackTrace();
		}
		
		return conn;
	}
	
	public static void close(Connection conn, PreparedStatement pstmt)
	{
		if(pstmt != null)
		{
			try {
				pstmt.close();
			} catch(SQLException e)
			{
				System.out.println("pstmt.close() failed");
				e.printStackTrace();
			}
		}
		
		if(conn != null)
		{
			try {
				conn.close();
			} catch(SQLException e) {
				System.out.println("conn.close() failed");
				e.printStackTrace();
			}
		}
	}
	
	public static void close(Connection conn, PreparedStatement pstmt, ResultSet rs)
	{
		if(rs != null)
		{
			try {
				rs.close();
			} catch (SQLException e)
			{
				System.out.println("rs.close() failed");
				e.printStackTrace();
			}
		}
		
		close(conn, pstmt);
	}
}
