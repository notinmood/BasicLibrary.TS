// //一、md5
//
// /*
//  * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
//  * Digest Algorithm, as defined in RFC 1321.
//  * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
//  * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
//  * Distributed under the BSD License
//  * See http://pajhome.org.uk/crypt/md5 for more info.
//  */
//
// /*
//  * Configurable letiables. You may need to tweak these to be compatible with
//  * the server-side, but the defaults work in most cases.
//  */
// let hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
// let b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
// let chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */
//
// /*
//  * These are the functions you'll usually want to call
//  * They take string arguments and return either hex or base-64 encoded strings
//  */
// function hex_md5(s) {
//     return binl2hex(core_md5(str2binl(s), s.length * chrsz));
// }
//
// function b64_md5(s) {
//     return binl2b64(core_md5(str2binl(s), s.length * chrsz));
// }
//
// function str_md5(s) {
//     return binl2str(core_md5(str2binl(s), s.length * chrsz));
// }
//
// function hex_hmac_md5(key, data) {
//     return binl2hex(core_hmac_md5(key, data));
// }
//
// function b64_hmac_md5(key, data) {
//     return binl2b64(core_hmac_md5(key, data));
// }
//
// function str_hmac_md5(key, data) {
//     return binl2str(core_hmac_md5(key, data));
// }
//
// /*
//  * Perform a simple self-test to see if the VM is working
//  */
// function md5_vm_test() {
//     return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
// }
//
// /*
//  * Calculate the MD5 of an array of little-endian words, and a bit length
//  */
// function core_md5(x, len) {
//     /* append padding */
//     x[len >> 5] |= 0x80 << ((len) % 32);
//     x[(((len + 64) >>> 9) << 4) + 14] = len;
//
//     let a = 1732584193;
//     let b = -271733879;
//     let c = -1732584194;
//     let d = 271733878;
//
//     for (let i = 0; i < x.length; i += 16) {
//         let olda = a;
//         let oldb = b;
//         let oldc = c;
//         let oldd = d;
//
//         a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
//         d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
//         c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
//         b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
//         a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
//         d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
//         c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
//         b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
//         a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
//         d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
//         c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
//         b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
//         a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
//         d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
//         c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
//         b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
//
//         a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
//         d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
//         c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
//         b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
//         a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
//         d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
//         c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
//         b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
//         a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
//         d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
//         c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
//         b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
//         a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
//         d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
//         c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
//         b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
//
//         a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
//         d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
//         c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
//         b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
//         a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
//         d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
//         c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
//         b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
//         a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
//         d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
//         c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
//         b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
//         a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
//         d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
//         c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
//         b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
//
//         a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
//         d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
//         c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
//         b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
//         a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
//         d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
//         c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
//         b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
//         a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
//         d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
//         c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
//         b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
//         a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
//         d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
//         c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
//         b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
//
//         a = safe_add(a, olda);
//         b = safe_add(b, oldb);
//         c = safe_add(c, oldc);
//         d = safe_add(d, oldd);
//     }
//     return Array(a, b, c, d);
//
// }
//
// /*
//  * These functions implement the four basic operations the algorithm uses.
//  */
// function md5_cmn(q, a, b, x, s, t) {
//     return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
// }
//
// function md5_ff(a, b, c, d, x, s, t) {
//     return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
// }
//
// function md5_gg(a, b, c, d, x, s, t) {
//     return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
// }
//
// function md5_hh(a, b, c, d, x, s, t) {
//     return md5_cmn(b ^ c ^ d, a, b, x, s, t);
// }
//
// function md5_ii(a, b, c, d, x, s, t) {
//     return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
// }
//
// /*
//  * Calculate the HMAC-MD5, of a key and some data
//  */
// function core_hmac_md5(key, data) {
//     let bkey = str2binl(key);
//     if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
//
//     let ipad = Array(16), opad = Array(16);
//     for (let i = 0; i < 16; i++) {
//         ipad[i] = bkey[i] ^ 0x36363636;
//         opad[i] = bkey[i] ^ 0x5C5C5C5C;
//     }
//
//     let hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
//     return core_md5(opad.concat(hash), 512 + 128);
// }
//
// /*
//  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
//  * to work around bugs in some JS interpreters.
//  */
// function safe_add(x, y) {
//     let lsw = (x & 0xFFFF) + (y & 0xFFFF);
//     let msw = (x >> 16) + (y >> 16) + (lsw >> 16);
//     return (msw << 16) | (lsw & 0xFFFF);
// }
//
// /*
//  * Bitwise rotate a 32-bit number to the left.
//  */
// function bit_rol(num, cnt) {
//     return (num << cnt) | (num >>> (32 - cnt));
// }
//
// /*
//  * Convert a string to an array of little-endian words
//  * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
//  */
// function str2binl(str) {
//     let bin = Array();
//     let mask = (1 << chrsz) - 1;
//     for (let i = 0; i < str.length * chrsz; i += chrsz)
//         bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
//     return bin;
// }
//
// /*
//  * Convert an array of little-endian words to a string
//  */
// function binl2str(bin) {
//     let str = "";
//     let mask = (1 << chrsz) - 1;
//     for (let i = 0; i < bin.length * 32; i += chrsz)
//         str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
//     return str;
// }
//
// /*
//  * Convert an array of little-endian words to a hex string.
//  */
// function binl2hex(binarray) {
//     let hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
//     let str = "";
//     for (let i = 0; i < binarray.length * 4; i++) {
//         str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
//                 hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
//     }
//     return str;
// }
//
// /*
//  * Convert an array of little-endian words to a base-64 string
//  */
// function binl2b64(binarray) {
//     let tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//     let str = "";
//     for (let i = 0; i < binarray.length * 4; i += 3) {
//         let triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
//                 | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
//                 | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
//         for (let j = 0; j < 4; j++) {
//             if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
//             else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
//         }
//     }
//     return str;
// }
//
//
// //二、sha1
// function encodeUTF8(s) {
//     let i, r = [], c, x;
//     for (i = 0; i < s.length; i++)
//         if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
//         else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
//         else {
//             if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
//                 c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
//                         r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
//             else r.push(0xE0 + (c >> 12 & 0xF));
//             r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
//         }
//     ;
//     return r;
// }
//
// // 字符串加密成 hex 字符串
// function sha1(s) {
//     let data = new Uint8Array(encodeUTF8(s))
//     let i, j, t;
//     let l = ((data.length + 8) >>> 6 << 4) + 16;
//     s = new Uint8Array(l << 2);
//     s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
//     for (t = new DataView(s.buffer), i = 0; i < l; i++) s[i] = t.getUint32(i << 2);
//     s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
//     s[l - 1] = data.length << 3;
//     let w = [], f = [
//                 function () {
//                     return m[1] & m[2] | ~m[1] & m[3];
//                 },
//                 function () {
//                     return m[1] ^ m[2] ^ m[3];
//                 },
//                 function () {
//                     return m[1] & m[2] | m[1] & m[3] | m[2] & m[3];
//                 },
//                 function () {
//                     return m[1] ^ m[2] ^ m[3];
//                 }
//             ], rol = function (n, c) {
//                 return n << c | n >>> (32 - c);
//             },
//             k = [1518500249, 1859775393, -1894007588, -899497514],
//             m = [1732584193, -271733879, null, null, -1009589776];
//     m[2] = ~m[0], m[3] = ~m[1];
//     for (i = 0; i < s.length; i += 16) {
//         let o = m.slice(0);
//         for (j = 0; j < 80; j++)
//             w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
//                     t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
//                     m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
//         for (j = 0; j < 5; j++) m[j] = m[j] + o[j] | 0;
//     }
//     ;
//     t = new DataView(new Uint32Array(m).buffer);
//     for (let i = 0; i < 5; i++) m[i] = t.getUint32(i << 2);
//
//     return Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
//         return (e < 16 ? "0" : "") + e.toString(16);
//     }).join("");
// }
//
// /**
//  * 根据两个变量和一个常量生成加密签名的算法
//  * @param timeStamp 变量1，通常取当前的时间戳
//  * @param randomString 变量2，通常取一个随机字符串
//  * @param token 常量，一个令牌值
//  * @returns {string}
//  */
// function calcSignature(timeStamp, randomString, token = '') {
//     if(!token){
//         token = 'ChinaBoy';
//     }
//
//     let arr = [];
//     arr.push(timeStamp);
//     arr.push(randomString);
//     arr.push(token);
//     //按照首字母大小写顺序排序
//     arr = arr.sort();
//     //拼接成字符串
//     let str = arr.join("");
//     //进行加密
//     let signature = sha1(str);
//     signature = hex_md5(signature);
//     //转换成大写
//     signature = signature.toUpperCase();
//     return signature;
// }
//
//
// module.exports = {
//     sha1,
//     md5      : hex_md5,
//     calcSignature: calcSignature,
// }
