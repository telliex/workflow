(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{219:function(e,t,i){"use strict";i.r(t);var r=i(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("设计模式是软件设计中常见问题的通用可重用解决方案，它与具体的语言无关。在软件工程中，设计模式是软件设计中，给定上下文中常见问题的通用可重用解决方案。")]),e._v(" "),i("p",[e._v("设计模式不是可以直接转换为代码的已完成设计，它只是一种在许多不同情况下用于解决问题的表述或者模板。")]),e._v(" "),i("p",[e._v("面向对象的设计模式通常显示类或对象之间的关系和交互，并不指定相关的最终应用程序类或者对象。 很多模式只意味着面向对象，或者更为普遍的可变状态，因此可能不适用于数据不可变或被视为不可变的函数式编程语言。"),i("br"),e._v("\n使用设计模式的目的：为了代码可重用性、让代码更容易被他人理解、保证代码可靠性。")]),e._v(" "),i("h3",{attrs:{id:"创建型模式："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建型模式：","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建型模式：")]),e._v(" "),i("ul",[i("li",[e._v("abstract-factory")]),e._v(" "),i("li",[e._v("builder")]),e._v(" "),i("li",[e._v("factory-method")]),e._v(" "),i("li",[e._v("prototype-pattern")]),e._v(" "),i("li",[e._v("singleton")])]),e._v(" "),i("h3",{attrs:{id:"结构型模式："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#结构型模式：","aria-hidden":"true"}},[e._v("#")]),e._v(" 结构型模式：")]),e._v(" "),i("ul",[i("li",[e._v("adapter")]),e._v(" "),i("li",[e._v("bridge")]),e._v(" "),i("li",[e._v("composite")]),e._v(" "),i("li",[e._v("decorator")]),e._v(" "),i("li",[e._v("facade")]),e._v(" "),i("li",[e._v("flyweight-pattern")]),e._v(" "),i("li",[e._v("proxy-pattern")])]),e._v(" "),i("h3",{attrs:{id:"行为型模式："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#行为型模式：","aria-hidden":"true"}},[e._v("#")]),e._v(" 行为型模式：")]),e._v(" "),i("ul",[i("li",[e._v("chain-of-responsibility")]),e._v(" "),i("li",[e._v("command-pattern")]),e._v(" "),i("li",[e._v("interpreter-pattern")]),e._v(" "),i("li",[e._v("iterator")]),e._v(" "),i("li",[e._v("mediator")]),e._v(" "),i("li",[e._v("memento")]),e._v(" "),i("li",[e._v("observer-pattern")]),e._v(" "),i("li",[e._v("state")]),e._v(" "),i("li",[e._v("strategy-pattern")]),e._v(" "),i("li",[e._v("template-method-pattern")]),e._v(" "),i("li",[e._v("visitor")])]),e._v(" "),i("h2",{attrs:{id:"设计模式的六大原则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设计模式的六大原则","aria-hidden":"true"}},[e._v("#")]),e._v(" 设计模式的六大原则")]),e._v(" "),i("h3",{attrs:{id:"开闭原则（open-close-principle）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则（open-close-principle）","aria-hidden":"true"}},[e._v("#")]),e._v(" 开闭原则（Open Close Principle）")]),e._v(" "),i("p",[e._v("开闭原则的意思是：对扩展开放，对修改关闭。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类。")]),e._v(" "),i("h3",{attrs:{id:"里氏代换原则（liskov-substitution-principle）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#里氏代换原则（liskov-substitution-principle）","aria-hidden":"true"}},[e._v("#")]),e._v(" 里氏代换原则（Liskov Substitution Principle）")]),e._v(" "),i("p",[e._v("里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。")]),e._v(" "),i("h3",{attrs:{id:"依赖倒转原则（dependence-inversion-principle）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒转原则（dependence-inversion-principle）","aria-hidden":"true"}},[e._v("#")]),e._v(" 依赖倒转原则（Dependence Inversion Principle）")]),e._v(" "),i("p",[e._v("这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。")]),e._v(" "),i("h3",{attrs:{id:"接口隔离原则（interface-segregation-principle）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则（interface-segregation-principle）","aria-hidden":"true"}},[e._v("#")]),e._v(" 接口隔离原则（Interface Segregation Principle）")]),e._v(" "),i("p",[e._v("这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。")]),e._v(" "),i("h3",{attrs:{id:"迪米特法则，又称最少知道原则（demeter-principle）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则，又称最少知道原则（demeter-principle）","aria-hidden":"true"}},[e._v("#")]),e._v(" 迪米特法则，又称最少知道原则（Demeter Principle）")]),e._v(" "),i("p",[e._v("最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。")]),e._v(" "),i("h3",{attrs:{id:"合成复用原则（composite-reuse-principle）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则（composite-reuse-principle）","aria-hidden":"true"}},[e._v("#")]),e._v(" 合成复用原则（Composite Reuse Principle）")]),e._v(" "),i("p",[e._v("合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。")])])}],!1,null,null,null);t.default=a.exports}}]);