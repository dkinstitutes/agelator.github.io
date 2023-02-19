const K = function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
};

function s(e, t) {
    if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}

function u(e) {
    s(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "undefined" != typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
}

function I(e, t) {
    s(2, arguments);
    var n = u(e),
        a = u(t),
        r = n.getTime() - a.getTime();
    return r < 0 ? -1 : r > 0 ? 1 : r
}

function V(e, t) {
    s(2, arguments);
    var n = u(e),
        a = u(t);
    return n.getFullYear() - a.getFullYear()
}

function k(e, t) {
    s(2, arguments);
    var n = u(e),
        a = u(t),
        r = I(n, a),
        o = Math.abs(V(n, a));
    n.setFullYear(1584), a.setFullYear(1584);
    var l = I(n, a) === -r,
        i = r * (o - Number(l));
    return 0 === i ? 0 : i
}

function $(e, t) {
    s(2, arguments);
    var n = u(e),
        a = u(t),
        r = n.getFullYear() - a.getFullYear(),
        o = n.getMonth() - a.getMonth();
    return 12 * r + o
}

function G(e) {
    s(1, arguments);
    var t = u(e);
    return t.setHours(23, 59, 59, 999), t
}

function J(e) {
    s(1, arguments);
    var t = u(e),
        n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
}

function Q(e) {
    s(1, arguments);
    var t = u(e);
    return G(t).getTime() === J(t).getTime()
}

function R(e, t) {
    s(2, arguments);
    var n, a = u(e),
        r = u(t),
        o = I(a, r),
        l = Math.abs($(a, r));
    if (l < 1) n = 0;
    else {
        1 === a.getMonth() && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - o * l);
        var i = I(a, r) === -o;
        Q(u(e)) && 1 === l && 1 === I(e, r) && (i = !1), n = o * (l - Number(i))
    }
    return 0 === n ? 0 : n
}

function F(e) {
    var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
}

function C(e) {
    s(1, arguments);
    var t = u(e);
    return t.setHours(0, 0, 0, 0), t
}
K();
var X = 864e5;

function Z(e, t) {
    s(2, arguments);
    var n = C(e),
        a = C(t),
        r = n.getTime() - F(n),
        o = a.getTime() - F(a);
    return Math.round((r - o) / X)
}

function A(e, t) {
    var n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
    return n < 0 ? -1 : n > 0 ? 1 : n
}

function Y(e, t) {
    s(2, arguments);
    var n = u(e),
        a = u(t),
        r = A(n, a),
        o = Math.abs(Z(n, a));
    n.setDate(n.getDate() - r * o);
    var l = Number(A(n, a) === -r),
        i = r * (o - l);
    return 0 === i ? 0 : i
}
var ee = 6e4,
    te = 36e5;

function w(e, t) {
    return s(2, arguments), u(e).getTime() - u(t).getTime()
}
var L = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }
    },
    ne = "trunc";

function E(e) {
    return e ? L[e] : L[ne]
}

function P(e, t, n) {
    s(2, arguments);
    var a = w(e, t) / te;
    return E(null == n ? void 0 : n.roundingMethod)(a)
}

function W(e, t, n) {
    s(2, arguments);
    var a = w(e, t) / ee;
    return E(null == n ? void 0 : n.roundingMethod)(a)
}

function U(e, t, n) {
    s(2, arguments);
    var a = w(e, t) / 1e3;
    return E(null == n ? void 0 : n.roundingMethod)(a)
}

function ae(e) {
    return s(1, arguments), e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
}

function H(e) {
    if (s(1, arguments), !ae(e) && "number" != typeof e) return !1;
    var t = u(e);
    return !isNaN(Number(t))
}

function d(e) {
    if (null === e || !0 === e || !1 === e) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}

function re(e, t) {
    s(2, arguments);
    var n = u(e),
        a = d(t);
    return isNaN(a) ? new Date(NaN) : (a && n.setDate(n.getDate() + a), n)
}

function oe(e, t) {
    s(2, arguments);
    var n = d(t);
    return re(e, -n)
}

function se(e, t) {
    s(2, arguments);
    var n = u(e),
        a = d(t);
    if (isNaN(a)) return new Date(NaN);
    if (!a) return n;
    var r = n.getDate(),
        o = new Date(n.getTime());
    o.setMonth(n.getMonth() + a + 1, 0);
    var l = o.getDate();
    return r >= l ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r), n)
}

function ue(e, t) {
    s(2, arguments);
    var n = d(t);
    return se(e, -n)
}

function S(e, t) {
    if (s(2, arguments), !t || "object" != typeof t) return new Date(NaN);
    var n = t.years ? d(t.years) : 0,
        a = t.months ? d(t.months) : 0,
        r = t.weeks ? d(t.weeks) : 0,
        o = t.days ? d(t.days) : 0,
        u = t.hours ? d(t.hours) : 0,
        l = t.minutes ? d(t.minutes) : 0,
        i = t.seconds ? d(t.seconds) : 0,
        c = ue(e, a + 12 * n),
        g = oe(c, o + 7 * r),
        m = l + 60 * u,
        h = i + 60 * m,
        v = 1e3 * h,
        f = new Date(g.getTime() - v);
    return f
}

