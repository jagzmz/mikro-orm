"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2945],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Usage with MongoDB"},l=void 0,c={unversionedId:"usage-with-mongo",id:"version-2.7/usage-with-mongo",title:"Usage with MongoDB",description:"To use mikro-orm with mongo database, do not forget to install mongodb dependency. As MongoDriver",source:"@site/versioned_docs/version-2.7/usage-with-mongo.md",sourceDirName:".",slug:"/usage-with-mongo",permalink:"/docs/2.7/usage-with-mongo",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/usage-with-mongo.md",tags:[],version:"2.7",lastUpdatedBy:"nadzhafox",lastUpdatedAt:1656588172,formattedLastUpdatedAt:"6/30/2022",frontMatter:{title:"Usage with MongoDB"},sidebar:"version-2.7/docs",previous:{title:"Usage with SQL Drivers",permalink:"/docs/2.7/usage-with-sql"},next:{title:"Usage with NestJS",permalink:"/docs/2.7/usage-with-nestjs"}},p={},d=[{value:"Defining entity",id:"defining-entity",level:2},{value:"ObjectID and string id duality",id:"objectid-and-string-id-duality",level:2},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",level:2},{value:"Native collection methods",id:"native-collection-methods",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),(0,r.kt)("p",null,"Then call ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  clientUrl: '...',\n});\n")),(0,r.kt)("h2",{id:"defining-entity"},"Defining entity"),(0,r.kt)("p",null,"When defining entity, do not forget to define primary key like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey()\n_id: ObjectID;\n")),(0,r.kt)("h2",{id:"objectid-and-string-id-duality"},"ObjectID and string id duality"),(0,r.kt)("p",null,"Every entity has both ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectID('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectID(article)] }, favouriteBook: new ObjectID(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectID(article)] }, favouriteBook: new ObjectID(book) });\n")),(0,r.kt)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),(0,r.kt)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),(0,r.kt)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),(0,r.kt)("h2",{id:"native-collection-methods"},"Native collection methods"),(0,r.kt)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityManager.nativeInsert<T extends IEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nEntityManager.nativeUpdate<T extends IEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nEntityManager.nativeDelete<T extends IEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),(0,r.kt)("p",null,"Those methods execute native driver methods like Mongo's ",(0,r.kt)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),(0,r.kt)("p",null,"They are also available as ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),(0,r.kt)("p",null,"There is also shortcut for calling ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityManager.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}m.isMDXComponent=!0}}]);