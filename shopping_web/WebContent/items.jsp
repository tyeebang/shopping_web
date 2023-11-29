<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="./menu.jsp" %>


    <!-- article -->
    <article class="ca_article">
    <%
    	String category = request.getParameter("category");
    %>
        <h1><%= category %></h1>
        <p><%= category %> 인기 상품을 만나보세요</p>
        
        <div id="ca_items">

        </div>
    </article>

<%@ include file="./footer.jsp" %>