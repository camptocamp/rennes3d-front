import { d as defineComponent, u as useCssVars, r as ref, a9 as toRefs, aa as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, V as markRaw, aU as useFocus, k as watch, aV as refDebounced, c as computed, y as withDirectives, ac as vModelText, m as withKeys, a1 as withModifiers, _ as __vitePreload, aW as flexsearch_bundle } from "./vendor.08d49729.js";
import { u as useStoryStore } from "./story.14094f90.js";
import { B as BaseEmpty } from "./BaseEmpty.d2b88e06.js";
import { o as onKeyboardShortcut } from "./bundle-main.838c7948.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.5d7cac8f.js";
import "./GenericMountStory.e6b5b943.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"m":[0,1],"me":[0,1],"met":[0,1],"metf":[0,1],"metfo":[0,1],"metfor":[0,1],"metfork":[0,1],"t":[2,3,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"tr":[2,3],"tra":[2,3],"traf":[2,3],"trafe":[2,3],"trafel":[2,3],"l":[4,5,12,13,14,32,33,34,35,36],"le":[4,5,12,13,14,32,33,34,35,36],"lem":[4,5,12,13,14,32,33,34,35,36],"leme":[4,5,32,33,34,35,36],"o":[6,7,8,9,10,11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"lemk":[12,13,14],"of":[20,21],"ofe":[20,21],"ofer":[20,21],"oferf":[20,21],"oferfl":[20,21],"oferflo":[20,21],"oferflof":[20,21],"ta":[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"tal":[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"talf":[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"talfe":[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"talfem":[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"talfemt":[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]},{"f":[0,1,4,5,22,23,43,44,45,51,53],"fe":[0,1,4,5,51],"fek":[0,1,4,5],"feko":[0,1,4,5],"fekor":[0,1,4,5],"fekore":[0,1,4,5],"fekores":[0,1],"te":[2,3,24,25,26,39],"tem":[2,3,24,25,26],"teme":[2,3,24,25,26],"p":[6,7,8,9,38,40,41,49,50],"po":[6,7,8,9,40,49,50],"pot":[6,7,8,9],"poto":[6,7,8,9],"potom":[6,7,8,9],"l":[10,11,46,47],"le":[10,11,46,47],"lem":[10,11,47],"leme":[10,11,47],"m":[12,13,14,15,16,17,18,19,42],"me":[12,13,14,15,16,17,18,19],"met":[12,13,14,15,16,17,18,19],"mete":[12,13,14],"metes":[12,13,14],"metf":[15,16,17,18,19],"metfo":[15,16,17,18,19],"metfor":[15,16,17,18,19],"metfork":[15,16,17,18,19],"k":[20,21],"ko":[20,21],"kom":[20,21],"komt":[20,21],"komta":[20,21],"komtam":[20,21],"komtame":[20,21],"komtamer":[20,21],"fo":[22,23,43,44,45,53],"fot":[22,23],"foto":[22,23],"t":[24,25,26,27,28,29,30,31],"temel":[24,25,26],"temele":[24,25,26],"temelem":[24,25,26],"temeleme":[24,25,26],"tr":[27,28,29,30,31,48],"tra":[27,28,29,30,31],"tram":[27,28],"tramp":[27,28],"trampo":[27,28],"trampos":[27,28],"traf":[29,30,31],"trafe":[29,30,31],"trafel":[29,30,31],"e":[32,33,34,35,36,52],"ek":[32,33,34,35,36,52],"eko":[32,33,34,35,36],"ekom":[32,33,34,35,36],"pa":[38,41],"pak":[38],"pakr":[38],"pakro":[38],"pakrom":[38],"pakromt":[38],"tes":[39],"test":[39],"por":[40,49,50],"port":[40,49,50],"porte":[40,49,50],"porter":[40,49,50],"pat":[41],"pate":[41],"patem":[41],"patemk":[41],"ma":[42],"mar":[42],"mark":[42],"marke":[42],"markem":[42],"fom":[43,44,45],"fomt":[43,44,45],"let":[46],"lete":[46],"leter":[46],"tro":[48],"trop":[48],"fet":[51],"ekt":[52],"fol":[53]},{"t":[1,5,7,10,11,13,21],"te":[1,5,7,10,11,13,21,27,28,29,30,31],"tef":[1,3,5,13],"tefa":[1,3,5,13],"tefao":[1,3,5,13],"tefaol":[1,3,5,13],"tefaolt":[1,3,5,13],"tes":[7,10,11,21],"test":[7,21],"e":[8,9,47],"ek":[8,9,47],"eko":[8,9],"ekom":[8,9],"tesk":[10,11],"teskr":[10,11],"teskre":[10,11],"teskrep":[10,11],"teskrept":[10,11],"teskrepte":[10,11],"teskrepteo":[10,11],"teskrepteom":[10,11],"r":[14,49],"re":[14],"ret":[14],"f":[15,16,17,18,19,26,50],"fe":[15,16,17,18,19,26,44,50],"fek":[15,16,17,18,19,44],"feko":[15,16,17,18,19],"fekor":[15,16,17,18,19],"fekore":[15,16,17,18,19],"k":[22,23,25,38,39,40,53],"ka":[22,23],"kal":[22,23],"kale":[22,23],"kaler":[22,23],"kalere":[22,23],"ko":[25,38,39,40,53],"kor":[25],"kore":[25],"korem":[25],"koremt":[25],"fet":[26,50],"tet":[27,28],"tetl":[27,28],"tetle":[27,28],"tem":[29,30,31],"teme":[29,30,31],"s":[33,43,46,48],"sm":[33],"sma":[33],"smal":[33],"m":[34],"me":[34],"met":[34],"mete":[34],"meteo":[34],"meteom":[34],"la":[35],"lar":[35],"lark":[35],"larke":[35],"es":[36],"est":[36],"estr":[36],"estra":[36],"kol":[38,39,40],"kolo":[38,39,40],"kolor":[38,39,40],"se":[43],"ses":[43],"sese":[43],"fekt":[44],"fa":[45],"fam":[45],"fame":[45],"famel":[45],"famele":[45],"sp":[46],"spa":[46],"spak":[46],"spake":[46],"spakem":[46],"spakemk":[46],"ekt":[47],"sa":[48],"sat":[48],"sato":[48],"satof":[48],"ra":[49],"rat":[49],"rate":[49],"rateo":[49],"rateos":[49],"kom":[53],"komf":[53],"komfe":[53],"komfek":[53]},{"6":[14],"60":[14],"a":[9],"am":[9],"amt":[9],"tef":[11,23,26,28],"tefa":[11,23,28],"tefao":[11,23,28],"tefaol":[11,23,28],"tefaolt":[11,23,28],"k":[13,30,31],"ko":[13,30,31],"kol":[13,30,31],"kolo":[13,30,31],"kolor":[13,30,31],"mo":[17],"l":[18,19],"le":[18,19],"lem":[18,19],"leme":[18,19],"t":[23],"te":[23],"tefr":[26],"tefre":[26],"tefrem":[26],"tefremt":[26],"kolore":[30,31],"koloret":[30,31],"la":[36],"lar":[36],"lark":[36],"larke":[36]},{"t":[9],"te":[9],"tes":[9],"test":[9],"om":[17],"ome":[17],"omet":[17],"e":[26],"et":[26],"ete":[26],"etem":[26],"etems":[26],"f":[31],"fa":[31],"fal":[31],"fals":[31],"false":[31]},{"mo":[16,18],"p":[19],"pl":[19],"pla":[19],"plam":[19]},{"e":[16,18],"em":[16],"emf":[16],"emfo":[16],"ek":[18],"eko":[18],"ekom":[18]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-networkfigures-story-vue", "kind": "story" }, "1": { "id": "src-components-home-networkfigures-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-home-traveltimes-story-vue", "kind": "story" }, "3": { "id": "src-components-home-traveltimes-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-line-linefigures-story-vue", "kind": "story" }, "5": { "id": "src-components-line-linefigures-story-vue:src-components-line-linefigures-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-ui-uibutton-story-vue", "kind": "story" }, "7": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-1", "kind": "variant" }, "9": { "id": "src-components-ui-uibutton-story-vue:src-components-ui-uibutton-story-vue-2", "kind": "variant" }, "10": { "id": "src-components-ui-uilinedescription-story-vue", "kind": "story" }, "11": { "id": "src-components-ui-uilinedescription-story-vue:_default", "kind": "variant" }, "12": { "id": "src-components-ui-uilinkmetis-story-vue", "kind": "story" }, "13": { "id": "src-components-ui-uilinkmetis-story-vue:src-components-ui-uilinkmetis-story-vue-0", "kind": "variant" }, "14": { "id": "src-components-ui-uilinkmetis-story-vue:src-components-ui-uilinkmetis-story-vue-1", "kind": "variant" }, "15": { "id": "src-components-ui-uinetworkfigure-story-vue", "kind": "story" }, "16": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-0", "kind": "variant" }, "17": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-1", "kind": "variant" }, "18": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-2", "kind": "variant" }, "19": { "id": "src-components-ui-uinetworkfigure-story-vue:src-components-ui-uinetworkfigure-story-vue-3", "kind": "variant" }, "20": { "id": "src-components-ui-uioverflowcontainer-story-vue", "kind": "story" }, "21": { "id": "src-components-ui-uioverflowcontainer-story-vue:src-components-ui-uioverflowcontainer-story-vue-0", "kind": "variant" }, "22": { "id": "src-components-ui-uiphotogalery-story-vue", "kind": "story" }, "23": { "id": "src-components-ui-uiphotogalery-story-vue:_default", "kind": "variant" }, "24": { "id": "src-components-ui-uitimeline-story-vue", "kind": "story" }, "25": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-0", "kind": "variant" }, "26": { "id": "src-components-ui-uitimeline-story-vue:src-components-ui-uitimeline-story-vue-1", "kind": "variant" }, "27": { "id": "src-components-ui-uitrambustitle-story-vue", "kind": "story" }, "28": { "id": "src-components-ui-uitrambustitle-story-vue:_default", "kind": "variant" }, "29": { "id": "src-components-ui-uitraveltime-story-vue", "kind": "story" }, "30": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-0", "kind": "variant" }, "31": { "id": "src-components-ui-uitraveltime-story-vue:src-components-ui-uitraveltime-story-vue-1", "kind": "variant" }, "32": { "id": "src-components-ui-icons-iconline-story-vue", "kind": "story" }, "33": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-0", "kind": "variant" }, "34": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-1", "kind": "variant" }, "35": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-2", "kind": "variant" }, "36": { "id": "src-components-ui-icons-iconline-story-vue:src-components-ui-icons-iconline-story-vue-3", "kind": "variant" }, "37": { "id": "tailwind", "kind": "story" }, "38": { "id": "tailwind:background-color", "kind": "variant" }, "39": { "id": "tailwind:text-color", "kind": "variant" }, "40": { "id": "tailwind:border-color", "kind": "variant" }, "41": { "id": "tailwind:padding", "kind": "variant" }, "42": { "id": "tailwind:margin", "kind": "variant" }, "43": { "id": "tailwind:font-size", "kind": "variant" }, "44": { "id": "tailwind:font-weight", "kind": "variant" }, "45": { "id": "tailwind:font-family", "kind": "variant" }, "46": { "id": "tailwind:letter-spacing", "kind": "variant" }, "47": { "id": "tailwind:line-height", "kind": "variant" }, "48": { "id": "tailwind:drop-shadow", "kind": "variant" }, "49": { "id": "tailwind:border-radius", "kind": "variant" }, "50": { "id": "tailwind:border-width", "kind": "variant" }, "51": { "id": "tailwind:width", "kind": "variant" }, "52": { "id": "tailwind:height", "kind": "variant" }, "53": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.6b657f24.js"), true ? ["assets/search-docs-data.6b657f24.js","assets/vendor.08d49729.js"] : void 0);
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
