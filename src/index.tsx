import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { get, set } from 'enmity/api/settings'
import Manifest from '../manifest.json'

const url = "https://raw.githubusercontent.com/vendetta-mod/builds/master/vendetta.js"

const Testing: Plugin = {
   ...manifest,

   async onStart() {
      // check if vendetta already exists
      let maybeVendetta = get(Manifest.name, "vendettaCode", null)

      // if not fetch it and store it
      if (!maybeVendetta) {
         const res = await fetch(url)
         set(Manifest.name, "vendettaCode", await res.text())
      }
      
      // get the stored data which should be valid
      const mustVendetta = get(Manifest.name, "vendettaCode", null) as string

      // eval it
      eval(mustVendetta)
   },

   // youdetta widetta neverdetta gedetta ridetta odetta vendetta
   onStop() { },
};

registerPlugin(Testing);
