import styled from "styled-components";
import { Button } from "../../App"; 
const Contact = ({contactData,onSubmit,handleChange}) => {
    return (
        <ContactContainer>
            <div className="heading">
                <h2>CONTACT US</h2>
            </div>
            <div className="heading-2">
                <p>DROP US A LINE AND WE'LL GET BACK TO YOU</p>
            </div>
            <FormContainer>
              <form onSubmit={onSubmit}>
               <div className="first-name-section">
                 <label htmlFor= "first_name">First Name</label><br/>
                  <input type="text" name="first_name" value={contactData.first_name} onChange={handleChange} />
                  
                  </div>
               <div className="last-name-section">
               <label htmlFor= "last_name">Last Name</label><br/>
                 <input type="text" name="last_name" value={contactData.last_name} onChange={handleChange}/><br/>
               </div>
                <div className="email-section">
               <label htmlFor= "email">Email</label><br/>
                 <input type="email" name="email" value={contactData.email} onChange={handleChange}/>
               </div>
                <div className="subject-section">
               <label htmlFor= "text">Subject</label><br/>
                 <input type="text" name="subject" value={contactData.subject} onChange={handleChange}/>
               </div>
               <div className="message-section">
               <label htmlFor= "text">Message</label><br/>
                 <input type="text" name="message" value={contactData.message} onChange={handleChange}/>
               </div>
               <div className="button-section">
               
              <Button>SUBMIT</Button>
             </div>
             </form>
            </FormContainer>
            
       </ContactContainer>
       
    )
}

export default Contact;

const ContactContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 40px;
 .heading-2  p{
   padding: 10px 0px;
   font-size: 18px;
 }
`;
const FormContainer = styled.section`
 form {
 padding: 10px;
 display: flex;
 
 flex-wrap: wrap;
 justify-content: center;
 width: 500px;
 gap: 20px;
 }
 .button-section
 button{
   width: 100px;
   height: 50px;
   margin-left: 70px;
   margin-top: 10px;
   background-color: transparent;
   border: 1px solid white;
   &:hover {
   background-color: red;
   }
 }
 .first-name-section input,
 .last-name-section input,
 .email-section input,
 .subject-section input,
 .message-section input
  {
    border: none;
    border-bottom: 2px solid white;
    background-color: #323334;
    color: white;
    height: 40px;
    padding: 0px 5px;
   &:hover {
    border-bottom: 3px solid white;
   } 
  }
`;
