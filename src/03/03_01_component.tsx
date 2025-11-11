import React from "react";

// 컴포넌트는 ui를 구성하는 독립적이며
// 재사용 가능한 작은 단위를 의미함
// 리액트는 여러 개의 컴포넌트를 조합해 하나의 애플리케이션을 완성함.

// header : 로고, 내비게이션 바
function Header() {
    return(
        <header>
            <h1>My Website</h1>
            <Nav />
        </header>
    );
}

// nav : 웹사이트 메뉴
function Nav() {
    return(
        <nav>Home | About | Services | Contact</nav>
    );
}

// article : 주요 콘텐츠
function Article() {
    return(
        <article>
            <h2>Main Article</h2>
        </article>
    );
}

// section : 세부 콘텐츠
function Section() {
    return(
        <section>
            <h3>More Details</h3>
        </section>
    );

}

// aside : 광고, 추가 정보
function Aside() {
    return(
        <aside>
            <h3>Related Links</h3>
        </aside>
    );
}

// footer : 저작권 정보, 연락처
function Footer() {
    return(
        <footer>
            <p>ⓒ 2025 My Website. All rights reserved.</p>
        </footer>
    );
}


function _03_01_Component(){

    return (
        <div>
            <Header />
            <Article />
            <Section />
            <Aside />
            <Footer />
        </div>
    )
}

export default _03_01_Component;