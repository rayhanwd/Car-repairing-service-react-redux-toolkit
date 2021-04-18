import React,{ useContext }  from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig/firebase.config';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { UserContext } from './../../App';

const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const [loggedUser, setLoggedUser] = useContext(UserContext);
   
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleAuth = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { email, displayName,photoURL } = result.user;
                const signInUser = { name: displayName, email,photo:photoURL};
                setLoggedUser(signInUser);
                storeAuthToken();

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    const signOutAuth = () => {
        firebase.auth().signOut().then(() => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: false
            }
            return signedOutUser;
        }).catch((error) => {

        });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {

            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function (error) {

        });
    }
    return (
        <div class="bg-light h-100">
            <div class="container">
                <h2 class="pt-4 pl-3">Hourse Vpn User LogIn</h2>
                <div class="row">
                    <div style={{ margin: "20% 0%" }} class="col-sm-6">
                        <div class="card-body">
                            <h2 class="card-title">Hourse Vpn Account</h2>
                            <p class="card-text">Manage your Hourse services</p>
                            <button onClick={googleAuth} class="custom-btn">Log in With Google Account</button>
                        </div>
                    </div>
                    <div style={{ margin: "20% 0%" }} class="col-xs-12 col-md-6 col-md-pull-6">
                        <div class="mr-md-8">
                            <h2 class="Title h5 mb-5 mb-sm-6">Get secure and private access to the internet</h2>
                            <p class="Text c-bw-12">
                                <span>A VPN service provides you a secure, encrypted tunnel for online traffic to flow. Nobody can see through the tunnel and get their hands on your internet data. HourseVpn is the best VPN if you’re looking for a peace of mind when on public Wi-Fi. Securely access personal information or work files, encrypt your internet connection, and keep your browsing history private. Buy a VPN to get online privacy and security.</span>
                            </p>
                            <div class="mt-6">
                                <button class="custom-btn">See All Features</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;