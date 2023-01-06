import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, aU as useFocus, k as watch, aV as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, aW as flexsearch_bundle } from "./vendor.66367cfd.js";
import { u as useStoryStore } from "./story.192960f9.js";
import { B as BaseEmpty } from "./BaseEmpty.955a414b.js";
import { o as onKeyboardShortcut } from "./bundle-main.77383001.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.5952b122.js";
import "./GenericMountStory.ed039048.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7333f29c": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fb261e4"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,25,26,27,28,29,52,53,54,55,56,57,58,59,60,61,62,63,64,65],"le":[4,5,25,26,27,28,29,52,53,54,55,56,57,58,59,60,61,62,63,64,65],"lem":[4,5,25,26,27,28,29,52,53,54,55,56,57,58,59,60,61,62,63,64,65],"leme":[4,5,52,53,54,55,56,57,58,59,60,61,62,63,64,65],"o":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,42,43,44,45,46,47,48,49,50,51],"lemk":[25,26,27,28,29],"of":[35,36],"ofe":[35,36],"ofer":[35,36],"oferf":[35,36],"oferfl":[35,36],"oferflo":[35,36],"oferflof":[35,36],"p":[37,38,39,40,41],"pa":[37,38,39,40,41],"pam":[37,38,39,40,41],"pame":[37,38,39,40,41],"pamel":[37,38,39,40,41],"ta":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"tal":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talf":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfe":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfem":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfemt":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82]},{"f":[0,1,4,5,25,26,42,43,72,73,74,80,82],"fe":[0,1,4,5,80],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,44,45,46,68],"tem":[2,3,44,45,46],"teme":[2,3,44,45,46],"p":[6,7,8,9,10,11,12,13,14,15,16,17,18,27,28,29,52,53,54,55,56,57,58,59,60,67,69,70,78,79],"po":[6,7,8,9,10,11,12,13,14,15,16,17,18,52,53,54,55,56,57,58,59,60,69,78,79],"pot":[6,7,8,9,10,11,12,13,14,15,16,17,18,52,53,54,55,56,57,58,59,60],"poto":[6,7,8,9,10,11,12,13,14,15,16,17,18,52,53,54,55,56,57,58,59,60],"potom":[6,7,8,9,10,11,12,13,14,15,16,17,18,52,53,54,55,56,57,58,59,60],"e":[19,20,21,22,61,62,63,64,65,81],"ek":[19,20,21,22,61,62,63,64,65,81],"eko":[19,20,21,22,61,62,63,64,65],"ekom":[19,20,21,22,61,62,63,64,65],"l":[23,24,75,76],"le":[23,24,75,76],"lem":[23,24,76],"leme":[23,24,76],"fo":[25,26,42,43,72,73,74,82],"fot":[25,26,42,43],"fote":[25,26],"foter":[25,26],"pr":[27,28,29],"pre":[27,28,29],"prem":[27,28,29],"prema":[27,28,29],"premar":[27,28,29],"premare":[27,28,29],"m":[30,31,32,33,34,71],"me":[30,31,32,33,34],"met":[30,31,32,33,34],"metf":[30,31,32,33,34],"metfo":[30,31,32,33,34],"metfor":[30,31,32,33,34],"metfork":[30,31,32,33,34],"k":[35,36,37,38,39,40,41],"ko":[35,36,37,38,39,40,41],"kom":[35,36,37,38,39,40,41],"komt":[35,36,37,38,39,40,41],"komta":[35,36],"komtam":[35,36],"komtame":[35,36],"komtamer":[35,36],"komtr":[37,38,39,40,41],"komtro":[37,38,39,40,41],"komtrol":[37,38,39,40,41],"foto":[42,43],"t":[44,45,46,47,48,49,50,51],"temel":[44,45,46],"temele":[44,45,46],"temelem":[44,45,46],"temeleme":[44,45,46],"tr":[47,48,49,50,51,77],"tra":[47,48,49,50,51],"tram":[47,48],"tramp":[47,48],"trampo":[47,48],"trampos":[47,48],"traf":[49,50,51],"trafe":[49,50,51],"trafel":[49,50,51],"potoms":[52,53,54,55,56,57,58,59,60],"pa":[67,70],"pak":[67],"pakr":[67],"pakro":[67],"pakrom":[67],"pakromt":[67],"tes":[68],"test":[68],"por":[69,78,79],"port":[69,78,79],"porte":[69,78,79],"porter":[69,78,79],"pat":[70],"pate":[70],"patem":[70],"patemk":[70],"ma":[71],"mar":[71],"mark":[71],"marke":[71],"markem":[71],"fom":[72,73,74],"fomt":[72,73,74],"let":[75],"lete":[75],"leter":[75],"tro":[77],"trop":[77],"fet":[80],"ekt":[81],"fol":[82]},{"t":[1,5,23,24,26,28,36,53,54,55,56,57,58,59,60],"te":[1,5,23,24,26,28,36,47,48,49,50,51],"tef":[1,3,5,26,28],"tefa":[1,3,5,26,28],"tefao":[1,3,5,26,28],"tefaol":[1,3,5,26,28],"tefaolt":[1,3,5,26,28],"f":[7,8,9,16,30,31,32,33,34,46,79],"fl":[7,8,9,16],"flo":[7,8,9,16],"floa":[7,8,9,16],"float":[7,8,9,16],"floate":[7,8,9,16],"floatem":[7,8,9,16],"floatemk":[7,8,9,16],"pr":[10,11,12,17],"pre":[10,11,12,17],"prem":[10,11,12,17],"prema":[10,11,12,17],"premar":[10,11,12,17],"premare":[10,11,12,17],"s":[13,14,15,18,62,72,75,77],"se":[13,14,15,18,72],"sek":[13,14,15,18],"seko":[13,14,15,18],"sekom":[13,14,15,18],"sekomt":[13,14,15,18],"sekomta":[13,14,15,18],"sekomtar":[13,14,15,18],"sekomtare":[13,14,15,18],"p":[19,20,21,22],"po":[19,20,21,22,37,38,39,40,41],"pot":[19,20,21,22,37,38,39,40,41],"poto":[19,20,21,22,37,38,39,40,41],"potom":[19,20,21,22,37,38,39,40,41],"tes":[23,24,36],"tesk":[23,24],"teskr":[23,24],"teskre":[23,24],"teskrep":[23,24],"teskrept":[23,24],"teskrepte":[23,24],"teskrepteo":[23,24],"teskrepteom":[23,24],"r":[29,78],"re":[29],"ret":[29],"fe":[30,31,32,33,34,46,73,79],"fek":[30,31,32,33,34,73],"feko":[30,31,32,33,34],"fekor":[30,31,32,33,34],"fekore":[30,31,32,33,34],"test":[36],"k":[42,43,45,67,68,69,82],"ka":[42,43],"kal":[42,43],"kale":[42,43],"kaler":[42,43],"kalere":[42,43],"ko":[45,67,68,69,82],"kor":[45],"kore":[45],"korem":[45],"koremt":[45],"fet":[46,79],"tet":[47,48],"tetl":[47,48],"tetle":[47,48],"tem":[49,50,51],"teme":[49,50,51],"t1":[53,57],"t2":[54,58],"t3":[55,59],"t4":[56,60],"sm":[62],"sma":[62],"smal":[62],"m":[63],"me":[63],"met":[63],"mete":[63],"meteo":[63],"meteom":[63],"la":[64],"lar":[64],"lark":[64],"larke":[64],"es":[65],"est":[65],"estr":[65],"estra":[65],"kol":[67,68,69],"kolo":[67,68,69],"kolor":[67,68,69],"ses":[72],"sese":[72],"fekt":[73],"fa":[74],"fam":[74],"fame":[74],"famel":[74],"famele":[74],"sp":[75],"spa":[75],"spak":[75],"spake":[75],"spakem":[75],"spakemk":[75],"e":[76],"ek":[76],"ekt":[76],"sa":[77],"sat":[77],"sato":[77],"satof":[77],"ra":[78],"rat":[78],"rate":[78],"rateo":[78],"rateos":[78],"kom":[82],"komf":[82],"komfe":[82],"komfek":[82]},{"6":[29],"60":[29],"e":[7,8,10,11,13,14,57,58,59,60],"ek":[7,8,10,11,13,14],"eko":[7,8,10,11,13,14],"ekom":[7,8,10,11,13,14],"t":[9,12,15,20,43],"te":[9,12,15,20,43],"tes":[9,12,15,20],"test":[9,12,15,20],"s":[16,17],"sm":[16,17,18],"sma":[16,17,18],"smal":[16,17,18],"tef":[24,43,46,48],"tefa":[24,43,48],"tefao":[24,43,48],"tefaol":[24,43,48],"tefaolt":[24,43,48],"k":[28,50,51],"ko":[28,50,51],"kol":[28,50,51],"kolo":[28,50,51],"kolor":[28,50,51],"mo":[32],"l":[33,34],"le":[33,34],"lem":[33,34],"leme":[33,34],"a":[38,39,40,41,53,54,55,56],"at":[38,39,40,41],"ata":[38,39,40,41],"atak":[38,39,40,41],"atake":[38,39,40,41],"ataket":[38,39,40,41],"tefr":[46],"tefre":[46],"tefrem":[46],"tefremt":[46],"kolore":[50,51],"koloret":[50,51],"ak":[53,54,55,56],"akt":[53,54,55,56],"akte":[53,54,55,56],"aktef":[53,54,55,56],"aktefe":[53,54,55,56],"em":[57,58,59,60],"ema":[57,58,59,60],"emak":[57,58,59,60],"emakt":[57,58,59,60],"emakte":[57,58,59,60],"emaktef":[57,58,59,60],"emaktefe":[57,58,59,60],"la":[65],"lar":[65],"lark":[65],"larke":[65]},{"t":[7,8,10,11,13,14,38,39,40,41],"te":[7,8,10,11,13,14],"tes":[7,8,10,11,13,14],"test":[7,8,10,11,13,14],"a":[22],"am":[22],"amt":[22],"om":[32],"ome":[32],"omet":[32],"to":[38,39,40,41],"e":[46],"et":[46],"ete":[46],"etem":[46],"etems":[46],"f":[51],"fa":[51],"fal":[51],"fals":[51],"false":[51],"m":[53,56,58,59],"mo":[53,56,58,59],"k":[54,55,57,60],"ke":[54,55,57,60],"kef":[54,55,57,60],"kefr":[54,55,57,60],"kefro":[54,55,57,60],"kefrom":[54,55,57,60]},{"m":[7,10,13],"mo":[7,10,13,31,33],"mot":[7,10,13],"mote":[7,10,13],"motef":[7,10,13],"t":[22],"te":[22],"tes":[22],"test":[22],"p":[34],"pl":[34],"pla":[34],"plam":[34],"l":[38,39],"le":[38,39],"lef":[38,39],"left":[38,39],"k":[53,56,58,59],"ke":[53,56,58,59],"kef":[53,56,58,59],"kefr":[53,56,58,59],"kefro":[53,56,58,59],"kefrom":[53,56,58,59]},{"e":[31,33],"em":[31],"emf":[31],"emfo":[31],"ek":[33],"eko":[33],"ekom":[33],"o":[38,40],"op":[38,40],"ope":[38,40],"opem":[38,40],"kl":[39,41],"klo":[39,41],"klos":[39,41],"klose":[39,41],"kloset":[39,41]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:src-components-line-linefigures-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "7": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "9": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "10": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-3", "kind": "variant" }, "11": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-4", "kind": "variant" }, "12": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-5", "kind": "variant" }, "13": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-6", "kind": "variant" }, "14": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-7", "kind": "variant" }, "15": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-8", "kind": "variant" }, "16": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-9", "kind": "variant" }, "17": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-10", "kind": "variant" }, "18": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-11", "kind": "variant" }, "19": { "id": "src-components-ui-uiiconbutton-story-vue", "kind": "story" }, "20": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "21": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "22": { "id": "src-components-ui-uiiconbutton-story-vue:src-components-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "23": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "24": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "25": { "id": "src-components-ui-uilinkfooter-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-uilinkfooter-story-vue:_default", "kind": "variant" }, "27": { "id": "src-components-ui-uilinkprimary-story-vue", "kind": "story" }, "28": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-0", "kind": "variant" }, "29": { "id": "src-components-ui-uilinkprimary-story-vue:src-components-ui-uilinkprimary-story-vue-1", "kind": "variant" }, "30": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "31": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "32": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "33": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "34": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "35": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "36": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "37": { "id": "src-components-ui-uipanelcontrolbutton-story-vue", "kind": "story" }, "38": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-0", "kind": "variant" }, "39": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-1", "kind": "variant" }, "40": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-2", "kind": "variant" }, "41": { "id": "src-components-ui-uipanelcontrolbutton-story-vue:src-components-ui-uipanelcontrolbutton-story-vue-3", "kind": "variant" }, "42": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "43": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "44": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "45": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "46": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "47": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "48": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "49": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "50": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "51": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "52": { "id": "src-components-map-buttons-uilinebutton-story-vue", "kind": "story" }, "53": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-0", "kind": "variant" }, "54": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-1", "kind": "variant" }, "55": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-2", "kind": "variant" }, "56": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-3", "kind": "variant" }, "57": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-4", "kind": "variant" }, "58": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-5", "kind": "variant" }, "59": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-6", "kind": "variant" }, "60": { "id": "src-components-map-buttons-uilinebutton-story-vue:src-components-map-buttons-uilinebutton-story-vue-7", "kind": "variant" }, "61": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "62": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "63": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "64": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "65": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "66": { "id": "tailwind", "kind": "story" }, "67": { "id": "tailwind:background-color", "kind": "variant" }, "68": { "id": "tailwind:text-color", "kind": "variant" }, "69": { "id": "tailwind:border-color", "kind": "variant" }, "70": { "id": "tailwind:padding", "kind": "variant" }, "71": { "id": "tailwind:margin", "kind": "variant" }, "72": { "id": "tailwind:font-size", "kind": "variant" }, "73": { "id": "tailwind:font-weight", "kind": "variant" }, "74": { "id": "tailwind:font-family", "kind": "variant" }, "75": { "id": "tailwind:letter-spacing", "kind": "variant" }, "76": { "id": "tailwind:line-height", "kind": "variant" }, "77": { "id": "tailwind:drop-shadow", "kind": "variant" }, "78": { "id": "tailwind:border-radius", "kind": "variant" }, "79": { "id": "tailwind:border-width", "kind": "variant" }, "80": { "id": "tailwind:width", "kind": "variant" }, "81": { "id": "tailwind:height", "kind": "variant" }, "82": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.f8c5a211.js"), true ? ["assets/search-docs-data.f8c5a211.js","assets/vendor.66367cfd.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
