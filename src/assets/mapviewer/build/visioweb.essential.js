/* Visioglobe SDK - Copyright 2019 - VisioWeb unknown revision */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).VisioWebEssential=t()}(this,function(){"use strict";class e{constructor(e){this._essential=e,this._highlightedPlace=null,this._placeBubble=null,this.categories={},this.places={},this.activePlace=null,this.placeBubbleId="bubble",this.placeBubbleEnabled=!1}get activePlaceID(){return this.activePlace?this.activePlace.vg&&this.activePlace.vg.poi?this.activePlace.options("id"):this.activePlace.vg.id:""}_init(){const e=this._essential._mapviewer.getExtraData();if(e&&void 0!==e.resources){let t=visioweb.Utils.getLanguageMatch(this._essential._parameters.locale.language,Object.keys(e.resources));if(void 0!==e.resources[t]){const i=this._essential._parameters.baseURL+this._essential._parameters.hash;let a=e.resources[t].localized.locale[t].categories;void 0!==a?Object.keys(a).forEach(e=>{let t=a[e];t.id=e,t.nbPlaces=0,t.icon=i+"/icons/"+t.icon}):a={},this.categories=a;const s=e.resources[t].localized.locale[t].places;let o={};void 0!==s&&Object.keys(s).forEach(e=>{const t=s[e],a=this._essential._mapviewer.getPlace(e),n=this._essential._mapviewer.getPOI(e);if(!1!==a||void 0!==n&&n.length){o[e]={id:e,name:t.name,categories:t.categories||[],floor:a?a.vg.floor:n[0].options("floor"),description:t.description},t.icon&&(o[e].icon=i+"/icons/"+t.icon),t.categories&&t.categories.forEach(e=>{void 0!==this.categories[e]&&this.categories[e].nbPlaces++});const s=Object.assign({id:e,text:t.name},this._essential._parameters.setPlaceNameOptions);if(a)this._essential._mapviewer.setPlaceName(e,s);else if(void 0!==t.name&&""!==t.name)for(var r=0;r<n.length;r++){const e=n[r].options();0==e.image&&null==e.model&&n[r].options({text:t.name})}}else{const a=this._essential._mapviewer.getFootprint(e),s=this._essential._mapviewer.getPOF(e);(a||s)&&(o[e]={id:e,name:t.name,categories:t.categories||[],floor:a?a.floor:s.floor,description:t.description},t.icon&&(o[e].icon=i+"/icons/"+t.icon),t.categories&&t.categories.forEach(e=>{void 0!==this.categories[e]&&this.categories[e].nbPlaces++}))}}),this.places=o}}}_reset(){this.places={},this.categories={},this.activePlace=null,this._highlightedPlace=null,this._placeBubble=null}createCategory({id:e,name:t,icon:i,updateFunction:a}){if(void 0===e||void 0===t)throw"expecting {id, name[, icon]}";void 0!==a?a(this.categories,e,{id:e,name:t,icon:i,nbPlaces:0}):this.categories[e]={id:e,name:t,icon:i,nbPlaces:0}}addPlaceCategory({id:e,categoryID:t,updateFunction:i}){if(void 0===e||void 0===t)throw"expecting {id, categoryID}";if(!this.places[e])throw"place "+e+" does not exist.";if(!this.categories[t])throw"category "+t+" does not exist.";let a=Object.assign({},this.places[e]);if(-1===a.categories.indexOf(t))if(a.categories.push(t),void 0!==i){let e=Object.assign({},this.categories[t]);e.nbPlaces++,i(this.categories,t,e)}else this.categories[t].nbPlaces++;void 0!==i?i(this.places,e,a):this.places[e]=a}setPlaceContent({id:e,name:t,categories:i,floor:a,description:s,updateFunction:o}){if(void 0===e||void 0===t)throw"expecting {id, name[, categories, floor, description]}";const n=this._essential._mapviewer.getPlace(e),r=this._essential._mapviewer.getPOI(e);if(!(!1!==n||void 0!==r&&r.length))throw"could not add content for place "+e+", it does not exist in the map.";{const l={name:t,categories:i||[],floor:a||(n?n.vg.floor:r[0].options("floor")),description:s};void 0!==o?o(this.places,e,l):this.places[e]=l;const c=Object.assign({id:e,text:t},this._essential._parameters.setPlaceNameOptions);!1!==n?this._essential._mapviewer.setPlaceName(e,c):r.forEach(e=>e.options(c))}}createPlace({parameters:e,updateFunction:t}){if(void 0===e.position)throw"expecting {parameters: {position: {lat, lon[, height]}[, floor, id, ...]}}";let i=this._essential._mapviewer.convertLatLonToPoint(e.position);if(e.position.height&&(i.z=e.position.height),e.position=i,e.id){let i={id:e.id,categories:[]};e.text&&(i.name=e.text),e.url&&(i.icon=e.url),e.floor&&(i.floor=e.floor),void 0!==t?t(this.places,e.id,i):this.places[e.id]=i}e.text&&(e=Object.assign(e,this._essential._parameters.setPlaceNameOptions));const a=this._essential._mapviewer.addPOI(e);if(null!==a){const e=a.options("position");return{id:a.options("id"),floor:a.options("floor"),position:Object.assign(this._essential._mapviewer.convertPointToLatLon(e),{height:e.z})}}throw"could not create place"}getPlace({id:e}){if(void 0===e)throw"expecting {id}";let t={id:e};const i=this.places[e];i&&(t.name=i.name,t.categories=i.categories,t.description=i.description);const a=this._essential._mapviewer.getPlace(e);if(a)t.floor=a.vg.floor,t.position=this._essential._mapviewer.convertPointToLatLon(a.vg.position),t.position.height=a.vg.position.z;else{const i=this._essential._mapviewer.getPOI(e);if(!(i&&i.length>0))throw"unknown place id.";{t.floor=i[0].options("floor");const e=i[0].options("position");t.position=this._essential._mapviewer.convertPointToLatLon(e),t.position.height=e.z}}return t}getCategory({id:e}){if(void 0===e)throw"expecting {id}";if(!this.categories[e])throw"unknown category id.";return this.categories[e]}setActivePlace({place:e}){if(void 0===e)throw"expecting {place}";if("string"==typeof e){const t=e;if(!(e=this._essential._mapviewer.getPlace(t))){const i=this._essential._mapviewer.getPOI(t);i&&i.length>0&&(e=i[0])}if(!e){const e=this._essential._mapviewer.getFootprint(t),a=this._essential._mapviewer.getFootprintPoints(t);if(!a)throw"place not found";if(this.activePlace={vg:{id:t}},this.placeBubbleEnabled){const s={x:0,y:0};return a.forEach(e=>{s.x+=e.x,s.y+=e.y}),s.x/=a.length,s.y/=a.length,(i=this._essential._mapviewer.getPOF(t))&&(s.x=i.x,s.y=i.y),this._placeBubble=this._essential._mapviewer.addPOI({selector:"#"+this.placeBubbleId,floor:e.floor,position:s,alignment:{x:0,y:1.5}}),this._essential.venue.goToPlace({id:t,radius:this._essential._mapviewer.camera.position.radius,heading:this._essential._mapviewer.camera.heading})}}}if(e&&e.vg&&e.vg.poi){let a=this._essential._mapviewer.getPlace(e.options?e.options("id"):e.vg.id);if(a)e=a;else if(this.resetActivePlace(),this.activePlace=e,this.placeBubbleEnabled){var t=e.options("position");return(i=this._essential._mapviewer.getPOF(e.options?e.options("id"):e.vg.id))&&(t.x=i.x,t.y=i.y),this._placeBubble=this._essential._mapviewer.addPOI({selector:"#"+this.placeBubbleId,floor:e.options("floor"),position:t,alignment:{x:0,y:1.5}}),this._essential.venue.goToPlace({id:e.options("id"),radius:this._essential._mapviewer.camera.position.radius,heading:this._essential._mapviewer.camera.heading})}}if(e&&e.vg&&!e.vg.poi&&e!==this.activePlace&&(this.resetActivePlace(),this.activePlace=e,this._highlightedPlace=this._highlightedPlace!==e?this._highlightedPlace:null,this._essential._mapviewer.setPlaceColor(e,this._essential._parameters.mapview.colors.active),this.placeBubbleEnabled)){var i;t=e.vg.position;return(i=this._essential._mapviewer.getPOF(e.vg.id))&&(t.x=i.x,t.y=i.y),this._placeBubble=this._essential._mapviewer.addPOI({selector:"#bubble",floor:e.vg.floor,position:t,alignment:{x:0,y:1.5}}),this._essential.venue.goToPlace({id:e.vg.id,radius:this._essential._mapviewer.camera.position.radius,heading:this._essential._mapviewer.camera.heading})}}setHighlightedPlace({place:e}){var t=e;if(void 0===e)throw"expecting {place}";if(!(e.vg&&e.vg.poi&&(void 0===(e=e.options&&this._essential._mapviewer.getPlace(e.options("id")))&&(e=this._essential._mapviewer.getPlace(t.vg.id)),!1===e)||!1===e||e instanceof Array||e===this._highlightedPlace||e===this.activePlace)){if("string"==typeof e&&(e=this._essential._mapviewer.getPlace(e)),void 0!==e&&e!==this.activePlace){this.resetHighlightedPlace();var i=this._essential._parameters.mapview.colors.highlight;null!=i&&""!==i||(i=void 0===e.vg.originalColor||null===e.vg.originalColor?"":"_INVERTED_"),this._essential._mapviewer.setPlaceColor(e,i)}this._highlightedPlace=e}}setPlaceColor({id:e,color:t}){if(void 0===e||void 0===t)throw"expecting {id, color}";if(!this._essential._mapviewer.setPlaceColor(this._essential._mapviewer.getPlace(e),t))throw"place not found."}setPlaceDescription({id:e,description:t,updateFunction:i}){if(void 0===e||void 0===t)throw"expecting {id, description}";if(void 0!==this.places[e])void 0!==i?i(this.places,e,Object.assign({},this.places[e],{description:t})):this.places[e]=Object.assign({},this.places[e],{description:t});else{const a=this._essential._mapviewer.getPlace(e),s=this._essential._mapviewer.getPOI(e);if(!(!1!==a||void 0!==s&&s.length))throw"place "+e+" not found.";{const o=a?this._essential._mapviewer.getPlace(e).vg.floor:s[0].options("floor");void 0!==i?i(this.places,e,{id:e,description:t,floor:o,categories:[]}):this.places[e]={id:e,description:t,floor:o,categories:[]}}}}setPlaceIcon({id:e,url:t,updateFunction:i}){if(void 0===e||void 0===t)throw"expecting {id, url}";const a=this._essential._mapviewer.getPlace(e),s=this._essential._mapviewer.getPOI(e);if(void 0!==this.places[e])void 0!==i?i(this.places,e,Object.assign({},this.places[e],{icon:t})):this.places[e]=Object.assign({},this.places[e],{icon:t});else{if(!(!1!==a||void 0!==s&&s.length))throw"place "+e+" not found.";{const o=a?this._essential._mapviewer.getPlace(e).vg.floor:s[0].options("floor");void 0!==i?i(this.places,e,{id:e,icon:t,floor:o,categories:[]}):this.places[e]={id:e,icon:t,floor:o,categories:[]}}}!1!==a?this._essential._mapviewer.setPlaceIcon(e,t):s.forEach(e=>e.options({url:t}))}setPlaceName({id:e,name:t,parameters:i,updateFunction:a}){if(void 0===e||void 0===t)throw"expecting {id, name[, parameters]}";const s=this._essential._mapviewer.getPlace(e),o=this._essential._mapviewer.getPOI(e);if(void 0!==this.places[e])void 0!==a?a(this.places,e,Object.assign({},this.places[e],{name:t})):this.places[e]=Object.assign({},this.places[e],{name:t});else{if(!(!1!==s||void 0!==o&&o.length))throw"place "+e+" not found.";{const i=s?this._essential._mapviewer.getPlace(e).vg.floor:o[0].options("floor");void 0!==a?a(this.places,e,{id:e,name:t,floor:i,categories:[]}):this.places[e]={id:e,name:t,floor:i,categories:[]}}}void 0===i&&(i={});const n=Object.assign({id:e,text:t},this._essential._parameters.setPlaceNameOptions,i);!1!==s?this._essential._mapviewer.setPlaceName(e,n):o.forEach(e=>e.options(n))}setPlacePosition({id:e,position:t}){if(void 0===e||void 0===t)throw"expecting {id, position}";const i=this._essential._mapviewer.getPOI(e);if(!(void 0!==i&&i.length>0)){throw this._essential._mapviewer.getPlace(e)?"Place is linked to a physical surface. Should be moved using VisioMapEditor.":"unknown place id."}{let e=this._essential._mapviewer.convertLatLonToPoint(t);e.z=t.height,i.forEach(t=>t.options("position",e))}}queryAllPlaceIDs(){const e=this._essential._mapviewer.getPlaces(),t=Object.keys(this._essential._mapviewer.getPOIs()).filter(t=>void 0===e[t]&&0!==t.indexOf("mapIcon")&&0!==t.indexOf("mapLabel")&&0!==t.indexOf("mapModel")&&0!==t.indexOf("VGROUTE-"));return[...Object.keys(e),...t]}queryAllCategoryIDs(){return Object.keys(this.categories)}removePlace({id:e}){if(void 0===e)throw"expecting {id}";if(this._essential._mapviewer.getPlace(e))throw"Place is linked to a physical surface. Should be edited using VisioMapEditor.";const t=this._essential._mapviewer.getPOI(e);if(!(void 0!==t&&t.length>0))throw"unknown place id.";t.forEach(e=>e.remove())}resetActivePlace(){null!==this.activePlace&&this.activePlace.vg&&!this.activePlace.vg.poi&&this._essential._mapviewer.resetPlaceColor(this.activePlace),null!==this._placeBubble&&(this._placeBubble.remove(),this._placeBubble=null),this.activePlace=null}resetHighlightedPlace(){null!==this._highlightedPlace&&(this._essential._mapviewer.resetPlaceColor(this._highlightedPlace),this._highlightedPlace=null)}resetPlaceColor({id:e}){if(void 0===e)throw"expecting {id}";if(!this._essential._mapviewer.resetPlaceColor(this._essential._mapviewer.getPlace(e)))throw"place not found."}}class t{constructor(e){this._essential=e,this._currentNavigation=null,this.currentInstructionIndex=0,this.translator=null,this.languageCode="default"}_init(){this._essential._mapviewer.setupNavigationTranslator(this._essential.content.places),this.translator=this._essential._mapviewer.navigationTranslator,this.languageCode=visioweb.Utils.getLanguageMatch(this._essential._parameters.locale.language,this.translator.getLanguageCodes())}_create({currentNavigation:e,rawData:t}){this._currentNavigation=e,this.translator.translateInstructions(t,this.languageCode),this.currentInstructionIndex=0,this._essential._mapviewer.trigger("navigationComputed")}_reset(){this._clear(),this.translator=null,this.languageCode="default"}_clear(){this._currentNavigation=null}get isValid(){return null!==this._currentNavigation}get nbInstructions(){return this._currentNavigation?this._currentNavigation.getNbInstructions():0}getCurrentInstructionBrief(){if(this._currentNavigation){let e=this._currentNavigation.getInstructionData(this.currentInstructionIndex);if(e)return e.brief}return""}getCurrentInstructionDetail(){if(this._currentNavigation){let e=this._currentNavigation.getInstructionData(this.currentInstructionIndex);if(e)return e.detail}return""}getCurrentInstructionIcon(){if(this._currentNavigation){let e=this._currentNavigation.getInstructionData(this.currentInstructionIndex);if(e)return this._essential._imagePath+"/"+e.icon}return""}goToPreviousInstruction(){let e=!0,t=!1;1===arguments.length&&(arguments[0].withHeading&&(t=!0),arguments[0].animateCamera&&(e=!0));const i=this._currentNavigation.displayPrevInstruction(e,t);return this.currentInstructionIndex=this._currentNavigation.getCurrentInstructionIndex(),i}goToNextInstruction(){let e=!0,t=!1;1===arguments.length&&(arguments[0].withHeading&&(t=!0),arguments[0].animateCamera&&(e=!0));const i=this._currentNavigation.displayNextInstruction(e,t);return this.currentInstructionIndex=this._currentNavigation.getCurrentInstructionIndex(),i}setLanguageCode({languageCode:e}){if(void 0===e)throw"expecting {languageCode}";this.languageCode=visioweb.Utils.getLanguageMatch(e,this.translator.getLanguageCodes())}}const i="VGROUTE-floorChangeTags",a="\n    .VGROUTE-floorChange\n    {\n        width: 128px;\n        height: 64px;\n        background: transparent;\n    }\n    .VGROUTE-floorChange > p\n    {\n        font-family: Helvetica,Arial,sans-serif;\n        font-size: 15px;\n        color: #fff;\n        line-height: 64px;\n        left: 48px;\n        position: absolute;\n        width: 80px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-align: center;\n        text-overflow: ellipsis;\n        margin:0;\n    }\n    .VGROUTE-floorChange > div\n    {\n        width: 32px;\n        height: 32px;\n        left: 12px;\n        top:16px;\n        position: absolute;\n        clip: rect(0px, 32px, 32px, 0px);\n    }\n    .VGROUTE-floorChange > div > img.fcup\n    {\n        width: 32px;\n        height: 32px;\n        position: absolute;\n        -webkit-animation-name: floorChangeUp; /* Safari 4.0 - 8.0 */\n        -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */\n        animation-name: floorChangeUp;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-in-out;\n    }\n    .VGROUTE-floorChange > div > img.fcdown\n    {\n        width: 32px;\n        height: 32px;\n        position: absolute;\n        -webkit-animation-name: floorChangeDown; /* Safari 4.0 - 8.0 */\n        -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */\n        animation-name: floorChangeDown;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-in-out;\n    }\n\n    /* Safari 4.0 - 8.0 */\n    @-webkit-keyframes floorChangeUp {\n        0%   {bottom:0px;opacity:1;}\n        25%   {bottom:0px;opacity:1;}\n        50% {bottom:32px;opacity:0;}\n        51% {bottom:-32px;opacity:0;}\n        75%   {bottom:0px;opacity:1;}\n        100% {bottom:0px;opacity:1;}\n    }\n    \n    /* Standard syntax */\n    @keyframes floorChangeUp {\n        0%   {bottom:0px;opacity:1;}\n        25%   {bottom:0px;opacity:1;}\n        50% {bottom:32px;opacity:0;}\n        51% {bottom:-32px;opacity:0;}\n        75%   {bottom:0px;opacity:1;}\n        100% {bottom:0px;opacity:1;}\n    }\n\n    /* Safari 4.0 - 8.0 */\n    @-webkit-keyframes floorChangeDown {\n        0%   {bottom:0px;opacity:1;}\n        25%   {bottom:0px;opacity:1;}\n        50% {bottom:-32px;opacity:0;}\n        51% {bottom:32px;opacity:0;}\n        75%   {bottom:0px;opacity:1;}\n        100% {bottom:0px;opacity:1;}\n    }\n    \n    /* Standard syntax */\n    @keyframes floorChangeDown {\n        0%   {bottom:0px;opacity:1;}\n        25%   {bottom:0px;opacity:1;}\n        50% {bottom:-32px;opacity:0;}\n        51% {bottom:32px;opacity:0;}\n        75%   {bottom:0px;opacity:1;}\n        100% {bottom:0px;opacity:1;}\n    }\n";class s{constructor(e){this._essential=e,this._from=null,this._waypoints=[],this._to=null,this._currentRoute=null,this._destinationOrder="optimalFinishOnLast",this.accessible=!1,this.computeNavigation=!0;let t=document.createElement("div");t.id=i,document.body.appendChild(t);let s=document.createElement("style");s.innerHTML=a,document.head.appendChild(s)}get isValid(){return null!==this._currentRoute}setFrom({from:e}){if(void 0===e)throw"expecting {from}";const t=this._waypoints.indexOf(e);if(-1!==t&&(this._waypoints=this._waypoints.splice(t,1)),this._to===e)throw"Already set as destination";if(this._from=e,null!==this._to)return this._compute()}addWaypoint({waypoint:e}){if(void 0===e)throw"expecting {waypoint}";if(e!==this._from&&e!==this._to&&-1===this._waypoints.indexOf(e)&&(this._waypoints=[...this._waypoints,e],null!==this._from&&null!==this._to))return this._compute()}setTo({to:e}){if(void 0===e)throw"expecting {to}";const t=this._waypoints.indexOf(e);if(-1!==t&&(this._waypoints=this._waypoints.splice(t,1)),this._from===e)throw"Already set as start";if(this._to=e,this._from||this._essential.location)return this._compute()}hasFrom(){return null!==this._from}hasTo(){return null!==this._to}_compute(){if(""===this._from||""===this._to||this._from===this._to||!this._from&&!this._essential.location||!this._to)throw"start or destination not set";let e={};return e.src=this._from||this._essential.location,e.dst=[...this._waypoints,this._to],e.destinationOrder=this._destinationOrder,e.computeNavigation=this.computeNavigation,e.routingParameters=this._essential._parameters.computeRouteOptions.routingParameters,e.navigationParameters=this._essential._parameters.computeRouteOptions.navigationParameters,this.accessible&&(e.routingParameters.excludedAttributes=this._essential._parameters.computeRouteOptions.accessibleRoute.excludedAttributes,e.routingParameters.excludedModalities=this._essential._parameters.computeRouteOptions.accessibleRoute.excludedModalities),this._essential._mapviewer.computeRoute(e).then(e=>(this.clear(),this._create({route:e})))}_create({route:e}){if(e.data.status&&200!==e.data.status)throw this.clear(),"Sorry, no route available between "+e.request.src+" and "+e.request.dst+".";const t=this._essential._imagePath,a=Object.assign({imagePath:this._essential._imagePath,pathColor:{past:this._essential._parameters.mapview.colors.pathPast,current:this._essential._parameters.mapview.colors.pathCurrent,future:this._essential._parameters.mapview.colors.pathFuture},useLinks:"multifloor"===this._essential._parameters.mapview.config.viewtype,floorChangeTag:{innerHTML:function(e,i,a){return'                        <div id="'+e+'" class="VGROUTE-floorChange" style="background-image: url('+t+'/track_floor_change_tag.png);">                            <div>                                <img class="'+(a?"fcup":"fcdown")+'" src="'+(a?t+"/track_up.png":t+"/track_down.png")+'"/>                            </div>                            <p>'+i+"</p>                        </div>"},parent:i}},this._essential._parameters.initRouteOptions);let s=new visioweb.Route(this._essential._mapviewer,e.data,a);if(s.isValid())return s.show().then(()=>(this._essential.content.resetActivePlace(),this._currentRoute=s,this._essential._mapviewer.on("exploreStateWillChange",this._toggleLinks.bind(this)),void 0!==e.data.navigation&&this._essential.navigation._create({currentNavigation:s.navigation,rawData:e.data.navigation}),this._essential._mapviewer.multiBuildingView.goTo({mode:"floor",floorID:s.initialFloor,viewpoint:{position:s.getViewpointPosition("initialFloor")}})));throw this.clear(),"Problems rendering the route between "+e.request.src+" and "+e.request.dst+"."}clear(){null!==this._currentRoute&&(this._currentRoute.remove(),this._essential.navigation._clear(),this._essential._mapviewer.off("exploreStateWillChange",this._toggleLinks.bind(this))),this._from=null,this._waypoints=[],this._to=null,this._currentRoute=null,this._destinationOrder="optimalFinishOnLast"}_toggleLinks(e){null!==this._currentRoute&&("floor"===e.args.target.mode?this._currentRoute.hideLinks():this._currentRoute.showLinks())}}class o{constructor(e){this._essential=e,this.layout=null,this.currentBuildingID="",this.currentFloorID="",this.currentExploreMode="global"}_init(){if(null!==this._essential._mapviewer.multiBuildingView&&(this.layout=Object.freeze(this._essential._mapviewer.multiBuildingView.getVenueLayout()),this.layout.buildings.length>0)){const e=this.layout.buildings[this.layout.defaultBuildingIndex],t=e.floors[e.defaultFloorIndex];this.currentBuildingID=e.id,this.currentFloorID=t.id,this._essential._mapviewer.on("exploreStateChanged",function(e){const t=e.args.current;this.currentBuildingID=t.buildingID,this.currentFloorID=t.floorID,this.currentExploreMode=t.mode}.bind(this))}}_reset(){this.layout=null,this.currentBuildingID="",this.currentFloorID="",this.currentExploreMode="global"}getLocalizedName({id:e}){if(void 0===e)throw"expecting {id}";return this._essential._mapviewer.multiBuildingView?this._essential._mapviewer.multiBuildingView.getLocalizedName(e):""}getFootprintPoints({id:e}){if(void 0===e)throw"expecting {id}";const t=this._essential._mapviewer.getFootprintPoints(e);if(!t)throw"footprint not found.";return t.map(e=>this._essential._mapviewer.convertPointToLatLon(e))}getPointOfFocus({id:e}){if(void 0===e)throw"expecting {id}";const t=this._essential._mapviewer.getPOF(e);if(!t)throw"point of focus not found.";return{id:t.id,floor:t.floor,heading:t.headingInDegrees,position:Object.assign(this._essential._mapviewer.convertPointToLatLon(t),{height:t.height})}}getViewpoint(e){if(0===arguments.length||void 0===e.points)return{position:this._essential._mapviewer.convertPointToLatLon(this._essential._mapviewer.camera.position),radius:this._essential._mapviewer.camera.position.radius,pitch:this._essential._mapviewer.camera.pitch,heading:this._essential._mapviewer.camera.heading};{const{points:t,padding:i,pitch:a,heading:s}=e;let o={};void 0!==i&&(o=Object.assign({},i)),void 0!==a&&(o.pitch=a),void 0!==s&&(o.heading=s),o.points=t.map(e=>this._essential._mapviewer.convertLatLonToPoint(e));const n=this._essential._mapviewer.getViewpointPosition(o);if(!n)throw"points are invalid, expected as {lat, lon} coordinates.";return{position:this._essential._mapviewer.convertPointToLatLon(n),radius:n.radius,pitch:void 0!==a?a:this._essential._mapviewer.camera.pitch,heading:void 0!==s?s:this._essential._mapviewer.camera.heading}}}goToGlobal(e){return 0===arguments.length||void 0===e.animationDuration?this._essential._mapviewer.multiBuildingView.goTo({mode:"global"}):this._essential._mapviewer.multiBuildingView.goTo({mode:"global",animationDuration:e.animationDuration})}goToBuilding(){let e=void 0,t=void 0;1===arguments.length&&(void 0!==arguments[0].id&&(e=arguments[0].id),void 0!==arguments[0].animationDuration&&(t=arguments[0].animationDuration)),void 0===e&&(e=this.layout.buildings[this.layout.defaultBuildingIndex].id);let i={mode:"building",buildingID:e,animationDuration:t};if("global"!==this.currentExploreMode){var a=this.layout.buildingByID[this.currentBuildingID].floorByID[this.currentFloorID];a.connectedFloors[e]&&(i.floorID=a.connectedFloors[e].floor)}switch(this.currentExploreMode){case"global":return this._essential._mapviewer.multiBuildingView.goTo(i);case"building":if(void 0!==e&&e!==this.currentBuildingID)return this._essential._mapviewer.multiBuildingView.goTo(i);throw"invalid request.";case"floor":return void 0!==e&&e!==this.currentBuildingID||(i.buildingID=this.currentBuildingID,i.floorID=this.currentFloorID),this._essential._mapviewer.multiBuildingView.goTo(i);default:throw"invalid mode requested."}}goToFloor(){let e=void 0,t=void 0;return 1===arguments.length&&(void 0!==arguments[0].id&&(e=arguments[0].id),void 0!==arguments[0].animationDuration&&(t=arguments[0].animationDuration)),void 0!==e?this._essential._mapviewer.cameraDrivenExplorer.isEnabled?this._essential._mapviewer.multiBuildingView.goTo({mode:"global"==this.currentExploreMode?"floor":this.currentExploreMode,floorID:e,noViewpoint:"floor"==this.currentExploreMode,animationDuration:t}):this._essential._mapviewer.multiBuildingView.goTo({mode:"global"==this.currentExploreMode?"building":this.currentExploreMode,floorID:e,noViewpoint:!0,animationDuration:t}):this._essential._mapviewer.multiBuildingView.goTo({mode:"floor",animationDuration:t})}goToPlace({id:e,radius:t,heading:i,pitch:a,animationDuration:s}){if(void 0===e)throw"expecting {id[, radius, heading, pitch, animationDuration]}";if(void 0===t&&void 0===i&&void 0===a)return this._essential._mapviewer.multiBuildingView.goTo({mode:"floor",place:e,animationDuration:s});const o=this._essential._mapviewer.getPOF(e);o&&void 0===i&&(i=o.headingInDegrees);const n=this._essential._mapviewer.getPlace(e);if(n){let o={viewpoint:{position:this._essential._mapviewer.getViewpointPosition({points:this._essential._mapviewer.getFootprintPoints(e),heading:i,pitch:a}),heading:i,pitch:a},animationDuration:s};return void 0!==t&&(o.viewpoint.position.radius=t),n.vg.floor===this._essential.venue.layoutGlobalLayerID?o.mode="global":(o.mode="floor",o.floorID=n.vg.floor),this._essential._mapviewer.multiBuildingView.goTo(o)}{const n=this._essential._mapviewer.getPOI(e);if(n&&n.length>0){let e={viewpoint:{position:Object.assign({},n[0].options("position"),{radius:void 0!==t?t:this._essential._mapviewer.camera.position.radius}),heading:i,pitch:a},animationDuration:s};const o=n[0].options("floor");return o===this._essential.venue.layoutGlobalLayerID?e.mode="global":(e.mode="floor",e.floorID=o),this._essential._mapviewer.multiBuildingView.goTo(e)}if(o){let n={viewpoint:{position:this._essential._mapviewer.getViewpointPosition({points:this._essential._mapviewer.getFootprintPoints(e),heading:i,pitch:a}),heading:i,pitch:a},animationDuration:s};return void 0!==t&&(n.viewpoint.position.radius=t),o.floor===this._essential.venue.layoutGlobalLayerID?n.mode="global":(n.mode="floor",n.floorID=o.floor),this._essential._mapviewer.multiBuildingView.goTo(n)}throw"unknown place: "+e}}goToViewpoint({position:e,radius:t,pitch:i,heading:a,floor:s,animationDuration:o}){if(void 0===e)throw"expecting {position: {lat, lon}, radius[, heading, pitch, floor, animationDuration]}";let n=this._essential._mapviewer.convertLatLonToPoint(e);return n.radius=t,this._essential._mapviewer.multiBuildingView.goTo({viewpoint:{position:n,pitch:i,heading:a},floorID:s,animationDuration:o})}}function n(){let e={};for(var t=function(t){for(var i in t)t.hasOwnProperty(i)&&("[object Object]"===Object.prototype.toString.call(t[i])?e[i]=n(e[i],t[i]):"[object Array]"===Object.prototype.toString.call(t[i])&&"[object Array]"===Object.prototype.toString.call(e[i])?e[i]=e[i].concat(t[i].filter(t=>e[i].indexOf(t)<0)):e[i]=t[i])},i=0;i<arguments.length;++i)t(arguments[i]);return e}const r={baseURL:"https://mapserver.visioglobe.com/",hash:"kd9426d8cb3f1c532f22b5bcbd325c280bd351feb",location:{id:"",lat:0,lon:0},locale:{language:"default",route:{start:"start",waypoint:"waypoint",destination:"destination",previous:"previous",next:"next",clear:"clear route"},search:{placeholder:"Search...",categories:"categories",places:"places",place:"place",noresult:"No item found"}},mapview:{colors:{pathPast:"#d7d8d9",pathCurrent:"#00c5eb",pathFuture:"#0099ae",active:"#00ff00",highlight:""},config:{cameratype:"perspective",viewtype:"multibuilding",animationtype:"translation"},events:{enableMouseover:!0,listenTo:[]},statistics:{enabled:!1,logLocation:!1,logCamera:!1,logInterest:!1,protocol:"https",host:"s.visioglobe.com"}},optimizations:{batchTexts:{enabled:!0,padding:2,atlasSize:1024,delayCanvasCreation:!1},batchIcons:{enabled:!0,padding:2,atlasSize:1024,delayCanvasCreation:!0},unloadDelay:2e3},setPlaceNameOptions:{textTextureHeight:64,multiline:!0},computeRouteOptions:{accessibleRoute:{excludedAttributes:["stairway","escalator"],excludedModalities:[]},routingParameters:{},navigationParameters:{}},initRouteOptions:{pathWidth:2,pathHeight:1,pathSegments:-.5,pathQuality:.8,arrowWidth:5}},l=["on","once","off","animateValue"];class c{constructor({element:i,imagePath:a}){if(void 0===visioweb)throw"missing visioweb lib.";this._element=i,this._imagePath=a||"./",this._parameters=n({},r),this._ignoreCache=!1,this._mapviewer=null,this.venue=new o(this),this.content=new e(this),this.route=new s(this),this.navigation=new t(this)}static get defaultParameters(){return n({},r)}static get version(){return"1.12.5"}get parameters(){return n({},this._parameters)}get location(){return this._parameters.location.id&&""!==this._parameters.location.id?this._parameters.location.id:0!==this._parameters.location.lat&&0!==this._parameters.location.lon&&{lat:this._parameters.location.lat,lon:this._parameters.location.lon}}setParameters({parameters:e}){if(void 0===e)throw"expecting {parameters}";this._parameters=n(this._parameters,e)}createMapviewer(){if(!this._element)throw"container element is not set.";if(null!==this._mapviewer)return this.destroyMapviewer().then(()=>this.createMapviewer());if(this._mapviewer=Object.seal(new visioweb.Mapviewer),this._mapviewer.version!==c.version)throw"VisioWeb ("+this._mapviewer.version+") and VisioWeb Essential ("+c.version+") versions are different.\n Please use the same version for both libs.";l.forEach(e=>(function(e,t){e[t]=function(){return e._mapviewer[t].apply(e._mapviewer,arguments)}})(this,e)),-1==navigator.platform.indexOf("iPhone")&&-1==navigator.platform.indexOf("iPad")&&-1==navigator.platform.indexOf("iPod")||(this._preventDefaultCallback=(e=>e.preventDefault()),this._element.addEventListener("gesturestart",this._preventDefaultCallback,!1),this._element.addEventListener("gesturechange",this._preventDefaultCallback,!1),this._element.addEventListener("gestureend",this._preventDefaultCallback,!1),this._element.addEventListener("touchmove",this._preventDefaultCallback,!1)),!0===this._parameters.hash&&(this._parameters.hash="");let e=this._parameters.baseURL+this._parameters.hash+"/descriptor.json";if(this._ignoreCache){const t=new Date,i=t.getFullYear(),a=t.getMonth()+1,s=t.getDate(),o=""+i+(a<10?"0"+a:a)+(s<10?"0"+s:s)+"235959";e=this._parameters.baseURL+this._parameters.hash+"/map.json?"+o}let t={path:e,cameraType:this._parameters.mapview.config.cameratype,onObjectMouseUp:(e,t)=>this.onObjectMouseUp({event:e,targetElement:t}),progressHandler:this.onLoadProgress,optimizations:this._parameters.optimizations,mapContentString:this._parameters.mapContentString,mapContentDirectory:this._parameters.mapContentDirectory};return this._parameters.mapview.events.enableMouseover&&(t.onObjectMouseOver=((e,t)=>this.onObjectMouseOver({event:e,targetElement:t})),t.onObjectMouseOut=((e,t)=>this.onObjectMouseOut({event:e,targetElement:t}))),this._mapviewer.load(t).then(()=>this._mapviewer.setupView(this._element)).then(()=>{this._mapviewer.start();const e=parseInt(getComputedStyle(this._element).width,10),t=parseInt(getComputedStyle(this._element).height,10);this._mapviewer.resize(e,t),window.addEventListener("resize",this._onResize.bind(this)),this._mapviewer.setupMultiBuildingView({container:this._element,viewType:this._parameters.mapview.config.viewtype,animationType:this._parameters.mapview.config.animationtype,imagePath:this._imagePath,stackGap:"multifloor"===this._parameters.mapview.config.viewtype?10:0}),"multifloor"===this._parameters.mapview.config.viewtype&&(this._mapviewer.multiBuildingView.buildingModeEnabled=!0);const i=this._mapviewer.getExtraData();if(i&&i.app_params){if(i.app_params.exploreParams&&i.app_params.exploreParams.pitch){const e=i.app_params.exploreParams.pitch;this._mapviewer.camera.pitch=e,this._mapviewer.multiBuildingView.floorModePitch=e,this._mapviewer.multiBuildingView.globalModePitch=e}if(i.app_params._extra&&null!=i.app_params._extra.heading){const e=i.app_params._extra.heading;this._mapviewer.camera.heading=e,this._mapviewer.multiBuildingView.floorModeHeading=e,this._mapviewer.multiBuildingView.globalModeHeading=e}if(i.app_params.cameraDrivenExplorer){const e=i.app_params.cameraDrivenExplorer;this._mapviewer.cameraDrivenExplorer.setEnabled(!!e.enabled),void 0!==e.distanceThreshold&&(this._mapviewer.cameraDrivenExplorer.maxExploreDistance=e.distanceThreshold)}else this._mapviewer.cameraDrivenExplorer.setEnabled(!0);if(i.app_params.statisticsParams){const e=i.app_params.statisticsParams;this._parameters.mapview.statistics.enabled=!!e.enabled,this._parameters.mapview.statistics.logLocation=!!e.logLocation,this._parameters.mapview.statistics.logCamera=!!e.logCamera,this._parameters.mapview.statistics.logInterest=!!e.logInterest}if(i.app_params.routingParams){const e=i.app_params.routingParams;this._parameters.computeRouteOptions.accessibleRoute.excludedAttributes=e.accessibleRouteAttributes,this._parameters.computeRouteOptions.accessibleRoute.excludedModalities=e.accessibleRouteModalities}}this.venue._init(),this.content._init(),this.navigation._init(),this._mapviewer.on("exploreStateWillChange",e=>{const t=e.args.target;requestAnimationFrame(()=>{void 0!==t.mode&&t.mode!==this.currentExploreMode&&(this.currentExploreMode=t.mode,this.content.resetActivePlace()),void 0!==t.buildingID&&t.buildingID!==this.currentBuildingID&&(this.currentBuildingID=t.buildingID,this.content.resetActivePlace()),void 0!==t.floorID&&t.floorID!==this.currentFloorID&&(this.currentFloorID=t.floorID,this.content.resetActivePlace())})}),"function"==typeof sendToMobileApp&&this._mapviewer.on("mouseup",sendToMobileApp),this._parameters.mapview.statistics.enabled&&(this._mapviewer.setLogStatistic(!0),this._mapviewer.setLogStatisticURL(this._parameters.mapview.statistics.protocol+"://"+this._parameters.mapview.statistics.host+"/stats/SDKStatLogger.php"),this._mapviewer.camera.track=this._parameters.mapview.statistics.logCamera);var a={mode:"global",buildingID:this._mapviewer.multiBuildingView.DEFAULT,animationDuration:0};return this._mapviewer.multiBuildingView.goTo(a)}).then(()=>{setTimeout(()=>{this._mapviewer.requestRedraw()},1e3)})}destroyMapviewer(){return-1==navigator.platform.indexOf("iPhone")&&-1==navigator.platform.indexOf("iPad")&&-1==navigator.platform.indexOf("iPod")||(this._element.removeEventListener("gesturestart",this._preventDefaultCallback),this._element.removeEventListener("gesturechange",this._preventDefaultCallback),this._element.removeEventListener("gestureend",this._preventDefaultCallback),this._element.removeEventListener("touchmove",this._preventDefaultCallback)),window.removeEventListener("resize",this._onResize.bind(this)),this._mapviewer.off("mouseup"),this._mapviewer.off("exploreStateWillChange"),this._mapviewer.off("exploreStateChanged"),this.content._reset(),this.navigation._reset(),this.route.clear(),this.venue._reset(),this._mapviewer.destroy().then(()=>this._mapviewer=null)}onObjectMouseUp({targetElement:e}){this.content.setActivePlace({place:e})}onObjectMouseOver({targetElement:e}){this.content.setHighlightedPlace({place:e})}onObjectMouseOut(){this.content.resetHighlightedPlace()}onLoadProgress(){}_onResize(){if(null!==this._element.offsetParent){const e=this._element.getBoundingClientRect();this._mapviewer.resize(e.width,e.height)}}}return c});