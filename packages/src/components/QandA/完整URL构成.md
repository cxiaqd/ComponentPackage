# 一个完整的网址（URL）包含以下六个部分：

## 协议（Protocol）：
表示访问网页时使用的通信协议，常见的有HTTP、HTTPS、FTP等。
## 域名（Domain Name）：
表示网站的名称，是网站在互联网上的唯一标识。域名由多个部分组成，包括主域名和子域名。
例如www.example.com中的"www"是子域名，"example"是主域名，".com"是顶级域名。顶级域名：也就是后缀。
例如.com、.cn等。（备注：域名可以说是一个IP地址的代称，目的是为了便于记忆后者。例如，百度的IP地址是220.181.38.148，域名是baidu.com。人们可以直接通过访问baidu.com来访问，也可以通过IP地址220.181.38.148来访问，但是很明显baidu.com比220.181.38.148容易记忆，因此人们只需要记忆baidu.com这言简意赅的字符，而不需要记忆这种没有含义的数字。）
## 端口号（Port）：
表示用于访问网站的端口号，默认为80。
例如，http://www.example.com:8080中的"8080"就是端口号。端口号的范围是：0~65535
## 路径（Path）：
表示网站上具体的文件或目录路径。
例如，http://www.example.com/path/to/file中的"/path/to/file"就是路径（网址可以没有端口号）。
## 查询参数（Query Parameters）：
表示向服务器传递的参数，用于定制请求的内容。查询参数以"?"开头，多个参数之间使用"&"分隔。
例如，http://www.example.com/path/to/file?param1=value1&param2=value2中的"param1=value1&param2=value2"就是查询参数，这种常见于项目中路由跳转的传参、get请求等。
## 锚点（Anchor）：
表示网页内部的定位点。锚点以"#"开头，用于跳转到网页的特定位置。
例如，http://www.example.com/path/to/file#section1中的"#section1"就是锚点，常见于a标签的超链接。
# 总结
一个完整的网址由协议、域名、端口号、路径、查询参数和锚点组成。每个部分都有特定的作用，用于指定访问的目标和传递相关信息。