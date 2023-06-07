# software-engineering
the project of software-engineering course

# 分工
陆荣周
* thymeleaf前端

潘云增
* Controller层(API设计)

孙鑫
* 数据库设计

王晓明
* mybatis整合(编写mapper)
* Dao,Model,Dto,Service层
* springboot框架搭建整合
# My Site

## 简介
My Site是由Docker+SpringBoot2.0+Mybatis+thymeleaf等技术实现的个人网站，是一个docker和springboot的实战练习项目,功能齐全、部署简单及完善的代码，一定会给使用者无与伦比的体验.

pojo分成了dto和model，model中是全的，dto只是部分功能，减少实体类的开发

- **你可以把它作为个人网站，集成了个人首页，个人摄影作品，个人博客等功能；**

# Log
- 2023-06-06：集成swagger，通过http://localhost:port/swagger-ui.html访问接口文档
- 2023-06-02: 修复部分遗留的缓存bug，修复了作品类文章没有点击量的问题

- 2023-05-26: 修复缓存导致更新和删除文章不生效的Bug

- 2023-05-19：增加了EhCache缓存功能

- 2023-05-12：修复主页和博客的列表的样式在手机端显示有偏位的bug

- 2023-05-05：修复评论数不叠加的bug，优化了博客文字排版，添加了博客无图随机添加一张标题图片

- 2023-05-01：重新换了网站的主题

- 2023-04-28：优化了作品页和博客页的header的样式，更加简约和美观

- 2023-04-22：修复了编辑文章的一些bug

- 2023-04-15: 优化了选择文章类型，增加了评论功能

- 2023-04-07: 发布第一版


代码提交流程：
* 将仓库fork到自己仓库中
* 然后克隆到本地进行开发
* 开发后commit提交并push到远程仓库
* 然后提交PR，我会合并到我的仓库中(项目主仓库)

