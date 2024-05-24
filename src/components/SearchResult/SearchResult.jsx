import styled from "styled-components";
import {BASE_URL} from "../../App";
import { Button } from "../../App";
const SearchResult = ({data}) => {
    return (
        <FoodContainer>
      <FoodCards>
         {data?.map(({name,image,text,price}) => (
         <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} alt="food image"/>
            </div>
            <div className="food_info">
                <div className="info">
                 <h3>{name}</h3>   
                 <p>{text}</p> 
               </div>
               <Button> ${price.toFixed(2)}</Button>
            </div>
         </FoodCard>))}
        </FoodCards>
        </FoodContainer>
    )
}

export default SearchResult;

const FoodContainer = styled.section`
background-image: url("images/bg-image.jpg");
background-size: cover;
min-height: calc(100vh - 224px);
`;

const FoodCards = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
padding: 20px 100px;

@media (0 < width < 600px){
  padding-left: 20px;
  justify-content: center;

}
`;
const FoodCard = styled.div`
width: 340px;
height: 167px;

background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

display: flex;
justify-content: center;
gap: 10px;
color: black;

.food_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  max-width: 10px
 button{
  max-width: 60px;
 
 }
 
}  
 h3{
  font-size: 18px;
  padding-top: 4px;
 }
 
`;

