!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],e):e(jQuery)}(function(G){"use strict";G.jgrid.extend({editCell:function(c,u,f,C,g){return this.each(function(){var e,i,l,t,r=this,o=G(this).jqGrid("getStyleUI",r.p.styleUI+".common","highlight",!0),d=r.p.ariaBody?"":G(this).jqGrid("getStyleUI",r.p.styleUI+".common","hover",!0),s=G(this).jqGrid("getStyleUI",r.p.styleUI+".celledit","inputClass",!0),a=G(this).jqGrid("getStyleUI",r.p.styleUI+".celledit","selectClass",!0);if(r.grid&&!0===r.p.cellEdit){if(u=parseInt(u,10),r.p.selrow=r.rows[c].id,r.p.knv||r.p.ariaBody||G(r).jqGrid("GridNav"),0<r.p.savedRow.length){if(!0===f&&c==r.p.iRow&&u==r.p.iCol)return;G(r).jqGrid("saveCell",r.p.savedRow[0].id,r.p.savedRow[0].ic)}else window.setTimeout(function(){G("#"+G.jgrid.jqID(r.p.knv)).attr("tabindex","-1").focus()},1);if("subgrid"!==(e=(t=r.p.colModel[u]).name)&&"cb"!==e&&"rn"!==e&&"sc"!==e){try{l=G(r.rows[c].cells[u])}catch(e){l=G("td",r.rows[c]).eq(u)}if(0<=parseInt(r.p.iCol,10)&&0<=parseInt(r.p.iRow,10)&&void 0!==r.p.iRowId&&(n=G(r).jqGrid("getGridRowById",r.p.iRowId),G(n).removeClass("selected-row "+d).find("td").eq(r.p.iCol).removeClass("edit-cell "+o)),l.addClass("edit-cell "+o),G(r.rows[c]).addClass("selected-row "+d),!0!==t.editable||!0!==f||l.hasClass("not-editable-cell")||G.jgrid.isFunction(r.p.isCellEditable)&&!r.p.isCellEditable.call(r,e,c,u))i=l.html().replace(/\&#160\;/gi,""),G(r).triggerHandler("jqGridCellSelect",[r.rows[c].id,u,i,C]),G.jgrid.isFunction(r.p.onCellSelect)&&r.p.onCellSelect.call(r,r.rows[c].id,u,i,C);else{try{i=G.unformat.call(r,l,{rowId:r.rows[c].id,colModel:t},u)}catch(e){i=t.edittype&&"textarea"===t.edittype?l.text():l.html()}r.p.autoencode&&(i=G.jgrid.htmlDecode(i)),t.edittype||(t.edittype="text"),r.p.savedRow.push({id:c,ic:u,name:e,v:i,rowId:r.rows[c].id}),("&nbsp;"===i||"&#160;"===i||1===i.length&&160===i.charCodeAt(0))&&(i=""),G.jgrid.isFunction(r.p.formatCell)&&void 0!==(n=r.p.formatCell.call(r,r.rows[c].id,e,i,c,u))&&(i=n),G(r).triggerHandler("jqGridBeforeEditCell",[r.rows[c].id,e,i,c,u]),G.jgrid.isFunction(r.p.beforeEditCell)&&r.p.beforeEditCell.call(r,r.rows[c].id,e,i,c,u);var n,o=G.extend({},t.editoptions||{},{id:c+"_"+e,name:e,rowId:r.rows[c].id,oper:"edit",module:"cell"}),p=(g&&(i=C.key),G.jgrid.createEl.call(r,t.edittype,o,i,!0,G.extend({},G.jgrid.ajaxOptions,r.p.ajaxSelectOptions||{})));-1<G.inArray(t.edittype,["text","textarea","password"])?G(p).addClass(s):"select"===t.edittype&&G(p).addClass(a),l.html("").append(p).attr("tabindex","0"),G.jgrid.bindEv.call(r,p,o),window.setTimeout(function(){G(p).focus()},1),G("input, select, textarea",l).on("keydown",function(e){var i=e.key;if(27===e.keyCode&&(!(0<G("input.hasDatepicker",l).length)||G(".ui-datepicker").is(":hidden")?G(r).jqGrid("restoreCell",c,u):G("input.hasDatepicker",l).datepicker("hide")),13===e.keyCode&&e.altKey&&"TEXTAREA"===this.nodeName)return this.value=this.value+"\r",!0;if(13===e.keyCode&&!e.shiftKey)return G(r).jqGrid("saveCell",c,u),c<r.rows.length-1&&g?G(r).jqGrid("focusBodyCell",c+1,u):setTimeout(function(){G(r).jqGrid("focusBodyCell",c,u)},100),!1;if(9===e.keyCode&&!g){if(r.grid.hDiv.loading)return!1;e.shiftKey?r.p.ariaBody?(G(r).jqGrid("saveCell",c,u),1<u&&G(r).jqGrid("focusBodyCell",c,u-1)):!G(r).jqGrid("prevCell",c,u,e)&&r.p.editNextRowCell&&0<c-1&&r.rows[c-1]&&(c--,G(r).jqGrid("prevCell",c,r.p.colModel.length,e)):r.p.ariaBody?(G(r).jqGrid("saveCell",c,u),u<r.p.colModel.length-1&&G(r).jqGrid("focusBodyCell",c,u+1)):!G(r).jqGrid("nextCell",c,u,e)&&r.p.editNextRowCell&&r.rows[c+1]&&(c++,G(r).jqGrid("nextCell",c,0,e))}!g&&r.p.F2key&&r.p.ariaBody&&"F2"===e.key&&(G(r).jqGrid("saveCell",c,u),G(r).jqGrid("focusBodyCell",c,u),r.p.F2key=!1),g&&("ArrowUp"===i&&(G(r).jqGrid("saveCell",c,u),1<c)&&G(r).jqGrid("focusBodyCell",c-1,u),"ArrowDown"===i&&(G(r).jqGrid("saveCell",c,u),c<r.p.rows.length-1)&&G(r).jqGrid("focusBodyCell",c+1,u),"ArrowLeft"===i&&(G(r).jqGrid("saveCell",c,u),1<u)&&G(r).jqGrid("focusBodyCell",c,u-1),"ArrowRight"===i&&(G(r).jqGrid("saveCell",c,u),u<r.p.colModel.length-1)&&G(r).jqGrid("focusBodyCell",c,u+1),9===e.keyCode)&&(G(r).jqGrid("saveCell",c,u),e.shiftKey?1<u&&G(r).jqGrid("focusBodyCell",c,u-1):u<r.p.colModel.length-1&&G(r).jqGrid("focusBodyCell",c,u+1)),e.stopPropagation()}),G(r).triggerHandler("jqGridAfterEditCell",[r.rows[c].id,e,i,c,u]),G.jgrid.isFunction(r.p.afterEditCell)&&r.p.afterEditCell.call(r,r.rows[c].id,e,i,c,u)}r.p.iCol=u,r.p.iRow=c,r.p.iRowId=r.rows[c].id}}})},saveCell:function(b,q,m){return this.each(function(){var t=this,e=t.p.colModel[q],r=e.name,o=G(t).jqGrid("getGridRowById",t.rows[b].id),d=G("td",o).eq(q),s=(void 0!==m&&(C=G.unformat.call(t,d,{rowId:t.rows[b].id,colModel:e},q),t.p.savedRow.push({id:b,ic:q,name:r,v:C,rowId:t.rows[b].id}),t.p.savedValues={oldvalue:C,newvalue:m,indexRow:b}),1<=t.p.savedRow.length?0:null),a=G.jgrid.getRegional(this,"errors"),n=G.jgrid.getRegional(this,"edit");if(t.grid&&!0===t.p.cellEdit){if(null!==s){var p=G.jgrid.jqID(r),c=G(d).offset();if(void 0===m)switch(e.edittype){case"select":var l,u,f=e.editoptions.multiple?(i=G("#"+b+"_"+p,o),l=[],(u=G(i).val())?u.join(","):u="",G("option:selected",i).each(function(e,i){l[e]=G(i).text()}),l.join(",")):(u=G("#"+b+"_"+p+" option:selected",o).val(),G("#"+b+"_"+p+" option:selected",o).text());e.formatter&&(f=u);break;case"checkbox":var i=["Yes","No"];e.editoptions&&e.editoptions.value&&(i=e.editoptions.value.split(":")),u=G("#"+b+"_"+p,o).is(":checked")?i[0]:i[1],f=u;break;case"password":case"text":case"textarea":case"button":u=G("#"+b+"_"+p,o).val(),f=u;break;case"custom":try{if(!e.editoptions||!G.jgrid.isFunction(e.editoptions.custom_value))throw"e1";if(void 0===(u=e.editoptions.custom_value.call(t,G(".customelement",d),"get")))throw"e2";f=u}catch(e){"e1"===e?G.jgrid.info_dialog(a.errcap,"function 'custom_value' "+n.msg.nodefined,n.bClose,{styleUI:t.p.styleUI}):"e2"===e?G.jgrid.info_dialog(a.errcap,"function 'custom_value' "+n.msg.novalue,n.bClose,{styleUI:t.p.styleUI}):G.jgrid.info_dialog(a.errcap,e.message,n.bClose,{styleUI:t.p.styleUI})}}else{if(!0!==e.editable||d.hasClass("not-editable-cell")||G.jgrid.isFunction(t.p.isCellEditable)&&!t.p.isCellEditable.call(t,r,b,q))return f=u=m,void t.p.savedRow.splice(0,1);f=u=m}if(f!==t.p.savedRow[s].v){var C=G(t).triggerHandler("jqGridBeforeSaveCell",[t.p.savedRow[s].rowId,r,u,b,q]),g=(C&&(f=u=C),G.jgrid.isFunction(t.p.beforeSaveCell)&&(C=t.p.beforeSaveCell.call(t,t.p.savedRow[s].rowId,r,u,b,q))&&(f=u=C),G.jgrid.checkValues.call(t,u,q)),v=!1;if(!0===g[0]){var C=G(t).triggerHandler("jqGridBeforeSubmitCell",[t.p.savedRow[s].rowId,r,u,b,q])||{},w=(G.jgrid.isFunction(t.p.beforeSubmitCell)&&(C=(C=t.p.beforeSubmitCell.call(t,t.p.savedRow[s].rowId,r,u,b,q))||{}),G(t).triggerHandler("jqGridOnSubmitCell",[t.p.savedRow[s].rowId,r,u,b,q]));if(void 0===w&&(w=!0),!1===(w=G.jgrid.isFunction(t.p.onSubmitCell)&&void 0===(w=t.p.onSubmitCell(t.p.savedRow[s].rowId,r,u,b,q))?!0:w))return;if(0<G("input.hasDatepicker",d).length&&G("input.hasDatepicker",d).datepicker("hide"),"remote"===t.p.cellsubmit)if(t.p.cellurl){var h={},w=(t.p.autoencode&&(u=G.jgrid.htmlEncode(u)),e.editoptions&&e.editoptions.NullIfEmpty&&""===u&&(u="null",v=!0),h[r]=u,t.p.prmNames),j=w.id,y=w.oper;h[j]=G.jgrid.stripPref(t.p.idPrefix,t.p.savedRow[s].rowId),h[y]=w.editoper,h=G.extend(C,h),G(t).jqGrid("progressBar",{method:"show",loadtype:t.p.loadui,htmlcontent:G.jgrid.getRegional(t,"defaults.savetext")}),t.grid.hDiv.loading=!0,G.ajax(G.extend({url:t.p.cellurl,data:G.jgrid.isFunction(t.p.serializeCellData)?t.p.serializeCellData.call(t,h,r):h,type:"POST",complete:function(e,i){var l;G(t).jqGrid("progressBar",{method:"hide",loadtype:t.p.loadui}),t.grid.hDiv.loading=!1,"success"===i&&(!0===(l=!0===(l=G(t).triggerHandler("jqGridAfterSubmitCell",[t,e,h[j],r,u,b,q])||[!0,""])[0]&&G.jgrid.isFunction(t.p.afterSubmitCell)?t.p.afterSubmitCell.call(t,e,h[j],r,u,b,q):l)[0]?(v&&(u=""),G(d).empty(),G(t).jqGrid("setCell",t.p.savedRow[s].rowId,q,f,!1,!1,!0),d=G("td",o).eq(q),G(d).addClass("dirty-cell"),G(o).addClass("edited"),G(t).triggerHandler("jqGridAfterSaveCell",[t.p.savedRow[s].rowId,r,u,b,q]),G.jgrid.isFunction(t.p.afterSaveCell)&&t.p.afterSaveCell.call(t,t.p.savedRow[s].rowId,r,u,b,q),t.p.savedRow.splice(0,1)):(G(t).triggerHandler("jqGridErrorCell",[e,i]),G.jgrid.isFunction(t.p.errorCell)?t.p.errorCell.call(t,e,i):G.jgrid.info_dialog(a.errcap,l[1],n.bClose,{styleUI:t.p.styleUI,top:c.top+30,left:c.left,onClose:function(){t.p.restoreCellonFail||G("#"+b+"_"+p,o).focus()}}),t.p.restoreCellonFail&&G(t).jqGrid("restoreCell",b,q)))},error:function(e,i,l){G("#lui_"+G.jgrid.jqID(t.p.id)).hide(),t.grid.hDiv.loading=!1,G(t).triggerHandler("jqGridErrorCell",[e,i,l]),G.jgrid.isFunction(t.p.errorCell)?t.p.errorCell.call(t,e,i,l):G.jgrid.info_dialog(a.errcap,e.status+" : "+e.statusText+"<br/>"+i,n.bClose,{styleUI:t.p.styleUI,top:c.top+30,left:c.left,onClose:function(){t.p.restoreCellonFail||G("#"+b+"_"+p,o).focus()}}),t.p.restoreCellonFail&&G(t).jqGrid("restoreCell",b,q)}},G.jgrid.ajaxOptions,t.p.ajaxCellOptions||{}))}else try{G.jgrid.info_dialog(a.errcap,a.nourl,n.bClose,{styleUI:t.p.styleUI}),t.p.restoreCellonFail&&G(t).jqGrid("restoreCell",b,q)}catch(e){}"clientArray"===t.p.cellsubmit&&(G(d).empty(),G(t).jqGrid("setCell",t.p.savedRow[s].rowId,q,f,!1,!1,!0),d=G("td",o).eq(q),G(d).addClass("dirty-cell"),G(o).addClass("edited"),G(t).triggerHandler("jqGridAfterSaveCell",[t.p.savedRow[s].rowId,r,u,b,q]),G.jgrid.isFunction(t.p.afterSaveCell)&&t.p.afterSaveCell.call(t,t.p.savedRow[s].rowId,r,u,b,q),t.p.savedRow.splice(0,1))}else try{G.jgrid.isFunction(t.p.validationCell)?t.p.validationCell.call(t,G("#"+b+"_"+p,o),g[1],b,q):(window.setTimeout(function(){G.jgrid.info_dialog(a.errcap,u+" "+g[1],n.bClose,{styleUI:t.p.styleUI,top:c.top+30,left:c.left,onClose:function(){t.p.restoreCellonFail||G("#"+b+"_"+p,o).focus()}})},50),t.p.restoreCellonFail&&G(t).jqGrid("restoreCell",b,q))}catch(e){alert(g[1])}}else G(t).jqGrid("restoreCell",b,q)}window.setTimeout(function(){G("#"+G.jgrid.jqID(t.p.knv)).attr("tabindex","-1").focus(),t.p.ariaBody&&G(t).jqGrid("focusBodyCell",t.p.iRow,t.p.iCol)},0)}})},restoreCell:function(t,r){return this.each(function(){var e=this,i=1<=e.p.savedRow.length?0:null;if(e.grid&&!0===e.p.cellEdit){if(null!==i){var l=G(e).jqGrid("getGridRowById",e.p.savedRow[i].rowId),l=G("td",l).eq(r);if(G.jgrid.isFunction(G.fn.datepicker))try{G("input.hasDatepicker",l).datepicker("hide")}catch(e){}G(l).empty().attr("tabindex","-1"),G(e).jqGrid("setCell",e.p.savedRow[0].rowId,r,e.p.savedRow[i].v,!1,!1,!0),G(e).triggerHandler("jqGridAfterRestoreCell",[e.p.savedRow[i].rowId,e.p.savedRow[i].v,t,r]),G.jgrid.isFunction(e.p.afterRestoreCell)&&e.p.afterRestoreCell.call(e,e.p.savedRow[i].rowId,e.p.savedRow[i].v,t,r),e.p.savedRow.splice(0,1)}window.setTimeout(function(){G("#"+e.p.knv).attr("tabindex","-1").focus(),e.p.ariaBody&&G(e).jqGrid("focusBodyCell",e.p.iRow,e.p.iCol)},0)}})},nextCell:function(t,r,o){var d;return this.each(function(){var e,i=this,l=!1;if(i.grid&&!0===i.p.cellEdit){for(e=r+1;e<i.p.colModel.length;e++)if(!0===i.p.colModel[e].editable&&(!G.jgrid.isFunction(i.p.isCellEditable)||i.p.isCellEditable.call(i,i.p.colModel[e].name,t,e))){l=e;break}!1!==l?(d=!0,G(i).jqGrid("editCell",t,l,!0,o)):(d=!1,0<i.p.savedRow.length&&G(i).jqGrid("saveCell",t,r))}}),d},prevCell:function(t,r,o){var d;return this.each(function(){var e,i=this,l=!1;if(!i.grid||!0!==i.p.cellEdit)return!1;for(e=r-1;0<=e;e--)if(!0===i.p.colModel[e].editable&&(!G.jgrid.isFunction(i.p.isCellEditable)||i.p.isCellEditable.call(i,i.p.colModel[e].name,t,e))){l=e;break}!1!==l?(d=!0,G(i).jqGrid("editCell",t,l,!0,o)):(d=!1,0<i.p.savedRow.length&&G(i).jqGrid("saveCell",t,r))}),d},GridNav:function(){return this.each(function(){var e,i,l,s=this;function t(e,i,l){var t,r,o,d;"v"===l.substr(0,1)&&(t=G(s.grid.bDiv)[0].clientHeight,d=G(s.grid.bDiv)[0].scrollTop,r=s.rows[e].offsetTop+s.rows[e].clientHeight,o=s.rows[e].offsetTop,"vd"===l&&t<=r&&(G(s.grid.bDiv)[0].scrollTop=G(s.grid.bDiv)[0].scrollTop+s.rows[e].clientHeight),"vu"===l)&&o<d&&(G(s.grid.bDiv)[0].scrollTop=G(s.grid.bDiv)[0].scrollTop-s.rows[e].clientHeight),"h"===l&&(t=G(s.grid.bDiv)[0].clientWidth,r=G(s.grid.bDiv)[0].scrollLeft,o=s.rows[e].cells[i].offsetLeft+s.rows[e].cells[i].clientWidth,d=s.rows[e].cells[i].offsetLeft,o>=t+parseInt(r,10)?G(s.grid.bDiv)[0].scrollLeft=G(s.grid.bDiv)[0].scrollLeft+s.rows[e].cells[i].clientWidth:d<r&&(G(s.grid.bDiv)[0].scrollLeft=G(s.grid.bDiv)[0].scrollLeft-s.rows[e].cells[i].clientWidth))}function r(e,i){var l,t;if("lft"===i)for(l=e+1,t=e;0<=t;t--)if(!0!==s.p.colModel[t].hidden){l=t;break}if("rgt"===i)for(l=e-1,t=e;t<s.p.colModel.length;t++)if(!0!==s.p.colModel[t].hidden){l=t;break}return l}s.grid&&!0===s.p.cellEdit&&(s.p.knv=s.p.id+"_kn",e=G("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+s.p.knv+"'></div></div>"),G(e).insertBefore(s.grid.cDiv),G("#"+s.p.knv).focus().keydown(function(e){switch(l=e.keyCode,"rtl"===s.p.direction&&(37===l?l=39:39===l&&(l=37)),l){case 38:0<s.p.iRow-1&&(t(s.p.iRow-1,s.p.iCol,"vu"),G(s).jqGrid("editCell",s.p.iRow-1,s.p.iCol,!1,e));break;case 40:s.p.iRow+1<=s.rows.length-1&&(t(s.p.iRow+1,s.p.iCol,"vd"),G(s).jqGrid("editCell",s.p.iRow+1,s.p.iCol,!1,e));break;case 37:0<=s.p.iCol-1&&(i=r(s.p.iCol-1,"lft"),t(s.p.iRow,i,"h"),G(s).jqGrid("editCell",s.p.iRow,i,!1,e));break;case 39:s.p.iCol+1<=s.p.colModel.length-1&&(i=r(s.p.iCol+1,"rgt"),t(s.p.iRow,i,"h"),G(s).jqGrid("editCell",s.p.iRow,i,!1,e));break;case 13:0<=parseInt(s.p.iCol,10)&&0<=parseInt(s.p.iRow,10)&&G(s).jqGrid("editCell",s.p.iRow,s.p.iCol,!0,e);break;default:return!0}return!1}))})},getChangedCells:function(o){var e=[];return o=o||"all",this.each(function(){var t,r=this;r.grid&&!0===r.p.cellEdit&&G(r.rows).each(function(i){var l={};G(this).hasClass("edited")&&(G("td",this).each(function(e){if("cb"!==(t=r.p.colModel[e].name)&&"subgrid"!==t&&"sc"!==t)if("dirty"===o){if(G(this).hasClass("dirty-cell"))try{l[t]=G.unformat.call(r,this,{rowId:r.rows[i].id,colModel:r.p.colModel[e]},e)}catch(e){l[t]=G.jgrid.htmlDecode(G(this).html())}}else try{l[t]=G.unformat.call(r,this,{rowId:r.rows[i].id,colModel:r.p.colModel[e]},e)}catch(e){l[t]=G.jgrid.htmlDecode(G(this).html())}}),l.id=this.id,e.push(l))})}),e}})});