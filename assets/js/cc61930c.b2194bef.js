"use strict";(self.webpackChunkcs_engineering=self.webpackChunkcs_engineering||[]).push([[3639],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||g[m]||i;return a?n.createElement(k,l(l({ref:e},u),{},{components:a})):n.createElement(k,l({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1365:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},l="\u7248\u672c\u63a7\u5236\u2014\u2014Git \u7684\u57fa\u672c\u4f7f\u7528",s={unversionedId:"utils/develop/git-basic",id:"utils/develop/git-basic",title:"\u7248\u672c\u63a7\u5236\u2014\u2014Git \u7684\u57fa\u672c\u4f7f\u7528",description:"Contributor: @XieJiSS",source:"@site/docs/utils/develop/git-basic.md",sourceDirName:"utils/develop",slug:"/utils/develop/git-basic",permalink:"/cs-engineering/docs/utils/develop/git-basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/utils/develop/git-basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u7ba1\u7406",permalink:"/cs-engineering/docs/category/\u5f00\u53d1\u7ba1\u7406"},next:{title:"jetbrain",permalink:"/cs-engineering/docs/utils/develop/ides/jetbrain"}},o={},p=[{value:"Beginning",id:"beginning",level:3},{value:"Intermediate",id:"intermediate",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Genius",id:"genius",level:3},{value:"\u8865\u5145\u9605\u8bfb",id:"\u8865\u5145\u9605\u8bfb",level:3},{value:"\u601d\u8003\u9898\uff1acorner case \uff08\u4e0d\u9700\u8981\u63d0\u4ea4\uff09",id:"\u601d\u8003\u9898corner-case-\u4e0d\u9700\u8981\u63d0\u4ea4",level:3}],u={toc:p},c="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7248\u672c\u63a7\u5236git-\u7684\u57fa\u672c\u4f7f\u7528"},"\u7248\u672c\u63a7\u5236\u2014\u2014Git \u7684\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"Contributor: @XieJiSS"),(0,r.kt)("p",null,"Git\u4f5c\u4e3a\u6700\u57fa\u7840\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\uff0c\u662f\u56e2\u961f\u5408\u4f5c\u7684\u57fa\u7840\u3002\u5b66\u4e60\u8def\u7ebf\u6bd4\u8f83\u9661\u5ced\uff0c\u4f46\u662f\u4e5f\u6b63\u56e0\u5982\u6b64\uff0c\u7f51\u4e0a\u6709\u7740\u975e\u5e38\u8be6\u7ec6\u7684\u6559\u7a0b\uff0c\u57fa\u672c\u4e0a\u4f60\u9047\u5230\u7684\u6240\u6709\u95ee\u9898\u90fd\u53ef\u4ee5\u76f4\u63a5\u641c\u5230\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u7684**"),"Git*",(0,r.kt)("strong",{parentName:"p"},"*\u64cd\u4f5c\u53ef\u80fd\u4ea7\u751f\u4e0d\u826f\u540e\u679c\uff0c\u5728\u771f\u5b9e\u751f\u4ea7\u73af\u5883\u4e0b\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u8981\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u81f3\u5c11\u8981\u770b\u5b8c Beginning \u548c Intermediate\uff0c\u8fd9\u4e5f\u662f\u65e5\u5e38\u534f\u4f5c\u4e2d\u6700\u5e38\u7528\u5230\u7684\u90e8\u5206\u3002\n"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u60c5\u51b5\u770b\u4e00\u4e9b Advanced \u7684\u5185\u5bb9\u3002\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7ec3\u4e60\u975e\u5e38\u91cd\u8981"),"\uff0c\u5efa\u8bae\u81ea\u5df1\u521b\u5efa GitHub repo \u6216 bitbucket repo\uff0c\u8ddf\u7740\u6559\u7a0b\u5185\u5bb9\u64cd\u4f5c\u5e76\u8bb0\u7b14\u8bb0\u3002\u5728 DDL \u540e\uff0cmentor \u4f1a\u67e5\u770b\u7b14\u8bb0\u5185\u5bb9\u3002\n"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5982\u679c\u4e0d\u6e05\u695a\u600e\u4e48\u914d\u7f6e ssh key\uff0c\u5efa\u8bae\u5728\u5b66\u4e60 Setting up a repository \u524d\uff0c\u5148\u5b66\u4e60 Intermediate \u4e2d\u7684 Git SSH \u7ae0\u8282\u3002\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git"},"https://www.atlassian.com/git")),(0,r.kt)("h3",{id:"beginning"},"Beginning"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/what-is-git"},"What is Git")," \u53ea\u9700\u8981\u9605\u8bfb Version control with Git \u5c0f\u8282"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/install-git"},"Install Git")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u6587\u7ae0\u6700\u5f00\u59cb\u6709\u76ee\u5f55\uff0c\u53ef\u4ee5\u70b9\u51fb\u76f4\u63a5\u8df3\u8f6c\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://xn4zlkzg4p.feishu.cn/space/api/box/stream/download/asynccode/?code=NDMwM2JiZTM4OGNkODg1MDhmMmY1NzRiNzQzMmJjNGRfYzFlZDhTb092S2I2cTNWc0w0dVFwa2l1NTE3dGk0d21fVG9rZW46Ym94Y25TdFFkY1UyVDF1THFjMWRhRzFqWXhlXzE2OTMyMjk5MTg6MTY5MzIzMzUxOF9WNA",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository"},"Setting up a repository")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8865\u5145\u9605\u8bfb\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.liaoxuefeng.com/wiki/896043488029600/900004590234208"},"\u5ffd\u7565\u7279\u6b8a\u6587\u4ef6"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/saving-changes"},"Saving changes"),"\uff08\u53ef\u6682\u65f6\u8df3\u8fc7 git stash \u90e8\u5206\uff09"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/syncing"},"Syncing"),"\uff08\u4ec5 git pull \u548c git push \u90e8\u5206\uff09"),(0,r.kt)("h3",{id:"intermediate"},"Intermediate"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/git-ssh"},"Git SSH")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e SSH\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ed25519 \u7684 key\uff1a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"ssh-keygen -t ed25519\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\u4fdd\u62a4\u4f60\u7684\u79c1\u94a5\u3002\u516c\u94a5\uff08",(0,r.kt)("inlineCode",{parentName:"li"},".pub")," \u7ed3\u5c3e\u7684\u6587\u4ef6\uff09\u53ef\u4ee5\u53d1\u7ed9\u522b\u4eba\u6216\u4e0a\u4f20\u5230 GitHub Settings \u4e2d\uff0c\u79c1\u94a5\uff08\u65e0\u540e\u7f00\u540d\uff09\u6c38\u8fdc\u4e0d\u8981\u653e\u5230\u7f51\u7edc\u4e0a\u3002\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/inspecting-a-repository"},"Inspecting a repository")," \u91cd\u70b9\uff1a\u4f1a\u770b git status \u548c git log"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/undoing-changes"},"Undoing changes")," \u8df3\u8fc7 git clean \u90e8\u5206"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/making-a-pull-request"},"Making a Pull Request")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u770b Feature Branch Workflow With Pull Requests \u548c Forking Workflow With Pull Requests\n"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u9762\u6709\u4e2a Example\uff0c\u4e0d\u8fc7\u90a3\u4e2a\u662f Forking Workflow \u7684\uff0c\u5b9e\u9a8c\u5ba4\u5185\u90e8\u4e00\u822c\u7528 Feature Branch Workflow\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/using-branches"},"Using Branches")," \u8df3\u8fc7 Creating remote branches \u90e8\u5206"),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/syncing"},"Syncing"),"\uff08\u5168\u90e8\uff09"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/rewriting-history"},"Rewriting history")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/merging-vs-rebasing"},"Merging vs. Rebasing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u770b Interactive Rebasing \u548c Force-Push \u4e24\u8282\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting"},"Reset, Checkout, and Revert")," \u6ce8\u610f\uff1a\u672c\u7ae0\u4e2d\u5b58\u5728\u5c0f\u9519\u8bef\uff0c\u6709\u7684\u5730\u65b9\u4e24\u6761\u547d\u4ee4\u88ab\u5199\u5728\u4e86\u540c\u4e00\u884c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/git-hooks"},"Git Hooks")," \u4e86\u89e3 pre-commit hook \u5373\u53ef"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/cherry-pick"},"Git cherry pick")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/git-show"},"Git-show")," \u76f4\u63a5\u770b Examples of git-show \u5c0f\u8282"),(0,r.kt)("h3",{id:"genius"},"Genius"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZenithalHourlyRate/learn-git-the-not-so-super-hard-way/blob/master/git-handout.pdf"},"ZenithalHourlyRate/learn-git-the-not-so-super-hard-way")," \u590d\u884c\u6570\u5341\u6b65\uff0c\u8c41\u7136\u5f00\u6717"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Zenithal \u662f thu \u59da\u73ed\u5b66\u957f")),(0,r.kt)("h3",{id:"\u8865\u5145\u9605\u8bfb"},"\u8865\u5145\u9605\u8bfb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/896043488029600/896954848507552"},"\u53e6\u4e00\u4efd\u6559\u7a0b - \u5206\u652f\u7ba1\u7406")," \u53ef\u4ee5\u7740\u91cd\u770b\u4e00\u4e0b\u300c\u89e3\u51b3\u51b2\u7a81\u300d\u4e00\u8282"),(0,r.kt)("p",null,"UPDATE: ",(0,r.kt)("a",{parentName:"p",href:"https://note.cubercsl.site/notes/616be997"},"git \u914d\u7f6e\uff1a\u5de5\u4f5c\u751f\u6d3b\u4e24\u4e0d\u8bef\u7684 includeIf \u8bed\u6cd5")),(0,r.kt)("h3",{id:"\u601d\u8003\u9898corner-case-\u4e0d\u9700\u8981\u63d0\u4ea4"},"\u601d\u8003\u9898\uff1acorner case \uff08\u4e0d\u9700\u8981\u63d0\u4ea4\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[easy]"," \u5982\u4f55\u5408\u5e76\u591a\u4e2acommit\u81f3\u4e00\u4e2a\uff1f\u4f1a\u6709\u4ec0\u4e48\u526f\u4f5c\u7528\uff1f\n"),(0,r.kt)("li",{parentName:"ul"},"[easy]"," git reset --hard --soft --mixed \u6709\u4ec0\u4e48\u533a\u522b\uff1f\u4e00\u822c\u7528\u54ea\u4e2a\uff1f\n"),(0,r.kt)("li",{parentName:"ul"},"[easy]"," git reset --hard ","[sha of some earlier commit]"," \u540e\uff0cgit log\u4e2d\u6700\u65b0\u51e0\u4e2acommit\u6d88\u5931\u3002\u6b64\u65f6\u5982\u4f55\u56de\u5230\u4e4b\u524d\u7684\u6700\u5148commit\uff1f\u4f60\u89c9\u5f97git log\u548cgit reflog\u6709\u4f55\u533a\u522b\uff1f\n"),(0,r.kt)("li",{parentName:"ul"},"[advanced]"," \u76ee\u524d\u6709\u4e09\u4e2a\u8fde\u7eed\u7684commit ABC\uff0c\u5e0c\u671b\u5c06C\u5173\u4e8eB\u7684\u4fee\u6539\u5e94\u7528\u4e8eA\u4e0a\u5e76\u65b0\u5efa\u5206\u652f\u3002\u5982\u4f55\u505a\u5230\uff1f\n"),(0,r.kt)("li",{parentName:"ul"},"\u4ec0\u4e48 three-way-merge\n"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u4e8egit\uff0c\u4f60\u6709\u54ea\u4e9b\u601d\u8003\uff0c\u603b\u7ed3\u51fa\u4e86\u54ea\u4e9bbest practice\uff1f")))}g.isMDXComponent=!0}}]);