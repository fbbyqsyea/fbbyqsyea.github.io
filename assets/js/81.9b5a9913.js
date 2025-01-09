(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{384:function(_,v,a){"use strict";a.r(v);var t=a(5),r=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"面试问题-mysql内部做了哪些操作-来优化随机读写造成的io阻塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面试问题-mysql内部做了哪些操作-来优化随机读写造成的io阻塞"}},[_._v("#")]),_._v(" 面试问题：MySQL内部做了哪些操作,来优化随机读写造成的IO阻塞?")]),_._v(" "),v("p",[_._v("MySQL通过多种机制和优化策略来减少随机读写对IO的影响，从而环节IO阻塞的问题。这些优化主要集中在下面的几个方面：")]),_._v(" "),v("h2",{attrs:{id:"数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[_._v("#")]),_._v(" 数据结构")]),_._v(" "),v("p",[_._v("MySQL使用B+树作为默认的索引结构（如InnoDB的主键聚簇索引和辅助索引）。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("B+树节点按照键值顺序连接，使数据读取趋向于顺序IO。")]),_._v(" "),v("li",[_._v("数据库的多层结构设计大幅减少了磁盘随机读的次数，通常访问2~4层就能拿到数据。")]),_._v(" "),v("li",[_._v("每个叶子节点存储一页数据（默认为16KB），通过缓存页（page）的局部性原理，可以减少缓存失效，提高缓存命中率。")])]),_._v(" "),v("h2",{attrs:{id:"缓存机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制"}},[_._v("#")]),_._v(" 缓存机制")]),_._v(" "),v("h3",{attrs:{id:"缓存池-buffer-pool"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存池-buffer-pool"}},[_._v("#")]),_._v(" 缓存池（Buffer Pool）")]),_._v(" "),v("p",[_._v("InnoDB使用缓存池来存储经常访问的数据和索引页，减少磁盘IO。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("通过缓存池，频繁访问的数据和索引页被加载到内存中，减少对磁盘的随机访问。")]),_._v(" "),v("li",[_._v("修改操作先修改内存中的缓存页，然后异步写入磁盘，减少阻塞。")])]),_._v(" "),v("h3",{attrs:{id:"双写缓冲区-doublewrite-buffer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双写缓冲区-doublewrite-buffer"}},[_._v("#")]),_._v(" 双写缓冲区（Doublewrite Buffer）")]),_._v(" "),v("p",[_._v("InnoDB在数据写入时，会先将数据写入到内存中的双写缓冲区，然后再以顺序IO的方式写入到磁盘上的双写文件，最后再写入到数据文件。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("双写缓冲区的写入是顺序IO，减少了随机IO对性能的影响。")]),_._v(" "),v("li",[_._v("在系统崩溃时，可以通过双写文件恢复数据，提高数据安全性。")])]),_._v(" "),v("h3",{attrs:{id:"自适应哈希索引-adaptive-hash-index-ahi"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自适应哈希索引-adaptive-hash-index-ahi"}},[_._v("#")]),_._v(" 自适应哈希索引（Adaptive Hash Index AHI）")]),_._v(" "),v("p",[_._v("InnoDB 自动将高频查询的 B+树页创建为哈希表，作为辅助索引。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("减少了频繁随机读的磁盘访问需求。")]),_._v(" "),v("li",[_._v("根据查询模式动态调整哈希索引，提高查询性能。")])]),_._v(" "),v("h2",{attrs:{id:"日志机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日志机制"}},[_._v("#")]),_._v(" 日志机制")]),_._v(" "),v("h3",{attrs:{id:"重做日志-redo-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重做日志-redo-log"}},[_._v("#")]),_._v(" 重做日志（Redo Log）")]),_._v(" "),v("p",[_._v("InnoDB 使用 WAL（Write-Ahead Logging）策略，在修改数据页前先写入 Redo Log。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("Redo Log 是顺序写入的，减少了随机IO对性能的影响。")]),_._v(" "),v("li",[_._v("修改数据页时，只需将 Redo Log 持久化到磁盘，数据页刷新可以延后。")])]),_._v(" "),v("h3",{attrs:{id:"撤销日志-undo-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#撤销日志-undo-log"}},[_._v("#")]),_._v(" 撤销日志（Undo Log）")]),_._v(" "),v("p",[_._v("Undo Log 用于支持事务的回滚操作，避免随机写直接作用于数据。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("通过 Undo Log，事务回滚操作不需要直接修改数据页，减少了随机写操作。")]),_._v(" "),v("li",[_._v("Undo Log 还支持 MVCC（多版本并发控制），提高并发性能。")])]),_._v(" "),v("h2",{attrs:{id:"异步操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步操作"}},[_._v("#")]),_._v(" 异步操作")]),_._v(" "),v("h3",{attrs:{id:"刷盘延迟-flush-delay"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刷盘延迟-flush-delay"}},[_._v("#")]),_._v(" 刷盘延迟（Flush Delay）")]),_._v(" "),v("p",[_._v("InnoDB 提供了多个刷盘策略（如 innodb_flush_log_at_trx_commit 参数）。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("数据修改操作先在内存中完成，减少了频繁的磁盘写入。")]),_._v(" "),v("li",[_._v("根据业务需求调整刷盘频率，平衡性能和数据安全性。")])]),_._v(" "),v("h3",{attrs:{id:"后台线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后台线程"}},[_._v("#")]),_._v(" 后台线程")]),_._v(" "),v("p",[_._v("后台线程负责异步刷新 Buffer Pool、Doublewrite Buffer 和日志文件。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("减少用户线程直接与磁盘交互的次数。")]),_._v(" "),v("li",[_._v("通过合并写操作，提升写入性能。")])]),_._v(" "),v("h2",{attrs:{id:"数据分区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据分区"}},[_._v("#")]),_._v(" 数据分区")]),_._v(" "),v("p",[_._v("通过对大表按分区键分割，减少每次查询的数据量。")]),_._v(" "),v("p",[_._v("优化效果：")]),_._v(" "),v("ul",[v("li",[_._v("减少随机读写的范围，提升磁盘访问效率。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);