import "./DescriptionCard.css"

interface CardProps {
    title:string;
    content:string;
    color:string;

}

export const DescriptionCard:React.FC<CardProps> = ({title, content, color}) => {
    const buttonMouseOverHandler = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        const btn: HTMLButtonElement = event.currentTarget;
        btn.style.background = `linear-gradient(${color}, ${color}) 0 90% / 100% 8px no-repeat`;
    };
    //Is there any easier way?
    //https://www.kindacode.com/article/react-typescript-onmouseover-onmouseout-events/
      const buttonMouseOutHandler = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        const btn: HTMLButtonElement = event.currentTarget;
        btn.style.background = "white";
      };
    return <div className="Description">
        <div className="position">
            <h1 className="title">{title}</h1>
            <p className="content">{content}</p>
            <button id="hover" 
                onMouseOver={buttonMouseOverHandler}
                onMouseOut={buttonMouseOutHandler}
            >
                LEARN MORE
            </button>
            
        </div>
        
    </div>
}