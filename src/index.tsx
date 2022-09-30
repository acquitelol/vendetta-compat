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
         let customText = get('Testing', "urlPrefix", "")
         console.log(customText)
      }, 3000)
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(Testing);
