import React, {useState} from "react";
import axios from "axios";
import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
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
        if(nameOncard.trim().length < 4){
            alert("Please check name on card and try again!");
            e.preventDefault();
        }else if(cardNo.trim().length < 16){
            alert("Invalid card number!");
            e.preventDefault();
        }else if(cvv.trim().length < 3){
            alert("Invalid CVV");
            e.preventDefault();
        }else if(payamount === "0"){
            alert("Please enter the amount you wish to pay");
            e.preventDefault();
        }
        else{

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
    }


    return(
    <>
        <div className="addorder" style = {{paddingTop : "50px",paddingBottom : "50px",paddingLeft:"550px"}}>
            <table border="1" style = {{width:"50%"}}>
                <br/><br/><h3 style = {{textAlign : 'center'}}>Payment</h3><br/><br/>
                <div className='container'>
            
                <form className='loginform' onSubmit = {sendData} class="px-4 py-3">
                    <div class="form-group">
                    <label for="cardType">Card Type</label><br/>
                    <select className="form-select form-control" id="cardType" 
                    onChange = {(e) =>{
                        setcardType(e.target.value);
                    }} required>
                        <option value="" disabled selected>Select Card Type</option>
                        <option value="Visa">Visa</option>
                        <option value="Master">Master</option>
                    </select>
                    </div><br/>
                    <div class="form-group">
                    <label for="nameOncard">Name on Card</label><br/>
                    <input type="text" class="form-control" id="nameOncard" placeholder="A.G.Andria" required
                    onChange = {(e) =>{
                        setnameOncard(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="cardNo">Card Number</label><br/>
                    <input type="text" class="form-control" id="cardNo" placeholder="xxxx xxxx xxxx xxxx" maxLength={16} required
                    onChange = {(e) =>{
                        setcardNo(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="expdate">Exp. Date</label><br/>
                    <input type="text" class="form-control" id="expdate" placeholder="xx/xx" required
                    onChange = {(e) =>{
                        setexpdate(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="cvv">cvv</label><br/>
                    <input type="text" class="form-control" id="cvv" placeholder="xxx" maxLength={3} required
                    onChange = {(e) =>{
                        setcvv(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="payamount">Payment Amount(Rs.)</label><br/>
                    <input type="text" class="form-control" id="payamount" placeholder="Rs. xxxx.xx" required
                    onChange = {(e) =>{
                        setpayamount(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="paymentDate">Date of Payment</label><br/>
                    <input type="date" class="form-control" id="paymentDate" required
                    onChange = {(e) =>{
                        setpaymentDate(e.target.value);
                    }}/><br/>
                    </div><br/><br/>

                    <table>
                    <td><Button type="submit" className="btnspace"><i class="fas fa-money-bill"></i>&nbsp;Pay</Button></td>
                    <td><button type="reset" className="btn btn-light btn-lg"><i class="fas fa-eraser"></i>&nbsp;Clear</button></td>
                </table>
                </form>
            
                <br/><br/> 
                </div>
            </table>
        </div>   
    </>
    )
}