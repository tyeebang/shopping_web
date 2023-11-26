<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../menu.jsp" %>

    <article class="main_article">
        <div id="slide">
            <div>
                <input type="radio" name="slide" id="hdZipSlide" checked>
                <input type="radio" name="slide" id="strSlide">
                <input type="radio" name="slide" id="itSlide">
                <a href="./items.jsp"><img src="./img/slide/hoodZipSlide.jpg" alt="hoodZipSlide"></a>
                <a href="./items.jsp"><img src="./img/slide/sweatherSlide.jpg" alt="sweatherSlide"></a>
                <a href="./items.jsp"><img src="./img/slide/itemSlide.jpg" alt="itemSlide"></a>
            </div>
        </div>

        <h1>BEST CHOICE</h1>
        <p>only you, 당신을 위한 최고의 상품을 직접 만나보세요</p>
        
        <div id="items">
            <div class="item">
                <!-- DB -> items -->
            </div>
        </div>
    </article>

<%@ include file="../footer.jsp" %>