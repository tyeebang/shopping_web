<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="./menu.jsp" %>


    <!-- article -->
    <article class="join_article">
        <div id="joinContainer">
            <h3>JOIN US</h3>

            <form action="">            
                <table>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="id"></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="pw"></td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td><input type="password" name="pw"></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" name="email"></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="name"></td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="text" name="phoneNum"></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td><input type="text" name="adress"></td>
                    </tr>
                </table>
                <input type="submit" value="가입">
            </form>
        </div>
    </article>

<%@ include file="./footer.jsp" %>