// // 观察者
// export class ObserverHelper {
//     // 订阅集合
//     static subscribes = [];
//
//     /**
//      * 订阅
//      * @param type
//      * @param fn
//      */
//     static subscribe(type, fn) {
//         if (!ObserverHelper.subscribes[type]) {
//             ObserverHelper.subscribes[type] = [];
//         }
//
//         // 收集订阅者的处理
//         typeof fn === "function" && ObserverHelper.subscribes[type].push(fn);
//     }
//
//     /**
//      * 发布  可能会携带一些信息发布出去
//      */
//     static publish() {
//         let type = [].shift.call(arguments),
//             fns  = ObserverHelper.subscribes[type];
//
//         // 不存在的订阅类型，以及订阅时未传入处理回调的
//         if (!fns || !fns.length) {
//             return;
//         }
//
//         // 挨个处理调用
//         for (let i = 0; i < fns.length; ++i) {
//             fns[i](arguments);
//         }
//     }
//
//     // 删除订阅
//     static remove(type, fn) {
//         // 删除全部
//         if (typeof type === "undefined") {
//             ObserverHelper.subscribes = [];
//             return;
//         }
//
//         let fns = ObserverHelper.subscribes[type];
//
//         // 不存在的订阅类型，以及订阅时未传入处理回调的
//         if (!fns || !fns.length) {
//             return;
//         }
//
//         if (typeof fn === "undefined") {
//             fns.length = 0;
//             return;
//         }
//
//         // 挨个处理删除
//         for (let i = 0; i < fns.length; ++i) {
//             if (fns[i] === fn) {
//                 fns.splice(i, 1);
//             }
//         }
//     }
// }
