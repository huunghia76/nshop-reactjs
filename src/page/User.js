import Form from './../component/form/Form';
function User() {

    const tagName = 'Input' ;
    const Input = Form[tagName] ;

    return (<>
        <div className="n-form-login">

            <div className="main no-login">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true" className="d-flex">Sign up</label>
                        <Input name="username" className="input-form-account" placeholder="User name" type='text' required=""></Input>
                        <Input name="email" className="input-form-account" placeholder="Email" type='email' required=""></Input>
                        <Input name="password" className="input-form-account" placeholder="Password" type='passwword'></Input>
                        <Input name="confirm-password" className="input-form-account" placeholder="Confirm password" type='passwword'></Input>
                        <button type='submit' >Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true" >Login</label>
                        <input className=" input-form-account" type="email" name="email" placeholder="Email" required="" />
                        <input className=" input-form-account" type="password" name="pswd" placeholder="Password" required="" />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
            
        </div>
    </>);
}

export default User;