import { Link } from 'react-router-dom'
import BannerImage from '../../assets/hemicycle-vide.jpeg'

function ArticleTemplate(content) {
    console.log("content =", content.content)

    return (
        <div className="bg-white text-black text-left text-lg ">
            <div className="relative">
                <img
                    className="w-full object-cover rounded-t h-60 lg:h-80 opacity-80"
                    src={BannerImage}
                    alt=""
                    // style={{ height: "400px" }}
                />
            </div>
            <div className='p-6 lg:px-56 lg:py-10'>
                <div>
                    <h1 className='font-bold text-3xl py-6'>{content.content.title}</h1>
                    <p>{content.content.excerpt}</p>
                </div>
                <div className='lg:p-8'>
                    {content.content.sections.map((section) => {
                        return (
                            <article className='py-2 lg:px-24'>
                                <h2 className='font-medium text-2xl py-2'>{section.heading}</h2>
                                <p>{section.paragraph}</p>
                                {section.call_to_action ?
                                    <div className="bg-indigo-200 p-4 mt-4 rounded-md">
                                        <p>{section.call_to_action.description}</p>
                                        <Link to={section.call_to_action.link} className="inline lg:block text-indigo-500 font-bold">{section.call_to_action.label} →</Link>
                                    </div>
                                    : <></>}
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticleTemplate;