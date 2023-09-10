import{S as h,N as _,e as p,f as x,F as f,g as m,D as b,A as w}from"./index-32190f06.js";import{u as v,r as g,b as y,o as c,c as a,d as e,f as t,t as i,e as s,w as d,n as k,J as I,K as S}from"./app-2c444acf.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue.runtime.esm-bundler-fc9d968a.js";const o=r=>(I("data-v-3adbac47"),r=r(),S(),r),j={class:"no-scrollbar shadow fixed flex h-screen w-72 flex-col overflow-y-auto pb-3 bg-[#16a085]"},D=o(()=>e("div",{class:"w-full flex items-center py-2 justify-start border-b"},[e("div",{class:"w-[60px] h-[46px]"},[e("img",{src:"/assets/LOGO.png",class:"w-full h-full object-contain"})]),e("h5",{class:"text-[1.3rem] font-semibold text-white"},"ECC - Admin Panel")],-1)),N={class:"py-2"},A={class:"flex items-center flex-col justify-center p-1 rounded-xl cursor-pointer"},B={class:"flex items-center justify-center overflow-hidden mb-2 bg-gradient-to-r from-blue-500 to-blue-600 w-32 h-32 text-white font-semibold p-2 rounded-full cursor-pointer"},L=["src","alt"],P={key:1,class:"text-5xl uppercase"},z={class:"font-semibold text-white text-lg"},O={class:"text-sm text-gray-200"},q={class:"flex flex-col justify-between"},E={class:"w-full flex flex-col my-3 px-4"},F=o(()=>e("h3",{class:"font-semibold text-lg"},"Dashboard",-1)),G={class:"flex items-center w-full p-2 my-2 rounded-lg space-x-2 hover:bg-white hover:text-black text-white group cursor-pointer"},M=o(()=>e("h3",{class:"font-semibold text-lg"},"Publication",-1)),V=o(()=>e("h3",{class:"font-semibold text-lg"},"Profils",-1)),J={class:"flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer"},K=o(()=>e("h3",{class:"font-semibold text-lg"},"Paroisses",-1)),R={class:"flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer"},U=o(()=>e("h3",{class:"font-semibold text-lg"},"Multimédia",-1)),X={class:"flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer"},H=o(()=>e("h3",{class:"font-semibold text-lg"},"Cantiques",-1)),Q={class:"flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer"},T=o(()=>e("h3",{class:"font-semibold text-lg"},"Documents",-1)),W={class:"px-4 border-t"},Y={class:"flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer"},Z=o(()=>e("h3",{class:"font-semibold text-lg"},"Logout",-1)),$={__name:"Sidebar",setup(r){const l=v(),u=g({menu:!0});return(ee,te)=>{const n=y("router-link");return c(),a("div",{class:k([u.menu?"relative z-50 mr-72 h-full transition-all duration-1000":"relative z-50 h-full transition-all duration-1000"])},[e("div",j,[D,e("div",N,[e("div",A,[e("div",B,[t(l).user.avatar!=null&&t(l).user.avatar!="null"?(c(),a("img",{key:0,class:"h-full w-full rounded-full object-cover",src:t(l).user.avatar,alt:t(l).user.username},null,8,L)):(c(),a("span",P,i(t(l).user.username[0]),1))]),e("div",z,i(t(l).user.username),1),e("div",O,i(t(l).user.email),1)])]),e("div",q,[e("div",E,[s(n,{to:{name:"admin.dashboard"},class:"flex items-center w-full p-2 space-x-2 my-2 rounded-lg hover:bg-white hover:text-black text-white group cursor-pointer"},{default:d(()=>[s(t(h),{class:"w-6 h-6"}),F]),_:1},8,["to"]),e("div",G,[s(t(_),{class:"w-6 h-6"}),M]),s(n,{to:{name:"admin.user.index"},class:"flex items-center w-full p-2 my-2 rounded-lg hover:bg-white space-x-2 hover:text-black text-white group cursor-pointer"},{default:d(()=>[s(t(p),{class:"w-6 h-6"}),V]),_:1},8,["to"]),e("div",J,[s(t(x),{stroke:"currentColor",class:"w-6 h-6"}),K]),e("div",R,[s(t(f),{class:"w-6 h-6"}),U]),e("div",X,[s(t(m),{class:"w-6 h-6"}),H]),e("div",Q,[s(t(b),{class:"w-6 h-6"}),T])]),e("div",W,[e("div",Y,[s(t(w),{class:"w-6 h-6"}),Z])])])])],2)}}},ce=C($,[["__scopeId","data-v-3adbac47"]]);export{ce as default};