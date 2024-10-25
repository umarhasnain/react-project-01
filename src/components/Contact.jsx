import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
   <div className="mt-[100px]">
    <h1 className="text-center m-8 text-2xl font-bold">Contact Us</h1>
     <form className="flex flex-col justify-center items-center gap-8" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input type="text" className="border-2 rounded-lg border-black h-[40px] w-[250px] p-2" placeholder="Enter Your Name"{...register("name")} />
      {errors.name && <span>This field is required</span>} 
      
      <input type="text" className="border-2 rounded-lg border-black h-[40px] w-[250px] p-2" placeholder="Enter Your Email"{...register("email")} />
      {errors.email && <span>This field is required</span>} 
      
      <input type="text" className="border-2 rounded-lg border-black h-[40px] w-[250px] p-2" placeholder="Enter Your Message"{...register("message")} />
      {errors.message && <span>This field is required</span>} 
     
      <button type="submit" className="border-2 border-black rounded-lg w-[100px] h-[40px] color-white text-xl">Submit</button>
      
      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>}  */}
      
      
    </form>
   </div>
  );
}