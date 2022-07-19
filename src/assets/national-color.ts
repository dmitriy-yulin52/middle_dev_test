export interface NationalColorData {
    color: string,
    inverted: boolean,
}

export interface NationalColor {
    [key: string]: NationalColorData,
}

export const POSSIBLE_COLOR = [
    "#9F1B69",
    "#E864B2",
    "#4461EC",
    "#51C453",
    "#33C5C9",
    "#F98C39",
    "#FA7F56",
    "#2B94FF",
];

export interface NationalAbb {
    [key: string]: string,
}

export const NATIONAL_ABB:NationalAbb = {
    "AU": "Australian",
    BR: "Brazilian",
    CA: "Canadian",
    CH: "Swiss",
    DE: "German",
    DK: "Danish",
    ES: "Spanish",
    FI: "Finnish",
    FR: "French",
    GB: "British",
    IE: "Irish",
    IR: "Iranian",
    NO: "Norwegian",
    NL: "Dutch",
    NZ: "Cantabrian",
    TR: "Turkish",
    US: "American",
};

export const NATIONAL_COLOR: NationalColor = {
    AU: {
        color: "#9F1B69",
        inverted: false,
    },
    BR: {
        color: "#E864B2",
        inverted: false,
    },
    CA: {
        color: "#4461EC",
        inverted: false,
    },
    CH: {
        color: "#51C453",
        inverted: false,
    },
    DE: {
        color: "#33C5C9",
        inverted: false,
    },
    DK: {
        color: "#F98C39",
        inverted: false,
    },
    ES: {
        color: "#FA7F56",
        inverted: false,
    },
    FI: {
        color: "#2B94FF",
        inverted: false,
    },
    FR: {
        color: "#9F1B69",
        inverted: true,
    },
    GB: {
        color: "#E864B2",
        inverted: true,
    },
    IE: {
        color: "#4461EC",
        inverted: true,
    },
    IR: {
        color: "#51C453",
        inverted: true,
    },
    NO: {
        color: "#33C5C9",
        inverted: true,
    },
    NL: {
        color: "#F98C39",
        inverted: true,
    },
    NZ: {
        color: "#FA7F56",
        inverted: true,
    },
    TR: {
        color: "#2B94FF",
        inverted: true,
    },
    US: {
        color: "#9F1B69",
        inverted: true,
    },
};