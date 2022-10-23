import { useEffect } from "react"
import ArticleTemplate from "./ArticleTemplate"

const bureau_content = {
    title: "Comment savoir si on a le droit de voter en 2022 ?",
    excerpt: "En France, plus de 5 millions de citoyens éligibles au vote ne sont pas inscrits. Sans inscription aux listes électorales de leur commune, ils ne sont pas en mesure de voter le jour d'élection.",
    sections: [
        {
            heading: "C'est quoi le droit de vote ?",
            paragraph: "En France, plusieurs conditions doivent être remplies avant de pouvoir participer aux élections démocratiques. Remplir toutes les conditions octroie le droit de vote au citoyen : il est autorisé à participer aux élections."
        },
        {
            heading: "Quels sont les critères d'éligibilité au droit de vote ?",
            paragraph: "Il existe trois critères : la majorité, la pleine jouissance des droits de vote, et la nationalité française.",
            call_to_action: {
                description: "Nous avons créé un outil pour vous aider à vérifier votre éligibilité en moins de 3 minutes.",
                link: "/verifier-eligibilite-inscription",
                label: "Je vérifie mon éligibilité au vote en France"
            }
        }
    ]
}

function ArticleEligibilite2022() {
    useEffect(() => { 
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <ArticleTemplate content={bureau_content} />
    )
}

export default ArticleEligibilite2022;