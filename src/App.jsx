import { useState,useEffect } from 'react';
import './App.css'
import styled from "styled-components";
import SearchResult from './components/SearchResult/SearchResult';
import Contact from './components/Contact/Contact';
export const BASE_URL = "http://localhost:9000";

function App() {
   
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[filteredData, setFilteredData] = useState(null)
    const[selectedBtn,setSelectedBtn] = useState("all");
    
    const [contactData, setContactData] = useState({first_name:"",
    last_name: "",
    email: "",
    subject: "",
    message: ""
       })
     
    const handleChange = (event) => {
      const {name, value} = event.target;
      setContactData(prev => ({...prev,[name]:value}));
    }   
    const handleSubmit = (event) => {
       
       event.preventDefault();
       if(contactData.first_name === "" || contactData.last_name === "" || contactData.email === "" || 
        contactData.subject === "" || contactData.message === "")
       {
        alert("Please enter all the fields");
       }
       else {

       
       alert(`First Name: ${contactData.first_name} Last Name: ${contactData.last_name} 
       Email: ${contactData.email} Subject: ${contactData.subject} Message: ${contactData.message} `)
       
    }}
   // fetch data
   // use the react useEffect hook to break or limit the infinite loop
   
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try{
          const response = await fetch(BASE_URL);
          const json = await response.json();
          
          setData(json);
          setFilteredData(json);
          setLoading(false);
          // console.log(json);
        }
        catch(e){
           setError("Unable to fetch data");
        }
      }
      fetchData();
   },[]);
   
   const searchFood = (e) => {
      const searchValue = e.target.value;
      // console.log(searchValue)
      if(searchValue === ""){
         setFilteredData(null);
         
      }
      const filterdata = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredData(filterdata);
    }

   const filterFood = (type) => {
  
      if (type === "all") {
        setFilteredData(data);
        setSelectedBtn("all");
        return;
      }
      const filter = data?.filter((value) => value.type.toLowerCase().includes(type));
      setFilteredData(filter);
      setSelectedBtn(type);
   }  
  
   const filterType = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
   ]

   if(error) return <div>{error}</div>;
   if (loading) return <div>Loading...</div>;
    

 return (
    <Container>
      <TopSection>
        
      <div className='logo'>
        <img src="images/logo.png" alt="logo"/>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search Food' onChange={searchFood} />
      </div>
      </TopSection>
      <FilterContainer>
       {/* use map method to prevent too many repeated buttons */}
       
       <Button onClick={() => filterFood("all")}>Home</Button>
       <DropContainer>
         <div className='dropdown'>
       <Button>Menu </Button>
        
         <div className='dropdown_content'>
        {filterType.map((value) => (
          
         <Button isSelected ={selectedBtn === value.type} 
         key= {value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
         
        
       ))} 
        </div>  
       </div>
      
       </DropContainer>
      
       <Button>Contact</Button>
       
        
      </FilterContainer>
      
        <SearchResult data={filteredData} />
        
        <Contact contactData={contactData} onSubmit={handleSubmit} handleChange={handleChange} />
      </Container>
      
  )
}

export default App

const Container = styled.div`
background-color: #323334;

.logo{
  padding: 0 30px;
}
`;
const TopSection = styled.section`
display: flex;
justify-content: space-between;
.search {
padding: 0 60px;  
margin-top: 60px;
}
.search
  input{
    padding: 0 10px;
    height: 40px;
    background-color: transparent;
    color: white;
    border: 1px solid red;
    border-radius: 4px;
  }
  @media (0 < width < 600px){
    flex-direction: column;
    height: 220px;
    margin-bottom: 80px;
    .search 
     {
     padding-left: 120px
     }
    
   }
  }
`;
const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 10px;
padding-bottom: 40px;
`;
export const Button = styled.button`
background-color: ${({isSelected}) => isSelected ? "darkred": "red" };
color: white;
padding: 8px;
border: none;
cursor: pointer;
&:hover{
  background-color: darkred;
 
}
`;
const DropContainer = styled.div`
 .dropdown{
  position: relative;
  display: inline-block;
 }
 .dropdown_content{
  display: none;
  position: absolute;
  background-color: red;
  max-width: 200px;
  width: 100px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
 }
 .dropdown:hover .dropdown_content{
  display: block;
  
}

`;
