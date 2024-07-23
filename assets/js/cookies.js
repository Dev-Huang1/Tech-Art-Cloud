function deleteSiteCookies() {
    const cookies = document.cookie.split(";");

    // 获取当前域名
    const domain = window.location.hostname;

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        
        // 删除 cookie，指定域名和路径为当前域名
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + domain;

        // 处理没有域名的情况（某些 cookies 没有指定域名）
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}

// 调用函数在页面加载时删除当前网站的所有 cookies
deleteSiteCookies();