function le(e) {
    var t = e.start,
        n = e.end;
    s(1, arguments);
    var a = u(t),
        r = u(n);
    if (!H(a)) throw new RangeError("Start Date is invalid");
    if (!H(r)) throw new RangeError("End Date is invalid");
    var o = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        l = I(a, r);
    o.years = Math.abs(k(a, r));
    var i = S(a, {
        years: l * o.years
    });
    o.months = Math.abs(R(i, r));
    var d = S(i, {
        months: l * o.months
    });
    o.days = Math.abs(Y(d, r));
    var c = S(d, {
        days: l * o.days
    });
    o.hours = Math.abs(P(c, r));
    var g = S(c, {
        hours: l * o.hours
    });
    o.minutes = Math.abs(W(g, r));
    var m = S(g, {
        minutes: l * o.minutes
    });
    return o.seconds = Math.abs(U(m, r)), o
}

function ie(e, t, n) {
    s(2, arguments);
    var a = Y(e, t) / 7;
    return E(null == n ? void 0 : n.roundingMethod)(a)
}
const ce = (e, t) => {
    const n = le({
        start: e,
        end: t
    });
    let a = w(t, e),
        r = U(t, e),
        o = W(t, e),
        u = P(t, e),
        s = Y(t, e),
        l = ie(t, e),
        i = R(t, e),
        d = k(t, e),
        c = "Your age is ";
    return c += n.years.toString(), c += n.years > 1 ? " years, " : " year, ", c += n.months.toString(), c += n.months > 1 ? " months and " : " month and ", c += n.days.toString(), c += n.days > 1 ? " days" : " day.", {
        milliseconds: a,
        seconds: r,
        minutes: o,
        months: i,
        hours: u,
        weeks: l,
        years: d,
        days: s,
        dob: c
    }
};

function de(e) {
    s(1, arguments);
    var t = u(e),
        n = t.getFullYear(),
        a = t.getMonth(),
        r = new Date(0);
    return r.setFullYear(n, a + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
}
const p = (e, t) => {
        let n = [];
        const a = de(new Date(e, t));
        for (let e = 1; e <= a; ++e) {
            let t = document.createElement("option");
            t.value = e, t.textContent = e, n.push(t)
        }
        return n
    },
    O = (e, t, n = "1") => {
        e.innerHTML = "", t.forEach((t => {
            e.appendChild(t), t.value === n && (t.selected = !0)
        }))
    },
    m = document.getElementById("dob-year"),
    v = document.getElementById("dob-month"),
    g = document.getElementById("dob-day"),
    h = document.getElementById("age-at-year"),
    y = document.getElementById("age-at-month"),
    f = document.getElementById("age-at-day"),
    j = document.getElementById("alert"),
    ge = document.getElementById("dob-form"),
    B = document.getElementById("age-alert"),
    x = document.getElementById("age-table");
document.addEventListener("DOMContentLoaded", (() => {
    const e = p(m.value, v.value);
    O(g, e, "1"), g.value = localStorage.getItem("dobDay") || 8, v.value = localStorage.getItem("dobMonth") || 8, m.value = localStorage.getItem("dobYear") || 2002;
    let t = new Date;
    f.value = localStorage.getItem("ageAtDay") || t.getDate(), y.value = localStorage.getItem("ageAtMonth") || t.getMonth(), h.value = localStorage.getItem("ageAtYear") || t.getFullYear()
}));
let N = g.value;
g.onchange = e => {
    N = g.value
}, m.onchange = () => {
    const e = p(m.value, v.value);
    O(g, e, N)
}, v.onchange = () => {
    const e = p(m.value, v.value);
    O(g, e, N)
};
let fe = (new Date).getDate().toString();
document.addEventListener("DOMContentLoaded", (() => {
    const e = p(h.value, y.value);
    O(f, e, fe)
}));
let T = f.value;
f.onchange = () => {
    T = f.value
}, h.onchange = () => {
    const e = p(h.value, y.value);
    O(f, e, T)
}, y.onchange = () => {
    const e = p(h.value, y.value);
    O(f, e, T)
};
const me = document.getElementById("years"),
    ve = document.getElementById("months"),
    he = document.getElementById("weeks"),
    ye = document.getElementById("days"),
    De = document.getElementById("hours"),
    Me = document.getElementById("minutes"),
    be = document.getElementById("seconds"),
    Ie = document.getElementById("milliseconds");
ge.onsubmit = e => {
    e.preventDefault();
    const t = new Date(m.value, v.value, g.value),
        n = new Date(h.value, y.value, f.value);
    if (t > n) j.hidden = !1, B.hidden = !0, x.hidden = !0;
    else {
        j.hidden = !0, localStorage.setItem("ageAtDay", f.value), localStorage.setItem("ageAtMonth", y.value), localStorage.setItem("ageAtYear", h.value), localStorage.setItem("dobDay", g.value), localStorage.setItem("dobMonth", v.value), localStorage.setItem("dobYear", m.value);
        const e = ce(t, n);
        B.innerHTML = `<h1>${e.dob}</h1>`, me.textContent = e.years, ve.textContent = e.months, he.textContent = e.weeks, ye.textContent = e.days, De.textContent = e.hours, Me.textContent = e.minutes, be.textContent = e.seconds, Ie.textContent = e.milliseconds, B.hidden = !1, x.hidden = !1
    }
};
