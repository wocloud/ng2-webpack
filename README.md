Once download the project, run the following command on your terminal:

>>>cd {{ your project path }}

>>>npm install

To run the project on browser, run the following command:

>>>npm start

then, open your browser, and typing the following path:

http://localhost:8000


PS: ng2-bootstrap website: http://valor-software.com/ng2-bootstrap/

//0311
1 \ 所有的views部分都在src/app/pages文件夹下, 文件夹下每个folder对应一个业务.
2 \ 每个业务模块可独立开发, 开发过程中需要引用theme模块, 并在对应的菜单和路由下添加业务, 对应文件为 pages.menu.ts和pages.routing.ts