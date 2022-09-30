import { FormInput } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import { get, set } from 'enmity/api/settings'

interface SettingsProps {
   settings: SettingsStore;
} // main settings interface

export default ({ settings }: SettingsProps) => {
   // returns jsx fragment
   return <>
      <FormInput
         value={get("Testing", "urlPrefix", "")} // the current value of the input
         onChange={v => set("Testing", "urlPrefix", v)} // sets the value to the new one
         placeholder={`Prefix`} // placeholder of the input
         title='Custom URL Prefix' // title of the input
      />
   </>
};