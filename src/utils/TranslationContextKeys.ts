export type TranslationContextKeys = {
    "titles": {
        "header": string,
        "general": string,
        "login": string,
        "experience": string,
        "experience.create": string,
        "company": string,
        "company.create": string,
        "technology": string,
        "technology.create": string
    },
    "nav": {
        "general": string,
        "experience": string,
        "technology": string,
        "company": string
    },
    "buttons": {
        "login": string,
        "company.create": string,
        "experience.create": string,
        "experience.working.create": string,
        "experience.personal.create": string,
        "technology.create": string
    },
    "labels": {
        "company.name": string,
        "technology.name": string,
        "experience.filter.personal": string,
        "experience.filter.working": string,
        "experience.name": string,
        "experience.description": string,
        "experience.personal.link": string
    },
    "auth": {
        "started": string,
        "user": string,
        "password": string
    }
}
export function mapTranslationJson(json: any): TranslationContextKeys {
    return {
        titles: {
            header: json["titles"]["header"],
            general: json["titles"]["general"],
            login: json["titles"]["login"],
            experience: json["titles"]["experience"],
            "experience.create": json["titles"]["experience.create"],
            company: json["titles"]["company"],
            "company.create": json["titles"]["company.create"],
            technology: json["titles"]["technology"],
            "technology.create": json["titles"]["technology.create"]
        },
        nav: {
            general: json["nav"]["general"],
            experience: json["nav"]["experience"],
            technology: json["nav"]["technology"],
            company: json["nav"]["company"]
        },
        buttons: {
            login: json["buttons"]["login"],
            "company.create": json["buttons"]["company.create"],
            "experience.create": json["buttons"]["experience.create"],
            "experience.working.create": json["buttons"]["experience.working.create"],
            "experience.personal.create": json["buttons"]["experience.personal.create"],
            "technology.create": json["buttons"]["technology.create"]

        },
        labels: {
            "company.name": json["labels"]["company.name"],
            "technology.name": json["labels"]["technology.name"],
            "experience.filter.personal": json["labels"]["experience.filter.personal"],
            "experience.filter.working": json["labels"]["experience.filter.working"],
            "experience.name": json["labels"]["experience.name"],
            "experience.description": json["labels"]["experience.description"],
            "experience.personal.link": json["labels"]["experience.personal.link"]
        },
        auth: {
            started: json["auth"]["started"],
            user: json["auth"]["user"],
            password: json["auth"]["password"]
        }
    }
}