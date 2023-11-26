<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="./menu.jsp" %>


    <!-- article -->
    <article class="join_article">
        <div id="joinContainer">
            <h3>JOIN US</h3>

            <form action="/shopping_web/register" method="post">            
                <table>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="memberId" required></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="memberPwd" required></td>
                    </tr>
                    <!--<tr>
                        <td>비밀번호 확인</td>
                        <td><input type="password" name="pw"></td>
                    </tr>-->
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" name="mail" required></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="name" required></td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="text" name="phone" required></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td><input type="text" name="addr" required></td>
                    </tr>
                </table>
                <input type="submit" value="가입">
            </form>
        </div>
    </article>

<%@ include file="./footer.jsp" %>