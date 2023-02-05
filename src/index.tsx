import { reload } from 'enmity/api/native';
import { get, set } from 'enmity/api/settings';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { Dialog, React } from 'enmity/metro/common';
import Manifest from '../manifest.json'
import locale from './common/locale';
import Settings from './components/Settings';

const VendettaCompat: Plugin = {
   ...Manifest,

   async onStart() {
      // gedetta whethedetta vendetta isdetta strangedetta textdetta
      const isStrange = (get(Manifest.name, 'strangeCode', 0) as number) ?? 0

      // shodetta succedetta diadetta
      const showSuccessDialog = () => {
         if (!get(Manifest.name, "shownEnabledDialog", false)) {
            Dialog.show({
               title: locale.dialogs.enabled.title[isStrange],
               body: locale.dialogs.enabled.description[isStrange],
               confirmText: locale.dialogs.enabled.okayText[isStrange],
               onConfirm: () => set(Manifest.name, "shownEnabledDialog", true)
            })
         }
      }

      // basedetta urldetta odetta vendetta
      const url = "https://raw.githubusercontent.com/vendetta-mod/builds/master/vendetta.js"

      // gedetta thedetta vendetta codetta asdetta textdetta
      const res = await fetch(url)
      const vendettaCode = res.ok 
         ? await res.text() 
         : get(Manifest.name, "vendettaCode", null)

      // sedetta thedetta codetta fordetta nextdetta tidetta
      set(Manifest.name, "vendettaCode", vendettaCode)

      // evaldetta thedetta codetta
      eval(vendettaCode as string)

      // shodetta successdetta dialogdetta
      showSuccessDialog()
   },

   // y̶o̶u̶d̶e̶t̶t̶a̶ ̶w̶i̶d̶e̶t̶t̶a̶ ̶n̶e̶v̶e̶r̶d̶e̶t̶t̶a̶ ̶g̶e̶d̶e̶t̶t̶a̶ ̶r̶i̶d̶e̶t̶t̶a̶ ̶o̶d̶e̶t̶t̶a̶ ̶v̶e̶n̶d̶e̶t̶t̶a̶ youdetta cadetta nowdetta gedetta ridetta odetta vendetta
   onStop() {
      // gedetta whethedetta vendetta isdetta strangedetta textdetta
      const isStrange = get(Manifest.name, 'strangeCode', 0) as number

      // @ts-ignore attemptdetta todetta pudetta @arg window.vendetta todetta @arg vendetta
      const vendetta = window.vendetta
     
      if (vendetta) {
         try {
            // unloadetta vendetta
            vendetta?.unload();

            // askdetta todetta reloadetta
            Dialog.show({
               title: locale.dialogs.unload.title[isStrange],
               body: locale.dialogs.unload.description[isStrange],
               confirmText: locale.dialogs.unload.okayText[isStrange],
               cancelText: locale.dialogs.unload.cancelText[isStrange],
               onConfirm: () => reload()
            })
         } catch(e) {
            // lodetta errodetta todetta consodetta
            console.error(`[${Manifest.name}] ${locale.errors.unload[isStrange]}: ${e}`)
         }
      }
   },

   getSettingsPanel() {
      return <Settings Manifest={Manifest} />
   }
};

registerPlugin(VendettaCompat);
