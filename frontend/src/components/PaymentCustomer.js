import React, {useState} from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

export default function PaymentCustomer(){
    const [cardType,setcardType] = useState("");
    const [nameOncard,setnameOncard] = useState("");
    const [cardNo,setcardNo]=useState(""); 
    const [expdate,setexpdate] = useState("");
    const [cvv,setcvv] = useState(""); 
    const [payamount,setpayamount] = useState(""); 
    const [paymentDate,setpaymentDate] = useState(""); 

    function sendData(e){
        //validations
        //

        e.preventDefault();//to prevent normal behavior of submit

        const newPayment = {
            cardType,
            nameOncard,
            cardNo,
            expdate,
            cvv,
            payamount,
            paymentDate
        }
        console.log(newPayment);

        axios.post("http://localhost:8070/cuspayment/insert",newPayment).then(()=>{
            alert("Payment sucessful.Thank you...");
            window.location = `/`;
        }).catch((err)=>{
            alert(err.response.data.message);
            console.log(err.message);
        })
    }


    return(
    <>
        <div style = {{paddingTop : "50px",paddingBottom : "50px",paddingLeft:"550px"}}>
            <table border="1" style = {{width:"50%",backgroundColor: "#F3C4E2"}}>
                <br/><br/><h3 style = {{textAlign : 'center'}}><font face = "Comic sans MS" size ="6" >Payment</font></h3><br/>
                <div className='container'>
            
                <form className='loginform' style={{}} onSubmit = {sendData} class="px-4 py-3">
                    <div class="form-group">
                    <label for="cardType">Card Type</label><br/>
                    <input type="text" class="form-control" id="cardType" placeholder="Enter card type" required 
                    onChange = {(e) =>{
                        setcardType(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="nameOncard">Name on Card</label><br/>
                    <input type="text" class="form-control" id="nameOncard" placeholder="Enter name on card" required
                    onChange = {(e) =>{
                        setnameOncard(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="cardNo">Card Number</label><br/>
                    <input type="text" class="form-control" id="cardNo" placeholder="Enter card number" required
                    onChange = {(e) =>{
                        setcardNo(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="expdate">Exp. Date</label><br/>
                    <input type="text" class="form-control" id="expdate" placeholder="Enter exp. date" required
                    onChange = {(e) =>{
                        setexpdate(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="cvv">cvv</label><br/>
                    <input type="text" class="form-control" id="cvv" placeholder="Enter cvv" required
                    onChange = {(e) =>{
                        setcvv(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="payamount">Payment Amount(Rs.)</label><br/>
                    <input type="text" class="form-control" id="payamount" placeholder="Enter amount" required
                    onChange = {(e) =>{
                        setpayamount(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="paymentDate">Date of Payment</label><br/>
                    <input type="date" class="form-control" id="paymentDate" placeholder="Enter date of payment" required
                    onChange = {(e) =>{
                        setpaymentDate(e.target.value);
                    }}/><br/>
                    </div><br/><br/>

                    <table>
                    <td><button type="submit" className="btn btnEmp btn-primary"><i class="fas fa-money-bill"></i>&nbsp;Pay</button></td>
                    <td><button type="reset" className="btn btnEmp btn-secondary"><i class="fas fa-eraser"></i>&nbsp;Clear</button></td>
                </table>
                </form>
            
                <br/><br/> 
                </div>
            </table>
        </div>   
    </>
    )
}