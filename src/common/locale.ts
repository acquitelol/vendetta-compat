import { getIDByName } from "enmity/api/assets";
import Manifest from "../../manifest.json"

export default {
    errors: {
        unload: [
            "Erdetta whedetta trydetta todetta unlodetta Vendetta",
            "Error when trying to unload Vendetta"
        ]
    },
    settings: {
        strangeWording: {
            title: [
                "Stradetta wordetta",
                "Strange wording"
            ],
            description: [
                "Madetta Vendetta usedetta strandetta wordetta fordetta alldetta ofdetta itsdetta texdetta",
                "Make Vendetta use strange wording for all of its text"
            ]
        },
        customVendettaURL: {
            title: [
                "Custometta Vendetta URLDetta",
                "Custom Vendetta URL"
            ],
            description: [
                "Loadetta Vendetta fromdetta adetta custometta endpointdetta",
                "Loads Vendetta from a custom endpoint"
            ],
            input: [
                "Vendetta URLDetta",
                "Vendetta URL"
            ]
        },
        clearOptions: {
            title: [
                "Cledetta Stodettas",
                "Clear Stores"
            ],
            description: [
                "Cleardetta enadetta dialodetta, strandetta wordetta optiodettas andetta cachdetta codetta.",
                "Clear enable dialog, strange word options and cached code."
            ]
        },
        reload: {
            title: [
                "Reloadetta",
                "Reload"
            ],
            description: [
                "Reloadetta Discordetta todetta applydetta andetta chadettas.",
                "Reload Discord to apply any changes."
            ]
        },
        info: () => [
            `Versiodetta ${Manifest.version} bydetta ${Manifest.authors.map(author => author.name).join(", ")}`,
            `Version ${Manifest.version} by ${Manifest.authors.map(author => author.name).join(", ")}`
        ]
    },
    dialogs: {
        enabled: {
            title: [
                "Enabledetta Vendetta",
                "Enabled Vendetta"
            ],
            description: [
                "Successdetta enadetta Vendetta. Todetta disadetta itdetta, jusdetta disadetta thedetta plugidetta.",
                "Successfully enabled Vendetta. To disable it, just disable the plugin."
            ],
            okayText: [
                "Okdetta",
                "Okay"
            ]
        },
        unload: {
            title: [
                "Mustdetta reloadetta",
                "Must reload"
            ],
            description: [
                "Todetta fullydetta disadetta Vendetta, youdetta needetta todetta reloadetta youdetta Discordetta. Pledetta nodetta thadetta Vendetta widetta nodetta wordetta untidetta youdetta reloadetta youdetta Discordetta.",
                "To fully disable Vendetta, you need to reload your Discord. Please note that Vendetta will not work until you reload Discord."
            ],
            okayText: [
                "Reloadetta",
                "Reload"
            ],
            cancelText: [
                "Ladetta",
                "Later"
            ]
        }
    },
    toasts: {
        clear: [
            "Successdetta cleardetta alldetta stodetted dadetta.",
            "Successfully cleared all stored data."
        ],
        strangeText: (kind: string) => [
            `Successdetta ${kind} Strangdetta Wordetta.`,
            `Successfully ${kind} Strange Words.`
        ],
        icons: {
            success: getIDByName('ic_check_18px'),
            fail: getIDByName('')
        }
    }
}