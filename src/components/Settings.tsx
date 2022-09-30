import { FormInput } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import { get, set } from 'enmity/api/settings'

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <>
      <FormInput
         value={get("Testing", "urlPrefix", "")}
         onChange={v => set("Testing", "urlPrefix", v)}
         title='Custom URL Prefix'
      />
   </>
};