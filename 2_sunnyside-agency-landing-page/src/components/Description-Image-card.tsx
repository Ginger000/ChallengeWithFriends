import "./Description-Image-card.css"

interface DIprops{
    title:string;
    content:string
    image:string
}

export const DescriptionImageCard:React.FC<DIprops>=({title, content, image})=>{
    return <div className="Description-Image-card">
        <div className="positionWrapper">
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
        </div>
            

            
            <img src={image} alt="" />
    </div>
}