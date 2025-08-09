import styled from "styled-components";
import Event  from "./Event";

const Page = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap: 40px;
    background:rgb(189, 214, 129);
    width: 1500px;
    padding: 80px;
    margin-left:auto;
    margin-right:auto;
`



const PageBoard = ({recipes}) =>{
    return(
        <Page>
            {recipes.map((r, index)=>
            <Event
                key={index}
                photo={r.photo}
                name={r.name}
                time={r.time}
                calories={r.calories}
                difficulty={r.difficulty}
            />
)}
        </Page>
    )
    
}

export default PageBoard