<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="./menu.jsp" %>


    <!-- article -->
    <article class="log_article">
        <div id="loginContainer">
            <h3>LOGIN</h3>
            
            <form action="/shopping_web/login" method="post">
                <div id="loginBox">
                    <input type="text" placeholder="아이디" name="id">
                    <input type="password" placeholder="비밀번호" name="pwd">
                    <input type="submit" value="로그인">
                </div>
            </form>
    
            <div id="loginOption">
                <a href="#">아이디 찾기</a>
                <p> | </p>
                <a href="#">비밀번호 찾기</a>
                <p> | </p>
                <a href="./register.jsp">회원가입</a>
            </div>
        </div>
    </article>

<%@ include file="./footer.jsp" %>