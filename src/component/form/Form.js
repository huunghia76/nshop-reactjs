const Form =  {
    Input({className, placeholder,type, name, required}){
        let props ={className, placeholder, type, name ,required}

        return <input {...props}  />
    },
    Email({className}){
        return <input className={className} type="email" />
    },
    Checkbox(){
       return <input type="checkbox" />
    },
    Password(){
       return <input type="password" />
    }
}

export default Form;
// How to use component form(cách sử dụng)
// khai báo thuộc tính
    // const type = 'Checkbox' ; tên function
    // const Input = Form[type];
//Gọi biến mới dưới dạng thuộc tính
    //<Input></Input>