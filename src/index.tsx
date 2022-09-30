import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { get } from 'enmity/api/settings'
import Settings from './components/Settings';

const Patcher = create('testing-settings');

const Testing: Plugin = {
   ...manifest,

   onStart() {
      setInterval(() => {
         // this part is in an inverval which means it will run continously, put this in your ***MAIN PATCH***
         let customText = get('Testing', "urlPrefix", "") // plugin name, the value name, the default value
         console.log(customText) // logs the text
      }, 3000)
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />; // opens settings menu
   }
};

registerPlugin(Testing);
