import { FormDivider, FormRow, FormSection, FormSwitch, FormText } from 'enmity/components';
import { Constants, React, StyleSheet, Toasts } from 'enmity/metro/common';
import { get, set } from 'enmity/api/settings'
import locale from '../common/locale';
import { getIDByName } from 'enmity/api/assets';
import { reload } from 'enmity/api/native';

export default ({ Manifest }) => {
    const [isStrange, setIsStrange] = React.useState(get(Manifest.name, 'strangeCode', 0));
    const styles = StyleSheet.createThemedStyleSheet({
        icon: {
            color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
        },
        info: {
            color: StyleSheet.ThemeColorMap.HEADER_PRIMARY,
            fontFamily: Constants.Fonts.DISPLAY_BOLD,
            textAlign: "center",
            fontSize: 14,
            marginTop: 10
        }
    })

    return <>
        <FormSection title={locale.settings.strangeWording.title[isStrange]}>
            <FormRow
                label={locale.settings.strangeWording.title[isStrange]}
                subLabel={locale.settings.strangeWording.description[isStrange]}
                leading={<FormRow.Icon style={styles.icon} source={getIDByName("ic_locale_24px")} />}
                trailing={<FormSwitch
                    value={get(Manifest.name, 'strangeCode', 0) == 0 ? true : false}
                    onValueChange={() => {
                        setIsStrange((previous: number) => previous == 0 ? 1 : 0)
                        set(Manifest.name, "strangeCode", get(Manifest.name, 'strangeCode', 0) == 0 ? 1 : 0)

                        Toasts.open({
                            content: locale.toasts.strangeText(get(Manifest.name, 'strangeCode', 0) == 0 ? "Enabled" : "Disabledetta")[isStrange],
                            source: locale.toasts.icons.success
                        })
                    }}
                />}
            />
        </FormSection>
        <FormDivider />
        <FormSection title={locale.settings.clearOptions.title[isStrange]}>
            <FormRow
                label={locale.settings.clearOptions.title[isStrange]}
                subLabel={locale.settings.clearOptions.description[isStrange]}
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('ic_message_delete')} />}
                trailing={() => <FormRow.Arrow />}
                onPress={() => {
                    set(Manifest.name, "shownEnabledDialog", false)
                    set(Manifest.name, "strangeCode", 0)
                    setIsStrange(0)

                    Toasts.open({
                        content: locale.toasts.clear[isStrange],
                        source: locale.toasts.icons.success
                    })
                }}
            />
        </FormSection>
        <FormDivider />
        <FormSection title={locale.settings.reload.title[isStrange]}>
            <FormRow
                label={locale.settings.reload.title[isStrange]}
                subLabel={locale.settings.reload.description[isStrange]}
                leading={<FormRow.Icon style={styles.icon} source={getIDByName('ic_message_retry')} />}
                trailing={() => <FormRow.Arrow />}
                onPress={() => reload()}
            />
        </FormSection>
        <FormDivider />
        <FormText style={styles.info}>{locale.settings.info()[isStrange]}</FormText>
    </>
};