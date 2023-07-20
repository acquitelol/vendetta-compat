const{native}=window.enmity;function reload(){native.reload()}native.version,native.build,native.device,native.version;function set(e,t,o){window.enmity.settings.set(e,t,o)}function get(e,t,o){return window.enmity.settings.get(e,t,o)}function registerPlugin(e){window.enmity.plugins.registerPlugin(e)}const Constants=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const React=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const Toasts=window.enmity.modules.common.Toasts,Dialog=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const StyleSheet=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var name="VendettaCompat",version="1.0.1",description="vendetta hehe :3",authors=[{name:"Rosie<3",id:"581573474296791211"}],color="#FFFFFF",Manifest={name,version,description,authors,color};function getIDByName(e){return window.enmity.assets.getIDByName(e)}var locale={errors:{unload:["Erdetta whedetta trydetta todetta unlodetta Vendetta","Error when trying to unload Vendetta"]},settings:{strangeWording:{title:["Stradetta wordetta","Strange wording"],description:["Madetta Vendetta usedetta strandetta wordetta fordetta alldetta ofdetta itsdetta texdetta","Make Vendetta use strange wording for all of its text"]},customVendettaURL:{title:["Custometta Vendetta URLDetta","Custom Vendetta URL"],description:["Loadetta Vendetta fromdetta adetta custometta endpointdetta","Loads Vendetta from a custom endpoint"],input:["Vendetta URLDetta","Vendetta URL"]},clearOptions:{title:["Cledetta Stodettas","Clear Stores"],description:["Cleardetta enadetta dialodetta, strandetta wordetta optiodettas andetta cachdetta codetta.","Clear enable dialog, strange word options and cached code."]},reload:{title:["Reloadetta","Reload"],description:["Reloadetta Discordetta todetta applydetta andetta chadettas.","Reload Discord to apply any changes."]},info:()=>[`Versiodetta ${Manifest.version} bydetta ${Manifest.authors.map(e=>e.name).join(", ")}`,`Version ${Manifest.version} by ${Manifest.authors.map(e=>e.name).join(", ")}`]},dialogs:{enabled:{title:["Enabledetta Vendetta","Enabled Vendetta"],description:["Successdetta enadetta Vendetta. Todetta disadetta itdetta, jusdetta disadetta thedetta plugidetta.","Successfully enabled Vendetta. To disable it, just disable the plugin."],okayText:["Okdetta","Okay"]},unload:{title:["Mustdetta reloadetta","Must reload"],description:["Todetta fullydetta disadetta Vendetta, youdetta needetta todetta reloadetta youdetta Discordetta. Pledetta nodetta thadetta Vendetta widetta nodetta wordetta untidetta youdetta reloadetta youdetta Discordetta.","To fully disable Vendetta, you need to reload your Discord. Please note that Vendetta will not work until you reload Discord."],okayText:["Reloadetta","Reload"],cancelText:["Ladetta","Later"]}},toasts:{clear:["Successdetta cleardetta alldetta stodetted dadetta.","Successfully cleared all stored data."],strangeText:e=>[`Successdetta ${e} Strangdetta Wordetta.`,`Successfully ${e} Strange Words.`],icons:{success:getIDByName("ic_check_18px"),fail:getIDByName("")}}};const{components}=window.enmity;components.Alert,components.Button,components.FlatList,components.Image,components.ImageBackground,components.KeyboardAvoidingView,components.Modal,components.Pressable,components.RefreshControl,components.ScrollView,components.SectionList,components.StatusBar,components.StyleSheet,components.Switch,components.Text,components.TextInput,components.TouchableHighlight,components.TouchableOpacity,components.TouchableWithoutFeedback,components.Touchable,components.View,components.VirtualizedList,components.Form,components.FormArrow,components.FormCTA,components.FormCTAButton,components.FormCardSection,components.FormCheckbox;const FormDivider=components.FormDivider;components.FormHint,components.FormIcon;const FormInput=components.FormInput;components.FormLabel,components.FormRadio;const FormRow=components.FormRow,FormSection=components.FormSection;components.FormSelect,components.FormSubLabel;const FormSwitch=components.FormSwitch;components.FormTernaryCheckBox;const FormText=components.FormText;components.FormTextColors,components.FormTextSizes;var Settings=({Manifest:e})=>{const[t,o]=React.useState(get(e.name,"strangeCode",0)),[s,l]=React.useState(get(e.name,"customVendettaURL",{enabled:!1,url:"http://localhost:4040/vendetta.js"})),a=StyleSheet.createThemedStyleSheet({icon:{color:Constants.ThemeColorMap.INTERACTIVE_NORMAL},info:{color:StyleSheet.ThemeColorMap.HEADER_PRIMARY,fontFamily:Constants.Fonts.DISPLAY_BOLD,textAlign:"center",fontSize:14,marginTop:10}});return React.createElement(React.Fragment,null,React.createElement(FormSection,{title:locale.settings.strangeWording.title[t]},React.createElement(FormRow,{label:locale.settings.strangeWording.title[t],subLabel:locale.settings.strangeWording.description[t],leading:React.createElement(FormRow.Icon,{style:a.icon,source:getIDByName("ic_locale_24px")}),trailing:React.createElement(FormSwitch,{value:get(e.name,"strangeCode",0)==0,onValueChange:()=>{o(n=>n==0?1:0),set(e.name,"strangeCode",get(e.name,"strangeCode",0)==0?1:0),Toasts.open({content:locale.toasts.strangeText(get(e.name,"strangeCode",0)==0?"Enabled":"Disabledetta")[t],source:locale.toasts.icons.success})}})}),React.createElement(FormRow,{label:locale.settings.customVendettaURL.title[t],subLabel:locale.settings.customVendettaURL.description[t],leading:React.createElement(FormRow.Icon,{style:a.icon,source:getIDByName("ic_locale_24px")}),trailing:React.createElement(FormSwitch,{value:s.enabled,onValueChange:()=>l(n=>(set(e.name,"customVendettaURL",{enabled:!0,url:n.url}),{enabled:!0,url:n.url}))})}),s.enabled&&React.createElement(FormInput,{value:s.url,onChange:n=>l(i=>(set(e.name,"customVendettaURL",{enabled:i.enabled,url:n}),{enabled:i.enabled,url:n})),placeholder:"http://localhost:4040/vendetta.js",title:locale.settings.customVendettaURL.input[t]})),React.createElement(FormDivider,null),React.createElement(FormSection,{title:locale.settings.clearOptions.title[t]},React.createElement(FormRow,{label:locale.settings.clearOptions.title[t],subLabel:locale.settings.clearOptions.description[t],leading:React.createElement(FormRow.Icon,{style:a.icon,source:getIDByName("ic_message_delete")}),trailing:()=>React.createElement(FormRow.Arrow,null),onPress:()=>{set(e.name,"shownEnabledDialog",!1),set(e.name,"strangeCode",0),o(0),Toasts.open({content:locale.toasts.clear[t],source:locale.toasts.icons.success})}})),React.createElement(FormDivider,null),React.createElement(FormSection,{title:locale.settings.reload.title[t]},React.createElement(FormRow,{label:locale.settings.reload.title[t],subLabel:locale.settings.reload.description[t],leading:React.createElement(FormRow.Icon,{style:a.icon,source:getIDByName("ic_message_retry")}),trailing:()=>React.createElement(FormRow.Arrow,null),onPress:()=>reload()})),React.createElement(FormDivider,null),React.createElement(FormText,{style:a.info},locale.settings.info()[t]))};const VendettaCompat={...Manifest,async onStart(){var _a;const isStrange=(_a=get(Manifest.name,"strangeCode",0))!=null?_a:0,showSuccessDialog=()=>{get(Manifest.name,"shownEnabledDialog",!1)||Dialog.show({title:locale.dialogs.enabled.title[isStrange],body:locale.dialogs.enabled.description[isStrange],confirmText:locale.dialogs.enabled.okayText[isStrange],onConfirm:()=>set(Manifest.name,"shownEnabledDialog",!0)})},customVendettaURL=get(Manifest.name,"customVendettaURL"),url=(customVendettaURL==null?void 0:customVendettaURL.enabled)?customVendettaURL.url:"https://raw.githubusercontent.com/vendetta-mod/builds/master/vendetta.js",res=await fetch(url),vendettaCode=res.ok?await res.text():get(Manifest.name,"vendettaCode",null);set(Manifest.name,"vendettaCode",vendettaCode),eval(vendettaCode),showSuccessDialog()},onStop(){const e=get(Manifest.name,"strangeCode",0),t=window.vendetta;if(t)try{t==null||t.unload(),Dialog.show({title:locale.dialogs.unload.title[e],body:locale.dialogs.unload.description[e],confirmText:locale.dialogs.unload.okayText[e],cancelText:locale.dialogs.unload.cancelText[e],onConfirm:()=>reload()})}catch(o){console.error(`[${Manifest.name}] ${locale.errors.unload[e]}: ${o}`)}},getSettingsPanel(){return React.createElement(Settings,{Manifest})}};registerPlugin(VendettaCompat);
