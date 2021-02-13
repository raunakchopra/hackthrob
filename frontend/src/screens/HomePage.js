import React,{useState} from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const HomePage = () => {
    const [login, setLogin] = useState(false)
    const [data, setData] = useState({})
    const [picture, setPicture] = useState('')

    const responseFacebook = (response) => {
        console.log(response)
        setData(response);

        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } 
        else {
            setLogin(false);
        }
        
    }
    return (
        <div className="flex flex-col w-screen mt-8">
            {/* <div className="w-full justify-between flex">
                <div className="px-6 py-2 bg-schemeColor">
                    <h1 className="text-white font-bold">Logo</h1>
                </div>
                <div>
                    <button onClick={() => setShowModal(true)} className="outline-none text-white py-2 px-6 rounded-xl bg-schemeColor font-bold text-xl">Login</button>
                </div>
            </div> */}
            {/* <div class="">

            </div> */}
            <div className="bg-schemeColor w-1/3 h-full rounded-3xl self-center py-10 px-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                <h1 className="text-white font-bold mb-8 text-center font-sans text-3xl">Get Started</h1>
                <h3 className="font-bold text-white mb-8 text-xl text-center mb-2"> By Clicking Log In, you agree to our terms. Learn how we proecess your data in our Privacy Policy and Cookie Policy</h3>
                <div className="flex flex-col xl:w-2/5 text-white self-center items-center">
                    <button className="border-white border-4 w-full md:w-3/4 py-2 text-white rounded-full text-xl font-bold mb-4"><div className="flex pl-8"><img src="https://img.favpng.com/15/12/25/google-logo-google-adwords-g-suite-google-account-png-favpng-ZPDpvjf5PW8XaAnw6V9PQkcut.jpg" className="lg:h-12 lg:w-12 h-8 w-8 rounded-full" alt="google" /> <p className="md:ml-6 ml-2 self-center">LOG IN WITH GOOGLE</p> </div></button>
                    <FacebookLogin 
                        appId="218984373289163"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                        render = {(renderProps) => (
                            <button onClick={renderProps.onClick} className="border-white border-4 w-full md:w-3/4 py-2 text-white rounded-full text-xl font-bold mb-4"><div className="flex pl-8"><img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" className="lg:h-12 lg:w-12 h-8 w-8 rounded-full" alt="google" /> <p className="md:ml-6 ml-2 self-center">LOG IN WITH FACEBOOK</p> </div></button>
                        )}
                        />
                    {/* <button className="border-white border-4 w-2/3 py-2 text-white rounded-full text-xl font-bold mb-4"><div className="flex pl-8"><img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" className="h-12 w-12 rounded-full" alt="google" /> <p className="ml-4 self-center">LOG IN WITH FACEBOOK</p> </div></button> */}
                    <h1 className="font-bold text-lg"> Trouble Logging In?</h1>            
                </div>
            </div>
            <div className="w-full">

            </div>
            
        </div>
    )
}

export default HomePage