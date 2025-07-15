import DecorImage from "../../ShopPage/ShopAssests/HomeDecor.png";
import { Formik,Form } from "formik";
import * as Yup from "yup";
import Input from "../../../Shared/Components/Input";
import { useSelector } from "react-redux";
import Button from "../../../Shared/Components/Button";
import { useState } from "react";


const BillingSchema = Yup.object().shape({
  name:Yup.string().required("Name is required"),
  surname:Yup.string().required("Surname is required"),
  email:Yup.string().email("Invalid email").required("Email is required"),

  zipcode: Yup.string()
  .length(5, "Zip code must be exactly 5 digits")
  .required("Enter your Zip code"),

// Phone number validation (must be exactly 10 digits)
phone: Yup.string()
  .length(10, "Phone number must be exactly 10 digits")
  .required("Enter your number"),

  address:Yup.string().required("Enter your address")
})

const Checkout = () => {

  const [BankState,setBankState] = useState(false)
  const [BankPayment , setBankPayment] = useState(false)
  const [PayonDeliveryState , setPayonDeliveryState] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState("");
  const Products = useSelector((state) => state.Cart.products)
  const TotalPrice = useSelector((state) => state.Cart.totalPrice)
  return (
   
    <Formik
    initialValues={{name:"" , email: "" , zipcode: "" , phone:"" , address:"" , companyname:""}}
    validationSchema={BillingSchema} 
    onSubmit={(values) => {
      console.log("Form Submitted:", values);
    }}
        >

    <Form>
      
      <img src={DecorImage} className="w-full max-h-80"/>

      <div className="lg:px-12 sm:px-10 px-5 py-16 flex lg:flex-row flex-col justify-between">
        

        <div className="max-w-[588px] sm:px-12 px-5 py-16">

            <h1 className="font-bold text-3xl">Billing Details</h1>

              <div className="flex flex-col gap-9">

                <div className="flex sm:flex-row flex-col gap-3 mt-6" >
                      <div>
                           <Input label="First Name" name="name" placeholder="Enter your First name" className="px-2" 
                            />
                      </div>

                      <div>
                          <Input label="Surname" name="surname" placeholder="Enter your Surname" className="px-2" />
                      </div>   
                </div>

                <div>
                  <Input label="Company Name (optional)" name="companyname" placeholder="Enter your Company name" 
                   />
                </div>

                <div>
                  <Input label="Provinces" name="Provinces" placeholder="Enter your Provinces" 
                  options={[
                    { value: "1", label: "Western Provinces" },
                    { value: "3", label: "Eatern Provinces" },
                    { value: "2", label: "Northern Provinces" },
                  ]}/>
                </div>

                <div>
                  <Input label="Street address" name="address" placeholder="Enter your address" className="py-6"/>
                </div>

                <div>
                  <Input label="Country" name="Country" placeholder="Enter your Provinces" 
                  options={[
                    { value: "1", label: "India" },
                    { value: "2", label: "Canada" },
                    { value: "3", label: "Ireland" }
                  ]}/>
                </div>

             

                <div>
                  <Input label="Zip/Postal Code" name="zipcode" placeholder="Enter your Zip/Postal Code"/>
                </div>

                <div>
                  <Input label="Phone Number" name="phone"  placeholder="Enter your Phone Number"/>
                </div>

                <div>
                  <Input label="Email" name="email" type="email" placeholder="Enter your Email" />
                </div>

                <div>
                  <Input label="" name="Additional Info" placeholder="Additional Info" className="py-6" />
                </div>

        </div>
      </div>




{/* ------------------- Bill Details --------------------------------------------------------- */}
<div className="max-w-[558px] px-9 py-20 w-full rounded-xl h-fit">
  <div className="grid grid-cols-2 p-4 font-bold  rounded-xl">
        <h2>Product</h2>
        <h2 className="">Subtotal</h2>
  </div>
  <div className="rounded-xl" >
    {Products.map((item, index) => (
      <div key={index} className="border rounded-lg p-4  w-full">
        <div className="grid grid-cols-2 gap-6 ">
          <h2 className=" whitespace-nowrap ">{item.name} x ${item.price} </h2>
          <p className="  ">${item.totalPrice} </p>
        </div>
      </div>
    ))}
  </div>

  <div className="flex  sm:px-8 sm:gap-x-40  p-4 items-center sm:justify-start justify-between  rounded-xl sm:max-w-full max-w-80 w-full">
    <h2 className="font-bold sm:text-xl">Total:-</h2>
    <h1 className="sm:text-xl">${TotalPrice}</h1>
  </div>


    <div className="border-t-2 mt-8">
        <div className="mt-9">
          <div className="flex gap-3 items-center">
          <button 
              className={`w-5 h-5 ${BankState ? "bg-black" : "bg-white"} rounded-full border-2 border-gray-400`} 
              onClick={() => setBankState(!BankState)}
            ></button>
            <p>Direct Bank Transfer</p>
          </div>

            <p className={`${BankState ? "text-black" : "text-gray-400"} mt-2`}>Make your payment directly into our bank account. Please use your Order ID as 
              the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>


          

                                    {/* Direct Bank Transfer Button */}
                                    <div className="flex gap-6 mt-6">
                                      <button  
                                        className={`w-5 h-5 ${BankState && selectedPayment === "bank" ? "bg-black" : "bg-white"} 
                                                    rounded-full border-2 border-gray-400 
                                                    ${!BankState ? "opacity-50 cursor-not-allowed" : ""}`}  
                                        disabled={!BankState}  // Disable if BankState is false
                                        onClick={() => {
                                          if (BankState) {
                                            setSelectedPayment(selectedPayment === "bank" ? "" : "bank"); // Toggle selection
                                          }
                                        }}
                                      >
                                      </button>
                                      <p className={`${BankState && selectedPayment === "bank" ? "text-black" : "text-gray-400"}`}>
                                        Direct Bank Transfer
                                      </p>
                                    </div>

                                    {/* Cash on Delivery Button */}



                                    <div className="flex gap-6 mt-2">
                                      <button  
                                        className={`w-5 h-5 ${BankState && selectedPayment === "cod" ? "bg-black" : "bg-white"} 
                                                    rounded-full border-2 border-gray-400 
                                                    ${!BankState ? "opacity-50 cursor-not-allowed" : ""}`}  
                                        disabled={!BankState}  // Disable if BankState is false
                                        onClick={() => {
                                          if (BankState) {
                                            setSelectedPayment(selectedPayment === "cod" ? "" : "cod"); // Toggle selection
                                          }
                                        }}
                                      >
                                      </button>
                                      <p className={`${BankState && selectedPayment === "cod" ? "text-black" : "text-gray-400"}`}>
                                        Cash on Delivery
                                      </p>
                                    </div>

                        <p className="mt-4">Your personal data will be used to support your experience throughout this website, 
                          to manage access to your account, and for other purposes described in our privacy policy.</p>


        </div>
    </div>





  <div className="flex justify-center mt-9">
    <div>
        <Button
        content="Proceed Further"
        variant="outlined"
        size="medium"
        className="rounded-xl"
        type="submit"
        />
    </div>
  </div>



</div>


      </div>
      

    </Form>
  </Formik>
  
  )
}

export default Checkout