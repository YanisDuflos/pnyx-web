import { useEffect } from "react"
import ArticleTemplate from "./ArticleTemplate"

const bureau_content = {
    title: "Comment changer de bureau de vote en 2022 ?",
    excerpt: "En France, plus de 7,6 millions d'électeurs sont inscrits dans une commune différente de leur commune de domicile. Afin d'éviter le recours à la procuration ou aux longs déplacements, il est important de changer de bureau de vote pour un lieu plus accessible.",
    sections: [
        {
            heading: "C'est quoi un bureau de vote ?",
            paragraph: "Chaque citoyen électeur est assigné un bureau de vote. Les bureaux de vote sont des établissements officiels organisés par les territoires pour permettre aux citoyens d'exprimer leur vote lors des élections. Pour les élections ayant un suffrage en présentiel, il est obligatoire de se déplacer à son bureau de vote."
        },
        {
            heading: "Est-ce que j'ai un bureau de vote ?",
            paragraph: "La plupart des citoyens éligibles au vote en France sont automatiquement assignés à un bureau de vote. L'assignation est basée sur les informations connues par le service public, et est en théorie actualisée en cas de changement de domicile.",
            call_to_action: {
                description: "Nous avons créé un outil pour vous aider à retrouver votre bureau de vote en moins de 3 minutes.",
                link: "/trouver-bureau-vote",
                label: "Je trouve mon bureau de vote"
            }
        },
        {
            heading: "Je suis inscrit dans le mauvais bureau de vote. Comment changer de bureau de vote ?",
            paragraph: "Vous n'êtes pas seuls ! Aux élections présidentielles 2022, plus de 6 millions de français étaient inscrits dans la mauvaise commune. Pour changer de bureau de vote, il vous faut vous réinscrire dans la liste électorale de votre nouvelle commune.",
            call_to_action: {
                description: "Le processus d'inscription est relativement complexe. Nous avons créé un outil pour constituer votre dossier en moins de 15 minutes.",
                link: "/constitution-dossier-inscription",
                label: "Je constitue mon dossier"
            }
        },
        {
            heading: "Quelles sont les conditions pour être inscrit à un bureau de vote ?",
            paragraph: "Il y a trois conditions à remplir pour être éligible à l'inscription aux listes électorales de votre commune, et donc à votre bureau de vote : la majorité révolue, la pleine jouissance de ses droits politiques, et la possession de la nationalité française.",
            call_to_action: {
                description: "Nous avons créé un outil pour vous aider à vérifier votre éligibilité au votre en moins de 3 minutes.",
                link: "/verifier-eligibilite-inscription",
                label: "Je vérifie mon éligibilité au vote en France"
            }
        },
        {
            heading: "Je n'ai pas de bureau de vote. Comment m'inscrire dans un  bureau de vote ?",
            paragraph: "Une fois votre éligibilité confirmée, il faut vous inscrire aux listes électorales de votre commune. Si vous avez eu 18 ans récemment, il est probable que vous ayez été inscrit d'office par l'administration nationale.",
            call_to_action: {
                description: "Le processus d'inscription est relativement complexe. Nous avons créé un outil pour constituer votre dossier en moins de 15 minutes.",
                link: "/constitution-dossier-inscription",
                label: "Je constitue mon dossier"
            }
        },
        {
            heading: "Ai-je été radié de mon bureau de vote ?",
            paragraph: "En 2022, 200 000 électeurs ont été radiés de leur bureau de vote sans avoir été informés. Ils ne peuvent donc plus voter dans leur bureau de vote usuel et doivent s'inscrire dans un autre bureau. Pour savoir si vous êtes affectés, il est nécessaire de vérifier votre statut électoral.",
            call_to_action: {
                description: "Nous avons créé un outil pour vous aider à vérifier votre statut électoral en moins de 3 minutes.",
                link: "/verifier-inscription-listes",
                label: "Je vérifie mon statut électoral"
            }
        }
    ]
}

function ArticleBureau2022() {
    useEffect(() => { 
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <ArticleTemplate content={bureau_content} />
    )
}

export default ArticleBureau2022;